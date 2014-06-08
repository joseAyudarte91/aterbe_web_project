/****** FIND US SECTION'S GLOBAL VARIABLES *******/

// General sufix and prefix to create topbar ul and li elements
var ul_topbar_prefix = "<ul class='right' id='topNavContent'>";
var li_topbar_prefix = "<li class='divider'></li><li><a class='topbarLink' ";
var li_topbar_sufix = "</a></li>";
var ul_topbar_sufix = "</ul>";
var li_dropdown = "<li class='divider'></li><li class='has-dropdown not-click'><a class='menu-icon topbarLink' id='more-opts-icon' href='#'><span></span></a><ul class='dropdown'>";

// variable to store the current language of the page
var currentLanguage;

// For routing calculation buttons in the interactive map
var searchRouteBtContent = "Ruta desde texto de búsqueda";
var geolocationRouteBtContent = "Ruta desde mi ubicación";
var geolocationUseMsg = "Para usar esta opción de ruta se le pedirá permiso para obtener su ubicación";
var errorBetweenDirections = "No se ha podido calcular la ruta. Inténtelo desde otro punto de partida";
var errorOriginUndefined = "No se ha definido ningún punto de partida";
var errorDestCoordsGetFailed = "Error al acceder a las coordenadas de destino";
var errorInGeolocation = "Ha habido un error al obtener tu posición";
var errorGeoLocationNotSupported = "Tu navegador o dispositivo no admiten la geolocalización";
		
// Breakpoint for small screens (it is the same mq of foundation's
var SMALL_SCREEN_BREAKPOINT = "40em";

// Breakpoint for the smallest screen size
var TOPBAR_LOGO_BREAK = "25em";

// Breakpoints for the topbar menu
var TOPBAR_BREAKPOINT_1 = "46.3em";
var TOPBAR_BREAKPOINT_2 = "52.3em";
var TOPBAR_BREAKPOINT_3 = "58.3em";
var TOPBAR_BREAKPOINT_4 = "64.3em";

// No complex operations are allowed to define a media feature, so we must merge all the variables to create the one we should use.
var mq_topbar_logo_break = "only screen and (min-width: "+TOPBAR_LOGO_BREAK+")";
var mq_topbar_init = "only screen and (max-width: "+TOPBAR_BREAKPOINT_1+")"; 
var mq_topbar_break_1 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_1+") and (max-width: "+TOPBAR_BREAKPOINT_2+")";
var mq_topbar_break_2 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_2+") and (max-width: "+TOPBAR_BREAKPOINT_3+")";
var mq_topbar_break_3 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_3+") and (max-width: "+TOPBAR_BREAKPOINT_4+")";
var mq_topbar_break_4 = "only screen and (min-width: "+TOPBAR_BREAKPOINT_4+")";

var mq_no_retina_1x = "only screen and (-webkit-max-device-pixel-ratio: 1), only screen and (max-resolution: 160dpi)";
var mq_retina_2x = "only screen and (-webkit-min-device-pixel-ratio: 1.01), only screen and (min-resolution: 161dpi)";

var mq_small_screen = "only screen and (max-width: "+SMALL_SCREEN_BREAKPOINT+")";

//Top width and heigth for google map Static API image. Used padding for grid is also calculated
var COLUMNS_PADDING_REM_NUM = (0.9375 * 2);
var TOP_GMAP_IMG_WIDTH_COEF = 640;
var TOP_GMAP_IMG_HEIGHT_COEF = 530;
var GMAP_IMG_RATIO = TOP_GMAP_IMG_WIDTH_COEF / TOP_GMAP_IMG_HEIGHT_COEF;

var FULL_GMAP_WIDTH_COEF = 970;
var FULL_GMAP_HEIGHT_COEF = 550;
var FULL_GMAP_RATIO = FULL_GMAP_WIDTH_COEF / FULL_GMAP_HEIGHT_COEF;
var SMALL_SCREEN_SIZE = 600;

// Global Gmaps variables
var directionsService;
// This variable stores the user's selected last place in the search box (the first matching point is taken)
var lastSearchedPlace;
// Interactive Google Map
var g_map;
// Fixed known coordinates of Aterbe
var coords_Aterbe;
// Flag to show already bound resize events handlers
var first_routing_access = true;
// Marker initially displayed for Aterbe
var marker;

