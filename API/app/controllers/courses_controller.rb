class CoursesController < ApplicationController
	before_action :set_course, only: [:show, :update, :destroy]

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

	def set_course
		@course = Course.find(params[:id])
	end
end
