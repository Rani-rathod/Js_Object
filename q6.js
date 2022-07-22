


var readline=require("readline-sync");
let n=readline.question("Enter the number:-");
let dict={"name":"Rani","marks":75};
for (i in dict){
    if (i==n){
        console.log("exists");
        break
    }
    else{
        console.log("not exists")
        break
    }
}