require('byebug')

class CoursesController < ApplicationController
	before_action :set_course, only: [:show, :update, :destroy, 
								:students, :student_posts, :drop_student]

	# GET /courses
	def index
		@courses = current_user.courses
		json_response(@courses)
	end

	# POST /courses
	def create
		@course = current_user.courses.create!(course_params)
		json_response(@course, :created)
	end

	# GET /courses/:id
	def show
		json_response(@course)
	end

	#GET /courses/:id/students
	def students
		#TODO add number of posts for the course to the return, may require 
		# adding course_id to the post (if it requires too much overhead to
		# test for the course id based on the quiz
		json_response(@course.students.select(:email, :name, :sid))
	end

	#GET /courses/:id/student_posts
	def student_posts
		posts = []
		for student in @course.students
			#If we need student along with posts
			#posts << student
			posts << student.posts
		end
		json_response(posts)
	end

	def drop_student
		student = @course.students.find_by(student_params[:sid])
		if student
			@course.students.delete(student)
		else
			json_response(Message.not_found("student"), 404)
		end

	end

	# PUT /courses/:id
	def update
		@course.update(course_params)
		head :no_content
	end

	# DELETE /courses/:id
	def destroy
		@course.destroy
		head :no_content
	end

	private

	def course_params
		# whitelist params
		params.permit(:title, :description)
	end

	def student_params
		params.permit(:sid)
	end

	def set_course
		@course = Course.find(params[:id])
	end
end
