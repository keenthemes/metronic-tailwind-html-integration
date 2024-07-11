import {
	KTDataTable,
	KTDataTableConfigInterface,
	KTDataTableDataInterface,
	KTDataTableInterface,
	KTDatatableResponseDataInterface,
} from '../../core/components/datatable';

const apiUrl: string = /^(localhost|127.0.0.1)$/.test(window.location.hostname)
	? 'http://127.0.0.1:8001/metronic-tailwind-html/demo1/account/security/allowed-ip-addresses/_data.html'
	: 'https://keenthemes.com/metronic/tailwind/demo1/account/security/allowed-ip-addresses/_data.html';
const element: HTMLElement = document.querySelector('#ip_addresses_table') as HTMLElement;


interface IPAddressData extends KTDataTableDataInterface {
	id: number;
	status: string;
	ipAddress: string;
	lastSession: string;
	label: string;
	method: string;
}

// Example usage of the plugin with server-side API, pagination, and sorting
const dataTableOptions: KTDataTableConfigInterface = {
	// Initialization options for the DataTable
	apiEndpoint: apiUrl,

	// mapResponse: (responseData): KTDatatableResponseDataInterface => {
	//     // Custom transformation logic for custom API
	//     return {
	//         data: responseData.data, // Assuming the response has an 'items' array
	//         totalCount: responseData.totalCount // Assuming the response has a 'total' field
	//     };
	// },

	// mapRequest: (query: URLSearchParams): URLSearchParams => {
	//     // Custom query mapping logic
	//     query.set('test', 'test');
	//     return query;
	// },

	// pageSizes: [5, 10, 20, 30, 50],

	pageSize: 10,
	// stateSave: false,
	stateNamespace: 'allowed-ip-addresses',
	columns: {
		select: {
			render: (
				item: string,
				data: IPAddressData,
				context: KTDataTableInterface
			): string => {
				const checkbox = document.createElement('input');
				checkbox.className = 'checkbox checkbox-sm';
				checkbox.type = 'checkbox';
				checkbox.value = data.id.toString();
				checkbox.setAttribute('data-datatable-row-check', 'true');
				return checkbox.outerHTML.trim();
			},
		},
		status: {
			title: 'Status',
			render: (item: string): string => {
				return `<span class="badge badge-dot size-2 ${item}"></span>`;
			},
			createdCell(cell) {
				cell.classList.add('text-center');
			},
		},
		ipAddress: {
			title: 'IP Address',
		},
		lastSession: {
			title: 'Last Session',
		},
		label: {
			title: 'Label',
		},
		method: {
			title: 'Method',
		},
		edit: {
			render: (
				item: string,
				data: IPAddressData
			): string => {
				const button = document.createElement('button');
				button.className = 'btn btn-sm btn-icon btn-clear btn-light';
				button.innerHTML = '<i class="ki-outline ki-notepad-edit"></i>';
				return button.outerHTML.trim();
			},
			createdCell: (cell, cellData, rowData) => {
				cell.querySelector('.btn').addEventListener('click', () => {
					alert(`Clicked on edit button for row ${rowData.label}`);
				});
			},
		},
		delete: {
			render: (
				item: string,
				data: IPAddressData
			): string => {
				const button = document.createElement('button');
				button.className = 'btn btn-sm btn-icon btn-clear btn-light';
				button.innerHTML = '<i class="ki-outline ki-trash"></i>';
				return button.outerHTML.trim();
			},
			createdCell: (cell, cellData, rowData) => {
				cell.querySelector('.btn').addEventListener('click', () => {
					alert(`Clicked on delete button for row ${rowData.label}`);
				});
			},
		},
	},
};

const dataTable = new KTDataTable<IPAddressData>(element, dataTableOptions);

document.querySelector('#select_ip_btn').addEventListener('click', () => {
	const selected = dataTable.getChecked();
	if (selected.length) {
		alert(`Selected rows: ${selected}`);
	} else {
		alert('No rows selected');
	}
})

// Cache elements with the data-datatable-search attribute
const searchElements = document.querySelectorAll<HTMLInputElement>('[data-datatable-search]');

searchElements.forEach((element) => {
	// Get the ID of the datatable to be searched
	const tableId = element.getAttribute('data-datatable-search');
	// Find the corresponding datatable element
	const datatable = document.querySelector<HTMLElement>(tableId);

	if (datatable) {
		// Retrieve the datatable instance once
		const dataTableInstance = (datatable as any).instance;

		// Add the event listener for the keyup event
		element.addEventListener('keyup', () => {
			dataTableInstance.search(element.value);
		});
	}
});
