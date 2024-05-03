// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

let arr=[
    "Add a coffee filter in the filter basket",
    "Measure out the coffee.",
    "Measure out enough water to brew your coffee",
    "Plug in the coffee maker and turn it on",
    "Wait until the coffee is completely brewed before pouring",
    "If you used a paper filter, throw it away after brewing",
]

async function makingCoffee(coffee){
    return new Promise((resolve, reject) => {
        timeout = Math.floor(Math.random()*3)
        setTimeout(() => {
            console.log("step",coffee)
            resolve("done")
        }, timeout*1000);
    })

}

async function getAllSteps(){
        for (let i = 0; i <arr.length; i++) {
           await makingCoffee(arr[i])
           
        }
}

getAllSteps().then(()=>{
    console.log("your coffee is ready")
})