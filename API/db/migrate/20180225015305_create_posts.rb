class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :multiChoice
      t.text :longForm
      t.string :picture
	  t.boolean	:answered
      t.references :quiz, foreign_key: true
      t.references :student, foreign_key: true
      t.timestamps
    end
  end
end
