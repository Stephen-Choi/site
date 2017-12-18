// index.html

// changing description using typeit.js

$('.dash').typeIt({
	 speed: 125,
	 deleteSpeed: 125,
	 breakLines: false,
	 autoStart: false,
})
.tiType('Developer')
.tiPause(2000)
.tiDelete(9)
.tiPause(400)
.tiType('Entrepreneur')
.tiPause(2000)
.tiDelete(12)
.tiPause(400)
.tiType('Student')
.tiPause(2000)
.tiDelete(7)
.tiPause(400)
.tiType('Hacker')
.tiPause(2000)
.tiDelete(6)
.tiPause(400)
.tiType('Developer')


// code.html
// $(document).ready(function(){
// 	$('#cta-pic').hover(function(){
// 		$('#cta-pic').css("opacity", "0.4");
// 	},
// 	function(){
// 		$('#cta-pic').css("opacity", "1");
// 	});
// });

$(document).ready(function(){
	// array with image urls 
	var dataArray=new Array();
 	dataArray[0]="images/zoro.png";
 	dataArray[1]="images/games.png";
 	dataArray[2]="images/flappyclone.png";
 	var thisId = 0;

	$("#java-pic").click(function(){
		$("#java-pic").fadeOut(650, function() {
	        $("#java-pic").attr("src", dataArray[thisId]);
	    }).fadeIn(650);
		thisId++;
		if(thisId == 3) thisId = 0;
	});
});


// business.html

//general hover
var caption_hover = {
	"transform": "translateY(0)",
	"opacity": "1"
};

// leangap hover
var style_hover_1 = {
	"background-color": "#472C45",
	"box-shadow": "0 0 0 20px #1b2835"
}
$(document).ready(function(){
	$(".style1").hover(function() {
		$(".style1 img").css("transform", "translateY(-110px)"),
		$(".style1 .business-cap").css(caption_hover);
		$(".style1").css(style_hover_1)
	});
});

// deca hover 
var style_hover_2 = {
	"background-color": "#dbb3ff",
	"box-shadow": "0 0 0 20px #0c539b"
}

$(document).ready(function(){
	$(".style2").hover(function() {
		$(".style2 img").css("transform", "translateY(-100px)"),
		$(".style2 .business-cap").css(caption_hover);
		$(".style2").css(style_hover_2)
	});
});

// FBLA hover 
var style_hover_3 = {
	"background-color": "#8e1642",
	"box-shadow": "0 0 0 20px #e61060"
}

$(document).ready(function(){
	$(".style3").hover(function() {
		$(".style3 img").css("transform", "translateY(-100px)"),
		$(".style3 .business-cap").css(caption_hover);
		$(".style3").css(style_hover_3)
	});
});

// CTA hover
var style_hover_4 = {
	"background-color": "#e2cdad",
	"box-shadow": "0 0 0 20px #f6921e"
}

$(document).ready(function(){
	$(".style4").hover(function() {
		$(".style4 img").css("transform", "translateY(-120px)"),
		$(".style4 .bottom-cap").css(caption_hover),
		$(".style4").css(style_hover_4)
	});
});

// E3 hover 
var style_hover_5 = {
	"background-color": "#9e7c89",
	"box-shadow": "0 0 0 20px #754f5c"
}

$(document).ready(function(){
	$(".style5").hover(function() {
		$(".style5 img").css("transform", "translateY(-120px)"),
		$(".style5 .bottom-cap").css(caption_hover),
		$(".style5").css(style_hover_5)
	});
});

// P5k hover
var style_hover_6 = {
	"background-color": "#2b2142",
	"box-shadow": "0 0 0 20px #3884c5"
}

$(document).ready(function(){
	$(".style6").hover(function() {
		$(".style6 img").css("transform", "translateY(-120px)"),
		$(".style6 .bottom-cap").css(caption_hover),
		$(".style6").css(style_hover_6)
	});
});







// contact section
// makes it slower but requires color plugin $(".img-div-mail").animate({'background-color': 'black'}, 'slow'),
$(document).ready(function(){
	$(".img-div-github").hover(function(){
		$(".img-div-mail").css("background-color", "black"),
		$(".img-div-linkedin").css("background-color", "black"),
		$(".img-div-resume").css("background-color", "black");
	},
	function(){
		$(".img-div-mail").css("background-color", "#C4C4C4"),
		$(".img-div-linkedin").css("background-color", "#C4C4C4"),
		$(".img-div-resume").css("background-color", "#C4C4C4");
	});
});

$(document).ready(function(){
	$(".img-div-mail").hover(function(){
		$(".img-div-github").css("background-color", "black"),
		$(".img-div-linkedin").css("background-color", "black"),
		$(".img-div-resume").css("background-color", "black");
	},
	function(){
		$(".img-div-github").css("background-color", "#C4C4C4"),
		$(".img-div-linkedin").css("background-color", "#C4C4C4"),
		$(".img-div-resume").css("background-color", "#C4C4C4");
	});
});

$(document).ready(function(){
	$(".img-div-linkedin").hover(function(){
		$(".img-div-github").css("background-color", "black"),
		$(".img-div-mail").css("background-color", "black"),
		$(".img-div-resume").css("background-color", "black");
	},
	function(){
		$(".img-div-mail").css("background-color", "#C4C4C4"),
		$(".img-div-github").css("background-color", "#C4C4C4"),
		$(".img-div-resume").css("background-color", "#C4C4C4");
	});
});

$(document).ready(function(){
	$(".img-div-resume").hover(function(){
		$(".img-div-github").css("background-color", "black"),
		$(".img-div-mail").css("background-color", "black"),
		$(".img-div-linkedin").css("background-color", "black");
	},
	function(){
		$(".img-div-mail").css("background-color", "#C4C4C4"),
		$(".img-div-github").css("background-color", "#C4C4C4"),
		$(".img-div-linkedin").css("background-color", "#C4C4C4");
	});
});

