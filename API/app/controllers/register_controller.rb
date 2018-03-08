require 'byebug'
require 'csv'
require 'securerandom'

class RegisterController < ApplicationController
	# POST /signup_students
	# return authenticated token upon signup


	def register
		csv_text = register_params[:roster]
		csv = CSV.parse(csv_text, :headers => true)
		course = Course.find_by( professor: current_user.id, title: register_params[:title])
		csv.each do |row|
			student = Student.find_by(email: row[2])
			if student == nil
				pass = SecureRandom.hex(4)
				student = Student.create!({name: row[0], sid: row[1], email: row[2], :password => pass})
				system("$PWD/email_student   '#{course.title}' '#{current_user.name}' '#{pass}' '#{student.email}' 2>&1 OUTPUT_EMAIL")
			else
				student.courses << course
			end
		end
		response = { message: Message.accounts_created }
		json_response(response, :created)
	end

	private

	def register_params
		params.permit(
			:title,
			:roster
		)
	end
end
