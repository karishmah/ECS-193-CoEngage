require 'byebug'
class UsersController < ApplicationController
	# POST /signup
	# return authenticated token upon signup
	skip_before_action :authorize_request, only: :create

	def create
		user = User.create!(user_params)
		auth_token = AuthenticateUser.new(user.email, user.password).call
		response = { message: Message.account_created, auth_token: auth_token }
		json_response(response, :created)
	end

	# PUT /update_user_password
	def update
		current_user.update!({ :password => user_params[:password], :email => user_params[:email]})
		auth_token = AuthenticateUser.new(current_user.email, current_user.password).call
		response = { message: Message.credentials_changed, auth_token: auth_token}
		json_response(response, :created)
	end

	# POST /forgot_user_password
	def password_reset
		pass = SecureRandom.hex(4)
		user = User.update!({:password => pass})
		system("$PWD/forgot_password   '#{pass}' '#{user.email}' 2>&1 OUTPUT_EMAIL")
	end

	private

	def user_params
		params.permit(
			:name,
			:email,
			:password
		)
	end
end
