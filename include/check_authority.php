<?
	/*
		1 : Super Administrator
		2 : Administrator
		3 : Normal User
	*/
	
	
	function Alert ($pos, $msg) {
		header ("Location: ".$pos."message.php?msg=".$msg);
	}
	
	function Login () {
		if (!isset ($_SESSION))
			session_start ();
		
		return isset ($_SESSION ["UName"]);
	}
	
	function Admin () {
		if (!isset ($_SESSION))
			session_start ();
		
		return GetGradeByName ($_SESSION ["UName"]) <= 2;
	}

	function Apply () {
		$result = mysql_query ("SELECT * FROM systems WHERE id = 'apply'");
		
		$row = mysql_fetch_array ($result);
		
		return $row ["data"] == "yes";
	}
	
	
	function CheckAuthority ($pos) {
		$_MSG_NOLOGIN	= "您没有登录，无权进入此页面！";
		$_MSG_NOTADMIN	= "您不是管理员，无权进入此页面！";
		$_MSG_NOTAPPLY 	= "当前系统没有开放申请，您无权进入此页面！";
		
		if ($pos == "./group.php") {
			if (!Login ())
				Alert ("./", $_MSG_NOLOGIN);
			
			if (!Admin ())
				Alert ("./", $_MSG_NOTADMIN);
		}
		
		if ($pos == "./admin.php") {
			if (!Login ())
				Alert ("./", $_MSG_NOLOGIN);
			
			if (!Admin ())
				Alert ("./", $_MSG_NOTADMIN);
		}
		
		if ($pos == "./action/action_apply.php") {
			if (!Login ())
				Alert ("../", $_MSG_NOLOGIN);
			
			if (!Apply ())
				Alert ("../", $_MSG_NOTAPPLY);
		}
		
		if ($pos == "./action/action_alterkey.php") {
			if (!Login ())
				Alert ("../", $_MSG_NOLOGIN);
		}
		
		if ($pos == "./page/group/action/*") {
			if (!Login ())
				Alert ("../../../", $_MSG_NOLOGIN);
			
			if (!Admin ())
				Alert ("./", $_MSG_NOTADMIN);
		}
		
		if ($pos == "./page/admin/action/*") {
			if (!Login ())
				Alert ("../../../", $_MSG_NOLOGIN);
			
			if (!Admin ())
				Alert ("../../../", $_MSG_NOTADMIN);
		}
	}
	
	function HaveAuthority ($pos) {
		if ($pos == "./group.php")
			return Login () && Admin ();
		
		if ($pos == "./admin.php")
			return Login () && Admin ();
		
		if ($pos == "./action/action_apply.php")
			return Login () && Apply ();
		
		if ($pos == "./action/action_alterkey.php")
			return Login ();
		
		if ($pos == "./page/group/action/*")
			return Login () && Admin ();
		
		if ($pos == "./page/admin/action/*")
			return Login () && Admin ();
		
		return true;
	}
?>
