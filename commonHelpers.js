import{a as g,S as m,i as d}from"./assets/vendor-06b1bbdf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const u=15,y=async(s,o)=>(await g.get("https://pixabay.com/api/",{params:{key:"43654443-0aa2ac279d0400a8e119738dd",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:u,page:o}})).data,f=document.querySelector(".gallery");let h=new m(".gallery a",{captionsData:"alt",captionDelay:250});const p=s=>{const o=s.hits.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href=${r.largeImageURL}>
                <img
                    src=${r.webformatURL}
                    alt=${r.tags}
                />
            </a>
                 <div>
                <p>Likes ${r.likes}</p>
                <p>Views ${r.views}</p>
                <p>Comments ${r.comments}</p>
                <p>Downloads ${r.downloads}</p>
            </div>
                </li>`).join("");f.insertAdjacentHTML("beforeend",o),h.refresh()},L=document.querySelector("form"),w=document.querySelector(".gallery"),n=document.querySelector(".loader"),c=document.querySelector(".load");c.style.display="none";let i=1;L.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements.search.value.trim();n.style.display="flex",w.innerHTML="";try{const r=await y(o,i);if(r.hits.length===0)d.show({message:"Sorry, there are no images matching your search query. Please try again!"});else{p(r);const l=()=>{const e=document.querySelector(".gallery-item"),a=e.getBoundingClientRect().height;console.log(e.getBoundingClientRect()),window.scrollBy({top:a*2,behavior:"smooth"})};l(),c.style.display="flex";const t=Math.ceil(r.totalHits/u);c.addEventListener("click",async()=>{if(i>t)return d.error({position:"topRight",message:"We're sorry, there are no more posts to load"});n.style.display="flex",i+=1;try{const e=await y(o,i);p(e),l()}catch(e){console.log(e)}finally{n.style.display="none"}})}}catch(r){console.log(r)}finally{n.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
