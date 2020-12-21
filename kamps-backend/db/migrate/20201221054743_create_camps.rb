class CreateCamps < ActiveRecord::Migration[6.1]
  def change
    create_table :camps do |t|
      t.string :img_src
      t.string :name
      t.text :description
      t.string :website
      t.string :borough
      t.integer :zip
      t.string :phone
      t.string :street_address

      t.timestamps
    end
  end
end
