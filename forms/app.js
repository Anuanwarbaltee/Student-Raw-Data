var student1 = {
    name:"Zahoor",
    fatherName:"Noor ali",
    rollNo:1555,
    institute:"Uswa public school",
    age : 28,
    contact:"03152073",
    isclearallsubject:"True",
   
};
var student2 = {
    name:"Ashfaq Ali Mazahir",
    fatherName:"Jaffer Ali",
    rollNo:1655,
    institute:"Public scholl Skardu",
    age : 35,
    contact:"03152073",
    isclearallsubject:"True",
};
var student3 = {
    name:"Dog gi lay Rall",
    fatherName:"Apo Yusuf",
    rollNo:165,
    institute:"Chonduk University",
    age : 66,
    contact:"000152073",
    isclearallsubject:"True",
};
var student4 = {
    name:"Muhammad ali",
    fatherName:"Jaffer",
    rollNo:235,
    institute:"Step college ",
    age : 29,
    contact:"03442073", 
    isclearallsubject:"True",
};
var student5 = {
    name:"Muhammad Yawer",
    fatherName:"Jaffer",
    rollNo:3255,
    institute:"Punjab College ",
    age : 22,
    contact:"03442073",
    isclearallsubject:"True",
};
 
var studentList = [student1,student2,student3,student4,student5];
 for(var i = 0; i < studentList.length; i++){
 studentList[i].rollNo = i+1;
 
 }
 var studentdata = document.getElementById("showlist");
 for(var i = 0; i< studentList.length;i++){
     var obj = studentList[i];
    //  console.log(obj)
     studentdata.innerHTML += "<tr><td>"+ obj.rollNo +"</td><td>"+ obj.name +"</td><td>"+ obj.fatherName +"</td><td>"+ obj.contact +"</td><td>"+ obj.isclearallsubject +"</td></tr>"

 }


     var input1 = document.getElementById("input1");
    var showrollno = document.getElementById("showrollno");
    var showname = document.getElementById("showname");
    var showfathername = document.getElementById("showfathername");
    var showcontact =document.getElementById("showcontact");
    var showresult =  document.getElementById("showresult");
   
 function hello(){
   
    for (var i = 0; i < studentList.length; i++) {
    var std = studentList[i];
    if (input1.value == std.rollNo) {
        showrollno.innerHTML = std.rollNo;
        showname.innerHTML = std.name;
        showfathername.innerHTML = std.fatherName;
      showcontact.innerHTML = std.contact;
      showresult.innerHTML = std.isclearallsubject;
    }
   
  }
}

