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

	# PUT /update_student
	def update
		current_user.update!({ :password => student_params[:password], :email => student_params[:email]})
		auth_token = AuthenticateStudent.new(current_user.email, current_user.password).call
		response = { message: Message.credentials_changed, auth_token: auth_token}
		json_response(response, :created)
	end

	# POST /forgot_student_password
	def password_reset
		pass = SecureRandom.hex(4)
		student = Student.update!({:password => pass})
		system("$PWD/forgot_password   '#{pass}' '#{student.email}' 2>&1 OUTPUT_EMAIL")
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
