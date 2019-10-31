require "webpacker/helper"

module Sip
  module ApplicationHelper
    include ::Webpacker::Helper

    def current_webpacker_instance
      Sip.webpacker
    end
  end
end
