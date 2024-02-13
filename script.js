let tg = window.Telegram.WebApp;
tg.expand();

$(document).on("click", "#buythis", function(){
        $(".listcontainer").css("display", "none");
        $("#form").css("display", "block");
    });

    $(document).on("click", "#order", function(){
 name = $("#uname").val();
 mail = $("#mail").val();
 phone = $("#uphone").val();
        
        if (name.length < 3) {
            alert("ошибка в имени");
        }
        if (mail.length < 3) {
            alert("ошибка в Email");
        }
        if (phone.length < 3) {
            alert("ошибка в номере телефона");
        }

        //$(".listcontainer").css("display", "grid");
        //$("#form").css("display", "none");
   
    let data = {
    name: name,
    email: mail,
    phone: phone
};

tg.SendData(JSON.stringify(data));
tg.close;
    });


