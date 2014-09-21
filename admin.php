<?
	include ("./include/database_heading.php");
	
	include ("./include/basic_functions.php");
	
	include ("./include/check_authority.php");
	CheckAuthority ("./admin.php");
	
	$NavTitle = "后台管理";
	include ("./include/heading_common.php");
?>


<div id="nav-dc"></div>

<div id="container">
	<p><br>
	
	<div id="body" class="c-wrap">
		<div id="page_about">
			<? include ("./page/admin/admin_navigation.php"); ?>
			
			<a id="admin_title"></a>
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">后台管理</h2>
						
						<div class="colorize-content">
						
						<? include ("./page/admin/admin_title.php"); ?>
						
						</div>
					</div>
				</div>
			</div>

			<a id="edit_system"></a>
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">系统设置</h2>
						
						<div class="colorize-content">
						
						<? include ("./page/admin/admin_edit_system.php"); ?>
						
						</div>
					</div>
				</div>
			</div>
			
			<a id="add_group"></a>
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">添加服务队</h2>
						
						<div class="colorize-content">
						
						<? include ("./page/admin/admin_add_group.php"); ?>
						
						</div>
					</div>
				</div>
			</div>

			<a id="out_inform"></a>
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">导出信息</h2>
						
						<div class="colorize-content">
						
						<? include ("./page/admin/admin_out_inform.php"); ?>
						
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