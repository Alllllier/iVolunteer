<!--[if lte IE 8]>
	<script language = javascript>
		window.location.href = "./message.php?msg=糟糕啦，本页面不支持内核为 IE9 以下的浏览器，请使用其他浏览器 (IE 10, Chrome)！"
	</script>
<![endif]-->

<?
	include ("./include/database_heading.php");
	
	include ("./include/basic_functions.php");
	
	include ("./include/check_authority.php");
	CheckAuthority ("./index.php");
	
	$NavTitle = "首页";
	include ("./include/heading_common.php");
?>


<div id="nav-dc"></div>

<div id="container">
	<p><br>
	
	<div id="body" class="c-wrap">
		<link href="./css/css.css" rel="stylesheet" type="text/css">

		<div id="page_index">
			<? include ("./page/index/index_announcement.php"); ?>

			<div class="layout-col">
				<div class="layout-col-left">
					<div class="layout-col-content">
						<div id="tests" class="block">
							<div class="block-content">
								<div class="colorize colorize-highlight">
									<? include ("page/index/index_group_list.php"); ?>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="layout-col-right">
					<div class="layout-col-content">
						<? include ("page/index/index_user_detail.php"); ?>
						
						<? include ("page/index/index_apply_detail.php"); ?>

						<? include ("page/index/index_links.php"); ?>
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
