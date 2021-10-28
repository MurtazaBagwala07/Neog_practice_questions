var readlineSync = require('readline-sync');

var news = readlineSync.question("Enter News\n")
var source = readlineSync.question("Enter Source\n")
source= source.toLowerCase()
if(source==="facebook"||source==="whatsapp"){
    console.log("dont fall for fake news")
}else{
    console.log("good enough")
}