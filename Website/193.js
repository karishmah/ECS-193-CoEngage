var gCRN;
var courseData;

//authenticate the user credentials and set the header as the authentication token
function loginAuth(){
    console.log("Inside loginAuth();");
    var user= document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    //jQuery.post("http://coengage.online:3000/auth/login_user", {email:user, password:pass}, function(result, status){
    //    console.log("successful post "+result);
        //set header
        //if status is okay, call mainLoad();
    //});
    //if status is good, redirect to main page, and dont display login page
}
	/*request.post("https:coengage.online:3000/auth/login_user", {
            email: user,
            password: pass
        },
            function(reqNum, value, exception){
                if(value){
                        console.log("This is value "+value);
                }
                else    
                        console.log("This is else value "+value);
        }
    );
}*/
    /*var xhttp= new XMLHttpRequest();
    var data={email:user, password:pass};
    console.log(data);
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4){
            var responseData = xhttp.responseText;
            console.log(responseData);
            var response=JSON.parse(responseData);
            console.log("This is response "+response);
        }
    };
    xhttp.open("POST", "https://coengage.online:3000/auth/login_user", true);
    xhttp.setRequestHeader("Content-type", 'application/json; charset=UTF-8');
    xhttp.send(JSON.stringify(data));*/
    /*var reqNum = JSONRequest.post()
        "https:coengage.online:3000/auth/login_user", {
            email: user,
            password: pass
        },
            function(reqNum, value, exception){
                if(value){
                        console.log("This is value "+value);
                }
                else    
                        console.log("This is else value "+value);
        }
    );
    console.log("This is reqNum "+reqNum);*/

//function to load login page
function loginLoad(){
    document.getElementById("login").style.display="block";
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
}

//Post information from sign up form and go back to login page
function signupRedirect(){
    var nName = document.getElementById("newUser").value;
    var nEmail = document.getElementById("newEmail").value;
    var nPass1 = document.getElementById("newPassword").value;
    var nPass2 = document.getElementById("newPassword2").value;
    if(nPass1===nPass2){
        //POST all information to signup user
        //jquery.post("http://coengage.online:3000/signup_user", {name: nName, email: nEmail, password: //nPass1, password_confirmation: nPass2}, function(result){console.log("Signed up user");});
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

//Load the main course page for the user, Get all the courses and display on the main page
function mainLoad(){
    document.getElementById("login").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("main").style.display="block";
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
    //var courseList = GET all courses for user username
    //createElement in flexContainer for length of courseList
    //appendChild
    //get the courses for variable of user
    //append to the flex container and to the course sidebar
    var courseContainer = document.getElementById("flexContainer");
    var sideContainer = document.getElementById("sidenav2");
    var courseList = jQuery.get("https://coengage.online:3000/courses", function(data, status){
        console.log("This is data: "+data+" And this is status: "+status);
    });
    //if status is okay
    for(var i=0; i<courseList.length; i++)
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
            
        }
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
    var crn= document.getElementById("CRN");
    var title= document.getElementById("courseTitle");
    var courseRos = document.getElementById("courseRoster");
    //jQuery.post("http://coengage.online:3000/courses", DATA GOES HERE, function(result){console.log("successful post");};
    //POST ALL THESE TO THE DATABASE
    //mainLoad();
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
     //gCRN=GET CRN FOR Course with title TITLE
    var x= document.getElementById("coursePageTitle");
    x.textContent=title;
}

//Load the students belonging to the course
function courseStudents(){
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
    /*var students = GET STUDENTS FOR COURSE WITH CRN gCRN
    var studentDisplay= document.getElementById("studentTable");
    for(i=0; i<students.length;  i++)
        {
        var fname = students[i].fname;
        var lname = students[i].lname;
        var id = students[i].id;
        var email = students[i].email;
        var row = studentDisplay.insertRow(0);
        var stGrade = GET ALL GRADES FOR STUDENT i;
        var numQ = GET num of questions asked for course gCRN;
        var c1 = row.insertCell(0);
        c1.textContent=fname;
        var c2 = row.insertCell(1);
        c2.textContent=lname;
        var c3 = row.insertCell(2);
        c3.textContent=id;
        var c4 = row.insertCell(3);
        c4.textContent=email;
        var c5 = row.insertCell(4);
        var finalGrade;
        for(j=0; j<stGrade.length; j++){
            finalGrade+=stGrade[i];
        }
        c5.textContent= (finalGrade/numQ);
        }*/
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
    /*var first = document.getElementById("firstName");
    var last = document.getElementById("lastName");
    var idnum = document.getElementById("studentID");
    var stemail = document.getElementById("email");
    POST THESE TO COURSE OF CRN NUM gCRN*/
    //courseStudents();
}

var getQuestion; 
var mcqAnswers;
var currQuestion;

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
    //Get all questions for course
    //Post to the container
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
    getQuestion=document.getElementById("textQuestion");
    document.getElementById("imgSel").checked=false;
    document.getElementById("mcqSel").checked=false;
    document.getElementById("textType").style.display="block";
    document.getElementById("imageType").style.display="none";
    document.getElementById("mcqType").style.display="none";
    document.getElementById("mcqNumberType").style.display="none";
}

//If image type is selected
function imageLoad(){
    getQuestion=document.getElementById("imageQuestion");
    document.getElementById("textSel").checked=false;
    document.getElementById("mcqSel").checked=false;
    document.getElementById("textType").style.display="none";
    document.getElementById("imageType").style.display="block";
    document.getElementById("mcqType").style.display="none";
    document.getElementById("mcqNumberType").style.display="none";
}

//If mcq type is selected
function mcqLoad(){
    getQuestion=document.getElementById("mcqQuestion");
    mcqAnswers=document.getElementById("mcqAnswer");
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
        input.type="text";
        input.class="mcqAnswer";
        //input.id="option"+i;
        input.style="width:900px;"
        container.appendChild(input);
        container.appendChild(document.createElement("br"));
    }
   document.getElementById("mcqType").style.display="block";
   document.getElementById("mcqOptsType").style.display="block";
}

//Post form data and redirect to test bank page
function addQuestionRedirect(typeQuestion){
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
    //POST typeQuestion to course with crn gCRN;
    //POST getQuestion
    //if typeQuestion == "mcq"
    //POST mcqAnswers
    testBankLoad();
}

//Load the question page
function displayQuestionLoad(question){
    currQuestion=question;
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
    x.textContent=currQuestion;
    //GET question type
    //if type==mcq
    //GET mcqAnswers
    //for i=0 i<mcqAnswers.length i++
    //container.appendChild(mcqAnswers[i]);
}

//if user wants to ask the question
function askQuestion(){
    document.getElementById("popup").style.display="block";
}

//if user wants to cancel asking the question
function cancel(){ //be able to cancel only if not started or it is stopped
    document.getElementById("popup").style.display="none";
}

//sending response to start projecting to apps
function startQ(){
    //send response to server to start asking
    //send question marked as asked
}

//sending response to stop projecting to apps
function stopQ(){
    //send response to server to stop asking
    document.getElementById("popup").style.display="none";
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
