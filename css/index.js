(function(window, , undefined)
{
	function init_handler()
	{
		$(document)
			.on('click', '.list-discuss tr', eh_list_discuss_click)
			.on('click', '.list-discuss tr a', eh_a_click);
		
		$(document)
			.on('click', '.list-tests tr', eh_list_tests_click)
			.on('click', '.list-tests tr a', eh_a_click);
	}
	
	function eh_a_click(event)
	{
		event.stopPropagation();
	}
	
	function eh_list_discuss_click(e)
	{
		var link = '/discuss/' + $(this).attr('data-id');
		if (e.ctrlKey || e.shiftKey)
			window.open(link);
		else
			window.location.href = link;
	}
	
	function eh_list_tests_click(e)
	{
		var link = '/tests/' + $(this).attr('data-id');
		if (e.ctrlKey || e.shiftKey)
			window.open(link);
		else
			window.location.href = link;
	}
	
	$(document).ready(function()
	{
		init_handler();
	});
})(window, window.);