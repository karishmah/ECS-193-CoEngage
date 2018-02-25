require "rails_helper"

RSpec.describe ApplicationController, type: :controller do
	# create test user
	
	describe "#authorize_request" do
		let!(:user) { create(:user) }
		let(:invalid_headers_user) { { 'Authorization' => nil } }
		let(:headers_user) { { 'Authorization' => user_token_generator(user.id) } }
		let!(:student) { create(:student) }
		let(:headers_student) { { 'Authorization' => student_token_generator(student.id) } }
		let(:invalid_headers_student) { { 'Authorization' => nil } }

		context "when auth token is passed" do
			before { allow(request).to receive(:headers).and_return(headers_user) }

			# private method authorize_request returns current user
			it "sets the current user" do
				expect(subject.instance_eval { authorize_request}).to eq(user)
			end
		end

		context "when auth token is not passed" do
			before do
				allow(request).to receive(:headers).and_return(invalid_headers_user)
			end

			it "raises MissingToken error" do
				expect { subject.instance_eval { authorize_request } }.
					to raise_error(ExceptionHandler::MissingToken, /Missing token/)
			end
		end
		context "when auth token is passed" do
			before { allow(request).to receive(:headers).and_return(headers_student) }

			# private method authorize_request returns current student
			it "sets the current student" do
				expect(subject.instance_eval { authorize_request }).to eq(student)
			end
		end

		context "when auth token is not passed" do
			before do
				allow(request).to receive(:headers).and_return(invalid_headers_student)
			end

			it "raises MissingToken error" do
				expect { subject.instance_eval { authorize_request } }.
					to raise_error(ExceptionHandler::MissingToken, /Missing token/)
			end
		end
	end
end
