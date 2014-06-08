// This code will add an event listener to each anchor of the topbar after being dynamically replaced by "interchange"
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
});

// This variable is used to know if this script will be loaded at the time of checking it in the JS manager
activeLinkActivatorLoaded = true;