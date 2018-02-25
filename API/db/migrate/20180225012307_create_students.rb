class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.string :email
      t.string :name
      t.integer :sid
      t.string :password_digest

      t.timestamps
    end
  end
end
