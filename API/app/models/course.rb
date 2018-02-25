class Course < ApplicationRecord
		has_many :quizzes, dependent: :destroy
		validates_presence_of :title, :description, :professor
end
