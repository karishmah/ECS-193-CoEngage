require 'faker'
FactoryBot.define do
	factory :course do
		title {Faker::Lorem.word}
		professor {Faker::Number.number(10) }
		description {Faker::Lorem.paragraph }
	end
end
