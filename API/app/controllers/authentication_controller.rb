require 'byebug'
class AuthenticationController < ApplicationController

	skip_before_action :authorize_request, only: :authenticate_user
	skip_before_action :authorize_request, only: :authenticate_student

	def authenticate_user
		auth_token = AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
		json_response(auth_token: auth_token)
	end

	def authenticate_student
		auth_token = AuthenticateStudent.new(auth_params[:email], auth_params[:password]).call
		json_response(auth_token: auth_token)
	end

	private

	def auth_params
		params.permit(:email, :password)
	end
end
