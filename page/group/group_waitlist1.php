<div class="block">
	<div class="block-content">
		<table class="list-problems list tagVisibility1">
			<colgroup>
				<col class="lc3">
				<col class="lc4">
				<col class="lc5">
				<col class="lc6">
			</colgroup>
			
			<thead class="list-head">
				<tr>
					<th class="list-th lc3">第一志愿列表</th>
					<th class="list-th lc4">班级</th>
					<th class="list-th lc5">学号</th>
					<th class="list-th lc6">性别</th>
				</tr>
			</thead>
				
			<tbody>
				<?
					$member_count = 0;
					
					$result = mysql_query ("SELECT * FROM users WHERE belong1 = $G_id");
					
					while ($row = mysql_fetch_array ($result)) {

						$member_count++;
				?>
						<tr class="list-body-tr <? if ($member_count & 1) { ?> odd <? } ?> comp">
							<td class="list-td lc3">
							<div class="wrap">
								<div class="title">
									<a><?=$row ["name"]?></a>
									<span class="tagList">
										<a class="tagLink tagType1">第一志愿</a>
									</span>
								</div>
							</div>
							</td>
							
							<td class="list-td lc4"><?=GetGradeClass ($row ["id"])?></td><td class="list-td lc5"><?=GetNumber ($row ["id"])?></td>
							<td class="list-td lc6"><?=GetGenderName ($row ["gender"])?></td>
						</tr>
					<?
						}
					?>
				
				</tbody>
		</table>

		<div class="block-more enabled">总共<?=$member_count?>个第一志愿申请者</a></div>
		
	</div>
</div>