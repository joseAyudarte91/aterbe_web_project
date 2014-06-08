/****** ROOMS SECTION'S GLOBAL VARIABLES AND CUSTOM FUNCTIONS*******/

/* GLOBAL VARIABLES */

// variable to store the current language of the page
var currentLanguage;

// The variables that will be used as a timer for window resize with zoomer and table height balancer
var zoomerResizeTimer;
var resizeTimer;

var ZOOMER_DIMENSIONS_ADJUST_HEIGHT_COEF = 0.85;
var ZOOMER_DIMENSIONS_ADJUST_WIDTH_COEF = 0.9;

// Breakpoint for small screens (it is the same mq of foundation's
var SMALL_SCREEN_BREAKPOINT = "40em";

// Breakpoint for the smallest screen size
var TOPBAR_LOGO_BREAK = "25em";

// Breakpoints for the topbar menu
var TOPBAR_BREAKPOINT_1 = "46.3em";
var TOPBAR_BREAKPOINT_2 = "52.3em";
var TOPBAR_BREAKPOINT_3 = "58.3em";
var TOPBAR_BREAKPOINT_4 = "64.3em";

// General sufix and prefix to create topbar ul and li elements
var ul_topbar_prefix = "<ul class='right' id='topNavContent'>";
var li_topbar_prefix = "<li class='divider'></li><li><a class='topbarLink' ";
var li_topbar_sufix = "</a></li>";
var ul_topbar_sufix = "</ul>";
var li_dropdown = "<li class='divider'></li><li class='has-dropdown not-click'><a class='menu-icon topbarLink' id='more-opts-icon' href='#'><span></span></a><ul class='dropdown'>";

// Breakpoint for the gallery display appearence
var GALLERY_DISPLAY_BREAKPOINT = "45.625em";

// Needed variables to know which images should be loaded next
var currentGalleryIndex = 0;
var currentGallerySize = 0;
var currentGalleryStartIndex = 0;

// A variable to know which room's pictures is being shown
var currentImg = "";

// These variables are used to know when the image resolution breakpoint has been matched and unmatched by the media query
var SMALL_RES_CODE = 0;
var BIG_RES_CODE = 1;
var current_img_res_size_code = SMALL_RES_CODE;
var isImgResCodeChanged = false;

// No complex operations are allowed to define a media feature, so we must merge all the variables to create the one we should use.
var mq_topbar_logo_break = "only screen and (min-width: "+TOPBAR_LOGO_BREAK+")";
var mq_small_screen = "only screen and (max-width: "+SMALL_SCREEN_BREAKPOINT+")";
var mq_topbar_init = "only screen and (max-width: "+TOPBAR_BREAKPOINT_1+")";
var mq_topbar_break_1 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_1+") and (max-width: "+TOPBAR_BREAKPOINT_2+")";
var mq_topbar_break_2 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_2+") and (max-width: "+TOPBAR_BREAKPOINT_3+")";
var mq_topbar_break_3 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_3+") and (max-width: "+TOPBAR_BREAKPOINT_4+")";
var mq_topbar_break_4 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_4+")";
var mq_display_gallery_break = "only screen and (max-width: "+GALLERY_DISPLAY_BREAKPOINT+")";
var mq_big_img_resolution_break = "only screen and (min-width: "+TOPBAR_BREAKPOINT_3+")";

/* NAMED CUSTOM FUNCTIONS */

// Set current language function definition and followed execution
setCurrentLanguage = function() {
	if(typeof currentLanguage === "undefined"){
		var htmlElement = document.querySelector("html");
		currentLanguage = $(htmlElement).attr("lang");
	}
};
setCurrentLanguage();

