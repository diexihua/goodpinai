window.onload=function(){
	//alert(document.documentElement.clientHeight );
	oTimer=null;
	var a=1;
	var data=[363,294,180];
	oTimer=setInterval(function(){
		if(a==4){
			clearInterval(oTimer);
		}else{
			document.getElementById('xin'+a).style.opacity=1;
			document.getElementById('xin'+a).style.marginTop=data[a-1]+'px';
			a++;
		}
	},500);
	var body=document.getElementsByTagName('body')[0];
	var arr=new Array();
	var aDiv=body.getElementsByTagName('div');
	var oH=document.documentElement.clientHeight;
	var oW=document.documentElement.clientWidth;
	boxSize();
	window.onresize=function(){
		boxSize();
	}
	function boxSize(){
		document.documentElement.clientHeight<500?oH=640:oH=document.documentElement.clientHeight;
		if(document.documentElement.clientWidth<1000){
			body.style.width='1000px';
		}else{
			body.style.width='100%';
		}
		for(i=1;document.getElementById(i)!=null;i++){
			arr.push(document.getElementById(i));
			var oDiv=document.getElementById(i);
			oDiv.style.height=oH+'px';
		}
	}

	for(var i=0;i<arr.length;i++){
		if(i==0){
			arr[i].onclick=function(num){
				return function(){
					scroll(num+2);
					setTimeout(function(){
						oBoy.style.webkitTransform='rotate(0deg)';
						oBoy.style.oTransform='rotate(0deg)';
						oBoy.style.msTransform='rotate(0deg)';
						oBoy.style.mozTransform='rotate(0deg)';
						oBoy.style.transform='rotate(0deg)';
					},1000);
				}
			}(i);
		}else if(a==1){
			arr[i].onclick=function(num){
				return function(){
					scroll(num+2);
					setTimeout(function(){
						oGirl.style.height=220+'px';
						oGirl.style.width=159+'px';
					},800);
				}
			}(i);

		}else{
			arr[i].onclick=function(num){
				return function(){
					scroll(num+2);
				}
			}(i);	
		}
	}
	var oBoy=document.getElementById('boy');
	var oGirl=document.getElementById('girl');

}