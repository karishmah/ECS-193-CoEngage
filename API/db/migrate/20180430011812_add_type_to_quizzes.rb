class AddTypeToQuizzes < ActiveRecord::Migration[5.1]
  def change
    add_column :quizzes, :type, :string
  end
end
