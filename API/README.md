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

	+ The Authorization token will be returned as a json request on login or
	  signup in this form

```
{
    "auth_token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1MjA3MzQ0Mzl9.35mevCQG59Lz_qsOJmo_dkJHiHr1z35YPtDVzO3Wq8A"
}
```
	+ To use the authorization header using the httpie CLI, you can use

```
$ http --print HBhb GET localhost:3000/courses Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1MjA3MzQ0Mzl9.35mevCQG59Lz_qsOJmo_dkJHiHr1z35YPtDVzO3Wq8A"
```

* Deployment instructions
	+ TODO

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
	+ By storing the auth token and using it as a header in each subsequent
	  request, the current session can get or post for the particular user at
	  each endpoint
	+ Get requests require no input parameters, each post request has a list of
	  required parameters provided. (Note: these are subject to change during
	  the course of development)

* API Endpoints

* students_course
	* GET		/courses/:course_id/students
* course_quiz_posts 
	* GET 		/courses/:course_id/quizzes/:quiz_id/posts(.:format) 
	* POST 	/courses/:course_id/quizzes/:quiz_id/posts(.:format)
		* required: 
		* optional: multiChoice, longForm, picture (will only accept one of the three)
* course_quiz_post 
	* GET 		/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format)
	* PATCH 	/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format)
	* PUT 		/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format)
	* DELETE 	/courses/:course_id/quizzes/:quiz_id/posts/:id(.:format)
* course_quizzes	
	*  GET 	/courses/:course_id/quizzes(.:format)
	* POST 	/courses/:course_id/quizzes(.:format)
		* required: title, question, question_type
		* optional: N/A
* course_quiz	
	* GET 		/courses/:course_id/quizzes/:id(.:format)
	* PATCH 	/courses/:course_id/quizzes/:id(.:format)
	* PUT 		/courses/:course_id/quizzes/:id(.:format)
	* DELETE 	/courses/:course_id/quizzes/:id(.:format)
* courses	
	* GET 	/courses(.:format)
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
		* required: name, email, password
		* optional: N/A
* register_students
	* POST 	/register_students(.:format)
		* required: roster
			* NOTE: roster is the contents of a csv file uploaded by the professor.
					We will send the whole plain text as one http request. This
					may change later, but is the format for now.
			* NOTE2: Likely to change once canvas integration is complete
		* optional: N/A
* register_student
	* POST 	/register_students(.:format)
		* required: email, professor, title
			* NOTE: email is the email of the student, professor is the name of
					the professor teaching the course, and title is the title
					of the course in question.
		* optional: N/A
* signup_student
	* POST 	/signup_student(.:format)
		* required: name, sid, email, password
		* optional: N/A
* change_student_password 
	*PUT    /change_student_password(.:format)
		* required: password
		* optional: N/A
* change_user_password 
	*PUT    /change_user_password(.:format)
		* required: password
		* optional: N/A


