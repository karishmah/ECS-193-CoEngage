var gCRN;
var courseData;
var auth_token;

function logoutUser(){
	console.log("Logged out user");
	jQuery.ajaxSetup({
		headers:{'Authorization':""}});
	loginLoad();
}

//authenticate the user credentials and set the header as the authentication token
function loginAuth(){
    console.log("Inside loginAuth();");
    var user= document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    /*jQuery.post("https://coengage.online/API/auth/login_user", {email:user, password:pass}, function(result, status){
	if(status=="success"){
		auth_token=result.auth_token;
		console.log("successful post "+auth_token);
       		 jQuery.ajaxSetup({
			headers:{'Authorization':auth_token}});
		mainLoad();
		}
	else{
		document.getElementById("username").value="";
		document.getElementById("password").value="";
		alert("Invalid credentials! Try again.");
	}
    });*/
  $.ajax({
	  url:"https://coengage.online/API/auth/login_user", 
	  type:'post',
	  data:{email:user, password:pass}, 
	  success: function(result, status){
                auth_token=result.auth_token;
                console.log("successful post "+auth_token);
                 var courseContainer = document.getElementById("courseMainContainer");
                        $('#courseMainContainer').empty();
                        var sideContainer = document.getElementById("courseSidebarContainer");
                        $('#courseSidebarContainer').empty(); 
		jQuery.ajaxSetup({
                        headers:{'Authorization':auth_token}});
                mainLoad();
                },
	  error: function(result){
                document.getElementById("username").value="";
                document.getElementById("password").value="";
                alert("Invalid credentials! Try again.");
        }
    });
}	


//function to load login page
function loginLoad(){
    document.getElementById("username").value="";
    document.getElementById("password").value="";
    document.getElementById("login").style.display="block";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("sidebar").style.display="none";
    document.getElementById("courseSidebar").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none"; 
}

//Post information from sign up form and go back to login page
function signupRedirect(){
    console.log("inside signup redirect");
    var nName = document.getElementById("newUser").value;
    var nEmail = document.getElementById("newEmail").value;
    var nPass1 = document.getElementById("newPassword").value;
    var nPass2 = document.getElementById("newPassword2").value;
    if(nPass1===nPass2){
        //POST all information to signup user
	console.log("passwords are same");
        jQuery.post("https://coengage.online/API/signup_user", {name: nName, email: nEmail, password: nPass1}, function(result){console.log("Signed up user");});
        console.log("Successful signup post");
	document.getElementById("newPassword").value="";
        document.getElementById("newPassword2").value="";
        document.getElementById("newUser").value="";
        document.getElementById("newEmail").value="";
        loginLoad();      
    }
    else{
        document.getElementById("newPassword").value="";
        document.getElementById("newPassword2").value="";
        document.getElementById("newUser").value="";
        document.getElementById("newEmail").value="";
        alert("Passwords don't match");
        
    }
    /*document.getElementById("signupPage").style.display="none";
    document.getElementById("login").style.display="block";*/
}

//Load the sign up page 
function signupLoad(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";  
}

//Load the course sidenav bar
function courseNavLoad(){
    document.getElementById("navitem").addEventListener("click", function(){
            document.getElementById("courseSidebar").style.display="block";});
}

function testerFunc(){
    var tableContainer = document.getElementById("studentRosterTable");
    var tRow = document.createElement("tr");
    var tData1 = document.createElement("td");
    var info1 = document.createTextNode("Cell1");
    var tData2 = document.createElement("td");
    var info2 = document.createTextNode("Cell2");
    var tData3 = document.createElement("td");
    var info3 = document.createTextNode("Cell3");
    var tData4 = document.createElement("td");
    var info4 = document.createTextNode("Cell4");
    var tData5 = document.createElement("td");
    var info5 = document.createTextNode("Cell5");
    tData1.appendChild(info1);
    tData2.appendChild(info2);
    tData3.appendChild(info3);
    tData4.appendChild(info4);
    tData5.appendChild(info5);
    tRow.appendChild(tData1);
    tRow.appendChild(tData2);
    tRow.appendChild(tData3);
    tRow.appendChild(tData4);
    tRow.appendChild(tData5);
    tableContainer.appendChild(tRow);
}

