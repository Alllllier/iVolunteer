<?
	include ("../../../include/basic_functions.php");
	
	include ("../../../include/database_info.php");
	
	$con = mysql_connect ($DB_Where, $DB_UName, $DB_PWord);
	
	mysql_select_db ("iVolunteer_Excalibur", $con);

	include ("../../../include/check_authority.php");
	
	if (HaveAuthority ("./page/admin/action/*")) {
		$G_apply = $_POST ["apply"];
		
		mysql_query ("UPDATE systems SET data = '$G_apply' WHERE id = 'apply'");
		
		header ("Location: ../../../admin.php#edit_system");
	} else
		CheckAuthority ("./page/admin/action/*");
	
	mysql_close ($con);
?>
