$(document).ready(function(){setTimeout(function(){$(".home-image-overlay").addClass("visible"),$(".home-image-text-shadow").addClass("visible");var t=$(".home-image-text");setTimeout(function(){$(function(){t.animate({opacity:1},1e3)})},1e3)},1e3),$(".image-credit").mouseenter(function(){var t=$(this).parent().parents().attr("img-id"),e='[img-id="'+t+'"]',i=$(e+" .photo-icon").position().left-6,a=$(e+" .image-title");a.offset({left:i}),a.show()}),$(".image-credit").mouseleave(function(){var t=$(this).parent().parents().attr("img-id"),e='[img-id="'+t+'"]';$(e+" .image-title").hide()}),$(".gdoc-html-container table tbody tr").each(function(){var t=$(this).children("td").length;$(this).children("td").css("width","calc(100%/"+t+")")}),$(".person-desc").each(function(){$(this).html($.parseHTML($(this).text()))}),$(".gdoc-html-container")[0]&&($("a[href*='%3']").each(function(){var t=this.href,e=t.replace("%3","=");$(this).attr("href",e)}),$("a[href^='#h.']").each(function(){var t=$(this).attr("href").replace("#",""),e=$(this).text().replace(/\s+/g,"-").toLowerCase();$("[id*='"+t+"']").attr("id",e),$(this).attr("href","#"+e)})),$("a[href^='#'], a[id^=ftnt]").click(function(){if(window.scroll)var t=$(window).scrollTop(),e=setInterval(function(){var i=$(window).scrollTop();t!==i&&($(window).scrollTop(i-62),clearInterval(e))},10)}),$(document).on("iframeinputfocus",function(t,e){resizeIframe($("iframe."+e)[0])})});