//Static content of the dynamicPlaceHolder div tag that contains google maps stuff
var staticMapAlt = $("#gmapsImg").attr("alt");
var mapInterButtonContent = $("#show_full_gmap_bt").html();
var staticGmapContent_part_1 = "<div class='row' id='dynamicPlaceHolder'><div class='large-12 columns'><div id='gMap_img_dynamic_wrapper'>";
staticGmapContent_part_1 += "<img id='gmapsImg' div='gMap_img_dynamic_wrapper' src='http://maps.googleapis.com/maps/api/staticmap?center=diseminados+20,Leintz-Gatzaga&zoom=13&size=";
var staticGmapContent_part_2 = "&maptype=roadmap&markers=color:red%7Clabel:B%7C42.98381108189313,-2.5708769967117178&sensor=false&key=AIzaSyClTpvDfZr2xuy8gDQelUd_zR9jB5tkk_U' alt='" + staticMapAlt + "'>";
staticGmapContent_part_2 += "</div></div><div id='gmapButtonSection' class='large-12 columns'><div id='gmapButtonWrapper'><a href='#' class='button expand' id='show_full_gmap_bt'>" + mapInterButtonContent + "</a></div></div></div>";

// This variable is used to store the device pixel ratio initially reported in order to save resources.
var currentCSSPixelRatio = "notset";

// The variable that will be used as a timer for window resize
var gmapsImgResizeTimer;

// The variable that will be used as a timer for window resize
var fullGmapsResizeTimer;

// The variable that will be used as a timer for window resize
var routesDirFullGmapsResizeTimer;

// Global variables for each routing request
var directionsService;
var directionsDisplay;
var request;

/****** FIND US SECTION'S NAMED CUSTOM FUNCTIONS ******/

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

// Set the variables in the appropriate language for using them later
if(currentLanguage === "en"){
	searchRouteBtContent = "Search route from the textbox";
	geolocationRouteBtContent = "Search route from your location";
	geolocationUseMsg = "In order to use this option you will be prompted to allow geolocation";
	errorBetweenDirections = "Error in the route calculation. Try it again from another origin";
	errorOriginUndefined = "The origin is undefined";
	errorDestCoordsGetFailed = "Error accessing destination coordinates";
	errorInGeolocation = "An error has occurred trying to retrieve your position";
	errorGeoLocationNotSupported = "The Geolocation is not supported in your browser or device";
}
else if(currentLanguage === "eu"){
	searchRouteBtContent = "Bilatu sartutako helbidetik";
	geolocationRouteBtContent = "Bilatu zure kokapenatik";
	geolocationUseMsg = "Aukera hau erabiltzeko zure kokapenari buruzko informazioa bidaltzeko baimena eman behar duzu (Geokokapena aktibatu)"; 
	errorBetweenDirections = "Arazoak izan dira ibilbidea kalkulatzeko. Mesedez, saiatu berriro beranduago ";
	errorOriginUndefined = "Jatorri puntua ez dago definituta";
	errorDestCoordsGetFailed = "Arazoak izan dira aukeratutako helbidearen koordenatuak erabiltzen";
	errorInGeolocation = "Arazoak izan dira zure kokapenaren koordenatuak jasotzerakoan";
	errorGeoLocationNotSupported = "Geokokapena ez dago erabilgarri zure nabigatzailean";
}

// A function to compute height proportionally to passed width as parameter
var compute_proportional_height = function(img_width, display_ratio) {
	var computed_img_height = Math.round((img_width / display_ratio));
	return computed_img_height;
};

var dynamicGmapLoader_no_retina = function() {
	var body_width = $("body").css("width");
	var new_gmap_img_width_str = "";
	var new_gmap_img_height_str = "";
	//We retrieve the font-size of the html because we know that the wrapper has inherited that value.
  var currentFontSize = $("html").css("font-size");
  //We need the font size as a number to be multiplied
  var currentFontSizeAsNumber = parseFloat(currentFontSize.substring(0, currentFontSize.length-2));
	var relative_padding_adjust = (COLUMNS_PADDING_REM_NUM * currentFontSizeAsNumber);
	if(parseFloat(body_width) >= (TOP_GMAP_IMG_WIDTH_COEF + relative_padding_adjust)) {
		new_gmap_img_width_str = "" + TOP_GMAP_IMG_WIDTH_COEF;
		new_gmap_img_height_str = "" + TOP_GMAP_IMG_HEIGHT_COEF;
	}
	else {
		new_gmap_img_width_str = "" + (parseFloat(body_width.substring(0, body_width.length - 2)) - relative_padding_adjust);
		new_gmap_img_height_str = compute_proportional_height(parseFloat(new_gmap_img_width_str), GMAP_IMG_RATIO);
	}
	var fullDynamicGmapContent = staticGmapContent_part_1 + new_gmap_img_width_str +"x" + new_gmap_img_height_str + staticGmapContent_part_2;
	var new_gmap_img_width = "" + new_gmap_img_width_str + "px";
	var new_gmap_img_height = "" + new_gmap_img_height_str + "px";
	$("#dynamicPlaceHolder").replaceWith(fullDynamicGmapContent);
	$("#gMap_wrapper, #gmapButtonWrapper").css("width", new_gmap_img_width);
	$("#gMap_wrapper").css("height", new_gmap_img_height);
	$(document).foundation("reflow");
};

