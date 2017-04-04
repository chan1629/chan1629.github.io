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

function openImageViewer(){

	$(".iframe img").prop("src", $(this).prop("src"));
	$(".iframe").fadeIn();
}

function imageReady(url, i){

	$(".image-container.p" + i)
		.append($("<img/>")
			.addClass("image csshide")
			.prop("src", url)
			.click(openImageViewer)
		)

	$(".image-container.p" + i)
		.children(".waiting")
		.fadeOut(function(){

			$(this).remove();
		})

	$(".image-container.p" + i)
		.children("img")
		.fadeIn();
}


$(document).ready(function(){
	console.log("Bird's Portfolio");
	var downloadingImageAry = [];

	_(photos)
		.forEach(function(url, i){

			downloadingImageAry.push(new Image());
			_.last(downloadingImageAry).onload = function(){
			    imageReady(this.src, i);   
			};

			_.last(downloadingImageAry).src = "photos/" + url;

			$("<div></div>")
				.addClass("image-container col-md-4 p" + i)
				.append($("<div/>")
					.addClass("waiting")
				)
				.appendTo("main > .row");
		});

	$(".iframe").click(function(){
		$(".iframe").fadeOut();
	});
})