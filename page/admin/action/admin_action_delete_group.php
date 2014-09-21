<?
	include ("../../../include/basic_functions.php");
	
	include ("../../../include/database_info.php");
	
	$con = mysql_connect ($DB_Where, $DB_UName, $DB_PWord);
	
	mysql_select_db ("iVolunteer_Excalibur", $con);

	mysql_set_charset("utf8", $con);

	include ("../../../include/check_authority.php");
	
	if (HaveAuthority ("./page/admin/action/*")) {
		$G_id = $_GET ["id"];
		
		mysql_query ("DELETE FROM groups WHERE id = $G_id");
		
		header ("Location: ../../../index.php");
	} else
		CheckAuthority ("./page/admin/action/*");
	
	mysql_close ($con);
?>
