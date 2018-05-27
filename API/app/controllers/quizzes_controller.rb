require('byebug')

class QuizzesController < ApplicationController
	before_action :set_course
	before_action :set_course_quiz, only: [:show, :update, :destroy]

	# GET /courses/:course_id/quizzes
	def index
		if @current_user.is_a?(Student)
			response = @course.quizzes.where(started: true)
		else
			response = @course.quizzes
		end
		json_response(response)
	end

	# GET /courses/:course_id/quizzes/:id
	def show
		response = { :quiz => @quiz, :answers => @quiz.answers }.to_json
		json_response(response)
	end

	# POST /courses/:course_id/quizzes
	def create
		quiz = @course.quizzes.create!(
			:title => quiz_params[:title],
			:question => quiz_params[:question],
			:started => quiz_params[:started],
			:question_type => quiz_params[:question_type],
			:course_id => quiz_params[:course_id]
			)
		if quiz_params[:started]
			quiz.asked = true
		end
		if params[:answers]
			for i in params[:answers]
				puts i
				quiz.answers.create!(:choice => i)
			end
		end
		json_response(quiz, :created)
	end

	# PUT /courses/:course_id/quizzes/:id
	def update
		@quiz.update(quiz_params)
		if quiz_params[:started]
			@quiz.update({ :asked => true})
		end
		head :no_content
	end

	# DELETE /courses/:course_id/quizzes/:id
	def destroy
		@quiz.destroy
		head :no_content
	end
	

	private

	def quiz_params
		params.permit(:title, :question, :started, :question_type, :quiz_id, :course_id, :answers)
	end

	def set_course
		@course = Course.find(params[:course_id])
	end

	def set_course_quiz
		@quiz = @course.quizzes.find_by!(id: params[:id]) if @course
	end
end
