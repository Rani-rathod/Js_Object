

var mainString="My name is kumar, and my friend’s name is Dhamu";
a=mainString.split()
console.log(a)
// i=0
// b="is";
// p=[]
// while (i<a.length){
//    if (a[i]==b){
//       p.push(b)
//    }
//    i++
// }
// console.log(p)

b="is";
p=[]
for(i=0; i<a.length; i++){
    if (a[i]===b){
        p.push(b)
    }
}
console.log(p)

