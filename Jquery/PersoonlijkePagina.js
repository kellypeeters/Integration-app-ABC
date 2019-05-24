$(".image-box").click(function (event) {
    var previewImg = $(this).children("img");

    $(this)
        .siblings()
        .children("input")
        .trigger("click");

    $(this)
        .siblings()
        .children("input")
        .change(function () {
            var reader = new FileReader();

            reader.onload = function (e) {
                var urll = e.target.result;
                $(previewImg).attr("src", urll);
                previewImg.parent().css("background", "transparent");
                previewImg.show();
                previewImg.siblings("p").hide();
            };
            reader.readAsDataURL(this.files[0]);
        });
});

//Overgenomen van Codepen.io   
next();

function next() {
    document.getElementById("Voornaam").value = localStorage.getItem('Naam');
    document.getElementById("Email").value = localStorage.getItem('E-mail');
    document.getElementById("Wachtwoord").value = localStorage.getItem('Wachtwoord');
}; 