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

	# PUT /update_student_password
	def update
		current_user.update!({ :password => user_params[:password]})
		auth_token = AuthenticateStudent.new(current_user.email, current_user.password).call
		response = { message: Message.password_changed, auth_token: auth_token}
		json_response(response, :created)
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
