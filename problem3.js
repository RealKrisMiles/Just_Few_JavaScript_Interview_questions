// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

reverse("kris")

function reverse(a){
    let b = [];
    for (let i = 0; i < a.length; i++) {
        b[a.length - i] = a[i];
    }
    console.log(b)
    b =  b.join("")
    console.log(b)
    let result = a+b
    console.log(result)
}



