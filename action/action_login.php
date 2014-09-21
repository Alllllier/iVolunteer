<?
	include ("../include/basic_functions.php");
	
	include ("../include/database_info.php");
	
	$con = mysql_connect ($DB_Where, $DB_UName, $DB_PWord);
	
	mysql_select_db ("iVolunteer_Excalibur", $con);

	mysql_set_charset("utf8", $con);
	
	include ("../include/check_authority.php");
	
	if (HaveAuthority ("./action/action_login.php")) {
		$G_name = $_POST ["UName"];
		
		$result = mysql_query ("SELECT * FROM users WHERE name = '$G_name'");
		
		$row = mysql_fetch_array ($result);
		
		if (!$_POST ["UName"] || !$_POST ["PWord"] || $row ["key"] != $_POST ["PWord"])
			header ("Location: ../message.php?msg=糟糕啦，您填写的姓名或者密码错误！");
		else {
			if (!isset ($_SESSION))
				session_start ();
			
			$_SESSION ["UName"] = $G_name;
			
			header ("Location: ../index.php");
		}
	} else
		CheckAuthority ("./action/action_login.php");

	mysql_close ($con);
?>