// Topbar menu creator
var createTopbarMenu = function(breakpointNum) {
	// The topbar content is stored in a variable to be returned at the end of the function. It is initialized with the ul prefix and first li element's prefix.
	var topbarContent = ul_topbar_prefix + li_topbar_prefix; 
	
	// Each topbar link's language dependent information is retrieved in order to keep topbar content in the same language
	var indexLinkHref = $("#indexLink").attr("href");
	var indexLinkTitle = $("#indexLink").attr("title");
	var indexLinkContent = $("#indexLink").html();
	
	var roomsLinkHref = $("#roomsLink").attr("href");
	var roomsLinkTitle = $("#roomsLink").attr("title");
	var roomsLinkContent = $("#roomsLink").html();
	
	var galleryLinkHref = $("#galleryLink").attr("href");
	var galleryLinkTitle = $("#galleryLink").attr("title");
	var galleryLinkContent = $("#galleryLink").html();
	
	var servicesLinkHref = $("#servicesLink").attr("href");
	var servicesLinkTitle = $("#servicesLink").attr("title");
	var servicesLinkContent = $("#servicesLink").html();
	
	var locationLinkHref = $("#locationLink").attr("href");
	var locationLinkTitle = $("#locationLink").attr("title");
	var locationLinkContent = $("#locationLink").html();
	
	var find_usLinkHref = $("#find_usLink").attr("href");
	var find_usLinkTitle = $("#find_usLink").attr("title");
	var find_usLinkContent = $("#find_usLink").html();
	
	var contactLinkHref = $("#contactLink").attr("href");
	var contactLinkTitle = $("#contactLink").attr("title");
	var contactLinkContent = $("#contactLink").html();
	
	// Use retrieved information to create each topbar link
	switch(breakpointNum){
		case 0: topbarContent += "id='indexLink' href='" + indexLinkHref + "' title='" + indexLinkTitle + "'>" + indexLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='roomsLink' href='" + roomsLinkHref + "' title='" + roomsLinkTitle + "'>" + roomsLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='galleryLink' href='" + galleryLinkHref + "' title='" + galleryLinkTitle + "'>" + galleryLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='servicesLink' href='" + servicesLinkHref + "' title='" + servicesLinkTitle + "'>" + servicesLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='locationLink' href='" + locationLinkHref + "' title='" + locationLinkTitle + "'>" + locationLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='find_usLink' href='" + find_usLinkHref + "' title='" + find_usLinkTitle + "'>" + find_usLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='contactLink' href='" + contactLinkHref + "' title='" + contactLinkTitle + "'>" + contactLinkContent + li_topbar_sufix;
						topbarContent += ul_topbar_sufix;
						break;
		
		case 1: topbarContent += "id='indexLink' href='" + indexLinkHref + "' title='" + indexLinkTitle + "'>" + indexLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='roomsLink' href='" + roomsLinkHref + "' title='" + roomsLinkTitle + "'>" + roomsLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='galleryLink' href='" + galleryLinkHref + "' title='" + galleryLinkTitle + "'>" + galleryLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='servicesLink' href='" + servicesLinkHref + "' title='" + servicesLinkTitle + "'>" + servicesLinkContent + li_topbar_sufix;
						topbarContent += li_dropdown;
						topbarContent += li_topbar_prefix + "id='locationLink' href='" + locationLinkHref + "' title='" + locationLinkTitle + "'>" + locationLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='find_usLink' href='" + find_usLinkHref + "' title='" + find_usLinkTitle + "'>" + find_usLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='contactLink' href='" + contactLinkHref + "' title='" + contactLinkTitle + "'>" + contactLinkContent + li_topbar_sufix;
						topbarContent += ul_topbar_sufix;
						break;
						
		case 2: topbarContent += "id='indexLink' href='" + indexLinkHref + "' title='" + indexLinkTitle + "'>" + indexLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='roomsLink' href='" + roomsLinkHref + "' title='" + roomsLinkTitle + "'>" + roomsLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='galleryLink' href='" + galleryLinkHref + "' title='" + galleryLinkTitle + "'>" + galleryLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='servicesLink' href='" + servicesLinkHref + "' title='" + servicesLinkTitle + "'>" + servicesLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='contactLink' href='" + contactLinkHref + "' title='" + contactLinkTitle + "'>" + contactLinkContent + li_topbar_sufix;
						topbarContent += li_dropdown;
						topbarContent += li_topbar_prefix + "id='locationLink' href='" + locationLinkHref + "' title='" + locationLinkTitle + "'>" + locationLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='find_usLink' href='" + find_usLinkHref + "' title='" + find_usLinkTitle + "'>" + find_usLinkContent + li_topbar_sufix;
						topbarContent += ul_topbar_sufix;
						break;
					
		case 3: topbarContent += "id='indexLink' href='" + indexLinkHref + "' title='" + indexLinkTitle + "'>" + indexLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='roomsLink' href='" + roomsLinkHref + "' title='" + roomsLinkTitle + "'>" + roomsLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='galleryLink' href='" + galleryLinkHref + "' title='" + galleryLinkTitle + "'>" + galleryLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='servicesLink' href='" + servicesLinkHref + "' title='" + servicesLinkTitle + "'>" + servicesLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='contactLink' href='" + contactLinkHref + "' title='" + contactLinkTitle + "'>" + contactLinkContent + li_topbar_sufix;
						topbarContent += li_topbar_prefix + "id='locationLink' href='" + locationLinkHref + "' title='" + locationLinkTitle + "'>" + locationLinkContent + li_topbar_sufix;
						topbarContent += li_dropdown;
						topbarContent += li_topbar_prefix + "id='find_usLink' href='" + find_usLinkHref + "' title='" + find_usLinkTitle + "'>" + find_usLinkContent + li_topbar_sufix;
						topbarContent += ul_topbar_sufix;
						break;
	};
	
	return topbarContent;
};

