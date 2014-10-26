<?php
	Class TagLibMs extends TagLib{
		protected $tags   =  array(
			  // 定义标签
			'kkk'=>array('attr'=>'a,v','close'=>0), // input标签
		);
		public function _kkk($attr,$content)   {
			$tag    = $this->parseXmlAttr($attr,'kkk');
			$name   =   $tag['a'];
			$id    =    $tag['v'];
			$str = "<img src='__APP__/Index/verify/'/>";
			return $str;
		}


	}


?>