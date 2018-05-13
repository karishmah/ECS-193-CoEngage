class FixColumnName < ActiveRecord::Migration[5.1]
  def change
	  rename_column :quizzes, :type, :question_type
  end
end
