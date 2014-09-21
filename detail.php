<?
	include ("./include/database_heading.php");
	
	include ("./include/basic_functions.php");
	
	include ("./include/check_authority.php");
	CheckAuthority ("./detail.php");
	
	$G_id = $_GET ["id"];
	
	$result = mysql_query ("SELECT * FROM groups WHERE id = $G_id");
	
	$row = mysql_fetch_array ($result);

	$NavTitle = $row ["name"];
	include ("./include/heading_common.php");
?>	


<div id="nav-dc"></div>

<div id="container">
	<p><br>
	
	<div id="body" class="c-wrap">
		<div id="page_problems_all">
			<? include ("./page/detail/detail_detail.php"); ?>
			
			<div class="layout-col">
				<div class="layout-col-left">
					<div class="layout-col-content">
						<? include ("./page/detail/detail_waitlist.php"); ?>
					</div>
				</div>
				
				<div class="layout-col-right">
					<div class="layout-col-content">
						<div id="res" class="widget-node block">
							<div class="block-content">
								<? include ("./page/detail/detail_navigation.php"); ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<?
	include ("./include/bottom.php");
	
	include ("./include/database_bottom.php");
?>