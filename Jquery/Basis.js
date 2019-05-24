    $("#Registratieform").hide();
    $(".VergetenWachtwoord").hide();  

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