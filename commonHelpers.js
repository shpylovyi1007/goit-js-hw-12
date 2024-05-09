import{a as i,S as c,i as d}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=async o=>(await i.get("https://pixabay.com/api/",{params:{key:"43654443-0aa2ac279d0400a8e119738dd",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data,p=document.querySelector(".gallery");let y=new c(".gallery a",{captionsData:"alt",captionDelay:250});const f=o=>{const s=o.hits.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href=${t.largeImageURL}>
                <img
                    src=${t.webformatURL}
                    alt=${t.tags}
                />
            </a>
                 <div>
                <p>Likes ${t.likes}</p>
                <p>Views ${t.views}</p>
                <p>Comments ${t.comments}</p>
                <p>Downloads ${t.downloads}</p>
            </div>
                </li>`).join("");p.insertAdjacentHTML("beforeend",s),y.refresh()},m=document.querySelector("form"),g=document.querySelector(".gallery"),l=document.querySelector(".loader");m.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements.search.value.trim();l.style.display="flex",g.innerHTML="";try{const t=await u(s);t.hits.length===0?d.show({message:"Sorry, there are no images matching your search query. Please try again!"}):f(t)}catch(t){console.log(t)}finally{l.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
