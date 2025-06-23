class HomeController < ApplicationController
  layout 'metronic/demo1_base'

  def index
    redirect_to demo1_path
  end
end
