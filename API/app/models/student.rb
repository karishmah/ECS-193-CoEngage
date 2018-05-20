class Student < ApplicationRecord
	has_secure_password
	has_many :posts
	has_many :memberships
	has_many :courses, through: :memberships
	validates_presence_of :email, :name ,:sid, :password_digest
	validates :email, uniqueness: { case_sensitive: false }
end
