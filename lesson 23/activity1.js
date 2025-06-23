var yash = {fruit: "watermilon", flower: "sunflower", pug: "vadafone wala kutta", d: function(a,b){
   return Math.pow(a,b)
} }
console.log(yash.flower);
console.log(yash['pug']);
console.log(yash.d(2,3));

console.log(Math.random())

var fruit = ['bamboo', 'coconut', 'papaya','mango'];

console.log(fruit[0])
console.log(fruit[2])

console.log(fruit.shift())
console.log(fruit)

console.log(fruit.join('-->'))


function add(a,b){
    return a+b
}

function average(a,b){
    return add(a,b)/4
}

var result = average(4,8)

console.log(result)