!function(){"use strict";document.addEventListener("DOMContentLoaded",(()=>{/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&document.body.classList.add("mobile"),function(){const e=document.querySelector(".expert__next-wapper img"),t=document.querySelector(".expert__previos-wapper img"),r=document.querySelector(".expert__sub-wapper-sliders"),n=document.querySelector(".expert__sliders"),l=document.querySelectorAll(".expert__slide"),o=window.getComputedStyle(r).width;let c=0;console.log(+o.replace(/\D/g,"")*(l.length-1)),e.addEventListener("click",(()=>{c==+o.replace(/\D/g,"")*(l.length-1)?c=0:c+=+o.replace(/\D/g,""),n.style.transform=`translateX(-${c}px)`})),t.addEventListener("click",(()=>{0==c?c=+o.replace(/\D/g,"")*(l.length-1):c-=+o.replace(/\D/g,""),n.style.transform=`translateX(-${c}px)`}))}()}))}();
//# sourceMappingURL=bundle.js.map