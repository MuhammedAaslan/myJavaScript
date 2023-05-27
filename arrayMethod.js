
//! numberOne
//*  Dizideki herbir fiyati konsola bastiriniz.
// const prices = [250, 150, 300, 500]

// prices.forEach((price, i) => console.log(price, i) )

//*  Dizideki toplam fiyati hesaplayalim.


// const prices = [250, 150, 300, 500]

// let sum = 0

// prices.forEach(price => sum += price)
// console.log(`SUM = ${sum}`);


//! numberTwo
//* Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]


// const upper = names.map((changeTo)=> (changeTo.toUpperCase())) 

// console.log(upper);

//! numberThree
// * tlPrices dizisindeki rakamlarin dolar
// * karsiliklarini hesaplatarak yeni dizelere kaydediniz

// const dolar = 19.8
// const tlPrices = [100, 150, 100, 50, 80]


// const convertedDollars = tlPrices.map((tl)=> +(tl/dolar).toFixed(2))

// console.log(convertedDollars);

//! numberFour
// * tlPrices dizisindeki rakamlarin dolar
// * karsiliklarini hesaplatarak yeni dizelere kaydediniz (for ile cozumu)

// const dolar = 19.8
// const tlPrices = [100, 150, 100, 50, 80]

// let upper = []


// for (let i = 0; i < tlPrices.length; i++) {
//    upper.push(+(tlPrices[i] / dolar).toFixed(2))
    
// }

// console.log(upper);


//! numberFive
//* Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

// let bigger = salaries.filter((salary) => salary >= 10000)

// console.log(bigger);

//! numberSix
//* Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//* yeni diziye saklayalim.

// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

// const newSalary = salaries.filter(salary => salary<9000).map(salary => Math.round(salary*1.1))

// console.log(newSalary);


//! numberSeven
//* Toplama odenen maas hesaplama

// const salaries = [5500, 8000, 6500, 9000, 10000]


// const sum = salaries.reduce((acc, value) => acc + value)
// console.log('total:',sum);



//! numberEight
//* Maasi 6000 ile 10000 arasinda olanlara %10 zam yapilacak ve toplam maaslari ne kadar olacak


// const salaries = [5500, 8000, 6500, 9000, 15000]

// const riseUp = salaries.filter((salary) => salary >= 6000 && salary <= 10000).map((salary) => salary * 1.1).reduce((acc, value) => acc + value)

// console.log(riseUp);
