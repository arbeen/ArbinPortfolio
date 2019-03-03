$(document).ready(function(){
	$("#qualifications-content").hide();
	$("#education-content").hide();
	$("#interest-content").hide();
	$("#contact-content").hide();

	$("#navHeader").click(function(){
		$("#qualifications-content").hide();	
		$("#education-content").hide();
		$("#interest-content").hide();
		$("#contact-content").hide();

		$("#home-content").fadeIn();	
	});

	$("#qualifications").click(function(){
		$("#home-content").hide();	
		$("#education-content").hide();
		$("#interest-content").hide();
		$("#contact-content").hide();

		$("#qualifications-content").fadeIn();	
	});

	$("#education").click(function(){
		$("#home-content").hide();	
		$("#qualifications-content").hide();
		$("#interest-content").hide();
		$("#contact-content").hide();
		
		$("#education-content").fadeIn();	
	});

	$("#interest").click(function(){
		$("#home-content").hide();	
		$("#education-content").hide();
		$("#qualifications-content").hide();
		$("#contact-content").hide();

		$("#interest-content").fadeIn();	
	});

	$("#contact").click(function(){
		$("#home-content").hide();	
		$("#qualifications-content").hide();
		$("#interest-content").hide();
		$("#education-content").hide();
		
		$("#contact-content").fadeIn();	
	});

});