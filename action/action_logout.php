<?
	include ("../include/basic_functions.php");
	
	include ("../include/database_info.php");
	
	$con = mysql_connect ($DB_Where, $DB_UName, $DB_PWord);
	
	mysql_select_db ("iVolunteer_Excalibur", $con);
	
	include ("../include/check_authority.php");
	
	if (HaveAuthority ("./action/action_logout.php")) {
		if (!isset ($_SESSION))
			session_start ();
		
		$_SESSION ["UName"] = "";
		
		header ("Location: ../index.php");
	} else
		CheckAuthority ("./action/action_logout.php");
	
	mysql_close ($con);
?>
