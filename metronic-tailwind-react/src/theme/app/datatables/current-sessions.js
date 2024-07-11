class DataTableManager {
	constructor(tableElement, apiUrl) {
		this.tableElement = tableElement;
		this.apiUrl = apiUrl;
		this.dataTableOptions = this.createDataTableOptions();
		this.dataTable = new KTDataTable(tableElement, this.dataTableOptions);
		this.filterMap = this.createFilterMap();
	}

	static isLocalhost() {
		return /^(localhost|127.0.0.1)$/.test(window.location.hostname);
	}

	/**
	 * Creates the options for the DataTable.
	 *
	 * @return {Object} The options for the DataTable.
	 */
	createDataTableOptions() {
		return {
			apiEndpoint: this.apiUrl,
			pageSize: 10,
			columns: {
				select: {
					render: (item, data, context) => {
						const checkbox = document.createElement('input');
						checkbox.className = 'checkbox checkbox-sm';
						checkbox.type = 'checkbox';
						checkbox.value = data.id.toString();
						checkbox.setAttribute('data-datatable-row-check', 'true');
						return checkbox.outerHTML.trim();
					},
				},
				user: {
					title: 'Person',
					render: (item) => {
						const prefix = DataTableManager.isLocalhost() ? 'metronic-tailwind-html' : 'metronic/tailwind';
						return `
              <div class="flex items-center gap-2.5">
                <div class="shrink-0">
                  <img class="h-9 rounded-full" src="/static/${prefix}/dist/assets/media/avatars/${item.avatar}">
                </div>
                <a class="leading-none font-semibold text-gray-900 hover:text-primary" href="#">
                  ${item.name}
                </a>
              </div>
            `;
					},
				},
				browser: {
					title: 'Browser',
					render: (item) => {
						return `
              <div class="flex items-center gap-2">
                <i class="ki-outline ki-chrome text-gray-700 text-lg"></i>
                <span class="text-gray-700">${item.name}</span>
              </div>
            `;
					},
				},
				ipAddress: {
					title: 'IP Address',
				},
				location: {
					title: 'Location',
					render: (item) => {
						const prefix = DataTableManager.isLocalhost() ? 'metronic-tailwind-html' : 'metronic/tailwind';
						return `
              <div class="flex items-center gap-1.5">
                <img alt="flag" class="h-4 rounded-full" src="/static/${prefix}/dist/assets/media/flags/${item.flag}">
                <span class="leading-none text-gray-700">${item.name}</span>
              </div>
            `;
					},
				},
				action: {
					title: '',
					render: (item) => {
						return `
              <button class="btn btn-icon btn-light btn-clear btn-sm">
                <i class="ki-outline ki-dots-vertical"></i>
              </button>
            `;
					},
					createdCell: (cell, cellData, rowData) => {
						cell.querySelector('.btn').addEventListener('click', () => {
							alert(`Clicked on action button for row ${rowData.user.name}`);
						});
					},
				},
			},
		};
	}

	/**
	 * Creates a map of filter elements based on the data-datatable-filter-column attribute.
	 *
	 * @return {Map<string, HTMLSelectElement>} A map of filter elements, where the key is the value of the data-datatable-filter-column attribute and the value is the corresponding HTMLSelectElement.
	 */
	createFilterMap() {
		const filterElements = document.querySelectorAll(
			'select[data-datatable-filter-column]'
		);
		return new Map(
			Array.from(filterElements).map((el) => [
				el.getAttribute('data-datatable-filter-column'),
				el,
			])
		);
	}

	/**
	 * Initialize the filters based on the state and map the filter elements to their corresponding datatable columns.
	 */
	initializeFilters() {
		this.dataTable.getState().filters.forEach(({ column, value }) => {
			if (this.filterMap.has(column)) {
				const filterEl = this.filterMap.get(column);
				if (filterEl !== null) {
					filterEl.value = value || '';
				}
			}
		});

		this.filterMap.forEach((el, column) => {
			el.addEventListener('change', () => {
				this.dataTable
					.setFilter({
						column,
						type: 'text',
						value: el.value || '',
					})
					.redraw();
			});
		});
	}

	/**
	 * A debounced function that delays invoking the input function until after wait milliseconds have elapsed since the last time the debounced function is invoked.
	 *
	 * @param {Function} func - The function to debounce.
	 * @param {number} wait - The number of milliseconds to delay.
	 * @return {Function} The debounced function.
	 */
	debounce(func, wait) {
		let timeout;
		return function (...args) {
			const context = this;
			clearTimeout(timeout);
			timeout = setTimeout(() => func.apply(context, args), wait);
		};
	}

	/**
	 * Initializes the search functionality for the current table.
	 * It sets up a debounced search event listener on the search element
	 * to perform a search on the datatable whenever the user types in the search input.
	 *
	 * @return {void}
	 */
	initSearch() {
		const searchElement = document.querySelector('[data-datatable-search="true"]');
		if (this.dataTable && searchElement) {
			const debouncedSearch = this.debounce(() => {
				this.dataTable.search(searchElement.value);
			}, 300);
			searchElement.addEventListener('keyup', debouncedSearch);
		}
	}

	/**
	 * Creates a new instance of DataTableManager with the specified tableElement and apiUrl.
	 * Initializes filters and search functionality for the instance.
	 *
	 * @param {void}
	 * @return {void}
	 */
	static createInstance() {
		const apiUrl = DataTableManager.isLocalhost()
			? 'http://127.0.0.1:8001/metronic-tailwind-html/demo1/account/security/current-sessions/_data.html'
			: 'https://keenthemes.com/metronic/tailwind/demo1/account/security/current-sessions/_data.html';
		const tableElement = document.querySelector('#current_sessions_table');

		const dataTableManager = new DataTableManager(tableElement, apiUrl);
		dataTableManager.initializeFilters();
		dataTableManager.initSearch();
	}
}

KTDom.ready(() => {
	DataTableManager.createInstance();
});
