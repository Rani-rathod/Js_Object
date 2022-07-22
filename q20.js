

// var d1={'a': 100, 'b': 200}
// var d2={'x': 300, 'y': 200}
// dic={}
// for (i in (d1)){
//     dic[i]=d1[i]
// }
// for (i in (d2)){
//     dic[i]=d2[i]
// }
// console.log(dic)




var dic={'a':{'b':45},'c':56,'d':34,'f':{'e':10}}
var sum=0
for (i in dic){
    if (typeof(dic[i])==Object){
        for (j in dic[i]){
            sum+=dic[i][j]
        }
    }
    else{
        sum+=dic[i]
    }
}
console.log(sum)

