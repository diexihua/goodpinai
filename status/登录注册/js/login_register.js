window.onload = function(){
	var oWrap = document.getElementById('login_main_wrap'),
		oTab = document.getElementById('login_tab'),
		oLoginMain = document.getElementById('login_main'),
		oRgsMain = document.getElementById('rgs_main'),
		now = 0,
		iIndex = 2;

	oTab.onclick = function(){
		if(now==0){
			now=-180;
			iIndex+=1;
			setTimeout(function(){oRgsMain.style.zIndex = iIndex;}, 650);
			oTab.innerHTML = '登录';
		}else{
			now=0;
			iIndex+=1;
			setTimeout(function(){oLoginMain.style.zIndex = iIndex;}, 650);
			oTab.innerHTML = '注册';
		}
		oWrap.style.webkitTransform = 'rotateY('+now+'deg)';
		oWrap.style.oTransform = 'rotateY('+now+'deg)';
		oWrap.style.mozTransform = 'rotateY('+now+'deg)';
		oWrap.style.msTransform = 'rotateY('+now+'deg)';
		oWrap.style.transform = 'rotateY('+now+'deg)';
	}
}