import{a as m,S as f,i as y}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d=15,p=async(r,s)=>(await m.get("https://pixabay.com/api/",{params:{key:"43654443-0aa2ac279d0400a8e119738dd",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:d,page:s}})).data,g=document.querySelector(".gallery");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});const u=r=>{const s=r.hits.map(t=>`<li class="gallery-item">
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
                </li>`).join("");g.insertAdjacentHTML("beforeend",s),h.refresh()},L=document.querySelector("form"),w=document.querySelector(".gallery"),i=document.querySelector(".loader"),l=document.querySelector(".load");l.style.display="none";let n=1;L.addEventListener("submit",async r=>{r.preventDefault();const s=r.target.elements.search.value.trim();i.style.display="flex",w.innerHTML="";try{const t=await p(s,n);if(t.hits.length===0)l.style.display="none",y.show({message:"Sorry, there are no images matching your search query. Please try again!"});else{u(t);const a=()=>{const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})};l.style.display="flex",a()}}catch(t){console.error(t)}finally{i.style.display="none"}});l.addEventListener("click",async()=>{try{const r=await p(userSearch,n),s=Math.ceil(r.totalHits/d);if(n>s)return y.error({position:"topRight",message:"We're sorry, there are no more posts to load"});l.style.display="none",i.style.display="flex",n+=1,r.totalHits<=15&&(l.style.display="none"),u(r),scroll()}catch(r){console.error(r)}finally{i.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
