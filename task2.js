let x = 4;
function dataType(x) {
  let message = '';
  switch (typeof x) {
    case "number":
      message = "Тип x число"
      break;
    case "string":
      message = "Тип x строка"
      break;
    case "boolean":
      message = "Тип x логический"
      break;
    default:
      message = "Тип x не определён"
  }
  return message;
}

console.log(dataType(x));
