class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.text :question
#	  t.bool :started
      t.references :course, foreign_key: true

      t.timestamps
    end
  end
end
