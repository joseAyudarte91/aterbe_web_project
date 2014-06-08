/**** INDEX SECTION'S EVENT HANDLER, WHERE ACTIVE LINK MANAGEMENT, ON CLICK LISTENERS AND CUSTOM MQ ARE DEFINED ****/

/* RESOURCE LOADING MANAGEMENT */
var isBigScrStuffPreloaded;
var jQueryUILoaded;
var jQueryMobileLoaded;
var indexL_screenFuncsLoaded;
var lightboxLoaded;
var cloudCarouselLoaded;
var carouselSettingsOpt;
var currentFontSizeAsNumGlobal;

var setCloudCarousel = function() {
	var xCenter;
	if(carouselSettingsOpt === "break1_medium"){
		// We calculate the appropriate x centered position for the carousel, depending on the current font-size and active media query
		xCenter = (Math.round(currentFontSizeAsNumGlobal * BREAKPOINT_1_MULTIPLIER))/2;
		var cloudCarousel = createCloudCarousel("small");
		$("#header_placeholder").replaceWith(cloudCarousel);
		$("#carousel_wrapper").css("width", HEADER_BREAKPOINT_1);
		$("#cloud_carousel").css("width", HEADER_BREAKPOINT_1);
		carousel_initializer(xCenter);
	}
	else if(carouselSettingsOpt === "break2_small"){
		 // We calculate the appropriate x centered position for the carousel, depending on the current font-size and active media query
		xCenter = (Math.round(currentFontSizeAsNumGlobal * BREAKPOINT_2_MULTIPLIER))/2;
		var cloudCarousel = createCloudCarousel("small");
		$("#header_placeholder").replaceWith(cloudCarousel);
		$("#carousel_wrapper").css("width", HEADER_BREAKPOINT_2);
		$("#cloud_carousel").css("width", HEADER_BREAKPOINT_2);
		carousel_initializer(xCenter);
	}
	else if(carouselSettingsOpt === "break2_medium"){
		// We calculate the appropriate x centered position for the carousel, depending on the current font-size and active media query
		xCenter = (Math.round(currentFontSizeAsNumGlobal * BREAKPOINT_2_MULTIPLIER))/2;
		var cloudCarousel = createCloudCarousel("medium");
		$("#header_placeholder").replaceWith(cloudCarousel);
		$("#carousel_wrapper").css("width", HEADER_BREAKPOINT_2);
		$("#cloud_carousel").css("width", HEADER_BREAKPOINT_2);
		carousel_initializer(xCenter); 
	}
	else if(carouselSettingsOpt === "break3_small"){
		// We calculate the appropriate x centered position for the carousel, depending on the current font-size and active media query
		xCenter = (Math.round(currentFontSizeAsNumGlobal * BREAKPOINT_3_MULTIPLIER))/2;
		var cloudCarousel = createCloudCarousel("small");
		$("#header_placeholder").replaceWith(cloudCarousel);
		$("#carousel_wrapper").css("width", HEADER_BREAKPOINT_3);
		$("#cloud_carousel").css("width", HEADER_BREAKPOINT_3);
		carousel_initializer(xCenter);
	}
	else if(carouselSettingsOpt === "break3_medium"){
		// We calculate the appropriate x centered position for the carousel, depending on the current font-size and active media query
		xCenter = (Math.round(currentFontSizeAsNumGlobal * BREAKPOINT_3_MULTIPLIER))/2;
		var cloudCarousel = createCloudCarousel("medium");
		$("#header_placeholder").replaceWith(cloudCarousel);
		$("#carousel_wrapper").css("width", HEADER_BREAKPOINT_3);
		$("#cloud_carousel").css("width", HEADER_BREAKPOINT_3);
		carousel_initializer(xCenter);
	}
	else{
		// We calculate the appropriate x centered position for the carousel, depending on the current font-size and active media query
		xCenter = (Math.round(currentFontSizeAsNumGlobal * BREAKPOINT_3_MULTIPLIER))/2;
		var cloudCarousel = createCloudCarousel("big");
		$("#header_placeholder").replaceWith(cloudCarousel);
		$("#carousel_wrapper").css("width", HEADER_BREAKPOINT_3);
		$("#cloud_carousel").css("width", HEADER_BREAKPOINT_3);
		carousel_initializer(xCenter);
	}
};

var evalMQTask = function() {
	if((typeof lightboxLoaded !== "undefined") && (typeof indexL_screenFuncsLoaded !== "undefined"))
		setCloudCarousel();
	else
		setTimeout(evalMQTask, CHECKING_TIME);
};

var loadVarsAndFuncs = function() {
	if(typeof cloudCarouselLoaded !== "undefined")
		$.getScript("../../js/index/index_large_screen_custFuncs.js", evalMQTask, true, true);
	else
		setTimeout(loadVarsAndFuncs, CHECKING_TIME);
};

