import{a as g,S as m,i as y}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const u=15,d=async(s,r)=>(await g.get("https://pixabay.com/api/",{params:{key:"43654443-0aa2ac279d0400a8e119738dd",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:u,page:r}})).data,f=document.querySelector(".gallery");let h=new m(".gallery a",{captionsData:"alt",captionDelay:250});const p=s=>{const r=s.hits.map(o=>`<li class="gallery-item">
            <a class="gallery-link" href=${o.largeImageURL}>
                <img
                    src=${o.webformatURL}
                    alt=${o.tags}
                />
            </a>
                 <div>
                <p>Likes ${o.likes}</p>
                <p>Views ${o.views}</p>
                <p>Comments ${o.comments}</p>
                <p>Downloads ${o.downloads}</p>
            </div>
                </li>`).join("");f.insertAdjacentHTML("beforeend",r),h.refresh()},L=document.querySelector("form"),w=document.querySelector(".gallery"),a=document.querySelector(".loader"),c=document.querySelector(".load");c.style.display="none";let i=1;L.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements.search.value.trim();a.style.display="flex",w.innerHTML="";try{const o=await d(r,i);if(o.hits.length===0)c.style.display="none",y.show({message:"Sorry, there are no images matching your search query. Please try again!"});else{p(o);const l=()=>{const e=document.querySelector(".gallery-item"),n=e.getBoundingClientRect().height;console.log(e.getBoundingClientRect()),window.scrollBy({top:n*2,behavior:"smooth"})};l(),c.style.display="flex";const t=Math.ceil(o.totalHits/u);c.addEventListener("click",async()=>{if(i>t)return y.error({position:"topRight",message:"We're sorry, there are no more posts to load"});a.style.display="flex",i+=1;try{const e=await d(r,i);p(e),l()}catch(e){console.log(e)}finally{a.style.display="none"}})}}catch(o){console.log(o)}finally{a.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
