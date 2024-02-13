
let tg = window.Telegram.WebApp;

$(document).on("click", "#buythis", function(){
        $(".listcontainer").css("display", "none");
        $(".header").css("display", "none");
        $("#form").css("display", "block");
    });

    $(document).on("click", "#order", function(){
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

        let data = {
            name: name,
            email: mail,
            phone: phone
        };
        
        tg.sendData(JSON.stringify(data));
        tg.close;
    });

