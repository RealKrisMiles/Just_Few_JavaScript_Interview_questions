// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let a = "AEIOUaeiou"
let b = []
let count = 0

function vowels(a){
    for (let i = 0; i < a.length; i++) {
        if(a[i]=='a'||a[i]=='A'){
            count++
        }
        if(a[i]=='e'||a[i]=='E'){
            count++
        }
        if(a[i]=='i'||a[i]=='I'){
            count++
        }
        if(a[i]=='o'||a[i]=='O'){
            count++
        }
        if(a[i]=='u'||a[i]=='U'){
            count++
        }
        
        
    }
}
vowels(a)
console.log(count)