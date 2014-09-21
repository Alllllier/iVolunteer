<div class="widget-node block">
	<div class="block-content">
		<div class="colorize">
			<?
				if (isset ($_SESSION ["UName"]) && $_SESSION ["UName"]) {
			?>
					<h2 class="colorize-h2">用户信息</h2>
					
					<div class="colorize-content">
						<div class="title"><strong>我的关键字</strong></div>
						<div class="list">
							我叫<?=$_SESSION ["UName"]?>，是个<?=GetGenderName (GetGenderByName ($_SESSION ["UName"]))?>生，来自<?=GetGrade (GetIDByName ($_SESSION ["UName"]))?>届的<?=GetClass (GetIDByName ($_SESSION ["UName"]))?>班，我的学号是<?=GetNumber (GetIDByName ($_SESSION ["UName"]))?>号。
						</div>

						<div class="title"><strong>我能干什么</strong></div>
						<div class="list">
							<a href="./index.php?key=<?=1 - ((isset ($_GET ["key"])) ? ($_GET ["key"]) : 0)?>" target="_self">我要修改现在的密码</a><br>
							
							<?
								if (HaveAuthority ("./admin.php")) {
							?>
									<a href="./admin.php" target="_self">我要进入后台管理</a><br>
							<?
								}
							?>
							
							<a href="./action/action_logout.php" target="_self">玩够了，我要退出</a>
						</div>
					</div>
			<?
				} else {
			?>
					<h2 class="colorize-h2">用户信息</h2>

						<form action="./action/action_login.php" method="post">
							姓名
							<blockquote>
								<input type="text" name="UName" size=22 class="textbox">
							</blockquote>
							
							密码
							<blockquote>
								<input type="password" name="PWord" size=22 class="textbox">
							</blockquote>
							
							<input type="submit" class="button button-def" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确认登陆&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
						</form>
			<?
				}
			?>
		</div>
	</div>
</div>

<?
	if (isset ($_SESSION ["UName"]) && $_SESSION ["UName"] && isset ($_GET ["key"]) && $_GET ["key"] == 1) {
?>
	<div class="widget-node block">
		<div class="block-content">
			<div class="colorize">
				<h2 class="colorize-h2">修改密码</h2>
				
				<form action="./action/action_alterkey.php" method="post">
					新的密码
					<blockquote>
						<input type="password" name="key" size=22 class="textbox">
					</blockquote>
					
					<input type="submit" class="button button-def" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确认修改&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
				</form>
			</div>
		</div>
	</div>
<?
	}
?>
