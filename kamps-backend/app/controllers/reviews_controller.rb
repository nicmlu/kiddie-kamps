class ReviewsController < ApplicationController
  #before_action :set_review, only: [:show]

  # GET /reviews
  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews)
  end

  # GET /reviews/1
  def show
        if params[:camp_id]
          #byebug
            @reviews = Review.where(camp_id: params[:camp_id])
        else
            let reviewDiv = document.getElementbyId("review-row")
            reviewDiv.innerHTML += "There are no reviews for this camp."
        end
        
        # render json: RecipeSerializer.new(@recipes).serialized_json
  end

  # POST /reviews
  def create
    review = Review.new(review_params)
      if review.save
        render json: ReviewSerializer.new(review).serialized_json
      else
          render json: {errors: review.errors.full_messages}, status: :unprocessible_entity
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
