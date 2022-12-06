class BookingsController < ApplicationController
  def new
    @product = Product.find(params[:product_id])
    @booking = Booking.new
  end
end
