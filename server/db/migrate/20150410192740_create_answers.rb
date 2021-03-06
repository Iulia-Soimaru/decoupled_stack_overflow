class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :title
      t.text :content
      t.references :question, index: true
      t.integer :upvotes, default: 0
      t.integer :downvotes, default: 0

      t.timestamps null: false
    end
  end
end
