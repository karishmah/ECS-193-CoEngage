FactoryBot.define do
	factory :student do
		name { Faker::Name.name }
		email 'foo@bar.com'
		password 'foobar'
		sid 999999999
	end
end
