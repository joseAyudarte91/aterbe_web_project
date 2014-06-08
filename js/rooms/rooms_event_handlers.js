/****** ON RESIZE HANDLER SECTION ******/

// When resize event is fired a generic function is used to call different functions there
$(window).on("resize", function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(resizeEventsCaller, 100);
});

/****** ON CLICK HANDLERS SECTION ******/

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
	
	else if($(event.target).hasClass("open_rooms_gallery_link")) {
			var img_size = "small/";
			var targetGallery = "../../images/gallery/";
			if(current_img_res_size_code == BIG_RES_CODE)
				img_size = "big/";
			
			// Global variables are set to know then the next image to be loaded
			currentGalleryPath = $(event.target).attr("data-target-partial");
			currentGallerySize = parseInt($(event.target).attr("data-gallery-size"));
			currentGalleryStartIndex = parseInt($(event.target).attr("data-gallery-start-index"));
			currentImg = (currentGalleryPath + "-" + currentGalleryStartIndex + ".jpg");
			
			targetGallery += (img_size + currentImg);
			
			var dynamicImgBlock = "<div id='modal_img_placeholder'><div class='zoomer_wrapper zoomer_custom'><img src='" + targetGallery + "'"; 
			dynamicImgBlock += "alt='" + setZoomerContrLangAndTooltip('tooltip') + "'>";
			dynamicImgBlock += "</div><div class='row' id='zoomer_bt_wrapper'><div class='large-3 columns' id='zoomer_previous_bt_wrapper'><a href='#' title='" + setZoomerContrLangAndTooltip('prev') + "' class='button expand radius zoomer_custom_prev'>";
			dynamicImgBlock += "&lt;&lt;</a></div><div class='large-3 columns' id='zoomer_zoom_in_bt_wrapper'>";
			dynamicImgBlock += "<a href='#' title='" + setZoomerContrLangAndTooltip('zoomIn') + "' class='button expand radius zoomer_custom_zoom_in'>+</a></div><div class='large-3 columns' id='zoomer_zoom_out_bt_wrapper'>";
			dynamicImgBlock += "<a href='#' title='" + setZoomerContrLangAndTooltip('zoomOut') + "' class='button expand radius zoomer_custom_zoom_out'>-</a>";
			dynamicImgBlock += "</div><div class='large-3 columns' id='zoomer_next_bt_wrapper'><a href='#' title='" + setZoomerContrLangAndTooltip('next') + "' class='button expand radius zoomer_custom_next'>&gt;&gt;</a></div></div></div>";
			$("#modal_img_placeholder").replaceWith(dynamicImgBlock);
			// The current viewport height and width are retrieved with preloaded Verge library
			var viewportHeight = $.viewportH();
			var zoomerNewWidth = ($.viewportW() * ZOOMER_DIMENSIONS_ADJUST_WIDTH_COEF) + "px";
			// The zoomer element is resized dynamically with the 100% of the current viewport width and 85 % of the height, letting space enough for the controls
			var zoomerNewHeight = (viewportHeight * ZOOMER_DIMENSIONS_ADJUST_HEIGHT_COEF) + "px";
			
			
			var bodyWidth = $("body").css("width"); 
			var body_width_num = parseFloat(bodyWidth.substring(0, (bodyWidth.length - 2)));
			zoomerNewWidth = body_width_num;
			
			if(body_width_num <= 224)
				zoomerNewWidth -= 48;
			else if((body_width_num > 224) && (body_width_num <= 324))
				zoomerNewWidth -= 53;
			else if((body_width_num > 324) && (body_width_num <= 424))
				zoomerNewWidth -= 58;
			else if((body_width_num > 424) && (body_width_num <= 524))
				zoomerNewWidth -= 63;
			else if((body_width_num > 524) && (body_width_num <= 623))
				zoomerNewWidth -= 68;
			else if((body_width_num > 623) && (body_width_num <= 700))
				zoomerNewWidth -= 95;
			else if((body_width_num > 700) && (body_width_num <= 800))
				zoomerNewWidth -= 100;
			else if((body_width_num > 800) && (body_width_num <= 900))
				zoomerNewWidth -= 105;
			else if((body_width_num > 900) && (body_width_num <= 1000))
				zoomerNewWidth -= 110;
			else if((body_width_num > 1000) && (body_width_num <= 1100))
				zoomerNewWidth -= 115;
			else if((body_width_num > 1100) && (body_width_num <= 1177))
				zoomerNewWidth -= 120;
			else if((body_width_num > 1177) && (body_width_num <= 1230))
				zoomerNewWidth -= 125;
			else if((body_width_num > 1230) && (body_width_num <= 1250))
				zoomerNewWidth -= 132;
			else if((body_width_num > 1250) && (body_width_num <= 1330))
				zoomerNewWidth -= 137;
				
			else {
				var adjustMultiplier = Math.round(((body_width_num - 1330) / 100));
				if(adjustMultiplier < 1)
					zoomerNewWidth -= 137;
				else
					zoomerNewWidth -= (137 + (5 * adjustMultiplier));
			}

			var finalWidth = zoomerNewWidth + "px";
			
			$(".zoomer_wrapper").css("height", zoomerNewHeight);
			$(".zoomer_wrapper").css("width", finalWidth);
			$(".zoomer_custom").zoomer({
				controls : {
					zoomIn: ".zoomer_custom_zoom_in",
					zoomOut: ".zoomer_custom_zoom_out",
					previous: ".zoomer_custom_prev",
					next: ".zoomer_custom_next"
				}
			});
			$("#rooms_and_gallery_modal").foundation('reveal', 'open');
	}
	
	else if($(event.target).hasClass("zoomer_custom_next")) {
		var img_size = "small/";
		if(currentGalleryIndex < (currentGallerySize - 1)){
			currentGalleryIndex++;
			if(current_img_res_size_code == BIG_RES_CODE)
				img_size = "big/";
			
			currentImg = 	(currentGalleryPath + "-" + (currentGalleryStartIndex + currentGalleryIndex) + ".jpg");
			var next_img_to_load = ("../../images/gallery/" + img_size + currentImg);
			$(".zoomer_custom").zoomer("load", next_img_to_load);
		}
	}
	
	else if($(event.target).hasClass("zoomer_custom_prev")) {
		var img_size = "small/";
		if(currentGalleryIndex > 0){
			currentGalleryIndex--;
			if(current_img_res_size_code == BIG_RES_CODE)
				img_size = "big/";
			
			currentImg = 	(currentGalleryPath + "-" + (currentGalleryStartIndex + currentGalleryIndex) + ".jpg");			
			var next_img_to_load = ("../../images/gallery/" + img_size + currentImg);
			$(".zoomer_custom").zoomer("load", next_img_to_load);
		}
	}
	// Checks if there is a tooltip visible window. If so it is closed to prevent it overlays something
	if($(".tooltip").length > 0) {
		//alert("tooltip detected");
		var tooltipElems = $(".tooltip");
		if(tooltipElems.css("display") != "none") {
			tooltipElems.css("display", "none");
		}
	}
});

