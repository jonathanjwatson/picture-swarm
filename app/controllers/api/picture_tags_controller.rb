class Api::PictureTagsController < ApplicationController
    def create
        puts JSON.parse(request.body.read)
        json_request = JSON.parse(request.body.read)
        @picture_tag = PictureTag.create!(picture_id: json_request["picture_id"], tag_id: json_request["tag_id"])
        render json: @picture_tag
    end

    # def picture_tag_params
    #     params.require(:picture_tag).permit(:picture_id, :tag_id)
    # end
    

end
