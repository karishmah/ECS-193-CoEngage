function mainLoad()
    {
    //var courseList = GET all courses for user username
    //createElement in flexContainer for length of courseList
    //appendChild
    //get the courses for variable of user
    //append to the flex container 
    document.getElementById("login").style.display="none";
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
    document.getElementById("main").style.display="block";
    }


function mainPageRedirect(){
    document.getElementById("login").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("sidebar").style.display="block";
}

var gCRN;
  
//mainPageLoad()
function mainLoadPage(){
    mainLoad();
    document.getElementById("navitem").addEventListener("click", function(){
            document.getElementById("main").style.display="block";});
}

                                
function addCourseLoad(){
    document.getElementById("main").style.display="none";
    document.getElementById("addCourse").style.display="block";
}

function addCourseRedirect(){
    /*var crn= document.getElementById("CRN");
    var title= document.getElementById("courseTitle");
    var courseRos = document.getElementById("courseRoster");*/
    //POST ALL THESE TO THE DATABASE
    document.getElementById("addCourse").style.display="none";
    document.getElementById("main").style.display="block";
}


function coursePage(title){
     document.getElementById("main").style.display="none";
     //gCRN=GET CRN FOR Course with title TITLE
     var x= document.getElementById("coursePageTitle");
     x.textContent=title;
     document.getElementById("courseMainPage").style.display="block";
}

function courseStudents(){
    document.getElementById("courseMainPage").style.display="none";
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
    document.getElementById("students").style.display="block";
}

function courseTests(){
    document.getElementById("courseMainPage").style.display="none";
    document.getElementById("tests").style.display="block";
}

function addStudentLoad(){
     document.getElementById("students").style.display="none";
     document.getElementById("addStudent").style.display="block";
}

function addStudentRedirect(){
    document.getElementById("addStudent").style.display="none";
    /*var first = document.getElementById("firstName");
    var last = document.getElementById("lastName");
    var idnum = document.getElementById("studentID");
    var stemail = document.getElementById("email");
    POST THESE TO COURSE OF CRN NUM gCRN*/
    document.getElementById("students").style.display="block";
}

function testBankLoad(){
    document.getElementById("tests").style.display="none";
    document.getElementById("testBank").style.display="block";
}

function addQuestionLoad(){
    document.getElementById("testBank").style.display="none";
    document.getElementById("addQuestion").style.display="block";
}

var getQuestion; 
var mcqAnswers;

function textLoad(){
    getQuestion=document.getElementById("textQuestion");
    document.getElementById("imgSel").checked=false;
    document.getElementById("mcqSel").checked=false;
    document.getElementById("textType").style.display="block";
    document.getElementById("imageType").style.display="none";
    document.getElementById("mcqType").style.display="none";
    document.getElementById("mcqNumberType").style.display="none";
}

function imageLoad(){
    getQuestion=document.getElementById("imageQuestion");
    document.getElementById("textSel").checked=false;
    document.getElementById("mcqSel").checked=false;
    document.getElementById("textType").style.display="none";
    document.getElementById("imageType").style.display="block";
    document.getElementById("mcqType").style.display="none";
    document.getElementById("mcqNumberType").style.display="none";
}

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

function addQuestionRedirect(typeQuestion){
    //POST typeQuestion to course with crn gCRN;
    //POST getQuestion
    //if typeQuestion == "mcq"
    //POST mcqAnswers
    document.getElementById("addQuestion").style.display="none";
    document.getElementById("testBank").style.display="block";
}

var currQuestion;

function displayQuestionLoad(question){
    currQuestion=question;
    document.getElementById("testBank").style.display="none";
    var x= document.getElementById("questionTitle");
    x.textContent=currQuestion;
    //GET question type
    //if type==mcq
    //GET mcqAnswers
    //for i=0 i<mcqAnswers.length i++
    //container.appendChild(mcqAnswers[i]);
    document.getElementById("displayQuestion").style.display="block";
}

function askQuestion(){
    document.getElementById("popup").style.display="block";
}

function cancel(){ //be able to cancel only if not started or it is stopped
    document.getElementById("popup").style.display="none";
}

function startQ(){
    //send response to server to start asking
    //send question marked as asked
}

function stopQ(){
    //send response to server to stop asking
    document.getElementById("popup").style.display="none";
}

function answeredLoad(){
    document.getElementById("tests").style.display="none";
    document.getElementById("studentAnswers").style.display="block";
}

function getAllQuestion(){
    //GET all questions belonging to gCRN
    //empty previous
    //append one by one to container table "questionBank" id="allTestBank"
}

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