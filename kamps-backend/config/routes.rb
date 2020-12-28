Rails.application.routes.draw do
  resources :camps do 
    resources :reviews 
  end 
  
  resources :reviews
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
