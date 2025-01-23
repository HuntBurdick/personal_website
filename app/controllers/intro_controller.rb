class IntroController < ApplicationController
  def index
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: [
          turbo_stream.update(
            "journey_screen", partial: "intro/index"
          )
        ]
      end
    end
  end
end
