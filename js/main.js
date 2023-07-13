let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//1
let sum = 0;
let counterOfPositiveElements = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    counterOfPositiveElements++;
  }
}
console.log("Кількість позитивних елементів: " + counterOfPositiveElements, "Сума позитивних елементів: " + sum);

//2 - 3
let min = 0;
let max = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log("Мінімальний елемент масиву: " + min, "Індекс мінімального елементу масиву: " + arr.indexOf(min),
  "Максимальний елемент масиву: " + max, "Індекс максимального елементу масиву: " + arr.indexOf(max));

//4
let counterOfNegativeElements = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    counterOfNegativeElements++;
  }
}

console.log("Кількість негативних елементів: " + counterOfNegativeElements);

//5, 8
let counterOfOddPositiveElements = 0;
let sumOfOddPositiveElements = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    counterOfOddPositiveElements++;
    sumOfOddPositiveElements += arr[i];
  }
}
console.log("Кількість непарних позитивних елементів: " + counterOfOddPositiveElements,
  "Сума непарних позитивних елементів: " + sumOfOddPositiveElements);

//6 - 7
let counterOfEvenPositiveElements;
let sumOfEvenPositiveElements = 0;

counterOfEvenPositiveElements = counterOfPositiveElements - counterOfOddPositiveElements;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    sumOfEvenPositiveElements += arr[i];
  }
}

console.log("Кількість парних позитивних елементів: " + counterOfEvenPositiveElements,
  "Сума парних позитивних елементів: " + sumOfEvenPositiveElements);

//9
let productOfPositiveElements = 1;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    productOfPositiveElements *= arr[i];
  }
}
console.log("Добуток позитивних елементів: " + productOfPositiveElements);

//10
let maxOfArr = arr[0];

for (i = 0; i < arr.length; i++) {
  if (arr[i] === max) {
    arr[i] = arr[i];
  } else {
    arr[i] = 0;
  }
}
console.log(arr);