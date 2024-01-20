import{S as v,i as n,a as S}from"./assets/vendor-bad0427b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),p=document.querySelector(".gallery"),m=document.querySelector(".loader"),a=document.querySelector(".btn-load-more"),w=new v(".gallery a",{captionsData:"alt",captionDelay:250}),u=40;let l=1,g="";d.addEventListener("submit",q);a.addEventListener("click",$);async function q(s){s.preventDefault(),l=1,p.innerHTML="",g=d.search.value.trim(),a.classList.add("hide");const r=await h();r.hits.length===0?n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):r.hits.length<u?n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):a.classList.remove("hide"),d.reset(),f(r)}async function $(){l+=1,a.classList.add("hide");const s=await h();l>=Math.ceil(s.totalHits/u)?n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):a.classList.remove("hide"),f(s),M()}async function h(){m.classList.remove("hide");try{return(await S.get("https://pixabay.com/api/",{params:{key:"41839077-17381d035cc7abc60580c609c",q:g,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:l}})).data}catch(s){console.log(s.message),n.error({position:"topRight",message:"Sorry, service unavailable."})}finally{m.classList.add("hide")}}function f(s){const r=s.hits.reduce((c,{webformatURL:i,largeImageURL:e,tags:t,likes:o,views:y,comments:L,downloads:b})=>c+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${i}'
                    alt='${t}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'> ❤️ Likes <span>${o}</span></p></li>
                  <li><p class='statistic'> 👀 Views <span>${y}</span></p></li>
                  <li><p class='statistic'> 🗨️ Comments <span>${L}</span></p></li>
                  <li><p class='statistic'> 📩 Downloads <span>${b}</span></p></li>
              </ul>
            </li>`,"");p.insertAdjacentHTML("beforeend",r),w.refresh()}function M(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
