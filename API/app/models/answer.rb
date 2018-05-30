class Answer < ApplicationRecord
	belongs_to :quiz
	validates_presence_of :choice
end
