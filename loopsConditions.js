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
//* soru - sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5' in katlarına glince 'Buzz' yazacak.Hem 'ün hemde 5' in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.


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
//* soru - Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?

//   let sayi = +prompt('please sayi')
// let sayac = 1

// while (sayi / 10 > 1) {
//   sayac++;
//   sayi = Math.floor(sayi / 10)
// }

// console.log(sayac)

//! numberFive

//* soru - Aşağıdaki çıktıyı konsola yazdırınız ?

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

//! numberSix

// let prod = +promt('sayi giriniz')
// let num1 = 0;
// let num2 = 0;
// let sum = 1;
// let flag = true;
// do{
//   num1 = num2;
//   num2 = sum;
//   sum = num1 + num2;
//   if (num1 * num2 == prod){
//     flag = false;
//     return [num1, num2, true];
//   }else if (num1 * num2 > prod){
//     flag = false;
//     return [num1, num2, false];
//   }
//   }while(flag)

//! numberSeven
//*  grades'in ortalamasini hesaplayiniz.
// let counter= 0

// const grades = [55, 77, 23, 89, 100, 44, 33, 45]

// for (let i = 0; i < grades.length; i++) {
//     counter += grades[i];

// }

// console.log((counter/grades.length).toFixed(1));



//! numberEight
//* grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.

// const grades = [55, 77, 23, 89, 100, 44, 33, 45]
// let smallerThan = []
// let biggerThan = []


// for (i = 0; i < grades.length; i++) {
//     if (grades[i] < 50) {
//         smallerThan.push(grades[i])
//     } else {
//         biggerThan.push(grades[i])
//     }
// }

// console.log(smallerThan);
// console.log(biggerThan);

//! numberNine
//* İç içe for döngüsü kurarak çarpım tablosunu yazdırma

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <=10; j++) {

//         console.log(`${i}*${j}=${i*j}`);
//         }
// console.log('===============');
// }


//! numberTen
//* Armstrong sayı hesaplama (Basamaklarının küpleri toplamı kendisine eşit olan sayılara Armstrong sayı denir .)

// let number = prompt ('please enter a number')
// let total = 0;

// for (let i = 0; i < number.length; i++) {
//    total += number[i]**3

// }

// if (total == number){
//     console.log('Armstrong');
// }else{
//     console.log('not Armstrong');
// }


//! numberEleven
//* Prompt ile kullanıcıdan sayı istenecek. Daha sonra while döngüsüyle bu sayının 0'dan küçük olması veya 100'den büyük olması durumunda yeniden sayı istenecek. Kullanıcı 0-100 arasında sayı girene kadar döngü devam edecek.

// let number = +prompt('sayi')

// while (number<=0 || number>=100) {
//     console.log('please enter a correct number');
//     number = +prompt('sayi')
// }

// console.log(`${number} dogru bir sayidir`);