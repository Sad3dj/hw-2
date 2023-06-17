// 1 задание
let password='пароль';
password="NakedKing";
let jk=prompt('Введите пароль');
if(jk === password) {
alert('Пароль введён верно');
} else {
  alert('Пароль введён неверно');
}

// 2 задание
let c;
c=4;
if(c>=0 && c<=10 ) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
// 3 задание
let d=105;
let e=4;
if (e>100 || d>100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
// 4 задание 
let a = '2';
let b = '3';

alert(3+2);

// 5 задание
let month=String(prompt('Введите номер месяца'));
let MonthNumber=12;
switch (month) {
  case '1':
  case '12':
  case '2':
  console.log('Зима')
  break;
  case '3':
  case '4':
  case '5':
  console.log('Весна')
  break;
  case '6':
  case '7':
  case '8':
  console.log('Лето')
  break;
  case '9':
  case '10':
  case '11':
  console.log('Осень')
  break;
  default :
  console.log('такого месяца не существует')
  break;
}

