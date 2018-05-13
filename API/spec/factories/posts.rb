FactoryBot.define do
	qtype = rand(3)
	factory :post do
		if qtype == 0
			multiChoice { Faker::Lorem.characters(1)}
		elsif qtype == 1
			longForm { Faker::Lorem.sentence }
		elsif qtype == 2
			picture { Faker::Internet.url }
		end
		quiz_id nil
		student_id nil
	end
end
