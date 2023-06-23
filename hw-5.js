// 1 задание 
function min(a,b) {
  return (a,b);
  }
  let result=Math.min(4,8);
  console.log(result);
  let result2=Math.min(6,6);
  console.log(result2);


  // 2 задание 
  let a=prompt('Введите число');
  function isPrime(a){
  return a%=2;
}
let result=isPrime(a);
 if (result===0) {
alert('Число чётное');
} else {
alert('Число нечётное');
}

// 3.2 задание
function Mathpow(a) {
  return a**2
  }
  let a=prompt('Введите число');
  let result=Mathpow(a);
  console.log(result);
  // 4 задание 
  let age=prompt('Сколько вам лет?')
let printMessage
if (age<0 && age<=!12) {
printMessage=function (){
console.log('Вы ввели неверное значение');}
} if (age<=12 && age==0) {
printMessage=function (){
console.log('Привет друг');}
} if (age>13) {
printMessage=function (){
console.log('Добро пожаловать');
}
}
printMessage();

// 5 задание

function calcMult(a, b) {
   
  if (isNaN(a) || isNaN(b)) {
      console.log('Одно или оба значения не являются числом');
  } else {
      console.log(a*b);
  }
}

calcMult(7,9);

  // 6 задание 
  function Mathpow(n) {
    return n**3;
    }
    let n=prompt('Введите число!')
    let result=Mathpow(n);
    if (n.replace (/\d/g, '').length) {
    console.log('Переданный параметр не является числом')
    } else {
    console.log(`n в кубе равняется ${result}`);
    }

    // 7 задание
    function getCircleArea() {
return this.radius*3.14;
}
function getCirclePerimeter() {
return this.radius*3.14*2;
}
const circle1= {
radius: 4,
getArea: getCircleArea,
getPerimeter: getCirclePerimeter,
};

const circle2= {
radius: 6,
getArea: getCircleArea,
getPerimeter: getCirclePerimeter,
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());