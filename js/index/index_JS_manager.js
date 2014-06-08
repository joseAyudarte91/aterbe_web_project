// These are global variables to check to avoid race conditions
var foundationLoaded;
var fastClickLoaded;
var mediaMatchLoaded;
var enquireLoaded;
var CHECKING_TIME = 250;
var indexVarsFuncsLoaded;

var enableCachedScriptLoading = function() {
	$.getScript = function(url, callback, cache, async){
		$.ajax({
						type: "GET",
						url: url,
						success: callback,
						dataType: "script",
						cache: cache,
						async: async
		});
	};
};

var execFoundAndLoadVarsAndCustFuncs = function() {
	if(typeof foundationLoaded !== "undefined"){
		// Foundation customized JavaScript
		$(document).foundation();
		$.getScript("../../js/index/index_vars_and_custFuncs.js", eventHandlersSafeLoader, true, false);
	}
	else
		setTimeout(execFoundAndLoadVarsAndCustFuncs, CHECKING_TIME);
};

var loadFoundation = function() {
	if(typeof fastClickLoaded !== "undefined")
		$.getScript("../../bower_components/foundation/js/foundation_custom.min.js", execFoundAndLoadVarsAndCustFuncs, true, false);
	else
		setTimeout(loadFoundation, CHECKING_TIME);
};

var loadFastClick = function() {
	if(typeof enquireLoaded !== "undefined")
		$.getScript("../../bower_components/fastclick/lib/fastclick.js", loadFoundation, true, false);
	else
		setTimeout(loadFastClick, CHECKING_TIME);
};

var eventHandlersSafeLoader = function() {
	if(typeof indexVarsFuncsLoaded !== "undefined")
		$.getScript("../../js/index/index_event_handlers.js", function(){ }, true, false);
	else
		setTimeout(eventHandlersSafeLoader, CHECKING_TIME);
};

var enquireSafeLoader = function() {
	if(typeof mediaMatchLoaded !== "undefined")
		$.getScript("../../js/commons/enquire.min.js", loadFastClick, true, false);
	else
		setTimeout(enquireSafeLoader, CHECKING_TIME);
};

var startJSManager = function() {
	if((typeof jQueryLoaded !== "undefined") && (typeof modernizrLoaded !== "undefined")){
		enableCachedScriptLoading();
		if(Modernizr.svg)
			$(".top-bar, .top-bar.expanded").prepend("<div id='logo_wrapper'><a href='index.html'><img id='logo_img' src='../../images/logo_aterbe.svg'></a></div>");
		else
			$(".top-bar, .top-bar.expanded").prepend("<div id='logo_wrapper'><a href='index.html'><img id='logo_img' src='../../images/logo_aterbe.png'></a></div>");
			
		$.getScript("../../js/commons/media.match.min.js", enquireSafeLoader, true, false);
	}
	else
		setTimeout(startJSManager, CHECKING_TIME);
};
// Starts the JS Manager
startJSManager();