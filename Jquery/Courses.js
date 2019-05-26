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

                /*<div class="volledig_kalender">
           <div class="month">
               <button class="prev">&#10094;</button>
               <button class="next">&#10095;</button>

               <p>
                   Augustus<br>
                   <span style="font-size:18px">2019</span>
               </p>

           </div>
           <ul class="weekdays">
               <li>Ma</li>
               <li>Di</li>
               <li>Wo</li>
               <li>Do</li>
               <li>Vr</li>
               <li>Za</li>
               <li>ZO</li>
           </ul>

           <ul class="days">
               <li>1</li>
               <li>2</li>
               <li>3</li>
               <li>4</li>
               <li>5</li>
               <li>6</li>
               <li>7</li>
               <li>8</li>
               <li>9</li>
               <li>10</li>
               <li>11</li>
               <li>12</li>
               <li>13</li>
               <li>14</li>
               <li>15</li>
               <li>16</li>
               <li>17</li>
               <li>18</li>
               <li>19</li>
               <li>20</li>
               <li>21</li>
               <li>22</li>
               <li>23</li>
               <li>24</li>
               <li>25</li>
               <li>26</li>
               <li>27</li>
               <li>28</li>
               <li>29</li>
               <li>30</li>
               <li>31</li>
           </ul>

       </div>*/
                
            }
            

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