FactoryBot.define do
	factory :post do
		multiChoice 'F'
		longForm { Faker::Lorem.sentence }
		quiz_id nil
		student_id nil
	end
end
