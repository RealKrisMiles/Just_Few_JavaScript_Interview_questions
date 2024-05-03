// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

let orders = ["pen","paper","something","nothing"]

async function placeOrder(order){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{           
            resolve(`your ${order} has been placed`)
        },1000)

    })
}

async function items(){
    for (let i = 0; i < orders.length; i++) {
            let result = await placeOrder(orders[i])
            console.log(result)
    }
    
}

items().then(()=>{
    console.log("All orders have been placed.");
})

