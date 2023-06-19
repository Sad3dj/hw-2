// задание 1
let i=2;
let n=3
while (i<=n) {
console.log('Привет!');
i++;
}
// задание 2
let i=0;
do {
  console.log(i);
  i++;
} while (i<6);
// задание 3
let n=7;
do {
  console.log(n);
  c++; 
} while (n<23);
// 4 задание 
const user={
  'Коля': 'зарплата 200 долларов',
  'Вася': 'зарплата 300 долларов',
  'Петя': 'зарплата 400 долларов'
};
for (let worker in user) {
  alert(`${worker}-${user[worker]}`); 
};
// 5 задание
let n=1000;
do {
console.log(n/=2);
n++;
} while (n>50);
let num=5;
  // 6 задание
  for (let DayNumber=5; DayNumber<=30; DayNumber++) {
    if (DayNumber %7===2){
    console.log(`Сегодня пятница ${DayNumber}-го числа,Отправьте отчёт`);
    continue;}
    }
