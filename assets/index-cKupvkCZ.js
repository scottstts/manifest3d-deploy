const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bootstrapApp-Ct5gM8Uv.js","assets/three.module-BKy_dZcU.js","assets/bootstrapApp-HOz9zZTq.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`For better experience, visit on desktop browser.`,t=/Android|BlackBerry|iPhone|iPad|iPod|IEMobile|Mobile|Opera Mini/i;function n(e,n){if(e.userAgentData?.mobile)return!0;let i=e.userAgent??``;return t.test(i)||r(i,e.maxTouchPoints??0)?!0:n(`(pointer: coarse)`)&&n(`(hover: none)`)}function r(e,t){return/Macintosh/i.test(e)&&t>1}var i=`modulepreload`,a=function(e){return`/`+e},o={},s=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=l(t.map(t=>{if(t=a(t,n),t in o)return;o[t]=!0;let r=t.endsWith(`.css`),s=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=r?`stylesheet`:i,r||(l.as=`script`),l.crossOrigin=``,l.href=t,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),r)return new Promise((e,n)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})};n(window.navigator,e=>window.matchMedia(e).matches)?c():(u(),s(async()=>{let{renderApp:e}=await import(`./bootstrapApp-Ct5gM8Uv.js`);return{renderApp:e}},__vite__mapDeps([0,1,2])).then(({renderApp:e})=>e()));function c(){let t=document.getElementById(`root`);if(!t)return;document.documentElement.style.cssText=`width:100%;height:100%;`,document.body.style.cssText=[`width:100%`,`min-width:0`,`height:100%`,`margin:0`,`overflow:hidden`,`background:#ecebfb`,`color:#17205c`,`font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`,`-webkit-font-smoothing:antialiased`].join(`;`),t.style.cssText=[`position:relative`,`width:100%`,`height:100%`].join(`;`);let n=document.createElement(`div`),r=document.createElement(`header`),i=document.createElement(`div`),a=document.createElement(`img`),o=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`),s=document.createElement(`p`);n.style.cssText=[`position:relative`,`width:100%`,`height:100%`,`overflow:hidden`,`background:linear-gradient(140deg,#f3f2ff 0%,#ddddea 52%,#f7f5ff 100%)`].join(`;`),r.setAttribute(`aria-label`,`Manifest3D`),r.style.cssText=[`position:absolute`,`top:8px`,`left:8px`,`right:8px`,`z-index:1`,`display:flex`,`align-items:center`,`height:64px`,`padding:0 12px 0 6px`,`background:linear-gradient(180deg,rgb(255 255 255 / 0.86),rgb(244 242 255 / 0.78)),rgb(249 248 255 / 0.82)`,`border:1px solid rgb(137 132 226 / 0.26)`,`border-radius:15px`,`box-shadow:0 16px 44px rgb(76 69 176 / 0.15),inset 0 1px 0 rgb(255 255 255 / 0.96)`,`backdrop-filter:blur(26px)`].join(`;`),i.style.cssText=[`display:flex`,`align-items:center`,`gap:8px`,`min-width:0`,`transform:translateZ(0)`].join(`;`),a.alt=`Manifest3D`,a.src=`/logo.png`,a.style.cssText=[`display:block`,`width:42px`,`height:42px`,`object-fit:contain`,`filter:drop-shadow(0 6px 8px rgb(118 78 222 / 0.24))`,`transform:translateX(8px)`].join(`;`),o.setAttribute(`aria-hidden`,`true`),o.setAttribute(`viewBox`,`0 0 390 90`),o.style.cssText=[`display:block`,`width:min(48vw,260px)`,`height:46px`,`overflow:visible`].join(`;`),o.innerHTML=l(),s.textContent=e,s.style.cssText=[`position:absolute`,`left:24px`,`right:24px`,`top:50%`,`max-width:36rem`,`margin:0`,`margin-inline:auto`,`color:#293174`,`font-size:clamp(1.35rem,6vw,2rem)`,`font-weight:900`,`line-height:1.28`,`text-align:center`,`transform:translateY(-50%)`].join(`;`),i.append(a,o),r.append(i),n.append(r,s),t.replaceChildren(n)}function l(){return`
    <defs>
      <linearGradient id="manifestWordmarkGrad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#f0d7ff" />
        <stop offset="38%" stop-color="#c67aff" />
        <stop offset="100%" stop-color="#8424e8" />
      </linearGradient>
      <filter
        height="142%"
        id="manifestWordmarkGlass"
        width="142%"
        x="-21%"
        y="-21%"
      >
        <feGaussianBlur
          in="SourceAlpha"
          result="smoothAlpha"
          stdDeviation="3.5"
        />
        <feSpecularLighting
          in="smoothAlpha"
          lighting-color="#ffffff"
          result="specLight"
          specularConstant="1.15"
          specularExponent="45"
          surfaceScale="4"
        >
          <feDistantLight azimuth="-45" elevation="55" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          in2="SourceAlpha"
          operator="in"
          result="specLightMasked"
        />
        <feGaussianBlur
          in="SourceAlpha"
          result="shadowBlur"
          stdDeviation="2"
        />
        <feOffset dx="-1" dy="4" in="shadowBlur" result="shadowOffset" />
        <feComposite
          in="SourceAlpha"
          in2="shadowOffset"
          operator="out"
          result="shadowMask"
        />
        <feFlood
          flood-color="#410082"
          flood-opacity="0.74"
          result="shadowColor"
        />
        <feComposite
          in="shadowColor"
          in2="shadowMask"
          operator="in"
          result="innerShadow"
        />
        <feOffset dx="1" dy="-2" in="shadowBlur" result="rimOffset" />
        <feComposite
          in="SourceAlpha"
          in2="rimOffset"
          operator="out"
          result="rimMask"
        />
        <feFlood
          flood-color="#ffffff"
          flood-opacity="0.62"
          result="rimColor"
        />
        <feComposite
          in="rimColor"
          in2="rimMask"
          operator="in"
          result="innerRim"
        />
        <feMerge result="merged">
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="innerShadow" />
          <feMergeNode in="innerRim" />
          <feMergeNode in="specLightMasked" />
        </feMerge>
        <feDropShadow
          dx="0"
          dy="8"
          flood-color="#6924c6"
          flood-opacity="0.24"
          in="merged"
          stdDeviation="6"
        />
      </filter>
    </defs>
    <text
      dominant-baseline="middle"
      fill="url(#manifestWordmarkGrad)"
      filter="url(#manifestWordmarkGlass)"
      font-family="Arial Rounded MT Bold, Avenir Next, Inter, ui-sans-serif, system-ui, sans-serif"
      font-size="62"
      font-weight="800"
      letter-spacing="0"
      stroke="#6416b5"
      stroke-opacity="0.78"
      stroke-width="2"
      x="0"
      y="55%"
    >
      Manifest3D
    </text>
  `}function u(){d({href:`/logo.png`,rel:`icon`,type:`image/png`}),d({crossorigin:`anonymous`,href:`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css`,integrity:`sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==`,referrerpolicy:`no-referrer`,rel:`stylesheet`})}function d(e){let t=document.createElement(`link`);for(let[n,r]of Object.entries(e))t.setAttribute(n,r);document.head.append(t)}export{s as t};