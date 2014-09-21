<h3>修改公告</h3>

<blockquote>
	<form action="./page/admin/action/admin_action_edit_system_announcement.php" method="post">
		<?
			$result = mysql_query ("SELECT * FROM systems WHERE id = 'announcement'");
			
			$row = mysql_fetch_array ($result);
		?>

		<input type="text" name="announcement" size="70" class="textbox" value="<?=$row ["data"]?>">
		<input type="submit" class="button button-def" value="确认修改公告">
	</form>
</blockquote>

<h3>开放申请</h3>

<blockquote>
	<form action="./page/admin/action/admin_action_edit_system_apply.php" method="post">
		<?
			$result = mysql_query ("SELECT * FROM systems WHERE id = 'apply'");
			
			$row = mysql_fetch_array ($result);
		?>

		<input type="radio" name="apply" value="yes" <? if ($row ["data"] == "yes") { ?> checked <? } ?>>我要开放服务队申请
		
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		
		<input type="radio" name="apply" value="no" <? if ($row ["data"] == "no") { ?> checked <? } ?>>我要关闭服务队申请
		
		<input type="submit" class="button button-def" value="确认修改信息">
	</form>
</blockquote>
