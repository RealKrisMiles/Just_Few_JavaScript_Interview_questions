// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

let products=[
    {id:1,name:'banana',price:20,num:2},
    {id:2,name:'apple',price:50,num:1}
]
let total = []

function totalAmount(amt){
        for (let i = 0; i < products.length; i++) {
            console.log(products[i])
            let product = products[i]
            let amt = product.price * product.num
            total.push(amt)
            console.log(amt)      
        }
        
        console.log(total)
        return amt
}
totalAmount()

console.log(total.reduce(add))

function add(a,b){
    return a+b
}

