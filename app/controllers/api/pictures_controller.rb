class Api::PicturesController < ApplicationController
    def index
        @pictures = Picture.all
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
        @Picture.update!(Picture_params)
        redirect_to Picture_path(@Picture)
      end
    
      def destroy
        @Picture = Picture.find(params[:id])
        @Picture.destroy
        redirect_to pictures_path
      end
    
      private
    
      def Picture_params
        params.require(:Picture).permit(:title, :url, :description)
      end
end
