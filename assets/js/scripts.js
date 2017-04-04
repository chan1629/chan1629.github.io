//Images file name
var photos=[
	"20141123-2014_11_23_6233.jpg",
	"20141227-2014_12_27_6771.jpg",
	"2015_01_17_6961.jpg",
	"2015_09_05_0137.jpg",
	"20160617-IMG_0082.jpg",
	"20160924-IMG_0073.jpg",
	"8P1A8096.jpg",
	"IMG_1079.jpg",
	"IMG_1090.jpg",
	"IMG_1500.jpg",
]

$(document).ready(function(){
	console.log("Bird's Portfolio");

	$(".gallery img").click(function(){

		$(".iframe img").prop("src", $(this).prop("src"));
		$(".iframe").fadeIn();
	});

	$(".iframe").click(function(){
		$(".iframe").fadeOut();
	});

	_(photos)
		.forEach(function(url){
			console.log(url);
			$("<div></div>")
				.addClass("image-container col-md-4")
				.append($("<div></div>")
					.addClass("image")
					.css("background-image", "url('photos/" + url + "')")
				)
				.appendTo("main > .row");
		})
})