Rails.application.routes.draw do
		# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
		resources :courses do
			get 'students', on: :member
			get 'student_posts', on: :member
			post 'drop_student', on: :member
				resources :quizzes do
					resources :posts
				end
		end

		post 'auth/login_user', to: 'authentication#authenticate_user'
		post 'auth/login_student', to: 'authentication#authenticate_student'
		post 'signup_user', to: 'users#create'
		post 'register_students', to: 'register#register_all'
		post 'register_student', to: 'register#register'
		post 'signup_student', to: 'students#create'
		put 'change_student_password', to: 'students#update'
		put 'change_user_password', to: 'users#update'
		post 'forgot_student_password', to: 'studentss#password_reset'
		post 'forgot_user_password', to: 'users#password_reset'
end
