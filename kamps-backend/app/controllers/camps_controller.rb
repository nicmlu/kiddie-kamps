class CampsController < ApplicationController
  before_action :set_camp, only: [:show, :update, :destroy]

  # GET /camps
  def index
    camps = Camp.all

    render json: CampSerializer.new(camp)
  end

  # GET /camps/1
  def show
    camp = Camp.find_by(id: params[:id])
    render json: CampSerializer.new(camp).serialized_json
  end

  # POST /camps
  def create
    @camp = Camp.new(camp_params)

    if @camp.save
      render json: @camp, status: :created, location: @camp
    else
      render json: @camp.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /camps/1
  def update
    if @camp.update(camp_params)
      render json: @camp
    else
      render json: @camp.errors, status: :unprocessable_entity
    end
  end

  # DELETE /camps/1
  def destroy
    @camp.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_camp
      @camp = Camp.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def camp_params
      params.require(:camp).permit(:img_src, :name, :description, :website, :borough, :zip, :phone, :street_address)
    end
end
