class AddAskedToQuizzes < ActiveRecord::Migration[5.1]
  def change
		add_column :quizzes, :asked, :boolean
  end
end
