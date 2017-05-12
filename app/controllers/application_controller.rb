class ApplicationController < ActionController::Base
<<<<<<< HEAD
  # protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def sign_out
    @current_user.reset_session_token!
    session_token[:session_token] = nil
  end

  def signed_in?
    !!current_user
  end

=======
  protect_from_forgery with: :exception
>>>>>>> d7241bceb4e48b4c4b9748c045ee02ef31b41468
end
