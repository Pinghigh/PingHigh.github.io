const GitHubInfo={requestAPI:(o,f,s)=>{let u=5;function l(){return new Promise((e,t)=>{let n=0;let i=setTimeout(()=>{if(n===0){n=2;i=null;t("请求超时");if(u==0){s()}}},5e3);fetch(o).then(function(t){if(n!==2){clearTimeout(i);e(t);i=null;n=1}if(t.ok){return t.json()}throw new Error("Network response was not ok.")}).then(function(t){u=0;f(t)}).catch(function(t){if(u>0){u-=1;setTimeout(()=>{l()},5e3)}else{s()}})})}l()},layout:t=>{const i=$(t.el)[0];function o(e){for(let t of Object.keys(e)){$(i).find("[type=text]#"+t).text(e[t]);$(i).find("[type=link]#"+t).attr("href",e[t]);$(i).find("[type=img]#"+t).attr("src",e[t])}}GitHubInfo.requestAPI(t.api,function(t){const e=i.getAttribute("index");if(e!=undefined){const n=t.content||t;if(n&&n.length>e){let t=n[e];t["latest-tag-name"]=t["name"];o(n[e])}}else{o(t)}},function(){})}};$(function(){const t=document.getElementsByClassName("stellar-ghinfo-api");for(var e=0;e<t.length;e++){const i=t[e];const o=i.getAttribute("api");if(o==null){continue}var n=new Object;n.el=i;n.api=o;n.class=i.getAttribute("class");GitHubInfo.layout(n)}});