(()=>{var t={126:(t,e,n)=>{var r={"./OpenSans-Bold.ttf":815,"./OpenSans-Regular.ttf":715};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=126},310:(t,e,n)=>{var r={"./check.svg":970,"./clipboard-check.svg":108,"./list.svg":11,"./plus.svg":789,"./three-dots.svg":411,"./trash.svg":791};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=310},815:(t,e,n)=>{"use strict";t.exports=n.p+"OpenSans-Bold.ttf"},715:(t,e,n)=>{"use strict";t.exports=n.p+"OpenSans-Regular.ttf"},970:(t,e,n)=>{"use strict";t.exports=n.p+"4db2e6cc06dd8ff2972b.svg"},108:(t,e,n)=>{"use strict";t.exports=n.p+"bfdcffc5a485ac149ec2.svg"},11:(t,e,n)=>{"use strict";t.exports=n.p+"9386c761c67ed88eec1f.svg"},789:(t,e,n)=>{"use strict";t.exports=n.p+"220c9e2941557f267da2.svg"},411:(t,e,n)=>{"use strict";t.exports=n.p+"2d7eda27c937cb6da5a1.svg"},791:(t,e,n)=>{"use strict";t.exports=n.p+"a97e8c89a73c26b03b7d.svg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!t;)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(n){e(1,arguments);var r=Object.prototype.toString.call(n);return n instanceof Date||"object"===t(n)&&"[object Date]"===r?new Date(n.getTime()):"number"==typeof n||"[object Number]"===r?new Date(n):("string"!=typeof n&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(t){e(1,arguments);var n=r(t),a=n.getUTCDay(),o=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function i(t){e(1,arguments);var n=r(t),a=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var s=o(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var c=o(u);return n.getTime()>=s.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}var s={};function u(){return s}function c(t,n){var o,i,s,c,d,l,f,h;e(1,arguments);var m=u(),g=a(null!==(o=null!==(i=null!==(s=null!==(c=null==n?void 0:n.weekStartsOn)&&void 0!==c?c:null==n||null===(d=n.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==s?s:m.weekStartsOn)&&void 0!==i?i:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=r(t),v=p.getUTCDay(),b=(v<g?7:0)+v-g;return p.setUTCDate(p.getUTCDate()-b),p.setUTCHours(0,0,0,0),p}function d(t,n){var o,i,s,d,l,f,h,m;e(1,arguments);var g=r(t),p=g.getUTCFullYear(),v=u(),b=a(null!==(o=null!==(i=null!==(s=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(l=n.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==s?s:v.firstWeekContainsDate)&&void 0!==i?i:null===(h=v.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(p+1,0,b),w.setUTCHours(0,0,0,0);var y=c(w,n),k=new Date(0);k.setUTCFullYear(p,0,b),k.setUTCHours(0,0,0,0);var T=c(k,n);return g.getTime()>=y.getTime()?p+1:g.getTime()>=T.getTime()?p:p-1}function l(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const f=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return l("yy"===e?r%100:r,e.length)},h=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):l(n+1,2)},m=function(t,e){return l(t.getUTCDate(),e.length)},g=function(t,e){return l(t.getUTCHours()%12||12,e.length)},p=function(t,e){return l(t.getUTCHours(),e.length)},v=function(t,e){return l(t.getUTCMinutes(),e.length)},b=function(t,e){return l(t.getUTCSeconds(),e.length)},w=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return l(Math.floor(r*Math.pow(10,n-3)),e.length)};var y={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return f(t,e)},Y:function(t,e,n,r){var a=d(t,r),o=a>0?a:1-a;return"YY"===e?l(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):l(o,e.length)},R:function(t,e){return l(i(t),e.length)},u:function(t,e){return l(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return l(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return l(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return h(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return l(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,o,i){var s=function(t,n){e(1,arguments);var o=r(t),i=c(o,n).getTime()-function(t,n){var r,o,i,s,l,f,h,m;e(1,arguments);var g=u(),p=a(null!==(r=null!==(o=null!==(i=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(l=n.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==o?o:null===(h=g.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1),v=d(t,n),b=new Date(0);return b.setUTCFullYear(v,0,p),b.setUTCHours(0,0,0,0),c(b,n)}(o,n).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===n?o.ordinalNumber(s,{unit:"week"}):l(s,n.length)},I:function(t,n,a){var s=function(t){e(1,arguments);var n=r(t),a=o(n).getTime()-function(t){e(1,arguments);var n=i(t),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),o(r)}(n).getTime();return Math.round(a/6048e5)+1}(t);return"Io"===n?a.ordinalNumber(s,{unit:"week"}):l(s,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):m(t,e)},D:function(t,n,a){var o=function(t){e(1,arguments);var n=r(t),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=a-n.getTime();return Math.floor(o/864e5)+1}(t);return"Do"===n?a.ordinalNumber(o,{unit:"dayOfYear"}):l(o,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return l(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return l(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return l(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):l(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):v(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):b(t,e)},S:function(t,e){return w(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return T(a);case"XXXX":case"XX":return S(a);default:return S(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return T(a);case"xxxx":case"xx":return S(a);default:return S(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+k(a,":");default:return"GMT"+S(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+k(a,":");default:return"GMT"+S(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return l(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return l((r._originalDate||t).getTime(),e.length)}};function k(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+l(o,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+l(Math.abs(t)/60,2):S(t,e)}function S(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+l(Math.floor(a/60),2)+n+l(a%60,2)}const x=y;var M=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},C=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},D={p:C,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return M(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",M(a,e)).replace("{{time}}",C(o,e))}};const _=D;var j=["D","DD"],P=["YY","YYYY"];function U(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function L(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var E,O={date:L({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:L({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:L({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},W={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function N(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function H(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(u);return i=t.valueCallback?t.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(s.length)}}}const Y={code:"en-US",formatDistance:function(t,e,n){var r,a=q[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:O,formatRelative:function(t,e,n,r){return W[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:N({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:N({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:N({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:N({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:N({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(E={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(E.matchPattern);if(!n)return null;var r=n[0],a=t.match(E.parsePattern);if(!a)return null;var o=E.valueCallback?E.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var F=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,z=/^'([^]*?)'?$/,$=/''/g,B=/[a-zA-Z]/;function I(n,o,i){var s,c,d,l,f,h,m,g,p,v,b,w,y,k,T,S,M,C;e(2,arguments);var D=String(o),q=u(),L=null!==(s=null!==(c=null==i?void 0:i.locale)&&void 0!==c?c:q.locale)&&void 0!==s?s:Y,E=a(null!==(d=null!==(l=null!==(f=null!==(h=null==i?void 0:i.firstWeekContainsDate)&&void 0!==h?h:null==i||null===(m=i.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==f?f:q.firstWeekContainsDate)&&void 0!==l?l:null===(p=q.locale)||void 0===p||null===(v=p.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==d?d:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var O=a(null!==(b=null!==(w=null!==(y=null!==(k=null==i?void 0:i.weekStartsOn)&&void 0!==k?k:null==i||null===(T=i.locale)||void 0===T||null===(S=T.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==y?y:q.weekStartsOn)&&void 0!==w?w:null===(M=q.locale)||void 0===M||null===(C=M.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==b?b:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var W=r(n);if(!function(n){if(e(1,arguments),!function(n){return e(1,arguments),n instanceof Date||"object"===t(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(W))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(W),H=function(t,n){return e(2,arguments),function(t,n){e(2,arguments);var o=r(t).getTime(),i=a(n);return new Date(o+i)}(t,-a(n))}(W,N),I={firstWeekContainsDate:E,weekStartsOn:O,locale:L,_originalDate:W};return D.match(A).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,_[e])(t,L.formatLong):t})).join("").match(F).map((function(t){if("''"===t)return"'";var e,r,a=t[0];if("'"===a)return(r=(e=t).match(z))?r[1].replace($,"'"):e;var s,u=x[a];if(u)return null!=i&&i.useAdditionalWeekYearTokens||(s=t,-1===P.indexOf(s))||U(t,o,String(n)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==j.indexOf(t)}(t)||U(t,o,String(n)),u(H,t,L.localize,I);if(a.match(B))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}function Q(){"true"===document.querySelector(".aside").dataset.shown&&(document.querySelector(".aside").setAttribute("data-shown","false"),document.querySelector("#transparent-background").style.display="none")}function G(){document.body.classList.toggle("light"),document.body.classList.toggle("dark")}n(310),n(126),document.querySelector("#menu-btn").addEventListener("click",(function(){"false"===document.querySelector(".aside").dataset.shown&&(document.querySelector(".aside").setAttribute("data-shown","true"),document.querySelector("#transparent-background").style.display="block")})),document.querySelector("#transparent-background").addEventListener("click",Q);class R{constructor(t,e=!1){this.text=t,this.isDone=e}toggle(){this.isDone=!this.isDone}}class X{constructor(t,e=[],n){this.name=t,this.tasks=e,this.datetime=n||I(new Date,"EEE dd-MM-yyyy HH:mm")}changeName(t){this.name=t}addTask(t){const e=new R(t);this.tasks.push(e)}deleteTask(t){this.tasks.splice(t,1)}get tasksUnfinished(){let t=0;for(let e of this.tasks)!1===e.isDone&&t++;return t}get percentComplete(){let t=0;for(let e of this.tasks)!0===e.isDone&&t++;return Math.round(t/this.tasks.length*100)||0}}const J={projects:[],logbook:{projects:[],deleteProject:function(t){this.projects.splice(t,1)}},createProject:function(t,e,n){const r=new X(t,e,n);return this.projects.push(r),r},deleteProject:function(t){this.projects.splice(t,1)},renameProject:function(t,e){this.projects[t].changeName(e)},moveToLogbook:function(t){const e=this.projects.splice(t,1)[0];return this.logbook.projects.push(e),e}},V=function(){let t=[];for(const e of J.projects){const n={name:e.name,datetime:e.datetime,tasks:[]};for(const t of e.tasks){const e={text:t.text,isDone:t.isDone};n.tasks.push(e)}t.push(n)}localStorage.setItem("data",JSON.stringify(t))};function K(){const t=document.querySelector(".aside"),e=t.querySelector(".my-projects");let n=0;e.innerHTML="",e.innerHTML+='<h6 class="my-projects-heading">My projects</h6>';for(let t of J.projects)t.tasksUnfinished>0?e.innerHTML+=`\n        <button class="button aside__item" data-index="${J.projects.indexOf(t)}">\n        <p>${t.name}</p>\n        <div class="aside__indicator">${t.tasksUnfinished}</div>\n        </button>\n      `:e.innerHTML+=`\n        <button class="button aside__item" data-index="${J.projects.indexOf(t)}">\n        <p>${t.name}</p>\n        </button>\n      `,n+=t.tasksUnfinished;e.innerHTML+='\n    <button class="button aside__item" id="new-project-btn">\n    <p>New project</p>\n    <div class="aside__indicator"></div>\n    </button>\n  ',t.querySelector(".aside__indicator").textContent=n}function Z(t,e){let n=J.projects[t];"log"===e&&(n=J.logbook.projects[t]);const r=document.createElement("section");r.classList.add("section"),r.dataset.index=t,r.innerHTML+=`\n    <div class="section__header">\n      <h3 class="section__title">${n.name}</h3>\n      <button class="button section__opt section--add-task">\n        <p>New task</p>\n        <div class="icon section__opt__icon"></div>\n      </button>\n      <button class="button section__opt section--delete">\n        <p>Delete project</p>\n        <div class="icon section__opt__icon"></div>\n      </button>\n    </div>\n  `;for(let t of n.tasks){const e=n.tasks.indexOf(t);let a="task";!0===t.isDone&&(a="task task--checked"),r.innerHTML+=`\n      <div class="${a}" data-index="${e}">\n        <div class="button task__tick"></div>\n        <p class="button task__text">${t.text}</p>\n      </div>\n    `}return r.innerHTML+=`\n    <div class="section__subtext">\n      <p class="section__subtext__completion">${n.percentComplete}% completed</p>\n      <p class="section__subtext__date">${"Created on "+n.datetime}</p>\n    </div>\n  `,r}function tt(t,e){document.querySelector(`.section[data-index="${t}"]`).replaceWith(e)}function et(t){const e=document.querySelector(".main").querySelector(".container");if(e.innerHTML="","number"==typeof t)document.querySelector(".main").querySelector(".container").appendChild(Z(t));else if("all"===t){e.innerHTML+='<h2 class="main__title">My tasks</h2>';for(let t=0;t<J.projects.length;t++)document.querySelector(".main").querySelector(".container").appendChild(Z(t))}else if("log"===t){e.innerHTML+='<h2 class="main__title">Logbook</h2>';for(let t=0;t<J.logbook.projects.length;t++)document.querySelector(".main").querySelector(".container").appendChild(Z(t,"log"))}}function nt(){document.querySelectorAll(".task__delete-button").forEach((t=>{t.remove()})),document.querySelectorAll("form.task").forEach((t=>{t.remove()}))}"dark"===localStorage.getItem("prefferedTheme")&&(G(),document.querySelector("#theme-toggle p").innerHTML="Switch to Light theme"),function(){const t=JSON.parse(localStorage.getItem("data"))||JSON.parse('[{"name":"Chores","datetime":"Thu 18-05-2023 21:30","tasks":[{"text":"Do laundry","isDone":false},{"text":"Wash the dishes","isDone":true},{"text":"Feed the cat","isDone":false}]},{"name":"Super project!!!","datetime":"Thu 18-05-2023 21:30","tasks":[{"text":"Make tea","isDone":true},{"text":"Drink tea","isDone":false}]}]');for(const e of t){const t=[];for(const n of e.tasks)t.push(new R(n.text,n.isDone));J.createProject(e.name,t,e.datetime)}}(),K(),et("all"),document.querySelector(".aside").addEventListener("click",(t=>{(t.target.classList.contains("button")||t.target.parentElement.classList.contains("button"))&&function(t){const e=t.target.closest(".button");e.dataset.index?et(parseInt(e.dataset.index)):"all-tasks-btn"===e.id?et("all"):"logbook-btn"===e.id&&et("log"),"theme-toggle"===e.id&&(G(),"Switch to Dark theme"===e.querySelector("p").innerHTML?(e.querySelector("p").innerHTML="Switch to Light theme",localStorage.setItem("prefferedTheme","dark")):(e.querySelector("p").innerHTML="Switch to Dark theme",localStorage.setItem("prefferedTheme","light"))),"new-project-btn"===e.id&&function(){const t=document.querySelector(".main").querySelector(".container");t.innerHTML="",t.innerHTML+='<h2 class="main__title">New project</h2>';const e=document.createElement("section");e.classList.add("section"),e.innerHTML+='\n    <div class="section__header">\n      <form autocomplete="off">\n        <input class="section__title" type="text" id="project-name-field" maxlength="30" placeholder="Enter name">\n        <button type="submit" id="project-submit-btn" class="button section__opt section--add-task">\n          <p>Create new project</p>\n          <div class="section__opt__icon icon"></div>\n        </button>\n      </form>\n    </div>\n  ',t.appendChild(e)}(),Q()}(t)})),document.querySelector(".main").addEventListener("click",(t=>{t.target.classList.contains("button")||t.target.parentElement.classList.contains("button")?function(t){const e=t.target.closest(".button");if(e.classList.contains("task__text")){nt();const t=document.createElement("div");t.classList.add("task__delete-button","button"),e.parentElement.appendChild(t)}else"submit"===e.getAttribute("type")||e.classList.contains("new-task")||e.classList.contains("task__delete-button")||nt();if("project-submit-btn"===e.id){t.preventDefault();const e=document.querySelector(".main").querySelector("input").value;/^\S.*\S$/.test(e)&&function(t){const e=J.createProject(t),n=J.projects.indexOf(e);V(),K(),et(n)}(e)}if(e.classList.contains("section--add-task")&&"project-submit-btn"!==e.id){const t=document.createElement("form");t.classList.add("task","new-task","button"),t.setAttribute("autocomplete","off"),t.innerHTML='\n      <div class="button task__tick"></div>\n      <input type="text" maxlength="99" id="new-task-text" placeholder="Enter task">\n      <button type="submit" class="button section__opt" id="task-submit-btn"></button>\n    ';const n=e.closest("section");n.insertBefore(t,n.querySelector(".task")),n.querySelector("input").select()}if("task-submit-btn"===e.id){t.preventDefault();const n=document.querySelector("#new-task-text").value;if(/^\S.*\S$/.test(n)){!function(t,e){J.projects[t].addTask(e),V(),K(),tt(t,Z(t))}(parseInt(e.closest(".section").dataset.index),n)}}if(e.classList.contains("task__delete-button")){!function(t,e){J.projects[t].deleteTask(e),V(),K(),tt(t,Z(t))}(parseInt(t.target.closest(".section").dataset.index),parseInt(t.target.parentElement.dataset.index))}if(e.classList.contains("section--delete")){!function(t){J.deleteProject(t),V(),K(),et("all")}(parseInt(e.closest(".section").dataset.index))}if(e.classList.contains("task__tick")){!function(t,e){J.projects[t].tasks[e].toggle(),V(),K(),tt(t,Z(t))}(parseInt(t.target.closest(".section").dataset.index),parseInt(t.target.parentElement.dataset.index))}}(t):nt()}))})()})();