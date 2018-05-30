class RemoveAnswerFromQuiz < ActiveRecord::Migration[5.1]
  def change
	  remove_column :quizzes, :Answer
  end
end
