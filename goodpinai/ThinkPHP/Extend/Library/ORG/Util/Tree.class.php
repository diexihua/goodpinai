<?php
	class Tree{
		static public $nodelist=array();
		public function create_node($data,$pid=0){
			foreach($data as $k=>$v){
				if($v['pid']==$pid){
					self::$nodelist[]=$v;
					unset($data[$k]);
					self::create_node($data,$v['id']);
				}
			}
			return self::$nodelist;
		}
	}

?>