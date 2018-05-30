class AddQuizIdToAnswers < ActiveRecord::Migration[5.1]
  def change
	  add_column :answers, :quiz_id, :integer
  end
end
