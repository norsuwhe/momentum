(()=>{"use strict";var t,e,n,r,i,o,a,A,s,c,u,h,l,d,p={424:(t,e,n)=>{n.d(e,{Z:()=>A});var r=n(537),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([t.id,'.time{display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff}.time__clock{font-size:120px;font-weight:600}.time__date{font-size:45px}@media screen and (max-width: 1000px){.time__clock{font-size:60px}.time__date{font-size:30px}}.greeting{display:flex;justify-content:center;align-items:center;gap:10px}.greeting__text{font-size:35px;color:#fff;font-weight:400;text-align:right}.greeting__name{width:189px;display:block;background-color:rgba(0,0,0,0);border:none;outline:none;font-size:35px;color:#fff;font-weight:400}.greeting__name::placeholder{color:#fff}@media screen and (max-width: 1000px){.greeting__text{font-size:30px}.greeting__name{font-size:30px}}.quote{display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;padding:20px 0 20px 0}.quote__text{margin-bottom:15px}.quote__refresh{margin-bottom:15px;background:rgba(0,0,0,0);border:none}.quote__refresh-img{filter:brightness(0) invert(1);width:25px;height:25px}.quote__refresh:not(:active){transition:all .5s ease-in-out;transform:rotate(360deg)}@media screen and (max-width: 1000px){.quote__author{align-self:flex-start}}.background-slider{width:100vw;height:100vh;transition:background-image .2s ease;background-repeat:no-repeat;background-size:cover;background-position:center center}.background-slider__button{background:rgba(0,0,0,0);border:none;z-index:30}.background-slider__prev-button{position:absolute;left:1%;top:50%;transform:translateY(-50%)}.background-slider__next-button{position:absolute;right:1%;top:50%;transform:translateY(-50%)}.background-slider__img{width:20px;height:20px}.weather{display:flex;flex-direction:column;text-align:right;gap:3px;color:#fff;font-size:16px}.weather__input{display:block;background-color:rgba(0,0,0,0);color:#fff;border:none;outline:none;text-align:right;font-size:30px}.weather__input::placeholder{color:#fff}@media screen and (max-width: 1000px){.weather{font-size:12px}.weather__input{font-size:20px}}*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Roboto",sans-serif}.wrapper{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:99%;height:100%}.center-container{display:flex;flex-direction:column;gap:30px;width:100%}.top-container{display:flex;justify-content:flex-end;width:100%}@media screen and (max-width: 1000px){.wrapper{position:absolute;left:50%;transform:translateX(-50%);width:90%}.center-container{gap:5px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}}',"",{version:3,sources:["webpack://./src/components/time/_time.scss","webpack://./src/components/greeting/_greeting.scss","webpack://./src/components/quote/_quote.scss","webpack://./src/components/backgroundSlider/_backgroundSlider.scss","webpack://./src/components/weather/_weather.scss","webpack://./src/style.scss"],names:[],mappings:"AAAA,MACI,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CAEA,aACI,eAAA,CACA,eAAA,CAGJ,YACI,cAAA,CAIR,sCAGQ,aACI,cAAA,CAGJ,YACI,cAAA,CAAA,CCzBZ,UACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,QAAA,CAEA,gBACI,cAAA,CACA,UAAA,CACA,eAAA,CACA,gBAAA,CAGJ,gBACI,WAAA,CACA,aAAA,CACA,8BAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,UAAA,CACA,eAAA,CAEA,6BACI,UAAA,CAKZ,sCAEQ,gBACI,cAAA,CAGJ,gBACI,cAAA,CAAA,CCpCZ,OACI,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,qBAAA,CAEA,aACI,kBAAA,CAKJ,gBACI,kBAAA,CACA,wBAAA,CACA,WAAA,CAGA,oBACI,8BAAA,CACA,UAAA,CACA,WAAA,CAIJ,6BACI,8BAAA,CACA,wBAAA,CAKZ,sCAEQ,eACI,qBAAA,CAAA,CCrCZ,mBACI,WAAA,CACA,YAAA,CACA,oCAAA,CACA,2BAAA,CACA,qBAAA,CACA,iCAAA,CAEA,2BACI,wBAAA,CACA,WAAA,CACA,UAAA,CAGJ,gCACI,iBAAA,CACA,OAAA,CACA,OAAA,CACA,0BAAA,CAGJ,gCACI,iBAAA,CACA,QAAA,CACA,OAAA,CACA,0BAAA,CAGJ,wBACI,UAAA,CACA,WAAA,CC9BR,SACI,YAAA,CACA,qBAAA,CACA,gBAAA,CACA,OAAA,CACA,UAAA,CACA,cAAA,CAEA,gBACI,aAAA,CACA,8BAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,gBAAA,CACA,cAAA,CAEA,6BACI,UAAA,CAKZ,sCACI,SACI,cAAA,CAEA,gBACI,cAAA,CAAA,CCtBZ,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,KACI,+BAAA,CAGJ,SACI,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,kBAAA,CACA,SAAA,CACA,WAAA,CAGJ,kBACI,YAAA,CACA,qBAAA,CACA,QAAA,CACA,UAAA,CAGJ,eACI,YAAA,CACA,wBAAA,CACA,UAAA,CAGJ,sCACI,SACI,iBAAA,CACA,QAAA,CACA,0BAAA,CACA,SAAA,CAGJ,kBACI,OAAA,CACA,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CAAA",sourcesContent:[".time {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n\r\n    &__clock {\r\n        font-size: 120px;\r\n        font-weight: 600;\r\n    }\r\n\r\n    &__date {\r\n        font-size: 45px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .time {\r\n\r\n        &__clock {\r\n            font-size: 60px;\r\n        }\r\n\r\n        &__date {\r\n            font-size: 30px;\r\n        }\r\n    }\r\n}",".greeting {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n\r\n    &__text {\r\n        font-size: 35px;\r\n        color: white;\r\n        font-weight: 400;\r\n        text-align: right;\r\n    }\r\n\r\n    &__name {\r\n        width: 189px;\r\n        display: block;\r\n        background-color: transparent;\r\n        border: none;\r\n        outline: none;\r\n        font-size: 35px;\r\n        color: white;\r\n        font-weight: 400;\r\n\r\n        &::placeholder {\r\n            color: white;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .greeting {\r\n        &__text {\r\n            font-size: 30px;\r\n        }\r\n\r\n        &__name {\r\n            font-size: 30px;\r\n        }\r\n    }\r\n}",".quote {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    padding: 20px 0 20px 0;\r\n\r\n    &__text {\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    &__author {}\r\n\r\n    &__refresh {\r\n        margin-bottom: 15px;\r\n        background: transparent;\r\n        border: none;\r\n\r\n\r\n        &-img {\r\n            filter: brightness(0) invert(1);\r\n            width: 25px;\r\n            height: 25px;\r\n\r\n        }\r\n\r\n        &:not(:active) {\r\n            transition: all 0.5s ease-in-out;\r\n            transform: rotate(360deg);\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .quote {\r\n        &__author {\r\n            align-self: flex-start;\r\n        }\r\n    }\r\n}",".background-slider {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    transition: background-image 0.2s ease;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n\r\n    &__button {\r\n        background: transparent;\r\n        border: none;\r\n        z-index: 30;\r\n    }\r\n\r\n    &__prev-button {\r\n        position: absolute;\r\n        left: 1%;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n\r\n    &__next-button {\r\n        position: absolute;\r\n        right: 1%;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n    }\r\n\r\n    &__img {\r\n        width: 20px;\r\n        height: 20px;\r\n    }\r\n}",".weather {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: right;\r\n    gap: 3px;\r\n    color: white;\r\n    font-size: 16px;\r\n\r\n    &__input {\r\n        display: block;\r\n        background-color: transparent;\r\n        color: white;\r\n        border: none;\r\n        outline: none;\r\n        text-align: right;\r\n        font-size: 30px;\r\n\r\n        &::placeholder {\r\n            color: white;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .weather {\r\n        font-size: 12px;\r\n\r\n        &__input {\r\n            font-size: 20px;\r\n        }\r\n    }\r\n}","@import 'components/time/time.scss';\r\n@import 'components/greeting/greeting.scss';\r\n@import 'components/quote/quote.scss';\r\n@import 'components/backgroundSlider/backgroundSlider.scss';\r\n@import 'components/weather/weather.scss';\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 99%;\r\n    height: 100%;\r\n}\r\n\r\n.center-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    width: 100%;\r\n}\r\n\r\n.top-container {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .wrapper {\r\n        position: absolute;\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n        width: 90%;\r\n    }\r\n\r\n    .center-container {\r\n        gap: 5px;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n    }\r\n}"],sourceRoot:""}]);const A=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);r&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},537:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(i," */"),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([o]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},a=[],A=0;A<t.length;A++){var s=t[A],c=r.base?s[0]+r.base:s[0],u=o[c]||0,h="".concat(c," ").concat(u);o[c]=u+1;var l=n(h),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(d);else{var p=i(d,r);r.byIndex=A,e.splice(A,0,{identifier:h,updater:p,references:1})}a.push(h)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var A=n(o[a]);e[A].references--}for(var s=r(t,i),c=0;c<o.length;c++){var u=n(o[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},g={};function C(t){var e=g[t];if(void 0!==e)return e.exports;var n=g[t]={id:t,exports:{}};return p[t](n,n.exports,C),n.exports}C.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return C.d(e,{a:e}),e},C.d=(t,e)=>{for(var n in e)C.o(e,n)&&!C.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},C.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),C.nc=void 0,t=C(379),e=C.n(t),n=C(795),r=C.n(n),i=C(569),o=C.n(i),a=C(565),A=C.n(a),s=C(216),c=C.n(s),u=C(589),h=C.n(u),l=C(424),(d={}).styleTagTransform=h(),d.setAttributes=A(),d.insert=o().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=c(),e()(l.Z,d),l.Z&&l.Z.locals&&l.Z.locals,new class{constructor(){this.clock=document.querySelector(".time__clock"),this.date=document.querySelector(".time__date"),this.currentTime=(new Date).toLocaleString("en-US",{hour12:!1,hour:"numeric",minute:"numeric",second:"numeric"}),this.currentDate=(new Date).toLocaleString("en-US",{month:"long",day:"numeric",weekday:"long"}),this.updateTime(),this.updateClock(),this.updateDate()}updateTime=()=>{setInterval((()=>{this.currentTime=(new Date).toLocaleString("en-US",{hour12:!1,hour:"numeric",minute:"numeric",second:"numeric"}),this.currentDate=(new Date).toLocaleString("en-US",{month:"long",day:"numeric",weekday:"long"}),this.updateClock(),this.updateDate()}),1e3)};updateClock=()=>{this.clock.textContent=this.currentTime};updateDate=()=>{this.date.textContent=this.currentDate}},new class{constructor(){this.input=document.querySelector(".weather__input"),this.weather={},this.weatherC=document.querySelector(".weather__celcius"),this.weatherDescription=document.querySelector(".weather__description"),this.weaterWind=document.querySelector(".weather__wind"),this.weatherHumidity=document.querySelector(".weather__humidity"),this.apiKey="9d9e61098c301e3aad492453d782c39a",this.city="",this.metric="units=metric",this.getLocalStorage(),this.setEvents()}setLocalStorage=()=>{localStorage.setItem("city",this.city)};getLocalStorage=()=>{localStorage.getItem("city")?(this.city=localStorage.getItem("city"),this.getWeather()):(this.input.value="",this.city="")};changeCity=t=>{this.city=t.target.value,this.setLocalStorage(),this.getWeather()};getWeather=async()=>{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&lang=en&appid=${this.apiKey}&${this.metric}`);this.weather=await t.json(),this.updateWeather()};updateWeather=()=>{this.input.value=this.city,this.weatherC.textContent=`${Math.trunc(this.weather.main.temp)}°C`,this.weatherDescription.textContent=this.weather.weather[0].description,this.weaterWind.textContent=`Wind speed: ${Math.trunc(this.weather.wind.speed)}m/s`,this.weatherHumidity.textContent=`Humidity: ${this.weather.main.humidity}%`};setEvents=()=>{this.input.addEventListener("change",this.changeCity)}},new class{constructor(){this.refreshButton=document.querySelector(".quote__refresh"),this.quoteText=document.querySelector(".quote__text"),this.quoteAuthor=document.querySelector(".quote__author"),this.quotes=[],this.getQuotes(),this.setEvent()}pickRandomQuote=()=>{const t=this.quotes[Math.floor(Math.random()*this.quotes.length)];this.quoteText.textContent=`"${t.text}"`,this.quoteAuthor.textContent=`- ${t.author}`};getQuotes=async()=>{try{const t=await fetch("https://type.fit/api/quotes/"),e=await t.json();this.quotes=e.filter((t=>null!==t.author)),this.pickRandomQuote()}catch(t){console.log(t)}};setEvent=()=>{this.refreshButton.addEventListener("click",(t=>{setTimeout((()=>{this.pickRandomQuote()}),600)}))}},new class{constructor(){this.time=(new Date).toLocaleString("en-US",{hour12:!1,hour:"numeric",minute:"numeric"}).split(":").join(""),this.greetingText=document.querySelector(".greeting__text"),this.input=document.querySelector(".greeting__name"),this.name="",this.setGreetingText(),this.setEvents()}setLocalStore=()=>{localStorage.setItem("name",this.name)};getLocalStorage=()=>{localStorage.getItem("name")&&(this.name=localStorage.getItem("name"),this.input.value=this.name,this.resizeInput())};setGreetingName=t=>{this.name=t.target.value,this.setLocalStore(),this.input.value.length<1&&this.setDefaulInputSize()};setDefaulInputSize=()=>{this.input.style.width="190px"};resizeInput=()=>{this.input.style.width=this.input.value.length+"ch"};setGreetingText=()=>this.time>600&this.time<1159?this.greetingText.textContent="Good Morning,":this.time>1200&this.time<1759?this.greetingText.textContent="Good Afternoon,":this.time>1800&this.time<2359?this.greetingText.textContent="Good Evening,":this.greetingText.textContent="Good Night,";setEvents=()=>{this.input.addEventListener("change",this.setGreetingName),this.input.addEventListener("input",this.resizeInput),window.addEventListener("load",this.getLocalStorage)}},new class{constructor(){this.background=document.querySelector(".background-slider"),this.nextButton=document.querySelector(".background-slider__next-button"),this.prevButton=document.querySelector(".background-slider__prev-button"),this.time=this.time=(new Date).toLocaleString("en-US",{hour12:!1,hour:"numeric",minute:"numeric"}).split(":").join(""),this.timeOfDay=this.getTimeOfDay(),this.currentImageNumber=1,this.getBackground(),this.setEvents()}getNextImage=()=>{20===this.currentImageNumber?this.currentImageNumber=1:this.currentImageNumber++,this.getBackground()};getPreviousImage=()=>{1===this.currentImageNumber?this.currentImageNumber=20:this.currentImageNumber--,this.getBackground()};getBackground=()=>{const t=this.currentImageNumber<10?"0"+this.currentImageNumber:this.currentImageNumber,e=new Image;e.src=`https://raw.githubusercontent.com/norsuwhe/imgMomentum/master/${this.timeOfDay}/${t}.jpg`,e.onload=()=>{this.background.style.backgroundImage=`url(${e.src})`}};getTimeOfDay=()=>this.time>600&this.time<1159?"morning":this.time>1200&this.time<1759?"afternoon":this.time>1800&this.time<2359?"evening":"night";setEvents=()=>{this.nextButton.addEventListener("click",this.getNextImage),this.prevButton.addEventListener("click",this.getPreviousImage)}}})();