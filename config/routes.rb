Rails.application.routes.draw do
  root "message#index"
  resources :message

end
