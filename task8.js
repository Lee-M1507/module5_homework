let myMap = new Map();

myMap.set("name", "Anna");
myMap.set("city", "Moscow");
myMap.set("country", "Russia");

for (let pair of myMap.entries()) {
  console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`);
}
