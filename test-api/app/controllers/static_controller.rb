class StaticController < ApplicationController
  def index
    render plain: 'index page only'
  end
end
