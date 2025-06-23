# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = "1.0"

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path

# Metronic Asset Configuration
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'css')
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'js')
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'media')
Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'vendors')

# Precompile Metronic assets
Rails.application.config.assets.precompile += %w( styles.css core.bundle.js )
