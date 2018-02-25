class User < ApplicationRecord
	has_secure_password
	has_many :courses, foreign_key: :professor
	validates_presence_of :name, :email, :password_digest
end

