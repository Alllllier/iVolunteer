<?
	include ("../../../include/basic_functions.php");
	
	include ("../../../include/database_info.php");
	
	$con = mysql_connect ($DB_Where, $DB_UName, $DB_PWord);
	
	mysql_select_db ("iVolunteer_Excalibur", $con);

	mysql_set_charset("utf8", $con);

	include ("../../../include/check_authority.php");
	
	if (HaveAuthority ("./page/admin/action/*")) {
		$G_filename = $_POST ["filename"];
		
		$handle = fopen ("../../../temp/".$G_filename.".csv", "wb");
		
		
		$result = mysql_query ("SELECT * FROM groups");

		//fwrite ($handle, 0);

		while ($row = mysql_fetch_array ($result)) {
			$G_id = $row ["id"];
			
			fwrite ($handle, $row ["name"].",第一志愿\r\n");
			
			$resultx = mysql_query ("SELECT * FROM users WHERE belong1 = $G_id");
			
			while ($rowx = mysql_fetch_array ($resultx))
				fwrite ($handle, $rowx ["id"].",".$rowx ["name"].",".GetGenderName ($rowx ["gender"])."\r\n");
			
			
			fwrite ($handle, "\r\n");
			
			
			fwrite ($handle, $row ["name"].",第二志愿\r\n");
			
			$resultx = mysql_query ("SELECT * FROM users WHERE belong2 = $G_id");
			
			while ($rowx = mysql_fetch_array ($resultx))
				fwrite ($handle, $rowx ["id"].",".$rowx ["name"].",".GetGenderName ($rowx ["gender"])."\r\n");
			
			
			fwrite ($handle, "\r\n");
		}
		
		fclose ($handle);
		
		//sleep(3000);
		
		header ("Content-Type: application/download");
		header ("Content-Type: text/csv;");
		header ('Content-Disposition: attachment; filename="'.$G_filename.'.csv"');
		//header ("Content-Encoding: gb2132");
		

		$ans = "../../../temp/".$G_filename.".csv";
		//$anstemp = "../../../temp/"."temp".".csv";

		//exec("iconv -f UTF8 -t gb2312 " . $ans . " > ../../../temp/temp.csv");

		//exec("rm " . $ans);
		//exec("mv " . $anstemp . " " . $ans);
		readfile($ans);
		
		exit (); 	
	} else
		CheckAuthority ("./page/admin/action/*");
	
	mysql_close ($con);
?>
