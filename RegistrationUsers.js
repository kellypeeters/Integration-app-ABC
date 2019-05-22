var users = JSON.parse(localStorage.getItem('Users')) || [];
var userData = [{Username:document.getElementById("UserName").value},
{Email:document.getElementById("EmailAddress").value},
{Password:document.getElementById("PassWord").value},
{Address:document.getElementById("Address1").value},
{Phone:document.getElementById("PhoneNumber").value}];

users.push(userData);
localStorage.setItem('Users', JSON.stringify(users));

var users = JSON.parse(localStorage.getItem('Users')) || [];
users.forEach(console.log);
users[0];
users[1];
[etc.] 