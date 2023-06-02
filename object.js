//! numberOne
//* Object olusturma

// const car = {
//     brand :'Mercedes',
//     model : 2020,
//     speed : 5,
//     color : ['pink','black','red'],
// }

// console.log(car);
// console.log(car.model);
// console.log(car.speed);
// console.log(car.color[0]);

// car.color.forEach(x=> console.log(x))

// const team = [
//     { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
//     { name: "Mary", surname: "Bary", job: "tester", age: 22 },
//     { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
//   ]

//! numberTwo
// //* team dizisindeki job'lari tek tek yazdiriniz.

// team.forEach((name)=> console.log(name))

//! numberThree
//* age'leri bir artirarak yeni bir diziye saklayiniz.

// let b = []
// const newAge = team.map((a)=> b.push(a.age + 1))

// console.log(b);

//! numberFour
//* name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.


// const newNames = team.map((n) => {
//     return {
//         fullName: n.name.toUpperCase() + ' ' + n.surname.toUpperCase(),
//         age: n.age + 5,
//     }
// })

// console.log(newNames);


//! numberFive
//* Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.

// const newa = team.filter((a)=> a.age<= 22).forEach((a)=> console.log(a))


//! numberSix
//* 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.

// const newa = team.filter((a)=> a.age<= 22).map((a)=>a.name)

// console.log(newa);



//! numberSeven
//* ortalama yasi hesaplayiniz.

// const averAge= team.reduce((acc,v) => acc + v.age,0) / team.length
// console.log(averAge);



//! numberEight
//* fonksiyonun dondurdugu objenin destructiring yontemi ile bolunmesi 

// const production = () => {

//     return {
//         home: 500,
//         pName: 'NIKE'
//     }
// }

// let { home, pName } = production()
// console.log(home, pName);

//! numberNine
//* person1 keyinde bulunan salaryi yazdir.

// const people = {
//     person1: {
//       name: "Can",
//       surname: "Canan",
//       dob: "1990",
//       job: "developer",
//       salary: "140000",
//       drivingLicense: true,
//     },
//     person2: {
//       name: "John",
//       surname: "Sweet",
//        dob: "1990",
//       job: "tester",
//       salary: "110000",
//       drivingLicense: false,
//     },
//     person3: {
//       name: "Steve",
//       surname: "Job",
//       dob: "2000",
//       job: "developer",
//       salary: "90000",
//       drivingLicense: true,
//     },
//   }

 
// const {person1} = people

// const a = person1.salary
// console.log(a);


//* Object

// const carData = [
//     {
//         id: 1,
//         make: 'Toyota',
//         model: 'Camry',
//         year: 2020,
//         color: 'Silver',
//         mileage: 25000,
//         engine: {
//             type: 'V6',
//             horsepower: 300,
//             cylinders: 6,
//         },
//     },
//     {
//         id: 2,
//         make: 'Honda',
//         model: 'Accord',
//         year: 2019,
//         color: 'White',
//         mileage: 20000,
//         engine: {
//             type: 'V4',
//             horsepower: 140,
//             cylinders: 4,
//         },
//     },
//     {
//         id: 3,
//         make: 'Ford',
//         model: 'Mustang',
//         year: 2018,
//         color: 'Red',
//         mileage: 15000,
//         engine: {
//             type: 'V8',
//             horsepower: 400,
//             cylinders: 8,
//         },
//     },
//     {
//         id: 4,
//         make: 'Chevrolet',
//         model: 'Camaro',
//         year: 2017,
//         color: 'Black',
//         mileage: 10000,
//         engine: {
//             type: 'V4',
//             horsepower: 200,
//             cylinders: 4,
//         },
//     },
//     {
//         id: 5,
//         make: 'Dodge',
//         model: 'Challenger',
//         year: 2016,
//         color: 'Blue',
//         mileage: 5000,
//         engine: {
//             type: 'V6',
//             horsepower: 250,
//             cylinders: 6,
//         },
//     },
//     {
//         id: 6,
//         make: 'BMW',
//         model: '3 Series',
//         year: 2015,
//         color: 'Silver',
//         mileage: 35000,
//         engine: {
//             type: 'V8',
//             horsepower: 400,
//             cylinders: 8,
//         },
//     },
//     {
//         id: 7,
//         make: 'Audi',
//         model: 'A4',
//         year: 2014,
//         color: 'Black',
//         mileage: 30000,
//         engine: {
//             type: 'V4',
//             horsepower: 220,
//             cylinders: 4,
//         },
//     },
//     {
//         id: 8,
//         make: 'Mercedes-Benz',
//         model: 'C-Class',
//         year: 2013,
//         color: 'White',
//         mileage: 25000,
//         engine: {
//             type: 'V6',
//             horsepower: 280,
//             cylinders: 6,
//         },
//     },
//     {
//         id: 9,
//         make: 'Volkswagen',
//         model: 'Golf',
//         year: 2012,
//         color: 'Red',
//         mileage: 20000,
//         engine: {
//             type: 'V4',
//             horsepower: 180,
//             cylinders: 4,
//         },
//     },
//     {
//         id: 10,
//         make: 'Tesla',
//         model: 'Model S',
//         year: 2011,
//         color: 'Silver',
//         mileage: 15000,
//         engine: {
//             type: 'V4',
//             horsepower: 260,
//             cylinders: 4,
//         },
//     },
// ]

//! numberTen
//* 1- Rengi gümüş olan arabaları bir listeye ata.

// let new1 = carData.filter((a)=> a.color == 'Silver')

// console.log(new1);

//! numberEleven
//* 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.

//   let new2 = carData.filter((a)=> a.year>2015)
//   console.log(new2);


// let new3 = []

// for (let p of carData) {
//    console.log(p.year);
//     if (p.year > 2015) {
//         new3.push(p)
//     }
// }

// console.log(new3);

//! numberTwelve
// *3- Arabaların ortalama kilometre değerini hesapla.

// const mileage1 = carData.map((a)=> a.mileage).reduce((acc,v)=>acc + v,0
// )
// // console.log(mileage1);
// console.log(mileage1/carData.length);


//! numberThirteen
//* 4- 8 silindirli araçları listele

// const new2 = carData.filter((a)=> a.engine.cylinders==4 || a.engine.cylinders==8)
// console.log(new2);


// for (let i in carData) {

//      if( carData[i].engine.cylinders==4 || carData[i].engine.cylinders==8){
//       console.log(carData[i]);
//      }
// }

//! numberFourteen
//* 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.


// let obj = {}
// obj['abc'] = 2
// console.log(obj)


// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]

// function createDict(keys, values) {
//     let obj = {}

//     keys.forEach((e, i) => {

//         if (values[i]) {
//             obj[e] = values[i]
//         } else {
//             obj[e] = null
//         }
//     })

//     return obj
// }

// console.log(createDict(keys, values))

//! numberFifteen
//* 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
// Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.

// let obj = {a: 8, b: 9, c: 15}

// let a = {}

// for (let e in obj) {
//     a[obj[e]] = e
// }

// console.log(a);

//! numberSixteen
//* 7-  Size bazı dilleri ve verilen dillerdeki test sonuçlarınızı içeren bir dictionarj obj verilir. Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.


// let sorted = []

// for (let i in mixed){
//     if(mixed[i] >=60){

//         sorted.push(mixed[i])
//     }
// }

// let m = sorted.sort((a,b)=> (b-a))

// console.log(m);