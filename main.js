

//1. Crea una función llamada sum y que devuelva el valor de la suma de dos números introducidos como parámetros.

let sum = function(a, b){
  return a + b;
}

//2. Crea una función que se llame power. Esta función debe recibir dos números como parámetros y tiene que devolver el primer número elevado al segundo número.

let power = function(a,b){
  return a ** b;
}

//3. Crea una función que se llame compare. Esta función debe recibir dos números como parámetros y debe devolver el número que sea mayor. Si los dos números son iguales, puedes devolver cualquiera de los dos. Si alguno de los dos parámetros es un string, la función debe devolver "Por favor, introduce un número".

//Ejemplos:
//compare(2,6) --> 6
//compare(45, 12) --> 45
//compare(5, 5) --> 5
//compare('hola', 4) --> "Por favor, introduce un número"

let compare = function(a,b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    return "Por favor, introduce un número";
  } else {
    if(a >= b){
      return a;
    } else if(a < b){
      return b;
    } 
  }
}

//4. Crea una función que se llame calculator. Esta variable va a recibir tres parámetros. El primero y el tercero, serán números. El segundo va a ser un símbolo matemático. Puede ser: +, -, * o /. La función debe devolver el resultado de la operación entre los dos números introducidos teniendo en cuenta el tipo de operación que hemos indicado en el segundo parámetro. RECUERDA: Para introducir el símbolo matemático, tienes que meterlo como un string. Si no lo haces de esta forma, te va a dar error. 

//Ejemplos:
// calculator(4, '+', 6) --> 10
// calculator(10, '/', 5) --> 2
// calculator(20, '*', 0) --> 0
// calculator(100, '-', 150) --> -50

calculator = function(a,b,c){
  if(b === "-"){
    return a - c;
  } else if(b === '+'){
    return a + c;
  } else if(b === "/"){
    return a / c;
  } else if(b === "*"){
    return a * c;
  }
}




//NO TOCAR DE AQUĪ PARA ABAJO. ESTE CÓDIGO SE ENCARGA DE REALIZAR LOS TESTS.
let check = function(compare, answer){
  compare == answer ? console.log(`CORRECT: ${answer}`) : console.log(`Incorrect answer. Expected ${answer} and instead got ${compare}`);
};

console.log(`Tests del ejercicio 1:`);
check(sum(4,5), 9);
check(sum(10,-5), 5);
check(sum(782,577), 1359);
check(sum(0,0), 0);
check(sum(1000,1000), 2000);
console.log();
console.log(`Tests del ejercicio 2:`);
check(power(2,2), 4);
check(power(5,12), 244140625);
check(power(0,12), 0);
check(power(50,1), 50);
check(power(60,0), 1);
console.log();
console.log(`Tests del ejercicio 3:`);
check(compare(1,2), 2)
check(compare(0,0), 0)
check(compare('hola', 2), "Por favor, introduce un número")
check(compare(-50,2), 2)
check(compare(-56,49), 49)
console.log();
console.log(`Tests del ejercicio 4:`);
check(calculator(4, '+', 6), 10)
check(calculator(10, '/', 5), 2)
check(calculator(20, '*', -1), -20)
check(calculator(100, '-', 150), -50)
check(calculator(-20, '-', -20), 0)
