(function(e){function t(t){for(var r,a,i=t[0],s=t[1],l=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({groupedChunk:"groupedChunk"}[e]||e)+"."+{"chunk-2d21a3d2":"0997b729","chunk-537381ea":"f963c0f5","chunk-5bc818be":"cfa89a83",groupedChunk:"f39f3559"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-537381ea":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({groupedChunk:"groupedChunk"}[e]||e)+"."+{"chunk-2d21a3d2":"31d6cfe0","chunk-537381ea":"a9f56982","chunk-5bc818be":"31d6cfe0",groupedChunk:"31d6cfe0"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],b.parentNode.removeChild(b),n(c)},b.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"051f":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("96cf"),n("1e5c")),o=(n("99af"),function(e){var t=Math.floor(e/60)||0,n=Math.round(e-60*t||0);return"".concat(t,":").concat(n<10?"0":"").concat(n)}),c={formatTime:o};t["default"]={state:{currentSong:{},sound:{},seek:"00:00",duration:"00:00",playerProgress:"0%"},getters:{playing:function(e){return!!e.sound.playing&&e.sound.playing()}},mutations:{newSong:function(e,t){e.currentSong=t,e.sound=new a["Howl"]({src:[t.url],html5:!0})},updatePosition:function(e){e.seek=c.formatTime(e.sound.seek()),e.duration=c.formatTime(e.sound.duration()),e.playerProgress="".concat(e.sound.seek()/e.sound.duration()*100,"%")}},actions:{newSong:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,o=e.state,c=e.dispatch,o.sound instanceof a["Howl"]&&o.sound.unload(),r("newSong",t),o.sound.play(),o.sound.on("play",(function(){requestAnimationFrame((function(){c("progress")}))}));case 5:case"end":return n.stop()}}),n)})))()},toggleAudio:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.state,n.sound.playing){t.next=3;break}return t.abrupt("return");case 3:n.sound.playing()?n.sound.pause():n.sound.play();case 4:case"end":return t.stop()}}),t)})))()},progress:function(e){var t=e.commit,n=e.state,r=e.dispatch;t("updatePosition"),n.sound.playing()&&requestAnimationFrame((function(){r("progress")}))},updateSeek:function(e,t){var n=e.state,r=e.dispatch;if(n.sound.playing){var a=t.currentTarget.getBoundingClientRect(),o=a.x,c=a.width,i=t.clientX-o,s=i/c,l=n.sound.duration()*s;console.log(n.sound),n.sound.seek(l),n.sound.once("seek",(function(){r("progress")}))}}}}},"0dda":function(e,t,n){var r={"./Button.vue":"d084"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="0dda"},"13a0":function(e,t,n){},"2a74":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("159b"),n("ddb0"),n("ac1f"),n("5319");var r=n("2ef0"),a=n.n(r),o=n("d307"),c={};o.keys().forEach((function(e){if("./index.js"!==e){var t=o(e),n=a.a.camelCase(e.replace(/(\.\/|\.js)/g,""));c[n]=t.default||t}})),t["default"]=c},"49f8":function(e,t,n){var r={"./en.json":"edd4","./zh-TW.json":"9ea5"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["G"])("AppHeader"),s=Object(r["G"])("router-view"),l=Object(r["G"])("AuthModal"),u=Object(r["G"])("AppPlayer");return Object(r["A"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(i),Object(r["k"])(s,null,{default:Object(r["S"])((function(e){var t=e.Component;return[(Object(r["A"])(),Object(r["e"])(Object(r["I"])(t)))]})),_:1}),Object(r["k"])(l),Object(r["k"])(u)],64)}var o={id:"header",class:"bg-gray-700"},c={class:"container mx-auto flex justify-start items-center py-5 px-4"},i=Object(r["j"])(" Music "),s={class:"flex flex-grow items-center"},l={class:"flex flex-row mt-1"},u=Object(r["j"])(" About "),d={key:0},b=Object(r["j"])(" Manage ");function f(e,t,n,a,f,g){var m=Object(r["G"])("router-link");return Object(r["A"])(),Object(r["g"])("header",o,[Object(r["h"])("nav",c,[Object(r["k"])(m,{class:"text-white font-bold uppercase text-2xl mr-4",to:{name:"home"},"exact-active-class":"no-active"},{default:Object(r["S"])((function(){return[i]})),_:1}),Object(r["h"])("div",s,[Object(r["h"])("ul",l,[Object(r["h"])("li",null,[Object(r["k"])(m,{class:"px-2 text-white",to:{name:"about"}},{default:Object(r["S"])((function(){return[u]})),_:1})]),e.userLoggedIn?(Object(r["A"])(),Object(r["g"])(r["a"],{key:1},[Object(r["h"])("li",null,[Object(r["k"])(m,{class:"px-2 text-white",to:{name:"manage"}},{default:Object(r["S"])((function(){return[b]})),_:1})]),Object(r["h"])("li",null,[Object(r["h"])("a",{class:"px-2 text-white",href:"#",onClick:t[1]||(t[1]=Object(r["U"])((function(){return g.signOut&&g.signOut.apply(g,arguments)}),["prevent"]))},"Logout")])],64)):(Object(r["A"])(),Object(r["g"])("li",d,[Object(r["h"])("a",{class:"px-2 text-white",href:"#",onClick:t[0]||(t[0]=Object(r["U"])((function(){return e.toggleAuthModal&&e.toggleAuthModal.apply(e,arguments)}),["prevent"]))},"Login / Register")]))])])])])}var g=n("5530"),m=n("5502"),p={name:"Header",computed:Object(g["a"])({},Object(m["e"])({userLoggedIn:function(e){return e.auth.userLoggedIn}})),methods:Object(g["a"])(Object(g["a"])({},Object(m["d"])(["toggleAuthModal"])),{},{signOut:function(){this.$store.dispatch("signOut"),this.$route.meta.requiresAuth&&this.$router.push({name:"home"})}})},h=n("6b0d"),O=n.n(h);const j=O()(p,[["render",f]]);var v=j,y={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},w=Object(r["h"])("div",{class:"fixed inset-0 transition-opacity"},[Object(r["h"])("div",{class:"absolute inset-0 bg-gray-800 opacity-75"})],-1),x=Object(r["h"])("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},"​",-1),k={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},A={class:"py-4 text-left px-6"},S={class:"flex justify-between items-center pb-4"},M=Object(r["h"])("p",{class:"text-2xl font-bold"},"Your Account",-1),P=Object(r["h"])("i",{class:"fas fa-times"},null,-1),E=[P],C={class:"flex flex-wrap mb-4"},T={class:"flex-auto text-center"},_={class:"flex-auto text-center"};function L(e,t,n,a,o,c){var i=Object(r["G"])("AppLoginForm"),s=Object(r["G"])("AppRegisterForm");return Object(r["A"])(),Object(r["g"])("div",{class:Object(r["t"])(["fixed z-10 inset-0 overflow-y-auto",{hidden:!e.authModalShow}]),id:"modal"},[Object(r["h"])("div",y,[w,x,Object(r["h"])("div",k,[Object(r["h"])("div",A,[Object(r["h"])("div",S,[M,Object(r["h"])("div",{class:"modal-close cursor-pointer z-50",onClick:t[0]||(t[0]=Object(r["U"])((function(){return e.toggleAuthModal&&e.toggleAuthModal.apply(e,arguments)}),["prevent"]))},E)]),Object(r["h"])("ul",C,[Object(r["h"])("li",T,[Object(r["h"])("a",{class:Object(r["t"])(["block rounded py-3 px-4 transition",{"hover:text-white text-white bg-blue-600":"login"===o.tab,"hover:text-blue-600":"register"===o.tab}]),href:"#",onClick:t[1]||(t[1]=Object(r["U"])((function(e){return o.tab="login"}),["prevent"]))}," Login ",2)]),Object(r["h"])("li",_,[Object(r["h"])("a",{class:Object(r["t"])(["block rounded py-3 px-4 transition",{"hover:text-white text-white bg-blue-600":"register"===o.tab,"hover:text-blue-600":"login"===o.tab}]),href:"#",onClick:t[2]||(t[2]=Object(r["U"])((function(e){return o.tab="register"}),["prevent"]))}," Register ",2)])]),"login"===o.tab?(Object(r["A"])(),Object(r["e"])(i,{key:0})):(Object(r["A"])(),Object(r["e"])(s,{key:1}))])])])],2)}var F={class:"mb-3"},I=Object(r["h"])("label",{class:"inline-block mb-2"},"Email",-1),U={class:"mb-3"},N=Object(r["h"])("label",{class:"inline-block mb-2"},"Password",-1),V=["disabled"];function R(e,t,n,a,o,c){var i=Object(r["G"])("VeeField"),s=Object(r["G"])("ErrorMessage"),l=Object(r["G"])("VeeForm");return Object(r["A"])(),Object(r["g"])(r["a"],null,[o.loginShowAlert?(Object(r["A"])(),Object(r["g"])("div",{key:0,class:Object(r["t"])(["text-white text-center font-bold p-5 mb-4",o.loginAlertVariant])},Object(r["K"])(o.loginAlertMsg),3)):Object(r["f"])("",!0),Object(r["k"])(l,{onSubmit:c.login,"validation-schema":o.loginSchema},{default:Object(r["S"])((function(){return[Object(r["h"])("div",F,[I,Object(r["k"])(i,{type:"email",name:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Email"}),Object(r["k"])(s,{class:"text-red-600",name:"email"})]),Object(r["h"])("div",U,[N,Object(r["k"])(i,{type:"password",name:"password",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Password"}),Object(r["k"])(s,{class:"text-red-600",name:"password"})]),Object(r["h"])("button",{type:"submit",disabled:o.loginInSubmission,class:"block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"}," Submit ",8,V)]})),_:1},8,["onSubmit","validation-schema"])],64)}var q=n("1da1"),z=(n("96cf"),{name:"LoginForm",data:function(){return{loginSchema:{email:"required|email",password:"required|min:3|max:32"},loginInSubmission:!1,loginShowAlert:!1,loginAlertVariant:"bg-blue-500",loginAlertMsg:"Please wait! We are logging you in."}},methods:{login:function(e){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.loginShowAlert=!0,t.loginInSubmission=!0,t.loginAlertVariant="bg-blue-500",t.loginAlertMsg="Please wait! We are logging you in.",n.prev=4,n.next=7,t.$store.dispatch("login",e);case 7:n.next=15;break;case 9:return n.prev=9,n.t0=n["catch"](4),t.loginInSubmission=!1,t.loginAlertVariant="bg-red-500",t.loginAlertMsg="Invalid login details.",n.abrupt("return");case 15:t.loginAlertVariant="bg-green-500",t.loginAlertMsg="Success! Your are now logged in.",window.location.reload();case 18:case"end":return n.stop()}}),n,null,[[4,9]])})))()}}});const G=O()(z,[["render",R]]);var D=G,K={class:"mb-3"},Y=Object(r["h"])("label",{class:"inline-block mb-2"},"Name",-1),B={class:"mb-3"},$=Object(r["h"])("label",{class:"inline-block mb-2"},"Email",-1),H={class:"mb-3"},W=Object(r["h"])("label",{class:"inline-block mb-2"},"Age",-1),J={class:"mb-3"},Z=Object(r["h"])("label",{class:"inline-block mb-2"},"Password",-1),X={class:"mb-3"},Q=Object(r["h"])("label",{class:"inline-block mb-2"},"Confirm Password",-1),ee={class:"mb-3"},te=Object(r["h"])("label",{class:"inline-block mb-2"},"Country",-1),ne=Object(r["h"])("option",{value:"USA"},"USA",-1),re=Object(r["h"])("option",{value:"Mexico"},"Mexico",-1),ae=Object(r["h"])("option",{value:"Germany"},"Germany",-1),oe=Object(r["h"])("option",{value:"Antarctica"},"Antarctica",-1),ce={class:"mb-3 pl-6"},ie={href:"#"},se=["disabled"];function le(e,t,n,a,o,c){var i=Object(r["G"])("VeeField"),s=Object(r["G"])("ErrorMessage"),l=Object(r["G"])("i18n-t"),u=Object(r["G"])("VeeForm");return Object(r["A"])(),Object(r["g"])(r["a"],null,[o.regShowAlert?(Object(r["A"])(),Object(r["g"])("div",{key:0,class:Object(r["t"])(["text-white text-center font-bold p-5 mb-4",o.regAlertVariant])},Object(r["K"])(o.regAlertMsg),3)):Object(r["f"])("",!0),Object(r["k"])(u,{"validation-schema":o.schema,"initial-values":o.userData,onSubmit:c.register},{default:Object(r["S"])((function(){return[Object(r["h"])("div",K,[Y,Object(r["k"])(i,{type:"text",name:"name",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Name"}),Object(r["k"])(s,{class:"text-red-600",name:"name"})]),Object(r["h"])("div",B,[$,Object(r["k"])(i,{type:"email",name:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Email"}),Object(r["k"])(s,{class:"text-red-600",name:"email"})]),Object(r["h"])("div",H,[W,Object(r["k"])(i,{type:"number",name:"age",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"}),Object(r["k"])(s,{class:"text-red-600",name:"age"})]),Object(r["h"])("div",J,[Z,Object(r["k"])(i,{name:"password",bails:!1},{default:Object(r["S"])((function(e){var t=e.field,n=e.errors;return[Object(r["h"])("input",Object(r["r"])({class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Password",type:"password"},t),null,16),(Object(r["A"])(!0),Object(r["g"])(r["a"],null,Object(r["F"])(n,(function(e){return Object(r["A"])(),Object(r["g"])("div",{class:"text-red-600",key:e},Object(r["K"])(e),1)})),128))]})),_:1})]),Object(r["h"])("div",X,[Q,Object(r["k"])(i,{type:"password",name:"confirmPassword",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Confirm Password"}),Object(r["k"])(s,{class:"text-red-600",name:"confirmPassword"})]),Object(r["h"])("div",ee,[te,Object(r["k"])(i,{as:"select",name:"country",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"},{default:Object(r["S"])((function(){return[ne,re,ae,oe]})),_:1}),Object(r["k"])(s,{class:"text-red-600",name:"country"})]),Object(r["h"])("div",ce,[Object(r["k"])(i,{type:"checkbox",name:"tos",value:"1",class:"w-4 h-4 float-left -ml-6 mt-1 rounded"}),Object(r["k"])(l,{keypath:"register.accept",class:"inline-block",tag:"label"},{default:Object(r["S"])((function(){return[Object(r["h"])("a",ie,Object(r["K"])(e.$t("register.TOS")),1)]})),_:1}),Object(r["k"])(s,{class:"text-red-600 block",name:"tos"})]),Object(r["h"])("button",{type:"submit",disabled:o.regInSubmission,class:"block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"}," Submit ",8,se)]})),_:1},8,["validation-schema","initial-values","onSubmit"])],64)}var ue={name:"RegisterForm",data:function(){return{schema:{name:"required|min:3|max:100|alphaSpaces",email:"required|min:3|max:100|email",age:"required|minValue:18|maxValue:100",password:"required|min:3|max:100",confirmPassword:"passwordsMismatch:@password",country:"required|countryExcluded:Antarctica",tos:"tos"},userData:{country:"USA"},regInSubmission:!1,regShowAlert:!1,regAlertVariant:"bg-blue-500",regAlertMsg:"Please wait! Your account is being created."}},methods:{register:function(e){var t=this;return Object(q["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.regShowAlert=!0,t.regInSubmission=!0,t.regAlertVariant="bg-blue-500",t.regAlertMsg="Please wait! Your account is being created.",n.prev=4,n.next=7,t.$store.dispatch("register",e);case 7:n.next=15;break;case 9:return n.prev=9,n.t0=n["catch"](4),t.regInSubmission=!1,t.regAlertVariant="bg-red-500",t.regAlertMsg="An unexpected error occured. Please try again later.",n.abrupt("return");case 15:t.regAlertVariant="bg-green-500",t.regAlertMsg="Success! Your account has been created.",window.location.reload();case 18:case"end":return n.stop()}}),n,null,[[4,9]])})))()}}};const de=O()(ue,[["render",le]]);var be=de,fe={name:"Auth",components:{AppLoginForm:D,AppRegisterForm:be},data:function(){return{tab:"login"}},computed:Object(g["a"])({},Object(m["e"])({authModalShow:function(e){return e.auth.authModalShow}})),methods:Object(g["a"])({},Object(m["d"])(["toggleAuthModal"]))};const ge=O()(fe,[["render",L]]);var me=ge,pe={class:"fixed bottom-0 left-0 bg-white p-5 pb-4 text-left align-top w-full h-16 shadow-lg shadow-black"},he={class:"relative"},Oe={class:"float-left w-7 h-7 leading-3"},je={class:"float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-5 mt-1"},ve={class:"player-currenttime"},ye={class:"float-left w-7 h-7 leading-3 ml-7 mt-2 player-scrub"},we={key:0,class:"absolute left-0 right-0 text-lg text-center mx-auto player-song-info truncate"},xe={class:"song-title"},ke={class:"song-artist"},Ae=Object(r["h"])("i",{class:"fas fa-circle"},null,-1),Se=[Ae],Me={class:"float-left w-7 h-7 leading-3 text-gray-400 mt-0 text-lg w-14 ml-8 mt-1"},Pe={class:"player-duration"};function Ee(e,t,n,a,o,c){return Object(r["A"])(),Object(r["g"])("div",pe,[Object(r["h"])("div",he,[Object(r["h"])("div",Oe,[Object(r["h"])("button",{type:"button",onClick:t[0]||(t[0]=Object(r["U"])((function(){return e.toggleAudio&&e.toggleAudio.apply(e,arguments)}),["prevent"]))},[Object(r["h"])("i",{class:Object(r["t"])(["fa text-gray-500 text-xl",{"fa-play":!e.playing,"fa-pause":e.playing}])},null,2)])]),Object(r["h"])("div",je,[Object(r["h"])("span",ve,Object(r["K"])(e.seek),1)]),Object(r["h"])("div",ye,[e.currentSong.modifiedName?(Object(r["A"])(),Object(r["g"])("div",we,[Object(r["h"])("span",xe,Object(r["K"])(e.currentSong.modifiedName),1),Object(r["h"])("span",ke,"(Uploaded by "+Object(r["K"])(e.currentSong.displayName)+")",1)])):Object(r["f"])("",!0),Object(r["h"])("span",{class:"block w-full h-2 rounded m-1 mt-2 bg-gray-200 relative cursor-pointer",onClick:t[1]||(t[1]=Object(r["U"])((function(){return e.updateSeek&&e.updateSeek.apply(e,arguments)}),["prevent"]))},[Object(r["h"])("span",{class:"absolute top-neg-8 text-gray-800 text-lg",style:Object(r["u"])({left:e.playerProgress})},Se,4),Object(r["h"])("span",{class:"block h-2 rounded bg-gradient-to-r from-green-500 to-green-400",style:Object(r["u"])({width:e.playerProgress})},null,4)])]),Object(r["h"])("div",Me,[Object(r["h"])("span",Pe,Object(r["K"])(e.duration),1)])])])}var Ce={name:"Player",computed:Object(g["a"])(Object(g["a"])({},Object(m["c"])(["playing"])),Object(m["e"])({seek:function(e){return e.player.seek},duration:function(e){return e.player.duration},playerProgress:function(e){return e.player.playerProgress},currentSong:function(e){return e.player.currentSong}})),methods:Object(g["a"])({},Object(m["b"])(["toggleAudio","updateSeek"]))};const Te=O()(Ce,[["render",Ee]]);var _e=Te,Le={name:"App",components:{AppHeader:v,AuthModal:me,AppPlayer:_e},created:function(){this.$store.dispatch("initLogin")}};n("b717");const Fe=O()(Le,[["render",a]]);var Ie=Fe,Ue=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),Ne=n("2a74"),Ve=Object(m["a"])({modules:Ne["default"]}),Re=function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},qe=function(){return n.e("chunk-537381ea").then(n.bind(null,"f820"))},ze=function(){return n.e("chunk-5bc818be").then(n.bind(null,"f74b"))},Ge=function(){return n.e("groupedChunk").then(n.bind(null,"8dc3"))},De=[{name:"home",path:"/",component:Re},{name:"about",path:"/about",component:qe},{name:"manage",path:"/manage-music",meta:{requiresAuth:!0},component:ze,beforeEnter:function(e,t,n){console.log("manage guard"),n()}},{path:"/manage",redirect:{name:"manage"}},{name:"song",path:"/song/:id",component:Ge},{path:"/:catchAll(.*)*",redirect:{name:"home"}}],Ke=Object(Ue["a"])({history:Object(Ue["b"])(""),routes:De,linkExactActiveClass:"text-yellow-500"});Ke.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?Ve.state.auth.userLoggedIn?n():n({name:"home"}):n()}));var Ye=Ke,Be=(n("b0c0"),n("7bb1")),$e=n("3aa8"),He={install:function(e){e.component("VeeForm",Be["c"]),e.component("VeeField",Be["b"]),e.component("ErrorMessage",Be["a"]),Object(Be["e"])("required",$e["i"]),Object(Be["e"])("tos",$e["i"]),Object(Be["e"])("min",$e["f"]),Object(Be["e"])("max",$e["d"]),Object(Be["e"])("alphaSpaces",$e["a"]),Object(Be["e"])("email",$e["c"]),Object(Be["e"])("minValue",$e["g"]),Object(Be["e"])("maxValue",$e["e"]),Object(Be["e"])("passwordsMismatch",$e["b"]),Object(Be["e"])("excluded",$e["h"]),Object(Be["e"])("countryExcluded",$e["h"]),Object(Be["d"])({generateMessage:function(e){var t={required:"The field ".concat(e.field," is required."),min:"The field ".concat(e.field," is too short."),max:"The field ".concat(e.field," is too long."),alphaSpaces:"The field ".concat(e.field," may only contain alphabetic characters and spaces."),email:"The field ".concat(e.field," must be a valid email."),minValue:"The field ".concat(e.field," is too low."),maxValue:"The field ".concat(e.field," is too high."),excluded:"You are not allowed to use this value for the field ".concat(e.field),countryExcluded:"Due to restrictions, we do not accept users from this location.",passwordsMismatch:"The passwords don't match.",tos:"You must accrpt the Terms of Service."},n=t[e.rule.name]?t[e.rule.name]:"The field ".concat(e.field," is invalid.");return n},validateOnBlur:!0,validateOnChange:!0,validateOnInput:!0,validateOnModelUpdate:!0})}},We=n("b79f"),Je={beforeMount:function(e,t){var n="fa fa-".concat(t.value," float-right text-green-400 text-xl");"full"===t.arg&&(n=t.value),e.innerHTML+='<i class="'.concat(n,'"></i>')}},Ze=(n("ba8c"),n("845f"),n("159b"),n("ac1f"),n("466d"),n("47e2"));function Xe(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];t[a]=e(n).default}})),t}var Qe=Object(Ze["a"])({locale:"en",fallbackLocale:"en",messages:Xe(),numberFormats:{en:{currency:{style:"currency",currency:"USD"}},ja:{currency:{style:"currency",currency:"JPY"}}}}),et=n("9483");Object(et["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\n","For more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("5319");var tt=n("2ef0"),nt=n.n(tt);function rt(e){var t=n("0dda");t.keys().forEach((function(n){var r=t(n),a=nt.a.upperFirst(nt.a.camelCase(n.replace(/^\.\//,"").replace(/\.\w+$/,"")));e.component("Base".concat(a),r.default||r)}))}var at,ot={install:rt},ct=n("323e"),it=n.n(ct),st=function(e){e.beforeEach((function(e,t,n){it.a.start(),n()})),e.afterEach(it.a.done)};n("a5d8");st(Ye),We["a"].onAuthStateChanged((function(){at||(at=Object(r["d"])(Ie),at.use(Qe),at.use(Ve),at.use(Ye),at.use(He),at.use(ot),at.directive("icon",Je),at.mount("#app"))}))},"845f":function(e,t,n){},"9ea5":function(e,t,n){"use strict";n.r(t),t["default"]={home:{listen:e=>{const{normalize:t}=e;return t(["來聽音樂吧"])}},register:{TOS:e=>{const{normalize:t}=e;return t([])},accept:e=>{const{normalize:t}=e;return t([])}},rigister:{accept:e=>{const{normalize:t}=e;return t([])}},song:{commentCount:e=>{const{normalize:t,interpolate:n,named:r,plural:a}=e;return a([t(["沒有留言"]),t(["1 則留言"]),t([n(r("count"))," 則留言"])])}}}},b717:function(e,t,n){"use strict";n("13a0")},b79f:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return i}));var r=n("260b"),a=(n("ea7b"),n("e71f"),n("588e"),{apiKey:"AIzaSyDzcqS_elTzNZSY7OKyu1_d5YEFU2a0Pcg",authDomain:"music-aeb3c.firebaseapp.com",projectId:"music-aeb3c",storageBucket:"music-aeb3c.appspot.com",appId:"1:215226179306:web:e0825528adc4e6e41b8193"});r["a"].initializeApp(a);var o=r["a"].auth(),c=r["a"].firestore(),i=r["a"].storage();c.enablePersistence().catch((function(e){console.log("Firebase persistence error ".concat(e.code))}));var s=c.collection("users"),l=c.collection("songs"),u=c.collection("comments")},ba8c:function(e,t,n){},c7d4:function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("96cf"),n("b0c0"),n("b79f"));t["default"]={state:{authModalShow:!1,userLoggedIn:!1},getters:{},mutations:{toggleAuthModal:function(e){e.authModalShow=!e.authModalShow},toggleAuth:function(e){e.userLoggedIn=!e.userLoggedIn}},actions:{register:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,a["a"].createUserWithEmailAndPassword(t.email,t.password);case 3:return o=n.sent,n.next=6,a["e"].doc(o.user.uid).set({name:t.name,email:t.email,age:t.age,country:t.country});case 6:return n.next=8,o.user.updateProfile({displayName:t.name});case 8:r("toggleAuth");case 9:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,a["a"].signInWithEmailAndPassword(t.email,t.password);case 3:r("toggleAuth");case 4:case"end":return n.stop()}}),n)})))()},initLogin:function(e){var t=e.commit,n=a["a"].currentUser;n&&t("toggleAuth")},signOut:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,a["a"].signOut();case 3:n("toggleAuth");case 4:case"end":return t.stop()}}),t)})))()}}}},d084:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={type:"button"};function o(e,t){return Object(r["A"])(),Object(r["g"])("button",a,"Press Me!")}var c=n("6b0d"),i=n.n(c);const s={},l=i()(s,[["render",o]]);t["default"]=l},d307:function(e,t,n){var r={"./auth.js":"c7d4","./index.js":"2a74","./player.js":"051f"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="d307"},edd4:function(e,t,n){"use strict";n.r(t),t["default"]={home:{listen:e=>{const{normalize:t}=e;return t(["Listen to Great Music"])}},register:{TOS:e=>{const{normalize:t}=e;return t(["Terms of Service"])},accept:e=>{const{normalize:t,interpolate:n,list:r}=e;return t(["I accept Music's ",n(r(0))])}},song:{commentCount:e=>{const{normalize:t,interpolate:n,named:r,plural:a}=e;return a([t(["No comments"]),t(["1 Comment"]),t([n(r("count"))," Comments"])])}}}}});
//# sourceMappingURL=app.adcf88bb.js.map