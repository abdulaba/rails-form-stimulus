Rails.application.routes.draw do
  resources :products do
    resources :booking, shallow: :true
  end
end
