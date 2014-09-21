<table class="list-tests">
	<colgroup> <col class="c1"> <col class="c2"> </colgroup>
	
	<tbody>
		<?
			$result = mysql_query ("SELECT * FROM groups order by `id`");

			while ($row = mysql_fetch_array ($result)) {
		?>
		
			<tr>
				<td class="c1">
					<div class="title">
						<a href="detail.php?id=<?=$row ["id"]?>" target="_self"><?=$row ["name"]?></a>
					</div>
					
					<div class="footer">
						<span class="hl">
							服务队简介：
							<span title="detail.php"><!--<?//=$row ["detail"]?>--></span>
						</span>
					</div>
				</td>
				
				<td class="c2">
					<span class="testStatus3"><a href = "./detail.php?id=<?=$row ["id"]?>">查看</a></span>
				</td>
			</tr>
			
		<?
			}
		?>
		
	</tbody>
</table>
