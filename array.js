
//* soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?

// let numbers1 = [1, 2, 3, 45, 65]

// const findAvearge = (number) => {
//     let sum = 0

//     number.forEach(average => {
//         (sum += average)
//     });

//     return sum / numbers1.length
// }

// console.log(findAvearge(numbers1));



//* soru 2: Bir pragraftaki sesliharflerin sayısını bulan fonksiyonu yazınız?

// let paragh = 'Lorem ipsum dolor sit amet.'

// let findVowel = function(findOf){

//     let count = 0
//     let vowels = 'aeıioöuü'
//     let vowels1 = vowels.split('')

//     for (let i = 0; i < (findOf.split('')).length; i++){
//     if((vowels.split('')).includes((findOf.split('')[i]))){count++}
// }
// return count
// }
// console.log(findVowel(paragh));


// const paragraph = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

// function findVowels(str) {
//   let count = 0
//   let vowels = 'aeıioöuü'


//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) count++

//   }

//   return count
// }

// console.log(findVowels(paragraph))



//* soru 3: Bir dizideki en büyük sayıyı bulan fonksiyonu yazınız?



// const numbers2 = [1, 2, 40, 4, 5]

// let newNumber = (numbers2.sort((a, b) => a - b));

// console.log(newNumber[newNumber.length - 1]);



//* soru 4: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.


// const paragraph = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'

// let reverseFunction = function(s){
//     return s.split("").reverse().join('')
// }

// console.log(reverseFunction(paragraph));


//* soru 5: Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.


// let nameMain = []



// while (true) {
//     let name1 = prompt('please enter a name')
//   if (name1 === 'q'){
//     nameMain.pop()
//     break
//   }
//   nameMain.push(name1)
// }

// console.log(nameMain);


//* soru 6: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.

// let numbers = [1, 5, 8, 4, 5];

// let kare1 = []

// let kareAl = numbers.forEach((kare) => {
//     let kare2 = kare ** 2;
//     kare1.push(kare2)
// })

// console.log(kare1);

//* soru 7: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.

// let numbers = [1, 5, 8, 4, 5];

// let squaredNumbers = numbers.map(num => num ** 2);

// let evenNumbers = squaredNumbers.filter(num => num % 2 === 0);


// console.log(squaredNumbers);
// console.log(evenNumbers);