<p>
	<a href="https://keenthemes.com/metronic">
		<img src="https://keenthemes.com/static/metronic/tailwind/docs/dist/assets/media/app/default-logo.svg" alt="Metronic"/>
	</a>
</p>

## Setup example

- Copy the `src` folder from the `metronic-tailwind-html` package and paste it into the Vue `src` directory.

- Rename the copied folder to `metronic` so that the directory structure should now look like this: `src/metronic`. This step imports the necessary styles and assets from the original HTML package into your Vue project.

- In the `src/metronic/core` folder, delete the unnecessary `index.ts` file. This file is not needed for Single Page Application (SPA) integration as it could cause conflicts. Instead, rename the `index.spa.ts` file to `index.ts` to ensure proper integration.

- Remove `KTLayout` instance initialization from `src/metronic/app/layouts/demo1.js`.

  ```js
  KTDom.ready(() => {
  	KTLayout.init();
  });
  ```
- Fix the import paths in `src/metronic/css/styles.css` so that the final paths look like this:
  ```css
  /* Tailwind core */
  @import 'tailwindcss';
  
  /* Tailwind scan sources */
  @source '@keenthemes/ktui/styles.css';
  
  /* Theme configs */
  @import "./config.ktui.css";
  
  /* KTUI styles */
  @import '@keenthemes/ktui/styles.css';
  
  /* Metronic components  */
  @import "./components/index.css";
  
  /* Demos */
  @import "./demos/demo1.css";
  ```

- Copy the `media` folder from the `metronic-tailwind-html` package's `dist/assets/media` directory into your Vue project's `public` directory.

- Install the required Node.js packages by running `npm install`. Start the Vue development server by running `npm run dev`.

- Generate Tailwind CSS output using the command `npm run build:css`.
