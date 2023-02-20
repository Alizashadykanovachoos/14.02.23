function sum(a,b,c){
  console.log(a + b + c)

} 
sum(4, 5 ,6);

function rectangleArea(x1, x2){
  console.log(x1 * x2);
  }
  rectangleArea(2,4);
  rectangleArea(5,6)

  for (let a = 1; a <=10; a++){
    console.log(a)
  }
   
  let example1 ={};// обьекты
  let Joldosh = {
    name: "Joldosh", 
    age: 22,
    isEmployed:false,
    lastname: "ali",
    sayHello: function() {
      console.log( "Hello " +  " I'm "  + this.name);
      
    },
    sayAge: function(){
      console.log("i'm "+ this.age + " years old")
    },
    sayBye:function() {
      console.log("Bye");
    },
    
  };




 // Viev, edit,add
 console.log(Joldosh.name)
 Joldosh.age = 23;
 console.log(Joldosh.age)
 Joldosh.favouriteBoooks = ["Harry Potter", "Little Women"];
 console.log(Joldosh.favouriteBoooks);

 //delete
   delete Joldosh.favouriteBoooks;//delete

   Joldosh.sayHello();
   Joldosh.name ="Jol";
   Joldosh.sayHello();
   Joldosh.sayAge();
  


   let example = {
    number:0,
    inc: function(){
      this.number = this.number + 1;
    },
    dcr: function(){
      this.number = this.number + 1;
    },
    dcr: function(num){
      this.number = this.number -1
    },
    add: function(num){
      this.number = this.number + num;
    },
    sabtract: function(num){
      this.number = this.number - num;
    }, 
    remowe: function(num){
      this.number = this.number + num;
    },
    print: function(){
      console.log(this.number);
    }
   }
   console.log(example.number);
   example.inc();
   example.inc();
   console.log(example.number);
   console.log(example.number);
   example.inc();
   example.inc();
   console.log(example.number);
   example.add(5);
   console.log(example.number);
   example.remowe(3);
   example.print(); 
   




   








  
  
