class AnswersController < ApplicationController
  before_filter :allow_cross_domain

  def create
    @question = Question.find(params[:question_id])
    @new_answer = @question.answers.new(answer_params)
    p "*" * 80
    p answer_params
    if @new_answer.save
      render json: @new_answer, status: :created
    else
      render json: @new_answer.errors.full_messages, status: :unprocessable_entity
    end
  end


  def destroy

  end

  def upvote

  end

  def downvote

  end

  private

  def answer_params
    params.require(:answer).permit(:title, :content, :upvotes, :downvotes)
  end

  def allow_cross_domain
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, PATCH, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
  end

end
