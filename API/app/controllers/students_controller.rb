require 'byebug'

class StudentsController < ApplicationController
	# POST /signup
	# return authenticated token upon signup
	skip_before_action :authorize_request, only: :create

	def create
		student = Student.create!(student_params)
		auth_token = AuthenticateStudent.new(student.email, student.password).call
		response = { message: Message.account_created, auth_token: auth_token }
		json_response(response, :created)
	end

	# PUT /update_student_password
	def update
		current_user.update!({ :password => student_params[:password]})
		auth_token = AuthenticateStudent.new(current_user.email, current_user.password).call
		response = { message: Message.password_changed, auth_token: auth_token}
		json_response(response, :created)
	end

	private

	def student_params
		params.permit(
			:name,
			:sid,
			:email,
			:password
		)
	end
end
