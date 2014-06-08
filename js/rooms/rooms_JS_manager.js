// These are global variables to check to avoid race conditions
var foundationLoaded;
var fastClickLoaded;
var mediaMatchLoaded;
var enquireLoaded;
var CHECKING_TIME = 250;
var varsAndCustomFuncsLoaded;
var vergeLoaded;
var eventsHandlersLoaded;

var enableCachedSyncScriptLoading = function() {
	$.getScript = function(url, callback, cache){
		$.ajax({
						type: "GET",
						url: url,
						success: callback,
						dataType: "script",
						cache: cache,
						async: false
		});
	};
};

var execFoundAndLoadVarsAndCustFuncs = function() {
	if(typeof foundationLoaded !== "undefined"){
		// Foundation customized JavaScript
		$(document).foundation();
		$.getScript("../../js/rooms/rooms_vars_and_custom_funcs.js", eventHandlersSafeLoader, true);
	}
	else
		setTimeout(execFoundAndLoadVarsAndCustFuncs, CHECKING_TIME);
};

var loadFoundationAndZoomer = function() {
	if(typeof fastClickLoaded !== "undefined"){
		$.getScript("../../bower_components/Zoomer/jquery.fs.zoomer.min.js", function(){ }, true);
		$.getScript("../../bower_components/foundation/js/foundation_custom.min.js", execFoundAndLoadVarsAndCustFuncs, true);
	}
	else
		setTimeout(loadFoundationAndZoomer, CHECKING_TIME);
};

var tableAdjust = function() {
	if(typeof eventsHandlersLoaded !== 'undefined'){
		// Make the initial adjustements of the tables and tooltip clearing, but some delay is needed to wait until all the elements are completely ready
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(balance_tables_height_hide_tooltips, 100);
	}
	else
		setTimeout(tableAdjust, 200);
};

var loadFastClick = function() {
	if(typeof enquireLoaded !== "undefined")
		$.getScript("../../bower_components/fastclick/lib/fastclick.js", loadFoundationAndZoomer, true);
	else
		setTimeout(loadFastClick, CHECKING_TIME);
};

var eventHandlersSafeLoader = function() {
	if(typeof varsAndCustomFuncsLoaded !== "undefined")
		$.getScript("../../js/rooms/rooms_event_handlers.js", tableAdjust, true);
	else
		setTimeout(eventHandlersSafeLoader, CHECKING_TIME);
};

var enquireSafeLoader = function() {
	if(typeof mediaMatchLoaded !== "undefined")
		$.getScript("../../js/commons/enquire.min.js", loadFastClick, true);
	else
		setTimeout(enquireSafeLoader, CHECKING_TIME);
};

var vergeSafeLoader = function() {
	if(typeof vergeLoaded !== "undefined"){
		// Merge verge with JQuery as a plugin
		$.extend(verge);
	}
	else
		setTimeout(vergeSafeLoader, 200);
};

var startJSManager = function() {
	if((typeof jQueryLoaded !== "undefined") && (typeof modernizrLoaded !== "undefined")){
		enableCachedSyncScriptLoading();
		if(Modernizr.svg)
			$(".top-bar, .top-bar.expanded").prepend("<div id='logo_wrapper'><a href='index.html'><img id='logo_img' src='../../images/logo_aterbe.svg'></a></div>");
		else
			$(".top-bar, .top-bar.expanded").prepend("<div id='logo_wrapper'><a href='index.html'><img id='logo_img' src='../../images/logo_aterbe.png'></a></div>");
			
		$.getScript("../../js/commons/verge.min.js", vergeSafeLoader, true);
		$.getScript("../../js/commons/media.match.min.js", enquireSafeLoader, true);
	}
	else
		setTimeout(startJSManager, CHECKING_TIME);
};
// Starts the JS Manager
startJSManager();