
// var readline = require('readline-sync');
// var students={}
// for (let step = 0; step <10; step++){
//    var name =readline.question("Enter your name:");
//    var marks=readline.questionInt("Enter the marks");
//    students[name]=marks;
// }
// console.log(students);



var n=require("readline-sync");
var dict={}
i=1
while (i<=10){
   var name=n.question("Enret the name :");
   var num=n.questionInt("Enter the number :")
   dict[name]=num
   i++
}
console.log(dict)
