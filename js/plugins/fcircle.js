(()=>{const e={requestAPI:(s,i,o)=>{let n=5;function l(){return new Promise((t,e)=>{let r=0;let a=setTimeout(()=>{if(r===0){r=2;a=null;e("请求超时");if(n==0){o()}}},5e3);fetch(s).then(function(e){if(r!==2){clearTimeout(a);t(e);a=null;r=1}if(e.ok){return e.json()}throw new Error("Network response was not ok.")}).then(function(e){n=0;i(e)}).catch(function(e){if(n>0){n-=1;setTimeout(()=>{l()},5e3)}else{o()}})})}l()},layoutDiv:function(s){const i=$(s.el)[0];$(i).append('<div class="loading-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg></div>');this.requestAPI(s.api,function(e){$(i).find(".loading-wrap").remove();const t=e.article_data||[];const a=i.getAttribute("limit");t.forEach((e,t)=>{if(a&&t>=a){return}var r='<div class="timenode" index="'+t+'">';r+='<div class="header">';r+='<div class="user-info">';r+='<img src="'+(e.avatar||s.avatar)+'" onerror="javascript:this.src=\''+s.avatar+"';\">";r+="<span>"+e.author+"</span>";r+="</div>";r+="<p>"+e.created+"</p>";r+="</div>";r+='<a class="body" href="'+e.link+'" target="_blank" rel="external nofollow noopener noreferrer">';r+=e.title;r+="</a>";r+="</div>";$(i).append(r)})},function(){$(i).find(".loading-wrap svg").remove();$(i).find(".loading-wrap").append('<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3L21 20H3L12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10V14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"/></circle></svg>');$(i).find(".loading-wrap").addClass("error")})},init:function(){const t=document.getElementsByClassName("stellar-fcircle-api");for(let e=0;e<t.length;e++){const r=t[e];const a=r.getAttribute("api");if(a==null){continue}this.layoutDiv({el:r,api:a,avatar:stellar.root+"images/avatar.svg"})}}};stellaris.registerThemePlugin(".stellar-fcircle-api",e)})();