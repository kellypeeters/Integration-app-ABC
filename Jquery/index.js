console.log(localStorage);
const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

const btnInsert = document.getElementById("btnInsert");
const IsOutput = document.getElementById("IsOutput");

btnInsert.onclick = function () {
    const key = inpKey.value;
    const value = inpValue.value;
    const wachtwoord = password.value;
    const cwachtwoord = cpassword.value;
    console.log(key);
    console.log(value);
    console.log(wachtwoord);
    console.log(cwachtwoord);

    if (key && value && wachtwoord && cwachtwoord) {
        localStorage.setItem('Naam', key);
        localStorage.setItem('E-mail', value);
        localStorage.setItem('Wachtwoord', password);
        localStorage.setItem('Bevestig wachtwoord', cpassword); 
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);  

    IsOutput.innerHTML += `${key}: ${value}: ${wachtwoord}: ${cwachtwoord}<br/>`; 
}
