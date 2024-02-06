let tg = window.Telegram.WebApp;
let buy = document.getElementsById("buythis");
let order = document.getElementById("order");
tg.expand();

buy.addEventListener("click", () =>{
    document.getElementsByClassName("listcontainer").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("uname").value = tg.InitDataUnsafe.user.first.name + " " + tg.InitDataUnsafe.user.last_name;
});

order.addEventListener("click", () => {
    let name = document.getElementById("uname").value;
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("uphone").value;
    if (name.lenght < 3) {
        alert("ошибка в имени");
    }
    if (mail.lenght < 3 ) {
        alert("ошибка в Email");
    }
    if (phone.lenght < 3 ) {
        alert("ошибка в номере телефона");
    }
});

let data = {
    name: name,
    email: mail,
    phone: phone
}

tg.SendData(JSON.stringify(data));
tg.close;