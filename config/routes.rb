Rails.application.routes.draw do
  devise_for :rails
  root "message#index"
  resources :message

end
