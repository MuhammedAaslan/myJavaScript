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




