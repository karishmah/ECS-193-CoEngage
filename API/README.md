# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
	2.4

* System dependencies
	nginx
	ruby
	postfix

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* API Endpoints
#### 			prefix Verb 	URI Pattern													Action
* course_quiz_posts 
	* GET 		/courses/:course_id/quizzes/:quiz_id/posts(.:format) 		posts#index 
	* 				   POST 	/courses/:course_id/quizzes/:quiz_id/posts(.:format) 		posts#create
* course_quiz_post 
	* GET 		/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format) 	posts#show
	* PATCH 	/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format) 	posts#update
	* PUT 		/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format) 	posts#update
	* DELETE 	/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format) 	posts#destroy
	* course_quizze	
	*  GET 		/courses/:course_id/quizzes(.:format) 						quizzes#index
	*               POST 	/courses/:course_id/quizzes(.:format) 						quizzes#create
* course_quiz	
	* GET 		/courses/:course_id/quizzes/:id(.:format) 					quizzes#show
	* PATCH 	/courses/:course_id/quizzes/:id(.:format) 					quizzes#update
	* PUT 		/courses/:course_id/quizzes/:id(.:format) 					quizzes#update
	* DELETE 	/courses/:course_id/quizzes/:id(.:format) 					quizzes#destroy
	* courses	* GET 		/courses(.:format) 											courses#index
	* POST 	/courses(.:format) 											courses#create
* course
	* GET 		/courses/:id(.:format) 										courses#show
	* PATCH 	/courses/:id(.:format) 										courses#update
	* PUT 		/courses/:id(.:format) 										courses#update
	* DELETE 	/courses/:id(.:format) 										courses#destroy
* auth_login_user
	* POST 	/auth/login_user(.:format) 									authentication#authenticate_user	
* auth_login_student 
	* POST 	/auth/login_student(.:format) 								authentication#authenticate_student
* signup_user
	* POST 	/signup_user(.:format) 										users#create
* register_students
	* POST 	/register_students(.:format) 								register#register
* signup_student
	* POST 	/signup_student(.:format) 									students#create

