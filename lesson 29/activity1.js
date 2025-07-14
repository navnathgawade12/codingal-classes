var person = {name:"raghav", age: 14 , city: "pune"}

var m = JSON.stringify(person)

var person2 = JSON.parse(m)

console.log(m)

document.getElementById("oh damn").innerHTML = person2.city + "  " + person2.name

function getphotos(){
    return Promise ((resolve) => {setTimeout(()=> {console.log("YOU ARE ALSO A VILLAN IN SOMEONES STORY") }, 5000) })
}

async function showphotos() {
    await getphotos()
}

showphotos()

console.log("DONT MIND IF I SAY")