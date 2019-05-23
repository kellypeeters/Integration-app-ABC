//dropdown legende

$(function () {
    console.log("Script linked");

    $(document).ready(function () {
        $('.kennisverwerking').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-kennisverwerking').slideToggle();
        });

        $('.samenwerking').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-samenwerking').slideToggle();
        });

        $('.discussie').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-discussie').slideToggle();
        });

        $('.onderzoek').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-onderzoek').slideToggle();
        });

        $('.praktijk').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-praktijk').slideToggle();
        });
        $('.productie').click(function () {
            $(this).toggleClass("animate");
            $('.dropdown-legende-productie').slideToggle();
        });
        $('.btn_vak_dropdown').click(function () {
            $(this).toggleClass("animate-");
            $('.container_create_storyboard').slideToggle();
        });
        $('.kaart1').onclick(function (doPupUp) {
            var popup = document.getElementById("content");
            popup.classList.toggle("show");
        })
    });

    });

var btn = document.getElementById("modal-btn");

var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");

btn.onclick = function() {
    modal2.style.display = "block";
};
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
};
btn.onclick = function() {
    modal2.style.display = "block";
};
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};