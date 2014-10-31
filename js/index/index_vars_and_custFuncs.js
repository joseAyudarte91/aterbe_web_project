/****** INDEX SECTION'S GLOBAL VARIABLES AND CUSTOM FUNCTIONS, USED FOR BOTH SMALL AND LARGE SCREEN DEVICES *******/

/* GLOBAL VARIABLES */

// Global variables for headers content. Their value will be asigned once.
var index_rules_content;
var index_offers_content;
var index_offer_1_content;
var index_offer_2_content;
var index_offer_3_content;
var index_offers_link_content;

// A variable to determine the current page's language
var currentLanguage;

// Resize timer
var resizeTimer;

// General sufix and prefix to create topbar ul and li elements
var ul_topbar_prefix = "<ul class='right' id='topNavContent'>";
var li_topbar_prefix = "<li class='divider'></li><li><a class='topbarLink' ";
var li_topbar_sufix = "</a></li>";
var ul_topbar_sufix = "</ul>";
var li_dropdown = "<li class='divider'></li><li class='has-dropdown not-click'><a class='menu-icon topbarLink' id='more-opts-icon' href='#'><span></span></a><ul class='dropdown'>";

// Breakpoint for the smallest screen size
var TOPBAR_LOGO_BREAK = "25em";

// Breakpoints for the topbar menu
var TOPBAR_BREAKPOINT_1 = "46.3em";
var TOPBAR_BREAKPOINT_2 = "52.3em";
var TOPBAR_BREAKPOINT_3 = "58.3em";
var TOPBAR_BREAKPOINT_4 = "64.3em";

//Breakpoints for the header
var HEADER_SMALL_BREAKPOINT = "42em";
var HEADER_BREAKPOINT_1 = "46em";
var HEADER_BREAKPOINT_2 = "55.625em";
var HEADER_BREAKPOINT_3 = "62.5em";
			
//Multipliers of the breakpoints for calculation purposes
var BREAKPOINT_1_MULTIPLIER = 46;
var BREAKPOINT_2_MULTIPLIER = 55.625;
var BREAKPOINT_3_MULTIPLIER = 62.5;

// Content that replaces topbar menu after each breakpoint


// The base content of cloud carousel is stored in a variable. It is made from 6 images. All of them have the class of "cloudcarousel", so they will be turned into carousel items
var base_placeholder = "<div class='row' id='header_placeholder'>";

// Topbar media queries
var mq_topbar_logo_break = "only screen and (min-width: "+TOPBAR_LOGO_BREAK+")"; 
var mq_topbar_init = "only screen and (max-width: "+TOPBAR_BREAKPOINT_1+")";
var mq_topbar_break_1 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_1+") and (max-width: "+TOPBAR_BREAKPOINT_2+")";
var mq_topbar_break_2 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_2+") and (max-width: "+TOPBAR_BREAKPOINT_3+")";
var mq_topbar_break_3 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_3+") and (max-width: "+TOPBAR_BREAKPOINT_4+")";
var mq_topbar_break_4 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_4+")";

// No complex operations are allowed to define a media feature, so we must merge all the variables to create the one we should use. 
var mq_header_init = "only screen and (max-width: "+HEADER_BREAKPOINT_1+")";
var mq_welcome_title_present = "only screen and (min-width: "+HEADER_BREAKPOINT_1+")";
var mq_small_only = "only screen and (max-width: "+HEADER_SMALL_BREAKPOINT+")";
var mq_header_break_1 = "only screen and (min-width: "+HEADER_BREAKPOINT_1+") and (max-width: "+HEADER_BREAKPOINT_2+")";
var mq_header_break_2 = "only screen and (min-width: "+HEADER_BREAKPOINT_2+") and (max-width: "+HEADER_BREAKPOINT_3+")";
var mq_header_break_3 = "only screen and (min-width: "+HEADER_BREAKPOINT_3+")";


/* NAMED CUSTOM FUNCTIONS */

setCurrentLanguage = function() {
	if(typeof currentLanguage === "undefined"){
		var htmlElement = document.querySelector("html");
		currentLanguage = $(htmlElement).attr("lang");
	}
};
setCurrentLanguage();

