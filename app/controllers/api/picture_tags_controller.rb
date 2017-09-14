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
    def delete
        @picture_tag = PictureTag.find params[:id]
        @picture_tag.destroy
    end

    def picture_tag_params
        params.require(:picture_tag).permit(:picture_id, :tag_id)
    end
    

end
