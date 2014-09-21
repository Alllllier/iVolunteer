<div class="colorize">
	<h2 class="colorize-h2">常用操作</h2>
	
	<div class="colorize-content">
		<li>
			<a href="./group.php?id=<?=$_GET ["id"]?>" target="_self">服务队管理</a>
			<? if (!HaveAuthority ("./group.php")) { ?>
				<span class="d">尚无权限</span>
			<? } ?>
		</li>

		<li>
			<a href="./admin.php" target="_self">后台管理</a>
			<? if (!HaveAuthority ("./admin.php")) { ?>
				<span class="d">尚无权限</span>
			<? } ?>
		</li>

		<li>
			<a href="./index.php" target="_self">返回首页</a>
		</li>
	</div>
</div>