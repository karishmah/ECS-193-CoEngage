FactoryBot.define do
	factory :post do
		multiChoice { Faker::Lorem.characters(1)}
		longForm { Faker::Lorem.sentence }
		picture { Faker::Internet.url }
		answered { Faker::Boolean.boolean(0.5) }
		quiz_id nil
		student_id nil
	end
end
