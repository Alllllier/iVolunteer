<div class="layout-col-content">
	<div id="res" class="widget-node block">
		<div class="block-content">
			<div class="colorize">
				<h2 class="colorize-h2">团队管理</h2>
				
				<div class="colorize-content">
					<li>
						<a href="./page/admin/action/admin_action_delete_group.php?id=<?=$_GET ["id"]?>" target="_self">删除服务队</a>
						<? if (!HaveAuthority ("./page/admin/action/*")) { ?>
							<span class="d">尚无权限</span>
						<? } ?>
					</li>

					<li>
						<a href="./admin.php" target="_self">进入后台管理</a>
						<? if (!HaveAuthority ("./admin.php")) { ?>
							<span class="d">尚无权限</span>
						<? } ?>
					</li>

					<li>
						<a href="./detail.php?id=<?=$_GET ["id"]?>" target="_self">返回服务队首页</a>
					</li>
				</div>
			</div>
		</div>
	</div>
</div>