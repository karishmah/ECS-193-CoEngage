require 'rails_helper'

RSpec.describe Course, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
	it { should have_many(:quizzes).dependent(:destroy) }
	it { should validate_presence_of(:title) }
	it { should validate_presence_of(:description) }
	it { should validate_presence_of(:professor) }
end
