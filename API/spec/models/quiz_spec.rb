require 'rails_helper'

RSpec.describe Quiz, type: :model do
	it { should belong_to(:course) }
	it { should validate_presence_of(:title) }
	it { should validate_presence_of(:question) }
	it {should have_many(:posts)}
end
