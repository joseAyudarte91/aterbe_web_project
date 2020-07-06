/****** GALLERY SECTION'S GLOBAL VARIABLES *******/

// Breakpoint for small screens (it is the same mq of foundation's
var SMALL_SCREEN_BREAKPOINT = "40em";

// variable to store the current language of the page
var currentLanguage;

// This variable will be used to know which json object should be accessed
var lang_prefix_json;

// variable that stores all picture metadata. It can take different values depending on the current language
var roomGalleryAttrArray;

// The variables that will be used as a timer for window resize with zoomer and table height balancer
var zoomerResizeTimer;
var resizeTimer;

var ZOOMER_DIMENSIONS_ADJUST_HEIGHT_COEF = 0.74;
var ZOOMER_DIMENSIONS_ADJUST_WIDTH_COEF = 0.9;

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

// Here the number of picture for each room is indicated. Thus, we are able to identify the correct picture in the gallery
var ROOM_1_GALLERY_SIZE = 4;
var ROOM_2_GALLERY_SIZE = 4;
var ROOM_3_GALLERY_SIZE = 4;
var ROOM_4_GALLERY_SIZE = 4;

// A variable to know which room's pictures is being shown
var lastDisplayedRoomImg = "";

// Bidimensional array with the content of the title and the author, for each image gallery
//Rooms