//close the course sidenav bar
function closeSidenav(){
        document.getElementById("courseSidebar").style.display="none";
}

var courseList;

//Load the main course page for the user, Get all the courses and display on the main page
function mainLoad(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("sidebar").style.display="block";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";  
    //var courseList = GET all courses for user username
    //createElement in flexContainer for length of courseList
    //appendChild
    //get the courses for variable of user
    //append to the flex container and to the course sidebar
    var courseContainer = document.getElementById("courseMainContainer");
    var sideContainer = document.getElementById("courseSidebarContainer");
    jQuery.get("https://coengage.online/API/courses", function(data, status){
    	if(status){
		while(courseContainer.firstChild){
			courseContainer.removeChild(courseContainer.firstChild);
		}
		while(sideContainer.firstChild){
			sideContainer.removeChild(sideContainer.firstChild);
		}
		courseList=data;
		for(var i=0; i<data.length; i++){
			var btn=document.createElement("button");
			btn.setAttribute("class", "optionButtons");
			btn.setAttribute("onclick", "coursePage('"+data[i].title+"');");
			var t=document.createTextNode(data[i].title);
			btn.appendChild(t);
			courseContainer.append(btn);

			var sidebtn = document.createElement("a");
			sidebtn.setAttribute("href", "#");
			sidebtn.setAttribute("id", "courseNav");
			var t1=document.createTextNode(data[i].title);
			sidebtn.setAttribute("onclick", "coursePage('"+data[i].title+"'); closeSidenav();");
			sidebtn.appendChild(t1);
			sideContainer.appendChild(sidebtn);
		}
	}
    });
    //if status is okay
    /*for(var i=0; i<courseList.length; i++)
        {
            var butn = document.createElement("button");
            butn.class="optionButtons";
            butn.onclick="coursePage('"+courseList[i].title+"')";
            courseContainer.appendChild(butn);
            
            var sidenavContent = document.createElement("a");
            sidenavContent.href="#";
            sidenavContent.id="courseNav";
            //sidenavContent.onclick="coursePage('"+courseList[i].title="'); closeSidenav();";
            sidenavContent.textContent=courseList[i].title;
            sideContainer.appendChild(sidenavContent);
            
        }*/
    //else if status is not normal
        //figure out what to do
}

//Load the add course page
function addCourseLoad(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="block";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";  
}

//Post the information and go back to the main course page
function addCourseRedirect(){
    document.getElementById("addCourse").style.display="none";
    document.getElementById("main").style.display="block";
    var crn= document.getElementById("CRN").value;
    var courseTitle= document.getElementById("courseTitle").value;
    var courseRos = document.getElementById("courseRoster").value;
    /*courseRosList=courseRos.split('\\');
    for(i=0; i<courseRosList.length; i++){
	    console.log(courseRosList[i]);
	    if(courseRosList[i].includes(".txt")){
		    courseRoster=courseRosList[i];
		    console.log("course roster: "+courseRoster);
	    }
    }*/
    $.ajax({
	url: "https://coengage.online/API/courses", 
	type: 'post',
	data: {title: courseTitle, description: "this is description"}, 
        success: function(result){
			console.log(courseTitle+" course posted succesfully");
    			jQuery.post("https://coengage.online/API/register_students", {title: courseTitle, roster:courseRos}, function(result){console.log(courseTitle+" course roster posted succesfully");});	
			var courseContainer = document.getElementById("courseMainContainer");
    			$('#courseMainContainer').empty();
    			var sideContainer = document.getElementById("courseSidebarContainer");
    			$('#courseSidebarContainer').empty();
    			var btn=document.createElement("button");
                        btn.setAttribute("class", "optionButtons");
                        btn.setAttribute("onclick", "coursePage('"+courseTitle+"');");
                        var t=document.createTextNode(courseTitle);
                        btn.appendChild(t);
                        courseContainer.append(btn);

                        var sidebtn = document.createElement("a");
                        sidebtn.setAttribute("href", "#");
                        sidebtn.setAttribute("id", "courseNav");
                        var t1=document.createTextNode(courseTitle);
                        sidebtn.setAttribute("onclick", "coursePage('"+courseTitle+"'); closeSidenav();");
                        sidebtn.appendChild(t1);
                        sideContainer.appendChild(sidebtn);
           		document.getElementById("courseTitle").value="";
			document.getElementById("courseRoster").value="";
			document.getElementById("CRN").value="";
    			mainLoad();
	}});
}

