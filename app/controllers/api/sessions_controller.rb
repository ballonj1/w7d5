class Api::SessionsController < ApplicationController

  def destroy
    debugger
    if signed_in?
      sign_out
      render json: {}
    else
      render json: ["User not found"], status: 404
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      sign_in(@user)
      redirect_to root_url
    else
      @user.errors = ["invalid credentials"]
      render json: @user.errors, status: 422
    end
  end

end
