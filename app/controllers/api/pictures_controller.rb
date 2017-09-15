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
        @Picture = Picture.create!(picture_params)
        render json: @Picture
      end
    
      def show
        @Picture = Picture.find(params[:id])
        @Tags = @Picture.tags
        @Response = [@Picture,@Tags]
        # @Tags = @Picture.tags
        # @PictureTag = PictureTag.where(picture_id: params[:id])
        # puts @PictureTag
        # @Tags = PictureTag.map do |tag|
        #   return Tag.where(id: tag.tag_id)
        # end
        # puts @Tags
        # Tag.where(id: @PictureTag.tag_id)
        render json: @Response
      end
    
      def update
        @Picture = Picture.find(params[:id])
        @Picture.update_attributes(picture_params)
        render json: @Picture
      end
    
      def destroy
        @Picture = Picture.find(params[:id])
        @Picture.destroy
        render status: :ok
      end
    
      private
    
      def picture_params
        params.require(:picture).permit(:title, :url, :description, :user_id)
      end
end