/**** LOCATION SECTION'S EVENT HANDLER, WHERE ACTIVE LINK MANAGEMENT, ON CLICK LISTENERS AND CUSTOM MQ ARE DEFINED ****/

/* ON CLICK HANDLER FOR ACTIVE LINK MANAGEMENT */

// This code will add an event listener to each anchor of the topbar after being dynamically replaced by "interchange"
$("body").on("click", function(event){
	// If the active element is one of the topbar's links continues
	if($(event.target).hasClass("topbarLink")) {
	  // The parent li element of the current active link is stored
	  var activeLink = $(event.target).parent();
	  // Takes each link and checks if its parent li element is active, removing "active" class if so.
	  $("#topNavContent li:not(.divider)").each(function(){
	    // If the li element has nested li's with links they are checked also.
		if($(this).hasClass("has-dropdown")){
		  var dropdownList = $(this).children(".dropdown").children().not(".divider");
		  dropdownList.each(function(){
				if($(this).hasClass("active")){
					$(this).removeClass("active");
				}
		  });
		}
		// The direct li element's "active" class is removed
		if($(this).hasClass("active")){
		  $(this).removeClass("active");
		}
	  });
      // After having all topbar li elements deactivated, "active" class is added to the currently active link's li parent
	  if(!$(activeLink).hasClass("active")){
			$(activeLink).addClass("active");
	  }  
	}
});

/* CUSTOM ENQUIRE MEDIA QUERIES SECTION */

enquire
.register(mq_topbar_logo_break, {
	match : function() {
		if(currentLanguage === "en"){
			if(!$("#topbar_title_area > li.name").hasClass("title_before_logo_eu_en_lang_adj"))
				$("#topbar_title_area > li.name").addClass("title_before_logo_eu_en_lang_adj");

			$("#topbar_title").html("Rural House");
		}
		else if(currentLanguage === "eu"){
			if(!$("#topbar_title_area > li.name").hasClass("title_before_logo_eu_en_lang_adj"))
				$("#topbar_title_area > li.name").addClass("title_before_logo_eu_en_lang_adj");
				
			$("#topbar_title").html("Landa-etxea");
		}
		else if(currentLanguage === "es"){
			if(!$("#logo_img").hasClass("logo_adjust_big_scr_size"))
				$("#logo_img").addClass("logo_adjust_big_scr_size");
				
			$("#topbar_title").html("Casa Rural");
		}
	},
	unmatch : function() {
		$("#topbar_title").html("");
		if($("#logo_img").hasClass("logo_adjust_big_scr_size"))
			$("#logo_img").removeClass("logo_adjust_big_scr_size");
	}
})
.register(mq_small_screen, {
	match : function() {
		// It Overrides the default small h2 size set by foundation
		$("h2").toggleClass("h2_real_small_size");
		// We change the weight of the headers to bold by setting a bold class to the element.
		$("h2, h3").toggleClass("bold");
	},
	unmatch : function() {
		// It Overrides the default small h2 size set by foundation
		$("h2").toggleClass("h2_real_small_size");
		// We change the weight of the headers to normal by removing the bold class of the element
		$("h2, h3").toggleClass("bold");
	}
})
.register(mq_topbar_init, function() {
	var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_full_content = createTopbarMenu(0);
	$("#topNavContent").replaceWith(top_nav_full_content);
	if(currentActiveLinkId != null) {
		$("#"+currentActiveLinkId).parent().addClass("active");
	}
})
.register(mq_topbar_break_1, function() {
  var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_content_break_1 = createTopbarMenu(1);
  $("#topNavContent").replaceWith(top_nav_content_break_1);
  if(currentActiveLinkId != null) {
    $("#"+currentActiveLinkId).parent().addClass("active");
  } 
})
.register(mq_topbar_break_2, function() {
  var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_content_break_2 = createTopbarMenu(2);
  $("#topNavContent").replaceWith(top_nav_content_break_2);
  if(currentActiveLinkId != null) {
    $("#"+currentActiveLinkId).parent().addClass("active");
  }
})
.register(mq_topbar_break_3, function() {
  var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_content_break_3 = createTopbarMenu(3);
  $("#topNavContent").replaceWith(top_nav_content_break_3);
  if(currentActiveLinkId != null) {
    $("#"+currentActiveLinkId).parent().addClass("active");
  } 
})
.register(mq_topbar_break_4, function() {
  var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_full_content = createTopbarMenu(0);
  $("#topNavContent").replaceWith(top_nav_full_content);
  if(currentActiveLinkId != null) {
    $("#"+currentActiveLinkId).parent().addClass("active");
  } 
})
.register(mq_custom_medium_break, {
	// At this breakpoint, the target elements that wrap each room's content is set to 100% width as if it has "small" media query active.
	match : function() {
		customizeLocationImgWrapper();
		$(document).foundation("reflow");
	},
	unmatch : function() {
		customizeLocationImgWrapper();
		$(document).foundation("reflow");
	}
});