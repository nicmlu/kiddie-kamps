class ReviewsController < ApplicationController
  #before_action :set_review, only: [:show]

  # GET /reviews
  def index
    #@camp = Camp.find_by(id: params[:camp_id])
    reviews = Review.all
    render json: ReviewSerializer.new(reviews)
  end

  # GET /reviews/1
  def show
        @review = Review.find(params[:id])
        render json: ReviewSerializer.new(@review).serialized_json
  end

  # POST /reviews
  def create
    # @camp = Camp.find_by(id: params[:camp_id])
    # @review = @camp.reviews.create(review_params)
    @review = Review.new(review_params)
    if @review.save 
    render json: ReviewSerializer.new(@review).serialized_json
    else 
    render json: @review.errors, status: :unprocessable_entity
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
  def destroy
    review = Review.find(params[:id])
    review.destroy
  end

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
