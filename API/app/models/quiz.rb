class Quiz < ApplicationRecord
  belongs_to :course
	validates_presence_of :question, :title
end
