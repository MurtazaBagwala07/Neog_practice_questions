var readlineSync = require('readline-sync');

var one={
    name:"Ram",
    age:25,
    yuga:"treta"
}

var two={
    name:"Krishna",
    age:32,
    yuga:"okay"
}

function moreAge(objOne,objTwo){
    if(objOne.age>objTwo.age){
        console.log(objOne.name)
    }else{
        console.log(objTwo.name)
    }
}

moreAge(one,two)
