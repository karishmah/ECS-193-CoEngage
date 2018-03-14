class PostsController < ApplicationController
	before_action :set_course
	before_action :set_course_quiz
	before_action :set_course_quiz_post, only: [:show, :update, :destroy]

	# GET    /courses/:course_id/quizzes/:quiz_id/posts
	def index
		json_response(@quiz.posts)
	end

	# GET    /courses/:course_id/quizzes/:quiz_id/posts/:id 
	def show
		json_response(@post)
	end

	# POST   /courses/:course_id/quizzes/:quiz_id/posts
	def create
		@quiz.posts.create!(post_params)
		json_response(@quiz, :created)
	end

	# PUT    /courses/:course_id/quizzes/:quiz_id/posts/:id
	def update
		@post.update(post_params)
		head :no_content
	end

	# DELETE /courses/:course_id/quizzes/:quiz_id/posts/:id
	def destroy
		@post.destroy
		head :no_content
	end

	private

	def post_params
		params.require( :student_id)
		params.permit( :student_id, :multiChoice, :longForm, :picture)
	end

	def set_course
		@course = Course.find(params[:course_id])
	end

	def set_course_quiz
		@quiz = Quiz.find(params[:quiz_id]) if @course
	end

	def set_course_quiz_post
		@post = @quiz.posts.find_by!(id: params[:id]) if @quiz
	end
end
