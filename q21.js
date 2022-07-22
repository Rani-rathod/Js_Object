


var dict={'a':2,'b':5,'c':6,'d':7,'e':8,'f':10}
sum=0
sum1=0
for (i in dict){
    if (dict[i]%2==0){
        console.log(dict[i],"Even number")
        sum+=dict[i]
    }
    else{
        console.log(dict[i],"Odd number")
        sum1+=dict[i]
    }
}
console.log()
console.log("Even number sum = ",sum)
console.log("Odd number sum = ",sum1)

