//! numberOne
//* Bu ornekte kullanicidan sayi almak yerine JS te kendim Math round ve Math random fonksiyonlarini kullanarak 0-100 arasi sayi urettim. Ulasilmasini istedigim sayi 14tur. Conditionals kullanarak eger girilen sayi 14 e esitse tebrikler degilse uzgunum kaybettin yazdirdim.

// let numberA = Math.round(Math.random() * 100);
// let expectedNumber = 14;

// if (expectedNumber === numberA) {
//   console.log("Congratulations");
// } else {
//   console.log("Sorry but you are lost");
// }

// console.log(numberA);


//! numberTwo
//* Bu ornekte sayinin asal olup olmadigini for dongusu ile inceledim.

// let numberB = +prompt("Please enter a number");
// let prime = "prime";
// for (let i = 2; i < numberB; i++) {
//   if (numberB % i == 0) {
//     prime = "not prime";
//     break;
//   }
// }
// if (numberB == 1) {
//   prime = "please change the number";
// }

// console.log(prime);


//! numberThree
// soru - sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5' in katlarına glince 'Buzz' yazacak.Hem 'ün hemde 5' in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.


//   for(i = 1; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log('Fizz');
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//   } else if (i % 3 == 0) {
//     console.log('fizbuzz');
//   } else {
//     console.log('3 yada 5 bolunmez', i);
//   }

// }


//! numberFour
// soru - Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?

//   let sayi = +prompt('please sayi')
// let sayac = 1

// while (sayi / 10 > 1) {
//   sayac++;
//   sayi = Math.floor(sayi / 10)
// }

// console.log(sayac)

//! numberFive

// soru - Aşağıdaki çıktıyı konsola yazdırınız ?

0
00
000
0000
00000
000000


// let count = 1;
// let str = "*";
// let nl = "\n";
// while (count <= 5) {
//   console.log(str + nl);
//   str += "*";
//   count++;
// }