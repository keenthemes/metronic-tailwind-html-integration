<p>
    <a href="https://keenthemes.com/metronic">
        <img src="https://keenthemes.com/static/metronic/tailwind/docs/dist/assets/media/app/default-logo.svg" alt="Metronic"/>
    </a>
</p>

## Setup example

1. Copy the entire `metronic-tailwind-html` folder and paste it into the root directory of your Blazor app. Rename the copied folder to `metronic`.

2. Copy the `media` folder from `metronic/dist/` and paste it into the `wwwroot/assets/` directory.

3. Update output path in `webpack.vendors.js`
   ```javascript
   module.exports = {
      output: '../wwwroot/assets',
      ...
   };
   ```
   And update output paths in `package.json` for the following build commands.
   ```
   "build:css": "npx tailwindcss -i ./src/css/styles.css -o ../wwwroot/assets/css/styles.css",
   "build:css:watch": "npx tailwindcss -i ./src/css/styles.css -o ../wwwroot/assets/css/styles.css --watch",
   "build:prod": "npx tailwindcss -i ./src/css/styles.css -o ../wwwroot/assets/css/styles.css --minify && npx webpack --env production",
   ```


4. Open your terminal and navigate to the `metronic` directory:
    ```bash
    cd metronic
    ```

5. Install the necessary npm packages and build the theme assets by running the following command:
    ```bash
    npm install & npm run build
    ```

6. Start the Metronic 9 Blazor Server example app with the following command:
    ```bash
    dotnet run watch
    ```

By following these steps, you should be able to set up and run the Metronic theme in your Blazor application. For more detailed information, visit the [Metronic website](https://keenthemes.com/metronic).
