<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" class=" webkit">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta charset="UTF-8">

	<title><?=$NavTitle ?> - iVolunteer - HSEFZ</title>
	
	<script src="./css/hm.js"></script>
	<script type="text/javascript">
		if (top.location !== self.location) {
			top.location = self.location
		} else {
			if (top !== self) {
				if (confirm ("是否重新载入页面?")){
					top.location.reload ()
				}
			}
		};
	</script>
	
	<link href="./css/base.css" rel="stylesheet" type="text/css">
	<link href="./css/extend.css" rel="stylesheet" type="text/css">
	<link href="./css/github.css" rel="stylesheet" type="text/css">

	<script type="text/javascript">
		var _hmt = _hmt || [];
		(
			function () {
				var b = document.createElement ("script");
				b.src = "//hm.baidu.com/hm.js?a44424b774e6b920eb7d4a02fa11498f";
				var a = document.getElementsByTagName ("script") [0];
				a.parentNode.insertBefore (b, a)
			}
		) ();
	</script>
</head>

<?
	if (!isset ($_SESSION))
		session_start ();
?>

<body style="zoom: 1;">
	<div id="preloader">
		<div class="l1"></div>
		<div class="l2"></div>
		<div class="l3"></div>
		<div class="l4"></div>
	</div>
	
	<div id="nav-top-wrap">
		<div id="nav-top">
			<div class="c-wrap">

				<div class="left">
					<span class="nav-li">
						<a class="nav-li-a" href="./index.php" title="首页">
							<span class="nav-li-c">首页</span>
						</a>
					</span>

					<span class="nav-li">
						<a class="nav-li-a" href="./about.php" title="关于">
							<span class="nav-li-c">关于</span>
						</a>
					</span>
					<span class="nav-li">
						<a class="nav-li-a" href="info.php" title="个人信息">
							<span class="nav-li-c">个人信息</span>
						</a>
					</span>
				</div>
				
				<div class="right">

				<? if (isset ($_SESSION ["UName"]) && $_SESSION ["UName"]) { ?>

						<?
							if (HaveAuthority ("./admin.php")) {
						?>
								<span class="nav-li">
									<a class="nav-li-a" href="./admin.php">
										<span class="nav-li-c">后台管理</span>
									</a>
								</span>
						<?
							}
						?>

						<span class="nav-li">
							<a class="nav-li-a">
								<span class="nav-li-c"><?=$_SESSION ["UName"]?></span>
							</a>
						</span>

						<span class="nav-li">
							<a class="nav-li-a" href="./action/action_logout.php">
								<span class="nav-li-c">登出</span>
							</a>
						</span>
						
				<? } ?>

				</div>

			</div>
		</div>
	</div>
