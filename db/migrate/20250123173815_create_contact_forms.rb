class CreateContactForms < ActiveRecord::Migration[8.0]
  def change
    create_table :contact_forms do |t|
      t.string :full_name
      t.string :email_address
      t.string :phone_number
      t.string :company_name
      t.text :message

      t.timestamps
    end
  end
end
