// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


let names = ["kris","Rajath","Krishna","nikithass"]

for(items of names){
    if(items.length<6){
    console.log(`${items} belongs to Gryffindor `)
}else if(items.length<8){
console.log(`${items} belongs to Hufflepuff `)
}else if(items.length<12)
{
    console.log(`${items} belongs to Ravenclaw `)   
}else{
    console.log(`${items} belongs to Slytherin`) 
}}