# app/auth/authorize_api_request.rb
class AuthorizeApiRequest
	def initialize(headers = {})
		@headers = headers
	end

	# Service entry point - return valid user object
	def call
		{ user: user}
		rescue ActiveRecord::RecordNotFound => e
		{ user: student }
		rescue ActiveRecord::RecordNotFound => e
				# raise custom error
			raise(
				ExceptionHandler::InvalidToken,
				("#{Message.invalid_token} #{e.message}")
			)
end



	private

	attr_reader :headers

	def student
		# check if student is in the database
		# memoize student object
		@student ||= Student.find(decoded_auth_token[:student_id]) if decoded_auth_token
		# handle student not found
	rescue ActiveRecord::RecordNotFound => e
		# raise custom error
		raise(
			ExceptionHandler::InvalidToken,
			("#{Message.invalid_token} #{e.message}")
		)
	end


	def user
		# check if user is in the database
		# memoize user object
		@user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
		# handle user not found
	#rescue ActiveRecord::RecordNotFound => e
	#	raise(
	#		ExceptionHandler::InvalidToken,
	#		("#{Message.invalid_token} #{e.message}")
	#	)
	end

	# decode authentication token
	def decoded_auth_token
		@decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
	end

	# check for token in `Authorization` header
	def http_auth_header
		if headers['Authorization'].present?
			return headers['Authorization'].split(' ').last
		end
		raise(ExceptionHandler::MissingToken, Message.missing_token)
	end
end
