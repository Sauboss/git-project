// var text = document.getElementById('text')
// text.title = "New txt"
// console.log(text.title)

// text.style.color = "red"
// text.style.backgroundColor = "black"

// text.innerHTML = "Saulet<br>best"


// var spans = document.getElementsByTagName('span')

// for(var i = 0; i < spans.length; i++){
//     console.log(spans[i].innerHTML)
// }

// let firstPart = "likes"
// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     [firstPart + " javascript"]: true,
//     address: {
//         city: "Nursultan",
//         street: "Freedom",
//     }
// }

// console.log(userInfo)
// console.log(userInfo.address)
// console.log(userInfo.address.city)

// function makeUserInfo(name, age) {
//     return {
//         name,
//         age,
//     }
// }

// let user = makeUserInfo("Saulet", 21)
// console.log(user)

// let userInfo = {
//     name: "Saulet",
//     age: 21,
//     address: {
//         city: "Nursultan",
//         street: "Momishuly"
//     }
// }

// if (userInfo.age) {
//     console.log(userInfo.age)
// }


// if ("name" in userInfo) {
//     console.log(userInfo.name)
// }

// for (let key in userInfo) {
//     console.log(key)

//     console.log(userInfo[key])
// }


// for (let key in userInfo.address) {
//     console.log(key)

//     console.log(userInfo.address[key])
// }

// document.getElementById('main-form').addEventListener("submit", checkForm)

// function checkForm(event) {
//     event.preventDefault()
//     var el = document.getElementById('main-form')
//     var name = el.name.value
//     var pass = el.pass.value
//     var repass = el.repass.value
//     var state = el.state.value

//     var fail = ""
//     if (name == "" || pass == "" || state == "") {
//         fail = "Заполните все поля "
//     } else if (name.length <= 1 || name.length >= 30) {
//         fail = "Введите корректное имя"
//     } else if (pass != repass) {
//         fail = "Пароли должны совпадать"
//     } else if (pass.split("&").length > 1) {
//         fail = "Не корректный пароль"
//     }

//     if (fail != "") {
//         document.getElementById('error').innerHTML = fail
//         return false
//     } else {
//         alert("Все данные корректно заполнены")
//         window.location = 'https://itproger.com/course/javascript/12'
//     }
// }



// const names = ['Malika', 'Madlen', 'Janel', 'Alina', 'Merei']

// function fullName() {
//     // var arr = [];
//     for (let i = 0; i < names.length; i++) {
//         names[i] = names[i].toUpperCase();
//     }
//     return names
// }

// let result = fullName()

// console.log(result)

// let newArray = [];
// function fullName() {
//     for (let i = 0; i < names.length; i++) {
//         newArray = newArray + "," + names[i].length
//     }
//     return newArray
// }

// let result = fullName()
// console.log(result)

// const list = document.querySelector('ul');
// list.insertAdjacentHTML(
//     'beforeend',
//     '<li>Текст</li>'
// );


// const data = document.querySelector('[data-say-hi]');
// // data.outerHTML = `Живи и работай`
// console.log(data)

// const newElement = document.createElement('div');
// newElement.innerHTML = `Работай и учись`
// data.append(newElement);



// let btn = document.getElementById('task')
// let cls = document.getElementsByClassName('cls');
// btn.addEventListener('click', func);
// function func() {
//     let sum = 0;
//     for (let i = 0; i < cls.length; i++) {
//         sum += +cls[i].value;
//     }

//     let result = document.getElementById('sum')
//     result.value = sum
// }





// var cls = document.getElementById('cls');
// cls.addEventListener('blur', func);

// function func() {
//     let result = 0;
//     let str = cls.value
//     let sum = str.split('')
//     for (let i = 0; i < sum.length; i++) {
//         result += +sum[i];
//     }
//     let elem = document.getElementById('sum');
//     elem.innerHTML = result
// }



// var elem = document.getElementById('num');
// elem.addEventListener('blur', func);

// function func() {
// 	var sum = 0;
// 	var str = elem.value;
// 	var arr = str.split('');
//   	for (var i = 0; i < arr.length; i++) {
// 		sum += +arr[i];
// 	}
// 	var newElem = document.getElementById('result');
// 	newElem.innerHTML = sum;
// } 



















// const names = ['Malika', 'Madlen', 'Janel', 'Alina', 'Merei'];

// function main(namesArray, fn) {
//     let newArr = [];
//     for (let i = 0; i < namesArray.length; i++) {
//         newArr.push(fn(namesArray[i]))
//     }
//     return newArr;


// }

// function elementUpperCase(elem) {
//     return elem.toUpperCase()
// }

// function elementLength(elem) {
//     return elem.length
// }


// const result = main(names, elementUpperCase)
// const result2 = main(names, elementLength)


// console.log(result2)
// console.log(result)



// var elem = document.getElementById('input')
// elem.addEventListener('focus', func);
// elem.addEventListener('blur', func2);

// function func() {
//     elem.placeholder = '';
// }

