class WarpController < ApplicationController
  def index
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: [
          turbo_stream.update(
            "warp_screen", partial: "warp/index"
          )
        ]
      end
    end
  end
end
