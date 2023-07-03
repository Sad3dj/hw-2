// 1 задание 
const numbs = [1, 5, 4, 10, 0, 3];

for (let i=0; i<numbs.length; i++) {
if (numbs[i] == 10) break;
console.log(numbs[i]);
}
// 2 задание 
const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs.indexOf(4));
// 3 задание 
let numbs = [1, 3, 5, 10, 20];
numbs=numbs.join(' ');
console.log(numbs);
// 4 задание 
let numbs=[]
for (let i=0; i<3; i++) {
numbs[i]=[]
for ( let j=0;j<3; j++){
numbs[i] [j]=1
}
}
console.log(numbs)
// 5 задание
let numbs = [1, 1, 1]
numbs.push(2,2,2);
console.log(numbs);
// 6 задание 
let numbs = [9, 8, 7, 'a', 6, 5]
numbs.splice(3,1);
numbs=numbs.sort();
console.log(numbs);
// 7 задание 
let answ=prompt('Угадайте число')
const numbs = [9, 8, 7, 6, 5]
let IsFound=false;
for (let numb of numbs) {
 if (answ==numb) {
    IsFound=true;
 }
}
if (IsFound==true) {
console.log('Верно'); 
} else {
console.log('Неверно');
}
//  8 задание 
const word = 'abcdef'; 
const reverse = word.split('').reverse().join('');
console.log(reverse);
// 9 задание 
const numbs=[[1, 2, 3,],[4, 5, 6]]
const result=[...numbs];
console.log(result)
// 10 задание

// 11 задание 
const numbs = [4,7,6,8,5]
const squaers=numbs.map(function(num)
{ return num*num
})
console.log(squaers);
// 12 задание 
function getlenghtWords(arr){
   const getLengthWords = source => source.map(str => str.length);
   }
   console.log(getlenghtWords(['слово',' ', 'слог','длинное предложение', 'буква']));
// 13 задание
function filterPositive(array) {
  const even=array.filter(el=>el<=-1);
  console.log(even);
  }
  filterPositive([-1, 0, 5, -10, 56]); 
  filterPositive([-25, 25, 0, -1000, -2]); 