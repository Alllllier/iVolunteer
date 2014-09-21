<?
	include ("./include/database_heading.php");
	
	include ("./include/basic_functions.php");
	
	include ("./include/check_authority.php");
	CheckAuthority ("./group.php");
	
	$G_id = $_GET ["id"];
	
	$result = mysql_query ("SELECT * FROM groups WHERE id = $G_id");
	
	$row = mysql_fetch_array ($result);

	$NavTitle = "管理服务队 - ".$row ["name"];
	include ("./include/heading_common.php");
?>	


<div id="nav-dc"></div>

<div id="container">
	<p><br>
	
	<div id="body" class="c-wrap">
		<div id="page_problems_all">
			<? include ("./page/group/group_detail.php"); ?>

			<div class="layout-col">
				<div class="layout-col-left">
					<div class="layout-col-content">
						<? include ("./page/group/group_waitlist1.php"); ?>
						
						<? include ("./page/group/group_waitlist2.php"); ?>
					</div>
				</div>
				
				<div class="layout-col-right">
					<? include ("./page/group/group_navigation.php"); ?>
				</div>
			</div>
		</div>
	</div>
</div>

<?
	include ("./include/bottom.php");
	
	include ("./include/database_bottom.php");
?>