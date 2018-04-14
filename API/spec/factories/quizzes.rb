FactoryBot.define do
	factory :quiz do
		title {Faker::Lorem.word }
		question {Faker::Lorem.sentence }
		#started false
		course_id nil
	end
end
