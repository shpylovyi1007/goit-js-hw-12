import{a as m,S as f,i as y}from"./assets/vendor-06b1bbdf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=15,d=async(s,o)=>(await m.get("https://pixabay.com/api/",{params:{key:"43654443-0aa2ac279d0400a8e119738dd",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:u,page:o}})).data,g=document.querySelector(".gallery");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});const p=s=>{const o=s.hits.map(t=>`<li class="gallery-item">
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
                </li>`).join("");g.insertAdjacentHTML("beforeend",o),h.refresh()},L=document.querySelector("form"),w=document.querySelector(".gallery"),i=document.querySelector(".loader"),n=document.querySelector(".load");n.style.display="none";let c=1;L.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.search.value.trim();i.style.display="flex",w.innerHTML="";try{const t=await d(o,c);if(t.hits.length===0)n.style.display="none",y.show({message:"Sorry, there are no images matching your search query. Please try again!"});else{p(t);const l=()=>{const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})};l(),n.style.display="flex";const e=Math.ceil(t.totalHits/u);n.addEventListener("click",async()=>{if(c>e)return y.error({position:"topRight",message:"We're sorry, there are no more posts to load"});n.style.display="none",i.style.display="flex",c+=1;try{const r=await d(o,c);p(r),l()}catch(r){console.log(r)}finally{i.style.display="none"}})}}catch(t){console.log(t)}finally{i.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