// When the modal is closed, the gallery index and gallery related variables are reset to 0
$("#rooms_and_gallery_modal").on("close", function() {
	currentGalleryIndex = 0;
	currentGallerySize = 0;
	currentGalleryStartIndex = 0;
});	

/****** CUSTOM ENQUIRE MEDIA QUERIES SECTION ******/

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
		$("h2, h3:not(.gallery_header)").toggleClass("bold");
	},
	unmatch : function() {
		// It Overrides the default small h2 size set by foundation
		$("h2").toggleClass("h2_real_small_size");
		// We change the weight of the headers to normal by removing the bold class of the element
		$("h2, h3:not(.gallery_header)").toggleClass("bold");
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
}, true)
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
.register(mq_display_gallery_break, {
	// At this breakpoint, the target elements that wrap each gallery's content is set to 100% width as if it has "small" media query active.
	match : function() {
		customizeGalleryWrapper();
	},
	unmatch : function() {
		customizeGalleryWrapper();
	}
})
.register(mq_big_img_resolution_break, {
	match : function() {
		current_img_res_size_code = BIG_RES_CODE;
		isImgResCodeChanged = true;
	},
	unmatch : function() {
		current_img_res_size_code = SMALL_RES_CODE;
		isImgResCodeChanged = true;
  } 
});

// This variable is used to know if this script will be loaded at the time of checking it in the JS manager
eventsHandlersLoaded = true;