//Don't need this beyond testing
function mainPageRedirect(){
    document.getElementById("login").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("sidebar").style.display="block";
} ///might need to remove this function
  
//mainPageLoad()
/*function mainLoadPage(){
    mainLoad();
    document.getElementById("navitem").addEventListener("click", function(){
            document.getElementById("main").style.display="block";});
}
*/
var gTitle; 
//Load the course page with the divs of students and tests
function coursePage(title){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="block";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";  
    document.getElementById("main").style.display="none";
    var x= document.getElementById("coursePageTitle");
    x.textContent=title;
    for(var i=0; i<courseList.length; i++){
	    if(courseList[i].title===title){
		    gTitle=title;
		    gCRN=courseList[i].id;
	    }
    }
}

function deleteCourse(){
	$.ajax({
		url: "https://coengage.online/API/courses/"+gCRN, 
		type: 'delete',
		success: function(result){
			console.log("Deleted course");
			mainLoad();
		}
	});
}

//Load the students belonging to the course
function courseStudents(){
    document.getElementById("login").style.display="none";
    document.getElementById("deleteStudent").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="block";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("deleteStudent").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";  
    console.log("gCRN: "+gCRN);
    var queryURL="https://coengage.online/API/courses/"+gCRN+"/students";
    jQuery.get(queryURL,function(data, status){
	    if(status){
		    var students=data;
		    var studentDisplay= document.getElementById("studentRosterTable");
    		    for(i=0; i<data.length;  i++)
        		{
    			    var fname = students[i].name;
       			    var lname = students[i].lname;
    			    var id = students[i].sid;
   			    var email = students[i].email;
     			    var tRow = document.createElement("tr");
    var tData1 = document.createElement("td");
    var info1 = document.createTextNode(fname);
    var tData2 = document.createElement("td");
    var info2 = document.createTextNode(lname);
    var tData3 = document.createElement("td");
    var info3 = document.createTextNode(id);
    var tData4 = document.createElement("td");
    var info4 = document.createTextNode(email);
    var tData5 = document.createElement("td");
    var info5 = document.createTextNode("98");
    tData1.appendChild(info1);
    tData2.appendChild(info2);
    tData3.appendChild(info3);
    tData4.appendChild(info4);
    tData5.appendChild(info5);
    tRow.appendChild(tData1);
    tRow.appendChild(tData2);
    tRow.appendChild(tData3);
    tRow.appendChild(tData4);
    tRow.appendChild(tData5);
    studentDisplay.appendChild(tRow);
			}
		   }
    });
}

function sortStudentsAlpha(colNum){
    var tbl, rows, switching, i, x, y , should, dir, countSwitch=0;
    tbl=document.getElementById("studentRosterTable");
    console.log("this is table name "+tbl);
    switching=true;
    dir="asc";
    while(switching){
        switching=false;
        rows=tbl.getElementsByTagName("TR");
        for(i=1; i<(rows.length-1); i++){
            should = false;
            x=rows[i].getElementsByTagName("TD")[colNum];
            y=rows[i+1].getElementsByTagName("TD")[colNum];
            console.log("for loop "+x+y);
            if(dir=="asc"){
                if(x.innerHTML.toLowerCase()>y.innerHTML.toLowerCase()){
                    console.log("innerstufff "+x+" "+y);
                    should=true;
                    break;
                }
            }
        }
        if(should){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching=true;
            countSwitch++;
        }
        else{
            if(countSwitch==0 && dir=="asc"){
                dir="desc";
                switching=true;
            }
        }
    }
}

