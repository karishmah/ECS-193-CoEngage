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
			student = Student.find_by(sid: row[1])
			if student == nil
				pass = SecureRandom.hex(4)
				student = Student.create!({name: row[0], sid: row[1], email: row[2], :password => pass})
				system("$PWD/email_student   '#{course.title}' '#{current_user.name}' '#{pass}' '#{student.email}' 2>&1 OUTPUT_EMAIL")
				student.courses << course
			else
				student.courses << course
			end
		end
		response = { message: Message.accounts_created }
		json_response(response, :created)
	end

	# POST /register_student
	def register
		student = Student.find_by(sid: register_params[:sid])
		course = Course.find(register_params[:course_id])
		if student == nil
			response = {message: Message.not_found('Student')}
			json_response(response, 401)
		elsif course == nil
			response = {message: Message.not_found('Course')}
			json_response(response, 401)
		else
			student.courses << course
			response = { message: Message.accounts_created }
			json_response(response, :created)
		end
	end

	private

	def register_all_params
#		params.require(:title)
		#params.require(:roster)
		params.permit(
			:title,
			:roster
		)
	end
	
	def register_params
		#params.require(:email)
		params.permit(
			:name,
			:sid,
			:course_id,
			:email
		)
	end
end
