require 'rails_helper'

RSpec.describe Post, type: :model do
  it { should belong_to(:quiz) }
  it { should belong_to(:student) }
end
