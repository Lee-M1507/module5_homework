let count = + prompt("Введите значение");
function isNumber(count) {
  let message = "";
  if (!isNaN(count)) {
    if (count % 2 === 0) {
      message = "чётное "
    } else {
      message = "не чётное "
    }
  } else {
   message = "Упс, кажется, вы ошиблись"
  }
  return message;
}

console.log(isNumber(count));
