let tg = window.Telegram.WebApp;
tg.expand();

$(document).ready(function() {
    $("#buythis").on("click", function() {
        $(".listcontainer").css("display", "none");
        $("#form").css("display", "block");
        $("#uname").val(tg.InitDataUnsafe.user.first.name + " " + tg.InitDataUnsafe.user.last_name);
    });

    $("#order").on("click", function() {
        let name = $("#uname").val();
        let mail = $("#mail").val();
        let phone = $("#uphone").val();
        
        if (name.length < 3) {
            alert("ошибка в имени");
        }
        if (mail.length < 3) {
            alert("ошибка в Email");
        }
        if (phone.length < 3) {
            alert("ошибка в номере телефона");
        }
    });
});


let data = {
    name: name,
    email: mail,
    phone: phone
}

tg.SendData(JSON.stringify(data));
tg.close;
