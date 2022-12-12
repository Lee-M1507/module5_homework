let userNames = ["Анастая", "Иван", "Ольга", "Ирина", "Галина", "Александр",]

console.log(userNames.length);

for (let i = 0; i < userNames.length; i++) {
  console.log(userNames[i]);
}
userNames.forEach(function (item) {
  console.log(item);
})
