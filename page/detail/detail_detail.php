<?
	$G_id = $_GET ["id"];
	
	$result = mysql_query ("SELECT * FROM groups WHERE id = $G_id");
	
	$row = mysql_fetch_array ($result);
?>

<div class="block">
	<div class="block-content">
		<div class="colorize info">名称：<?=$row ["name"]?></div>
		<div class="colorize info">简介：<br><?=$row ["detail"]?></div>
	</div>
</div>
