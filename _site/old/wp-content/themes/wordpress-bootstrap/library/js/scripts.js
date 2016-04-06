!function($){"use strict"
var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.prototype={constructor:Alert,close:function(e){var $this=$(this),selector=$this.attr('data-target'),$parent
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=$(selector)
$parent.trigger('close')
e&&e.preventDefault()
$parent.length||($parent=$this.hasClass('alert')?$this:$this.parent())
$parent.removeClass('in')
function removeElement(){$parent.remove()
$parent.trigger('closed')}
$.support.transition&&$parent.hasClass('fade')?$parent.on($.support.transition.end,removeElement):removeElement()}}
$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data('alert')
if(!data)$this.data('alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.alert.Constructor=Alert
$(function(){$('body').on('click.alert.data-api',dismiss,Alert.prototype.close)})}(window.jQuery)
Modernizr.load([{test:Modernizr.borderradius,nope:['selectivizr-min.js']}]);!function($){"use strict"
var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.collapse.defaults,options)
if(this.options["parent"]){this.$parent=$(this.options["parent"])}
this.options.toggle&&this.toggle()}
Collapse.prototype={constructor:Collapse,dimension:function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'},show:function(){var dimension=this.dimension(),scroll=$.camelCase(['scroll',dimension].join('-')),actives=this.$parent&&this.$parent.find('.in'),hasData
if(actives&&actives.length){hasData=actives.data('collapse')
actives.collapse('hide')
hasData||actives.data('collapse',null)}
this.$element[dimension](0)
this.transition('addClass','show','shown')
this.$element[dimension](this.$element[0][scroll])},hide:function(){var dimension=this.dimension()
this.reset(this.$element[dimension]())
this.transition('removeClass','hide','hidden')
this.$element[dimension](0)},reset:function(size){var dimension=this.dimension()
this.$element.removeClass('collapse')
[dimension](size||'auto')
[0].offsetWidth
this.$element.addClass('collapse')},transition:function(method,startEvent,completeEvent){var that=this,complete=function(){if(startEvent=='show')that.reset()
that.$element.trigger(completeEvent)}
this.$element.trigger(startEvent)
[method]('in')
$.support.transition&&this.$element.hasClass('collapse')?this.$element.one($.support.transition.end,complete):complete()},toggle:function(){this[this.$element.hasClass('in')?'hide':'show']()}}
$.fn.collapse=function(option){return this.each(function(){var $this=$(this),data=$this.data('collapse'),options=typeof option=='object'&&option
if(!data)$this.data('collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.collapse.defaults={toggle:true}
$.fn.collapse.Constructor=Collapse
$(function(){$('body').on('click.collapse.data-api','[data-toggle=collapse]',function(e){var $this=$(this),href,target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''),option=$(target).data('collapse')?'toggle':$this.data()
$(target).collapse(option)})})}(window.jQuery)
!function($){"use strict"
var toggle='[data-toggle="dropdown"]',Dropdown=function(element){var $el=$(element).on('click.dropdown.data-api',this.toggle)
$('html').on('click.dropdown.data-api',function(){$el.parent().removeClass('open')})}
Dropdown.prototype={constructor:Dropdown,toggle:function(e){var $this=$(this),selector=$this.attr('data-target'),$parent,isActive
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=$(selector)
$parent.length||($parent=$this.parent())
isActive=$parent.hasClass('open')
clearMenus()
!isActive&&$parent.toggleClass('open')
return false}}
function clearMenus(){$(toggle).parent().removeClass('open')}
$.fn.dropdown=function(option){return this.each(function(){var $this=$(this),data=$this.data('dropdown')
if(!data)$this.data('dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.dropdown.Constructor=Dropdown
$(function(){$('html').on('click.dropdown.data-api',clearMenus)
$('body').on('click.dropdown.data-api',toggle,Dropdown.prototype.toggle)})}(window.jQuery);var imgSizer={Config:{imgCache:[],spacer:"/path/to/your/spacer.gif"},collate:function(aScope){var isOldIE=(document.all&&!window.opera&&!window.XDomainRequest)?1:0;if(isOldIE&&document.getElementsByTagName){var c=imgSizer;var imgCache=c.Config.imgCache;var images=(aScope&&aScope.length)?aScope:document.getElementsByTagName("img");for(var i=0;i<images.length;i++){images[i].origWidth=images[i].offsetWidth;images[i].origHeight=images[i].offsetHeight;imgCache.push(images[i]);c.ieAlpha(images[i]);images[i].style.width="100%";}
if(imgCache.length){c.resize(function(){for(var i=0;i<imgCache.length;i++){var ratio=(imgCache[i].offsetWidth/imgCache[i].origWidth);imgCache[i].style.height=(imgCache[i].origHeight*ratio)+"px";}});}}},ieAlpha:function(img){var c=imgSizer;if(img.oldSrc){img.src=img.oldSrc;}
var src=img.src;img.style.width=img.offsetWidth+"px";img.style.height=img.offsetHeight+"px";img.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')"
img.oldSrc=src;img.src=c.Config.spacer;},resize:function(func){var oldonresize=window.onresize;if(typeof window.onresize!='function'){window.onresize=func;}else{window.onresize=function(){if(oldonresize){oldonresize();}
func();}}}}
function addTwitterBSClass(thisObj){var title=$(thisObj).attr('title');if(title){var titles=title.split(' ');if(titles[0]){var num=parseInt(titles[0]);if(num>0)
$(thisObj).addClass('label');if(num==2)
$(thisObj).addClass('label label-info');if(num>2&&num<4)
$(thisObj).addClass('label label-success');if(num>=5&&num<10)
$(thisObj).addClass('label label-warning');if(num>=10)
$(thisObj).addClass('label label-important');}}
else
$(thisObj).addClass('label');return true;}
$(document).ready(function(){$("#tag-cloud a").each(function(){addTwitterBSClass(this);return true;});$("p.tags a").each(function(){addTwitterBSClass(this);return true;});$("ol.commentlist a.comment-reply-link").each(function(){$(this).addClass('btn btn-success btn-small');return true;});$('article.post').hover(function(){$('a.edit-post').show();},function(){$('a.edit-post').hide();});$('[placeholder]').focus(function(){var input=$(this);if(input.val()==input.attr('placeholder')){input.val('');input.removeClass('placeholder');}}).blur(function(){var input=$(this);if(input.val()==''||input.val()==input.attr('placeholder')){input.addClass('placeholder');input.val(input.attr('placeholder'));}}).blur();$('[placeholder]').parents('form').submit(function(){$(this).find('[placeholder]').each(function(){var input=$(this);if(input.val()==input.attr('placeholder')){input.val('');}})});$('#s').focus(function(){if($(window).width()<940){$(this).animate({width:'200px'});}});$('#s').blur(function(){if($(window).width()<940){$(this).animate({width:'100px'});}});$('.alert-message').alert();$('.dropdown-toggle').dropdown();});