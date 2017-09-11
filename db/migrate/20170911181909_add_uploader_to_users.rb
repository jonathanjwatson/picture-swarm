class AddUploaderToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :uploader, :boolean
  end
end
