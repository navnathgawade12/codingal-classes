class Birds{
   constructor(age,weight,height,name,sound){
    this.age = age //years
    this.weight = weight //kgs
    this.height = height //feets
    this.name = name
    this.sound = sound
   }

   makesound(){
    console.log(this.sound)
}
}

var a1 = new Birds(9,1.7,3,"makaw","kraaa")

a1.makesound()