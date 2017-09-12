class Api::UsersController < ApplicationController
# before_action :

    def index
        # current_user.admin?
        @users = User.all
        render json: @users
      end
    end