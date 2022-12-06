Rails.application.routes.draw do
  resources :products, shallow: true do
    resources :bookings
  end
end
