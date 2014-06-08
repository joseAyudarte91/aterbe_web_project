/****** LOCATION SECTION'S GLOBAL VARIABLES AND FUNCTIONS *******/

/* GLOBAL VARIABLES */

// variable to store the current language of the page
var currentLanguage;

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

// Breakpoint for the location's images's display appearence
var LOCATION_IMG_DISPLAY_BREAKPOINT = "29.75em";

// No complex operations are allowed to define a media feature, so we must merge all the variables to create the one we should use.
var mq_topbar_logo_break = "only screen and (min-width: "+TOPBAR_LOGO_BREAK+")"; 
var mq_small_screen = "only screen and (max-width: "+SMALL_SCREEN_BREAKPOINT+")";
var mq_topbar_init = "only screen and (max-width: "+TOPBAR_BREAKPOINT_1+")"; 
var mq_topbar_break_1 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_1+") and (max-width: "+TOPBAR_BREAKPOINT_2+")";
var mq_topbar_break_2 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_2+") and (max-width: "+TOPBAR_BREAKPOINT_3+")";
var mq_topbar_break_3 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_3+") and (max-width: "+TOPBAR_BREAKPOINT_4+")";
var mq_topbar_break_4 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_4+")";

// Media query for the image appearance
var mq_custom_medium_break = "only screen and (max-width: "+LOCATION_IMG_DISPLAY_BREAKPOINT+")";
			       
/* CUSTOM FUNCTIONS */

// Set current language function definition and followed execution
setCurrentLanguage = function() {
	if(typeof currentLanguage === "undefined"){
		var htmlElement = document.querySelector("html");
		currentLanguage = $(htmlElement).attr("lang");
	}
};
setCurrentLanguage();

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

/*This function is used to customize the grid layaout breakpoint to display location's images properly.
	The class to set the container 100% width is added if exists, otherwise it's removed. Moreover, hr elements are hidden when images are displayed in parallel
*/
var customizeLocationImgWrapper = function() {
  $(".location_img_wrapper").toggleClass("custom_sized_wrapper_display");
	$(".custom_hide, .custom_show").toggleClass("custom_hide custom_show");
	$(".medium_last").toggleClass("custom_show_overrider");
};

// This variable is used to know if this script will be loaded at the time of checking it in the JS manager
varsAndCustomFuncsLoaded = true;