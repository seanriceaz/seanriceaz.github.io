jQuery(function(){
	var isAtStartState = true;
	jQuery('.filters a').addClass('off');
	jQuery('.home #main').masonry({ 
		columnWidth: 320,
		singleMode: true,
		//animate: true,
		itemSelector: '.post:not(.hidden)'
		});
	jQuery('.filters a').click(function(){
		if (isAtStartState){
				jQuery('.status-publish').fadeOut().addClass('hidden');
				isAtStartState = false;
		}
		var classtohide = "." + jQuery(this).attr('rel');
		if(jQuery(this).hasClass('off')){
			jQuery(classtohide).fadeIn().removeClass('hidden');
			jQuery(this).removeClass('off');
		} else {
			jQuery(classtohide).fadeOut().addClass('hidden');
			jQuery(this).addClass('off');	
		}
		jQuery('.home #main').masonry();
	});
})