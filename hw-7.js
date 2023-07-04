//  1 задание 
let str='Всем ПриВет, я ВаллИ'; 
str=str.toUpperCase();
console.log(str);
//  2 задание
function MassWords() {
  const products = ['Кошка', 'Кит', 'Комар', 'Носорог']
  const search = 'ко';
  
  products.forEach((product) => {
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
      console.log(product);
    }
  });
  }
  MassWords();
  // 3 задание
  const numb=32.58884;
console.log(Math.ceil(numb));

const numb=32.58884;
console.log(Math.floor(numb));


const numb=32.58884;
console.log(Math.round(numb));
// 4 задание 
console.log(Math.min( 52, 53, 49, 77, 21, 32));
console.log(Math.max( 52, 53, 49, 77, 21, 32));
// 5 задание 
function getRandomInt(minValue,maxValue) {
  return Math.round(Math.random() * maxValue);
  }
  console.log(getRandomInt(0, 10));
  //  6 задание 
  let numb=Number(prompt('Введите число'));
function getRandomArrNumbers(length=Math.floor(numb/2)) {
return Array.from(Array(length),()=>Math.floor(Math.random()*numb)+1);
}
let random=getRandomArrNumbers();
console.log(random);
// 7 задание
function numbs(a,b) {
let numb=0;
for (let i=answ;i<=AnotherAnsw;i++) numb.push(i);
return numb;
}
numbs();
// 8 задание 
let currentDate = new Date();

currentDate.toLocaleTimeString('ru-RU')
console.log(currentDate)
// 9 задание
let currentDate = new Date();
currentDate.setDate(74);
console.log(currentDate);
// 10 задание
function BigTime() {
const days=["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months=["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate=new Date();
let FullDate=("Дата:" + myDate.getDate()+" "+months[myDate.getMonth()]+" "+myDate.getFullYear()+"-это "+days[myDate.getDay()]+" Время "+myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds());
console.log(FullDate);
}
BigTime();