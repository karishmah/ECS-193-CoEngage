Rails.application.routes.draw do
		# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
		resources :courses do
				resources :quizzes do
					resources :posts
				end
		end

		post 'auth/login_user', to: 'authentication#authenticate_user'
		post 'auth/login_student', to: 'authentication#authenticate_student'
		post 'signup_user', to: 'users#create'
		post 'register_students', to: 'register#register'
		post 'signup_student', to: 'students#create'
end
