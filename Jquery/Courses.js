$(document).ready(function () {
    console.log("script linked"); {
        $("#addButton").click(add);

        function add() {
            console.log('before prompt')
            var course = prompt('Welke cursus wilt u toevoegen?');

            console.log('after prompt')
            if (course == "Engels") {
                $('#newCourse span').text("Engels")
                // $('#newCourse').append('<img src="Fotos/Share/lijn.png">').width(30); 
            }

            if (course == "DWD") {
                $('#newCourse span').text("DWD")
                //$('#newCourse').append('<img src="Fotos/Share/lijn.png">').width(30); 


            }
            if (course == "CP") {
                $('#newCourse span').text("CP");


            }
            if (course == "Buisness Communication") {
                $('#newCourse span').text("Buisness Communication");






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
                $('#newCourse span').text("")
                 $('#newCourse').empty('<img src="Fotos/Share/lijn.png">').width(30); 
            }

            if (verwijder == "DWD") {
                $('#newCourse span').text("")
                //$('#newCourse').append('<img src="Fotos/Share/lijn.png">').width(30); 


            }
            if (verwijder == "CP") {
                $('#newCourse span').text("");


            }
            if (verwijder == "Buisness Communication") {
                $('#newCourse span').text("");






                console.log(add);
            }
        }
    }
})






                        //function removeElement(storyboard) {
                        //storyboard.parentNode.removeChild(storyboard);
                        //}
                        // removeElement(document.getElementById("testSpecial"));
                        //console.log(remove);