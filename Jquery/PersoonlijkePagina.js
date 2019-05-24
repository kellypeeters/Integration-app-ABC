$(".image-box").click(function(event) {
	var previewImg = $(this).children("img");

	$(this)
		.siblings()
		.children("input")
		.trigger("click");

	$(this)
		.siblings()
		.children("input")
		.change(function() {
			var reader = new FileReader();

			reader.onload = function(e) {
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

    function next(e){
        e.preventDefault();
        var getNaam = localStorage.getItem('Naam');
        var getEmail = localStorage.getItem('E-mail');
        var setTitel = document.getElementById("input_titel");
        var setDeadline = document.getElementById("input_deadline");
         
        setTitel.innerHTML = getNaam.value;
        setDeadline.innerHTML = getEmail.value;
    }  