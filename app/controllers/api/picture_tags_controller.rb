class Api::PictureTagsController < ApplicationController
    def create
        puts JSON.parse(request.body.read)
        json_request = JSON.parse(request.body.read)
        @tag = Tag.find_or_create_by(name: json_request["tag_name"])
        puts @tag[:id]
        # @picture_tag = PictureTag.create(picture_id: json_request["picture_id"], tag_id: @tag[:id])
        @picture_tag = PictureTag.where(picture_id: json_request["picture_id"], tag_id: @tag.id).first_or_create
        render json: @picture_tag
    end
    def destroy
        puts 'yooooooooo'
        puts request.body.read
        json_request = JSON.parse(request.body.read)
        
        # @picture = Picture.find params[:picture_id]
        @picture_tag = PictureTag.find_by(picture_id: json_request["picture_id"], tag_id: json_request["tag_id"])
        @picture_tag.destroy
        # @picture_tag = PictureTag.find_by("picture_id = ? AND tag_id = ?", json_request["picture_id"], json_request["tag_id"])
        # PictureTag.destroy(@picture_tag.id)
        render status: :ok
        # @tag = Tag.find params[:tag_id]
        # @picture = Picture.find params[:picture_id]
        # # @picture_tag = PictureTag.where({picture_id: params[:picture_id]}, {tag_id: params[:tag_id]})
        # @picture_tag = PictureTag.where("picture_id = ? AND tag_id = ?", params[:picture_id], params[:tag_id])
        # @picture_tag.destroy
        # render json: {good: 'yeah'}
    end

    def picture_tag_params
        params.require(:picture_tag).permit(:picture_id, :tag_id)
    end
    

end
