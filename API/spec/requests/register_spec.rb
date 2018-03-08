require 'rails_helper'

RSpec.describe 'Courses API', type: :request do
		let(:user) { create(:user) }
		#initialize test data 
		let!(:courses) { create_list(:course, 10, professor: user.id) }
		let(:course_id) { courses.first.id }
		let(:course_title) { courses.first.title }
		let(:headers) { valid_headers }

		# Test suite for POST /register_students
		describe 'POST /register_students' do
				# make HTTP post request before each example
				let (:valid_credentials) do 
					{
						title: course_title,
						roster: File.read('/home/devon/example.csv')
					}.to_json
				end
				before { post '/register_students', params: valid_credentials, headers: headers }

				it 'registers accounts' do
						# Note `json` is a custom helper to parse JSON responses
						expect(json['message']).to match(/Accounts registered successfully/)
				end

				it 'returns status code 201' do
						expect(response).to have_http_status(201)
				end
		end
end
