class Answer < ActiveRecord::Base
  belongs_to :question

  validates :title, :presence => {message: "Should have a title"}
  validates :content, :presence => {message: "Should have content"}

  def increase_upvotes
    self.upvotes += 1
  end

  def increase_downvotes
    self.downvotes += 1
  end

end
