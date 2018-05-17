FactoryBot.define do
	factory :quiz do
		title {Faker::Lorem.word }
		question {Faker::Lorem.sentence }
		question_type {Faker::Lorem.word }
		started false
		course_id nil
	end
end
