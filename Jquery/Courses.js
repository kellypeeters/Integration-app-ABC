$(document).ready(function () {
    console.log("script linked"); {
        $("#addButton").click(add);

        function add() {
            console.log('before prompt')
            var course = prompt('Welke cursus wilt u toevoegen?');

            console.log('after prompt')
            if (course == "Engels") {
                $('#Engels span').text("Engels")
                $('.Engels #lijn').show();

               

            if (course == "Dynamic Web") {
                $('#dwd span').text("Dynamic Web")
                $('.dwd #lijn').show();
            }

            if (course == "Creative Programming") {
                $('#cp span').text("Creative Programming");
                $('.cp #lijn').show();
            }

            if (course == "Business Communication") {
                $('#bs span').text("Business Communication");
                $('.bs #lijn').show();

                console.log(add);
            }
        }
    }
})

$(document).ready(function () {

    console.log("script linked"); {
        $("#vuilbak").click(remove);

        function remove() {
            console.log('before prompt')
            var verwijder = prompt('Welke cursus wilt u verwijderen?');

            console.log('after prompt')
            if (verwijder == "Engels") {
                $('#Engels span').text("")
                $('.Engels #lijn').hide();
            }

            if (verwijder == "Dynamic Web") {
                $('#dwd span').text("")
                $('.dwd #lijn').hide();
            }

            if (verwijder == "Creative Programming") {
                $('#cp span').text("");
                $('.cp #lijn').hide();
            }

            if (verwijder == "Business Communication") {
                $('#bs span').text("");
                $('.bs #lijn').hide();

                console.log(remove);
            }
        }
    }
});

//function removeElement(storyboard) {
//storyboard.parentNode.removeChild(storyboard);
//}
// removeElement(document.getElementById("testSpecial"));
//console.log(remove);
