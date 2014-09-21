<?
	function GetNameByID ($idx) {
		$result = mysql_query ("SELECT * FROM users WHERE id = $idx");
		
		$row = mysql_fetch_array ($result);

		return $row ["name"];
	}
	
	function GetGenderByName ($name) {
		$result = mysql_query ("SELECT * FROM users WHERE name = '$name'");
		
		$row = mysql_fetch_array ($result);

		return $row ["gender"];
	}

	function GetGradeByName ($name) {
		if (!isset($name) || !$name) return 3;
		$result = mysql_query ("SELECT * FROM users WHERE name = '$name'");
		
		$row = mysql_fetch_array ($result);

		return $row ["grade"];
	}

	function GetGroup1ByName ($name) {
		$result = mysql_query ("SELECT * FROM users WHERE name = '$name'");
		
		$row = mysql_fetch_array ($result);

		return $row ["belong1"];
	}

	function GetGroup2ByName ($name) {
		$result = mysql_query ("SELECT * FROM users WHERE name = '$name'");
		
		$row = mysql_fetch_array ($result);

		return $row ["belong2"];
	}

	function GetIDByName ($name) {
		$result = mysql_query ("SELECT * FROM users WHERE name = '$name'");
		
		$row = mysql_fetch_array ($result);

		return $row ["id"];
	}
	
	function GetGenderName ($gender) {
		switch ($gender) {
			case 1 : return "男";
			case 2 : return "女";
			default : return "未知";
		}
	}
	
	function GetGrade ($id) {
		return ($id - $id % 10000) / 10000;
	}
	
	function GetClass ($id) {
		return (($id - $id % 100) / 100) % 100;
	}
	
	function GetGradeClass ($id) {
		return ($id - $id % 100) / 100;
	}

	function GetNumber ($id) {
		return $id % 100;
	}
?>