var cloudCarouselLoader = function() {
	if((typeof jQueryUILoaded !== "undefined") && (typeof jQueryMobileLoaded !== "undefined"))
		$.getScript("../../js/index/cloud-carousel.1.0.5.js", loadVarsAndFuncs, true, true);
	else
		setTimeout(cloudCarouselLoader, CHECKING_TIME);
};

var checkBigScreenComponents = function() {
	if(typeof isBigScrStuffPreloaded === "undefined"){
		isBigScrStuffPreloaded = true;
		if(typeof jQueryUILoaded === "undefined")
			$.getScript("../../js/commons/jquery-ui-1.10.4.custom.min.js", cloudCarouselLoader, true, true);
		if(typeof jQueryMobileLoaded === "undefined")	
			$.getScript("../../js/commons/jquery.mobile.custom.min.js", function(){ }, true, true);
		if(typeof lightboxLoaded === "undefined")
			$.getScript("../../external_components/lightbox/js/lightbox-2.6.min.js", function(){ }, true, true);
		return true;
	}
	else
		return false;
};

/* ACTIVE CURRENT LINK HANDLER */
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

/* ON CLICK LISTENER */
$("#header_parent_placeholder").on("click", function (event) {
  // Fix a bug in cloud_carousel (when canvas reflections are cliked all the images disappear)
  if($(event.target).hasClass("reflection")) {
		event.preventDefault();
		event.stopImmediatePropagation();
    //We retrieve the font-size of the html because we know that carousel wrapper has inherited that value.
    var currentFontSize = $("html").css("font-size");
    //We need the font size as a number to be multiplied
    var currentFontSizeAsNumber = parseInt(currentFontSize.substring(0, currentFontSize.length-2));
		// We get the current wrappers width to reset after the replaceWith statement
		var currentWrapperSize = parseInt($("#carousel_wrapper").css("width").substring(0, $("#carousel_wrapper").css("width").length-2));
		// We calculate the appropriate x centered position for the carousel, depending on the current font-size..etc.
		var xCenter = (Math.round(currentWrapperSize/2));
		// If the current font size is too small or the screen width is too small, we load the smallest carousel
		if(currentFontSizeAsNumber == 12 || currentWrapperSize == (BREAKPOINT_1_MULTIPLIER * currentFontSizeAsNumber)) {
			var cloudCarousel = createCloudCarousel("small");
			$("#header_placeholder").replaceWith(cloudCarousel);
		}
		// If the current font size is still small or the screen width is medium size, we load the medium carousel
		else if(currentFontSizeAsNumber == 13 || currentWrapperSize == (BREAKPOINT_2_MULTIPLIER * currentFontSizeAsNumber)) {
			var cloudCarousel = createCloudCarousel("medium");
			$("#header_placeholder").replaceWith(cloudCarousel);
		}
		// If the current font size is big enough or the screen width is big too, we load the biggest carousel
		else if(currentFontSizeAsNumber > 13 || currentWrapperSize == (BREAKPOINT_3_MULTIPLIER * currentFontSizeAsNumber)){
			var cloudCarousel = createCloudCarousel("big");
			$("#header_placeholder").replaceWith(cloudCarousel);
		}
		$("#carousel_wrapper").css("width", currentWrapperSize);
		$("#cloud_carousel").css("width", currentWrapperSize);
		carousel_initializer(xCenter);
		$(document).foundation("reflow");
  }
});

/* INDEX SECTION'S CUSTOM MEDIA QUERIES, USED FOR BOTH SMALL AND LARGE SCREEN DEVICES */

