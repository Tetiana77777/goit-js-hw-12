import{S as u,i as a}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function h(i){const t="https://pixabay.com/api/",o=new URLSearchParams({key:"43094925-102acc99687b818cc3e092daf",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${t}?${o}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m(i){return i.map(t=>`<li class="gallery-item">
           <a class="gallery-link" href="${t.largeImageURL}">
             <img
               class="gallery-image"
               width="1280"
               height="152"
               src="${t.webformatURL}"
               data-source="${t.largeImageURL}"
               alt="${t.tags}"
             />
             </a>
             <ul class="gallery-description">
             <li><h3>Likes</h3><p>${t.likes}</p>
             </li>
             <li><h3>Views</h3><p>${t.views}</p>
               </li>
               <li><h3>Comments</h3><p>${t.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${t.downloads}</p>
                   </li>
             </ul>
           </li>`).join("")}const c=document.querySelector(".form"),p=document.querySelector(".input-form"),l=document.querySelector(".gallery");c.addEventListener("submit",f);function f(i){i.preventDefault();const t=p.value.trim();t!==""&&(l.innerHTML='<div class="loader"></div>',h(t).then(o=>{const s=m(o.hits);l.innerHTML=s,new u(".gallery-link",{captionsData:"alt",captionsDelay:250}).refresh(),o.hits.length===0&&a.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(o=>{a.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{c.reset()}))}
//# sourceMappingURL=commonHelpers.js.map
