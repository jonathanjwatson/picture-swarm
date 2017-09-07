Rails.application.routes.draw do
  namespace :api do
    resources :pictures
  end
end