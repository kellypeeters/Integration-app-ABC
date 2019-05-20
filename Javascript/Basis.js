    $("#Registratieform").hide();

    var attempt = 10;

    function validate() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username == "peeters.kelly@outlook.com" && password == "Peeters") {
            window.location = "Dashboard.html";
            return false;
        } else {
            attempt--;
            if (attempt == 0) {
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
        }
    } 

    $(".GeenAccount").click(function () {
        $("#Loginform").hide();
        $("#Registratieform").show();
    });

$(".AlAccount").click(function () {
    $("#Registratieform").hide();
    $("#Loginform").show(); 
});  