require 'rails_helper'

RSpec.describe 'Posts API' do
	# Initialize the test data
	let(:user) { create(:user) }
	let!(:course) { create(:course, professor: user.id) }
	let!(:quiz) { create(:quiz, course_id: course.id) }
	let(:student) { create(:student) }
	let!(:posts) { create_list(:post, 20, quiz_id: quiz.id, student_id: student.id, answered: true) }
	let(:student_id) { student.id }
	let(:course_id) { course.id }
	let(:quiz_id) { quiz.id }
	let(:id) { posts.first.id }
	let(:headers) { valid_student_headers }


	# Test suite for GET /courses/:course_id/quizzes/:quiz_id/posts
	describe 'GET /courses/:course_id/quizzes/:quiz_id/posts' do
		before { get "/courses/#{course_id}/quizzes/#{quiz_id}/posts", params: {}, headers: headers }

		context 'when course_quiz exists' do
			it 'returns status code 200' do
				expect(response).to have_http_status(200)
			end

			it 'returns all course_quiz_posts' do
				expect(json.size).to eq(20)
			end
		end

		context 'when course_quiz does not exist' do
			let(:quiz_id) { 0 }

			it 'returns status code 404' do
				expect(response).to have_http_status(404)
			end

			it 'returns a not found message' do
				expect(response.body).to match(/Couldn't find Quiz/)
			end
		end
	end

	# Test suite for GET /courses/:course_id/quizzes/:id/posts/:id
	describe 'GET /courses/:course_id/quizzes/:quiz_id/posts/:id' do
		before { get "/courses/#{course_id}/quizzes/#{quiz_id}/posts/#{id}", params: {}, headers: headers }

		context 'when course quiz exists' do
			it 'returns status code 200' do
				expect(response).to have_http_status(200)
			end

			it 'returns the post' do
				expect(json['id']).to eq(id)
			end
		end

		context 'when course quiz_post does not exist' do
			let(:id) { 0 }

			it 'returns status code 404' do
				expect(response).to have_http_status(404)
			end

			it 'returns a not found message' do
				expect(response.body).to match(/Couldn't find Post/)
			end
		end
	end
	# Test suite for PUT /courses/:course_id/quizzes/:quiz_id/posts/:id
	describe 'PUT /courses/:course_id/quizzes/:quiz_id/posts/:id' do
		let(:valid_attributes) { { answered: true, multiChoice: 'B', longForm: 'This is a better answer to a question...' }.to_json }

		before do
			put "/courses/#{course_id}/quizzes/#{quiz_id}/posts/#{id}", params: valid_attributes, headers: headers 
		end

		context 'when post exists' do
			it 'returns status code 204' do
				expect(response).to have_http_status(204)
			end

			it 'updates the post' do
				updated_post = Post.find(id)
				expect(updated_post.multiChoice).to match(/B/)
				expect(updated_post.longForm).to match(/This is a better answer to a question./)
			end
		end

		context 'when the post does not exist' do
			let(:id) { 0 }

			it 'returns status code 404' do
				expect(response).to have_http_status(404)
			end

			it 'returns a not found message' do
				expect(response.body).to match(/Couldn't find Post/)
			end
		end
	end

	# Test suite for DELETE /courses/:id
	describe 'DELETE /courses/:course_id/quizzes/:quiz_id/posts/:id' do
		before { delete "/courses/#{course_id}/quizzes/#{quiz_id}/posts/#{id}", params: {}, headers: headers }

		it 'returns status code 204' do
			expect(response).to have_http_status(204)
		end
	end
end
