var a = 'spider'
console.log(a)
console.log(typeof(a))

var b = 24
console.log(typeof (b))

var newb = String(b)
console.log(typeof(newb))

try{
    const a = 12 / 0
    console.log(a)
    throw new Error("I WILL THROW YOU IN THE DARKNESS OF ERROR")
}catch(err){
    console.log(err.message)
    console.log("OMG THE ERROR IS IN YOUR CODE QUICKLY DELETE YOUR PC")
}

function saygoodbye(){
     console.log("goodbye")
    console.log("bye")
    console.log("FUNCTION IS TRYING TO RUN THE CODE")
}
   

saygoodbye()

var saygoodbye2 = (a)=> {console.log("function is running and trying to print the code",a)}

var saygoodbye3 = () => console.log("flint and steel")

saygoodbye2("bababoy")
saygoodbye3()