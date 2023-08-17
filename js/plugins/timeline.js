const StellarTimeline={reactions:{"+1":"👍","-1":"👎",laugh:"😀",hooray:"🎉",confused:"😕",heart:"❤️",rocket:"🚀",eyes:"👀"},requestAPI:(s,i,n)=>{let l=5;function o(){return new Promise((t,e)=>{let r=0;let a=setTimeout(()=>{if(r===0){r=2;a=null;e("请求超时");if(l==0){n()}}},5e3);fetch(s).then(function(e){if(r!==2){clearTimeout(a);t(e);a=null;r=1}if(e.ok){return e.json()}throw new Error("Network response was not ok.")}).then(function(e){l=0;i(e)}).catch(function(e){if(l>0){l-=1;setTimeout(()=>{o()},5e3)}else{n()}})})}o()},layoutDiv:l=>{const o=$(l.el)[0];$(o).append('<div class="loading-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg></div>');StellarTimeline.requestAPI(l.api,function(e){$(o).find(".loading-wrap").remove();const s=new URL(l.api).search;const t=e.content||e;var i=[];const r=o.getAttribute("user");if(r&&r.length>0){i=r.split(",")}var n=[];const a=o.getAttribute("hide");if(a&&a.length>0){n=a.split(",")}t.forEach((r,e)=>{if(r.user&&r.user.login&&i.length>0){if(!i.includes(r.user.login)){return}}var a='<div class="timenode" index="'+e+'">';a+='<div class="header">';if(!i.length&&r.user&&!n.includes("user")){a+='<a class="user-info" href="'+r.user.html_url+'" target="_blank" rel="external nofollow noopener noreferrer">';a+='<img src="'+r.user.avatar_url+'">';a+="<span>"+r.user.login+"</span>";a+="</a>"}let t=new Date(r.created_at);a+="<p>"+t.toString().replace(/\sGMT([^.]*)/i,"")+"</p>";a+="</div>";a+='<div class="body">';if(!n.includes("title")){a+='<p class="title">';a+='<a href="'+r.html_url+'" target="_blank" rel="external nofollow noopener noreferrer">';a+=r.title||r.name||r.tag_name;a+="</a>";a+="</p>"}a+=marked.parse(r.body||"");if(!n.includes("footer")){a+='<div class="footer">';a+='<div class="flex left">';if(r.labels){r.labels.forEach((e,t)=>{if(!s||!s.includes(encodeURI(e.name))){a+='<div class="item label '+e.name+'" style="background:#'+e.color+"18;border-color:#"+e.color+'36">';a+="<span>"+e.name+"</span>";a+="</div>"}})}else if(r.zipball_url){a+='<a class="item download" href="'+r.zipball_url+'" target="_blank" rel="external nofollow noopener noreferrer">';a+="<span>📦 "+r.tag_name+".zip</span>";a+="</a>"}a+="</div>";a+='<div class="flex right">';if(r.reactions&&r.reactions.total_count>0){for(let t of Object.keys(StellarTimeline.reactions)){let e=r.reactions[t];if(e>0){a+='<div class="item reaction '+t+'">';a+="<span>"+StellarTimeline.reactions[t]+" "+r.reactions[t]+"</span>";a+="</div>"}}}if(r.comments!=null){a+='<a class="item comments last" href="'+r.html_url+'#issuecomment-new" target="_blank" rel="external nofollow noopener noreferrer">';a+='<span><svg t="1666270368054" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2528" width="200" height="200"><path d="M952 64H72C32.3 64 0 96.3 0 136v508c0 39.7 32.3 72 72 72h261l128 128c14 14 32.5 21.1 50.9 21.1s36.9-7 50.9-21.1l128-128h261c39.7 0 72-32.3 72-72V136c0.2-39.7-32.1-72-71.8-72zM222 462c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z m290-7.7c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72c0 39.7-32.2 72-72 72z m290 8c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72c0 39.7-32.2 72-72 72z" p-id="2529"></path></svg> '+(r.comments||0)+"</span>";a+="</a>"}a+="</div>";a+="</div>"}a+="</div>";a+="</div>";$(o).append(a)})},function(){$(o).find(".loading-wrap svg").remove();$(o).find(".loading-wrap").append('<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3L21 20H3L12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10V14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"/></circle></svg>');$(o).find(".loading-wrap").addClass("error")})}};$(function(){const e=document.getElementsByClassName("stellar-timeline-api");for(var t=0;t<e.length;t++){const a=e[t];const s=a.getAttribute("api");if(s==null){continue}var r=new Object;r.el=a;r.api=s;StellarTimeline.layoutDiv(r)}});