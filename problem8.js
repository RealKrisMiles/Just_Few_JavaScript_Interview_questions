// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
let arr = [1,2,3,4,5,6]

async function Multiply(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            num = num*2
            resolve(num)
        },500)
    })
}

async function arrr(){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let result = await Multiply(arr[i])
        newArr.push(result)
        // console.log(newArr)
     }
         return newArr
}

arrr().then(result=>{
    console.log(result)
})