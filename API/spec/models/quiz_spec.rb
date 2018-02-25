require 'rails_helper'

RSpec.describe Quiz, type: :model do
		pending "add some examples to (or delete) #{__FILE__}"
	it { should belong_to(:course) }
	it { should validate_presence_of(:title) }
	it { should validate_presence_of(:question) }
end
