$(document).ready(function(){	
	
		$(".home_section_themes").hover(function(){
			$(".home_section_icon_themes").animate({ backgroundColor: "#3999b4" }, 400);
			}, function(){
			$(".home_section_icon_themes").animate({ backgroundColor: "#e9e9e9" }, 400);
		})
		
		$(".home_section_support").hover(function(){
			$(".home_section_icon_support").animate({ backgroundColor: "#79ab50" }, 400);
			}, function(){
			$(".home_section_icon_support").animate({ backgroundColor: "#e9e9e9" }, 400);
		})

			
});