(function(window,undefined)
{
	/**
	 * 返回该JSON字符串的对应对象
	 *
	 * @alias	{String}.toObject
	 * @return	{Object}
	 */
	String.prototype.toObject = function()
	{
		try
		{
			var ret = jQuery.parseJSON(this.toString());
			return ret;
		}
		catch(e)
		{
			return null;
		}
	};
	
	/**
	 * 左侧补空对齐
	 *
	 * @alias	{String}.padLeft
	 * @return	{String}
	 *
	 * @param	{Number}	len				补空长度
	 * @param	{String}	[repeatChar]	补空字符，默认为'0'
	 */
	String.prototype.padLeft = function(len, repeatChar)
	{
		repeatChar |= '0';

		var ret = '';
		var loopTimes = len - this.length;

		for(var i = 0; i < loopTimes; ++i)
		ret += repeatChar;

		return ret + this.toString();
	};
	
	/**
	 * 右侧补空对齐
	 *
	 * @alias	{String}.padRight
	 * @return	{String}
	 *
	 * @param	{Number}	len				补空长度
	 * @param	{String}	[repeatChar]	补空字符，默认为'0'
	 */
	String.prototype.padRight = function(len, repeatChar)
	{
		repeatChar |= '0';

		var ret = '';
		var loopTimes = len - this.length;

		for(var i = 0; i < loopTimes; ++i)
		ret += repeatChar;

		return this + ret.toString();
	};
	
	/**
	 * 使用参数中的相关成员的值替换字符串的内容
	 *
	 * @alias	{String}.format
	 * @return	{String}
	 *
	 * @param	{Object}	obj		包含用于替换值的对象
	 *
	 * @example
	 * 			{'key': 'value'} ：替换字符串中的{key}为value
	 */
	String.prototype.format = function(obj)
	{
		// http://www.planabc.net/2011/05/31/simple_javascript_template_substitute

		if(!(Object.prototype.toString.call(obj) === '[object Object]' && 'isPrototypeOf' in obj))
			return this;

		return this.replace(/\{([^{}]+)\}/g, function(match, key)
		{
			var value = obj[key];
			return (value !== undefined) ? value : match;
		});
	};
	/**
	 * 解析URI字符串
	 *
	 * @alias	{String}.parseURI
	 * @return	{Object}
	 *
	 * @param	{Boolean}	strict	是否以严格模式解析
	 */
	String.prototype.parseURI = function(strict)
	{
		// http://blog.stevenlevithan.com/archives/parseuri

		strict = strict || true;

		var o =
		{
			strictMode : strict,
			key : ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
			q :
			{
				name : "queryKey",
				parser : /(?:^|&)([^&=]*)=?([^&]*)/g
			},
			parser :
			{
				strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
				loose : /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
			}
		};

		var m = o.parser[o.strictMode ? "strict" : "loose"].exec(this.toString()), uri = {}, i = 14;

		while(i--)
		uri[o.key[i]] = m[i] || "";

		uri[o.q.name] = {};
		uri[o.key[12]].replace(o.q.parser, function($0, $1, $2)
		{
			if($1)
				uri[o.q.name][$1] = $2;
		});
		return uri;
	}
	
	/**
	 * 解析URIQuery字符串
	 *
	 * @alias	{String}.parseQuery
	 * @return	{Object}
	 */
	String.prototype.parseQuery = function()
	{
		var ret = {};

		var uriSection = this.toString().split('?');
		ret.link = this.toString();
		ret.page = uriSection[0];
		ret.queryString = uriSection[1];
		ret.query = {};

		if(uriSection[1] != undefined)
		{
			uriSection[1].replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2)
			{
				if($1)
					ret.query[$1] = $2;
			});
		}

		return ret;
	}
	
	// Add ECMA262-5 string trim if not supported natively
	//
	if (!('trim' in String.prototype)) {
		String.prototype.trim= function() {
			return this.replace(/^\s+/, '').replace(/\s+$/, '');
		};
	}

	// Add ECMA262-5 Array methods if not supported natively
	//
	if (!('indexOf' in Array.prototype)) {
		Array.prototype.indexOf= function(find, i /*opt*/) {
			if (i===undefined) i= 0;
			if (i<0) i+= this.length;
			if (i<0) i= 0;
			for (var n= this.length; i<n; i++)
				if (i in this && this[i]===find)
					return i;
			return -1;
		};
	}
	if (!('lastIndexOf' in Array.prototype)) {
		Array.prototype.lastIndexOf= function(find, i /*opt*/) {
			if (i===undefined) i= this.length-1;
			if (i<0) i+= this.length;
			if (i>this.length-1) i= this.length-1;
			for (i++; i-->0;) /* i++ because from-argument is sadly inclusive */
				if (i in this && this[i]===find)
					return i;
			return -1;
		};
	}
	if (!('forEach' in Array.prototype)) {
		Array.prototype.forEach= function(action, that /*opt*/) {
			for (var i= 0, n= this.length; i<n; i++)
				if (i in this)
					action.call(that, this[i], i, this);
		};
	}
	if (!('map' in Array.prototype)) {
		Array.prototype.map= function(mapper, that /*opt*/) {
			var other= new Array(this.length);
			for (var i= 0, n= this.length; i<n; i++)
				if (i in this)
					other[i]= mapper.call(that, this[i], i, this);
			return other;
		};
	}
	if (!('filter' in Array.prototype)) {
		Array.prototype.filter= function(filter, that /*opt*/) {
			var other= [], v;
			for (var i=0, n= this.length; i<n; i++)
				if (i in this && filter.call(that, v= this[i], i, this))
					other.push(v);
			return other;
		};
	}
	
	/**
	 * 返回该日期时间部分的字符串形式
	 *
	 * @alias	{Date}.formatTime
	 * @return	{String}
	 */
	Date.prototype.formatTime = function()
	{
		return ('{hour}:{minute}:{second}').format(
		{
			hour : this.getHours().toString().padLeft(2),
			minute : this.getMinutes().toString().padLeft(2),
			second : this.getSeconds().toString().padLeft(2)
		});
	};
	
	Date.prototype.format = function(formatStr)
	{
		//http://www.codingforums.com/archive/index.php/t-11088.html
		
		var heap = formatStr.split('');
		var resHeap = new Array(heap.length);
		var escapeChar = '\\';
		
		// go through array and extract identifiers from its fields
		for (var i = 0; i < heap.length; i++)
		{
			switch(heap[i]) 
			{
				case escapeChar:
					resHeap[i] = heap[i+1];
					i++;
					break;

				case "a": // "am" or "pm"
					var temp = this.getHours();
					resHeap[i] = (temp < 12) ? "am" : "pm";
					break;

				case "A": // "AM" or "PM"
					var temp = this.getHours();
					resHeap[i] = (temp < 12) ? "AM" : "PM";
					break;

				case "d": // day of the month, 2 digits with leading zeros; i.e. "01" to "31"
					var temp = String(this.getDate());
					resHeap[i] = (temp.length > 1) ? temp : "0" + temp;
					break;

				case "g": // hour, 12-hour format without leading zeros; i.e. "1" to "12"
					var temp = this.getHours();
					resHeap[i] = (temp <= 12) ? temp : (temp - 12);
					break;

				case "G": // hour, 24-hour format without leading zeros; i.e. "0" to "23"
					resHeap[i] = String(this.getHours());
					break;

				case "h": // hour, 12-hour format; i.e. "01" to "12"
					var temp = String(this.getHours());
					temp = (temp <= 12) ? temp : (temp - 12);
					resHeap[i] = (temp.length > 1) ? temp : "0" + temp;
					break;

				case "H": // hour, 24-hour format; i.e. "00" to "23"
					var temp = String(this.getHours());
					resHeap[i] = (temp.length > 1) ? temp : "0" + temp;
					break;

				case "i": // minutes; i.e. "00" to "59" 
					var temp = String(this.getMinutes());
					resHeap[i] = (temp.length > 1) ? temp : "0" + temp;
					break;

				case "m": // month; i.e. "01" to "12"
					var temp = String(this.getMonth() + 1);
					resHeap[i] = (temp.length > 1) ? temp : "0" + temp;
					break;

				case "n": // month without leading zeros; i.e. "1" to "12"
					resHeap[i] = this.getMonth() + 1;
					break;

				case "s": // seconds; i.e. "00" to "59"
					var temp = String(this.getSeconds()); 
					resHeap[i] = (temp.length > 1) ? temp : "0" + temp;
					break;

				case "U": // seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
					// remember that this does not return milisecs! 
					resHeap[i] = Math.floor(this.getTime() / 1000); 
					break;

				case "y": // year, 2 digits; i.e. "99"
					resHeap[i] = String(this.getFullYear()).substring(2);
					break;

				case "Y": // year, 4 digits; i.e. "1999"
					resHeap[i] = this.getFullYear();
					break;

				default:
					resHeap[i] = heap[i];
			}
		}

		return resHeap.join('');
	}
	
	var  = window. = 
	{
		Domain: '.org',
		Host: location.host,
		Https: location.protocol == 'https:',
		Prefix: location.protocol + '//',
		EmptyFunction: function(){},
		DebugEnabled: true,
		DefTitle: 'Vijos 2.0',
		
		setTitle: function(title)
		{
			if (title == undefined || title.toString().length == 0)
				document.title = .DefTitle;
			else
				document.title = title + ' - ' + .DefTitle;
		},
		
		fillParams: function(options, defaultValue)
		{
			if(options == undefined)
				return defaultValue;
			
			var ret = jQuery.extend({}, options);
			
			for(var key in defaultValue)
			{
				if(ret[key] == undefined)
					ret[key] = defaultValue[key];
			}
			
			return ret;
		},
		
		/**
		 * 全局事件
		 *
		 * @alias	.Events
		 */
		Events :
		{
			/**
			 * @private
			 */
			_hooks :
			{
			},
			/**
			 * 添加一个事件钩子
			 *
			 * @alias	.Events.hook
			 *
			 * @param	{String}	event		事件名
			 * @param	{String}	ns			命名空间
			 * @param	{Function}	callback	事件回调
			 */
			hook : function(event, ns, callback)
			{
				var self = .Events;

				if(self._hooks[event] == undefined)
					self._hooks[event] =
					{
					};
				if(self._hooks[event][ns] != undefined)
					return false;

				self._hooks[event][ns] = callback;

				return true;
			},
			/**
			 * 撤销一个事件钩子
			 *
			 * @alias	.Events.unhook
			 *
			 * @param	{String}	event	事件名
			 * @param	{String}	ns		命名空间
			 */
			unhook : function(event, ns)
			{
				var self = .Events;

				if(self._hooks[event] == undefined || self._hooks[event][ns] == undefined)
					return false;
				delete self._hooks[event][ns];
			},
			/**
			 * 触发一个事件
			 *
			 * @alias	.Events.trigger
			 *
			 * @param	{String}	event	事件名
			 */
			trigger : function(event, argu)
			{
				var self = .Events;

				//Not breaked
				if(self._hooks[event] == undefined)
					return true;
				var cur = self._hooks[event];

				for(var key in cur)
				{
					if(cur[key] != undefined)
					{
						if(cur[key].apply(rf.base, argu) === false)
							return false;
					}
				}
			}
		},
		
		Obj :
		{
			/**
			 * 继承对象
			 */
			inhert : function(baseClass, define)
			{
				var Inhert = function()
				{
					for(var key in define)
					this[key] = define[key];

					if(this._initialize != undefined)
						this._initialize.apply(this, arguments)
				}
				Inhert.prototype = baseClass;

				return Inhert;
			},
			/**
			 * 将参数object序列化成JSON字符串
			 *
			 * @alias	.Obj.toJSON
			 * @return	{String}
			 *
			 * @param	{Object}	object	将要转成JSON字符串的对象
			 */
			toJSON : function(object)
			{
				var type = typeof object;

				//修正对象的类型
				if('object' == type)
				{
					if(Array == object.constructor)
						type = 'array';
					else
					if(RegExp == object.constructor)
						type = 'regexp';
					else
						type = 'object';
				}

				switch (type)
				{
					case 'undefined':
					case 'unknown':
						return '';
						break;
					case 'function':
					case 'boolean':
					case 'regexp':
						return object.toString();
						break;
					case 'number':
						return isFinite(object) ? object.toString() : 'null';
						break;
					case 'string':
						return '"' + object.replace(/(\\|\")/g, "\\$1").replace(/\n|\r|\t/g, function()
						{
							var a = arguments[0];
							return (a == '\n') ? '\\n' : (a == '\r') ? '\\r' : (a == '\t') ? '\\t' : ""
						}) + '"';
						break;
					case 'object':
						if(object === null) return 'null';
						
						var results = [];
						for(var property in object)
						{
							var value = .Obj.toJSON(object[property]);
							if(value !== undefined)
								results.push(.Obj.toJSON(property) + ':' + value);
						}
						return '{' + results.join(',') + '}';
						break;
					case 'array':
						var results = [];
						
						for(var i = 0; i < object.length; i++)
						{
							var value = .Obj.toJSON(object[i]);
							if(value !== undefined)
								results.push(value);
						}
						
						return '[' + results.join(',') + ']';
						break;
				}
			},
			/**
			 * 合并两个对象并返回合并后的对象
			 *
			 * @alias	.Obj.merge
			 * @return	{Object}
			 *
			 * @param	{Object}	obj1
			 * @param	{Object}	obj2
			 */
			merge : function(obj1, obj2)
			{
				if(obj1 == undefined && obj2 == undefined)
					return undefined;

				var objReturn = obj1;
				for(var key in obj2)
				objReturn[key] = obj2[key];

				return objReturn;
			}
		},
		
		Browser:
		{
			isIE: false,
			isIE6: false,
			isLIE7: false,
			isLIE8: false,
			isLIE9: false,
			isWebkit: false,
			isFirefox: false,
			isOpera: false,
			classes: '',
			
			__init: function()
			{
				var self = .Browser;
				var userAgent = navigator.userAgent;

				function __inline__uaIndexOf(str, s)
				{
					if (userAgent.indexOf(str) > -1)
					{
						self.classes += ' ' + s;
						return true;
					}
					else
					{
						return false;
					}
				}
				
				self.isIE = __inline__uaIndexOf('MSIE', 'ie');
				self.isIE6 = __inline__uaIndexOf('MSIE 6', 'ie6');
				self.isWebkit = __inline__uaIndexOf('WebKit', 'webkit');
				self.isFirefox = __inline__uaIndexOf('Firefox', 'firefox');
				self.isOpera = __inline__uaIndexOf('Opera', 'opera');
				
				if (self.isIE)
				{
					if (userAgent.indexOf('MSIE 8')>-1)
					{
						self.isLIE9 = true;
						self.classes += ' lie9';
					}
					if (userAgent.indexOf('MSIE 7')>-1)
					{
						self.isLIE9 = true;
						self.isLIE8 = true;
						self.classes += ' lie8 lie9';
					}
					if (userAgent.indexOf('MSIE 5.5')>-1 || userAgent.indexOf('MSIE 6')>-1)
					{
						self.isLIE9 = true;
						self.isLIE8 = true;
						self.isLIE7 = true;
						self.classes += ' lie7 lie8 lie9';
					}
				}
				
				document.documentElement.className += self.classes;
			}
		},
		
		/**
		 * 提示文字相关
		 * 
		 * @alias	.Info
		 */
		Info :
		{
			_$last: null,
			
			popup: function(html, delay)
			{
				var dInfo = .Info;
				
				if (dInfo._$last != null)
					dInfo.close(dInfo._$last);
				
				var delay = delay || 2000;
				
				var $container = $('<div class="infocont"><div class="infocont-info"></div></div>');
				$container.find('.infocont-info').html(html);
				$container.prependTo('body');
				
				dInfo._$last = $container;
				
				setTimeout(function()
				{
					$container.addClass('show');
				}, 0);
				
				setTimeout(function()
				{
					dInfo.close($container);
				}, delay);
			},
			
			close: function($object)
			{
				$object.removeClass('show');
				setTimeout(function()
				{
					$object.remove();
					$object = null;
				}, 500);
			}
		},
		
		/**
		 * 对话框相关
		 * 
		 * @alias	.Dialog
		 */
		Dialog :
		{
			_$e : null,
			_$c : null,
			_shown : false,
			_data : null,
			/**
			 * 初始化
			 * 
			 * @alias	.Dialog._init 
			 */
			_init : function()
			{
				var dDialog = .Dialog;

				if(dDialog._$e !== null)
					return;
				
				$('<div class="dlgcont"><div class="dlgcont-w"><div class="dlgcont-w-i"><div class="dlgout"><div id="dialog"><div class="dialog-content"></div><div class="dialog-bar"></div></div></div></div></div></div>').prependTo('body');
				
				dDialog._$e = $('.dlgcont');//.click(dDialog.tryCancel);
				dDialog._$c = dDialog._$e.find('#dialog');//.click(dDialog._cancelBubble);
			},
			_cancelBubble : function(event)
			{
				event.stopPropagation();
			},
			/**
			 * 创建对话框
			 * 
			 * @alias	.Dialog.create
			 * @remarks	options:
			 * 			{
			 * 				cancelable: false,
			 * 				buttons: [{c: content, e: extra class, onClick: on click}],
			 * 				content
			 * 			}
			 *  
			 */
			create : function(options)
			{
				var dDialog = .Dialog;
				if(dDialog._$e === null)
					dDialog._init();
				
				options = .fillParams(options,
				{
					cancelable : false,
					buttons : [],
					content : ''
				});

				if(dDialog._shown)
					return;

				dDialog._data = options;
				dDialog._$c.find('.dialog-content').empty().append(options.content);

				var $toolstrip = dDialog._$c.find('.dialog-bar').empty();
				for(var key in options.buttons)
				{
					var c = options.buttons[key].onClick || .EmptyFunction;
					$('<input type="button" class="button"></input>').val(options.buttons[key].c).click(c).addClass(options.buttons[key].e).appendTo($toolstrip);
				}
				
				dDialog._$e.css('display', 'block');
				
				setTimeout(function()
				{
					dDialog._$c.addClass('show');
					dDialog._$e.fadeTo(200, 1);
					dDialog._shown = true;
				},0);
			},
			startLoading : function()
			{
				var $bar = .Dialog._$c.find('.bar');
				if($bar.find('.loading').length > 0)
					return;

				$('<span class="loading"></span>').prependTo($bar);
			},
			endLoading : function()
			{
				.Dialog._$c.find('.bar .loading').remove();
			},
			close : function(immediate, callback)
			{
				var dDialog = .Dialog;

				if(!dDialog._shown)
					return;
				
				if (typeof callback != 'function') callback = .EmptyFunction;
				
				dDialog.endLoading();
				
				if (immediate === true)
				{
					dDialog._$e.hide();
					dDialog._$c.removeClass('show');
					dDialog._$c.find('.dialog-content').empty();
					dDialog._$c.find('.dialog-bar').empty();
					dDialog._shown = false;
					
					callback();
				}
				else
				{
					dDialog._$c.removeClass('show');
					
					dDialog._$e.fadeTo(500, 0, function()
					{
						$(this).css('display', 'none');
						dDialog._$c.find('.dialog-content').empty();
						dDialog._$c.find('.dialog-bar').empty();
						dDialog._shown = false;
						
						callback();
					});
				}
			},
			tryCancel : function()
			{
				var dDialog = .Dialog;
				if (dDialog._shown && dDialog._data != undefined && dDialog._data.cancelable)
					dDialog.close();
			}
		},
		
		eh_drop_fadeOut: function()
		{
			var $popform = $('.popform.dropped');
			
			$popform.parent().removeClass('select-dropped');
			
			$popform.stop(true,true).removeClass('dropped').fadeOut(150);
			$(document).unbind('mousedown click', .eh_drop_fadeOut);
			$popform.each(function()
			{
				var $pop = $(this), callback = $pop.data('hide-callback');
				
				if (callback != undefined && typeof callback == 'function')
					callback.call($pop);
			});
		},
		
		/**
		 * 颜色相关
		 *
		 * @alias		.Color
		 */
		Color :
		{
			/**
			 * 将color1与color2按alpha的透明度进行混合并返回颜色值(数字)
			 *
			 * @alias	.Color.blend
			 * @return	{Number}
			 *
			 * @param	{Number}	color1		原始颜色
			 * @param	{Number}	color2		覆盖颜色
			 * @param	{Number}	alpha		混合透明度(0~255)
			 */
			blend : function(color1, color2, alpha)
			{
				var deltaAlpha = 255 - alpha;

				return (
					(((((color1 & 0xFF0000) >> 16) * alpha >> 8) + (((color2 & 0xFF0000) >> 16) * deltaAlpha >> 8)) << 16) + 
					(((((color1 & 0xFF00) >> 8) * alpha >> 8) + (((color2 & 0xFF00) >> 8) * deltaAlpha >> 8)) << 8) + 
					(((color1 & 0xFF) * alpha >> 8) + ((color2 & 0xFF) * deltaAlpha >> 8))
				);
			},
			/**
			 * 根据value在0~max中的比例，取得渐变带
			 * (对分点颜色color1~colorN)中的对应颜色
			 *
			 * @alias	.Color.blendLinear
			 *
			 * @param	{Number}	value		一个值
			 * @param	{Number}	max			value的最大值
			 * @param	{Number}	color1..N	若干个颜色点 至少2个
			 */
			blendLinear : function(value, max)
			{
				if(arguments.length < 4) return 0;
				if(value <= 0) return arguments[2];
				if(value >= max) return arguments[arguments.length - 1];
				
				var colorStep = max / (arguments.length - 3);
				
				//n个颜色分为n-1段
				var leftIndex = Math.floor(value / colorStep);
				
				//从0开始
				return .Color.blend(arguments[leftIndex + 3], arguments[leftIndex + 2], Math.floor(((value - leftIndex * colorStep) / colorStep) << 8));
			}
		},
		
		/**
		 * 调试相关
		 *
		 * @alias	.Debug
		 */
		Debug :
		{
			/**
			 * 执行调试输出语句
			 *
			 * @alias	.Debug._execute
			 * @private
			 *
			 * @param	{String}	namespace	命名空间
			 * @param	{Object}	data		输出内容
			 */
			_execute : function(namespace, data)
			{
				var func = this;

				if(!.DebugEnabled || func == undefined)
					return;

				func.call(console, ('[{time}] {ns} > ').format(
				{
					time : new Date().formatTime(),
					ns : namespace
				}), data.toString());
			},
			/**
			 * 在控制台输出一条信息
			 *
			 * @alias	.Debug.log
			 */
			log : function(namespace, data)
			{
				if (console != undefined)
					.Debug._execute.apply(console.log, arguments);
			},
			/**
			 * 在控制台输出一条警告
			 *
			 * @alias	.Debug.warn
			 */
			warn : function(namespace, data)
			{
				if (console != undefined)
					.Debug._execute.apply(console.warn, arguments);
			},
			/**
			 * 在控制台输出一条错误
			 *
			 * @alias	.Debug.error
			 */
			error : function(namespace, data)
			{
				if (console != undefined)
					.Debug._execute.apply(console.error, arguments);
			}
		},
		
		ajax: function(options)
		{
			if (options.url == undefined && options.action == undefined) return false;
			
			var d_url = '/ajax';
			
			options = .fillParams(options,
			{
				url:			d_url,
				method:			'POST',
				expectFormat:	'json',
				timeout:		10000,
				beforeSend:		.EmptyFunction,
				onFailure:		.EmptyFunction,
				onSuccess:		.EmptyFunction,
				onError:		.EmptyFunction
			});
			
			var ret, sendData = {};
			
			if (options.action != undefined)
			{
				if (options.url == d_url)
				{
					options.url += '/' + options.action;
					if (user_info != undefined && user_info.sid != undefined)
						options.url += '?sid=' + user_info.sid;
				}
				else
				{
					sendData.action = options.action;
				}
				
				if (options.data != undefined)
					sendData = .Obj.merge(sendData, options.data);
			}
			else
			{
				sendData = options.data;
			}
			
			$.ajax(
			{
				type:	options.method,
				url:	options.url,
				data:	sendData,
				dataType: 'text',
				beforeSend: options.beforeSend,
				success: function(data, status, xhr)
				{
					//若返回值为空则进入错误回调
					if(data == undefined)
					{
						options.onError('无效返回值');
						.Debug.error('.ajax', 'action={action},url={url} | Ajax returned nothing.'.format(
						{
							action:	options.action,
							url:	options.url
						}));

						return false;
					}
					
					//若期待格式是JSON则解析JSON
					var objData;
					
					if(options.expectFormat === 'json')
						objData = data.toString().toObject();
					else
						objData = data;
					
					if(objData == null)
					{
						options.onError('服务器内部错误');
						.Debug.error('.ajax', 'action={action},url={url},data={data} | Server internal error.'.format(
						{
							action:	options.action,
							url:	options.url,
							data:	data
						}));

						return false;
					}
					
					//如果服务器返回的内容标识不是成功
					if(objData.succeeded === false)
					{
						options.onFailure(objData);
						
						.Debug.warn('.ajax', 'action={action},url={url},error={error} | Server checking failed.'.format(
						{
							action:	options.action,
							url:	options.url,
							error:	objData.errorMsg
						}));
						
						return false;
					}
					
					options.onSuccess(objData);
				},
				error : function(jqXHR, textStatus, errorThrown)
				{
					//网络错误 etc……
					options.onError(textStatus);
					.Debug.error('.ajax', 'action={action},url={url},error={error} | Network error.'.format(
					{
						action:	options.action,
						url:	options.url,
						error:	textStatus
					}));
				}
			});
		},
		
		validate: function(targetContainer)
		{
			var _lose = '', _loseCount = 0, _lFirst = true;
			var _invalid = '', _invalidCount = 0, _iFirst = true;
			
			//用于储存设置焦点的目标DOM
			var firstElement = null;
			
			$('input:text, input:password', targetContainer).each(function()
			{
				if (this.value.trim().length === 0)
				{
					//如果该项为空，并且不包含optional标志
					if ($(this).data('optional') != undefined) return;
					if (firstElement === null) firstElement = this;
					
					if (_lFirst)
					{
						_lose = this.title;
						_lFirst = false;
					}
					else
					{
						_lose += ',' + this.title;	//记录名称
					}
					_loseCount++;
				}
				//如果不符合输入规则
				else if (
					$(this).data('reg') != undefined && 
					!new RegExp($(this).data('reg')).test($(this).val())
				)
				{
					if (firstElement === null) firstElement = this;
					
					if (_iFirst)
					{
						_invalid = this.title;
						_iFirst = false;
					}
					else
					{
						_invalid += ',' + this.title;	//记录名称
					}
					_invalidCount++;
				}
			});
			
			//生成错误提示文字
			var finalOutput = '';
			if (_loseCount > 0)
			{
				finalOutput = '请输入' + _lose;
			}
			if (_invalidCount > 0)
			{
				if (finalOutput.length > 0) finalOutput += '；';
				finalOutput += '请修改' + _invalid + '。';
			}
			else
			{
				if (finalOutput.length > 0) finalOutput += '。';
			}
			
			//如果有留空或者不匹配则显示错误信息并返回false.
			if (finalOutput.length > 0)
				return {text:finalOutput, element:firstElement};
			else
				return true;
		},
		
		initMarkdown: function($textarea)
		{
			$textarea.keydown(eh_markdown_keydown);
		},
		
		createEditor: function(obj, extra)
		{
			extra = extra || {};
			
			var options = 
			{
				script_url : '/static/lib/tiny_mce/tiny_mce.js',
				width : '100%',
				height : '100%',
				language: 'cn',
				theme : 'advanced',
				skin : '2',
				plugins: 'inlinepopups,codehighlighting',
				theme_advanced_buttons1 : 'bold,italic,underline,strikethrough,sub,sup,|,forecolor,backcolor,|,fontselect',
				theme_advanced_buttons2 : 'justifyleft,justifycenter,justifyright,justifyfull,|,undo,redo,|,link,unlink,|,bullist,numlist,blockquote,|,removeformat,code,codehighlighting',
				theme_advanced_buttons3 : '',
				theme_advanced_fonts : 'Code=YaHei Consolas Hybrid,Consolas,Lucida Console,Bitstream Vera Sans Mono,Courier New,Courier,monospace;Tahoma=Tahoma;Verdana=Verdana;正文(微软雅黑)=微软雅黑,Microsoft YaHei,Verdana,宋体;西方(Lucida Grande)=Lucida Grande,Lucida,Lucida Sans Unicode,Lucida Sans,Segoe UI,Verdana,微软雅黑,Microsoft YaHei,宋体',
				theme_advanced_more_colors : false,
				theme_advanced_toolbar_location : 'top',
				theme_advanced_toolbar_align : 'left',
				theme_advanced_statusbar_location : 'bottom',
				theme_advanced_resizing : true
			};
			
			for (var k in extra)
			{
				options[k] = extra[k];
			}
			
			$(obj).tinymce(options);
		}
	}
	
	function eh_markdown_keydown(e)
	{
		//Process [Tab]
		if (e.keyCode === 9)
		{
			var
				start = this.selectionStart,
				end = this.selectionEnd,
				text = this.value;
			
			//多行缩进
			var newText = text.substr(0, start);
			newText += '\t' + text.substring(start, end).replace(/\n/g, '\n\t');
			newText += text.substr(end);
			
			this.value = newText;
			this.selectionStart = start + 1;
			this.selectionEnd = end + newText.length - text.length;
			
			return false;
		}
	}
	
	$.fn.extend(
	{
		fadeInEx: function(duration, callback)
		{
			if (.Browser.isLIE9)
			{
				$(this).show();
				
				if (typeof callback == 'function')
					callback.call(this);
				
				return this;
			}
			else
			{
				return $(this).fadeIn.apply(this, arguments);
			}
		},
		
		fadeOutEx: function()
		{
			if (.Browser.isLIE9)
			{
				$(this).hide(duration, callback);
				
				if (typeof callback == 'function')
					callback.call(this);
				
				return this;
			}
			else
			{
				return $(this).fadeOut.apply(this, arguments);
			}
		}
	});
	
	.Browser.__init();
	
})(window);