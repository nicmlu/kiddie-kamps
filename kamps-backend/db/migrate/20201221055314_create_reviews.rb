class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :approve
      t.text :comment
      t.string :name
      t.integer :camp_id

      t.timestamps
    end
  end
end
