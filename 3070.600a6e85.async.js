"use strict";(self.webpackChunk_antv_ava_site=self.webpackChunk_antv_ava_site||[]).push([[3070],{60219:function(t,e,n){n.d(e,{$:function(){return S}});var r=n(67294),o=n(1413),a=n(4942),l=n(91),i=n(94184),c=n.n(i),u=function(t){var e=t.prefixCls,n=t.icon,o=t.title,a=t.items,l=void 0===a?[]:a,i=t.style,u=t.className;return r.createElement("div",{className:c()("".concat(e,"-column"),u),style:i},(o||n)&&r.createElement("h2",null,n&&r.createElement("span",{className:"".concat(e,"-column-icon")},n),o),l.map((function(t,n){var o=t.LinkComponent||"a";return r.createElement("div",{className:c()("".concat(e,"-item"),t.className),style:t.style,key:n},r.createElement(o,{href:t.url,to:"string"!=typeof o?t.url:void 0,target:t.openExternal?"_blank":void 0,rel:t.openExternal?"noopener noreferrer":void 0},t.icon&&r.createElement("span",{className:"".concat(e,"-item-icon")},t.icon),t.title),t.description&&r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(e,"-item-separator")},"-"),r.createElement("span",{className:"".concat(e,"-item-description")},t.description)))})))},s=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],m=function(t){var e=t.prefixCls,n=void 0===e?"rc-footer":e,i=t.className,m=t.style,f=t.bottom,p=t.columns,d=t.maxColumnsPerRow,v=t.backgroundColor,b=t.columnLayout,y=t.theme,g=void 0===y?"dark":y,h=(0,l.Z)(t,s),E=c()("".concat(n),i,(0,a.Z)({},"".concat(n,"-").concat(g),!!g)),Z="number"==typeof d&&d>0;return r.createElement("footer",(0,o.Z)((0,o.Z)({},h),{},{className:E,style:(0,o.Z)((0,o.Z)({},m),{},{backgroundColor:v})}),r.createElement("section",{className:"".concat(n,"-container")},p&&p.length>0&&r.createElement("section",{className:"".concat(n,"-columns"),style:{justifyContent:b,flexWrap:Z?"wrap":void 0}},p.map((function(t,e){var a=t.title,l=t.icon,i=t.style,c=t.className,s=t.items,m=void 0===s?[]:s,f=(0,o.Z)({},i);return Z&&(f.flex="0 0 ".concat(100/(d+1)+.1,"%")),r.createElement(u,{key:e,prefixCls:n,title:a,icon:l,items:m,style:f,className:c})})))),f&&r.createElement("section",{className:"".concat(n,"-bottom")},r.createElement("div",{className:"".concat(n,"-bottom-container")},f)))},f=n(14156),p=n(1210),d=n(25035),v=n(75114),b=n(32180),y=n(85956),g="WF9nALVmIy4PTMBRe1VJ",h="T5jVEjrxEK00xQCP4yeQ",E="GxlXNkYLrEMMFl3TuIlt";function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}var x=["columns","bottom","theme","language","isDynamicFooter","rootDomain","className"];function w(){return w=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},w.apply(this,arguments)}function j(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==Z(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==Z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===Z(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var S=function(t){var e=t.columns,n=t.bottom,o=t.theme,a=void 0===o?"dark":o,l=(t.language,t.isDynamicFooter),i=t.rootDomain,u=void 0===i?"":i,s=t.className,Z=k(t,x),S=(0,y.bU)().id;return r.createElement(m,w({maxColumnsPerRow:5,theme:a,columns:e||[{title:"Resources",items:[{title:"Ant Design",url:"https://ant.design",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design",openExternal:!0},{title:"Umi",description:r.createElement(y._H,{id:"React 应用开发框架"}),url:"https://umijs.org",openExternal:!0},{title:"Dumi",description:r.createElement(y._H,{id:"组件/文档研发工具"}),url:"https://d.umijs.org",openExternal:!0},{title:"ahooks",description:r.createElement(y._H,{id:"React Hooks 库"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:r.createElement(y._H,{id:"国内镜像"}),url:"https://antv.antgroup.com/"}]},{title:r.createElement(y._H,{id:"社区"}),items:[{icon:r.createElement(f.Z,{style:{color:"#0084ff"}}),title:r.createElement(y._H,{id:"体验科技专栏"}),url:"http://zhuanlan.zhihu.com/xtech",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",alt:"seeconf"}),title:"SEE Conf",description:r.createElement(y._H,{id:"蚂蚁体验科技大会"}),url:"https://seeconf.antfin.com/",openExternal:!0}]},{title:r.createElement(y._H,{id:"帮助"}),items:[{icon:r.createElement(p.Z,null),title:"GitHub",url:"https://github.com/antvis",openExternal:!0},{icon:r.createElement(d.Z,null),title:r.createElement(y._H,{id:"StackOverflow"}),url:"http://stackoverflow.com/questions/tagged/antv",openExternal:!0}]},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"more products"}),title:"更多产品",items:[{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Ant Design"}),title:"Ant Design",url:"https://ant.design",description:"企业级 UI 设计语言",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),title:"语雀",url:"https://yuque.com",description:"知识创作与分享工具",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png",alt:"Egg"}),title:"Egg",url:"https://eggjs.org",description:"企业级 Node 开发框架",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",alt:"kitchen"}),title:"Kitchen",description:"Sketch 工具集",url:"https://kitchen.alipay.com",openExternal:!0},{icon:r.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",alt:"xtech"}),title:"蚂蚁体验科技",url:"https://xtech.antfin.com/",openExternal:!0}]}],className:c()(g,s,j({},E,l)),bottom:n||r.createElement(r.Fragment,null,r.createElement("div",{className:h},r.createElement("div",null,r.createElement("a",{href:"https://weibo.com/antv2017",target:"_blank",rel:"noopener noreferrer"},r.createElement(v.Z,null)),r.createElement("a",{href:"https://zhuanlan.zhihu.com/aiux-antv",target:"_blank",rel:"noopener noreferrer"},r.createElement(f.Z,null)),r.createElement("a",{href:"https://github.com/antvis",target:"_blank",rel:"noopener noreferrer"},r.createElement(p.Z,null)),r.createElement("a",{href:"".concat(u,"/").concat(S,"/about")},r.createElement(y._H,{id:"关于我们"}))),r.createElement("div",null,"© ",(new Date).getFullYear()," Made with ❤ by"," ",r.createElement("a",{href:"https://xtech.antfin.com/"},"AntV"))))},(0,b.Z)(Z,["githubUrl"])))}},50927:function(t,e,n){n.d(e,{ZY:function(){return s},ic:function(){return f},km:function(){return u},oM:function(){return p},tF:function(){return m}});var r=n(67294),o=n(16423),a=n(85956);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,l,i=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(i.push(r.value),i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=function(){var t=i((0,r.useState)(!1),2),e=t[0],n=t[1];return(0,r.useEffect)((function(){window.location.host.includes("gitee.io")&&window.location.host.includes("antv")&&n(!0)}),[]),[e]},s=function(){document.body.scrollTop=document.documentElement.scrollTop=0},m=function(){var t=i((0,r.useState)([]),2),e=t[0],n=t[1];return(0,r.useEffect)((function(){var t=document.querySelectorAll("aside .ant-menu-item a"),e=document.querySelector("aside .ant-menu-item-selected a"),r=Array.from(t).findIndex((function(t){return t===e})),o=r-1>=0?t[r-1]:void 0,a=r+1<t.length?t[r+1]:void 0,l=o?{slug:o.getAttribute("href")||void 0,title:o.textContent||void 0}:void 0,i=a?{slug:a.getAttribute("href")||void 0,title:a.textContent||void 0}:void 0;n([l,i])}),[]),e};function f(t){return p(t,(0,a.bU)().id)}function p(t,e){return"object"===l(t)?(0,o.Z)(t,[e]):t}},10626:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(58694),o=n(17685),a=n(29169),l=n(27771),i=o.Z?o.Z.isConcatSpreadable:void 0;var c=function(t){return(0,l.Z)(t)||(0,a.Z)(t)||!!(i&&t&&t[i])};var u=function t(e,n,o,a,l){var i=-1,u=e.length;for(o||(o=c),l||(l=[]);++i<u;){var s=e[i];n>0&&o(s)?n>1?t(s,n-1,o,a,l):(0,r.Z)(l,s):a||(l[l.length]=s)}return l}},47855:function(t,e){e.Z=function(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=t[r+e];return a}},60337:function(t,e,n){var r=n(27449),o=n(935),a=n(68573),l=n(62281);e.Z=function(t,e){return e=(0,r.Z)(e,t),null==(t=(0,a.Z)(t,e))||delete t[(0,l.Z)((0,o.Z)(e))]}},41417:function(t,e,n){var r=n(27961),o=n(45644),a=n(90734);e.Z=function(t){return(0,a.Z)((0,o.Z)(t,void 0,r.Z),t+"")}},68573:function(t,e,n){var r=n(13317),o=n(47855);e.Z=function(t,e){return e.length<2?t:(0,r.Z)(t,(0,o.Z)(e,0,-1))}},27961:function(t,e,n){var r=n(10626);e.Z=function(t){return(null==t?0:t.length)?(0,r.Z)(t,1):[]}},935:function(t,e){e.Z=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},32180:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(74073),o=n(38225),a=n(60337),l=n(27449),i=n(31899),c=n(37514);var u=function(t){return(0,c.Z)(t)?void 0:t},s=n(41417),m=n(4403),f=(0,s.Z)((function(t,e){var n={};if(null==t)return n;var c=!1;e=(0,r.Z)(e,(function(e){return e=(0,l.Z)(e,t),c||(c=e.length>1),e})),(0,i.Z)(t,(0,m.Z)(t),n),c&&(n=(0,o.Z)(n,7,u));for(var s=e.length;s--;)(0,a.Z)(n,e[s]);return n}))}}]);