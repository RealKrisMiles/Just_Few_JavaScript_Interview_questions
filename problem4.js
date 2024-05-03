// User
// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digi

let password = "Password123"

if(isValidPassword(password)){
    console.log("password is valid")
}else{
    console.log("password is invalid")
}

function isValidPassword(password){
    if(password.length<8){
        return false
    }

    let hasUpperCase = false
    let hasLowerCase = false

    for(i=0;i < password.length;i++){
        if(password[i]>='A'&&password[i]<='Z'){
            hasUpperCase=true
        }
        if(password[i]>='a'&&password[i]<='z'){
            hasLowerCase=true
        }
    }

    if(!(hasLowerCase && hasUpperCase)){
        return false
    }

    let hadDigit = false
    for (let i = 0; i < password.length; i++) {
        if(!isNaN(parseInt(password[i]))){
            hasDigit = true
            break
        }      
    }
    if(!hasDigit){
        return false
    }

    return true;
}



