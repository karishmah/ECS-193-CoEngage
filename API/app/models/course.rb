class Course < ApplicationRecord
	has_many :quizzes, dependent: :destroy
	has_many :memberships
	has_many :students, :through => :memberships
	validates_presence_of :title, :description, :professor
end
