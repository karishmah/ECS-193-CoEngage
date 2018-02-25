FactoryBot.define do
	factory :quiz do
		title {Faker::Lorem.word }
		question {Faker::Lorem.sentence }
		course_id nil
	end
end
