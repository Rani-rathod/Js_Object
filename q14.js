


//  Diaccending


// dic={'bijender':45,'deepak':60,'param':20,'anjili':30,'roshini':50}
// for (var i in dic){
//     for (var j in dic){
//         if (dic[i]>dic[j]){
//             dic[i],dic[j]=dic[j],dic[i]
//         }
//     }
// }
// console.log(dic)


// Accending

dic={'bijender':45,'deepak':60,'param':20,'anjili':30,'roshini':50}
for (var i in dic){
    for (var j in dic){
        if (dic[i]<dic[j]){
            dic[i],dic[j]=dic[j],dic[i]
        }
    }
}
console.log(dic)