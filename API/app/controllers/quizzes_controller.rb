require('byebug')

class QuizzesController < ApplicationController
	before_action :set_course
	before_action :set_course_quiz, only: [:show, :update, :destroy]

	# GET /courses/:course_id/quizzes
	def index
		json_response(@course.quizzes)
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
		byebug
		if params[:choices]
			for i in params[:choices]
				puts i
				quiz.answers.create!(:choice => i)
			end
		end
		json_response(quiz, :created)
	end

	# PUT /courses/:course_id/quizzes/:id
	def update
		@quiz.update(quiz_params)
		head :no_content
	end

	# DELETE /courses/:course_id/quizzes/:id
	def destroy
		@quiz.destroy
		head :no_content
	end
	

	private

	def quiz_params
		params.permit(:title, :question, :started, :question_type, :quiz_id, :course_id, :choices)
	end

	def set_course
		@course = Course.find(params[:course_id])
	end

	def set_course_quiz
		@quiz = @course.quizzes.find_by!(id: params[:id]) if @course
	end
end
