<?
	include ("./include/database_heading.php");
	
	include ("./include/basic_functions.php");
	
	include ("./include/check_authority.php");
	CheckAuthority ("./message.php");
	
	$NavTitle = "出错啦";
	include ("./include/heading_common.php");
?>

<div id="nav-dc"></div>

<div id="container">
	<p><br>
	
	<div id="body" class="c-wrap">
		<div id="page_error">
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">出错啦！</h2>
						
						<div class="colorize-content">
							<p><b>访问时出错了:</b></p>
							
							<blockquote>
								<p><?=$_GET ["msg"]?></p>
							</blockquote>
							
							<p><a href="javascript:history.back(-1)">猛击这里返回上一页</a></p>
							<p><a href="./index.php">轻点这里返回首页</a></p>
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