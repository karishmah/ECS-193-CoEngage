require 'rails_helper'

RSpec.describe 'Students API', type: :request do
	let(:student) { build(:student) }
	let(:headers) { valid_student_headers.except('Authorization') }
	let(:valid_attributes) do
		attributes_for(:student, password_confirmation: student.password)
	end

	# User signup test suite
	describe 'POST /signup_student' do
		context 'when valid request' do
			before { post '/signup_student', params: valid_attributes.to_json, headers: headers }


			it 'creates a new student' do
				expect(response).to have_http_status(201)
			end

			it 'returns success message' do
				expect(json['message']).to match(/Account created successfully/)
			end

			it 'returns an authentication token' do
				expect(json['auth_token']).not_to be_nil
			end
		end

		context 'when invalid request' do
			before { post '/signup_student', params: {}, headers: headers }

			it 'does not create a new student' do
				expect(response).to have_http_status(422)
			end

			it 'returns failure message' do
				expect(json['message'])
					.to match(/Validation failed: Password can't be blank, Email can't be blank, Name can't be blank, Sid can't be blank, Password digest can't be blank/)
			end
		end
	end
end