var roomGalleryAttrArrayES = {
	"rooms_es" : [{"title" : "Dormitorio de la Suite", "author" : "Foto de: Iurgi Inda"}, {"title" : "Mini-sala de la Suite", "author" : "Foto de: Iurgi Inda"}, {"title" : "Baño de la Suite", "author" : "Foto de: Jose Ayudarte"},
										{"title" : "Detalle de la Suite: ", "author" : "Foto de: Iurgi Inda"}, {"title" : "La Habitación 2", "author" : "Foto de: Iurgi Inda"}, {"title" : "Paisaje desde Hab. 2", "author" : "Foto de: Iurgi Inda"},
										{"title" : "Vista aérea de Hab. 2", "author" : "Foto de: Iurgi Inda"}, {"title" : "Baño de Hab. 2", "author" : "Foto de: Iurgi Inda"}, {"title" : "La Habitación 3", "author" : "Foto de: Iurgi Inda"},
										{"title" : "Interior de Hab. 3", "author" : "Foto de: Iurgi Inda"}, {"title" : "Armario de Hab. 3", "author" : "Foto de: Iurgi Inda"}, {"title" : "Baño de Hab. 3", "author" : "Foto de: Iurgi Inda"},
										{"title" : "La Habitación 4", "author" : "Foto de: Iurgi Inda"}, {"title" : "Baño de Hab. 4", "author" : "Foto de: Iurgi Inda"}, {"title" : "Ventana de Hab. 4", "author" : "Foto de: Iurgi Inda"},
										{"title" : "Detalle de Hab. 4", "author" : "Foto de: Iurgi Inda"}
									 ],
	"living_room_es" : [{"title" : "Sala común", "author" : "Foto de: Iurgi Inda"}, {"title" : "Mini-bar", "author" : "Foto de: Iurgi Inda"},
									{"title" : "Comedor", "author" : "Foto de: Iurgi Inda"}, {"title" : "Decoración de salón", "author" : "Foto de: Iurgi Inda"}
								 ],
	"porch_es" : [{"title" : "Vistas desde porche", "author" : "Foto de: Iurgi Inda"}, {"title" : "El porche", "author" : "Foto de: Iurgi Inda"}, {"title" : "Butacas del porche", "author" : "Foto de: Iurgi Inda"},
							{"title" : "Hamacas del porche", "author" : "Foto de: Iurgi Inda"}, {"title" : "Desayuno en el porche", "author" : "Foto de: Iurgi Inda"}, {"title" : "Vista exterior", "author" : "Foto de: Jose Ayudarte"},
							{"title" : "Mesas del porche", "author" : "Foto de: Iurgi Inda"}, {"title" : "Panorámica exterior", "author" : "Foto de: Jose Ayudarte"}, {"title" : "Detalle del porche", "author" : "Foto de: Iurgi Inda"}
						 ],
	"spa_area_es" : [{"title" : "Baño turco y sauna", "author" : "Foto de: Iurgi Inda"}, {"title" : "Tumbonas del Spa", "author" : "Foto de: Iurgi Inda"}, {"title" : "La Zona de Spa", "author" : "Foto de: Iurgi Inda"},
								{"title" : "Aseo del Spa: ", "author" : "Foto de: Iurgi Inda"}, {"title" : "Sauna y baño turco", "author" : "Foto de: Iurgi Inda"}, {"title" : "Sala de masajes", "author" : "Foto de: Iurgi Inda"},
								{"title" : "Sauna, interior", "author" : "Foto de: Haritz Larrinaga"}, {"title" : "Baño turco, interior", "author" : "Foto de: Haritz Larrinaga"}
							 ],
	"garden_es" : [{"title" : "El jardín", "author" : "Foto de: Iurgi Inda"}, {"title" : "Setos del jardín", "author" : "Foto de: Jose Ayudarte"}, {"title" : "Vistas del jardín", "author" : "Foto de: Jose Ayudarte"},
							{"title" : "Paisaje del jardín", "author" : "Foto de: Jose Ayudarte"}, {"title" : "Decoración del jardín", "author" : "Foto de: Iurgi Inda"}
						 ],
	"facade_es" : [{"title" : "Fachada principal", "author" : "Foto de: Jose Ayudarte"}, {"title" : "Vistas del parking", "author" : "Foto de: Jose Ayudarte"}, {"title" : "Caserío nevado", "author" : "Foto de: Jose Ayudarte"},
							 {"title" : "Fachada, vista lateral", "author" : "Foto de: Jose Ayudarte"}
							],
	"environment_es" : [{"title" : "Sendero del entorno", "author" : "Foto de: Haritz Larrinaga"}, {"title" : "Landa", "author" : "Foto de: Haritz Larrinaga"}, {"title" : "Urkiola", "author" : "Foto de: Jose Ayudarte"},
							 {"title" : "Aitzorrotz", "author" : "Foto de: Jose Ayudarte"}, {"title" : "Vía verde hacia Landa", "author" : "Foto de: Haritz Larrinaga"}, {"title" : "Bosque del sendero", "author" : "Foto de: Haritz Larrinaga"},
							 {"title" : "Árbol del sendero", "author" : "Foto de: Haritz Larrinaga"}, {"title" : "Paseo por la montaña", "author" : "Foto de: Haritz Larrinaga"}, {"title" : "Aránzazu", "author" : "Foto de: Jose Ayudarte"}
							]
};

