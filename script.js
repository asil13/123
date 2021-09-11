function rand(min, max) {
  return Math.floor(Math.random()*(max+1-min)+min);
}

let num1 = +prompt("Введите мин число"),
    num2 = +prompt("Введите макс число"),
    count = +prompt('Введите кол-во примеров');
let right = 0;
let wrong = 0;
for (let i = 0; i < count; i++) {
  let int1 = rand(num1, num2);
  let int2 = rand(num1, num2);
  let example = +prompt(`решите пример ${int1}+${int2}=?`);
  let answer = '';
  if((int1+int2) == example){
      answer = 'молодец тебе 5';
      right++;
  }else{
    answer = "Ой тебе 3 иди учи математику";
    wrong++;
  }
  console.log(`${int1}+${int2}=${int1+int2}. Ваш отет ${example}. ${answer}`);
}
console.log(`
Кол-во правильных ответов:  ${right},
Кол-во не правильных ответов:  ${wrong}
  
  `);