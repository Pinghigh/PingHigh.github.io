(()=>{const e="a.link-card[cardlink]";const t={renderer:function(e,t){var n=[];const i=e.getAttribute("autofill");if(i){n=i.split(",")}if(t.title&&t.title.length>0&&n.includes("title")){e.querySelector(".title").innerHTML=t.title;e.title=t.title}if(t.icon&&t.icon.length>0&&n.includes("icon")){e.querySelector(".img").style='background-image: url("'+t.icon+'");';e.querySelector(".img").setAttribute("data-bg",t.icon)}let r=e.querySelector(".desc");if(r&&t.desc&&t.desc.length>0&&n.includes("desc")){r.innerHTML=t.desc}},setCardLink:function(e){e="forEach"in(e||{})?e:document.querySelectorAll("a[cardlink]");e.forEach(t=>{if(t.nodeType!==1)return;t.removeAttribute("cardlink");const e=t.href;const n="https://api.vlts.cc/site_info/v1?url=";fetch(n+e).then(function(e){if(e.ok){return e.json()}throw new Error("Network response was not ok.")}).then(function(e){this.renderer(t,e)}).catch(function(e){console.log(e)})})},init:function(){this.setCardLink(document.querySelectorAll(e))}};stellaris.registerThemePlugin(e,t)})();