//Images file name
var photos = [
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
], photos_web = [
	"2012_11_25_IMG_01015.jpg",
	"2012_11_25_IMG_01027.jpg",
	"2012_11_25_IMG_01065.jpg",
	"2015_01_17_6961.jpg",
	"20160417-IMG_0167.jpg",
	"20160507-IMG_0302.jpg",
	"20160604-IMG_0549.jpg",
	"20160604-IMG_0557.jpg",
	"20160609-IMG_0305_1234.jpg",
	"20160619-IMG_0201.jpg",
	"20160619-IMG_0217.jpg",
	"20160622-IMG_0033.jpg",
	"20160625-IMG_0310.jpg",
	"20160717-IMG_0234-2.jpg",
	"20160717-IMG_0279.jpg",
	"20160717-IMG_0303.jpg",
	"20160723-IMG_0114.jpg",
	"20160724-IMG_0202.jpg",
	"20160725-IMG_0334.jpg",
	"20160924-IMG_0072.jpg",
	"20161023-IMG_0204.jpg",
	"20161201-IMG_0030.jpg",
	"20161211-IMG_0083.jpg",
	"20170101-IMG_3047.jpg",
	"20170130-IMG_0149.jpg",
	"20170204-20170204-IMG_0123.jpg",
	"4564_1TS.jpg",
	"IMG_0129.jpg",
	"IMG_0193.jpg",
	"IMG_0306.jpg"
]

function openImageViewer(){

	$(".iframe img").prop("src", $(this).prop("src"));
	$(".iframe").fadeIn();
}

function imageReady(url, i){

	$(".image-container.p" + i)
		.append($("<img/>")
			.addClass("image")
			.prop("src", url)
			.click(openImageViewer)
		)
		.children(".waiting")
		.animate({ opacity: "0" }, 6000);
}

function createImageDOM(photos, appendMethod){
	var downloadingImageAry = [];
	_(photos_web)
		.forEach(function(url, i){
			var img = new Image();
			downloadingImageAry.push(img);
			img.onload = function(){
			    imageReady(this.src, i);   
			};

			img.src = "photos/web/" + url;

			appendMethod(i);
		});
}

function getCurrentURL() {
	var page_reg_res = document.URL.match(/[?]([^./]*)/);
	return page_reg_res && page_reg_res[1] || "index";
}


$(document).ready(function(){
	console.log("Bird's Portfolio");

	$("#" + getCurrentURL()).addClass("active");


	// Header
	$(".nav").click(function(){
		$("main").removeClass("active");
		$("#" + $(this).data("href")).addClass("active");
	});

	// Gallery Page
	function append_dom_loop_in_gallery(index) {
		$("<div></div>")
			.addClass("image-container col-md-4 p" + index)
			.append($("<div/>")
				.addClass("waiting")
			)
			.appendTo("main#gallery > .row");
	}


	createImageDOM(photos, append_dom_loop_in_gallery);

	$(".iframe").click(function(){
		$(".iframe").fadeOut();
	});

	// Index Page
	_.forEach(photos, function(url, i){
		$("<div></div>")
			.addClass("swiper-slide")
			.css("background-image", "url(photos/" + url + ")")
			.appendTo(".swiper-wrapper");
		
	});

	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade'
    });
})