// function func2() {
//     var elem = document.getElementById('input');
//     var elems = document.getElementsByClassName('name');
//     if (elem.value != 0) {
//         var str = elem.value;
//         var arr = str.split(' ');
//         for (var i = 0; i < arr.length; i++) {
//             elems[i].value = arr[i]
//         }
//     }
// }


// var elem = document.getElementById('input');
// elem.addEventListener('blur', bigLetter);

// function uswords(str) {
// 	var arr = str.split(' ');
// 	for (var i = 0; i < arr.length; i++) {
// 		arr[i] = arr[i].split('');
// 		arr[i][0] = arr[i][0].toUpperCase();
// 		arr[i] = arr[i].join('');
// 	}
// 	str = arr.join(' ');
// 	return str;
// }

// function bigLetter() {
// 	elem.value = uswords(elem.value);
// }





// var elem = document.getElementById('num');
// elem.addEventListener('blur', func);

// function func() {
//     var max = 0;
//     var arr2 = []
//     var str = elem.value
//     var arr = str.split(' ');
//     for (var i = 0; i < arr.length; i++) {
//         var num = 0;
//         arr2 = arr[i].split('');
//         for (var j = 0; j < arr2.length; j++) {
//             num += 1
//         }
//         if (num > max) {
//             max = num
//         }
//         var result = document.getElementById('result');
//         result.innerHTML = max
//     }
// }


// var elem = document.getElementById('num');
// elem.addEventListener('blur', func);

// function func() {
// 	var arr2 = [];
// 	var str = elem.value;
// 	var arr = str.split('.');
// 	arr2 = arr.reverse();
// 	var str1 = arr2.join('-');
// 	elem.value = str1;
// } 




// var elem = document.getElementById('num');
// var elem1 = document.getElementById('btn');
// this.addEventListener('click', func);

// function func() {
//     var year = elem.value;
//     var date = new Date();
//     var yearNow = date.getFullYear();
//     var p = document.getElementById('result');
//     p.innerHTML = yearNow - year;
// }




// var elem = document.getElementById('num');
// elem.addEventListener('click', func);

// function func() {
//     var dayWeak = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     var str = elem.value;
//     var arr = str.split('.');
//     var arr2 = arr.reverse();
//     var str1 = arr2.join(',')
//     var date = new Date(str1);
//     var day = date.getDay();
//     var p = document.getElementById('text');
//     p.innerHTML = dayWeak[day];
// }


// var elem = document.getElementById('num');
// var btn = document.getElementById('but');
// btn.addEventListener('click', func);

// function func() {
//     var str = elem.value;
//     var arr = str.split('');
//     var arr2 = str.split('').reverse();
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr2[i]) {
//             alert('это слово не палиндром');
//             return;
//         }
//     }
//     alert('это слово палиндром');
// }





// var elem = document.getElementById('num');
// elem.addEventListener('blur', func);

// function func() {
//     var str = elem.value;
//     var arr = str.split('');
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == 3) {
//             alert('это число содержит 3');
//             return;
//         }
//     }
//     alert('это число не содержит 3');
//     return;
// }




// var elem = document.getElementsByTagName('p');
// var btn = document.getElementById('btn');
// btn.addEventListener('click', func);

// function func() {
//     for (var i = 0; i < elem.length; i++) {
//         elem[i].innerHTML = elem[i].innerHTML + ' ' + (i + 1)
//     }
// }








// var elem = document.getElementsByTagName('p');
// var btn = document.getElementById('btn');
// btn.addEventListener('click', func);


// function func() {
//     var arr2 = [];
//     for (var i = 0; i < elem.length; i++) {
//         arr2[i] = +elem[i].innerHTML;
//     }
//     var input = document.getElementById('num');
//     input.value = arr2.sort(sortArr);
// }

// function sortArr(a, b) {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return -1;
//     }
//     if (a == b) {
//         return 0;
//     }
// }








// newArr.push(fn(namesArray[i]))

// const passive = [

//     {
//         name: "Saulet",
//         age: 20
//     },

//     {
//         name: "Burhan",
//         age: 21
//     },
//     {
//         name: "Azamat",
//         age: 27
//     },
//     {
//         name: "Asel",
//         age: 16
//     },
//     {
//         name: 'Daulet',
//         age: 14
//     }
// ]


// function func(pass) {
//     var arr = []
//     var arr2 = []
//     for (let i = 0; i < pass.length; i++) {
//         if (pass[i].age > 18) {
//             arr.push(pass[i].name)
//         } if (pass[i].age < 18) {
//             arr2.push(pass[i].name)
//         }
//     }

//     return [arr, arr2]

// }


// const result = func(passive);

// console.log(result)








// var str = "i am in the frontend developer";


// function func(strTwo) {
//     var arr = strTwo.split(' ')
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].split('');
//         arr[i][0] = arr[i][0].toUpperCase();
//         arr[i] = arr[i].join('');
//     }
//     strTwo = arr.join(' ')
//     return strTwo
// }


// var result = func(str)

// console.log(result)








