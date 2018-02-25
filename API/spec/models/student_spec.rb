require 'rails_helper'

RSpec.describe Student, type: :model do
  it { should have_many(:posts) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:sid) }
  it { should validate_presence_of(:password_digest) }

end
