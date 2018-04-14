FactoryBot.define do
	factory :student do
		name { Faker::Name.name }
		email { Faker::Internet.unique.email }
		password 'foobar'
		sid { Faker::Number.number(9) }
	end
end
