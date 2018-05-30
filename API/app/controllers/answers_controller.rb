class AnswersController < ApplicationController

	private

	def create

	end

	def set_course
		@course = Course.find(params[:course_id])
	end

	def set_course_quiz
		@quiz = @course.quizzes.find_by!(id: params[:id]) if @course
	end
end
