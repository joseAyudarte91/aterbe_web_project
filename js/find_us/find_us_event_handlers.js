/****** ON CLICK HANDLERS SECTION ******/

// This code will add an event listener to each anchor of the topbar after being dynamically replaced
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
	
	// Check if the clicked element is the button that loads google interactive map
	if($(event.target).attr("id") == "show_full_gmap_bt") {
		// Unbind previous (now not needed) onresize event handler for static map image
		$(window).unbind("resize", gmapImgOnResizeHandler);

		// Prepare the content to be loaded synchronously
		var full_gmap_content = "<div class='row' id='dynamicPlaceHolder'><div class='large-12 columns'><div class='row'>";
		full_gmap_content += "<div class='large-12 small-12 columns'><div id='map-canvas'></div></div>";
		full_gmap_content += "<div class='large-12 small-12 columns custom_hide_overrider'><div id='directions-panel' class='custom_hide_overrider'></div></div>";
		full_gmap_content += "</div></div>";
		full_gmap_content += "<div class='large-6 medium-6 small-12 columns'><a class='button expand' href='#' alt='" + searchRouteBtContent + "' title='" + searchRouteBtContent + "' id='searchbox_route_bt'>" + searchRouteBtContent + "</a></div>";
		full_gmap_content += "<div class='large-6 medium-6 small-12 columns'><a class='button expand' href='#' alt='" + geolocationRouteBtContent + "' title='" + geolocationRouteBtContent + "' id='geolocation_route_bt'>" + geolocationRouteBtContent + "</a></div>";
		full_gmap_content += "</div>";
		
		//Load the content
		$("#dynamicPlaceHolder").replaceWith(full_gmap_content);
		
		// Dynamic resizing
		wrapperDynamicResizer();
		
		// Show google Map's Search box component
		$("#pac-input").toggleClass("custom_hide_overrider custom_show");
		
		// Load the google maps init script
		loadInitScript();
		// When the browser's windows resizes, we do so with the wrappers of the gmaps components
		$(window).bind("resize", fullGmapOnResizeHandler);
	}
	
	// Check the route calculation button for the search box
	if($(event.target).attr("id") == "searchbox_route_bt") {
		// Check for the existence of the last searched place in the google map
		if(coords_Aterbe !== undefined) {
			// Check for the coordinates of destiny not to be undefined
			if(lastSearchedPlace !== undefined) {
				// Resize all needed elements if it's first time access. It also unbinds previously bound resize event handlers
				if(first_routing_access) {
					// Unbind previous onresize event handler because we have directions panel to include in the resizing
					$(window).unbind("resize", fullGmapOnResizeHandler);
					// Show google Map's Directions-panel component
					$("#directions-panel").parent().toggleClass("custom_hide_overrider custom_show");
					$("#directions-panel").toggleClass("custom_hide_overrider custom_show");
					// Make a dynamic resizing of all the components before start
					adjustGmapAndDirectionsLayers();
					routeWrapperDynamicResizer();
				}
				// Prepare needed elements
				marker.setMap(null);
				$("#directions-panel").html("");
				if(directionsDisplay != null) {
					directionsDisplay.setMap(null);
					directionsDisplay = null;
				}
				directionsDisplay = new google.maps.DirectionsRenderer();
				directionsDisplay.setMap(g_map);
				directionsDisplay.setPanel(document.getElementById("directions-panel"));
				//If everything is ok, the origin and destination coordinates are set for route calculation request. Travel mode is set by driving since it's the best way to come to Aterbe
				request = {
					origin:lastSearchedPlace.geometry.location,
					destination:coords_Aterbe,
					travelMode: google.maps.TravelMode.DRIVING
				};
				// The route calculation request is sent
				directionsService.route(request, function(response, status) {
					if (status == google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(response);
						if(first_routing_access) {
							// When the browser's windows resizes, we do so with the wrappers of the gmaps components
							$(window).bind("resize", routesDirFullGmapOnResizeHandler);
							// A flag is set to true that indicates the event handler has been bound and not to be rebound again
							first_routing_access = false;
						}
					}
					else {
						alert(errorBetweenDirections);
					}
				});
			}
			else {
				alert(errorOriginUndefined);
			}
		}
		else {
			alert(errorDestCoordsGetFailed);
		}
	}
	
	if($(event.target).attr("id") == "geolocation_route_bt") {
		if(coords_Aterbe !== undefined) {
			// Advise the user that he has to grant access to its device's geolocation feature
			alert(geolocationUseMsg);
			//Checks if browser supports geolocation
			if (navigator.geolocation) {
				// Callback of geolocation function that is executed when the user location is retrieved
				navigator.geolocation.getCurrentPosition(function (position) {
					if((position !== null) && (position !== undefined)) {
						var userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						// Resize all needed elements if it's first time access. It also unbinds previously bound resize event handlers
						if(first_routing_access) {
							// Unbind previous onresize event handler because we have directions panel to include in the resizing
							$(window).unbind("resize", fullGmapOnResizeHandler);
							// Show google Map's Directions-panel component
							$("#directions-panel").parent().toggleClass("custom_hide_overrider custom_show");
							$("#directions-panel").toggleClass("custom_hide_overrider custom_show");
							// Make a dynamic resizing of all the components before start
							adjustGmapAndDirectionsLayers();
							routeWrapperDynamicResizer();
						}
						// Prepare needed elements
						marker.setMap(null);
						$("#directions-panel").html("");
						if(directionsDisplay != null) {
							directionsDisplay.setMap(null);
							directionsDisplay = null;
						}
						directionsDisplay = new google.maps.DirectionsRenderer();
						directionsDisplay.setMap(g_map);
						directionsDisplay.setPanel(document.getElementById("directions-panel"));
						//If everything is ok, the origin and destination coordinates are set for route calculation request. Travel mode is set by driving since it's the best way to come to Aterbe
						request = {
							origin:userLocation,
							destination:coords_Aterbe,
							travelMode: google.maps.TravelMode.DRIVING
						};
						// The route calculation request is sent
						directionsService.route(request, function(response, status) {
							if (status == google.maps.DirectionsStatus.OK) {
								directionsDisplay.setDirections(response);
								if(first_routing_access) {
									// When the browser's windows resizes, we do so with the wrappers of the gmaps components
									$(window).bind("resize", routesDirFullGmapOnResizeHandler);
									// A flag is set to true that indicates the event handler has been bound and not to be rebound again
									first_routing_access = false;
								}
							}
							else {
								alert(errorBetweenDirections);
							}
						});
					}
					else {
						alert(errorInGeolocation);
					}
				});
			}
			else {
				alert(errorGeoLocationNotSupported);
			}
		}
		else {
			alert(errorDestCoordsGetFailed);
		}
	}				
});

/****** ON RESIZE HANDLER SECTION ******/
// When the browser's windows resizes, we do so with the wrappers of the gmaps components
$(window).bind("resize", gmapImgOnResizeHandler);

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
.register(mq_no_retina_1x, function() {
	dynamicGmapLoader_no_retina();
	currentCSSPixelRatio = "1";
}, true)
.register(mq_retina_2x, function() {
	dynamicGmapLoader_retina();
	currentCSSPixelRatio = "1+";
});