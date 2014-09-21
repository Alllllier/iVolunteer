<?
	include ("../include/basic_functions.php");
	
	include ("../include/database_info.php");
	
	$con = mysql_connect ($DB_Where, $DB_UName, $DB_PWord);
	
	mysql_select_db ("iVolunteer_Excalibur", $con);

	mysql_set_charset("utf8", $con);
	
	include ("../include/check_authority.php");
	
	if (HaveAuthority ("./action/action_alterkey.php")) {
		if (!isset ($_SESSION))
			session_start ();
		
		$G_name = $_SESSION ["UName"];
		$G_key = $_POST ["key"];
		
		if (!$G_key)
			header ("Location: ../message.php?msg=您设置新密码不能为空！");
		else {
			mysql_query ("UPDATE users SET `key` = '$G_key' WHERE `name` = '$G_name'");

			header ("Location: ./action_logout.php");
		}
	} else
		CheckAuthority ("./action/action_alterkey.php");
	
	mysql_close ($con);
?>
