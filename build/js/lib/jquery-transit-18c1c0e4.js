!function(e){function t(e){if(e in d.style)return e;var t=["Moz","Webkit","O","ms"],n=e.charAt(0).toUpperCase()+e.substr(1);if(e in d.style)return e;for(var r=0;r<t.length;++r){var i=t[r]+n;if(i in d.style)return i}}function n(){return d.style[f.transform]="",d.style[f.transform]="rotateY(90deg)",""!==d.style[f.transform]}function r(e){return"string"==typeof e&&this.parse(e),this}function i(e,t,n){t===!0?e.queue(n):t?e.queue(t,n):n()}function o(t){var n=[];return e.each(t,function(t){t=e.camelCase(t),t=e.transit.propertyMap[t]||e.cssProps[t]||t,t=c(t),-1===e.inArray(t,n)&&n.push(t)}),n}function a(t,n,r,i){var a=o(t);e.cssEase[r]&&(r=e.cssEase[r]);var s=""+u(n)+" "+r;parseInt(i,10)>0&&(s+=" "+u(i));var c=[];return e.each(a,function(e,t){c.push(t+" "+s)}),c.join(", ")}function s(t,n){n||(e.cssNumber[t]=!0),e.transit.propertyMap[t]=f.transform,e.cssHooks[t]={get:function(n){var r=e(n).css("transit:transform");return r.get(t)},set:function(n,r){var i=e(n).css("transit:transform");i.setFromString(t,r),e(n).css({"transit:transform":i})}}}function c(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function l(e,t){return"string"!=typeof e||e.match(/^[\-0-9\.]+$/)?""+e+t:e}function u(t){var n=t;return e.fx.speeds[n]&&(n=e.fx.speeds[n]),l(n,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var d=document.createElement("div"),f={},p=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;f.transition=t("transition"),f.transitionDelay=t("transitionDelay"),f.transform=t("transform"),f.transformOrigin=t("transformOrigin"),f.transform3d=n();var h={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},g=f.transitionEnd=h[f.transition]||null;for(var m in f)f.hasOwnProperty(m)&&"undefined"==typeof e.support[m]&&(e.support[m]=f[m]);d=null,e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||new r},set:function(t,n){var i=n;i instanceof r||(i=new r(i)),t.style[f.transform]="WebkitTransform"!==f.transform||p?i.toString():i.toString(!0),e(t).data("transform",i)}},e.cssHooks.transform={set:e.cssHooks["transit:transform"].set},e.fn.jquery<"1.8"&&(e.cssHooks.transformOrigin={get:function(e){return e.style[f.transformOrigin]},set:function(e,t){e.style[f.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[f.transition]},set:function(e,t){e.style[f.transition]=t}}),s("scale"),s("translate"),s("rotate"),s("rotateX"),s("rotateY"),s("rotate3d"),s("perspective"),s("skewX"),s("skewY"),s("x",!0),s("y",!0),r.prototype={setFromString:function(e,t){var n="string"==typeof t?t.split(","):t.constructor===Array?t:[t];n.unshift(e),r.prototype.set.apply(this,n)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=l(e,"deg")},rotateX:function(e){this.rotateX=l(e,"deg")},rotateY:function(e){this.rotateY=l(e,"deg")},scale:function(e,t){void 0===t&&(t=e),this.scale=e+","+t},skewX:function(e){this.skewX=l(e,"deg")},skewY:function(e){this.skewY=l(e,"deg")},perspective:function(e){this.perspective=l(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==e&&void 0!==e&&(this._translateX=l(e,"px")),null!==t&&void 0!==t&&(this._translateY=l(t,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");return e[0]&&(e[0]=parseFloat(e[0])),e[1]&&(e[1]=parseFloat(e[1])),e[0]===e[1]?e[0]:e},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),t=0;3>=t;++t)e[t]&&(e[t]=parseFloat(e[t]));return e[3]&&(e[3]=l(e[3],"deg")),e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,r){t.setFromString(n,r)})},toString:function(e){var t=[];for(var n in this)if(this.hasOwnProperty(n)){if(!f.transform3d&&("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n))continue;"_"!==n[0]&&(e&&"scale"===n?t.push(n+"3d("+this[n]+",1)"):e&&"translate"===n?t.push(n+"3d("+this[n]+",0)"):t.push(n+"("+this[n]+")"))}return t.join(" ")}},e.fn.transition=e.fn.transit=function(t,n,r,o){var s=this,c=0,l=!0;"function"==typeof n&&(o=n,n=void 0),"function"==typeof r&&(o=r,r=void 0),"undefined"!=typeof t.easing&&(r=t.easing,delete t.easing),"undefined"!=typeof t.duration&&(n=t.duration,delete t.duration),"undefined"!=typeof t.complete&&(o=t.complete,delete t.complete),"undefined"!=typeof t.queue&&(l=t.queue,delete t.queue),"undefined"!=typeof t.delay&&(c=t.delay,delete t.delay),"undefined"==typeof n&&(n=e.fx.speeds._default),"undefined"==typeof r&&(r=e.cssEase._default),n=u(n);var d=a(t,n,r,c),p=e.transit.enabled&&f.transition,h=p?parseInt(n,10)+parseInt(c,10):0;if(0===h){var m=function(e){s.css(t),o&&o.apply(s),e&&e()};return i(s,l,m),s}var y={},v=function(n){var r=!1,i=function(){r&&s.unbind(g,i),h>0&&s.each(function(){this.style[f.transition]=y[this]||null}),"function"==typeof o&&o.apply(s),"function"==typeof n&&n()};h>0&&g&&e.transit.useTransitionEnd?(r=!0,s.bind(g,i)):window.setTimeout(i,h),s.each(function(){h>0&&(this.style[f.transition]=d),e(this).css(t)})},b=function(e){this.offsetWidth,v(e)};return i(s,l,b),this},e.transit.getTransitionValue=a}(jQuery);