<?
	include ("../../../include/basic_functions.php");
	
	include ("../../../include/database_info.php");
	
	$con = mysql_connect ($DB_Where, $DB_UName, $DB_PWord);
	
	mysql_select_db ("iVolunteer_Excalibur", $con);

	mysql_set_charset("iVolunteer_Excalibur", $con);

	include ("../../../include/check_authority.php");
	
	if (HaveAuthority ("./page/admin/action/*")) {
		$G_name = $_POST ["name"];
		$G_detail = $_POST ["detail"];
		
		
		$result = mysql_query ("SELECT * FROM groups");

		$G_id = 0;
		while ($row = mysql_fetch_array ($result))
			if ($G_id < $row ["id"])
				$G_id = $row ["id"];

		$G_id++;
		
		mysql_query ("INSERT INTO groups (`id`, `name`, `detail`) VALUES ('$G_id', '$G_name', '$G_detail')");
		
		header ("Location: ../../../detail.php?id=".$G_id);
	} else
		CheckAuthority ("./page/admin/action/*");
	
	mysql_close ($con);
?>