// -- GALLERY'S WRAPPER 
// This function is used to customize the grid layaout breakpoint to display gallery's images properly. The class to set the container 100% width is added if exists, otherwise it's removed.
var customizeGalleryWrapper = function() {
  $(".gallery_wrapper").toggleClass("custom_sized_wrapper_display");
	$(".gallery_divider").toggleClass("custom_hide custom_show");
};
//-- END -- GALLERY'S WRAPPER

// -- ROOMS' TABLE HEIGHTS AND TOOLTIPS
var balancePairTable = function(id_table_left, id_table_right) {
  // The current height of the target tables are taken and stored as a number too.
  var table_left_height_in_px = $("#"+id_table_left+"").css("height");
  var table_left_height_num = parseFloat(table_left_height_in_px.substring(0, table_left_height_in_px.length-2));
  var table_right_height_in_px = $("#"+id_table_right+"").css("height");
  var table_right_height_num = parseFloat(table_right_height_in_px.substring(0, table_right_height_in_px.length-2));
  
  if(table_left_height_num > table_right_height_num) {
    $("#"+id_table_right+"").css("height", table_left_height_in_px);
  }
  else if(table_left_height_num < table_right_height_num) {
    $("#"+id_table_left+"").css("height", table_right_height_in_px);
  }  
};

var resetTableHeights = function() {
  // This function should be used before setting anything else, in order to get the correct height reset values
  $("#room_1_table_1").css("height", "auto");
  $("#room_1_table_2").css("height", "auto");
  $("#room_2_table_1").css("height", "auto");
  $("#room_2_table_2").css("height", "auto");
  $("#room_3_table_1").css("height", "auto");
  $("#room_3_table_2").css("height", "auto");
  $("#room_4_table_1").css("height", "auto");
  $("#room_4_table_2").css("height", "auto");
};

var balance_tables_height_hide_tooltips = function() {
  // Before any modification we reset all the tables height
  resetTableHeights();
  
  // First, tables of room 1 and 2 are balanced
  balancePairTable("room_1_table_1", "room_2_table_1");
  balancePairTable("room_1_table_2", "room_2_table_2");
  
  // Finally, tables of room 3 and 4 are balanced
  balancePairTable("room_3_table_1", "room_4_table_1");
  balancePairTable("room_3_table_2", "room_4_table_2");
	
	// Checks if there is a tooltip visible window. If so it is closed to prevent misspositioning on resizing
	if($(".tooltip").length > 0) {
		var tooltipElems = $(".tooltip");
		if(tooltipElems.css("display") != "none") {
			tooltipElems.css("display", "none");
		}
	}
};
//-- END -- ROOMS' TABLE HEIGHTS AND TOOLTIPS

// -- ZOOMER
var resizeZoomerWrapper = function() {
  if(($(".zoomer_wrapper").length > 0) && ($("#rooms_and_gallery_modal").css("visibility") == "visible")) {
    var zoomerEl = $(".zoomer_wrapper").first();
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
			else{
				var adjustMultiplier = Math.round(((body_width_num - 1330) / 100));
				if(adjustMultiplier < 1)
					zoomerNewWidth -= 137;
				else
					zoomerNewWidth -= (137 + (5 * adjustMultiplier));
			}

		var finalWidth = zoomerNewWidth + "px";
    zoomerEl.css("height", zoomerNewHeight);
    zoomerEl.css("width", finalWidth);
		
		if((current_img_res_size_code == BIG_RES_CODE) && isImgResCodeChanged) {
			isImgResCodeChanged = false;
			var targetGal = ("../../images/gallery/big/" + currentImg);				
			$(".zoomer_custom").zoomer("load", targetGal);
		}
    $(".zoomer_custom").zoomer("resize");
  }
};