var roomGalleryAttrArrayEN = {
	"rooms_en" : [{"title" : "Bedroom of the Suite", "author" : "Author: Iurgi Inda"}, {"title" : "Small living room of the Suite", "author" : "Author: Iurgi Inda"}, {"title" : "Bathroom of the Suite", "author" : "Author: Jose Ayudarte"},
										{"title" : "Detail of the Suite: ", "author" : "Author: Iurgi Inda"}, {"title" : "The Room 2", "author" : "Author: Iurgi Inda"}, {"title" : "Views from the Room 2", "author" : "Author: Iurgi Inda"},
										{"title" : "Aerial view from the Room 2", "author" : "Author: Iurgi Inda"}, {"title" : "Bathroom of the Room 2", "author" : "Author: Iurgi Inda"}, {"title" : "The Room 3", "author" : "Author: Iurgi Inda"},
										{"title" : "Inside the Room 3", "author" : "Author: Iurgi Inda"}, {"title" : "Closet of the Room 3", "author" : "Author: Iurgi Inda"}, {"title" : "Bathroom of the Room 3", "author" : "Author: Iurgi Inda"},
										{"title" : "The Room 4", "author" : "Author: Iurgi Inda"}, {"title" : "Bathroom of the Room 4", "author" : "Author: Iurgi Inda"}, {"title" : "Window of the Room 4", "author" : "Author: Iurgi Inda"},
										{"title" : "Detail of the Room 4", "author" : "Author: Iurgi Inda"}
						],
	"living_room_en" : [{"title" : "The living room", "author" : "Author: Iurgi Inda"}, {"title" : "The mini-bar", "author" : "Author: Iurgi Inda"},
										{"title" : "The dining room: ", "author" : "Author: Iurgi Inda"}, {"title" : "A decoration", "author" : "Author: Iurgi Inda"}
									],
	"porch_en" : [{"title" : "Views from the porch", "author" : "Author: Iurgi Inda"}, {"title" : "The porch", "author" : "Author: Iurgi Inda"}, {"title" : "Armchairs of the porch", "author" : "Author: Iurgi Inda"},
							{"title" : "Hammocks of the porch: ", "author" : "Author: Iurgi Inda"}, {"title" : "Breakfast in the porch", "author" : "Author: Iurgi Inda"}, {"title" : "Outside view", "author" : "Author: Jose Ayudarte"},
							{"title" : "Tables of the porch", "author" : "Author: Iurgi Inda"}, {"title" : "Landscape", "author" : "Author: Jose Ayudarte"}, {"title" : "Detail of the porch", "author" : "Author: Iurgi Inda"}
						],
	"spa_area_en" : [{"title" : "Turkish Bath and sauna", "author" : "Author: Iurgi Inda"}, {"title" : "Deck-chairs of the Spa", "author" : "Author: Iurgi Inda"}, {"title" : "The Spa Area", "author" : "Author: Iurgi Inda"},
								{"title" : "Toilet of the Spa Area: ", "author" : "Author: Iurgi Inda"}, {"title" : "Sauna and Turkish Bath", "author" : "Author: Iurgi Inda"}, {"title" : "Massage room", "author" : "Author: Iurgi Inda"},
								{"title" : "Inside the sauna", "author" : "Author: Haritz Larrinaga"}, {"title" : "Inside the Turkish Bath", "author" : "Author: Haritz Larrinaga"}
							 ],
	"garden_en" : [{"title" : "The garden", "author" : "Author: Iurgi Inda"}, {"title" : "Hedges from the garden", "author" : "Author: Jose Ayudarte"}, {"title" : "Views from the garden", "author" : "Author: Jose Ayudarte"},
							{"title" : "Views from the garden: ", "author" : "Author: Jose Ayudarte"}, {"title" : "Decoration of the garden", "author" : "Author: Iurgi Inda"}
						 ],
	"facade_en" : [{"title" : "Main facade", "author" : "Author: Jose Ayudarte"}, {"title" : "Views from the parking", "author" : "Author: Jose Ayudarte"}, {"title" : "Snow time", "author" : "Author: Jose Ayudarte"},
							 {"title" : "Facade, sideway view: ", "author" : "Author: Jose Ayudarte"}
						 ],
	"environment_en" : [{"title" : "Path of the environment", "author" : "Author: Haritz Larrinaga"}, {"title" : "Landa", "author" : "Author: Haritz Larrinaga"}, {"title" : "Urkiola", "author" : "Author: Jose Ayudarte"},
										{"title" : "Aitzorrotz", "author" : "Author: Jose Ayudarte"}, {"title" : "Green way to Landa", "author" : "Author: Haritz Larrinaga"}, {"title" : "Forest of the path", "author" : "Author: Haritz Larrinaga"},
										{"title" : "A tree of the path", "author" : "Author: Haritz Larrinaga"}, {"title" : "Walking in the mountain", "author" : "Author: Haritz Larrinaga"}, {"title" : "Arantzazu", "author" : "Author: Jose Ayudarte"}
									]
};

