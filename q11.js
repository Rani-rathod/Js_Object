
const word = "MISSISSIPPI";
const list1=[];
let d={};
for (var i of word){
    if (list1.includes(i)){
        d[i]+=1
    }
    else{
        list1.push(i)
        d[i]=1
    }
}
console.log(d)