var setZoomerContrLangAndTooltip = function(attrType) {
	// Previous button
	var PREV_BT_CONTENT_ES = "Ver foto anterior";
	var PREV_BT_CONTENT_EN = "See the previous image";
	var PREV_BT_CONTENT_EU = "Ikusi aurreko argazkia";
	// Next button
	var NEXT_BT_CONTENT_ES = "Ver foto siguiente";
	var NEXT_BT_CONTENT_EN = "See the next image";
	var NEXT_BT_CONTENT_EU = "Ikusi hurrengo argazkia";
	// Zoom in button
	var ZOOM_IN_BT_CONTENT_ES = "Ampliar la foto";
	var ZOOM_IN_BT_CONTENT_EN = "Magnify the image";
	var ZOOM_IN_BT_CONTENT_EU = "Argazkia handitu";
	// Zoom out button
	var ZOOM_OUT_BT_CONTENT_ES = "Alejar la foto";
	var ZOOM_OUT_BT_CONTENT_EN = "Reduce the image";
	var ZOOM_OUT_BT_CONTENT_EU = "Argazkia txikitu";
		// Zoomer image's alt
	var ZOOMER_IMG_AL_ES = "Imagen principal de sub-sección";
	var ZOOMER_IMG_AL_EN = "Main sub-section image";
	var ZOOMER_IMG_AL_EU = "Azpiatalaren argazki nagusia";
	// Tooltip content
	var TIP_CLOSE_TEXT_ES = "Pincha para cerrar";
	var TIP_CLOSE_TEXT_EN = "Pinch to close";
	var TIP_CLOSE_TEXT_EU = "Klikatu hemen ixteko";
	
	if(attrType === "prev") {
		if(currentLanguage === "es")
			return PREV_BT_CONTENT_ES;
		else if(currentLanguage === "en")
			return PREV_BT_CONTENT_EN;
		else if(currentLanguage === "eu")
			return PREV_BT_CONTENT_EU;
	}
	else if(attrType === "next") {
		if(currentLanguage === "es")
			return NEXT_BT_CONTENT_ES;
		else if(currentLanguage === "en")
			return NEXT_BT_CONTENT_EN;
		else if(currentLanguage === "eu")
			return NEXT_BT_CONTENT_EU;
	}
	else if(attrType === "zoomIn") {
		if(currentLanguage === "es")
			return ZOOM_IN_BT_CONTENT_ES;
		else if(currentLanguage === "en")
			return ZOOM_IN_BT_CONTENT_EN;
		else if(currentLanguage === "eu")
			return ZOOM_IN_BT_CONTENT_EU;
	}
	else if(attrType === "zoomOut") {
		if(currentLanguage === "es")
			return ZOOM_OUT_BT_CONTENT_ES;
		else if(currentLanguage === "en")
			return ZOOM_OUT_BT_CONTENT_EN;
		else if(currentLanguage === "eu")
			return ZOOM_OUT_BT_CONTENT_EU;
	}
	else if(attrType === "zoomerImgAlt") {
		if(currentLanguage === "es")
			return ZOOMER_IMG_AL_ES;
		else if(currentLanguage === "en")
			return ZOOMER_IMG_AL_EN;
		else if(currentLanguage === "eu")
			return ZOOMER_IMG_AL_EU;
	}
	else if(attrType === "tooltip") {
		if(currentLanguage === "es")
			return TIP_CLOSE_TEXT_ES;
		else if(currentLanguage === "en")
			return TIP_CLOSE_TEXT_EN;
		else if(currentLanguage === "eu")
			return TIP_CLOSE_TEXT_EU;
	}
};

// -- END -- ZOOMER

// -- RESIZER MAIN FUNCTION
var resizeEventsCaller = function() {
	// Call to the table height balancer and tooltips hidder
	if($("#room_1_table_1").length > 0)
		balance_tables_height_hide_tooltips();
	// Call to the zoomer resizer
	if($("#rooms_and_gallery_modal").css("visibility") != "hidden")
		resizeZoomerWrapper();
};
// -- END -- RESIZER MAIN FUNCTION

// This variable is used to know if this script will be loaded at the time of checking it in the JS manager
varsAndCustomFuncsLoaded = true;