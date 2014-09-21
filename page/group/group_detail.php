<div class="block">
	<div class="block-content">
		<div class="colorize info">
			<form action="./page/group/action/group_action_edit_name.php?id=<?=$_GET ["id"]?>" method="post">
				名称：
				<input type="text" name="name" size="110" class="textbox" value="<?=$row ["name"]?>">
				<input type="submit" class="button button-def" value="确认修改名称">
			</form>
		</div>
		
		<div class="colorize info">
			<form action="./page/group/action/group_action_edit_detail.php?id=<?=$_GET ["id"]?>" method="post">
				简介：
				<input type="text" name="detail" size="110" class="textbox" value="<?=$row ["detail"]?>">
				<input type="submit" class="button button-def" value="确认修改简介">
			</form>
		</div>
	</div>
</div>