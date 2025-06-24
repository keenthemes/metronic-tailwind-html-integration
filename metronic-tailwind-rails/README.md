# Metronic Tailwind Rails

A Rails 8.0 application integrated with the Metronic Tailwind CSS admin template. This project provides a modern, responsive admin dashboard with multiple demo layouts.

## 🚀 Features

- **Rails 8.0.2** with modern asset pipeline (Propshaft)
- **Metronic Tailwind CSS** premium admin template integration
- **PostgreSQL** database support
- **Multiple Demo Layouts** (Demo1 & Demo2)
- **Responsive Design** with Tailwind CSS
- **Modern Asset Management** with Rails 8 Propshaft
- **ERB Templates** converted from Twig/Django templates
- **Component-based Architecture** with Rails partials

## 📋 Requirements

- **Ruby**: 3.4.4 or higher
- **Rails**: 8.0.2
- **Node.js**: 20.x or higher
- **PostgreSQL**: 12.x or higher
- **Yarn**: 1.22.x or higher

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone git@github.com:keenthemes/metronic-tailwind-html-integration.git
cd metronic-tailwind-rails
```

### 2. Install Dependencies

```bash
# Install Ruby gems
bundle install

# Install Node.js packages
yarn install
```

### 3. Database Setup

```bash
# Create and setup database
bin/rails db:create
bin/rails db:migrate
```

### 4. Start the Application

```bash
# Start Rails server
bin/rails server
```

Visit `http://localhost:3000` to see the application.

## 🎨 Available Demos

### Demo 1 - Sidebar Layout
- **URL**: `http://localhost:3000/demo1`
- **Features**: Fixed sidebar, header, and footer
- **Layout**: Traditional admin dashboard layout

### Demo 2 - Navbar Layout
- **URL**: `http://localhost:3000/demo2`
- **Features**: Top navigation bar, responsive design
- **Layout**: Modern horizontal navigation layout

## 📁 Project Structure

```
app/
├── assets/
│   ├── css/           # Metronic CSS files
│   ├── js/            # Metronic JavaScript files
│   ├── media/         # Images and media assets
│   └── vendors/       # Third-party libraries
├── controllers/
│   ├── home_controller.rb    # Root controller (redirects to demo1)
│   ├── demo1_controller.rb   # Demo1 layout controller
│   └── demo2_controller.rb   # Demo2 layout controller
└── views/
    ├── layouts/
    │   ├── demo1/            # Demo1 layout templates
    │   ├── demo2/            # Demo2 layout templates
    │   └── partials/         # Shared partial templates
    ├── demo1/
    │   └── index.html.erb    # Demo1 main page
    └── demo2/
        └── index.html.erb    # Demo2 main page
```

## 🔧 Configuration

### Asset Pipeline (Propshaft)

The project uses Rails 8's Propshaft for asset management. Asset paths are configured in:

- `config/application.rb`
- `config/initializers/assets.rb`

### Database Configuration

Database settings are in `config/database.yml`. Default configuration uses PostgreSQL.

### Routes

Main routes are defined in `config/routes.rb`:

```ruby
root 'home#index'           # Redirects to demo1
get 'demo1', to: 'demo1#index'
get 'demo2', to: 'demo2#index'
```

## 🎯 Development

### Adding New Layouts

1. Create a new controller in `app/controllers/`
2. Add layout templates in `app/views/layouts/`
3. Create view templates in `app/views/[controller_name]/`
4. Update routes in `config/routes.rb`

### Customizing Styles

Metronic CSS files are located in `app/assets/css/`. You can:

- Modify existing styles
- Add custom CSS files
- Override Tailwind classes

### Adding JavaScript

JavaScript files are in `app/assets/js/`. Include them in:

- `app/views/layouts/partials/_scripts.html.erb`

## 🔍 Troubleshooting

### Asset Loading Issues

If assets aren't loading:

1. Restart the Rails server
2. Check asset paths in templates
3. Verify files exist in `app/assets/`

### Database Connection

If database connection fails:

1. Ensure PostgreSQL is running
2. Check database credentials in `config/database.yml`
3. Run `bin/rails db:create` if databases don't exist

### Template Errors

If templates have rendering errors:

1. Check partial file names have underscore prefix
2. Verify render paths in templates
3. Ensure all required partials exist

## 📚 Technology Stack

- **Backend**: Ruby on Rails 8.0.2
- **Database**: PostgreSQL
- **Frontend**: Metronic Tailwind CSS
- **Asset Pipeline**: Propshaft
- **JavaScript**: Vanilla JS + Metronic components
- **Styling**: Tailwind CSS + Metronic theme

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project integrates with Metronic, which is a premium template. Please ensure you have a valid Metronic license for commercial use.

## 🆘 Support

For issues related to:

- **Rails**: Check [Rails Guides](https://guides.rubyonrails.org/)
- **Metronic**: Visit [Metronic Documentation](https://keenthemes.com/metronic)
- **Tailwind CSS**: See [Tailwind Documentation](https://tailwindcss.com/docs)

## 🎉 Acknowledgments

- [Metronic](https://keenthemes.com/metronic) for the premium admin template
- [Ruby on Rails](https://rubyonrails.org/) for the web framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
