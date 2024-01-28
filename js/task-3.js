// function filterArray(numbers, value) {
//   let filteredArray = [];
//    for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] > value) {
     
//       filteredArray.push(numbers[i]);
//     }
//   }
//  return filteredArray;
// }
// // console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// // console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// // console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// // console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// // console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// const name = prompt("enter your name");
// const email = prompt("enter your email");
// const tel = prompt("enter your tel");
// alert(`користувач ${name} використовує пошту ${email} телефон ${tel}`);

// let price1 = Number(prompt("Вкажіть ціну за телевізор"))
// let price2 = Number(prompt("вкажіть ціну за телефон"))
// let price3 = Number(prompt("вкажіть ціну за пилосос"))

// alert(`total price ${price1 + price2 + price3}`)


// let monthNumber = Number(prompt("Скільки місяців має рік?"));
// if (monthNumber === 12) {
//   console.log("Вірно!");
// }
// else {
//   console.log("Не знаєте? 12!");
// }

// // одне й те саме але тільки 2 умови

// let someNum = monthNumber === 12 ? "Good" : "Bad";
// console.log(someNum)


// let number = Number(prompt("paste number"))
// if (number % 2 === 0) {
//   alert(`pair number!`)
// }
// else {
//   alert(`not pair number`)
// }


let monthOfBirth = Number(prompt("number of month"));
if (monthOfBirth === 12 || monthOfBirth === 1 || monthOfBirth === 2) {
  console.log("winter");
}
else if (monthOfBirth >= 3 && monthOfBirth <= 5 ) {
  console.log("spring");
  }

else if (monthOfBirth >= 6 && monthOfBirth <= 8 ) {
  console.log("summer");
}
  else if (monthOfBirth >= 9 && monthOfBirth <= 11 ) {
  console.log("autumn");
} else {
  
  console.log("wrong number");
  }