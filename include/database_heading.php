<?
	include ("./include/database_info.php");
	
	$con = mysql_connect ($DB_Where, $DB_UName, $DB_PWord);

	mysql_set_charset("utf8", $con);
	
	mysql_select_db ("iVolunteer_Excalibur", $con);
?>