var createOrbitHeader = function() {
	var orbit_img1_title = "El porche";
	var orbit_img1_alt = "Foto 1 del Slider: El porche";
	var orbit_img2_title = "La suite";
	var orbit_img2_alt = "Foto 2 del Slider: La suite";
	var orbit_img3_title = "La sala común";
	var orbit_img3_alt = "Foto 3 del Slider: La sala común";
	
	var orbit_img1_title_en = "The porch";
	var orbit_img1_alt_en = "Image 1 from slider: The Porch";
	var orbit_img1_title_eu = "Portxea";
	var orbit_img1_alt_eu = "Slider-eko 1. argazkia: Portxea";
	
	var orbit_img2_title_en = "The Suite";
	var orbit_img2_alt_en = "Image 2 from slider: The Suite";
	var orbit_img2_title_eu = "Suite logela";
	var orbit_img2_alt_eu = "Slider-eko 2. argazkia: Suite logela";
	
	var orbit_img3_title_en = "The living room";
	var orbit_img3_alt_en = "Image 3 from slider: The living room";
	var orbit_img3_title_eu = "Egongela";
	var orbit_img3_alt_eu = "Slider-eko 3. argazkia: Egongela";
	
	if(currentLanguage === "en"){
		orbit_img1_title = orbit_img1_title_en;
		orbit_img1_alt = orbit_img1_alt_en;
		orbit_img2_title = orbit_img2_title_en;
		orbit_img2_alt = orbit_img2_alt_en;
		orbit_img3_title = orbit_img3_title_en;
		orbit_img3_alt = orbit_img3_alt_en;
	}
	else if(currentLanguage === "eu"){
		orbit_img1_title = orbit_img1_title_eu;
		orbit_img1_alt = orbit_img1_alt_eu;
		orbit_img2_title = orbit_img2_title_eu;
		orbit_img2_alt = orbit_img2_alt_eu;
		orbit_img3_title = orbit_img3_title_eu;
		orbit_img3_alt = orbit_img3_alt_eu;
	}
	
	var headerOrbitContent = base_placeholder;
	headerOrbitContent += "<div class='large-12 columns'>";
	headerOrbitContent += "<div id='orbitMobileWrapper' data-orbit>";
	headerOrbitContent += "<img src='../../images/gallery/small/porch/aterbe-porch-1.jpg' title='" + orbit_img1_title + "' alt='" + orbit_img1_alt + "'>";
	headerOrbitContent += "<img src='../../images/gallery/small/rooms/aterbe-room-1-1.jpg' title='" + orbit_img2_title + "' alt='" + orbit_img2_alt + "'>";
	headerOrbitContent += "<img src='../../images/gallery/small/living_room/aterbe-living-room-1.jpg' title='" + orbit_img3_title + "' alt='" + orbit_img3_alt + "'>";
	headerOrbitContent += "</div></div></div>";
	
	return headerOrbitContent;
};

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

