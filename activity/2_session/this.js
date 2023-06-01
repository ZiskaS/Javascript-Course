// Global Context
console.log(this === window);

var name = "Franziska";

this.surname = "Stude";


function f1() {
    return this;
  }
  
  // En un navegador:
  f1() === window; // true


  function f2() {
    'use strict'; // see strict mode
    return this;
  }
  
  f2() === undefined; // true



  let person = {
    name: "Franziska Stude",
    greeting() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

person.greeting();



let student = {
    name: "Pepe Navarro",
    greeting:() => {
        console.log(`Hello, my name is ${this.name}`)
    }
}
// This will be Franziska as this.name references the global context and name is defined with Franziska
student.greeting();



function actionButtonReceiver() {
    console.log("Button pressed with->");
    console.log(this);
}

// Call
// Podemos usar call para llamar a una función añadiendo el contexto con algún objeto (y el resto de parámetros)

var myObj = {
    num: 2
}

var addNumbers = function(num1, num2) {
    return this.num + num1 + num2
}

console.log(addNumbers());


console.log(addNumbers.call(myObj, 1, 2));



// Apply
// El mismo concepto que call pero pasando los parámetros como arrays

let params = [1, 2]

console.log(addNumbers.apply(myObj, params));


// Bind

// Devuelve una función con el binding entre el objeto y la función
// Se usa por ejemplo para tener contexto del objeto en un callback

var otherObj = {
    num1: 5,
    num2: 4
}

var otherFunc = function() {
    return this.num1 + this.num2;
}

var returnedFunc = otherFunc.bind(otherObj);

console.log(returnedFunc());