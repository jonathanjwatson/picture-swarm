class Api::PicturesController < ApplicationController
    def index
        @pictures = Picture.all
        if params[:search]
          @pictures = Picture.search(params[:search]).order("created_at DESC")
        else
          @pictures = Picture.all
        end
        render json: @pictures
      end
    
      def create
        @Picture = Picture.create!(Picture_params)
        redirect_to Picture_path(@Picture)
      end
    
      def show
        @Picture = Picture.find(params[:id])
        render json: @Picture
      end
    
      def update
        @Picture = Picture.find(params[:id])
        @Picture.update_attributes(picture_params)
        render json: @Picture
      end
    
      def destroy
        @Picture = Picture.find(params[:id])
        @Picture.destroy
        redirect_to pictures_path
      end
    
      private
    
      def picture_params
        params.require(:picture).permit(:title, :url, :description)
      end
end