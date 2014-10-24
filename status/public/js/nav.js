		var oNavMain=document.getElementById('nav_main'),
			oNav=document.getElementById('nav_left').getElementsByTagName('ul')[0],
			nav=document.getElementById('nav_left'),
			navNum=false;
		oNavMain.onmouseover=function(){
			if(navNum==true){
				return false;
			}else{
				navS();
			}
			stopBubble(this);
		}
		oNavMain.onclick=function(){
			if(navNum==true){
				var arr=oNav.getElementsByTagName('li');
				for(var i=0;i<arr.length;i++){
					arr[i].style.width='60px';
				}
			}
			navS();
			stopBubble(this);
		};
		function navS(){
			if(navNum==false){
				nav.style.left=0;
				navNum=true;
			}else{
				nav.style.left='-60px';
				navNum=false;
			}
		}
	    function stopBubble(e){  
	        if(e&&e.stopPropagation){  
	            e.stopPropagation();  
	        }else{   
	            window.event.cancelBubble = true;  
	        }  
    	}  
		oNav.onmouseover=function(){
			var arr=oNav.getElementsByTagName('li');
			for(var i=0;i<arr.length;i++){
				arr[i].style.width='150px';
			}
		}
		oNav.onclick=function(){
			stopBubble(this);
		}
		document.onclick=function(){
			var arr=oNav.getElementsByTagName('li');
			for(var i=0;i<arr.length;i++){
				arr[i].style.width='60px';
			}
			if(navNum==false){
				return false;
			}else{
				navS();
			}
		}