// function func(str) {
//     let changeStr = String(str);
//     var arr = changeStr.split('')
//     var arr2 = arr.reverse()
//     changeStr = arr2.join('')
//     return changeStr
// }
// let what = undefined;

// const result = func(what)

// console.log(result)


// let list = {

//     name: 'denis',

//     work: 'easycode',

//     age: 29

// }

// function func(str) {
//     for (var syntax in str) {
//         if (typeof str[syntax] == "string") {
//             str[value] = list[syntax].toUpperCase
//         }
//     }
//     return str
// }

// function func(str) {
//     for (i = 0; i < str.length; i++) {
//         if (str[i].value == "string") {
//             str[i].value = str[i].value.toUpperCase()
//         }
//     }
//     return str
// }

// const result = func(list)
// console.log(result)



// const apple = {}

// apple.name = 'iphone 11';
// apple.cena = 300100
// apple.proces = 'apple bionic a15'


// function func(elem) {
//     let elem2 = elem.cena * (10 / 100)
//     elem.cena = elem.cena - elem2
//     return elem
// }


// const result = func(apple)

// console.log(result)




// let arr = [6, 3, 8, 1, 9, 2, 10, 11]
// // let arr = []
// let arr2 = []

// arr.forEach((item, index, arr) => {
//     // arr = Math.floor(Math.random() * 12)
//     arr2.push(item * 10)
// })



// let result = arr.map((item, index, arr) => {
//     // arr = Math.floor(Math.random() * 12)
//     return item * 10
// })



// console.log(arr2)
// console.log(result)











// function func(elem) {
//     let result = []
//     elem.forEach((item, index, arr) => {
//         if (item.age > 18) {
//             result.push(item.name)
//         }
//     })
//     return result
// }




// let num = func(passive)
// console.log(num)


// let result = arr.map((item, index, arr) => {
//     // arr = Math.floor(Math.random() * 12)
//     return item * 10
// })


// function func(elem) {
//     let arr2 = elem.map((item, index, arr) => {
//         return { name: item.name, age: item.age }
//     })
//     return arr2
// }

// let result = func(passive)

// console.log(result)



// function func(elem) {
//     let result = elem.filter((item, index, arr) => {
//         return item.gender == "male"
//     })
//     return result
// }

// let result = func(passive)

// console.log(result)




// let user = {
//     height: 10,
//     width: 20,
//     square: function () {
//         return this.height * this.width
//     }
// }


// console.log(user.square())





// const result = {
//     num: 10,
//     sum: 5,
//     value: function () {
//         return this.num * this.sum
//     }
// }

// console.log(result.value())






const passive = [
    {
        _id: "5cdce6ce338171bb473d2855",
        index: 0,
        isActive: false,
        balance: 2397.64,
        age: 39,
        name: "Lucile Finley",
        gender: "female",
        company: "ZOXY",
        email: "lucilefinley@zoxy.com",
        phone: "+1 (842) 566-3328",
        registered: "2015-07-12T09:39:03 -03:00"
    },
    {
        _id: "5cdce6ce0aa8d071fa4f4cc5",
        index: 1,
        isActive: true,
        balance: 2608.48,
        age: 33,
        name: "Woodward Grimes",
        gender: "male",
        company: "FORTEAN",
        email: "woodwardgrimes@fortean.com",
        phone: "+1 (960) 436-3138",
        registered: "2014-09-08T03:24:39 -03:00"
    },
    {
        _id: "5cdce6ce103de120d32d6fe4",
        index: 2,
        isActive: true,
        balance: 1699.99,
        age: 25,
        name: "Robinson Coleman",
        gender: "male",
        company: "GENMOM",
        email: "robinsoncoleman@genmom.com",
        phone: "+1 (852) 543-3171",
        registered: "2019-04-23T08:24:58 -03:00"
    },
    {
        _id: "5cdce6cebada7a418d8ccb3d",
        index: 3,
        isActive: true,
        balance: 2621.84,
        age: 25,
        name: "Austin Benton",
        gender: "male",
        company: "ZILIDIUM",
        email: "austinbenton@zilidium.com",
        phone: "+1 (977) 573-2627",
        registered: "2016-08-02T10:08:24 -03:00"
    },
    {
        _id: "5cdce6ced81fe99596d9cef5",
        index: 4,
        isActive: true,
        balance: 1297.31,
        age: 37,
        name: "Casandra Stout",
        gender: "female",
        company: "ANACHO",
        email: "casandrastout@anacho.com",
        phone: "+1 (929) 465-3804",
        registered: "2018-04-14T11:27:26 -03:00"
    },
    {
        _id: "5cdce6ce6c3ae6c4d6f39e88",
        index: 5,
        isActive: false,
        balance: 2165.49,
        age: 20,
        name: "Valencia Carrillo",
        gender: "male",
        company: "XEREX",
        email: "valenciacarrillo@xerex.com",
        phone: "+1 (977) 522-3378",
        registered: "2014-02-14T11:45:27 -02:00"
    }
];


const result = passive.find((item, index, arr) => {
    return item.company == "ANACHO"
})


console.log(result)


