require 'byebug'
require 'csv'
require 'securerandom'

class RegisterController < ApplicationController


	# POST /register_students
	def register_all
		csv_text = register_all_params[:roster]
		csv = CSV.parse(csv_text, :headers => true)
		course = Course.find_by( professor: current_user.id, title: register_all_params[:title])
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

	# POST /register_student
	def register
		student = Student.find_by(email: register_params[:email])
		professor = User.find_by(name: register_params[:professor])
		course = Course.find_by(professor: professor.id, title: register_params[:title])
		if student == nil
			response = {message: Message.not_found('Student')}
		elsif course == nil
			response = {message: Message.not_found('Course')}
		else
			student.courses << course
			response = { message: Message.accounts_created }
		end
			json_response(response, :created)
	end

	private

	def register_all_params
		params.require(:title)
		params.require(:roster)
		params.permit(
			:roster,
			:title
		)
	end
	
	def register_params
		params.require(:title)
		params.require(:professor)
		params.require(:email)
		params.permit(
			:title,
			:professor,
			:email
		)
	end
end