var dynamicGmapLoader_retina = function() {
	var body_width = $("body").css("width");
	var scaleFactor = "&scale=2";
	var new_gmap_img_width_str = "";
	var new_gmap_img_height_str = "";
		//We retrieve the font-size of the html because we know that the wrapper has inherited that value.
  var currentFontSize = $("html").css("font-size");
  //We need the font size as a number to be multiplied
  var currentFontSizeAsNumber = parseFloat(currentFontSize.substring(0, currentFontSize.length-2));
	var relative_padding_adjust = (COLUMNS_PADDING_REM_NUM * currentFontSizeAsNumber);
	if(parseInt(body_width) >= (TOP_GMAP_IMG_WIDTH_COEF + relative_padding_adjust)) {
		new_gmap_img_width_str = "" + TOP_GMAP_IMG_WIDTH_COEF;
		new_gmap_img_height_str = "" + TOP_GMAP_IMG_HEIGHT_COEF;
	}
	else {
		new_gmap_img_width_str = "" + (parseFloat(body_width.substring(0, body_width.length - 2)) - relative_padding_adjust);
		new_gmap_img_height_str = compute_proportional_height(parseFloat(new_gmap_img_width_str), GMAP_IMG_RATIO);
	}
	var fullDynamicGmapContent = staticGmapContent_part_1 + new_gmap_img_width_str +"x" + new_gmap_img_height_str + scaleFactor + staticGmapContent_part_2;
	var new_gmap_img_width = "" + new_gmap_img_width_str + "px";
	var new_gmap_img_height = "" + new_gmap_img_height_str + "px";
	$("#dynamicPlaceHolder").replaceWith(fullDynamicGmapContent);
	$("#gMap_wrapper, #gmapButtonWrapper").css("width", new_gmap_img_width);
	$("#gMap_wrapper").css("height", new_gmap_img_height);
	$(document).foundation("reflow");
};

var resizeGmapsStuff = function() {
	if(currentCSSPixelRatio == "1") {
		dynamicGmapLoader_no_retina();
	}
	else if(currentCSSPixelRatio == "1+") {
		dynamicGmapLoader_retina();
	}
};

var gmapImgOnResizeHandler = function() {
  clearTimeout(gmapsImgResizeTimer);
  gmapsImgResizeTimer = setTimeout(resizeGmapsStuff, 100);
};

// A function that loads the init script for google maps to be loaded
function loadInitScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initializeGmap&key=AIzaSyClTpvDfZr2xuy8gDQelUd_zR9jB5tkk_U&libraries=places";
  document.body.appendChild(script);
};

// The function that initializes google maps js API
function initializeGmap() {
	directionsService = new google.maps.DirectionsService();
	coords_Aterbe = new google.maps.LatLng(42.98381108189313, -2.5708769967117178);
	// This should remove any business from the map for convenience
	var noPoi = [
		{
			featureType: "poi",
			stylers: [
      { visibility: "off" }
			]   
		}
	];
  var mapOptions = {
    zoom: 13,
    center: coords_Aterbe,
		zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: noPoi
	};
	
	g_map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	
		marker = new google.maps.Marker({
		position: coords_Aterbe,
		map: g_map
  });

	var defaultBounds = new google.maps.LatLngBounds(
		coords_Aterbe,
    coords_Aterbe
	);
	g_map.fitBounds(defaultBounds);
// Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  g_map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();
		
		// The first matching place is stored for future routing processes
		lastSearchedPlace = places[0];
		
		marker.setMap(null);
		marker = null;
		
    var bounds = new google.maps.LatLngBounds();
		var image = {
			url: lastSearchedPlace.icon,
			size: new google.maps.Size(71, 71),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(17, 34),
			scaledSize: new google.maps.Size(25, 25)
		};

		// Create a marker for the selected place.
		marker = new google.maps.Marker({
			map: g_map,
			icon: image,
			title: lastSearchedPlace.name,
			position: lastSearchedPlace.geometry.location
		});

		bounds.extend(lastSearchedPlace.geometry.location);

    g_map.fitBounds(bounds);
  });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(g_map, 'bounds_changed', function() {
    var bounds = g_map.getBounds();
    searchBox.setBounds(bounds);
  });
	google.maps.event.addDomListener(window, "resize", function() {
		var center = g_map.getCenter();
		google.maps.event.trigger(g_map, "resize");
		g_map.setCenter(center); 
	});
};

