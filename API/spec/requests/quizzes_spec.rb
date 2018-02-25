require 'rails_helper'

RSpec.describe 'Quizs API' do
	# Initialize the test data
	let(:user) { create(:user) }
	let!(:course) { create(:course, professor: user.id) }
	let!(:quizzes) { create_list(:quiz, 20, course_id: course.id) }
	let(:course_id) { course.id }
	let(:id) { quizzes.first.id }
	let(:headers) { valid_headers }

	# Test suite for GET /courses/:course_id/quizzes
	describe 'GET /courses/:course_id/quizzes' do
		before { get "/courses/#{course_id}/quizzes", params: {}, headers: headers }

		context 'when course exists' do
			it 'returns status code 200' do
				expect(response).to have_http_status(200)
			end

			it 'returns all course quizzes' do
				expect(json.size).to eq(20)
			end
		end

		context 'when course does not exist' do
			let(:course_id) { 0 }

			it 'returns status code 404' do
				expect(response).to have_http_status(404)
			end

			it 'returns a not found message' do
				expect(response.body).to match(/Couldn't find Course/)
			end
		end
	end

	# Test suite for GET /courses/:course_id/quizzes/:id
	describe 'GET /courses/:course_id/quizzes/:id' do
		before { get "/courses/#{course_id}/quizzes/#{id}", params: {}, headers: headers }

		context 'when course quiz exists' do
			it 'returns status code 200' do
				expect(response).to have_http_status(200)
			end

			it 'returns the quiz' do
				expect(json['id']).to eq(id)
			end
		end

		context 'when course quiz does not exist' do
			let(:id) { 0 }

			it 'returns status code 404' do
				expect(response).to have_http_status(404)
			end

			it 'returns a not found message' do
				expect(response.body).to match(/Couldn't find Quiz/)
			end
		end
	end

	# Test suite for PUT /courses/:course_id/quizzes
	describe 'POST /courses/:course_id/quizzes' do
		let(:valid_attributes) { { title: 'Visit Narnia', question: 'How?' }.to_json }

		context 'when request attributes are valid' do
			before { post "/courses/#{course_id}/quizzes", params: valid_attributes, headers: headers }

			it 'returns status code 201' do
				expect(response).to have_http_status(201)
			end
		end

		context 'when an invalid request' do
			before { post "/courses/#{course_id}/quizzes", params: {}, headers: headers }

			it 'returns status code 422' do
				expect(response).to have_http_status(422)
			end

			it 'returns a failure message' do
				expect(response.body).to match(/Validation failed: Question can't be blank, Title can't be blank/)
			end
		end
	end

	# Test suite for PUT /courses/:course_id/quizzes/:id
	describe 'PUT /courses/:course_id/quizzes/:id' do
		let(:valid_attributes) { { title: 'Mozart' }.to_json }

		before do
			put "/courses/#{course_id}/quizzes/#{id}", params: valid_attributes, headers: headers 
		end

		context 'when quiz exists' do
			it 'returns status code 204' do
				expect(response).to have_http_status(204)
			end

			it 'updates the quiz' do
				updated_quiz = Quiz.find(id)
				expect(updated_quiz.title).to match(/Mozart/)
			end
		end

		context 'when the quiz does not exist' do
			let(:id) { 0 }

			it 'returns status code 404' do
				expect(response).to have_http_status(404)
			end

			it 'returns a not found message' do
				expect(response.body).to match(/Couldn't find Quiz/)
			end
		end
	end

	# Test suite for DELETE /courses/:course_id/quizzes/:id
	describe 'DELETE /courses/:course_id/quizzes/:id' do
		before { delete "/courses/#{course_id}/quizzes/#{id}", params: {}, headers: headers }
		it 'returns status code 204' do
			expect(response).to have_http_status(204)
		end
	end
end
