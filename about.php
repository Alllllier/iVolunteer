<?
	include ("./include/database_heading.php");
	
	include ("./include/basic_functions.php");
	
	include ("./include/check_authority.php");
	CheckAuthority ("./about.php");
	
	$NavTitle = "关于";
	include ("./include/heading_common.php");
?>


<div id="nav-dc"></div>

<div id="container">
	<p><br>
	
	<div id="body" class="c-wrap">
		<div id="page_about">
			<? include ("./page/about/about_contributors.php"); ?>
			
			<a id="title"></a>
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">关于 iVolunteer</h2>
						
						<div class="colorize-content">
						
						<? include ("./page/about/about_title.php"); ?>
						
						</div>
					</div>
				</div>
			</div>

			<a id="contact"></a>
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">联系</h2>
						
						<div class="colorize-content">
						
						<? include ("./page/about/about_contact.php"); ?>
						
						</div>
					</div>
				</div>
			</div>

			<a id="devlog"></a>
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">开发日志</h2>
						
						<div class="colorize-content">
						
						<? include ("./page/about/about_devlog.php"); ?>
						
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