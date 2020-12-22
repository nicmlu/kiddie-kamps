class ReviewsController < ApplicationController
  #before_action :set_review, only: [:show]

  # GET /reviews
  def index
    reviews = Reviews.all
    render json: ReviewSerializer.new(reviews)
  end

  # GET /reviews/1
  def show
    review = Review.find_by(id: params[:id])
    render json: ReviewSerializer.new(review).serialized_json
  end

  # POST /reviews
  def create
    if params[:camp_id]
      @camp = Camp.find_by(camp_id: params[:camp_id])
      @review = @camp.reviews.build(review_params)
      if @review.save
        render json: ReviewSerializer.new(review).serialized_hash
      else 
        alert("Review not saved!")
      end
    end
  end

  # PATCH/PUT /reviews/1
  # def update
  #  if @review.update(review_params)
  #    render json: @review
  #  else
  #    render json: @review.errors, status: :unprocessable_entity
  #  end
  # end

  # DELETE /reviews/1
  # def destroy
  #  @review.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_review
    #  @review = Review.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:approve, :comment, :name, :camp_id)
    end
end
