<?
	$result = mysql_query ("SELECT * FROM systems WHERE id = 'apply'");
	
	$row = mysql_fetch_array ($result);

	if (isset ($_SESSION ["UName"]) && $_SESSION ["UName"]) {
		if ($row ["data"] == "yes") {
?>
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">我要申请</h2>
							<form action="./action/action_apply.php" method="post">
								<blockquote>
									<font name="微软雅黑, Tahoma">
										<select name="belong1">
											<option value=0>请选择第一志愿服务队</option>
											
											<?
												$result = mysql_query ("SELECT * FROM groups");
												
												while ($row = mysql_fetch_array ($result)) {
											?>
													<option value=<?=$row ["id"]?> <? if (GetGroup1ByName ($_SESSION ["UName"]) == $row ["id"]) { ?> selected <? } ?>><?=$row ["name"]?></option>
											<?
												}
											?>
											
										</select>
									</font>
								</blockquote>

								<blockquote>
									<font name="微软雅黑, Tahoma">
										<select name="belong2">
											<option value=0>请选择第二志愿服务队</option>
											
											<?
												$result = mysql_query ("SELECT * FROM groups");
												
												while ($row = mysql_fetch_array ($result)) {
											?>
													<option value=<?=$row ["id"]?> <? if (GetGroup2ByName ($_SESSION ["UName"]) == $row ["id"]) { ?> selected <? } ?>><?=$row ["name"]?></option>
											<?
												}
											?>
											
										</select>
									</font>
								</blockquote>

								<input type="submit" class="button button-def" value="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确认申请&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
							</form>
					</div>
				</div>
			</div>
<?
		} else {
?>			
			<div class="block">
				<div class="block-content">
					<div class="colorize">
						<h2 class="colorize-h2">申请情况</h2>
							<div class="title">当前系统关闭服务队申请</div>

							<div class="list">
								<a href="./about.php#contact" target="_self">如有疑问请联系管理员</a>
							</div>
					</div>
				</div>
			</div>
<?
		}
	}
?>
