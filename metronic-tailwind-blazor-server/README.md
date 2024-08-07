<p>
	<a href="https://keenthemes.com/metronic">
		<img src="https://keenthemes.com/static/metronic/tailwind/docs/dist/assets/media/app/default-logo.svg" alt="Metronic"/>
	</a>
</p>

## Setup example

- Copy entire `metronic-tailwind-html` folder and paste it into the Blazor app root directly.
- Rename copied folder to `metronic`.
- Change output folder paths in following files.<br>
  <b>webpack.config.js</b>
  ```
  ...
  const dist = value.dist.replace("../wwwroot/assets", "");
  ...
  output: {
     ...
     path: path.resolve(__dirname, "../wwwroot/assets"),
     ...
  },
  ...
  ```
- Change your terminal directory to `metronic`.
  ```
  cd metronic
  ```
- Install npm packages and build theme assets using the following command.<br>
  ```
  npm install & npm run dev
  ```
- Copy media folder from `metronic/dist/` to `wwwroot`.
- Run Metronic 9 Blazor Server example app with command.
  ```
  dotnet run watch
  ```
