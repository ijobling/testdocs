window.Rainbow=function(){function e(e){var t,n=e.getAttribute&&e.getAttribute("data-language")||0;if(!n)for(e=e.attributes,t=0;t<e.length;++t)if("data-language"===e[t].nodeName)return e[t].nodeValue;return n}function t(t){var n=e(t)||e(t.parentNode);if(!n){var i=/\blang(?:uage)?-(\w+)/;(t=t.className.match(i)||t.parentNode.className.match(i))&&(n=t[1])}return n}function n(e,t){for(var n in f[y])if(n=parseInt(n,10),(e==n&&t==f[y][n]?0:n>=e&&t>=f[y][n])&&(delete f[y][n],delete p[y][n]),e>=n&&e<f[y][n]||t>n&&t<f[y][n])return!0;return!1}function i(e,t){return'<span class="'+e.replace(/\./g," ")+(d?" "+d:"")+'">'+t+"</span>"}function o(e,t,s,c){var u=e.exec(s);if(u){++b,!t.name&&"string"==typeof t.matches[0]&&(t.name=t.matches[0],delete t.matches[0]);var d=u[0],h=u.index,m=u[0].length+h,g=function(){function n(){o(e,t,s,c)}b%100>0?n():setTimeout(n,0)};if(n(h,m))g();else{var v=r(t.matches),w=function(e,n,o){if(e>=n.length)o(d);else{var r=u[n[e]];if(r){var s=t.matches[n[e]],c=s.language,h=s.name&&s.matches?s.matches:s,p=function(t,r,a){var s;s=0;var l;for(l=1;l<n[e];++l)u[l]&&(s+=u[l].length);r=a?i(a,r):r,d=d.substr(0,s)+d.substr(s).replace(t,r),w(++e,n,o)};c?l(r,c,function(e){p(r,e)}):"string"==typeof s?p(r,r,s):a(r,h.length?h:[h],function(e){p(r,e,s.matches?s.name:0)})}else w(++e,n,o)}};w(0,v,function(e){t.name&&(e=i(t.name,e)),p[y]||(p[y]={},f[y]={}),p[y][h]={replace:u[0],"with":e},f[y][h]=m,g()})}}else c()}function r(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t);return n.sort(function(e,t){return t-e})}function a(e,t,n){function i(t,r){r<t.length?o(t[r].pattern,t[r],e,function(){i(t,++r)}):s(e,function(e){delete p[y],delete f[y],--y,n(e)})}++y,i(t,0)}function s(e,t){function n(e,t,i,o){if(i<t.length){++w;var r=t[i],a=p[y][r],e=e.substr(0,r)+e.substr(r).replace(a.replace,a["with"]),r=function(){n(e,t,++i,o)};w%250>0?r():setTimeout(r,0)}else o(e)}var i=r(p[y]);n(e,i,0,t)}function l(e,t,n){var i=m[t]||[],o=m[v]||[],t=g[t]?i:i.concat(o);a(e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),t,n)}function c(e,n,i){if(n<e.length){var o=e[n],r=t(o);return-1<(" "+o.className+" ").indexOf(" rainbow ")||!r?c(e,++n,i):(r=r.toLowerCase(),o.className+=o.className?" rainbow":"rainbow",l(o.innerHTML,r,function(t){o.innerHTML=t,p={},f={},h&&h(o,r),setTimeout(function(){c(e,++n,i)},0)}))}i&&i()}function u(e,t){var n,e=e&&"function"==typeof e.getElementsByTagName?e:document,i=e.getElementsByTagName("pre"),o=e.getElementsByTagName("code"),r=[];for(n=0;n<o.length;++n)r.push(o[n]);for(n=0;n<i.length;++n)i[n].getElementsByTagName("code").length||r.push(i[n]);c(r,0,t)}var d,h,p={},f={},m={},g={},y=0,v=0,b=0,w=0;return{extend:function(e,t,n){1==arguments.length&&(t=e,e=v),g[e]=n,m[e]=t.concat(m[e]||[])},b:function(e){h=e},a:function(e){d=e},color:function(e,t,n){return"string"==typeof e?l(e,t,n):"function"==typeof e?u(0,e):(u(e,t),void 0)}}}(),window.addEventListener?window.addEventListener("load",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color),Rainbow.onHighlight=Rainbow.b,Rainbow.addClass=Rainbow.a;