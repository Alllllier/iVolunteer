<div class="block">
	<div class="block-content">
		<div class="colorize info">
			<?
				$result = mysql_query ("SELECT * FROM systems WHERE id = 'announcement'");
				
				$row = mysql_fetch_array ($result);
			?>
			公告栏：<a><?=$row ["data"]?></a>
		</div>
	</div>
</div>
