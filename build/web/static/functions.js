
function activeMenu(id){
	var menus = [
                        'inicio', 
                        'informacion', 
                        'acerca',
			'tecnologias'
                    ];
	for (var i in menus) {
		try {
                    if(menus[i]){
                                $("#" + menus[i]).removeClass("active");
                    }
		}catch(ex) {
		}
	}
    try{
        $("#" + id).addClass("active");
    }catch(ex){}
    return;	
}