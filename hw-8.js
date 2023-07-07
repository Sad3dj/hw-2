// 1 задание
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];
people.sort(function (a,b) {
if (a.age>b.age) {
return 1;
}
if (a.age<b.age) {
return -1;
}
});
console.log(people);
// 2 задание
function isPositive(numb) {
  if (numb > 0) {
      return numb;
  }
}
function isMale(whoIS) {
  if (whoIS.gender == 'male') {
      return whoIS;
  }    
}
function filter(arr, ruleFunction) {
  for (let i = 0; i < arr.length; i++) {
  return arr.filter(ruleFunction);

  }
}
console.log(filter([3, -4, 1, 9], isPositive));
const people2 = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];
console.log(filter(people2, isMale));
// 3 задание 
const timer = (deadline) => {
  const interval = setInterval(() => {
      let currentDate = new Date();
   console.log(currentDate);
   }, 3000);
  
  
   setTimeout(() => {
      clearInterval(interval);
      console.log('30 секунд прошло')
    }, deadline * 1000)
  };
  
  timer(30);
  // 4 задание
  function delayForSecond(callback) {
    let i = 1;
 setTimeout(function delayForSecond() {
   func(i);
   setTimeout(delayForSecond, 1000);
 }, 1000);
    callback();
 }
 
 delayForSecond(function () {
    console.log('Привет, Глеб!');
 })
//  5 задание 

function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}
delayForSecond()
setTimeout(() => sayHi('Глеб'), 2000)