var roomGalleryAttrArrayEU = {
	"rooms_eu" : [{"title" : "Suite logela", "author" : "Egilea: Iurgi Inda"}, {"title" : "Suite logelaren egongela txikia", "author" : "Egilea: Iurgi Inda"}, {"title" : "Suite logelaren komuna", "author" : "Egilea: Jose Ayudarte"},
										{"title" : "Suite logelaren xehetasunak: ", "author" : "Egilea: Iurgi Inda"}, {"title" : "Logela 2", "author" : "Egilea: Iurgi Inda"}, {"title" : "Logela 2ko paisaia", "author" : "Egilea: Iurgi Inda"},
										{"title" : "Logela 2ren airetiko ikuspegia", "author" : "Egilea: Iurgi Inda"}, {"title" : "Logela 2ko komuna", "author" : "Egilea: Iurgi Inda"}, {"title" : "Logela 3", "author" : "Egilea: Iurgi Inda"},
										{"title" : "Logela 3 barrutik", "author" : "Egilea: Iurgi Inda"}, {"title" : "Logela 3ko armairua", "author" : "Egilea: Iurgi Inda"}, {"title" : "Logela 3ko komuna", "author" : "Egilea: Iurgi Inda"},
										{"title" : "Logela 4", "author" : "Egilea: Iurgi Inda"}, {"title" : "Logela 4ko komuna", "author" : "Egilea: Iurgi Inda"}, {"title" : "Logela 4ko leihoa", "author" : "Egilea: Iurgi Inda"},
										{"title" : "Logela 4ko xehetasunak", "author" : "Egilea: Iurgi Inda"}
									],
	"living_room_eu" : [{"title" : "Egongela", "author" : "Egilea: Iurgi Inda"}, {"title" : "Mini-bar", "author" : "Egilea: Iurgi Inda"},
									{"title" : "Jangela: ", "author" : "Egilea: Iurgi Inda"}, {"title" : "Egongelaren dekorazioa", "author" : "Egilea: Iurgi Inda"}
								 ],
	"porch_eu" : [{"title" : "Bistak portxetik", "author" : "Egilea: Iurgi Inda"}, {"title" : "Portxea", "author" : "Egilea: Iurgi Inda"}, {"title" : "Portxeko besaulkiak ", "author" : "Egilea: Iurgi Inda"},
							{"title" : "Portxeko hamakak: ", "author" : "Egilea: Iurgi Inda"}, {"title" : "Gosaria portxean", "author" : "Egilea: Iurgi Inda"}, {"title" : "Kanpoko bistak", "author" : "Egilea: Jose Ayudarte"},
							{"title" : "Portxeko mahaiak", "author" : "Egilea: Iurgi Inda"}, {"title" : "Kanpoko panoramikoa", "author" : "Egilea: Jose Ayudarte"}, {"title" : "Portxeko xehetasunak", "author" : "Egilea: Iurgi Inda"}
						 ],
	"spa_area_eu" : [{"title" : "Turkiar Bainua eta sauna", "author" : "Egilea: Iurgi Inda"}, {"title" : "Spa eremuko etzaulkiak", "author" : "Egilea: Iurgi Inda"}, {"title" : "Spa eremua", "author" : "Egilea: Iurgi Inda"},
								{"title" : "Spa eremuko komuna: ", "author" : "Egilea: Iurgi Inda"}, {"title" : "Sauna eta Turkiar Bainua", "author" : "Egilea: Iurgi Inda"}, {"title" : "Masajeendako gela", "author" : "Egilea: Iurgi Inda"},
								{"title" : "Sauna, barrualdea", "author" : "Egilea: Haritz Larrinaga"}, {"title" : "Turkiar Bainua, barrualdea", "author" : "Egilea: Haritz Larrinaga"}
							 ],
	"garden_eu" : [{"title" : "Lorategia", "author" : "Egilea: Iurgi Inda"}, {"title" : "Lorategia", "author" : "Egilea: Jose Ayudarte"}, {"title" : "Bistak lorategitik", "author" : "Egilea: Jose Ayudarte"},
							{"title" : "Paisaia lorategitik: ", "author" : "Egilea: Jose Ayudarte"}, {"title" : "Lorategiko xehetasunak", "author" : "Egilea: Iurgi Inda"}
						 ],
	"facade_eu" : [{"title" : "Etxeaurrea", "author" : "Egilea: Jose Ayudarte"}, {"title" : "Bistak aparkalekutik", "author" : "Egilea: Jose Ayudarte"}, {"title" : "Baserria elurrakin", "author" : "Egilea: Jose Ayudarte"},
							 {"title" : "Etxeaurrea, alboko aldea: ", "author" : "Egilea: Jose Ayudarte"}
							],
	"environment_eu" : [{"title" : "Inguruneko bidea", "author" : "Egilea: Haritz Larrinaga"}, {"title" : "Landa", "author" : "Egilea: Haritz Larrinaga"}, {"title" : "Urkiola", "author" : "Egilea: Jose Ayudarte"},
							 {"title" : "Aitzorrotz", "author" : "Egilea: Jose Ayudarte"}, {"title" : "Bide Berdea Landaraino", "author" : "Egilea: Haritz Larrinaga"}, {"title" : "Bideko basoa", "author" : "Egilea: Haritz Larrinaga"},
							 {"title" : "Bideko zuhaitzak", "author" : "Egilea: Haritz Larrinaga"}, {"title" : "Ibilaldia menditik", "author" : "Egilea: Haritz Larrinaga"}, {"title" : "Arantzazu", "author" : "Egilea: Jose Ayudarte"}
							]
};

