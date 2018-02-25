module UserControllerSpecHelper
	# generate tokens from user id
	def user_token_generator(user_id)
		JsonWebToken.encode(user_id: user_id)
	end

	# generate expired tokens from user id
	def expired_user_token_generator(user_id)
		JsonWebToken.encode({ user_id: user_id }, (Time.now.to_i - 30))
	end

	# return valid headers
	def valid_user_headers
		{
			"Authorization" => user_token_generator(user.id),
			"Content-Type" => "application/json"
		}
	end

	# return invalid headers
	def invalid_user_headers
		{
			"Authorization" => nil,
			"Content-Type" => "application/json"
		}
	end
end
