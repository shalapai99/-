var tg = window.Telegram.WebApp;

$(document).on("click", "#buythis", function(){
        $(".listcontainer").css("display", "none");
        $(".header").css("display", "none");
        $("#form").css("display", "block");
    });

    $(document).on("click", "#order", function(){
        var name = $("#uname").val();
        var mail = $("#mail").val();
        var phone = $("#uphone").val();
        
        if (name.length < 3) {
            alert("ошибка в имени");
            return;
        }
        if (mail.length < 3) {
            alert("ошибка в Email");
            return;
        }
        if (phone.length < 3) {
            alert("ошибка в номере телефона");
            return;
        }

        var data = {
            name: name,
            email: mail,
            phone: phone
        };
        
        tg.sendData(JSON.stringify(data));
        tg.close();
    });

