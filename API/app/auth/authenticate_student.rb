require 'byebug'
class AuthenticateStudent
	def initialize(email, password)
		@email = email
		@password = password
	end

	# Service entry point
	def call
		JsonWebToken.encode(student_id: student.id) if student
	end

	private

	attr_reader :email, :password

	# verify user credentials
	def student
		student = Student.find_by(email: email)
		return student if student && student.authenticate(password)
		# raise Authentication error if credentials are invalid
		raise(ExceptionHandler::AuthenticationError, Message.invalid_credentials)
	end
end