function sortStudentsNum(colNum){
    var tbl, rows, switching, i, x, y , should, dir, countSwitch=0;
    tbl=document.getElementById("studentRosterTable");
    switching=true;
    dir="asc";
    while(switching){
        switching=false;
        rows=tbl.getElementsByTagName("TR");
        for(i=1; i<(rows.length-1); i++){
            should = false;
            x=rows[i].getElementsByTagName("TD")[colNum];
            y=rows[i+1].getElementsByTagName("TD")[colNum];
            if(dir=="asc"){
                if(Number(x.innerHTML) > Number(y.innerHTML)) {
                    should=true;
                    break;
                }
            }
        }
        if(should){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching=true;
            countSwitch++;
        }
        else{
            if(countSwitch==0 && dir=="asc"){
                dir="desc";
                switching=true;
            }
        }
    }
}


function searchStudents(){
    var input, filter, table, tr, td, i, td1, td2, td3, td4;
    input=document.getElementById("studentSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentRosterTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        td3 = tr[i].getElementsByTagName("td")[3];
        td4 = tr[i].getElementsByTagName("td")[4];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td1.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } 
            else if(td3===input){
                tr[i].style.display = "";
            }
            else if(Number(td2.innerHTML)==Number(filter)||Number(td4.innerHTML)==Number(filter)){
                 tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
    }
}

function searchTestBank(){
	var input, filter, table, tr, td, i;
	input=document.getElementById("testBankSearch");
	filter = input.value.toUpperCase();
    	table = document.getElementById("testBankTable");
	tr = table.getElementsByTagName("tr");
    	for (i = 0; i < tr.length; i++) {
        	td = tr[i].getElementsByTagName("td")[0];
		if (td) {
            		if (td.innerHTML.toUpperCase().indexOf(filter) > -1 || td===input)
				tr[i].style.display = "";
			else
				tr[i].style.display = "none";
		}
	}
}

function deleteStudentLoad(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";
    document.getElementById("deleteStudent").style.display="block";
}

function deleteStudentRedirect(){
    var email=document.getElementById("delemail").value;
    var id=document.getElementById("delstudentID").value;
    //delete from database
    document.getElementById("deleteStudent").style.display="none";
    courseStudents();
}

//Load the add a student page
function addStudentLoad(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="block";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none"; 
    document.getElementById("deleteStudent").style.display="none";

}

//Post the student data and go back to the students page
function addStudentRedirect(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="block";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none"; 
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var idnum = document.getElementById("studentID").value;
    var stemail = document.getElementById("email").value;
    $.ajax({
	   url:'https://coengage.online/API/register_student',
	   type:'post',
	   data:{course_id: gCRN, name:first+" "+last, sid:idnum, email:stemail},
	   success:function(){
		   console.log("added student");
		   var studentDisplay= document.getElementById("studentRosterTable");
		   $('#studentRosterTable').empty();
		   courseStudents();
	   }//may have to add the student here and then redirect
    });
    //jQuery.post("https://coengage.online/API/
    courseStudents();
}

var gID;
var getQuestion; 
var mcqAnswers;
var currTitle;
var ques;
var courseQuizzes;

//Load the course tests page with the divs of test bank and student work
function courseTests(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="block";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";  
}

//Load the test bank page
function testBankLoad(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="block";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";
    var queryURL="https://coengage.online/API/courses/"+gCRN+"/quizzes";
    console.log(queryURL);
    jQuery.get(queryURL, function(result){
	    var container=document.getElementById("testBankTable");
	    courseQuizzes=result;
	    while(container.rows.length>0)
		    container.deleteRow(0);
	    for(var i=0; i<result.length; i++){
		    var tRow = document.createElement("tr");
    		    var tData1 = document.createElement("td");
		    var p1=document.createElement("p");
		    p1.setAttribute("onclick", "displayQuestionLoad('"+result[i].title+"','"+result[i].question+"','"+result[i].id+"');");
		    var info1=document.createTextNode(result[i].title);
		    p1.appendChild(info1);
		    tData1.appendChild(p1);
		    tRow.appendChild(tData1);
		    container.appendChild(tRow);
	    }
	});
}

