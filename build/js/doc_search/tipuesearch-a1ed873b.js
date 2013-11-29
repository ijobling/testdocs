/*
Tipue Search 2.0
Copyright (c) 2012 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/
!function(e){e.fn.tipuesearch=function(t){var n=e.extend({show:7,newWindow:!1,showURL:!0,minimumLength:3,descriptiveWords:25,highlightTerms:!1,highlightEveryTerm:!1,mode:"static",contentLocation:"tipuesearch/tipuesearch_content.json"},t);return this.each(function(){function t(e){return decodeURIComponent((new RegExp("[?|&]"+e+"="+"([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}function i(t,a){e("#tipue_search_content").hide();var s="",c=!1,l=!1,d=e(".docs aside form input").val().toLowerCase();d=e.trim(d);var u=d.split(" ");if(d.length>=n.minimumLength){if(a){for(var f=d,p=0;p<u.length;p++)for(var h=0;h<tipuesearch_replace.words.length;h++)u[p]==tipuesearch_replace.words[h].word&&(d=d.replace(u[p],tipuesearch_replace.words[h].replace_with),c=!0);u=d.split(" ")}for(var g=d,p=0;p<u.length;p++)for(var h=0;h<tipuesearch_stem.words.length;h++)u[p]==tipuesearch_stem.words[h].word&&(g=g+" "+tipuesearch_stem.words[h].stem);u=g.split(" ");var m=0;found=new Array;for(var p=0;p<r.pages.length;p++)if(void 0!=r.pages[p].t){for(var v=1e7,y=r.pages[p].t,h=0;h<u.length;h++){var b=new RegExp(u[h],"i");if(-1!=r.pages[p].t.search(b)&&(v-=2e3-p),r.pages[p].text&&-1!=r.pages[p].text.search(b)&&(v-=1500-p),n.highlightTerms){if(n.highlightEveryTerm)var w=new RegExp("("+u[h]+")","gi");else var w=new RegExp("("+u[h]+")","i");y=y.replace(w,"<em>$1</em>")}-1!=r.pages[p].b.search(b)&&(v-=1e3-p)}1e7>v&&(found[m++]=v+"^"+r.pages[p].r+"^"+y+"^"+r.pages[p].u)}if(0!=m){1==c&&(s+='<div id="tipue_search_warning_head">Showing results for '+d+"</div>",s+='<div id="tipue_search_warning">Show results for <a href="javascript:void(0)" id="tipue_search_replaced">'+f+"</a></div>"),1==m?s+='<div id="tipue_search_results_count">1 result for '+d+"...</div>":(c_c=m.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),s+='<div id="tipue_search_results_count">'+c_c+" results for "+d+"...</div>"),found.sort();for(var x=0,p=0;p<found.length;p++){var _=found[p].split("^");if(x>=t&&x<n.show+t){s+='<div id="tipue_search_content_title"><a href="'+_[3]+'"'+o+">"+_[1]+"</a></div>";var k=_[2],C="",T=k.split(" ");if(T.length<n.descriptiveWords)C=k;else for(var h=0;h<n.descriptiveWords;h++)C+=T[h]+" ";C=e.trim(C),"."!=C.charAt(C.length-1)&&(C+=" ..."),s+='<div id="tipue_search_content_text">'+C+"</div>",n.showURL&&(s+='<div id="tipue_search_content_loc"><a href="'+_[3]+'"'+o+">"+_[3]+"</a></div>")}x++}if(m>n.show){var S=Math.ceil(m/n.show),O=t/n.show;if(s+='<div id="tipue_search_foot"><ul id="tipue_search_foot_boxes">',t>0&&(s+='<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+(t-n.show)+"_"+a+'">&#171; Previous</a></li>'),4>=O){var E=S;S>5&&(E=5);for(var h=0;E>h;h++)s+=h==O?'<li class="current">'+(h+1)+"</li>":'<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+h*n.show+"_"+a+'">'+(h+1)+"</a></li>"}else{var E=S+4;E>S&&(E=S);for(var h=O;E>h;h++)s+=h==O?'<li class="current">'+(h+1)+"</li>":'<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+h*n.show+"_"+a+'">'+(h+1)+"</a></li>"}O+1!=S&&(s+='<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+(t+n.show)+"_"+a+'">Next &#187;</a></li>'),s+="</ul></div>"}}else s+='<div id="tipue_search_warning_head">Nothing found</div>'}else l?s+='<div id="tipue_search_warning_head">Nothing found</div><div id="tipue_search_warning">Common words are largely ignored</div>':(s+='<div id="tipue_search_warning_head">Search too short</div>',s+=1==n.minimumLength?'<div id="tipue_search_warning">Should be one character or more</div>':'<div id="tipue_search_warning">Should be '+n.minimumLength+" characters or more</div>");e(".docs article").fadeOut(function(){e("#tipue_search_content").html(s).fadeIn()}),e("#tipue_search_replaced").click(function(){i(0,!1)}),e(".tipue_search_foot_box").click(function(){var t=e(this).attr("id"),n=t.split("_");i(parseInt(n[0]),n[1])})}var r={pages:[]};e.ajaxSetup({async:!1}),"json"==n.mode&&e.getJSON(n.contentLocation,function(t){r=e.extend({},t)}),"static"==n.mode&&(r=e.extend({},tipuesearch));var o="";n.newWindow&&(o=' target="_blank"'),t("q")&&(e(".docs aside form input").val(t("q")),i(0,!0)),e(".docs aside form").submit(function(){return i(0,!0),!1})})}}(jQuery);