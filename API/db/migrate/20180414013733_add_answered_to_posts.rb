class AddAnsweredToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :answered, :boolean
  end
end