//Load the addQuestion page
function addQuestionLoad(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="block";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";  
}

//If text type is selected
function textLoad(){
    document.getElementById("imgSel").checked=false;
    document.getElementById("mcqSel").checked=false;
    document.getElementById("textType").style.display="block";
    document.getElementById("imageType").style.display="none";
    document.getElementById("mcqType").style.display="none";
    document.getElementById("mcqNumberType").style.display="none";
}

//If image type is selected
function imageLoad(){
    document.getElementById("textSel").checked=false;
    document.getElementById("mcqSel").checked=false;
    document.getElementById("textType").style.display="none";
    document.getElementById("imageType").style.display="block";
    document.getElementById("mcqType").style.display="none";
    document.getElementById("mcqNumberType").style.display="none";
}

//If mcq type is selected
function mcqLoad(){
 //   mcqAnswers=document.getElementById("mcqAnswer").value;
    document.getElementById("textSel").checked=false;
    document.getElementById("imgSel").checked=false;
    document.getElementById("textType").style.display="none";
    document.getElementById("imageType").style.display="none";
    document.getElementById("mcqType").style.display="none";
    document.getElementById("mcqNumberType").style.display="block";
}

//Add number of mcq answer fields dynamically
function addfields(){
    document.getElementById("mcqNumberType").style.display="none";
    var numInput = document.getElementById("numMcqOpt").value;
    var container = document.getElementById("mcqOptsType");
    container.textContent=numInput;
        container.removeChild(container.lastChild);
    container.appendChild(document.createElement("br"));
    for(i=0; i<numInput;i++){
        container.appendChild(document.createTextNode("Option: " + (i+1)+" "));
        var input=document.createElement("input");
        input.setAttribute("type","text");
        input.setAttribute("class", "mcqAnswer");
        input.setAttribute("id","option"+i);
        input.setAttribute("style","width:900px");
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
   document.getElementById("mcqType").style.display="block";
   document.getElementById("mcqOptsType").style.display="block";
}

//Post form data and redirect to test bank page
function addQuestionRedirect(typeQuestion){
   	//var qTitle=document.getElementById("qTitle").value; 
	if(typeQuestion=="mcq"){
		getQuestion=document.getElementById("mcqQuestion").value;
        	var qTitle=document.getElementById("qTitlemcq").value;
		$.ajax({
			url:"https://coengage.online/API/courses/"+gCRN+"/quizzes",
			type:'post',
			data:{title: qTitle, question: getQuestion, question_type: 'multiChoice'}, 
			success:function(result){
				document.getElementById("textSel").checked=false;
    				document.getElementById("imgSel").checked=false;
				document.getElementById("mcqQuestion").value="";
				document.getElementById("numMcqOpt").value="";
				testBankLoad();
            			console.log("Question posted successfully to course "+gCRN);
        		}});
            }
	else if(typeQuestion=="text"){
		var qTitle=document.getElementById("qTitleText").value;
                getQuestion=document.getElementById("textQuestion").value;
                $.ajax({
                        url:"https://coengage.online/API/courses/"+gCRN+"/quizzes", 
                        type:'post',
                        data:{title: qTitle, question: getQuestion, question_type: 'longForm'}, 
                        success:function(result){
                                document.getElementById("mcqSel").checked=false;
                                document.getElementById("imgSel").checked=false;
                                document.getElementById("textQuestion").value="";
                                testBankLoad();
                                console.log("Question posted successfully to course "+gCRN);
                        }});
            }
	else if(typeQuestion=="image"){
		var qTitle=document.getElementById("qTitleImage").value;
                getQuestion=document.getElementById("imageQuestion").value;
                $.ajax({
                        url:"https://coengage.online/API/courses/"+gCRN+"/quizzes", 
                        type:'post',
                        data:{title: qTitle, question: getQuestion, question_type: 'picture'}, 
                        success:function(result){
                                document.getElementById("textSel").checked=false;
                                document.getElementById("mcqSel").checked=false;
                                document.getElementById("imageQuestion").value="";
                                testBankLoad();
                                console.log("Question posted successfully to course "+gCRN);
                        }});
            }
	else{
		console.log("Unsuccessful quiz post");
	}


   
    /*document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="block";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none"; 
    */
}

//Load the question page
function displayQuestionLoad(title,question,id){
    currTitle=title;
    gID=id;
    ques=question;
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="block";
    document.getElementById("studentAnswers").style.display="none";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";  
    var x= document.getElementById("questionTitle");
    x.textContent=currTitle;
    var qDisplay=document.createTextNode(ques);
    $('#qDisp').empty();
    document.getElementById("qDisp").appendChild(qDisplay);
    //if type==mcq
    //GET mcqAnswers
    //for i=0 i<mcqAnswers.length i++
    //container.appendChild(mcqAnswers[i]);
}

function deleteQuestion(){
	$.ajax({
		url:'https://coengage.online/API/courses/'+gCRN+'/quizzes/'+gID,
		type:'delete',
		success:function(){
			console.log("Deleted question successfully");
			$('#testBankTable').empty();
			testBankLoad();
	}	
	});
}
var startedQ=false;
var stoppedQ=true;
//if user wants to ask the question
function askQuestion(){
    	document.getElementById("popup").style.display="block";
}

//if user wants to cancel asking the question
function cancel(){ //be able to cancel only if not started or it is stopped
    if(startedQ==false&& stoppedQ==true)
	document.getElementById("popup").style.display="none";
}

//sending response to start projecting to apps
function startQ(){
	  $.ajax({
                url:'https://coengage.online/API/courses/'+gCRN+'/quizzes/'+gID,
                type:'put',
                data:{started: 'true'},
                success:function(){
                        console.log("Started question!");
			startedQ=true;
		}
	  });

    //send response to server to start asking
    //send question marked as asked
}

//sending response to stop projecting to apps
function stopQ(){
	if(startedQ==true){
          	$.ajax({
                	url:'https://coengage.online/API/courses/'+gCRN+'/quizzes/'+gID,
                	type:'put',
                	data:{started: 'false'},
                	success:function(){
                        	console.log("Stopped question!");
                        	startedQ=false;
				document.getElementById("popup").style.display="none";
				stoppedQ=true;
                	}
          	});
	}
	else{
		alert("Quiz has not been started yet!");
	}
        
    //send response to server to stop asking
}

//Load the student work page
function answeredLoad(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="none";
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("students").style.display="none";
    document.getElementById("addStudent").style.display="none";
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("displayQuestion").style.display="none";
    document.getElementById("studentAnswers").style.display="block";
    document.getElementById("displayAnsweredQuestion").style.display="none";
    document.getElementById("displayImageAnsweredQuestion").style.display="none";  
    //GET ALL ANSWERED QUESTIONS AND APPEND TO TABLE
}

//Might not need this refer to testBankLoad
function getAllQuestion(){
    //GET all questions belonging to gCRN
    //empty previous
    //append one by one to container table "questionBank" id="allTestBank"
}

//might not need this refer to answeredLoad()
function getAllAnsweredQuestions(){
    //GET all questions belonging to gCRN that are marked answered
    //empty previous
    //append one by one to container table "questionBank" id="ansTestBank"
}

function displayAnsQuestionLoad(question){
    document.getElementById("studentAnswers").style.display="none";
    //GET question type for question
    //if(type=="text" || type=="mcq"){
    //set header as question
    //GET all student answers for the question and append to roster
    //document.getElementById("displayAnsweredQuestion").style.display="block";
    //else if(type=="image")
    //set header as question
    //GET all URL links, set img title to student name
    //append to div
    //document.getElementById("displayImageAnsweredQuestion").style.display="block";
}
