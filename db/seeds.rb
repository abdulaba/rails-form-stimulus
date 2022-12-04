if Rails.env.development?
  Booking.destroy_all
  Product.destroy_all
end

Product.create!(
  name: "Coca cola",
  price: 5
)

Product.create!(
  name: "Sandwich",
  price: 10
)
