require 'rails_helper'

RSpec.describe 'Posts Students API' do
	# Initialize the test data
	let(:prof) { create(:user) }
	let!(:course) { create(:course, professor: prof.id) }
	let(:student) { create(:student) }
	let!(:quiz) { create(:quiz, course_id: course.id) }
	let!(:posts) { create_list(:post, 20, quiz_id: quiz.id, student_id: student.id, answered: true) }
	let(:course_id) { course.id }
	let(:quiz_id) { quiz.id }
	let(:id) { posts.first.id }
	let(:headers) { valid_student_headers }
	before { student.courses << course }

	#TODO: Failing because student is not added to course!
	# Test suite for POST /courses/:course_id/quizzes/:quiz_id/posts
	describe 'POST /courses/:course_id/quizzes/:quiz_id/posts' do
		let(:valid_attributes) { { answered: true,multiChoice: 'A', longForm: 'This is an answer to a question...'}.to_json }

		context 'when request attributes are valid' do
			before { 
				post "/courses/#{course_id}/quizzes/#{quiz_id}/posts", params: valid_attributes, headers: headers }

			it 'returns status code 201' do
				expect(response).to have_http_status(201)
			end
		end

		context 'when an invalid request' do
			before { post "/courses/#{course_id}/quizzes/#{quiz_id}/posts", params: {}, headers: headers }

			it 'returns status code 422' do
				expect(response).to have_http_status(422)
			end

#			it 'returns a failure message' do
#				expect(response.body).to match(/Validation failed: Question can't be blank, Title can't be blank/)
#			end
		end
	end
end

