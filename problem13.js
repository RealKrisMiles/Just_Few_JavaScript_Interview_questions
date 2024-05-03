// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function saveNoteToLocalStorage(note) {
    localStorage.setItem("note", note);
}

let note = localStorage.getItem("note")
if(note){
    document.querySelector(".note").innerHTML = note
}

document.querySelector("button").addEventListener("click", () => {
    let note = prompt("Enter your note")
    saveNoteToLocalStorage(note)
    document.querySelector(".note").innerHTML = note
})