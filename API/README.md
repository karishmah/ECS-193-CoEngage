# CoEngage Server API

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
	* The Unit Testing is written using the rspec Ruby Gem.
	* In order to run the tests run ``` rspec ``` while in the API directory
	* For running a test server locally, use ``` rails server ``` while in the 
		API directory.
		* to get a feel for the different http requests, httpie is an extremely
		  useful command line tool to test different parameters
```
$ http --print HBhb POST localhost:3000/signup_user  name="Lilliana Graham" email="foo@bar.com" password="foobar" password_confirmation="foobar"
```

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions


* Notes on Using API

	+ All requests but login and signup require an Authorization header. 

```
GET /courses HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Authorization: eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1MjA3MzQ0Mzl9.35mevCQG59Lz_qsOJmo_dkJHiHr1z35YPtDVzO3Wq8A
Connection: keep-alive
Host: localhost:3000
```

	+ The Authorization token will be returned as a json request on login or
	  signup in this form

```
{
    "auth_token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1MjA3MzQ0Mzl9.35mevCQG59Lz_qsOJmo_dkJHiHr1z35YPtDVzO3Wq8A"
}
```

	+ By storing the auth token and using it as a header in each subsequent
	  request, the current session can get or post for the particular user at
	  each endpoint
	+ Get requests require no input parameters, each post request has a list of
	  required parameters provided. (Note: these are subject to change during
	  the course of development)

* API Endpoints

* course_quiz_posts 
	* GET 		/courses/:course_id/quizzes/:quiz_id/posts(.:format) 
	* POST 	/courses/:course_id/quizzes/:quiz_id/posts(.:format)
		* required: quiz_id, post_id
		* optional: multiChoice, longForm, picture
* course_quiz_post 
	* GET 		/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format)
	* PATCH 	/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format)
	* PUT 		/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format)
	* DELETE 	/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format)
* course_quizzes	
	*  GET 		/courses/:course_id/quizzes(.:format)
	* POST 	/courses/:course_id/quizzes(.:format)
		* required: title, question
		* optional: N/A
* course_quiz	
	* GET 		/courses/:course_id/quizzes/:id(.:format)
	* PATCH 	/courses/:course_id/quizzes/:id(.:format)
	* PUT 		/courses/:course_id/quizzes/:id(.:format)
	* DELETE 	/courses/:course_id/quizzes/:id(.:format)
* courses	* GET 		/courses(.:format)
	* POST 	/courses(.:format)
		* required: title, description
		* optional: N\A
* course
	* GET 		/courses/:id(.:format)
	* PATCH 	/courses/:id(.:format)
	* PUT 		/courses/:id(.:format)
	* DELETE 	/courses/:id(.:format)
* auth_login_user
	* POST 	/auth/login_user(.:format)
		* required: email, password
		* optional: N/A
* auth_login_student 
	* POST 	/auth/login_student(.:format)
		* required:  email, password
		* optional:  N/A
* signup_user
	* POST 	/signup_user(.:format)
		* required: name, email, password, password_confirmation
		* optional: N/A
* register_students
	* POST 	/register_students(.:format)
		* required: roster
			* NOTE: roster is the contents of a csv file uploaded by the professor.
					We will send the whole plain text as one http request. This
					may change later, but is the format for now.
		* optional: title
* signup_student
	* POST 	/signup_student(.:format)
		* required: name, sid, email, password, password_confirmation
		* optional: N/A

