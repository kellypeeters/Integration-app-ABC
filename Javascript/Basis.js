var attempt = 10; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Kelly" && password == "Peeters") {
        window.location = "Dashboard.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

$("#Registeratiebutton").click(function () {
                $("#Loginform").hide();
                $("#Registratieform").show(); 
}