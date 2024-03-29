import{a as h}from"./assets/vendor-c49a3999.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function d(o,e){const n="https://pixabay.com/api/",a=new URLSearchParams({key:"43094925-102acc99687b818cc3e092daf",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}),t=`${n}?${a}`;return(await h.get(t)).data}function f(o){return o.map(e=>`<li class="gallery-item">
           <a class="gallery-link" href="${e.largeImageURL}">
             <img
               loading="lazy"
               class="gallery-image"
              //  width="1280"
              //  height="152"
               src="${e.webformatURL}"
               data-source="${e.largeImageURL}"
               alt="${e.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li><h3>Likes</h3><p>${e.likes}</p>
             </li>
             <li><h3>Views</h3><p>${e.views}</p>
               </li>
               <li><h3>Comments</h3><p>${e.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${e.downloads}</p>
                   </li>
             </ul>
           </li>`).join("")}const y=document.querySelector(".form"),g=document.querySelector(".input-form"),l=document.querySelector(".gallery"),u=document.querySelector(".btn-load-more");let i,s=1,p=0;const L=15;y.addEventListener("submit",b);u.addEventListener("click",w);async function b(o){if(o.preventDefault(),i=g.value.trim(),l.innerHTML="",s=1,!i)return;const e=await d(i,s);p=Math.ceil(e.total/L);const n=f(e.hits);l.insertAdjacentHTML("beforeend",n),m()}async function w(){s+=1;const o=await d(i,s),e=f(o.hits);l.insertAdjacentHTML("beforeend",e),m()}function S(){u.classList.remove("hidden")}function $(){u.classList.add("hidden")}function m(){s>=p?$():S()}
//# sourceMappingURL=commonHelpers.js.map
