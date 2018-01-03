// business.html
var circle = document.getElementsByClassName('clicke1');

var ite = 0;
var circ = null;

function changecolor() {
	if ($(window).width() < 1116) {
		circ = circle[1];
	} else {
		circ = circle[0];
	}

	if (ite == 0) {
		circ.style.opacity = 0.3;
		circ.style.height = "85px";
		circ.style.width = "85px";
		circ.style.marginLeft = "-5px";
		ite++;
	} else {
		circ.style.opacity = 1;
		circ.style.height = "70px";
		circ.style.width = "70px";
		circ.style.marginLeft = "0px";
		ite = 0;
	}
};

var help = window.setInterval(changecolor,1200);

//general hover
var caption_hover = {
	"transform": "translateY(0)",
	"opacity": "1"
}

// leangap hover
var style_hover_1 = {
	"background-color": "#472C45",
	"box-shadow": "0 0 0 20px #1b2835"
};

$(document).ready(function(){
	$(".style1").on('mouseenter click', function() {
		$(".style1 img").css("transform", "translateY(-110px)"),
		$(".style1 .business-cap").css(caption_hover),
		$(".style1").css(style_hover_1),
		clearInterval(help),
		$(".clicke1").css('opacity', '0');
	});
});

// deca hover 
var style_hover_2 = {
	"background-color": "#dbb3ff",
	"box-shadow": "0 0 0 20px #0c539b"
};

$(document).ready(function(){
	$(".style2").on('mouseenter click', function() {
		$(".style2 img").css("transform", "translateY(-100px)"),
		$(".style2 .business-cap").css(caption_hover),
		$(".style2").css(style_hover_2);
	});
});

// FBLA hover 
var style_hover_3 = {
	"background-color": "#8c0333",
	"box-shadow": "0 0 0 20px #e61060"
};

$(document).ready(function(){
	$(".style3").on('mouseenter click', function() {
		$(".style3 img").css("transform", "translateY(-100px)"),
		$(".style3 .business-cap").css(caption_hover),
		$(".style3").css(style_hover_3);
	});
});

// CTA hover
var style_hover_4 = {
	"background-color": "#e2cdad",
	"box-shadow": "0 0 0 20px #f6921e"
};

$(document).ready(function(){
	$(".style4").on('mouseenter click', function() {
		$(".style4 img").css("transform", "translateY(-120px)"),
		$(".style4 .bottom-cap").css(caption_hover),
		$(".style4").css(style_hover_4);
	});
});

// E3 hover 
var style_hover_5 = {
	"background-color": "#9e7c89",
	"box-shadow": "0 0 0 20px #754f5c"
};

$(document).ready(function(){
	$(".style5").on('mouseenter click', function() {
		$(".style5 img").css("transform", "translateY(-120px)"),
		$(".style5 .bottom-cap").css(caption_hover),
		$(".style5").css(style_hover_5);
	});
});

// P5k hover
var style_hover_6 = {
	"background-color": "#2b2142",
	"box-shadow": "0 0 0 20px #3884c5"
};

$(document).ready(function(){
	$(".style6").on('mouseenter click', function() {
		$(".style6 img").css("transform", "translateY(-120px)"),
		$(".style6 .bottom-cap").css(caption_hover),
		$(".style6").css(style_hover_6);
	});
});

// code
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

$(document).ready(function(){
	$(".project1 .view-cont").hover(function() {
		$("#cta-pic").css("opacity", "0.4"),
		$("#cta-view").css("opacity", "1");
	},
	function(){
		$("#cta-pic").css("opacity", "1"),
		$("#cta-view").css("opacity", "0");
	});
});

$(document).ready(function(){
	$(".project2 .view-cont").hover(function() {
		$("#weather-pic").css("opacity", "0.4"),
		$("#weather-view").css("opacity", "1");
	},
	function(){
		$("#weather-pic").css("opacity", "1"),
		$("#weather-view").css("opacity", "0");
	});
});

$(document).ready(function(){
	$(".project3 .view-cont").hover(function() {
		$("#java-pic").css("opacity", "0.4"),
		$("#game-view").css("opacity", "1");
	},
	function(){
		$("#java-pic").css("opacity", "1"),
		$("#game-view").css("opacity", "0");
	});
});

