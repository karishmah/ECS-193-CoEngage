class AddAnswerToQuiz < ActiveRecord::Migration[5.1]
  def change
    add_column :quizzes, :Answer, :string
  end
end