var changeIndexHeadersFromSmallToBig = function() {
	// Default spanish writen header content
	var index_welcome_h3_content = "Que ofrecemos?";
	// Depending on the current language the content is changed in the variable
	if(currentLanguage === "en")
		index_welcome_h3_content = "Why choose us?";
	else if(currentLanguage === "eu")
		index_welcome_h3_content = "Zer eskaintzen dugu?";
		
	// We check for the value of each header content: if the values haven't been defined yet, we take them from the current page to be assigned.
	if(typeof index_rules_content === "undefined")
		index_rules_content = $("#small_rules_index_header").html();
		
	if(typeof index_offers_content === "undefined")
		index_offers_content = $("#small_offers_index_header").html();
		
	if(typeof index_offer_1_content === "undefined")
		index_offer_1_content = $("#small_offer_1_index_header").html();
		
	if(typeof index_offer_2_content === "undefined")
		index_offer_2_content = $("#small_offer_2_index_header").html();
		
	if(typeof index_offers_link_h5_content === "undefined")
		index_offers_link_content = $("#small_offers_link_index_header").html();
		
	// Headers replacement content for big screens	
	var index_welcome_h3 = "<h3 id='index_welcome_h3'>" + index_welcome_h3_content + "</h3>";	
	var index_rules_h3 = "<h3 id='index_rules_h3'>" + index_rules_content + "</h3>";
	var index_offers_h3 = "<h3 id='index_offers_h3'>" + index_offers_content + "</h3>";
	var index_offer_1_h4 = "<h4 id='index_offer_1_h4'>" + index_offer_1_content + "</h4>";
	var index_offer_2_h4 = "<h4 id='index_offer_2_h4'>" + index_offer_2_content + "</h4>";
	var index_offers_link_h5 = "<h5 id='index_offers_link_h5'><a href='offers.html'>" + index_offers_link_content + "</a></h5>";
	
	// Make the replacement
	$("#small_welcome_index_header").replaceWith(index_welcome_h3);
	$("#small_rules_index_header").replaceWith(index_rules_h3);
	$("#small_offers_index_header").replaceWith(index_offers_h3);
	$("#small_offer_1_index_header").replaceWith(index_offer_1_h4);
	$("#small_offer_2_index_header").replaceWith(index_offer_2_h4);
	$("#small_offers_link_index_header").replaceWith(index_offers_link_h5);
};

var changeIndexHeadersFromBigToSmall = function() {
	// Default spanish writen header content
	var small_welcome_index_header_content = "Bienvenido a la casa rural Aterbe";
	// Depending on the current language the content is changed in the variable
	if(currentLanguage === "en")
		small_welcome_index_header_content = "Welcome to Aterbe Rural House";
	else if(currentLanguage === "eu")
		small_welcome_index_header_content = "Ongietorri Aterbe Landa-etxera";
		
	// We check for the value of each header content: if the values haven't been defined yet, we take them from the current page to be assigned.
	if(typeof index_rules_content === "undefined")
		index_rules_content = $("#index_rules_h3").html();
		
	if(typeof index_offers_content === "undefined")
		index_offers_content = $("#index_offers_h3").html();
		
	if(typeof index_offer_1_content === "undefined")
		index_offer_1_content = $("#index_offer_1_h4").html();
		
	if(typeof index_offer_2_content === "undefined")
		index_offer_2_content = $("#index_offer_2_h4").html();
		
	if(typeof index_offers_link_content === "undefined")
		index_offers_link_content = $("#index_offers_link_h5").html();
		
	// Headers replacement content for small screens	
	var small_welcome_index_header = "<h2 id='small_welcome_index_header' class='h2_small_size'>" + small_welcome_index_header_content + "</h2>";
	var small_rules_index_header = "<h2 id='small_rules_index_header' class='h2_small_size'>" + index_rules_content + "</h2>";
	var small_offers_index_header = "<h2 id='small_offers_index_header' class='h2_small_size'>" + index_offers_content + "</h2>";
	var small_offer_1_index_header = "<h3 id='small_offer_1_index_header' class='h3_small_size'>" + index_offer_1_content + "</h3>";
	var small_offer_2_index_header = "<h3 id='small_offer_2_index_header' class='h3_small_size'>" + index_offer_2_content + "</h3>";
	var small_offers_link_index_header = "<h4 id='small_offers_link_index_header' class='h4_small_size'><a href='offers.html'>" + index_offers_link_content + "</a></h4>";
	
	// Make the replacement
	$("#index_welcome_h3").replaceWith(small_welcome_index_header);
	$("#index_rules_h3").replaceWith(small_rules_index_header);
	$("#index_offers_h3").replaceWith(small_offers_index_header);
	$("#index_offer_1_h4").replaceWith(small_offer_1_index_header);
	$("#index_offer_2_h4").replaceWith(small_offer_2_index_header);
	$("#index_offers_link_h5").replaceWith(small_offers_link_index_header);
};

var resizeTrigger = function() {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
		$(window).trigger("resize");
	}, 500);
};

// This variable is used to define at the end of the script that vars and custom functions has been loaded. It helps to avoid race conditions
indexVarsFuncsLoaded = true;