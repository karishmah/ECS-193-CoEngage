class Post < ApplicationRecord
  belongs_to :quiz, :foreign_key => :quiz_id
  belongs_to :student, :foreign_key => :student_id
  validates_presence_of :answered
end
