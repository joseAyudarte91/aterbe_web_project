// These are global variables to check to avoid race conditions
var foundationLoaded;
var fastClickLoaded;
var mediaMatchLoaded;
var enquireLoaded;
var CHECKING_TIME = 250;
var varsAndCustomFuncsLoaded;

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
		$.getScript("../../js/services/services_vars_and_custFuncs.js", eventHandlersSafeLoader, true);
	}
	else
		setTimeout(execFoundAndLoadVarsAndCustFuncs, CHECKING_TIME);
};

var loadFoundation = function() {
	if(typeof fastClickLoaded !== "undefined")
		$.getScript("../../bower_components/foundation/js/foundation_custom.min.js", execFoundAndLoadVarsAndCustFuncs, true);
	else
		setTimeout(loadFoundation, CHECKING_TIME);
};

var loadFastClick = function() {
	if(typeof enquireLoaded !== "undefined")
		$.getScript("../../bower_components/fastclick/lib/fastclick.js", loadFoundation, true);
	else
		setTimeout(loadFastClick, CHECKING_TIME);
};

var eventHandlersSafeLoader = function() {
	if(typeof varsAndCustomFuncsLoaded !== "undefined")
		$.getScript("../../js/services/services_event_handlers.js", function(){ }, true);
	else
		setTimeout(eventHandlersSafeLoader, CHECKING_TIME);
};

var enquireSafeLoader = function() {
	if(typeof mediaMatchLoaded !== "undefined")
		$.getScript("../../js/commons/enquire.min.js", loadFastClick, true);
	else
		setTimeout(enquireSafeLoader, CHECKING_TIME);
};

var startJSManager = function() {
	if((typeof jQueryLoaded !== "undefined") && (typeof modernizrLoaded !== "undefined")){
		enableCachedSyncScriptLoading();
		if(Modernizr.svg)
			$(".top-bar, .top-bar.expanded").prepend("<div id='logo_wrapper'><a href='index.html'><img id='logo_img' src='../../images/logo_aterbe.svg'></a></div>");
		else
			$(".top-bar, .top-bar.expanded").prepend("<div id='logo_wrapper'><a href='index.html'><img id='logo_img' src='../../images/logo_aterbe.png'></a></div>");
			
		$.getScript("../../js/commons/media.match.min.js", enquireSafeLoader, true);
	}
	else
		setTimeout(startJSManager, CHECKING_TIME);
};
// Starts the JS Manager
startJSManager();