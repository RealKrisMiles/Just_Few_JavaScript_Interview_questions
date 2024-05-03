// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let a = [1,2,4,5,6,-7,3]
let b = []

function add(a,b){
    return a+b
}

function sum(a){
    for (let i = 0; i < a.length; i++) {
       if(a[i]>0){
        b[i]=a[i]
       }else{
        b[i]=0
       }        
    }
    console.log(b)
    let sum = b.reduce(add)
    console.log(sum)
}
sum(a)