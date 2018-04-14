class AddStartedToQuizzes < ActiveRecord::Migration[5.1]
  def change
    add_column :quizzes, :started, :boolean
  end
end
