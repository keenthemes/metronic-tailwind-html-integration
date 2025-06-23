Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  root "home#index"

  # Demo routes following Flask/Symfony patterns
  get "demo1", to: "demo1#index", as: :demo1
  get "demo1/*path", to: "demo1#show", as: :demo1_page

  get "demo2", to: "demo2#index", as: :demo2
  get "demo2/*path", to: "demo2#show", as: :demo2_page

  # Favicon route to prevent 404s
  get "favicon.ico", to: redirect("/assets/favicon.ico"), status: 301
end
