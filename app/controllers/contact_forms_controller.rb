class ContactFormsController < ApplicationController
  def new
    @contact_form = ContactForm.new
  end

  def create
    @contact_form = ContactForm.new(contact_form_params)

    if @contact_form.save
      ContactFormMailer.contact_form_notification(@contact_form).deliver_now
      redirect_to @contact_form, notice: "Form was successfully submitted. Thanks for reaching out!"
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def contact_form_params
    params.require(:contact_form).permit(
      :full_name,
      :email_address,
      :phone_number,
      :company_name,
      :message
    )
  end
end