// These variables are used to know when the image resolution breakpoint has been matched and unmatched by the media query
var SMALL_RES_CODE = 0;
var BIG_RES_CODE = 1;
var current_img_res_size_code = SMALL_RES_CODE;
var isImgResCodeChanged = false;

// This variable will determine the gallery being seen by the user (if there is)
var currentGalleryPath = null;
var currentGallerySize = 0;

// This is for the title and author of the current shown image
var currentGallery = null;

// Currently displayed gallery index
var zoomer_img_index = 1;

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


/****** GALLERY SECTION'S NAMED CUSTOM FUNCTIONS ******/

setCurrentLanguage = function() {
	if(typeof currentLanguage === "undefined"){
		var htmlElement = document.querySelector("html");
		currentLanguage = $(htmlElement).attr("lang");
		lang_prefix_json = "_" + currentLanguage;
	}
};

// Switch the attribute array of image gallery to its appropriate language
var setRoomGalleryAttrArray = function() {
	if(currentLanguage === "es")
		roomGalleryAttrArray = roomGalleryAttrArrayES;
	else if(currentLanguage === "en")
		roomGalleryAttrArray = roomGalleryAttrArrayEN;
	else if(currentLanguage === "eu")
		roomGalleryAttrArray = roomGalleryAttrArrayEU;
};

var setZoomerControlsLanguage = function(attrType) {
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
};

// Set language specific settings
setCurrentLanguage();
setRoomGalleryAttrArray();

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
			var targetGal = "";
			
			if(currentGalleryPath == "rooms/aterbe-room")
				targetGal = "../../images/gallery/big/" + lastDisplayedRoomImg + "-" + zoomer_img_index + ".jpg";
			else
				targetGal = "../../images/gallery/big/" + currentGalleryPath + "-" + zoomer_img_index + ".jpg";
				
			$(".zoomer_custom").zoomer("load", targetGal);
		}
    $(".zoomer_custom").zoomer("resize");
  }
};
// -- END -- ZOOMER

// -- RESIZER MAIN FUNCTION
var resizeEventsCaller = function() {
	// Call to the zoomer resizer
	if($("#rooms_and_gallery_modal").css("visibility") != "hidden")
		resizeZoomerWrapper();
};
// -- END -- RESIZER MAIN FUNCTION

varsAndCustomFuncsLoaded = true;