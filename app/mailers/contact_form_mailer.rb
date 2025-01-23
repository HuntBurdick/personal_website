class ContactFormMailer < ApplicationMailer
  default from: "no-reply@websitescenes.com"

  def contact_form_notification(contact_form)
    @contact_form = contact_form

    mail(
      to: "hunt@websitescenes.com",
      subject: "New Contact Form Submission"
    )
  end
end
