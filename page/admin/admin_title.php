<h3>系统维护</h3>

<blockquote>
	
<?
	$result = mysql_query ("SELECT * FROM users WHERE grade = 1");

	while ($row = mysql_fetch_array ($result)) {
?>
	<?=$row ["name"]?>&nbsp;&nbsp;&nbsp;&nbsp;
<?
	}
?>

</blockquote>


<h3>管理员</h3>

<blockquote>

<?
	$result = mysql_query ("SELECT * FROM users WHERE grade = 2");

	while ($row = mysql_fetch_array ($result)) {
?>
	<?=$row ["name"]?>&nbsp;&nbsp;&nbsp;&nbsp;
<?
	}
?>

</blockquote>