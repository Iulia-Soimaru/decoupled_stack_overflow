class QuestionsController < ApplicationController
  before_filter :allow_cross_domain
  # before_action :find_question

  def index
    @questions = Question.all
    render json: @questions, status: :accepted

    # render json: {questions: @questions}, status: :accepted
  end

  def create
    @new_question = Question.new(find_params)
    if @new_question.save
      render json: @new_question, status: :created
    else
      render json: @new_question.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @question = Question.find(params[:id])
    @question.update(find_params)
    if @question.save
      render json: {question: @question}, status: :accepted
    else
      render json: @question.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @question = Question.find(params[:id])
    render json: @question, status: :accepted
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
  end

  def upvote
    @question = Question.find(params[:id])
    @question.increase_upvotes
    if @question.save
      render json: {question: @question}, status: :accepted
    else
      render json: @question.errors.full_messages, status: :unprocessable_entity
    end
  end

  def downvote
    @question = Question.find(params[:id])
    @question.increase_downvotes
    if @question.save
      render json: {question: @question}, status: :accepted
    else
      render json: @question.errors.full_messages, status: :unprocessable_entity
    end
  end

  def render_204
    head 204
  end

  private
  def find_params
    params.require(:question).permit(:title, :content, :upvotes, :downvotes)
  end

  def find_question
    # @question = Question.find(params[:id]) if params[:id]?
  end

  def allow_cross_domain
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, PATCH, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
  end

end

