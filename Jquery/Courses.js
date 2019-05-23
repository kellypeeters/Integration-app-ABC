$(document).ready(function () {
            console.log("script linked"); {
                $("#addButton").click(add);

                function add() {
                    console.log('before prompt')
                    var course = prompt('Welke cursus wilt u toevoegen?');

                    console.log('after prompt')
                    var vak
                    if (course == "Engels") {
                        $('#newCourse span').text("Engels");
                    }

                    if (course == "DWD") {
                            $('#newCourse span').text("DWD");
                        }}
                if (course == "CP") {
                            $('#newCourse span').text("C");
                        }}
                if (course == "Buisness") {
                            $('#newCourse span').text("Buisness");
                    
                    
                                console.log(add);
                        }})








                                //$('#newCourse').append('<img src="Fotos/Share/lijn.png">')



                            


                    


              

            $("#minus").click(remove);

            function remove() {
                function removeElement(storyboard) {
                    storyboard.parentNode.removeChild(storyboard);
                }
                removeElement(document.getElementById("testSpecial"));
                console.log(remove);
            };