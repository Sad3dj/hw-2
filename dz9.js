const user= {
  name: 'Игорь',
  age: '33',
  "isAdmin": true,
  cityOfResidence: Saint-Petersburg
};
user['age']=25;
delete user['cityOfResidence']
let info=prompt("Что вы хотите узнать о пользователе?")
alert(user[info])