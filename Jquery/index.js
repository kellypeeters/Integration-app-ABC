console.log(localStorage);
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const Wachtwoord = document.getElementById("Wachtwoord");
const BevestigWachtwoord = document.getElementById("BevestigWachtwoord");

$("#registrationForm").submit(function (event) {
    var formData = $('#registrationForm').serializeArray();
    event.preventDefault();
    console.log(formData);
    localStorage.setItem('Naam', inpKey.value);
    localStorage.setItem('E-mail', inpValue.value);
    localStorage.setItem('Wachtwoord', Wachtwoord.value);
    localStorage.setItem('Bevestig wachtwoord', BevestigWachtwoord.value);
});

function validate() {
    var OpgeslagenEmail = localStorage.getItem('E-mail');
    var OpgeslagenWw = localStorage.getItem('Wachtwoord');

    var UserEmail = document.getElementById('username');
    var UserWw = document.getElementById('password');
    if (UserEmail.value == OpgeslagenEmail && UserWw.value == OpgeslagenWw) {
        window.open('Dashboard.html'); 
    } else { 
        alert("Email en wachtwoord komen niet overeen");
    }
}
