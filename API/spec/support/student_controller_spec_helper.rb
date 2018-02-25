module StudentControllerSpecHelper
	# generate tokens from student id
	def student_token_generator(student_id)
		JsonWebToken.encode(student_id: student_id)
	end

	# generate expired tokens from student id
	def expired_student_token_generator(student_id)
		JsonWebToken.encode({ student_id: student_id }, (Time.now.to_i - 30))
	end

	# return valid headers
	def valid_student_headers
		{
			"Authorization" => student_token_generator(student.id),
			"Content-Type" => "application/json"
		}
	end

	# return invalid headers
	def invalid_student_headers
		{
			"Authorization" => nil,
			"Content-Type" => "application/json"
		}
	end
end
