class Post < ApplicationRecord
  belongs_to :quiz, :foreign_key => :quiz_id
  belongs_to :student, :foreign_key => :student_id
  validates_presence_of :picture, allow_nil: true
  validates_presence_of :longForm, allow_nil: true
  validates_presence_of :multiChoice, allow_nil: true
  validate :only_one_answer

  private
  	def only_one_answer
		unless !picture.blank? ^ !longForm.blank? ^ !multiChoice.blank?
			errors.add(:base, "Only submit one answer type")
		end
	end
end
