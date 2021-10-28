var readlineSync = require('readline-sync');

var totalStudents = readlineSync.question("No of Students")
totalStudents=Number(totalStudents)
const studentsData=[];
for(i=0;i<totalStudents;i++){
    var name = readlineSync.question("student name")
    var uM = Number(readlineSync.question("unit test marks"))
    var pFM = Number(readlineSync.question("pre final marks"))
    var fM = Number(readlineSync.question("final marks"))
    var tM = uM+pFM+fM 
    studentsData.push({
        sName:name,
        unitMarks:uM,
        pfMarks:pFM,
        finalMarks: fM,
        totalMarks:tM
    })
}

let maxMarks=0 ;
let maxName=""
for(i=0;i<totalStudents;i++){
    if(studentsData[i].totalMarks>maxMarks){
        maxMarks=studentsData[i].totalMarks
        maxName=studentsData[i].sName
    }
}

console.log(maxMarks,maxName)