require 'rails_helper'

RSpec.describe 'Courses API', type: :request do
		let(:user) { create(:user) }
		#initialize test data 
		let!(:courses) { create_list(:course, 10, professor: user.id) }
		let(:course_id) { courses.first.id }
		let(:headers) { valid_user_headers }


		# Test suite for GET /courses
		describe 'GET /courses' do
				# make HTTP get request before each example
				before { get '/courses', params: {}, headers: headers }

				it 'returns courses' do
						# Note `json` is a custom helper to parse JSON responses
						expect(json).not_to be_empty
						expect(json.size).to eq(10)
				end

				it 'returns status code 200' do
						expect(response).to have_http_status(200)
				end
		end

		# Test suite for GET /courses/:id
		describe 'GET /courses/:id' do
				before { get "/courses/#{course_id}", params: {}, headers: headers  }

				context 'when the record exists' do
						it 'returns the course' do
								expect(json).not_to be_empty
								expect(json['id']).to eq(course_id)
						end

						it 'returns status code 200' do
								expect(response).to have_http_status(200)
						end
				end

				context 'when the record does not exist' do
						let(:course_id) { 100 }

						it 'returns status code 404' do
								expect(response).to have_http_status(404)
						end

						it 'returns a not found message' do
								expect(response.body).to match(/Couldn't find Course/)
						end
				end
		end

		# Test suite for POST /courses
		describe 'POST /courses' do
				# valid payload
			let(:valid_attributes) do
				{ title: 'Learn Elm', description: 'Lorem ipsum etc etc...'}.to_json
			end

				context 'when the request is valid' do
						before { post '/courses', params: valid_attributes, headers: headers }

						it 'creates a course' do
								expect(json['title']).to eq('Learn Elm')
#								expect(json['description']).to eq('Lorem ipsum etc etc...' )
						end

						it 'returns status code 201' do
								expect(response).to have_http_status(201)
						end
				end

				context 'when the request is invalid' do
					let(:invalid_attributes) { { title: nil }.to_json }
						before { post '/courses', params: invalid_attributes, headers: headers } 
						it 'returns status code 422' do
								expect(response).to have_http_status(422)
						end

						it 'returns a validation failure message' do
								expect(json['message']).to match(/Validation failed: Title can't be blank, Description can't be blank/)
						end
				end
		end

		# Test suite for PUT /courses/:id
		describe 'PUT /courses/:id' do
			let(:valid_attributes) { { title: 'Shopping' }.to_json }

				context 'when the record exists' do
						before { put "/courses/#{course_id}", params: valid_attributes, headers: headers }
						it 'updates the record' do
								expect(response.body).to be_empty
						end

						it 'returns status code 204' do
								expect(response).to have_http_status(204)
						end
				end
		end

		# Test suite for DELETE /courses/:id
		describe 'DELETE /courses/:id' do
				before { delete "/courses/#{course_id}", headers: headers  }

				it 'returns status code 204' do
						expect(response).to have_http_status(204)
				end
		end
end
