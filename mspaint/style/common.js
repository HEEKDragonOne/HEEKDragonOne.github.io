document.writeln('<div class="modal fade"id="mod"tabindex="-1"role="dialog"aria-labelledby="myModalLabel"><div class="modal-dialog"role="document" style="width: 96%;"></style><div class="modal-content"><div class="modal-header"><button type="button"class="close"data-dismiss="modal"aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"id="mod_title">\u626b\u63cf\u4e8c\u7ef4\u7801\u4ed8\u6b3e</h4></div><div class="modal-body"id="mod_body"style="text-align: center;"></div><div class="modal-footer"><button type="button"class="btn btn-default"data-dismiss="modal">Close</button></div></div></div></div>');
"function"!=typeof String.prototype.endsWith&&(String.prototype.endsWith=function(a){return-1!==this.indexOf(a,this.length-a.length)});function showMod(a,b){$("#mod_title").text(a);$("#mod_body").html(b);$("#mod_body").css({"min-height":400})}
function showList(){var a="<div id='nav_div'>";$(".navbar-nav").eq(0).find("a").each(function(){if("#"==$(this).attr("href"))a.endsWith("/li>")&&(a+="</ul>"),a+="<div  style='clear:both;margin-bottom:10px'></div><ul><li><span>"+$(this).text()+"</span></li>";else{if("\u83dc\u5355"==$(this).text()||"\u9996\u9875"==$(this).text()||"\u5de5\u5177\u83dc\u5355"==$(this).text())return!0;a+="<li style=''>";var b="";"undefined"!=typeof $(this).attr("red")&&(b='style="color:red"');a+="<a href='"+$(this).attr("href")+
"' "+b+">"+$(this).text()+"</a></li>"}});a.endsWith("/li>")&&(a+="</ul></div>");showMod("",a)};
function show(a){layer.open({type:2,title:!1,shadeClose:!0,shade:.8,area:["100%","100%"],content:"//www.ab173.com/json/newjson.php"})}
$(function(){$("#top_menu a").click(function(){if("javascript:;"!=$(this).attr("href")){localStorage.getItem("history");var a=[];if($(this).text()=="")return;a.push($(this).text()+"-"+$(this).attr("href"));console.log(localStorage.getItem("history"));if(localStorage.getItem("history")){var d=localStorage.getItem("history").split("|"),c=$(this).text()+"-"+$(this).attr("href"),e=d.length;4<e&&(e=4);for(var b=0;b<e;b++)d[b]!=c&&a.push(d[b]);localStorage.setItem("history",a.join("|"))}localStorage.setItem("history",a.join("|"))}});if(localStorage.getItem("history")!=null){var a="",c=localStorage.getItem("history").split("|"),f;for(f in c)var g=c[f].split("-"),a=a+('<a class="btn btn-success btn-xs" style="margin-left:5px" href="'+g[1]+'">'+g[0]+"</a>");a&&($("#history").parent().show(),$("#history").html(a))}});
$(function(){ $('[click-type="copy"]').each(function () {var clipboard = new Clipboard(this);clipboard.on('success', function (e) { layer.msg('复制成功'); });clipboard.on('error', function (e) {layer.msg('复制失败');});});})


document.writeln("<div style=\"display:none;\">");
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1259236301'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/stat.php%3Fid%3D1259236301' type='text/javascript'%3E%3C/script%3E"));
document.writeln("</div>");



(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


    if(document.body.scrollWidth < 1024){
      document.getElementById('moret').style.display = 'none';
    }
    if(document.body.scrollWidth < 1024){
      document.getElementById('docs').style.display = 'none';
    }
    if(document.body.scrollWidth < 1024){
      document.getElementById('testtools').style.display = 'none';
    }
    if(document.body.scrollWidth < 1024){
      document.getElementById('jsontools').style.display = 'none';
    }
    if(document.body.scrollWidth < 1024){
      document.getElementById('bdshare').style.display = 'none';
    }
    if(document.body.scrollWidth < 1024){
      document.getElementById('lishi').style.display = 'none';
    }