var adjustGmapAndDirectionsLayers = function() {
	if(($("#map-canvas").parent().hasClass("large-12")) && ($("#directions-panel").parent().hasClass("large-12"))) {
		// Large column width (100%) class is removed to use the appropriate relative sized column class
		$("#map-canvas").parent().removeClass("large-12");
		$("#map-canvas").parent().addClass("large-7");
		// The same operation is applied for the directions panel
		$("#directions-panel").parent().removeClass("large-12");
		$("#directions-panel").parent().addClass("large-5");
		// A reflow event is triggered to reapply all the event handlers again to dom elements
		$(document).foundation("reflow");
	}
};

var wrapperDynamicResizer = function() {
	//We retrieve the font-size of the html because we know that the wrapper has inherited that value.
	var currentFontSize = $("html").css("font-size");
	//We need the font size as a number to be multiplied
	var currentFontSizeAsNumber = parseFloat(currentFontSize.substring(0, currentFontSize.length-2));
	// After some calculations we have the correct margin for the google map component to be displayed properly in its container
	var relative_padding_adjust = (COLUMNS_PADDING_REM_NUM * currentFontSizeAsNumber);
	var tempGmapWidth = $("#map-canvas").parent().css("width");
	// Each element's wrapper size is taken as a reference for the new size
	var new_full_gmap_width_str = "" + (parseFloat(tempGmapWidth.substring(0, tempGmapWidth.length-2)) - relative_padding_adjust);
	var new_full_gmap_width = new_full_gmap_width_str + "px";
	var new_full_gmap_height_str = "";
	if(parseFloat(new_full_gmap_width_str) < SMALL_SCREEN_SIZE) {
		new_full_gmap_height = "" + compute_proportional_height(parseFloat(new_full_gmap_width_str), 1) + "px";
	}
	else {
		new_full_gmap_height = "" + compute_proportional_height(parseFloat(new_full_gmap_width_str), FULL_GMAP_RATIO) + "px";
	}
	// So all the resizing is done with the obtained values
	$("#map-canvas").css("width", new_full_gmap_width);
	$("#map-canvas").css("height", new_full_gmap_height);
	$(document).foundation("reflow");
};

var routeWrapperDynamicResizer = function() {
	//We retrieve the font-size of the html because we know that the wrapper has inherited that value.
	var currentFontSize = $("html").css("font-size");
	//We need the font size as a number to be multiplied
	var currentFontSizeAsNumber = parseFloat(currentFontSize.substring(0, currentFontSize.length-2));
	// After some calculations we have the correct margin for google map and directions panel components to be displayed properly in their containers
	var relative_padding_adjust = (COLUMNS_PADDING_REM_NUM * currentFontSizeAsNumber);
	var tempGmapWidthGmap = $("#map-canvas").parent().css("width");
	var tempGmapWidthDir = $("#directions-panel").parent().css("width");
	// Each element's wrapper size is taken as a reference for the new size
	var new_full_gmap_width_str = "" + (parseFloat(tempGmapWidthGmap.substring(0, tempGmapWidthGmap.length-2)) - relative_padding_adjust);
	var new_full_gmap_width = new_full_gmap_width_str + "px";
	var new_route_indications_panel_width = "" + (parseFloat(tempGmapWidthDir.substring(0, tempGmapWidthDir.length-2)) - relative_padding_adjust) + "px";
	var new_full_gmap_height_str = "";
	if(parseFloat(new_full_gmap_width_str) < SMALL_SCREEN_SIZE) {
		new_full_gmap_height = "" + compute_proportional_height(parseFloat(new_full_gmap_width_str), 1) + "px";
	}
	else {
		new_full_gmap_height = "" + compute_proportional_height(parseFloat(new_full_gmap_width_str), FULL_GMAP_RATIO) + "px";
	}
	// So all the resizing is done with the obtained values
	$("#map-canvas").css("width", new_full_gmap_width);
	$("#directions-panel").css("width", new_route_indications_panel_width);
	$("#map-canvas, #directions-panel").css("height", new_full_gmap_height);
	$(document).foundation("reflow");
};

var resizeAll = function() {
	// All the gmap wrappers are resized
	wrapperDynamicResizer();
};

var resizeAllWithRoutesDirPanel = function() {
	// All the gmap wrappers are resized
	routeWrapperDynamicResizer();
};

var fullGmapOnResizeHandler = function() {
  clearTimeout(fullGmapsResizeTimer);
  fullGmapsResizeTimer = setTimeout(resizeAll, 100);
};

var routesDirFullGmapOnResizeHandler = function() {
  clearTimeout(routesDirFullGmapsResizeTimer);
  routesDirFullGmapsResizeTimer = setTimeout(resizeAllWithRoutesDirPanel, 100);
};

// This variable is used to know if this script will be loaded at the time of checking it in the JS manager
varsAndCustomFuncsLoaded = true;