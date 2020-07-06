/**** CLOUD CAROUSEL SPECIFIC CUSTOM FUNCTIONS (USED ONLY FOR LARGE SCREEN DEVICES) ****/

var createCloudCarousel = function(targetSize) {
	if(currentLanguage === "es"){
			// Titles in Spanish
			var big_title_carousel = "Bienvenido a la Casa Rural Aterbe";
			var title_carousel_1 = "Desayuna en el porche";
			var title_carousel_2 = "Ven a la Suite, ideal para familias";
			var title_carousel_3 = "Sala común rústica con minibar y estufa de pellets";
			var title_carousel_4 = "Relájate en el Spa con baño turco y sauna";
			var title_carousel_5 = "Da un paseo entre hermosos parajes";
			var title_carousel_6 = "Cada habitación es única";
			var title_carousel_7 = "Contempla el valle de Léniz mientras te relajas";
			var title_carousel_8 = "Parking exclusivo para clientes";
			var title_carousel_9 = "Visita el pantano de Landa";
			var title_carousel_10 = "Sesiones de Spa totalmente privadas";
			
			// Alt attributes in Spanish
			var alt_carousel_1 = "Miniatura: Porche";
			var alt_carousel_2 = "Miniatura: Suite";
			var alt_carousel_3 = "Miniatura: Sala común";
			var alt_carousel_4 = "Miniatura: Zona Spa";
			var alt_carousel_5 = "Miniatura: Alrededores";
			var alt_carousel_6 = "Miniatura: Habitación doble";
			var alt_carousel_7 = "Miniatura: Hamacas del porche";
			var alt_carousel_8 = "Miniatura: Fachada principal";
			var alt_carousel_9 = "Miniatura: Pantano de Landa";
			var alt_carousel_10 = "Miniatura: Tumbonas de la Zona Spa";
	}
	else if(currentLanguage === "en"){
			// Titles in English
			var big_title_carousel = "Welcome to Aterbe Rural House";
			var title_carousel_1 = "Breakfast in the porch";
			var title_carousel_2 = "The Suite room, ideal for families";
			var title_carousel_3 = "Living room with minibar and pellets stove";
			var title_carousel_4 = "Relax in the Spa Area with Sauna and Turkish Bath";
			var title_carousel_5 = "Walk along a beatiful and natural scene";
			var title_carousel_6 = "Each room is unique";
			var title_carousel_7 = "Enjoy the views of the Leintz Valley";
			var title_carousel_8 = "Parking exclusive for customers";
			var title_carousel_9 = "Visit the marsh of Landa";
			var title_carousel_10 = "Private Spa sessions";
			
			// Alt attributes in Spanish
			var alt_carousel_1 = "Thumbnail: The Porch";
			var alt_carousel_2 = "Thumbnail: Suite room";
			var alt_carousel_3 = "Thumbnail: The Living room";
			var alt_carousel_4 = "Thumbnail: The Spa Area";
			var alt_carousel_5 = "Thumbnail: The Environment";
			var alt_carousel_6 = "Thumbnail: The Double room";
			var alt_carousel_7 = "Thumbnail: Hammocks of the porch";
			var alt_carousel_8 = "Thumbnail: The main facade";
			var alt_carousel_9 = "Thumbnail: The Marsh of Landa";
			var alt_carousel_10 = "Thumbnail: Deck-chairs of the Spa Area";
	}
	else if(currentLanguage === "eu"){
			// Titles in Basque
			var big_title_carousel = "Ongietorri Aterbe Landa-etxera";
			var title_carousel_1 = "Gosaldu portxean paisaiari begira";
			var title_carousel_2 = "Etorri Suite logelara, familiendako aproposena";
			var title_carousel_3 = "Egongela minibar eta pellet berogailuarekin";
			var title_carousel_4 = "Atsedena hartu gure sauna eta Turkiar Bainuan";
			var title_carousel_5 = "Bertako ingurune naturalean murgildu";
			var title_carousel_6 = "Logela bakoitzak sentsazio ezberdinak sorrarazten ditu";
			var title_carousel_7 = "Gozatu Leintz bailarako paisai ederretaz";
			var title_carousel_8 = "Bezeroentzako mugatutako aparkalekua";
			var title_carousel_9 = "Bisitatu Landako urtegia";
			var title_carousel_10 = "Spa saio pribatuak";
			
			// Alt attributes in spanish
			var alt_carousel_1 = "Miniatura: Portxea";
			var alt_carousel_2 = "Miniatura: Suite logela";
			var alt_carousel_3 = "Miniatura: Egongela";
			var alt_carousel_4 = "Miniatura: Spa eremua";
			var alt_carousel_5 = "Miniatura: Ingurumena";
			var alt_carousel_6 = "Miniatura: Logela bikoitza";
			var alt_carousel_7 = "Miniatura: Portxeko hamakak";
			var alt_carousel_8 = "Miniatura: Etxeaurrea";
			var alt_carousel_9 = "Miniatura: Landako urtegia";
			var alt_carousel_10 = "Miniatura: Spa eremuko etzaulkiak";
	}
	var cloudCarousel = base_placeholder;
	cloudCarousel += "<div id='welcome_title_large'><h2 class='h2_big_size'>" + big_title_carousel + "</h2></div>";
	cloudCarousel += "<div id='carousel_wrapper' class='large-12'><div id='cloud_carousel'>";
	cloudCarousel += "<a href='../../images/index/extended_carousel/1.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_1 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/1.jpg' alt='" + alt_carousel_1 + "' title='" + title_carousel_1 + "'/></a>";
	cloudCarousel += "<a href='../../images/index/extended_carousel/2.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_2 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/2.jpg' alt='" + alt_carousel_2 + "' title='" + title_carousel_2 + "'/></a>";
	cloudCarousel += "<a href='../../images/index/extended_carousel/3.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_3 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/3.jpg' alt='" + alt_carousel_3 + "' title='" + title_carousel_3 + "'/></a>";
	cloudCarousel += "<a href='../../images/index/extended_carousel/4.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_4 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/4.jpg' alt='" + alt_carousel_4 + "' title='" + title_carousel_4 + "'/></a>";
	cloudCarousel += "<a href='../../images/index/extended_carousel/5.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_5 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/5.jpg' alt='" + alt_carousel_5 + "' title='" + title_carousel_5 + "'/></a>";
	cloudCarousel += "<a href='../../images/index/extended_carousel/6.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_6 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/6.jpg' alt='" + alt_carousel_6 + "' title='" + title_carousel_6 + "'/></a>";
	if(targetSize === "medium") {
		cloudCarousel += "<a href='../../images/index/extended_carousel/7.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_7 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/7.jpg' alt='" + alt_carousel_7 + "' title='" + title_carousel_7 + "'/></a>";
		cloudCarousel += "<a href='../../images/index/extended_carousel/8.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_8 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/8.jpg' alt='" + alt_carousel_8 + "' title='" + title_carousel_8 + "'/></a>";
	}
	if(targetSize === "big") {
		cloudCarousel += "<a href='../../images/index/extended_carousel/9.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_9 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/9.jpg' alt='" + alt_carousel_9 + "' title='" + title_carousel_9 + "'/></a>";
		cloudCarousel += "<a href='../../images/index/extended_carousel/10.jpg' data-lightbox='index_gallery' rel='icon' title='" + title_carousel_10 + "'><img class='cloudcarousel' src='../../images/index/thumbnails/10.jpg' alt='" + alt_carousel_10 + "' title='" + title_carousel_10 + "'/></a>";
	}
	// End of the carousel element
	cloudCarousel += "</div><div id='title_carousel'></div>";
	// Now we add the markup for the buttons
	cloudCarousel += "<center><input id='slider-left-but' type='button' value=''/>";
	cloudCarousel += "<input id='slider-right-but' type='button' value=''/></center></div></div>";
	
	return cloudCarousel;
};

// The function to initialize cloud carousel with passed xPos for centering
var carousel_initializer = function(xCenter){
  var carousel_opts = {			
    reflHeight: 40,
    reflGap:2,
    titleBox: $('#title_carousel'),
    altBox: $('#alt_text_carousel'),
    buttonLeft: $('#slider-left-but'),
    buttonRight: $('#slider-right-but'),
    yRadius:30,
    xPos: xCenter,
    yPos: 32,
    speed:0.15,
		autoRotate: 'left',
		autoRotateDelay: 4500,
		bringToFront: true
  };
  $("#cloud_carousel").CloudCarousel(carousel_opts);
};

/** CUSTOM ADDITION **/
// This variable is used to define at the end of the script that vars and custom functions has been loaded. It helps to avoid race conditions
indexL_screenFuncsLoaded = true;