class Quiz < ApplicationRecord
	belongs_to :course
	validates_presence_of :question, :title, :question_type
	has_many :posts
	has_many :answers
end