//call to the enquire media queries for topbar menu and the dynamic header
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
.register(mq_topbar_init, function() {
  var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_full_content = createTopbarMenu(0);
  $("#topNavContent").replaceWith(top_nav_full_content);
  if(currentActiveLinkId != null)
    $("#"+currentActiveLinkId).parent().addClass("active");

	$(document).foundation("reflow");
	resizeTrigger();
})
.register(mq_topbar_break_1, function() {
  var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_content_break_1 = createTopbarMenu(1);
  $("#topNavContent").replaceWith(top_nav_content_break_1);
  if(currentActiveLinkId != null)
    $("#"+currentActiveLinkId).parent().addClass("active");

	$(document).foundation("reflow");	
	resizeTrigger();
})
.register(mq_topbar_break_2, function() {
  var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_content_break_2 = createTopbarMenu(2);
  $("#topNavContent").replaceWith(top_nav_content_break_2);
  if(currentActiveLinkId != null)
    $("#"+currentActiveLinkId).parent().addClass("active");
		
	$(document).foundation("reflow");
	resizeTrigger();
})
.register(mq_topbar_break_3, function() {
  var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_content_break_3 = createTopbarMenu(3);
  $("#topNavContent").replaceWith(top_nav_content_break_3);
  if(currentActiveLinkId != null)
    $("#"+currentActiveLinkId).parent().addClass("active");
		
	$(document).foundation("reflow");
	resizeTrigger();
})
.register(mq_topbar_break_4, function() {
  var currentActiveLinkId = $("li.active > a.topbarLink").attr("id");
	var top_nav_full_content = createTopbarMenu(0);
  $("#topNavContent").replaceWith(top_nav_full_content);
  if(currentActiveLinkId != null)
    $("#"+currentActiveLinkId).parent().addClass("active");
		
	$(document).foundation("reflow");
	resizeTrigger();
})
.register(mq_header_init, function() {
	var header_content_init = createOrbitHeader();
  $("#header_placeholder").replaceWith(header_content_init);
  $(document).foundation("reflow");
	resizeTrigger();
})
.register(mq_header_break_1, function() {
  //We retrieve the font-size of the html because we know that carousel wrapper has inherited that value.
  var currentFontSize = $("html").css("font-size");
  //We need the font size as a number to be multiplied
  var currentFontSizeAsNumber = parseInt(currentFontSize.substring(0, currentFontSize.length-2));
  // If the font size is too small we load the orbit slider with mobile version directly
  if(currentFontSizeAsNumber < 12){
		var header_content_init = createOrbitHeader();
    $("#header_placeholder").replaceWith(header_content_init);
	}
  // Otherwise, we load the smallest carousel
  else{
		currentFontSizeAsNumGlobal = currentFontSizeAsNumber;
		carouselSettingsOpt = "break1_medium";
		if(checkBigScreenComponents() === false)
			setCloudCarousel();
  }
	$(document).foundation("reflow");
	resizeTrigger();
})
.register(mq_header_break_2, function() {
  //We retrieve the font-size of the html because we know that carousel wrapper has inherited that value.
  var currentFontSize = $("html").css("font-size");
  //We need the font size as a number to be multiplied
  var currentFontSizeAsNumber = parseInt(currentFontSize.substring(0, currentFontSize.length-2));
  
  // If the font size is too small we load the orbit slider with mobile version directly
  if(currentFontSizeAsNumber < 12){
		var header_content_init = createOrbitHeader();
    $("#header_placeholder").replaceWith(header_content_init);
	}
  // If the font size is still too small we load the smallest carousel
  else if(currentFontSizeAsNumber == 12) {
		currentFontSizeAsNumGlobal = currentFontSizeAsNumber;
		carouselSettingsOpt = "break2_small";
		if(checkBigScreenComponents() === false)
			setCloudCarousel();
  }
  // Otherwise, we load the medium size carousel
  else{
		currentFontSizeAsNumGlobal = currentFontSizeAsNumber;
		carouselSettingsOpt = "break2_medium";
		if(checkBigScreenComponents() === false)
			setCloudCarousel();
  }
	$(document).foundation("reflow");
	resizeTrigger();
})
.register(mq_header_break_3, function() {
  //We retrieve the font-size of the html because we know that carousel wrapper has inherited that value.
  var currentFontSize = $("html").css("font-size");
  //We need the font size as a number to be multiplied
  var currentFontSizeAsNumber = parseInt(currentFontSize.substring(0, currentFontSize.length-2));
  
  // If the font size is too small we load the orbit slider with mobile version directly
  if(currentFontSizeAsNumber < 12){
		var header_content_init = createOrbitHeader();
    $("#header_placeholder").replaceWith(header_content_init);
	}
  // If the font size is still too small we load the smallest carousel
  else if(currentFontSizeAsNumber == 12) {
		currentFontSizeAsNumGlobal = currentFontSizeAsNumber;
		carouselSettingsOpt = "break3_small";
		if(checkBigScreenComponents() === false)
			setCloudCarousel();
  }
  // If the font size is slightly larger we load the medium carousel
  else if(currentFontSizeAsNumber == 13) {
		currentFontSizeAsNumGlobal = currentFontSizeAsNumber;
		carouselSettingsOpt = "break3_medium";
		if(checkBigScreenComponents() === false)
			setCloudCarousel();
  }
  // Otherwise, we load the smallest carousel
  else{
		currentFontSizeAsNumGlobal = currentFontSizeAsNumber;
		carouselSettingsOpt = "break3_big";
		if(checkBigScreenComponents() === false)
			setCloudCarousel();
  }
	$(document).foundation("reflow");
	resizeTrigger();
})
.register(mq_welcome_title_present, {
    match : function() {
			changeIndexHeadersFromSmallToBig();
			// Change the alignement to the right
			$("#index_offers_h3_content").css("text-align", "right");
    },
    unmatch : function() {
			changeIndexHeadersFromBigToSmall();
			// Change the alignement to the default again: left
			$("#small_offers_index_header").css("text-align", "left");
    } 
})
.register(mq_small_only, {
    match : function() {
      // We change the weight of the headers to bold by setting a bold class to the element
      $("h2, h3, h4, h5").toggleClass("bold");
    },
    unmatch : function() {
      // We change the weight of the headers to bold by removing a bold class to the element
      $("h2, h3, h4, h5").toggleClass("bold");
    } 
});