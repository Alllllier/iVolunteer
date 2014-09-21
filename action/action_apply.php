<?
	include ("../include/basic_functions.php");
	
	include ("../include/database_info.php");
	
	$con = mysql_connect ($DB_Where, $DB_UName, $DB_PWord);
	
	mysql_select_db ("iVolunteer_Excalibur", $con);

	mysql_set_charset("utf8", $con);
	
	include ("../include/check_authority.php");
	
	if (HaveAuthority ("./action/action_apply.php")) {
		if (!isset ($_SESSION))
			session_start ();
		
		$G_belong1 = $_POST ["belong1"];
		$G_belong2 = $_POST ["belong2"];
		$G_name = $_SESSION ["UName"];
		
		if ($G_belong1 == $G_belong2)
			header ("Location: ../message.php?msg=第一志愿和第二志愿不能相同，请修改后再申请！");
		else {
			mysql_query ("UPDATE users SET belong1 = $G_belong1, belong2 = $G_belong2 WHERE name = '$G_name'");
			
			header ("Location: ../index.php");
		}
	} else
		CheckAuthority ("./action/action_apply.php");
	
	mysql_close ($con);
?>
