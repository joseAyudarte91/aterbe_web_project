// These are global variables to check to avoid race conditions
var foundationLoaded;
var fastClickLoaded;
var mediaMatchLoaded;
var activeLinkActivatorLoaded;
var enquireLoaded;
var CHECKING_TIME = 250;
var globalVarsAndFuncsLoaded;

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

var execFoundAndLoadActLinkScr = function() {
	if((typeof foundationLoaded !== "undefined") && (typeof globalVarsAndFuncsLoaded !== "undefined")){
		// Foundation customized JavaScript
		$(document).foundation();
		$.getScript("../../js/commons/activateCurrentLink.js", eventHandlersSafeLoader, true);
	}
	else
		setTimeout(execFoundAndLoadActLinkScr, CHECKING_TIME);
};

var loadFoundationGlobVarsAndFuncs = function() {
	if(typeof fastClickLoaded !== "undefined"){
		$.getScript("../../bower_components/foundation/js/foundation_custom.min.js", function(){ }, true);
		$.getScript("../../js/offers_rules_form_resp/of_rul_form_resp_globVarsAndFuncs.js", execFoundAndLoadActLinkScr, true);
	}
	else
		setTimeout(loadFoundationGlobVarsAndFuncs, CHECKING_TIME);
};

var loadFastClick = function() {
	if(typeof enquireLoaded !== "undefined")
		$.getScript("../../bower_components/fastclick/lib/fastclick.js", loadFoundationGlobVarsAndFuncs, true);
	else
		setTimeout(loadFastClick, CHECKING_TIME);
};

var eventHandlersSafeLoader = function() {
	if(typeof activeLinkActivatorLoaded !== "undefined"){
		$.getScript("../../js/offers_rules_form_resp/of_rul_form_resp_custom_mq.js", function(){ }, true);
		if(typeof stickyFooter !== "undefined")
			setStickyFooter();
	}
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