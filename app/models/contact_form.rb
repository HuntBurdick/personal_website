class ContactForm < ApplicationRecord
  validates :full_name, :email_address, :message, presence: true
end
