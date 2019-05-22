    $("#Registratieform").hide();
    $(".VergetenWachtwoord").hide(); 
 
    function validate() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username == "peeters.kelly@outlook.com" && password == "Peeters") {
            window.location = "Dashboard.html";
            return false;
        } else {
            alert("Email en wachtwoord komen niet overeen");
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

 $(".Vergeten").click(function () {
        $("#Loginform").hide();
        $(".VergetenWachtwoord").show(); 
    }); 

 $(".GaNaarLogin").click(function () {
        $(".VergetenWachtwoord").hide();
        $("#Loginform").show(); 
    }); 

