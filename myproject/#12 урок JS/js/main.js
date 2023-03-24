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

document.getElementById('main-form').addEventListener("submit", checkForm)

function checkForm(event) {
    event.preventDefault()
    var el = document.getElementById('main-form')
    var name = el.name.value
    var pass = el.pass.value
    var repass = el.repass.value
    var state = el.state.value

    var fail = ""
    if (name == "" || pass == "" || state == "") {
        fail = "Заполните все поля "
    } else if (name.length <= 1 || name.length >= 30) {
        fail = "Введите корректное имя"
    } else if (pass != repass) {
        fail = "Пароли должны совпадать"
    } else if (pass.split("&").length > 1) {
        fail = "Не корректный пароль"
    }

    if (fail != "") {
        document.getElementById('error').innerHTML = fail
        return false
    } else {
        alert("Все данные корректно заполнены")
        window.location = 'https://itproger.com/course/javascript/12'
    }
}