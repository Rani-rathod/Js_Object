

var prompt=require('readline-sync');
var n=prompt.questionInt('How many more times?');
d={}
for (let i=1; i<=n; i++){
   d[i]=i**2
}
console.log(d);

// d={}
// let i=1;
// while (i<=n){
//    d[i]=i**2
//    i++
// }
// console.log(d)
