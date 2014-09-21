(function(b,e){var d,c,a;d=c=b.jQuery;a=c.scrollTo=c.scrollTo||{config:{duration:400,easing:"swing",callback:e,durationMode:"each",offsetTop:0,offsetLeft:0},configure:function(f){c.extend(a.config,f||{});return this},scroll:function(p,v){var o,s,m,f,k,x,r,n,g,t,u,h,l,q,y,w,j,i;o=p.pop();s=o.$container;m=s.get(0);f=o.$target;k=c("<span/>").css({position:"absolute",top:"0px",left:"0px"});x=s.css("position");s.css("position","relative");k.appendTo(s);u=k.offset().top;h=f.offset().top;l=h-u-parseInt(v.offsetTop,10);q=k.offset().left;y=f.offset().left;w=y-q-parseInt(v.offsetLeft,10);r=m.scrollTop;n=m.scrollLeft;k.remove();s.css("position",x);i=function(z){if(p.length===0){if(typeof v.callback==="function"){v.callback.apply(this,[z])}}else{a.scroll(p,v)}return true};if(v.onlyIfOutside){g=r+s.height();t=n+s.width();if(r<l&&l<g){l=r}if(n<w&&w<t){w=n}}j={};if(l!==r){j.scrollTop=l+"px"}if(w!==n){j.scrollLeft=w+"px"}if(j.scrollTop||j.scrollLeft){s.animate(j,v.duration,v.easing,i)}else{i()}return true},fn:function(i){var j,h,m,g;j=[];var f=c(this);if(f.length===0){return this}h=c.extend({},a.config,i);m=f.parent();g=m.get(0);while((m.length===1)&&(g!==document.body)&&(g!==document)){var k,l;k=m.css("overflow-y")!=="visible"&&g.scrollHeight!==g.clientHeight;l=m.css("overflow-x")!=="visible"&&g.scrollWidth!==g.clientWidth;if(k||l){j.push({"$container":m,"$target":f});f=m}m=m.parent();g=m.get(0)}j.push({"$container":c((.Browser.isIE||.Browser.isFirefox)?"html":"body"),"$target":f});if(h.durationMode==="all"){h.duration/=j.length}a.scroll(j,h);return this}};c.fn.scrollTo=c.scrollTo.fn})(window);(function(c){function b(f,e){return(typeof f=="function")?(f.call(e)):f}function d(e){while(e=e.parentNode){if(e==document){return true}}return false}function a(f,e){this.$element=c(f);this.options=e;this.enabled=true;this.fixTitle()}a.prototype={show:function(){var h=this.getTitle();if(h&&this.enabled){var g=this.tip();g.find(".tipsy-inner")[this.options.html?"html":"text"](h);g[0].className="tipsy";g.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).prependTo(document.body);var k=c.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var e=g[0].offsetWidth,j=g[0].offsetHeight,i=b(this.options.gravity,this.$element[0]);var f;switch(i.charAt(0)){case"n":f={top:k.top+k.height+this.options.offset,left:k.left+k.width/2-e/2};break;case"s":f={top:k.top-j-this.options.offset,left:k.left+k.width/2-e/2};break;case"e":f={top:k.top+k.height/2-j/2,left:k.left-e-this.options.offset};break;case"w":f={top:k.top+k.height/2-j/2,left:k.left+k.width+this.options.offset};break}if(i.length==2){if(i.charAt(1)=="w"){f.left=k.left+k.width/2-15}else{f.left=k.left+k.width/2-e+15}}g.css(f).addClass("tipsy-"+i);g.find(".tipsy-arrow")[0].className="tipsy-arrow tipsy-arrow-"+i.charAt(0);if(this.options.className){g.addClass(b(this.options.className,this.$element[0]))}if(this.options.fade){g.stop().css({opacity:0,display:"block",visibility:"visible",top:f.top-5}).animate({opacity:this.options.opacity,top:f.top},100)}else{g.css({visibility:"visible",opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(100,function(){c(this).remove()})}else{this.tip().remove()}},fixTitle:function(){var e=this.$element;if(e.attr("title")||typeof(e.attr("original-title"))!="string"){e.attr("original-title",e.attr("title")||"").removeAttr("title")}},getTitle:function(){var g,e=this.$element,f=this.options;this.fixTitle();var g,f=this.options;if(typeof f.title=="string"){g=e.attr(f.title=="title"?"original-title":f.title)}else{if(typeof f.title=="function"){g=f.title.call(e[0])}}g=(""+g).replace(/(^\s*|\s*$)/,"");return g||f.fallback},tip:function(){if(!this.$tip){this.$tip=c('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');this.$tip.data("tipsy-pointee",this.$element[0])}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};c.fn.tipsy=function(i){if(i===true){return this.data("tipsy")}else{if(typeof i=="string"){var k=this.data("tipsy");if(k){k[i]()}return this}}i=c.extend({},c.fn.tipsy.defaults,i);function h(m){var n=c.data(m,"tipsy");if(!n){n=new a(m,c.fn.tipsy.elementOptions(m,i));c.data(m,"tipsy",n)}return n}function l(){var m=h(this);m.hoverState="in";if(i.delayIn==0){m.show()}else{m.fixTitle();setTimeout(function(){if(m.hoverState=="in"){m.show()}},i.delayIn)}}function g(){var m=h(this);m.hoverState="out";if(i.delayOut==0){m.hide()}else{setTimeout(function(){if(m.hoverState=="out"){m.hide()}},i.delayOut)}}if(!i.live){this.each(function(){h(this)})}if(i.trigger!="manual"){var e=i.live?"live":"bind",j=i.trigger=="hover"?"mouseenter":"focus",f=i.trigger=="hover"?"mouseleave":"blur";this[e](j,l)[e](f,g)}return this};c.fn.tipsy.defaults={className:null,delayIn:0,delayOut:0,fade:false,fallback:"",gravity:"n",html:false,live:false,offset:0,opacity:0.8,title:"title",trigger:"hover"};c.fn.tipsy.revalidate=function(){c(".tipsy").each(function(){var e=c.data(this,"tipsy-pointee");if(!e||!d(e)){c(this).remove()}})};c.fn.tipsy.elementOptions=function(f,e){return c.metadata?c.extend({},e,c(f).metadata()):e};c.fn.tipsy.autoNS=function(){return c(this).offset().top>(c(document).scrollTop()+c(window).height()/2)?"s":"n"};c.fn.tipsy.autoWE=function(){return c(this).offset().left>(c(document).scrollLeft()+c(window).width()/2)?"e":"w"};c.fn.tipsy.autoBounds=function(f,e){return function(){var g={ns:e[0],ew:(e.length>1?e[1]:false)},j=c(document).scrollTop()+f,h=c(document).scrollLeft()+f,i=c(this);if(i.offset().top<j){g.ns="n"}if(i.offset().left<h){g.ew="w"}if(c(window).width()+c(document).scrollLeft()-i.offset().left<f){g.ew="e"}if(c(window).height()+c(document).scrollTop()-i.offset().top<f){g.ns="s"}return g.ns+(g.ew?g.ew:"")}}})(jQuery);

if (typeof user_settings != 'undefined')
{
	var user_settings = .fillParams(user_settings, 
	{
		lang:				0,
		tags:				1,
		hlmethod:			0,
		copy_shownotice:	1
	});
}

if (typeof env_info != 'undefined')
{
	var env_info = .fillParams(env_info,
	{
		night:		false,
		custom:		false,
		time:		0
	});
}

realtime_status = 
{
	connected: false,
	retry: 2000,
	retryer: null
};

(function(window, undefined)
{
	function eh_gui_drop_click()
	{
		var $obj = $(this);
		$obj.addClass('select-dropped');
		
		setTimeout(function()
		{
			var $popform = $obj.children('.popform');
			
			$popform.css({display:'block', opacity:0});
			
			if ($popform.offset().top + $popform.height() - $(document).scrollTop() > $(window).height())
				$popform.addClass('direction-top')
			else
				$popform.removeClass('direction-top');
			
			$popform
				.addClass('dropped')
				.stop(true,true)
				.fadeTo(100, 1, function(){$(document).click(.eh_drop_fadeOut);});
		},0);
	}
	
	function eh_gui_checkbox_click()
	{
		var $obj = $(this).data('__native_obj');
		
		$obj.prop('checked', !$obj.prop('checked'));
		eh_gui_checkbox_change.call($obj[0]);
	}
	
	function eh_gui_checkbox_change()
	{
		var $new = $(this).data('__wrap_obj');
		
		if (this.checked)
		{
			$new.attr('data-checked', 'true');
			$new.addClass('checked');
		}
		else
		{
			$new.attr('data-checked', 'false');
			$new.removeClass('checked');
		}
	}
	
	function eh_gui_drop_li_click(e)
	{
		var $li = $(this);
		var $obj = $(this).closest('.select');
		
		$obj.children('.c').html($li.html());
		
		$obj.attr('data-value', $li.data('value'));
		if ($li.data('extra') != undefined)
			$obj.attr('data-extra', $li.data('extra'));
		
		$obj.trigger('change');
		
		.eh_drop_fadeOut();
		e.stopPropagation();
	}
	
	function uiCheckbox_fixie6_compose()
	{
		var obj = $(this);
		
		setTimeout(function()
		{
			var cName = 'checkbox checkbox';
			
			if (obj.attr('data-checked') == 'true')
				cName = cName + '-checked';
			
			if (obj.attr('data-active') == 'true')
				cName = cName + '-active';
			else if (obj.attr('data-hover') == 'true')
				cName = cName + '-hover';
			
			obj.attr('class', cName);
		}, 0);
	}
	
	function eh_gui_drop_li_hover()
	{
		$(this).addClass('hover');
	}
	
	function eh_gui_drop_li_hoverout()
	{
		$(this).removeClass('hover');
	}
	
	$.fn.extend(
	{
		uiDrop: function()
		{
			this.each(function() {
				this.type = 'uiDrop';
			});
			
			var $obj = this;
			$obj.append('<span class="downarrow"></span>');
			$obj.click(eh_gui_drop_click);
			
			var $li = $obj.children('.popform').children('li')
			$li.click(eh_gui_drop_li_click);
			
			if (.Browser.isLIE8)
			{
				$li.hover(eh_gui_drop_li_hover, eh_gui_drop_li_hoverout);
				
				$obj.hover(function()
				{
					$(this).addClass('select-hover');
				}, function()
				{
					$(this).removeClass('select-hover');
				}).mousedown(function()
				{
					$(this).addClass('select-active');
				}).mouseup(function()
				{
					$(this).removeClass('select-active');
				}).blur(function()
				{
					$(this).removeClass('select-active');
				});
			}
			
			if ($obj.data('default') == undefined)
				$li.eq(0).click();
			else
				$li.filter('[data-value="' + $obj.data('default') + '"]').click();
			
			return this;
		},
		
		uiCheckbox: function()
		{
			var $obj = this;
			$obj.css('display', 'none');
			
			var $new = $('<div class="checkbox" tabindex="0" data-checked="false"></div>');
			$new.insertBefore($obj);
			
			//IE Events
			if (.Browser.isLIE8)
			{
				if (.Browser.isIE6)
				{
					$new.hover(function()
					{
						$(this).attr('data-hover', 'true');
						uiCheckbox_fixie6_compose.call(this);
					}, function()
					{
						$(this).attr('data-hover', 'false');
						uiCheckbox_fixie6_compose.call(this);
					}).mousedown(function()
					{
						$(this).attr('data-active', 'true');
						uiCheckbox_fixie6_compose.call(this);
					}).mouseup(function()
					{
						$(this).attr('data-active', 'false');
						uiCheckbox_fixie6_compose.call(this);
					});
				}
				else
				{
					$new.hover(function()
					{
						$(this).addClass('hover');
					}, function()
					{
						$(this).removeClass('hover');
					}).mousedown(function()
					{
						$(this).addClass('active');
					}).mouseup(function()
					{
						$(this).removeClass('active');
					});
				}
			}
			
			$new.data('__native_obj', $obj);
			$obj.data('__wrap_obj', $new);
			
			if ($obj.attr('checked'))
			{
				$new.attr('data-checked', 'true');
				$new.addClass('checked');
			}
			
			$obj.change(eh_gui_checkbox_change);
			$new.click(eh_gui_checkbox_click);
			
			return this;
		},
		
		uiMarkdown: function(onSubmit)
		{
			this.each(function()
			{
				var $obj = $(this);
				$obj.attr('data-state', 'writing');
				.initMarkdown($obj);
				
				if (typeof user_info !== 'undefined' && user_info.uid != 1)
				{
					if (typeof user_settings !== 'undefined' && user_settings.markdown == undefined)
					{
						if (!.Browser.isIE || .Browser.isLIE9 == false)
							$obj.focus(show_markdown_helper);
					}
				}
				
				if (onSubmit !== undefined && typeof onSubmit == 'function')
					$obj.data('__submitCallback', onSubmit);
				
				var $wrap = $('<div class="markdown" tabindex="0"><div class="markdown-t"><div class="markdown-pv"></div></div><div class="markdown-d">需要更丰富的内容输出？<a href="javascript:;" name="fast_help">编辑器快速入门</a> | <a href="http://wowubuntu.com/markdown/basic.html" target="_blank">Markdown详细帮助</a><div class="right"><span class="instruction">[Ctrl+Enter] </span></div></div></div>').insertAfter($obj);
				$wrap.keydown(eh_markdown_wrap_keydown);
				$wrap.find('[name="fast_help"]').click(show_markdown_helper);
				
				var $action = $('<a href="javascript:;" class="action">预览</a>').appendTo($wrap.find('.right'));
				$obj.appendTo($wrap.children('.markdown-t'));
				
				$action.click(eh_markdown_link_click);
			});
			
			return this;
		}
	});
	
	var mdhelper = null;
	
	function show_markdown_helper()
	{
		if (mdhelper !== null)
			return;
		
		mdhelper = $('<div id="mdhelp"><div id="mdhelp-wrap"><div id="mdhelp-content"><img src="//www..org/static/img/md/1.png" data-id="1"></div><div id="mdhelp-nav"><div id="mdhelp-nav-w"><a href="javascript:;" class="close">关闭</a><a href="javascript:;" class="next">下一节 &gt;</a></div></div></div></div>').hide().appendTo('body').fadeIn('fast');
		
		var $img = mdhelper.find('img');
		
		mdhelper.find('a.close').click(function()
		{
			mdhelper.fadeOut('fast', function()
			{
				$(this).remove();
				mdhelper = null;
				
				.ajax(
				{
					action:	'settings_set',
					data:	{ name: 'markdown', value: '1' }
				});
				
				return;
			});
		});
		
		mdhelper.find('a.next').click(function()
		{
			var id = parseInt($img.attr('data-id')) + 1;
			
			if (id == 7)
			{
				$(this).remove();
			}
			
			$img.attr('src', '//www..org/static/img/md/' + id + '.png');
			$img.attr('data-id', id);
		});
	}
	
	function eh_markdown_link_click()
	{
		var $textarea = $(this).closest('.markdown').find('textarea');
		
		switch($textarea.attr('data-state'))
		{
			case 'writing':
				.ex.markdown.preview($textarea);
				break;
			case 'preview':
				.ex.markdown.close($textarea);
				$textarea.focus();
				break;
		}
		
		return false;
	}
	
	function eh_markdown_wrap_keydown(e)
	{
		var $textarea = $(this).find('textarea');
		
		if (e.keyCode === 27)
		{
			.ex.markdown.close($textarea);
			$textarea.focus();
			return false;
		}
		
		if (e.ctrlKey === true && e.keyCode === 13)
		{
			switch($textarea.attr('data-state'))
			{
				case 'writing':
					.ex.markdown.preview($textarea);
					break;
				case 'preview':
					if ($textarea.data('__submitCallback') !== undefined)
						$textarea.data('__submitCallback').call($textarea);
					
					break;
			}
			
			return false;
		}
	}
	
	$.valHooks['uiDrop'] = 
	{
		get : function(el) {
			return $(el).attr('data-value');
		},
		set : function(el, val)
		{
			$(el).filter('[data-value="' + val + '"]').click();
		}
	};
	
	vj.ex = 
	{
		markdown:
		{
			preview: function($textarea)
			{
				if ($textarea.attr('data-state') == 'preview')
					return;
				
				var
					$mk = $textarea.closest('.markdown'),
					$action = $mk.find('.action'),
					$preview = $mk.find('.markdown-pv'),
					$instruction = $mk.find('.instruction');
				
				$textarea.attr('data-state', 'preview').hide();
				$preview.empty();
				$('<div>请稍后，正在生成预览……</div>').append
				(
					$('<a href="javascript:;">[ESC] 退出预览</a>').click(function()
					{
						.ex.markdown.close($textarea)
					})
				).hide().fadeIn(200).appendTo($preview);
				$preview.css('min-height', $textarea.height()-1).show();
				
				if ($textarea.data('__submitCallback') !== undefined)
					$instruction.html('[Ctrl+Enter] 递交 | [Esc] ');
				else
					$instruction.html('[Esc] ');
				
				$action.html('退出预览');
				
				.ajax(
				{
					url:	'/etc/markdown_preview',
					expectFormat: 'text',
					data:		
					{
						content: $textarea.val()
					},
					onSuccess:	function(data)
					{
						$preview.html(data);
						
						.ex.shl_preprocess($preview);
						.ex.shl_highlight($preview);
						
					},
					onError: function()
					{
						$preview.html('生成预览失败 ╮(╯▽╰)╭ ').append
						(
							$('<a href="javascript:;">点击此处重试</a>').click(function()
							{
								$textarea.attr('data-state', 'writing');
								.ex.markdown.preview($textarea);
							})
						);
					}
				});
			},
			
			close: function($textarea)
			{
				if ($textarea.attr('data-state') == 'writing')
					return;
				
				var
					$mk = $textarea.closest('.markdown'),
					$action = $mk.find('.action'),
					$preview = $mk.find('.markdown-pv'),
					$instruction = $mk.find('.instruction');
				
				$textarea.attr('data-state', 'writing').show();
				$preview.empty().hide();
				
				$instruction.html('[Ctrl+Enter] ');
				$action.html('预览');
			}
		},
		
		sendRealtime: function(action, data)
		{
			var $frame = $('#realtime');
			
			if ($frame.length > 0)
				$frame[0].contentWindow.postMessage({action: action, data: data}, '*');
		},
		
		navShowDrop: function()
		{
			var $li = $(this).parent();
			var $drop = $li.find('.popform');
			$drop.data('hide-callback', cb_topnav_popup_hide);
			
			setTimeout(function()
			{
				$li.addClass('drop');
				$drop.addClass('dropped').stop(true,true).fadeIn(100, function(){$(document).mousedown(.eh_drop_fadeOut);});
				$drop.find('input:eq(0)').focus();
			},0);
		},
		
		forceShowLogin: function()
		{
			$('#nav-top .nav-li.login>a').click();
		},
		
		InfiniteScroll: function(options)
		{
			var self = this;
			self.init(options);
		},
		
		shl_preprocess: function($container)
		{
			return;
			//var p;
			//
			//if ($container == undefined)
			//	p = $('pre[lang], code[lang]');
			//else
			//	p = $container.find('pre[lang], code[lang]');
			//
			//if (p.length == 0)
			//	return;
			//
			//p.each(function()
			//{
			//	$(this).attr('class', 'brush:' + $(this).attr('lang'));
			//});
		},
		
		shl_highlight: function($container)
		{
			if (.Browser.isLIE9)
				return;
			
			if ($container == undefined)
			{
				window.hljs.initHighlighting();
				return;
			}
			
			$container.find('pre').each(function()
			{
				window.hljs.highlightBlock(this);
			});
			
			//var p = $container.find('pre, code');
			//if (p.length == 0)
			//	return;
			//
			//SyntaxHighlighter.highlight(p);
		}
	}
	
	.ex.InfiniteScroll.prototype = 
	{
		init: function(options)
		{
			var self = this;
			
			self.$target = options.$target;
			self.$target.data('__obj', self);
			self.$target.click(self.onClick);
			self.times_max = options.times_max;
			self._times = 0;
			self._str_loading = options.str_loading;
			self._str_exist = options.str_exist;
			self._str_nomore = options.str_nomore;
			self.cb_load = options.onLoad || .EmptyFunction;
			self.cb_scroll = options.onScroll || .EmptyFunction;
			self.offset = options.offset || 50;
			
			self._disable_load = true;
		},
		
		onClick: function()
		{
			if (!$(this).hasClass('enabled')) return;
			
			var self = $(this).data('__obj');
			self.load_start();
			self._times = 0;
		},
		
		onScroll: function()
		{
			var self = this;
			
			if (self._disable_load || self._times >= self.times_max)
				return;
			
			if (self.$target.offset().top < $(window).scrollTop() + $(window).height() + self.offset)
			{
				self.load_start();
			}
		},
		
		enable: function()
		{
			var self = this;
			self._disable_load = false;
			self.$target.html(self._str_exist).addClass('enabled');
		},
		
		disable: function()
		{
			var self = this;
			self._disable_load = true;
			self.$target.html(self._str_nomore).removeClass('enabled');
		},
		
		custom: function(text)
		{
			var self = this;
			self._disable_load = false;
			self.$target.html(text).addClass('enabled');
		},
		
		load_start: function()
		{
			var self = this;
			
			if (self._disable_load) return;
			
			self._disable_load = true;
			self._times++;
			self.$target.html(self._str_loading);
			
			self.cb_load();
		},
		
		load_end: function(exist)
		{
			var self = this;
			self._disable_load = false;
			
			if (exist == true)
				self.enable();
			else if (exist == false)
				self.disable();
			else
				self.custom(exist);
		}
	};
	
	function eh_login(event)
	{
		if (event.type == 'keydown' && event.which != 13) return;
		
		var $form = $('#loginform form');
		
		var
			$status = $form.find('.desc'), 
			$btn = $form.find('.ls .button'),
			$load = $form.find('.placeholder');
		
		$status.stop(true).slideUp(100);
		
		if ($form.find('[name="UName"]').val().trim().length == 0)
		{
			$form.find('[name="UName"]').focus();
			$status.stop(true, true).html('请输入用户名').slideDown(100);
			return false;
		}
		
		if ($form.find('[name="PWord"]').val().trim().length == 0)
		{
			$form.find('[name="PWord"]').focus();
			$status.stop(true, true).html('请输入密码').slideDown(100);
			return false;
		}
		
		$btn.attr('disabled','');
		$load.addClass('load');
		
		.ajax(
		{
			action:		'login',
			data:		
			{
				user: $form.find('[name="UName"]').val(),
				pass: $form.find('[name="PWord"]').val(),
				session: $form.find('[name="session_save"]').prop('checked')
			},
			onSuccess:	function()
			{
				$form.find('input[name="type"]').val('redirect');
				$form.unbind('submit').submit();
			},
			onFailure: function(obj)
			{
				$status.stop(true, true).html(obj.errorMsg).slideDown(100);
				$btn.removeAttr('disabled');
				$load.removeClass('load');
			},
			onError: function()
			{
				$status.stop(true, true).html('网络错误，请重试').slideDown(100);
				$btn.removeAttr('disabled');
				$load.removeClass('load');
			}
		});
		
		return false;
	}
	
	function eh_search(event)
	{
		if (event.type == 'keydown' && event.which != 13)
			return;
		
		.Info.popup(':(');
	}
	
	function cb_topnav_popup_hide()
	{
		$(this).closest('.nav-li.drop').removeClass('drop');
	}
	
	function init_topnav_tip()
	{
		$('#nav-top .nav-li>a[title]').each(function()
		{
			$(this).attr('original-title', $(this).attr('title'));
			$(this).removeAttr('title');
		}).tipsy({fade:true, opacity:0.95, gravity:'n'});
	}
	
	function init_popup()
	{
		$('#nav-top .popform').mousedown(function(e)
		{
			e.stopPropagation();
		});
	}
	
	function init_login()
	{
		var $loginForm = $('#loginform');
		if ($loginForm.length > 0)
		{
			$loginForm.find('form .checkbox_ap').uiCheckbox();
			$loginForm.find('form .button').bind('keydown click', eh_login);
			$loginForm.find('form .textbox').bind('keydown', eh_login);
		}
	}
	
	function init_search()
	{
		$("#anno .c-wrap .right .search .searchbtn").bind('keydown click', eh_search);
		$("#anno .c-wrap .right .search .searchbox").bind('keydown', eh_search);
	}

	function init_syntaxhighlighter()
	{
		if (window.hljs == undefined)
			return;
		
		.ex.shl_preprocess();
		.ex.shl_highlight();
	}
	
	function onMessage(e)
	{
		try
		{
			var d = e.originalEvent.data;
			var data = d.data;
			
			switch(d.action)
			{
				case '/nodejs/session/update/counter':
					$('[name="st_pass"]').html(data.pass.toString());
					$('[name="st_submit"]').html(data.submit.toString());
					$('[name="st_ratio"]').html(Math.round(data.pass / data.submit * 100).toString() + '%');
					
					break;
				
				case '/nodejs/title/request':
					.ex.sendRealtime('/session/title/response', {title: document.title, token: data.token});
					
					break;
				
				case '/nodejs/connect':
					realtime_status.connected = true;
					
					if (realtime_status.retryer != null)
					{
						realtime_status.retry = 2000;
						clearTimeout(realtime_status.retryer);
					}
					
					break;
				
				case '/nodejs/disconnect':
					realtime_status.connected = false;
					realtime_status.retry = 2000;
					realtime_status.retryer = setTimeout(cb_realtime_retry, realtime_status.retry);
					
					break;
			}
		}
		catch(e)
		{
		}
	}
	
	function cb_realtime_retry()
	{
		if ($('#realtime').length == 0 || realtime_status.connected === true)
			return;
		
		$('#realtime').attr('src', realtime_url + '&_=' + new Date().getTime());
		
		realtime_status.retry*=2;
		realtime_status.retryer = setTimeout(cb_realtime_retry, realtime_status.retry);
	}
	
	function init_global_message_receiver()
	{
		$(window).bind('message', onMessage);
	}
	
	function init_night()
	{
		if (env_info != undefined && env_info.night)
		{
			var $link = $('<a href="javascript:;">关闭夜间模式(仅本次会话有效)</a>');
			$link.click(function()
			{
				$('#night').fadeOut(300, function()
				{
					$('link').each(function()
					{
						if ($(this).attr('href').indexOf('.extend.dark.css') > -1)
						{
							$(this).prop('disabled', true);
							$(this).remove();
							return false;
						}
					});
				});
				
				.ajax(
				{
					url:			'/ajax/null?nonight=on',
					expectFormat:	'text'
				});
			});
			
			$('<div id="night">Vijos 已自动进入夜间模式。</div>').append($link).appendTo('#nav>.c-wrap').hide().fadeIn(500);
		}
	}
	
	$(document).ready(function()
	{
		init_topnav_tip();
		init_popup();
		init_login();
		init_search();
		init_syntaxhighlighter();
		init_global_message_receiver();
		init_night();
		
		if (!realtime_status.connected && $('#realtime').length > 0)
		{
			realtime_status.retry = 5000;
			realtime_status.retryer = setTimeout(cb_realtime_retry, realtime_status.retry);
		}
	});
})(window);