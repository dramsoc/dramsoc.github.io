import{B as e,H as t,V as n}from"./utils-ClvgYzxi.js";import{_ as r}from"./errorBoundaries-DT4RoXHB.js";import{t as i}from"./jsx-runtime-D5XB8Qto.js";import{A as a,B as o,C as s,D as c,E as l,F as u,G as d,H as f,I as p,K as m,L as h,M as g,N as _,O as v,P as y,R as b,S as x,T as S,U as C,V as w,W as T,_ as E,a as D,b as O,d as k,f as A,g as j,h as M,i as N,j as P,k as F,m as ee,n as te,o as ne,p as re,r as I,s as L,t as R,u as ie,v as z,w as B,x as V,y as H,z as ae}from"./dist-DE8p7S9x.js";var U=t(e(),1),oe=t(r(),1),W=i();function se(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ce(e){if(Array.isArray(e))return e}function le(e){if(Array.isArray(e))return se(e)}function ue(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,xe(r.key),r)}}function fe(e,t,n){return t&&de(e.prototype,t),n&&de(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Ce(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function G(e,t,n){return(t=xe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function he(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ge(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ve(Object(n),!0).forEach(function(t){G(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ye(e,t){return ce(e)||he(e,t)||Ce(e,t)||ge()}function q(e){return le(e)||me(e)||Ce(e)||_e()}function be(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function xe(e){var t=be(e,`string`);return typeof t==`symbol`?t:t+``}function Se(e){"@babel/helpers - typeof";return Se=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Se(e)}function Ce(e,t){if(e){if(typeof e==`string`)return se(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?se(e,t):void 0}}var we=function(){},Te={},Ee={},De=null,Oe={mark:we,measure:we};try{typeof window<`u`&&(Te=window),typeof document<`u`&&(Ee=document),typeof MutationObserver<`u`&&(De=MutationObserver),typeof performance<`u`&&(Oe=performance)}catch{}var ke=(Te.navigator||{}).userAgent,Ae=ke===void 0?``:ke,je=Te,J=Ee,Me=De,Ne=Oe;je.document;var Pe=!!J.documentElement&&!!J.head&&typeof J.addEventListener==`function`&&typeof J.createElement==`function`,Fe=~Ae.indexOf(`MSIE`)||~Ae.indexOf(`Trident/`),Ie,Le=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Re=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,ze={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Be={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ve=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],Y=`classic`,He=`duotone`,Ue=`sharp`,We=`sharp-duotone`,Ge=`chisel`,Ke=`etch`,qe=`graphite`,Je=`jelly`,Ye=`jelly-duo`,Xe=`jelly-fill`,Ze=`mosaic`,Qe=`notdog`,$e=`notdog-duo`,et=`pixel`,tt=`slab`,nt=`slab-duo`,rt=`slab-press`,it=`slab-press-duo`,at=`thumbprint`,ot=`utility`,st=`utility-duo`,ct=`utility-fill`,lt=`vellum`,ut=`whiteboard`,dt=`Classic`,ft=`Duotone`,pt=`Sharp`,mt=`Sharp Duotone`,ht=`Chisel`,gt=`Etch`,_t=`Graphite`,vt=`Jelly`,yt=`Jelly Duo`,bt=`Jelly Fill`,xt=`Mosaic`,St=`Notdog`,Ct=`Notdog Duo`,wt=`Pixel`,Tt=`Slab`,Et=`Slab Duo`,Dt=`Slab Press`,Ot=`Slab Press Duo`,kt=`Thumbprint`,At=`Utility`,jt=`Utility Duo`,Mt=`Utility Fill`,Nt=`Vellum`,Pt=`Whiteboard`,Ft=[Y,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut];Ie={},G(G(G(G(G(G(G(G(G(G(Ie,Y,dt),He,ft),Ue,pt),We,mt),Ge,ht),Ke,gt),qe,_t),Je,vt),Ye,yt),Xe,bt),G(G(G(G(G(G(G(G(G(G(Ie,Ze,xt),Qe,St),$e,Ct),et,wt),tt,Tt),nt,Et),rt,Dt),it,Ot),at,kt),ot,At),G(G(G(G(Ie,st,jt),ct,Mt),lt,Nt),ut,Pt);var It={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Lt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Rt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),zt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Bt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Vt={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Ht=[`kit`];G(G({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Ut={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Wt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Gt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Kt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},qt,Jt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Yt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];qt={},G(G(G(G(G(G(G(G(G(G(qt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),G(G(G(G(G(G(G(G(G(G(qt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),G(G(G(G(qt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),G(G({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Xt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Zt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Qt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},$t=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Yt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),en=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],tn=[1,2,3,4,5,6,7,8,9,10],nn=tn.concat([11,12,13,14,15,16,17,18,19,20]),rn=[].concat(q(Object.keys(Zt)),en,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Jt.GROUP,Jt.SWAP_OPACITY,Jt.PRIMARY,Jt.SECONDARY],tn.map(function(e){return`${e}x`}),nn.map(function(e){return`w-${e}`})),an={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},on=`___FONT_AWESOME___`,sn=16,cn=`fa`,ln=`svg-inline--fa`,un=`data-fa-i2svg`,dn=`data-fa-pseudo-element`,fn=`data-fa-pseudo-element-pending`,pn=`data-prefix`,mn=`data-icon`,hn=`fontawesome-i2svg`,gn=`async`,_n=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],vn=[`::before`,`::after`,`:before`,`:after`],yn=function(){try{return!0}catch{return!1}}();function bn(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[Y]}})}var xn=K({},ze);xn[Y]=K(K(K(K({},{"fa-duotone":`duotone`}),ze[Y]),Vt.kit),Vt[`kit-duotone`]);var Sn=bn(xn),Cn=K({},zt);Cn[Y]=K(K(K(K({},{duotone:`fad`}),Cn[Y]),Kt.kit),Kt[`kit-duotone`]);var wn=bn(Cn),Tn=K({},Qt);Tn[Y]=K(K({},Tn[Y]),Gt.kit);var En=bn(Tn),Dn=K({},Xt);Dn[Y]=K(K({},Dn[Y]),Ut.kit),bn(Dn);var On=Le,kn=`fa-layers-text`,An=Re;bn(K({},It));var jn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Mn=Be,Nn=[].concat(q(Ht),q(rn)),Pn=je.FontAwesomeConfig||{};function Fn(e){var t=J.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function In(e){return e===``?!0:e===`false`?!1:e===`true`||e}J&&typeof J.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=ye(e,2),n=t[0],r=t[1],i=In(Fn(n));i!=null&&(Pn[r]=i)});var Ln={styleDefault:`solid`,familyDefault:Y,cssPrefix:cn,replacementClass:ln,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pn.familyPrefix&&(Pn.cssPrefix=Pn.familyPrefix);var Rn=K(K({},Ln),Pn);Rn.autoReplaceSvg||(Rn.observeMutations=!1);var X={};Object.keys(Ln).forEach(function(e){Object.defineProperty(X,e,{enumerable:!0,set:function(t){Rn[e]=t,zn.forEach(function(e){return e(X)})},get:function(){return Rn[e]}})}),Object.defineProperty(X,"familyPrefix",{enumerable:!0,set:function(e){Rn.cssPrefix=e,zn.forEach(function(e){return e(X)})},get:function(){return Rn.cssPrefix}}),je.FontAwesomeConfig=X;var zn=[];function Bn(e){return zn.push(e),function(){zn.splice(zn.indexOf(e),1)}}var Vn=sn,Hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Un(e){if(e&&Pe){var t=J.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=J.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return J.head.insertBefore(t,r),e}}var Wn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Gn(){for(var e=12,t=``;e-->0;)t+=Wn[Math.random()*62|0];return t}function Kn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qn(e){return e.classList?Kn(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Jn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Yn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Jn(e[n])}" `},``).trim()}function Xn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Zn(e){return e.size!==Hn.size||e.x!==Hn.x||e.y!==Hn.y||e.rotate!==Hn.rotate||e.flipX||e.flipY}function Qn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function $n(e){var t=e.transform,n=e.width,r=n===void 0?sn:n,i=e.height,a=i===void 0?sn:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&Fe?`translate(${t.x/Vn-r/2}em, ${t.y/Vn-a/2}em) `:s?`translate(calc(-50% + ${t.x/Vn}em), calc(-50% + ${t.y/Vn}em)) `:`translate(${t.x/Vn}em, ${t.y/Vn}em) `,c+=`scale(${t.size/Vn*(t.flipX?-1:1)}, ${t.size/Vn*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var er=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function tr(){var e=cn,t=ln,n=X.cssPrefix,r=X.replacementClass,i=er;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var nr=!1;function rr(){X.autoAddCss&&!nr&&(Un(tr()),nr=!0)}var ir={mixout:function(){return{dom:{css:tr,insertCss:rr}}},hooks:function(){return{beforeDOMElementCreation:function(){rr()},beforeI2svg:function(){rr()}}}},ar=je||{};ar[on]||(ar[on]={}),ar[on].styles||(ar[on].styles={}),ar[on].hooks||(ar[on].hooks={}),ar[on].shims||(ar[on].shims=[]);var or=ar[on],sr=[],cr=function(){J.removeEventListener(`DOMContentLoaded`,cr),lr=1,sr.map(function(e){return e()})},lr=!1;Pe&&(lr=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),lr||J.addEventListener(`DOMContentLoaded`,cr));function ur(e){Pe&&(lr?setTimeout(e,0):sr.push(e))}function dr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Jn(e):`<${t} ${Yn(r)}>${a.map(dr).join(``)}</${t}>`}function fr(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var pr=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},mr=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:pr(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function hr(e){return q(e).length===1?e.codePointAt(0).toString(16):null}function gr(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function _r(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=gr(t);typeof or.hooks.addPack==`function`&&!r?or.hooks.addPack(e,gr(t)):or.styles[e]=K(K({},or.styles[e]||{}),i),e===`fas`&&_r(`fa`,t)}var vr=or.styles,yr=or.shims,br=Object.keys(En),xr=br.reduce(function(e,t){return e[t]=Object.keys(En[t]),e},{}),Sr=null,Cr={},wr={},Tr={},Er={},Dr={};function Or(e){return~Nn.indexOf(e)}function kr(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Or(i)?i:null}var Ar=function(){var e=function(e){return mr(vr,function(t,n,r){return t[r]=mr(n,e,{}),t},{})};Cr=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),wr=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Dr=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in vr||X.autoFetchSvg,n=mr(yr,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Tr=n.names,Er=n.unicodes,Sr=zr(X.styleDefault,{family:X.familyDefault})};Bn(function(e){Sr=zr(e.styleDefault,{family:X.familyDefault})}),Ar();function jr(e,t){return(Cr[e]||{})[t]}function Mr(e,t){return(wr[e]||{})[t]}function Nr(e,t){return(Dr[e]||{})[t]}function Pr(e){return Tr[e]||{prefix:null,iconName:null}}function Fr(e){var t=Er[e],n=jr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Ir(){return Sr}var Lr=function(){return{prefix:null,iconName:null,rest:[]}};function Rr(e){var t=Y,n=br.reduce(function(e,t){return e[t]=`${X.cssPrefix}-${t}`,e},{});return Ft.forEach(function(r){(e.includes(n[r])||e.some(function(e){return xr[r].includes(e)}))&&(t=r)}),t}function zr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?Y:t,r=Sn[n][e];if(n===He&&!e)return`fad`;var i=wn[n][e]||wn[n][r],a=e in or.styles?e:null;return i||a||null}function Br(e){var t=[],n=null;return e.forEach(function(e){var r=kr(X.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Vr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Hr=$t.concat(Bt);function Ur(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Vr(e.filter(function(e){return Hr.includes(e)})),a=Vr(e.filter(function(e){return!Hr.includes(e)})),o=ye(i.filter(function(e){return r=e,!Ve.includes(e)}),1)[0],s=o===void 0?null:o,c=Rr(i),l=K(K({},Br(a)),{},{prefix:zr(s,{family:c})});return K(K(K({},l),qr({values:e,family:c,styles:vr,config:X,canonical:l,givenPrefix:r})),Wr(n,r,l))}function Wr(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Pr(i):{},o=Nr(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!vr.far&&vr.fas&&!X.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Gr=Ft.filter(function(e){return e!==Y||e!==He}),Kr=Object.keys(Qt).filter(function(e){return e!==Y}).map(function(e){return Object.keys(Qt[e])}).flat();function qr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===He,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Gr.includes(n)&&(Object.keys(s).find(function(e){return Kr.includes(e)})||l.autoFetchSvg)&&(r.prefix=Rt.get(n).defaultShortPrefixId,r.iconName=Nr(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Ir()||`fas`),r}var Jr=function(){function e(){ue(this,e),this.definitions={}}return fe(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=K(K({},e.definitions[n]||{}),t[n]),_r(n,t[n]);var r=En[Y][n];r&&_r(r,t[n]),Ar()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Yr=[],Xr={},Zr={},Qr=Object.keys(Zr);function $r(e,t){var n=t.mixoutsTo;return Yr=e,Xr={},Object.keys(Zr).forEach(function(e){Qr.indexOf(e)===-1&&delete Zr[e]}),Yr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Se(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Xr[e]||(Xr[e]=[]),Xr[e].push(r[e])})}e.provides&&e.provides(Zr)}),n}function ei(e,t){var n=[...arguments].slice(2);return(Xr[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function ti(e){var t=[...arguments].slice(1);(Xr[e]||[]).forEach(function(e){e.apply(null,t)})}function ni(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Zr[e]?Zr[e].apply(null,t):void 0}function ri(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Ir();if(t)return t=Nr(n,t)||t,fr(ii.definitions,n,t)||fr(or.styles,n,t)}var ii=new Jr,ai={noAuto:function(){X.autoReplaceSvg=!1,X.observeMutations=!1,ti(`noAuto`)},config:X,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pe?(ti(`beforeI2svg`,e),ni(`pseudoElements2svg`,e),ni(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;X.autoReplaceSvg===!1&&(X.autoReplaceSvg=!0),X.observeMutations=!0,ur(function(){oi({autoReplaceSvgRoot:t}),ti(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Se(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Nr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=zr(e[0]);return{prefix:n,iconName:Nr(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${X.cssPrefix}-`)>-1||e.match(On))){var r=Ur(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Ir(),iconName:Nr(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Ir();return{prefix:i,iconName:Nr(i,e)||e}}}},library:ii,findIconDefinition:ri,toHtml:dr},oi=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?J:e;(Object.keys(or.styles).length>0||X.autoFetchSvg)&&Pe&&X.autoReplaceSvg&&ai.dom.i2svg({node:t})};function si(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return dr(e)})}}),Object.defineProperty(e,"node",{get:function(){if(Pe){var t=J.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function ci(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Zn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Xn(K(K({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function li(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${X.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:K(K({},i),{},{id:o}),children:r}]}]}function ui(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function di(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[X.replacementClass,a?`${X.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:K(K({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!ui(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[un]=``);var _=K(K({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:K({},l.styles)}),v=r.found&&n.found?ni(`generateAbstractMask`,_)||{children:[],attributes:{}}:ni(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?li(_):ci(_)}function fi(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=K(K({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[un]=``);var l=K({},a.styles);Zn(i)&&(l.transform=$n({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Xn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function pi(e){var t=e.content,n=e.extra,r=K(K({},n.attributes),{},{class:n.classes.join(` `)}),i=Xn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var mi=or.styles;function hi(e){var t=e[0],n=e[1],r=ye(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${X.cssPrefix}-${Mn.GROUP}`},children:[{tag:`path`,attributes:{class:`${X.cssPrefix}-${Mn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${X.cssPrefix}-${Mn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var gi={found:!1,width:512,height:512};function _i(e,t){!yn&&!X.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function vi(e,t){var n=t;return t===`fa`&&X.styleDefault!==null&&(t=Ir()),new Promise(function(r,i){if(n===`fa`){var a=Pr(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&mi[t]&&mi[t][e]){var o=mi[t][e];return r(hi(o))}_i(e,t),r(K(K({},gi),{},{icon:X.showMissingIcons&&e&&ni(`missingIconAbstract`)||{}}))})}var yi=function(){},bi=X.measurePerformance&&Ne&&Ne.mark&&Ne.measure?Ne:{mark:yi,measure:yi},xi=`FA "7.3.1"`,Si=function(e){return bi.mark(`${xi} ${e} begins`),function(){return Ci(e)}},Ci=function(e){bi.mark(`${xi} ${e} ends`),bi.measure(`${xi} ${e}`,`${xi} ${e} begins`,`${xi} ${e} ends`)},wi={begin:Si,end:Ci},Ti=function(){};function Ei(e){return typeof(e.getAttribute?e.getAttribute(un):null)==`string`}function Di(e){var t=e.getAttribute?e.getAttribute(pn):null,n=e.getAttribute?e.getAttribute(mn):null;return t&&n}function Oi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(X.replacementClass)}function ki(){return X.autoReplaceSvg===!0?Pi.replace:Pi[X.autoReplaceSvg]||Pi.replace}function Ai(e){return J.createElementNS(`http://www.w3.org/2000/svg`,e)}function ji(e){return J.createElement(e)}function Mi(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Ai:ji:t;if(typeof e==`string`)return J.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Mi(e,{ceFn:n}))}),r}function Ni(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Pi={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(Mi(e),t)}),t.getAttribute(un)===null&&X.keepOriginalSource){var n=J.createComment(Ni(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~qn(t).indexOf(X.replacementClass))return Pi.replace(e);var r=RegExp(`${X.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===X.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return dr(e)}).join(`
`);t.setAttribute(un,``),t.innerHTML=a}};function Fi(e){e()}function Ii(e,t){var n=typeof t==`function`?t:Ti;if(e.length===0)n();else{var r=Fi;X.mutateApproach===gn&&(r=je.requestAnimationFrame||Fi),r(function(){var t=ki(),r=wi.begin(`mutate`);e.map(t),r(),n()})}}var Li=!1;function Ri(){Li=!0}function zi(){Li=!1}var Bi=null;function Vi(e){if(Me&&X.observeMutations){var t=e.treeCallback,n=t===void 0?Ti:t,r=e.nodeCallback,i=r===void 0?Ti:r,a=e.pseudoElementsCallback,o=a===void 0?Ti:a,s=e.observeMutationsRoot,c=s===void 0?J:s;Bi=new Me(function(e){if(!Li){var t=Ir();Kn(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Ei(e.addedNodes[0])&&(X.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&X.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Ei(e.target)&&~jn.indexOf(e.attributeName)){if(e.attributeName===`class`&&Di(e.target)){var r=Ur(qn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(pn,a||t),s&&e.target.setAttribute(mn,s)}else Oi(e.target)&&i(e.target)}})}}),Pe&&Bi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hi(){Bi&&Bi.disconnect()}function Ui(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Wi(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Ur(qn(e));return i.prefix||=Ir(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Mr(i.prefix,e.innerText)||jr(i.prefix,hr(e.innerText))),!i.iconName&&X.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Gi(e){return Kn(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Ki(){return{iconName:null,prefix:null,transform:Hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wi(e),r=n.iconName,i=n.prefix,a=n.rest,o=Gi(e),s=ei(`parseNodeAttributes`,{},e);return K({iconName:r,prefix:i,transform:Hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Ui(e):[],attributes:o}},s)}var Ji=or.styles;function Yi(e){var t=X.autoReplaceSvg===`nest`?qi(e,{styleParser:!1}):qi(e);return~t.extra.classes.indexOf(kn)?ni(`generateLayersText`,e,t):ni(`generateSvgReplacementMutation`,e,t)}function Xi(){return[].concat(q(Bt),q($t))}function Zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Pe)return Promise.resolve();var n=J.documentElement.classList,r=function(e){return n.add(`${hn}-${e}`)},i=function(e){return n.remove(`${hn}-${e}`)},a=X.autoFetchSvg?Xi():Ve.concat(Object.keys(Ji));a.includes(`fa`)||a.push(`fa`);var o=[`.${kn}:not([${un}])`].concat(a.map(function(e){return`.${e}:not([${un}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=Kn(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=wi.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Yi(t);n&&e.push(n)}catch(e){yn||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Ii(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yi(e).then(function(e){e&&Ii([e],t)})}function $i(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ri(t||{}),i=n.mask;return i&&=(i||{}).icon?i:ri(i||{}),e(r,K(K({},n),{},{mask:i}))}}var ea=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Hn:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return si(K({type:`icon`},e),function(){return ti(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),di({icons:{main:hi(v),mask:s?hi(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:K(K({},Hn),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ta={mixout:function(){return{icon:$i(ea)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Zi,e.nodeCallback=Qi,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?J:t,r=e.callback;return Zi(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([vi(n,r),o.iconName?vi(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=ye(o,2),u=l[0],d=l[1];t([e,di({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Xn(a);o.length>0&&(n.style=o);var s;return Zn(i)&&(s=ni(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},na={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return si({type:`layer`},function(){ti(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${X.cssPrefix}-layers`].concat(q(r)).join(` `)},children:n}]})}}}},ra={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return si({type:`counter`,content:e},function(){return ti(`beforeDOMElementCreation`,{content:e,params:t}),pi({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${X.cssPrefix}-layers-counter`].concat(q(a))}})})}}}},ia={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?Hn:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return si({type:`text`,content:e},function(){return ti(`beforeDOMElementCreation`,{content:e,params:t}),fi({content:e,transform:K(K({},Hn),r),extra:{attributes:s,styles:l,classes:[`${X.cssPrefix}-layers-text`].concat(q(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Fe){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,fi({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},aa=RegExp(`"`,`ug`),oa=[1105920,1112319],sa=K(K(K(K({},{FontAwesome:{normal:`fas`,400:`fas`}}),Lt),an),Wt),ca=Object.keys(sa).reduce(function(e,t){return e[t.toLowerCase()]=sa[t],e},{}),la=Object.keys(ca).reduce(function(e,t){var n=ca[t];return e[t]=n[900]||q(Object.entries(n))[0][1],e},{});function ua(e){return hr(q(e.replace(aa,``))[0]||``)}function da(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(aa,``),r=n.codePointAt(0),i=r>=oa[0]&&r<=oa[1],a=n.length===2&&n[0]===n[1];return i||a||t}function fa(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(ca[n]||{})[i]||la[n]}function pa(e,t){var n=`${fn}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Kn(e.children).filter(function(e){return e.getAttribute(dn)===t})[0],o=je.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(An),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=fa(s,l),p=ua(d),m=c[0].startsWith(`FontAwesome`),h=da(o),g=jr(f,p),_=g;if(m){var v=Fr(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(pn)!==f||a.getAttribute(mn)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Ki(),b=y.extra;b.attributes[dn]=t,vi(g,f).then(function(i){var a=di(K(K({},y),{},{icons:{main:i,mask:Lr()},prefix:f,iconName:_,extra:b,watchable:!0})),o=J.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return dr(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ma(e){return Promise.all([pa(e,`::before`),pa(e,`::after`)])}function ha(e){return e.parentNode!==document.head&&!~_n.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(dn)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var ga=function(e){return!!e&&vn.some(function(t){return e.includes(t)})},_a=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=pe(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(ga(a)){var o=vn.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function va(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(Pe){var n;if(t)n=e;else if(X.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=pe(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=pe(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=pe(_a(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){X.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=Kn(n).filter(ha).map(ma),i=wi.begin(`searchPseudoElements`);Ri(),Promise.all(r).then(function(){i(),zi(),e()}).catch(function(){i(),zi(),t()})})}}var ya={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=va,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?J:t;X.searchPseudoElements&&va(n)}}},ba=!1,xa={mixout:function(){return{dom:{unwatch:function(){Ri(),ba=!0}}}},hooks:function(){return{bootstrap:function(){Vi(ei(`mutationObserverCallbacks`,{}))},noAuto:function(){Hi()},watch:function(e){var t=e.observeMutationsRoot;ba?zi():Vi(ei(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Sa=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Ca={mixout:function(){return{parse:{transform:function(e){return Sa(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Sa(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:K({},a.outer),children:[{tag:`g`,attributes:K({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:K(K({},t.icon.attributes),a.path)}]}]}}}},wa={x:0,y:0,width:`100%`,height:`100%`};function Ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ea(e){return e.tag===`g`?e.children:[e]}$r([ir,ta,na,ra,ia,ya,xa,Ca,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Ur(n.split(` `).map(function(e){return e.trim()})):Lr();return r.prefix||=Ir(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Qn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:K(K({},wa),{},{fill:`white`})},p=c.children?{children:c.children.map(Ta)}:{},m={tag:`g`,attributes:K({},d.inner),children:[Ta(K({tag:c.tag,attributes:K(K({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:K({},d.outer),children:[m]},g=`mask-${a||Gn()}`,_=`clip-${a||Gn()}`,v={tag:`mask`,attributes:K(K({},wa),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ea(u)},v]};return t.push(y,{tag:`rect`,attributes:K({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},wa)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;je.matchMedia&&(t=je.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:K(K({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=K(K({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:K(K({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:K(K({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:K(K({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:K(K({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:K(K({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:K(K({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:K(K({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:ai}),ai.noAuto;var Da=ai.config;ai.library,ai.dom;var Oa=ai.parse;ai.findIconDefinition,ai.toHtml;var ka=ai.icon;ai.layer,ai.text,ai.counter;function Aa(e){return e-=0,e===e}function ja(e){return Aa(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Ma=(e,t)=>U.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Na(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Pa=new Map,Fa=1e3;function Ia(e){if(Pa.has(e))return Pa.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=ja(n);t[e.startsWith(`webkit`)?Na(e):e]=r}}}n=a+1}if(Pa.size===Fa){let e=Pa.keys().next().value;e&&Pa.delete(e)}return Pa.set(e,t),t}function La(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),La(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Ia(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[ja(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Ma)))}return e(t.tag,{...a,...u},...r)}var Ra=La.bind(null,U.createElement),za=(e,t)=>{let n=(0,U.useId)();return e||(t?n:void 0)},Ba=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Va=`searchPseudoElementsFullScan`in Da&&typeof Da.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Ha=Number.parseInt(Va)>=7,Ua=()=>Ha,Wa=`fa`,Z={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},Ga={left:`fa-pull-left`,right:`fa-pull-right`},Ka={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},qa={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Ja={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},Ya={default:`fa-layers`};function Xa(e){let t=Da.cssPrefix||Da.familyPrefix||Wa;return t===Wa?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Wa}-`,`g`),`${t}-`)}function Za(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:S,buzz:C,float:w,jello:T,spinSnap:E,spinSnap4:D,spinSnap8:O,swing:k,wag:A,className:j}=e,M=[];return j&&M.push(...j.split(` `)),t&&M.push(Z.beat),n&&M.push(Z.fade),r&&M.push(Z.beatFade),i&&M.push(Z.bounce),a&&M.push(Z.shake),o&&M.push(Z.spin),c&&M.push(Z.spinReverse),s&&M.push(Z.spinPulse),l&&M.push(Z.pulse),u&&M.push(Ja.fixedWidth),d&&M.push(Ja.inverse),f&&M.push(Ja.border),p===!0&&M.push(Ja.flip),(p===`horizontal`||p===`both`)&&M.push(Ja.flipHorizontal),(p===`vertical`||p===`both`)&&M.push(Ja.flipVertical),m!=null&&M.push(qa[m]),h!=null&&h!==0&&M.push(Ka[h]),g!=null&&M.push(Ga[g]),_&&M.push(Ja.swapOpacity),Ua()?(v&&M.push(Ja.rotateBy),y&&M.push(Ja.widthAuto),b&&M.push(Ja.canvasSquare),x&&M.push(Ja.canvasRoomy),S&&M.push(Z.flip360),C&&M.push(Z.buzz),w&&M.push(Z.float),T&&M.push(Z.jello),E&&M.push(Z.spinSnap),D&&M.push(Z.spinSnap4),O&&M.push(Z.spinSnap8),k&&M.push(Z.swing),A&&M.push(Z.wag),(Da.cssPrefix||Da.familyPrefix||Wa)===Wa?M:M.map(Xa)):M}var Qa=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function $a(e){if(e)return Qa(e)?e:Oa.icon(e)}function eo(e){return Object.keys(e)}var to=new Ba(`FontAwesomeIcon`),no={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},ro=new Set(Object.keys(no)),io=U.forwardRef((e,t)=>{let n={...no,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=za(c,!!i),d=za(s,!!o),f=$a(r);if(!f)return to.error(`Icon lookup is undefined`,r),null;let p=Za(n),m=typeof l==`string`?Oa.transform(l):l,h=$a(i),g=ka(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return to.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of eo(n))ro.has(e)||(v[e]=n[e]);return Ra(_[0],v)});io.displayName=`FontAwesomeIcon`,`${Ya.default}${Ja.fixedWidth}`;var ao={prefix:`fab`,iconName:`facebook`,icon:[512,512,[62e3],`f09a`,`M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z`]},oo={prefix:`fab`,iconName:`tiktok`,icon:[448,512,[],`e07b`,`M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z`]},so={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},co=({useDark:e,...t})=>(0,W.jsx)(T,{...t,className:`h-fit!`,children:(0,W.jsx)(`img`,{style:e?{}:{filter:`invert(100%)`},src:`/assets/img/logo/imperial.svg`})}),lo=({useDark:e,...t})=>(0,W.jsx)(T,{...t,className:`h-fit!`,children:(0,W.jsx)(`img`,{style:e?{}:{filter:`invert(100%)`},src:`/assets/img/logo/union.png`})}),uo=({useDark:e,...t})=>(0,W.jsx)(T,{...t,className:`h-fit!`,children:(0,W.jsx)(`img`,{style:e?{}:{filter:`invert(100%)`},src:`/assets/img/logo/comus.png`})}),fo=[{icon:so,url:`//instagram.com/ic_dramsoc`},{icon:ao,url:`//www.facebook.com/dramsoc`},{icon:oo,url:`//www.tiktok.com/@ic_dramsoc`}],po=[{name:`Hire Terms and Consitutions`,url:`/static/files/hire_terms_and_conditions.pdf`},{name:`Constitution`,url:`/static/files/constitution.pdf`},{name:`Bye Laws`,url:`/static/files/bye_laws.pdf`},{name:`Data Protection`,url:`/static/files/data_protection_policy.pdf`},{name:`Debtor Policy`,url:`/static/files/debtor_policy.pdf`},{name:`Ticketing Policy`,url:`/policy/ticketing`},{name:`Privacy Notice`,url:`/static/files/privacy_notice.pdf`}],mo=[{name:`Committee Meeting Minutes`,url:`//drive.google.com/drive/folders/1k5JOO6hJiYjPn8yoFymKMHEBGHtOoada`},{name:`Past Committees`,url:`//wiki.dramsoc.org/Category:Committee`},{name:`Past Shows`,url:`//wiki.dramsoc.org/Events`},{name:`Winters`,url:`//wiki.dramsoc.org/Winters`},{name:`Horde`,url:`//horde.dramsoc.org/`},{name:`Wiki`,url:`//wiki.dramsoc.org/`}],ho=()=>(0,W.jsx)(`div`,{className:`bg-black text-white w-full py-5 [&_a]:hover:opacity-70 **:transition-opacity`,children:(0,W.jsxs)(d,{children:[(0,W.jsxs)(`div`,{className:`flex flex-wrap gap-6 [&_.flex]:gap-3`,children:[(0,W.jsxs)(`div`,{className:`flex flex-col grow`,children:[(0,W.jsx)(C,{width:75}),(0,W.jsx)(`p`,{children:`Est. 1912`}),(0,W.jsx)(`div`,{className:`flex`,children:fo.map(e=>(0,W.jsx)(m,{to:e.url,target:`_blank`,children:(0,W.jsx)(io,{icon:e.icon,fontSize:20,style:{transform:`translateX(-3px)`}})},e.url))})]}),(0,W.jsxs)(`div`,{className:`flex flex-col grow items-end md:items-start [&_p]:text-right [&_p]:md:text-left`,children:[(0,W.jsx)(`div`,{children:(0,W.jsx)(m,{to:`tel:+442075948102`,children:(0,W.jsx)(`p`,{children:`+44 (0) 20 759 48102`})})}),(0,W.jsx)(`div`,{children:(0,W.jsx)(m,{to:`https://maps.app.goo.gl/wFEc4Y3T66jhwqZj7`,target:`_blank`,children:(0,W.jsxs)(`p`,{children:[`Imperial College Dramatic Society`,(0,W.jsx)(`br`,{}),`Imperial College Union`,(0,W.jsx)(`br`,{}),`Beit Qudrangle`,(0,W.jsx)(`br`,{}),`Prince Consort Road`,(0,W.jsx)(`br`,{}),`South Kensington`,(0,W.jsx)(`br`,{}),`London`,(0,W.jsx)(`br`,{}),`SW7 2BB`]})})})]}),[po,mo].map((e,t)=>(0,W.jsx)(`div`,{className:`grow flex flex-col gap-2! ${t%2?`items-end md:items-start text-right md:text-left`:``}`,children:e.map(e=>(0,W.jsx)(`div`,{children:(0,W.jsx)(m,{to:e.url,target:`_blank`,children:e.name})},e.name))})),(0,W.jsxs)(`div`,{className:`flex flex-col gap-6! justify-between`,children:[(0,W.jsxs)(`div`,{className:`flex flex-col gap-6!`,children:[(0,W.jsx)(m,{to:`//imperial.ac.uk`,target:`_blank`,children:(0,W.jsx)(co,{})}),(0,W.jsx)(m,{to:`//imperialcollegeunion.org`,target:`_blank`,children:(0,W.jsx)(lo,{width:100})})]}),(0,W.jsx)(m,{to:`//comus.org.uk`,target:`_blank`,children:(0,W.jsx)(uo,{width:50})})]})]}),(0,W.jsxs)(`div`,{className:`text-center mt-8 text-gray-500`,children:[(0,W.jsxs)(`p`,{children:[`DramSoc is a part of Imperial College Union which is a`,` `,(0,W.jsx)(m,{to:`//register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5033166`,children:`UK Registered Charity, Number 1151241`})]}),(0,W.jsxs)(`p`,{children:[`Copyright © `,new Date().getFullYear(),` Imperial College Dramatic Society`]})]})]})});function go({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=U.useRef(e!==void 0),[a,o]=U.useState(t);return[i&&e!==void 0?e:a,U.useCallback(e=>{i||o(e)},[])]}function _o(e){return e?.ownerDocument||document}function vo(){return typeof navigator>`u`?{userAgent:``,platform:``,maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform??``,maxTouchPoints:navigator.maxTouchPoints??0}}var{userAgent:yo,platform:bo,maxTouchPoints:xo}=vo(),So=yo.toLowerCase(),Co=bo.toLowerCase(),wo=/^i(os$|p)/.test(Co)||Co===`macintel`&&xo>1,To=`android`,Eo=Co===To||So.includes(To),Do=!wo&&Co.startsWith(`mac`);Co.startsWith(`win`),!Eo&&/^(linux|chrome os)/.test(Co);var Oo=Do||wo,ko=typeof CSS<`u`&&!!CSS.supports?.(`-webkit-backdrop-filter:none`);!ko&&So.includes(`firefox`),!ko&&So.includes(`chrom`);var Ao=Oo;function jo(e){return`nativeEvent`in e}function Mo(e){return e.pointerType===``&&e.isTrusted?!0:Eo&&e.pointerType?e.type===`click`&&e.buttons===1:e.detail===0&&!e.pointerType}function No(e,t){let n=[`mouse`,`pen`];return t||n.push(``,void 0),n.includes(e)}function Po(e){let t=e.type;return t===`click`||t===`mousedown`||t===`keydown`||t===`keyup`}function Fo(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function Q(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&ae(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Io(e){return`composedPath`in e?e.composedPath()[0]??e.target:e.target}var Lo=`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`,Ro=`data-open`,zo=`data-closed`,Bo=`data-anchor-hidden`,Vo={[Ro]:``},Ho={[zo]:``},Uo={[Bo]:``},Wo={open(e){return e?Vo:Ho},anchorHidden(e){return e?Uo:null}},Go={...Wo,...re},Ko=`data-trigger-disabled`;function qo(e,t){if(!y(e))return!1;let n=e;if(t.hasElement(n))return!n.hasAttribute(Ko);for(let[,e]of t.entries())if(Q(e,n))return!e.hasAttribute(Ko);return!1}function Jo(e,t){if(t==null)return!1;if(`composedPath`in e)return e.composedPath().includes(t);let n=e;return n.target!=null&&t.contains(n.target)}function Yo(e){return e.matches(`html,body`)}function Xo(e){return e?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${Lo}`)!=null}function Zo(e,t){return t!=null&&!No(t)?0:typeof e==`function`?e():e}function Qo(e,t,n){let r=Zo(e,n);return typeof r==`number`?r:r?.[t]}function $o(e,t){return t||e===`click`||e===`mousedown`}function es(e){return e?.includes(`mouse`)&&e!==`mousedown`}var ts=`trigger-press`,ns=`trigger-hover`,rs=`outside-press`,is=`link-press`,as=`focus-out`,os=`escape-key`;function ss(e,t,n,r){let i=!1,a=!1,o=r??z;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function cs(...e){return()=>{for(let t=0;t<e.length;t+=1){let n=e[t];n&&n()}}}function ls(e){let t=x(us,e).current;return t.next=e,O(t.effect),t}function us(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}var ds={clipPath:`inset(50%)`,overflow:`hidden`,whiteSpace:`nowrap`,border:0,padding:0,width:1,height:1,margin:-1},fs={...ds,position:`fixed`,top:0,left:0};({...ds});var ps=U.forwardRef(function(e,t){let[n,r]=U.useState();O(()=>{Ao&&ko&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,W.jsx)(`span`,{...e,ref:t,style:fs,"aria-hidden":!n||void 0,...i,"data-base-ui-focus-guard":``})}),ms=Math.min,hs=Math.max,gs=Math.round,_s=Math.floor,vs=e=>({x:e,y:e}),ys={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function bs(e,t,n){return hs(e,ms(t,n))}function xs(e,t){return typeof e==`function`?e(t):e}function Ss(e){return e.split(`-`)[0]}function Cs(e){return e.split(`-`)[1]}function ws(e){return e===`x`?`y`:`x`}function Ts(e){return e===`y`?`height`:`width`}function Es(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Ds(e){return ws(Es(e))}function Os(e,t,n){n===void 0&&(n=!1);let r=Cs(e),i=Ds(e),a=Ts(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Ls(o)),[o,Ls(o)]}function ks(e){let t=Ls(e);return[As(e),t,As(t)]}function As(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var js=[`left`,`right`],Ms=[`right`,`left`],Ns=[`top`,`bottom`],Ps=[`bottom`,`top`];function Fs(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Ms:js:t?js:Ms;case`left`:case`right`:return t?Ns:Ps;default:return[]}}function Is(e,t,n,r){let i=Cs(e),a=Fs(Ss(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(As)))),a}function Ls(e){let t=Ss(e);return ys[t]+e.slice(t.length)}function Rs(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function zs(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Rs(e)}function Bs(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Vs(e,t){return t<0||t>=e.length}function Hs(e,t){return Ws(e.current,{disabledIndices:t})}function Us(e,t){return Ws(e.current,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function Ws(e,{startingIndex:t=-1,decrement:n=!1,disabledIndices:r,amount:i=1}={}){let a=t;do a+=n?-i:i;while(a>=0&&a<=e.length-1&&Gs(e,a,r));return a}function Gs(e,t,n){if(typeof n==`function`?n(t):n?.includes(t)??!1)return!0;let r=e[t];return r?!qs(r)||r.matches(`:disabled`)?!0:!n&&(r.hasAttribute(`disabled`)||r.getAttribute(`aria-disabled`)===`true`):!1}function Ks(e){return e.visibility===`hidden`||e.visibility===`collapse`}function qs(e,t=e?B(e):null){return!e||!e.isConnected||!t||Ks(t)?!1:typeof e.checkVisibility==`function`?e.checkVisibility():t.display!==`none`&&t.display!==`contents`}var Js=`a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;function Ys(e){let t=e.assignedSlot;if(t)return t;if(e.parentElement)return e.parentElement;let n=e.getRootNode();return ae(n)?n.host:null}function Xs(e){for(let t of Array.from(e.children))if(v(t)===`summary`)return t;return null}function Zs(e,t){let n=Xs(t);return!!n&&(e===n||Q(n,e))}function Qs(e){let t=e?v(e):``;return e!=null&&e.matches(Js)&&(t!==`summary`||e.parentElement!=null&&v(e.parentElement)===`details`&&Xs(e.parentElement)===e)&&(t!==`details`||Xs(e)==null)&&(t!==`input`||e.type!==`hidden`)}function $s(e){if(!Qs(e)||!e.isConnected||e.matches(`:disabled`))return!1;for(let t=e;t;t=Ys(t)){let n=t!==e,r=v(t)===`slot`;if(t.hasAttribute(`inert`)||n&&v(t)===`details`&&!t.open&&!Zs(e,t)||t.hasAttribute(`hidden`)||!r&&!ec(t,n))return!1}return!0}function ec(e,t){let n=B(e);return t?n.display!==`none`:qs(e,n)}function tc(e){let t=e.tabIndex;if(t<0){let t=v(e);if(t===`details`||t===`audio`||t===`video`||u(e)&&e.isContentEditable)return 0}return t}function nc(e){if(v(e)!==`input`)return null;let t=e;return t.type===`radio`&&t.name!==``?t:null}function rc(e,t){let n=nc(e);if(!n)return!0;let r=t.find(e=>{let t=nc(e);return t?.name===n.name&&t.form===n.form&&t.checked});return r?r===n:t.find(e=>{let t=nc(e);return t?.name===n.name&&t.form===n.form})===n}function ic(e){if(u(e)&&v(e)===`slot`){let t=e.assignedElements({flatten:!0});if(t.length>0)return t}return u(e)&&e.shadowRoot?Array.from(e.shadowRoot.children):Array.from(e.children)}function ac(e,t){ic(e).forEach(e=>{Qs(e)&&t.push(e),ac(e,t)})}function oc(e,t,n){ic(e).forEach(e=>{u(e)&&e.matches(t)&&n.push(e),oc(e,t,n)})}function sc(e){let t=[];return ac(e,t),t.filter($s)}function cc(e){let t=sc(e);return t.filter(e=>tc(e)>=0&&rc(e,t))}function lc(e,t){let n=cc(e),r=n.length;if(r===0)return;let i=Fo(_o(e)),a=n.indexOf(i);return n[a===-1?t===1?0:r-1:a+t]}function uc(e){return lc(_o(e).body,1)||e}function dc(e){return lc(_o(e).body,-1)||e}function fc(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!Q(n,r)}function pc(e){cc(e).forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)})}function mc(e){let t=[];oc(e,`[data-tabindex]`,t),t.forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute(`tabindex`,t):e.removeAttribute(`tabindex`)})}function hc(e,t,n=!0){return e.filter(e=>e.parentId===t).flatMap(t=>[...!n||t.context?.open?[t]:[],...hc(e,t.id,n)])}function gc(e){return`data-base-ui-${e}`}var _c=0;function vc(e,t=`mui`){let[n,r]=U.useState(e),i=e||n;return U.useEffect(()=>{n??(_c+=1,r(`${t}-${_c}`))},[n,t]),i}var yc=s.useId;function bc(e,t){if(yc!==void 0){let n=yc();return e??(t?`${t}-${n}`:n)}return vc(e,t)}var xc={style:{transition:`none`}},Sc={fallbackAxisSide:`none`},Cc={fallbackAxisSide:`end`},wc={clipPath:`inset(50%)`,position:`fixed`,top:0,left:0},Tc=U.createContext(null),Ec=()=>U.useContext(Tc),Dc=gc(`portal`);function Oc(e={}){let{ref:t,container:n,componentProps:r=z,elementProps:i}=e,a=bc(),o=Ec()?.portalNode,[s,c]=U.useState(null),[l,u]=U.useState(null),d=V(e=>{e!==null&&u(e)}),f=U.useRef(null);O(()=>{if(n===null){f.current&&(f.current=null,u(null),c(null));return}let e=(n&&(h(n)?n:n.current))??o??document.body;if(e==null){f.current&&(f.current=null,u(null),c(null));return}f.current!==e&&(f.current=e,u(null),c(e))},[n,o]);let p=L(`div`,r,{ref:[t,d],props:[{id:a,[Dc]:``},i]}),m=s&&p?oe.createPortal(p,s):null;return{node:l,nodeId:U.isValidElement(p)?p.props.id:void 0,subtree:m}}var kc=U.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,container:o,portalOwnerRole:s,...c}=e,{node:l,nodeId:u,subtree:d}=Oc({container:o,ref:t,componentProps:e,elementProps:c}),f=U.useRef(null),p=U.useRef(null),m=U.useRef(null),h=U.useRef(null),[g,_]=U.useState(null),v=U.useRef(!1),y=g?.modal,b=g?.open,x=!!g&&!g.modal&&g.open&&!!l;U.useEffect(()=>{if(!l||y)return;function e(e){l&&e.relatedTarget&&fc(e)&&(e.type===`focusin`?v.current&&=(mc(l),!1):(pc(l),v.current=!0))}return cs($(l,`focusin`,e,!0),$(l,`focusout`,e,!0))},[l,y]),O(()=>{l&&b===!0&&v.current&&(mc(l),v.current=!1)},[b,l]);let S=U.useMemo(()=>({beforeOutsideRef:f,afterOutsideRef:p,beforeInsideRef:m,afterInsideRef:h,portalNode:l,setFocusManagerState:_}),[l]);return(0,W.jsxs)(U.Fragment,{children:[d,(0,W.jsxs)(Tc.Provider,{value:S,children:[x&&l&&(0,W.jsx)(ps,{"data-type":`outside`,ref:f,onFocus:e=>{fc(e,l)?m.current?.focus():dc(g?g.domReference:null)?.focus()}}),x&&l&&(0,W.jsx)(`span`,{role:s,"aria-owns":u,style:wc}),l&&oe.createPortal(a,l),x&&l&&(0,W.jsx)(ps,{"data-type":`outside`,ref:p,onFocus:e=>{fc(e,l)?h.current?.focus():(uc(g?g.domReference:null)?.focus(),g?.closeOnFocusOut&&g?.onOpenChange(!1,ss(`focus-out`,e.nativeEvent)))}})]})]})});function Ac(){let e=new Map;return{emit(t,n){e.get(t)?.forEach(e=>e(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){e.get(t)?.delete(n)}}}var jc=class{nodesRef={current:[]};events=Ac();addNode(e){this.nodesRef.current.push(e)}removeNode(e){let t=this.nodesRef.current.findIndex(t=>t===e);t!==-1&&this.nodesRef.current.splice(t,1)}},Mc=U.createContext(null),Nc=U.createContext(null),Pc=()=>U.useContext(Mc)?.id||null,Fc=e=>{let t=U.useContext(Nc);return e??t};function Ic(e){let t=bc(),n=Fc(e),r=Pc();return O(()=>{if(!t)return;let e={id:t,parentId:r};return n?.addNode(e),()=>{n?.removeNode(e)}},[n,t,r]),t}function Lc(e){let{children:t,id:n}=e,r=Pc();return(0,W.jsx)(Mc.Provider,{value:U.useMemo(()=>({id:n,parentId:r}),[n,r]),children:t})}function Rc(e){let{children:t,externalTree:n}=e,r=x(()=>n??new jc).current;return(0,W.jsx)(Nc.Provider,{value:r,children:t})}function zc(){return!1}function Bc(e){return{escapeKey:typeof e==`boolean`?e:e?.escapeKey??!1,outsidePress:typeof e==`boolean`?e:e?.outsidePress??!0}}function Vc(e,t={}){let{enabled:n=!0,escapeKey:r=!0,outsidePress:i=!0,outsidePressEvent:a=`sloppy`,referencePress:o=zc,bubbles:s,externalTree:c}=t,l=`rootStore`in e?e.rootStore:e,d=l.useState(`open`),f=l.useState(`floatingElement`),{dataRef:m,events:h}=l.context,g=Fc(c),_=V(typeof i==`function`?i:()=>!1),v=typeof i==`function`?_:i,b=v!==!1,x=V(()=>a),{escapeKey:S,outsidePress:C}=Bc(s),w=U.useRef(!1),T=U.useRef(!1),E=U.useRef(!1),D=U.useRef(!1),O=U.useRef(!1),k=U.useRef(``),A=U.useRef(null),j=M(),N=M(),F=V(()=>{N.clear(),m.current.insideReactTree=!1}),te=V(e=>{let t=m.current.floatingContext?.nodeId;return(g?hc(g.nodesRef.current,t):[]).some(t=>t.context?.open&&!t.context.dataRef.current[e])}),ne=V(e=>Jo(e,l.select(`floatingElement`))||Jo(e,l.select(`domReferenceElement`))),re=V(e=>{o()&&l.setOpen(!1,ss(ts,e.nativeEvent))}),I=V(e=>{if(!d||!n||!r||e.key!==`Escape`||O.current||!S&&te(`__escapeKeyBubbles`))return;let t=ss(os,jo(e)?e.nativeEvent:e);l.setOpen(!1,t),t.isCanceled||e.preventDefault(),!S&&!t.isPropagationAllowed&&e.stopPropagation()}),L=V(()=>{m.current.insideReactTree=!0,N.start(0,F)}),R=V(e=>{if(!d||!n||e.button!==0)return;let t=Io(e.nativeEvent);Q(l.select(`floatingElement`),t)&&(w.current||(w.current=!0,T.current=!1))}),ie=V(e=>{d&&n&&(e.defaultPrevented||e.nativeEvent.defaultPrevented)&&w.current&&(T.current=!0)});U.useEffect(()=>{function e(e){e.open||(D.current=!1)}return h.on(`openchange`,e),()=>{h.off(`openchange`,e)}},[h]),U.useEffect(()=>{if(!d||!n)return d||(D.current=!1),F;m.current.__escapeKeyBubbles=S,m.current.__outsidePressBubbles=C;let e=new ee,t=new ee,i=_o(f);function a(){e.clear(),O.current=!0}function o(){e.start(ko?5:0,()=>{O.current=!1})}function s(){E.current=!0,t.start(0,()=>{E.current=!1})}function c(){w.current=!1,T.current=!1}function h(){let e=k.current,t=e===`pen`||!e?`mouse`:e,n=x(),r=typeof n==`function`?n():n;return typeof r==`string`?r:r[t]}function _(e){let t=h();return t===`intentional`&&e.type!==`click`||t===`sloppy`&&e.type===`click`}function M(e){let t=m.current.floatingContext?.nodeId,n=g&&hc(g.nodesRef.current,t).some(t=>Jo(e,t.context?.elements.floating));return ne(e)||n}function N(e){if(_(e)){e.type!==`click`&&!ne(e)&&(t.clear(),E.current=!1),F();return}if(m.current.insideReactTree){F();return}let n=Io(e),r=`[${gc(`inert`)}]`,i=y(n)?n.getRootNode():null,a=Array.from((ae(i)?i:_o(l.select(`floatingElement`))).querySelectorAll(r)),o=l.context.triggerElements;if(n&&(o.hasElement(n)||o.hasMatchingElement(e=>Q(e,n))))return;let s=y(n)?n:null;for(;s&&!p(s);){let e=P(s);if(p(e)||!y(e))break;s=e}if(!(a.length&&y(n)&&!Yo(n)&&!Q(n,l.select(`floatingElement`))&&a.every(e=>!Q(s,e)))){if(u(n)&&!(`touches`in e)){let t=p(n),r=B(n),i=/auto|scroll/,a=t||i.test(r.overflowX),o=t||i.test(r.overflowY),s=a&&n.clientWidth>0&&n.scrollWidth>n.clientWidth,c=o&&n.clientHeight>0&&n.scrollHeight>n.clientHeight,l=r.direction===`rtl`,u=c&&(l?e.offsetX<=n.offsetWidth-n.clientWidth:e.offsetX>n.clientWidth),d=s&&e.offsetY>n.clientHeight;if(u||d)return}if(!M(e)){if(h()===`intentional`){if(e.detail!==0&&!Mo(e)&&!D.current)return;if(E.current){t.clear(),E.current=!1;return}}(typeof v!=`function`||v(e))&&(te(`__outsidePressBubbles`)||(l.setOpen(!1,ss(rs,e)),F()))}}}function re(e){h()===`sloppy`&&e.pointerType!==`touch`&&l.select(`open`)&&n&&!ne(e)&&N(e)}function L(e){if(h()!==`sloppy`||!l.select(`open`)||!n||ne(e))return;let t=e.touches[0];t&&(A.current={startTime:Date.now(),startX:t.clientX,startY:t.clientY,dismissOnTouchEnd:!1,dismissOnMouseDown:!0},j.start(1e3,()=>{A.current&&(A.current.dismissOnTouchEnd=!1,A.current.dismissOnMouseDown=!1)}))}function R(e,t){let n=Io(e);if(!n)return;let r=$(n,e.type,()=>{t(e),r()})}function ie(e){k.current=`touch`,R(e,L)}function z(e){j.clear(),e.type===`pointerdown`&&(e.button===0&&(D.current=!0),k.current=e.pointerType),(e.type!==`mousedown`||!A.current||A.current.dismissOnMouseDown)&&R(e,e=>{e.type===`pointerdown`?re(e):N(e)})}function V(e){if(e.type===`pointercancel`&&(D.current=!1),!w.current)return;let n=T.current;if(c(),h()===`intentional`){if(e.type===`pointercancel`){n&&s();return}if(!M(e)){if(n){s();return}(typeof v!=`function`||v(e))&&(t.clear(),E.current=!0,F())}}}function H(e){if(h()!==`sloppy`||!A.current||ne(e))return;let t=e.touches[0];if(!t)return;let n=Math.abs(t.clientX-A.current.startX),r=Math.abs(t.clientY-A.current.startY),i=Math.sqrt(n*n+r*r);i>5&&(A.current.dismissOnTouchEnd=!0),i>10&&(N(e),j.clear(),A.current=null)}function U(e){R(e,H)}function oe(e){h()===`sloppy`&&A.current&&!ne(e)&&(A.current.dismissOnTouchEnd&&N(e),j.clear(),A.current=null)}function W(e){R(e,oe)}let se=cs(r&&cs($(i,`keydown`,I),$(i,`compositionstart`,a),$(i,`compositionend`,o)),b&&cs($(i,`click`,z,!0),$(i,`pointerdown`,z,!0),$(i,`pointerup`,V,!0),$(i,`pointercancel`,V,!0),$(i,`mousedown`,z,!0),$(i,`mouseup`,V,!0),$(i,`touchstart`,ie,{capture:!0,passive:!0}),$(i,`touchmove`,U,{capture:!0,passive:!0}),$(i,`touchend`,W,{capture:!0,passive:!0})));return()=>{se(),e.clear(),t.clear(),c(),E.current=!1,F()}},[m,f,r,b,v,d,n,S,C,I,F,x,te,ne,g,l,j]);let z=U.useMemo(()=>({onKeyDown:I,onPointerDown:re,onClick:re}),[I,re]),H=U.useMemo(()=>({onKeyDown:I,onPointerDown:ie,onMouseDown:ie,onClickCapture:L,onMouseDownCapture(e){L(),R(e)},onPointerDownCapture(e){L(),R(e)},onMouseUpCapture:L,onTouchEndCapture:L,onTouchMoveCapture:L}),[I,L,R,ie]);return U.useMemo(()=>n?{reference:z,floating:H,trigger:z}:{},[n,z,H])}function Hc(e,t,n){let{reference:r,floating:i}=e,a=Es(t),o=Ds(t),s=Ts(o),c=Ss(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Cs(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Uc(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=xs(t,e),p=zs(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Bs(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Bs(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Wc=50,Gc=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Uc},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Hc(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Wc&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Hc(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Kc=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=xs(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Ss(r),_=Es(o),v=Ss(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Ls(o)]:ks(o)),x=p!==`none`;!d&&x&&b.push(...Is(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Os(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Es(t)||T.every(e=>Es(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Es(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},qc=new Set([`left`,`top`]);async function Jc(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Ss(n),s=Cs(n),c=Es(n)===`y`,l=qc.has(o)?-1:1,u=a&&c?-1:1,d=xs(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var Yc=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Jc(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Xc=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=xs(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Es(i),p=ws(f),m=u[p],h=u[f],g=(e,t)=>bs(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Zc=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=xs(e,t),u={x:n,y:r},d=Es(i),f=ws(d),p=u[f],m=u[d],h=xs(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=qc.has(Ss(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},Qc=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=xs(e,t),c=await i.detectOverflow(t,s),l=Ss(n),u=Cs(n),d=Es(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=ms(p-c[m],g),y=ms(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*hs(c.left,c.right):S=p-2*hs(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function $c(e){let t=B(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=u(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=gs(n)!==a||gs(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function el(e){return y(e)?e:e.contextElement}function tl(e){let t=el(e);if(!u(t))return vs(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=$c(t),o=(a?gs(n.width):n.width)/r,s=(a?gs(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var nl=vs(0);function rl(e){let t=g(e);return!f()||!t.visualViewport?nl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function il(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===g(e)}function al(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=el(e),o=vs(1);t&&(r?y(r)&&(o=tl(r)):o=tl(e));let s=il(a,n,r)?rl(a):vs(0),l=(i.left+s.x)/o.x,u=(i.top+s.y)/o.y,d=i.width/o.x,f=i.height/o.y;if(a&&r){let e=g(a),t=y(r)?g(r):r,n=e,i=c(n);for(;i&&t!==n;){let e=tl(i),t=i.getBoundingClientRect(),r=B(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,u*=e.y,d*=e.x,f*=e.y,l+=a,u+=o,n=g(i),i=c(n)}}return Bs({width:d,height:f,x:l,y:u})}function ol(e,t){let n=F(e).scrollLeft;return t?t.left+n:al(l(e)).left+n}function sl(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ol(e,n),y:n.top+t.scrollTop}}function cl(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=l(r),s=t?w(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},d=vs(1),f=vs(0),p=u(r);if((p||!a)&&((v(r)!==`body`||b(o))&&(c=F(r)),p)){let e=al(r);d=tl(r),f.x=e.x+r.clientLeft,f.y=e.y+r.clientTop}let m=o&&!p&&!a?sl(o,c):vs(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-c.scrollLeft*d.x+f.x+m.x,y:n.y*d.y-c.scrollTop*d.y+f.y+m.y}}function ll(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ul(e){let t=F(e),n=e.ownerDocument.body,r=hs(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=hs(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+ol(e),o=-t.scrollTop;return B(n).direction===`rtl`&&(a+=hs(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var dl=25;function fl(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=g(e),a=l(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,u=0,d=0;if(o){let e=!f()||t===`fixed`;r?e||(u=-o.offsetLeft,d=-o.offsetTop):(s=o.width,c=o.height,e&&(u=o.offsetLeft,d=o.offsetTop))}if(ol(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=dl&&(s-=o)}return{width:s,height:c,x:u,y:d}}function pl(e,t){let n=al(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=tl(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ml(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=fl(e,n,t);else if(t===`document`)r=ul(l(e));else if(y(t))r=pl(t,n);else{let n=rl(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Bs(r)}function hl(e,t){let n=t.get(e);if(n)return n;let r=a(e,[],!1).filter(e=>y(e)&&v(e)!==`body`),i=null,o=B(e).position===`fixed`,s=o?P(e):e;for(;y(s)&&!p(s);){let e=B(s),t=_(s),n=i?i.position:o?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==s):i=e,s=P(s)}return t.set(e,r),r}function gl(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?w(t)?[]:hl(t,this._c):[].concat(n),r],o=ml(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ml(t,a[e],i);s=hs(n.top,s),c=ms(n.right,c),l=ms(n.bottom,l),u=hs(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function _l(e){let{width:t,height:n}=$c(e);return{width:t,height:n}}function vl(e,t,n){let r=u(t),i=l(t),a=n===`fixed`,o=al(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=vs(0);if((r||!a)&&((v(t)!==`body`||b(i))&&(s=F(t)),r)){let e=al(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=ol(i));let d=i&&!r&&!a?sl(i,s):vs(0);return{x:o.left+s.scrollLeft-c.x-d.x,y:o.top+s.scrollTop-c.y-d.y,width:o.width,height:o.height}}function yl(e){return B(e).position===`static`}function bl(e,t){if(!u(e)||B(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return l(e)===n&&(n=n.ownerDocument.body),n}function xl(e,t){let n=g(e);if(w(e))return n;if(!u(e)){let t=P(e);for(;t&&!p(t);){if(y(t)&&!yl(t))return t;t=P(t)}return n}let r=bl(e,t);for(;r&&o(r)&&yl(r);)r=bl(r,t);return r&&p(r)&&yl(r)&&!_(r)?n:r||S(e)||n}var Sl=async function(e){let t=this.getOffsetParent||xl,n=this.getDimensions,r=await n(e.floating);return{reference:vl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Cl(e){return B(e).direction===`rtl`}var wl={convertOffsetParentRelativeRectToViewportRelativeRect:cl,getDocumentElement:l,getClippingRect:gl,getOffsetParent:xl,getElementRects:Sl,getClientRects:ll,getDimensions:_l,getScale:tl,isElement:y,isRTL:Cl};function Tl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function El(e,t,n){let r=null,i,a=l(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=_s(d),h=_s(a.clientWidth-(u+f)),g=_s(a.clientHeight-(d+p)),_=_s(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:hs(0,ms(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!Tl(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=g(e),u=()=>s(n);return c.addEventListener(`resize`,u),s(!0),()=>{c.removeEventListener(`resize`,u),o()}}function Dl(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver==`function`,layoutShift:c=typeof IntersectionObserver==`function`,animationFrame:l=!1}=r,u=el(e),d=i||o?[...u?a(u):[],...t?a(t):[]]:[];d.forEach(e=>{i&&e.addEventListener(`scroll`,n),o&&e.addEventListener(`resize`,n)});let f=u&&c?El(u,n,o):null,p=-1,m=null;s&&(m=new ResizeObserver(e=>{let[r]=e;r&&r.target===u&&m&&t&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var e;(e=m)==null||e.observe(t)})),n()}),u&&!l&&m.observe(u),t&&m.observe(t));let h,g=l?al(e):null;l&&_();function _(){let t=al(e);g&&!Tl(g,t)&&n(),g=t,h=requestAnimationFrame(_)}return n(),()=>{var e;d.forEach(e=>{i&&e.removeEventListener(`scroll`,n),o&&e.removeEventListener(`resize`,n)}),f?.(),(e=m)==null||e.disconnect(),m=null,l&&cancelAnimationFrame(h)}}var Ol=Yc,kl=Xc,Al=Kc,jl=Qc,Ml=Zc,Nl=(e,t,n)=>{let r=new Map,i=n??{},a={...wl,...i.platform,_c:r};return Gc(e,t,{...i,platform:a})},Pl=typeof document<`u`?U.useLayoutEffect:function(){};function Fl(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Fl(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!Fl(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Il(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ll(e,t){let n=Il(e);return Math.round(t*n)/n}function Rl(e){let t=U.useRef(e);return Pl(()=>{t.current=e}),t}function zl(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=U.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=U.useState(r);Fl(f,r)||p(r);let[m,h]=U.useState(null),[g,_]=U.useState(null),v=U.useCallback(e=>{e!==S.current&&(S.current=e,h(e))},[]),y=U.useCallback(e=>{e!==C.current&&(C.current=e,_(e))},[]),b=a||m,x=o||g,S=U.useRef(null),C=U.useRef(null),w=U.useRef(u),T=c!=null,E=Rl(c),D=Rl(i),O=Rl(l),k=U.useCallback(()=>{if(!S.current||!C.current)return;let e={placement:t,strategy:n,middleware:f};D.current&&(e.platform=D.current),Nl(S.current,C.current,e).then(e=>{let t={...e,isPositioned:O.current!==!1};A.current&&!Fl(w.current,t)&&(w.current=t,oe.flushSync(()=>{d(t)}))})},[f,t,n,D,O]);Pl(()=>{l===!1&&w.current.isPositioned&&(w.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let A=U.useRef(!1);Pl(()=>(A.current=!0,()=>{A.current=!1}),[]),Pl(()=>{if(b&&(S.current=b),x&&(C.current=x),b&&x){if(E.current)return E.current(b,x,k);k()}},[b,x,k,E,T]);let j=U.useMemo(()=>({reference:S,floating:C,setReference:v,setFloating:y}),[v,y]),M=U.useMemo(()=>({reference:b,floating:x}),[b,x]),N=U.useMemo(()=>{let e={position:n,left:0,top:0};if(!M.floating)return e;let t=Ll(M.floating,u.x),r=Ll(M.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...Il(M.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,M.floating,u.x,u.y]);return U.useMemo(()=>({...u,update:k,refs:j,elements:M,floatingStyles:N}),[u,k,j,M,N])}var Bl=(e,t)=>{let n=Ol(e);return{name:n.name,fn:n.fn,options:[e,t]}},Vl=(e,t)=>{let n=kl(e);return{name:n.name,fn:n.fn,options:[e,t]}},Hl=(e,t)=>({fn:Ml(e).fn,options:[e,t]}),Ul=(e,t)=>{let n=Al(e);return{name:n.name,fn:n.fn,options:[e,t]}},Wl=(e,t)=>{let n=jl(e);return{name:n.name,fn:n.fn,options:[e,t]}},Gl=n((t=>{var n=e();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=n.useState,o=n.useEffect,s=n.useLayoutEffect,c=n.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=typeof window>`u`||window.document===void 0||window.document.createElement===void 0?d:l;t.useSyncExternalStore=n.useSyncExternalStore===void 0?f:n.useSyncExternalStore})),Kl=n(((e,t)=>{t.exports=Gl()})),ql=n((t=>{var n=e(),r=Kl();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=r.useSyncExternalStore,s=n.useRef,c=n.useEffect,l=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),Jl=n(((e,t)=>{t.exports=ql()})),Yl=Kl(),Xl=Jl(),Zl=[],Ql=void 0;function $l(){return Ql}function eu(e){Zl.push(e)}var tu=ie(19)?iu:au;function nu(e,t,n,r,i){return tu(e,t,n,r,i)}function ru(e,t,n,r,i){let a=U.useCallback(()=>t(e.getSnapshot(),n,r,i),[e,t,n,r,i]);return(0,Yl.useSyncExternalStore)(e.subscribe,a,a)}eu({before(e){e.syncIndex=0,e.didInitialize||(e.syncTick=1,e.syncHooks=[],e.didChangeStore=!0,e.getSnapshot=()=>{let t=!1;for(let n=0;n<e.syncHooks.length;n+=1){let r=e.syncHooks[n],i=r.selector(r.store.state,r.a1,r.a2,r.a3);Object.is(r.value,i)||(t=!0,r.value=i)}return t&&(e.syncTick+=1),e.syncTick})},after(e){e.syncHooks.length>0&&(e.didChangeStore&&(e.didChangeStore=!1,e.subscribe=t=>{let n=new Set;for(let t of e.syncHooks)n.add(t.store);let r=[];for(let e of n)r.push(e.subscribe(t));return()=>{for(let e of r)e()}}),(0,Yl.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot))}});function iu(e,t,n,r,i){let a=$l();if(!a)return ru(e,t,n,r,i);let o=a.syncIndex;a.syncIndex+=1;let s;return a.didInitialize?(s=a.syncHooks[o],(s.store!==e||s.selector!==t||!Object.is(s.a1,n)||!Object.is(s.a2,r)||!Object.is(s.a3,i))&&(s.store!==e&&(a.didChangeStore=!0),s.store=e,s.selector=t,s.a1=n,s.a2=r,s.a3=i,s.value=t(e.getSnapshot(),n,r,i))):(s={store:e,selector:t,a1:n,a2:r,a3:i,value:t(e.getSnapshot(),n,r,i)},a.syncHooks.push(s)),s.value}function au(e,t,n,r,i){return(0,Xl.useSyncExternalStoreWithSelector)(e.subscribe,e.getSnapshot,e.getSnapshot,e=>t(e,n,r,i))}var ou=class{static create(e){return new this(e)}constructor(e){this.state=e,this.listeners=new Set,this.updateTick=0}subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});getSnapshot=()=>this.state;setState(e){if(this.state===e)return;this.state=e,this.updateTick+=1;let t=this.updateTick;for(let n of this.listeners){if(t!==this.updateTick)return;n(e)}}update(e){for(let t in e)if(!Object.is(this.state[t],e[t])){this.setState({...this.state,...e});return}}set(e,t){Object.is(this.state[e],t)||this.setState({...this.state,[e]:t})}notifyAll(){let e={...this.state};this.setState(e)}use(e,t,n,r){return nu(this,e,t,n,r)}},su=class extends ou{constructor(e,t={},n){super(e),this.context=t,this.selectors=n}useSyncedValue(e,t){U.useDebugValue(e);let n=this;O(()=>{n.state[e]!==t&&n.set(e,t)},[n,e,t])}useSyncedValueWithCleanup(e,t){let n=this;O(()=>(n.state[e]!==t&&n.set(e,t),()=>{n.set(e,void 0)}),[n,e,t])}useSyncedValues(e){let t=this,n=Object.values(e);O(()=>{t.update(e)},[t,...n])}useControlledProp(e,t){U.useDebugValue(e);let n=this,r=t!==void 0;O(()=>{r&&!Object.is(n.state[e],t)&&n.setState({...n.state,[e]:t})},[n,e,t,r])}select(e,t,n,r){let i=this.selectors[e];return i(this.state,t,n,r)}useState(e,t,n,r){return U.useDebugValue(e),nu(this,this.selectors[e],t,n,r)}useContextCallback(e,t){U.useDebugValue(e);let n=V(t??H);this.context[e]=n}useStateSetter(e){let t=U.useRef(void 0);return t.current===void 0&&(t.current=t=>{this.set(e,t)}),t.current}observe(e,t){let n;n=typeof e==`function`?e:this.selectors[e];let r=n(this.state);return t(r,r,this),this.subscribe(e=>{let i=n(e);if(!Object.is(r,i)){let e=r;r=i,t(i,e,this)}})}},cu={open:e=>e.open,transitionStatus:e=>e.transitionStatus,domReferenceElement:e=>e.domReferenceElement,referenceElement:e=>e.positionReference??e.referenceElement,floatingElement:e=>e.floatingElement,floatingId:e=>e.floatingId},lu=class extends su{constructor(e){let{syncOnly:t,nested:n,onOpenChange:r,triggerElements:i,...a}=e;super({...a,positionReference:a.referenceElement,domReferenceElement:a.referenceElement},{onOpenChange:r,dataRef:{current:{}},events:Ac(),nested:n,triggerElements:i},cu),this.syncOnly=t}syncOpenEvent=(e,t)=>{(!e||!this.state.open||t!=null&&Po(t))&&(this.context.dataRef.current.openEvent=e?t:void 0)};dispatchOpenChange=(e,t)=>{this.syncOpenEvent(e,t.event);let n={open:e,reason:t.reason,nativeEvent:t.event,nested:this.context.nested,triggerElement:t.trigger};this.context.events.emit(`openchange`,n)};setOpen=(e,t)=>{if(this.syncOnly){this.context.onOpenChange?.(e,t);return}this.dispatchOpenChange(e,t),this.context.onOpenChange?.(e,t)}},uu=class{constructor(){this.idMap=new Map}add(e,t){this.idMap.set(e,t)}delete(e){this.idMap.delete(e)}hasElement(e){for(let t of this.idMap.values())if(t===e)return!0;return!1}hasMatchingElement(e){for(let t of this.idMap.values())if(e(t))return!0;return!1}getById(e){return this.idMap.get(e)}entries(){return this.idMap.entries()}elements(){return this.idMap.values()}get size(){return this.idMap.size}};function du(e){let{open:t=!1,onOpenChange:n,elements:r={}}=e,i=bc(),a=Pc()!=null,o=x(()=>new lu({open:t,transitionStatus:void 0,onOpenChange:n,referenceElement:r.reference??null,floatingElement:r.floating??null,triggerElements:new uu,floatingId:i,syncOnly:!1,nested:a})).current;return O(()=>{let e={open:t,floatingId:i};r.reference!==void 0&&(e.referenceElement=r.reference,e.domReferenceElement=y(r.reference)?r.reference:null),r.floating!==void 0&&(e.floatingElement=r.floating),o.update(e)},[t,i,r.reference,r.floating,o]),o.context.onOpenChange=n,o.context.nested=a,o}function fu(e={}){let t=du(e);return pu(e,e.rootContext||t)}function pu(e,t){let{nodeId:n,externalTree:r}=e,i=t.useState(`referenceElement`),a=t.useState(`floatingElement`),o=t.useState(`domReferenceElement`),s=t.useState(`open`),c=t.useState(`floatingId`),[l,u]=U.useState(null),[d,f]=U.useState(void 0),[p,m]=U.useState(void 0),h=U.useRef(null),g=Fc(r),_=U.useMemo(()=>({reference:i,floating:a,domReference:o}),[i,a,o]),v=zl({...e,elements:{..._,...l&&{reference:l}}}),b=y(d)?d:null,x=p===void 0?t.state.floatingElement:p;t.useSyncedValue(`referenceElement`,d??null),t.useSyncedValue(`domReferenceElement`,d===void 0?o:b),t.useSyncedValue(`floatingElement`,x);let S=U.useCallback(e=>{let t=y(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),getClientRects:()=>e.getClientRects(),contextElement:e}:e;u(t),v.refs.setReference(t)},[v.refs]),C=U.useCallback(e=>{(y(e)||e===null)&&(h.current=e,f(e)),(y(v.refs.reference.current)||v.refs.reference.current===null||e!==null&&!y(e))&&v.refs.setReference(e)},[v.refs,f]),w=U.useCallback(e=>{m(e),v.refs.setFloating(e)},[v.refs]),T=U.useMemo(()=>({...v.refs,setReference:C,setFloating:w,setPositionReference:S,domReference:h}),[v.refs,C,w,S]),E=U.useMemo(()=>({...v.elements,domReference:o}),[v.elements,o]),D=U.useMemo(()=>({...v,dataRef:t.context.dataRef,open:s,onOpenChange:t.setOpen,events:t.context.events,floatingId:c,refs:T,elements:E,nodeId:n,rootStore:t}),[v,T,E,n,t,s,c]);return O(()=>{o&&(h.current=o)},[o]),O(()=>{t.context.dataRef.current.floatingContext=D;let e=g?.nodesRef.current.find(e=>e.id===n);e&&(e.context=D)}),U.useMemo(()=>({...v,context:D,refs:T,elements:E,rootStore:t}),[v,T,E,D,t])}var mu=class e{constructor(){this.pointerType=void 0,this.interactedInside=!1,this.handler=void 0,this.blockMouseMove=!0,this.performedPointerEventsMutation=!1,this.pointerEventsScopeElement=null,this.pointerEventsReferenceElement=null,this.pointerEventsFloatingElement=null,this.restTimeoutPending=!1,this.openChangeTimeout=new ee,this.restTimeout=new ee,this.handleCloseOptions=void 0}static create(){return new e}dispose=()=>{this.openChangeTimeout.clear(),this.restTimeout.clear()};disposeEffect=()=>this.dispose},hu=new WeakMap;function gu(e){if(!e.performedPointerEventsMutation)return;let t=e.pointerEventsScopeElement;t&&hu.get(t)===e&&(e.pointerEventsScopeElement?.style.removeProperty(`pointer-events`),e.pointerEventsReferenceElement?.style.removeProperty(`pointer-events`),e.pointerEventsFloatingElement?.style.removeProperty(`pointer-events`),hu.delete(t)),e.performedPointerEventsMutation=!1,e.pointerEventsScopeElement=null,e.pointerEventsReferenceElement=null,e.pointerEventsFloatingElement=null}function _u(e,t){let{scopeElement:n,referenceElement:r,floatingElement:i}=t,a=hu.get(n);a&&a!==e&&gu(a),gu(e),e.performedPointerEventsMutation=!0,e.pointerEventsScopeElement=n,e.pointerEventsReferenceElement=r,e.pointerEventsFloatingElement=i,hu.set(n,e),n.style.pointerEvents=`none`,r.style.pointerEvents=`auto`,i.style.pointerEvents=`auto`}function vu(e){let t=e.context.dataRef.current,n=x(()=>t.hoverInteractionState??mu.create()).current;return t.hoverInteractionState||=n,j(t.hoverInteractionState.disposeEffect),t.hoverInteractionState}function yu(e,t={}){let{enabled:n=!0,closeDelay:r=0,nodeId:i}=t,a=`rootStore`in e?e.rootStore:e,o=a.useState(`open`),s=a.useState(`floatingElement`),c=a.useState(`domReferenceElement`),{dataRef:l}=a.context,u=Fc(),d=Pc(),f=vu(a),p=M(),m=V(()=>$o(l.current.openEvent?.type,f.interactedInside)),h=V(()=>es(l.current.openEvent?.type)),g=V(()=>{gu(f)});O(()=>{o||(f.pointerType=void 0,f.restTimeoutPending=!1,f.interactedInside=!1,g())},[o,f,g]),U.useEffect(()=>g,[g]),O(()=>{if(n&&o&&f.handleCloseOptions?.blockPointerEvents&&h()&&y(c)&&s){let e=c,t=s,n=_o(s),r=u?.nodesRef.current.find(e=>e.id===d)?.context?.elements.floating;r&&(r.style.pointerEvents=``);let i=f.pointerEventsScopeElement===t?null:f.pointerEventsScopeElement,a=r===t?null:r,o=f.handleCloseOptions?.getScope?.()??i??a??e.closest(`[data-rootownerid]`)??n.body;return _u(f,{scopeElement:o,referenceElement:e,floatingElement:t}),()=>{g()}}},[n,o,c,s,f,h,u,d,g]),U.useEffect(()=>{if(!n)return;function e(){return!!(u&&d&&hc(u.nodesRef.current,d).length>0)}function t(e){let t=Qo(r,`close`,f.pointerType),n=()=>{a.setOpen(!1,ss(ns,e)),u?.events.emit(`floating.closed`,e)};t?f.openChangeTimeout.start(t,n):(f.openChangeTimeout.clear(),n())}function o(e){let t=Io(e);if(!Xo(t)){f.interactedInside=!1;return}f.interactedInside=t?.closest(`[aria-haspopup]`)!=null}function c(){f.openChangeTimeout.clear(),p.clear(),u?.events.off(`floating.closed`,v),g()}function _(n){if(e()&&u){u.events.on(`floating.closed`,v);return}if(qo(n.relatedTarget,a.context.triggerElements))return;let r=l.current.floatingContext?.nodeId??i,o=n.relatedTarget;if(!(u&&r&&y(o)&&hc(u.nodesRef.current,r,!1).some(e=>Q(e.context?.elements.floating,o)))){if(f.handler){f.handler(n);return}g(),h()&&!m()&&t(n)}}function v(t){u&&d&&!e()&&p.start(0,()=>{u.events.off(`floating.closed`,v),a.setOpen(!1,ss(ns,t)),u.events.emit(`floating.closed`,t)})}let b=s;return cs(b&&$(b,`mouseenter`,c),b&&$(b,`mouseleave`,_),b&&$(b,`pointerdown`,o,!0),()=>{u?.events.off(`floating.closed`,v)})},[n,s,a,l,r,i,h,m,g,f,u,d,p])}var bu=U.createContext(void 0);function xu(e){let t=U.useContext(bu);if(t===void 0&&!e)throw Error(k(41));return t}var Su=U.createContext(void 0);function Cu(){return U.useContext(Su)}var wu=`--positioner-width`,Tu=`--positioner-height`,Eu=`--popup-width`,Du=`--popup-height`;function Ou(e,t,n,r){e.style.setProperty(Eu,`${n}px`),e.style.setProperty(Du,`${r}px`),t.style.setProperty(wu,`${n}px`),t.style.setProperty(Tu,`${r}px`)}var ku=new Set([ns,rs,as]);function Au(e){let t=parseFloat(e.style.getPropertyValue(`--positioner-width`))||0,n=parseFloat(e.style.getPropertyValue(`--positioner-height`))||0;return t<=0||n<=0?null:{width:t,height:n}}var ju=U.forwardRef(function(e,t){let{defaultValue:n=null,value:r,onValueChange:i,actionsRef:a,delay:o=50,closeDelay:s=50,orientation:c=`horizontal`,onOpenChangeComplete:l}=e,d=Pc()!=null,f=xu(!0),[p,m]=go({controlled:r,default:n,name:`NavigationMenu`,state:`value`}),h=p!=null,g=U.useRef(void 0),_=U.useRef(null),[v,y]=U.useState(null),[b,x]=U.useState(null),[S,C]=U.useState(null),[w,T]=U.useState(null),[E,k]=U.useState(null),[A,j]=U.useState(void 0),[M,N]=U.useState(!1),P=U.useRef(null),F=U.useRef(null),ee=U.useRef(null),te=U.useRef(null),re=U.useRef(null),I=U.useRef(null),L=U.useRef({abortController:null,owner:null}),{mounted:R,setMounted:ie,transitionStatus:z}=ne(h);O(()=>{if(h||!v||!b)return;let e=Au(v);e&&Ou(b,v,e.width,e.height)},[h,b,v]),U.useEffect(()=>{N(!1)},[p]);let B=V((e,t)=>{e??(g.current=t.reason),e!==p&&i?.(e,t),!t.isCanceled&&(e??(k(null),j(void 0)),m(e),d&&e==null&&t.reason===`link-press`&&f&&f.setValue(null,t))}),H=V(()=>{let e=Fo(_o(_.current));!(g.current&&ku.has(g.current))&&u(P.current)&&(e===_o(b).body||Q(b,e))&&b&&(P.current.focus({preventScroll:!0}),P.current=void 0),ie(!1),l?.(!1),k(null),j(void 0),F.current=null,g.current=void 0});U.useImperativeHandle(a,()=>({unmount:H}),[H]),D({enabled:!a,open:h,ref:{current:b},onComplete(){h||H()}}),D({enabled:!a,open:h,ref:{current:w},onComplete(){h||H()}});let ae=h?E:null,oe=U.useMemo(()=>({open:h,value:p,setValue:B,mounted:R,transitionStatus:z,positionerElement:v,setPositionerElement:y,popupElement:b,setPopupElement:x,viewportElement:S,setViewportElement:C,viewportTargetElement:w,setViewportTargetElement:T,activationDirection:ae,setActivationDirection:k,floatingRootContext:A,setFloatingRootContext:j,currentContentRef:F,nested:d,rootRef:_,beforeInsideRef:ee,afterInsideRef:te,beforeOutsideRef:re,afterOutsideRef:I,prevTriggerElementRef:P,popupAutoSizeResetRef:L,delay:o,closeDelay:s,orientation:c,viewportInert:M,setViewportInert:N}),[h,p,B,R,z,v,b,S,w,ae,A,d,o,s,c,M]),se=(0,W.jsx)(bu.Provider,{value:oe,children:(0,W.jsx)(Mu,{componentProps:e,forwardedRef:t,children:e.children})});return d?se:(0,W.jsx)(Rc,{children:se})});function Mu(e){let{className:t,render:n,defaultValue:r,value:i,onValueChange:a,actionsRef:o,delay:s,closeDelay:c,orientation:l,onOpenChangeComplete:u,style:d,...f}=e.componentProps,p=Ic(),{rootRef:m,nested:h,open:g}=xu(),_={open:g,nested:h},v=L(h?`div`:`nav`,e.componentProps,{state:_,ref:[e.forwardedRef,m],props:f});return(0,W.jsx)(Su.Provider,{value:p,children:(0,W.jsx)(Lc,{id:p,children:v})})}var Nu=U.createContext({register:()=>{},unregister:()=>{},subscribeMapChange:()=>()=>{},nextIndexRef:{current:0}});function Pu(){return U.useContext(Nu)}function Fu(e){let{children:t,elementsRef:n,labelsRef:r,onMapChange:i}=e,a=V(i),[,o]=U.useState(!1),s=x(Lu).current,c=x(Iu).current,l=U.useRef(0),u=U.useRef(!0),d=U.useRef(null),f=U.useRef(null),p=V(()=>{u.current||(u.current=!0,o(e=>!e))}),m=V((e,t)=>{c.set(e,t),p()}),h=V(e=>{c.delete(e),p()}),g=V(e=>{let t=new Map;return n.current.length=0,r&&(r.current.length=0),e.forEach(e=>{t.set(e.element,{...e.registration.metadata??{},index:e.index}),n.current[e.index]=e.element,r&&(r.current[e.index]=e.registration.label===void 0?e.registration.textRef?.current?.textContent??e.element.textContent:e.registration.label)}),l.current=n.current.length,t});function _(e){if(f.current?.disconnect(),f.current=null,typeof MutationObserver!=`function`||e.length<2)return;let t=new MutationObserver(n=>{if(!Bu(n))return;let r=null;for(let n of e)if(n.isConnected){if(r&&Vu(r,n)>0){t.disconnect(),p();return}r=n}});f.current=t;let n=new Set;for(let t=1;t<e.length;t+=1){let r=zu(e[t-1],e[t]);r&&n.add(r)}n.forEach(e=>t.observe(e,{childList:!0}))}let v=V(()=>{let[e,t]=Ru(c),n=g(e),r=d.current,i=!r||r.length!==e.length||e.some((e,t)=>{let n=r[t];return e.index!==n.index||e.element!==n.element||e.registration.index!==n.registration.index||e.registration.metadata!==n.registration.metadata});_(t),d.current=e,u.current=!1,i&&(s.forEach(e=>e(n)),a(n))});O(()=>(!u.current&&d.current&&g(d.current),()=>{n.current=[],r&&(r.current=[])}),[n,r,g]),O(()=>{u.current&&v()}),O(()=>()=>{f.current?.disconnect(),u.current=!0},[]);let y=V(e=>(s.add(e),()=>{s.delete(e)})),b=U.useMemo(()=>({register:m,unregister:h,subscribeMapChange:y,nextIndexRef:l}),[m,h,y,l]);return(0,W.jsx)(Nu.Provider,{value:b,children:t})}function Iu(){return new Map}function Lu(){return new Set}function Ru(e){let t=new Set,n=[],r=[];e.forEach((e,i)=>{if(!i.isConnected)return;let a=e.index,o={index:a??-1,element:i,registration:e};a===null?r.push(o):a>=0&&(t.add(a),n.push(o))});let i=0;return r.sort((e,t)=>Vu(e.element,t.element)),r.forEach(e=>{for(;t.has(i);)i+=1;e.index=i,n.push(e),i+=1}),t.size>0&&n.sort((e,t)=>e.index-t.index),[n,r.map(e=>e.element)]}function zu(e,t){let n=e.parentElement;for(;n&&!n.contains(t);)n=n.parentElement;return n}function Bu(e){for(let t of e)for(let e=0;e<t.removedNodes.length;e+=1)if(t.removedNodes[e].isConnected)return!0;return!1}function Vu(e,t){return e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}function Hu(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}var Uu=`ArrowUp`,Wu=`ArrowDown`,Gu=`ArrowLeft`,Ku=`ArrowRight`,qu=new Set([Uu,Wu,Gu,Ku,`Home`,`End`]),Ju=[`Shift`,`Control`,`Alt`,`Meta`];function Yu(e){return u(e)&&e.tagName===`INPUT`}function Xu(e){return!!(Yu(e)&&e.selectionStart!=null||u(e)&&e.tagName===`TEXTAREA`)}function Zu(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=Qu(e,t,`left`),a=$u(e),o=$u(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=Qu(e,t,`top`),r=$u(e),i=$u(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function Qu(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function $u(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}function ed(e){let{loopFocus:t=!0,orientation:n=`both`,grid:r,onLoop:i,direction:a,highlightedIndex:o,onHighlightedIndexChange:s,rootRef:c,enableHomeAndEndKeys:l=!1,stopEventPropagation:u,disabledIndices:d,modifierKeys:f=E}=e,[p,m]=U.useState(0),h=r!=null,g=U.useRef(null),_=A(g,c),v=U.useRef([]),y=U.useRef(!1),b=U.useRef(null),x=o??p,S=V((e,t=!1)=>{if(b.current=v.current[e]??null,(s??m)(e),t){let t=v.current[e];Zu(g.current,t,a,n)}}),C=V(e=>{if(e.size===0)return;if(y.current){let e=v.current,t=e.indexOf(b.current);if(t===-1){let t=e[x];!t||Gs(e,x,d)?S(td(e,d)):b.current=t}else t!==x&&S(t);return}y.current=!0;let t=Array.from(e.keys()),r=t.find(e=>e?.hasAttribute(`data-composite-item-active`))??null,i=r?e.get(r)?.index??-1:-1;if(i!==-1)S(i);else if(Gs(t,x,d)){let e=Ws(t,{disabledIndices:d});Vs(t,e)||S(e)}Zu(g.current,r,a,n)});O(()=>{if(d==null||o!=null||!y.current)return;let e=v.current;if(Gs(e,x,d)){let t=Ws(e,{disabledIndices:d});Vs(e,t)||S(t)}},[d,o,x,v,S]);let w=V((e,t,n)=>i?i(e,t,n,v):n),T=V(e=>{let o=e.key===`Home`||e.key===`End`;if(!qu.has(e.key)||!l&&o||nd(e,f)||!g.current)return;let s=a===`rtl`,c=s?Gu:Ku,p=s?Ku:Gu,m=n===`vertical`?Wu:c,_=n===`vertical`?Uu:p,y=Io(e.nativeEvent);if(y!=null&&Xu(y)&&!Hu(y)){let t=y.selectionStart,n=y.selectionEnd,r=y.value;if(t==null||e.shiftKey||t!==n||e.key!==_&&t<r.length||e.key!==m&&t>0)return}let b=x,C=Hs(v,d),T=Us(v,d);r!=null&&(b=r({disabledIndices:d,elementsRef:v,event:e,highlightedIndex:x,loopFocus:t,maxIndex:T,minIndex:C,onLoop:w,orientation:n,rtl:s}));let E=n!==`vertical`&&e.key===c||n!==`horizontal`&&e.key===`ArrowDown`,D=n!==`vertical`&&e.key===p||n!==`horizontal`&&e.key===`ArrowUp`;l&&(e.key===`Home`?b=C:e.key===`End`&&(b=T)),b===x&&(E||D)&&(t&&b===T&&E?(b=C,i&&(b=i(e,x,b,v))):t&&b===C&&D?(b=T,i&&(b=i(e,x,b,v))):b=Ws(v.current,{startingIndex:b,decrement:D,disabledIndices:d})),b!==x&&!Vs(v.current,b)&&(u&&e.stopPropagation(),(h||o||E||D)&&e.preventDefault(),S(b,!0),queueMicrotask(()=>{v.current[b]?.focus()}))});return{props:{ref:_,onFocus(e){let t=g.current,n=Io(e.nativeEvent);t&&n!=null&&Xu(n)&&n.setSelectionRange(0,n.value.length)},onKeyDown:T},highlightedIndex:x,onHighlightedIndexChange:S,elementsRef:v,onMapChange:C,relayKeyboardEvent:T}}function td(e,t){let n=-1;for(let r=0;r<e.length;r+=1){let i=e[r];if(i&&!Gs(e,r,t)){if(i.hasAttribute(`data-composite-item-active`))return r;n===-1&&(n=r)}}return Math.max(n,0)}function nd(e,t){for(let n of Ju)if(!t.includes(n)&&e.getModifierState(n))return!0;return!1}var rd=U.createContext(void 0);function id(){return U.useContext(rd)?.direction??`ltr`}function ad(e){let{render:t,className:n,style:r,refs:i=E,props:a=E,state:o=z,stateAttributesMapping:s,highlightedIndex:c,onHighlightedIndexChange:l,orientation:u,grid:d,loopFocus:f,onLoop:p,enableHomeAndEndKeys:m,onMapChange:h,stopEventPropagation:g=!0,rootRef:_,disabledIndices:v,modifierKeys:y,highlightItemOnHover:b=!1,tag:x=`div`,...S}=e,{props:C,highlightedIndex:w,onHighlightedIndexChange:T,elementsRef:D,onMapChange:O,relayKeyboardEvent:k}=ed({grid:d,loopFocus:f,onLoop:p,orientation:u,highlightedIndex:c,onHighlightedIndexChange:l,rootRef:_,stopEventPropagation:g,enableHomeAndEndKeys:m,direction:id(),disabledIndices:v,modifierKeys:y}),A=L(x,e,{state:o,ref:i,props:[C,...a,S],stateAttributesMapping:s}),j=U.useMemo(()=>({highlightedIndex:w,onHighlightedIndexChange:T,highlightItemOnHover:b,relayKeyboardEvent:k}),[w,T,b,k]);return(0,W.jsx)(I.Provider,{value:j,children:(0,W.jsx)(Fu,{elementsRef:D,onMapChange:e=>{h?.(e),O(e)},children:A})})}var od=`data-base-ui-navigation-menu-trigger`,sd=U.createContext(void 0);function cd(){return new lu({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:new uu,floatingId:void 0,syncOnly:!1,nested:!1,onOpenChange:void 0})}var ld=U.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=Cu(),{orientation:s,open:c,floatingRootContext:l,positionerElement:u,value:d,closeDelay:f,viewportElement:p,nested:m}=xu(),h=U.useMemo(()=>cd(),[]),g=l||h,_=u!=null||d==null;yu(g,{enabled:!!l&&(u!=null||p!=null||d==null),closeDelay:f,nodeId:o});let v=Vc(g,{enabled:_,outsidePressEvent:`intentional`,outsidePress(e){return Io(e)?.closest(`[${od}]`)===null}}),y=l?v:void 0,b={open:c},x=m?z:{onKeyDown(e){(s===`horizontal`&&(e.key===`ArrowLeft`||e.key===`ArrowRight`)||s===`vertical`&&(e.key===`ArrowUp`||e.key===`ArrowDown`))&&e.stopPropagation()}},S=[y?.floating||z,x,a],C=L(`ul`,e,{state:b,ref:t,props:S,enabled:m});return m?(0,W.jsx)(sd.Provider,{value:y,children:C}):(0,W.jsx)(sd.Provider,{value:y,children:(0,W.jsx)(ad,{render:n,className:r,style:i,state:b,refs:[t],props:S,loopFocus:!1,orientation:s,tag:`ul`})})}),ud=U.createContext(void 0);function dd(e){return bc(e,`base-ui`)}var fd=U.forwardRef(function(e,t){let{render:n,className:r,style:i,value:a,...o}=e,s=dd(),c=a??s,l=L(`li`,e,{ref:t,props:o}),u=U.useMemo(()=>({value:c}),[c]);return(0,W.jsx)(ud.Provider,{value:u,children:l})});function pd(e){return ie(19)?e:e?`true`:void 0}function md({currentTarget:e,relatedTarget:t},n){let{popupElement:r,rootRef:i,tree:a,nodeId:o}=n,s=a?hc(a.nodesRef.current,o).some(e=>Q(e.context?.elements.floating,t)):!1;return r?!Q(r,e)&&!Q(r,t)&&!Q(i.current,t)&&!s:!Q(i.current,t)&&!s}function hd(e={}){let{guess:t,label:n,metadata:r,textRef:i,index:a}=e,{register:o,unregister:s,subscribeMapChange:c,nextIndexRef:l}=Pu(),u=U.useRef(-1),[d,f]=U.useState(a==null&&t?()=>{if(u.current===-1){let e=l.current;l.current+=1,u.current=e}return u.current}:-1),p=a??d,m=U.useRef(null),h=U.useCallback(e=>{let t=m.current;t&&s(t),m.current=e,e&&o(e,{metadata:r??null,index:a??null,label:n,textRef:i})},[a,o,s,r,n,i]);return O(()=>{if(a==null)return c(e=>{let t=m.current?e.get(m.current)?.index:null;t!=null&&f(t)})},[a,c]),{ref:h,index:p}}function gd(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=N(),{ref:i,index:a}=hd(e),o=n===a,s=U.useRef(null),c=A(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}function _d(e){let{render:t,className:n,style:r,state:i=z,props:a=E,refs:o=E,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=gd({metadata:s});return L(l,e,{state:i,ref:[f,...o],props:[d,...a,u],stateAttributesMapping:c})}var vd=U.createContext(void 0);function yd(){let e=U.useContext(vd);if(e===void 0)throw Error(k(40));return e}var bd=U.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,{mounted:i}=xu();return i||n?(0,W.jsx)(vd.Provider,{value:n,children:(0,W.jsx)(kc,{ref:t,...r})}):null}),xd=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0,offsetParent:d=`real`}=xs(e,t)||{};if(l==null)return{};let f=zs(u),p={x:n,y:r},m=Ds(i),h=Ts(m),g=await o.getDimensions(l),_=m===`y`,v=_?`top`:`left`,y=_?`bottom`:`right`,b=_?`clientHeight`:`clientWidth`,x=a.reference[h]+a.reference[m]-p[m]-a.floating[h],S=p[m]-a.reference[m],C=d===`real`?await o.getOffsetParent?.(l):s.floating,w=s.floating[b]||a.floating[h];(!w||!await o.isElement?.(C))&&(w=s.floating[b]||a.floating[h]);let T=x/2-S/2,E=w/2-g[h]/2-1,D=Math.min(f[v],E),O=Math.min(f[y],E),k=D,A=w-g[h]-O,j=w/2-g[h]/2+T,M=bs(k,j,A),N=!c.arrow&&Cs(i)!=null&&j!==M&&a.reference[h]/2-(j<k?D:O)-g[h]/2<0,P=N?j<k?j-k:j-A:0;return{[m]:p[m]+P,data:{[m]:M,centerOffset:j-M-P,...N&&{alignmentOffset:P}},reset:N}}}),Sd=(e,t)=>{let{name:n,fn:r}=xd(e);return{name:n,fn:r,options:[e,t]}},Cd={name:`hide`,async fn(e){let{width:t,height:n,x:r,y:i}=e.rects.reference,a=t===0&&n===0&&r===0&&i===0,o=await e.platform.detectOverflow(e,{elementContext:`reference`});return{data:{referenceHidden:o.top-n>=0||o.right-t>=0||o.bottom-n>=0||o.left-t>=0||a}}}},wd={sideX:`left`,sideY:`top`},Td=`--available-width`,Ed=`--available-height`,Dd=`--anchor-width`,Od=`--anchor-height`,kd=`--transform-origin`,Ad=Td,jd=Ed;function Md(e,t,n){let r=e===`inline-start`||e===`inline-end`;return{top:`top`,right:r?n?`inline-start`:`inline-end`:`right`,bottom:`bottom`,left:r?n?`inline-end`:`inline-start`:`left`}[t]}function Nd(e,t,n){let{rects:r,placement:i}=e;return{side:Md(t,Ss(i),n),align:Cs(i)||`center`,anchor:{width:r.reference.width,height:r.reference.height},positioner:{width:r.floating.width,height:r.floating.height}}}function Pd(e,t){let{anchor:n,positionMethod:r=`absolute`,side:i=`bottom`,sideOffset:a=0,align:o=`center`,alignOffset:s=0,collisionBoundary:c,collisionPadding:l=5,sticky:u=!1,arrowPadding:d=5,disableAnchorTracking:f=!1,inline:p,keepMounted:m=!1,floatingRootContext:h,mounted:_,collisionAvoidance:v,shift:y,nodeId:b,adaptiveOrigin:x,lazyFlip:S=!1,externalTree:C}=e,[w,T]=U.useState(null);!_&&w!==null&&T(null);let E=v.side||`flip`,D=v.align||`flip`,k=v.fallbackAxisSide||`end`,A=y?.crossAxis??!1,j=y?.rootBoundary,M=typeof n==`function`?n:void 0,N=V(M),P=M?N:n,F=ls(n),ee=ls(_),te=id()===`rtl`,ne=w||{top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inline-end":te?`left`:`right`,"inline-start":te?`right`:`left`}[i],re=o===`center`?ne:`${ne}-${o}`,I=l;typeof I==`number`?I={top:I,right:I,bottom:I,left:I}:I&&={top:I.top||0,right:I.right||0,bottom:I.bottom||0,left:I.left||0};let L=+(i===`bottom`),R=+(i===`top`),ie=+(i===`right`),z=+(i===`left`),B={boundary:c===`clipping-ancestors`?`clippingAncestors`:c,padding:I},H=U.useRef(null),ae=ls(a),oe=ls(s),W=typeof a==`function`?0:a,se=typeof s==`function`?0:s,ce=[];p&&ce.push(p),ce.push(Bl(e=>{let t=Nd(e,i,te),n=typeof ae.current==`function`?ae.current(t):ae.current,r=typeof oe.current==`function`?oe.current(t):oe.current;return{mainAxis:n,crossAxis:r,alignmentAxis:r}},[W,se,te,i]));let le=D===`none`&&E!==`shift`,ue=!le&&(u||A||E===`shift`),de=E===`none`?null:Ul({...B,padding:{top:I.top+1+L,right:I.right+1+z,bottom:I.bottom+1+R,left:I.left+1+ie},mainAxis:!A&&E===`flip`,crossAxis:D===`flip`&&`alignment`,fallbackAxisSideDirection:k}),fe=le?null:Vl({...B,rootBoundary:j,mainAxis:D!==`none`,crossAxis:ue,limiter:u||A?void 0:Hl(e=>{if(!H.current)return{};let{width:t,height:n}=H.current.getBoundingClientRect(),r=Es(Ss(e.placement)),i=r===`y`?t:n,a=r===`y`?I.left+I.right:I.top+I.bottom;return{offset:i/2+a/2}})},[B,u,A,j,I,D]);E===`shift`||D===`shift`||o===`center`?ce.push(fe,de):ce.push(de,fe),ce.push(Wl({...B,apply({elements:{floating:e},availableWidth:t,availableHeight:n,rects:r}){if(!ee.current)return;let i=e.style;i.setProperty(Ad,`${t}px`),i.setProperty(jd,`${n}px`);let a=g(e).devicePixelRatio||1,{x:o,y:s,width:c,height:l}=r.reference,u=(Math.round((o+c)*a)-Math.round(o*a))/a,d=(Math.round((s+l)*a)-Math.round(s*a))/a;i.setProperty(Dd,`${u}px`),i.setProperty(Od,`${d}px`)}}),Sd(e=>({element:H.current||_o(e.elements.floating).createElement(`div`),padding:H.current?d:0,offsetParent:`floating`}),[d]),{name:`transformOrigin`,fn(e){let{elements:{floating:t},middlewareData:n,placement:r,platform:o,rects:s,y:c}=e,l=Ss(r),u=Cs(r),d=Es(l)===`y`,f=H.current,p=typeof a==`function`?a(Nd(e,i,te)):a,m;m=!f&&u&&Math.abs(d?n.shift?.x||0:n.shift?.y||0)<=1?u===`start`===(d&&o.isRTL?.(t)===!0)?`100%`:`0%`:`${(d?n.arrow?.x||0:n.arrow?.y||0)+(d?f?.clientWidth||0:f?.clientHeight||0)/2}px`;let h=l===`top`||l===`left`?`calc(100% + ${p}px)`:`${-p}px`;return ue&&d&&Math.abs(n.shift?.y||0)>p&&(h=`${s.reference.y+s.reference.height/2-c}px`),t.style.setProperty(kd,d?`${m} ${h}`:`${h} ${m}`),{}}},Cd,x),O(()=>{!_&&h&&h.update({referenceElement:null,floatingElement:null,domReferenceElement:null,positionReference:null})},[_,h]);let pe=U.useMemo(()=>({ancestorScroll:!f,elementResize:!f&&typeof ResizeObserver<`u`,layoutShift:!f&&typeof IntersectionObserver<`u`}),[f]),{refs:G,elements:me,x:he,y:ge,middlewareData:_e,update:ve,placement:K,context:ye,isPositioned:q,floatingStyles:be}=t({rootContext:h,open:m?_:void 0,placement:re,middleware:ce,strategy:r,whileElementsMounted:m?void 0:(...e)=>Dl(...e,pe),nodeId:b,externalTree:C}),{sideX:xe,sideY:Se}=_e.adaptiveOrigin||wd,Ce=q?r:`fixed`,we=U.useMemo(()=>{let e;return e=q?x?{position:Ce,[xe]:he,[Se]:ge}:{...be,position:Ce}:{position:Ce,top:0,left:0},e[Ad]=`100vw`,e[jd]=`100vh`,q||(e.opacity=0),e},[x,Ce,xe,he,Se,ge,be,q]),Te=U.useRef(null);O(()=>{if(!_)return;let e=F.current,t=typeof e==`function`?e():e,n=(Fd(t)?t.current:t)||null;n!==Te.current&&(G.setPositionReference(n),Te.current=n)},[_,G,P,F]),U.useEffect(()=>{if(!_)return;let e=F.current;typeof e!=`function`&&Fd(e)&&e.current!==Te.current&&(G.setPositionReference(e.current),Te.current=e.current)},[_,G,P,F]),U.useEffect(()=>{if(m&&_&&me.reference&&me.floating)return Dl(me.reference,me.floating,ve,pe)},[m,_,me,ve,pe]);let Ee=Ss(K),De=Md(i,Ee,te),Oe=Cs(K)||`center`,ke=!!_e.hide?.referenceHidden;O(()=>{S&&_&&q&&Ee!==ne&&T(Ee)},[S,_,q,Ee,ne]);let Ae=U.useMemo(()=>({position:`absolute`,top:_e.arrow?.y,left:_e.arrow?.x}),[_e.arrow]),je=_e.arrow?.centerOffset!==0;return U.useMemo(()=>({positionerStyles:we,arrowStyles:Ae,arrowRef:H,arrowUncentered:je,side:De,align:Oe,physicalSide:Ee,anchorHidden:ke,refs:G,context:ye,isPositioned:q,update:ve}),[we,Ae,H,je,De,Oe,Ee,ke,G,ye,q,ve])}function Fd(e){return e!=null&&`current`in e}function Id(e){return Pd(e,fu)}var Ld=U.createContext(void 0);function Rd(e=!1){let t=U.useContext(Ld);if(!t&&!e)throw Error(k(42));return t}var zd={name:`adaptiveOrigin`,async fn(e){let{x:t,y:n,rects:{floating:r},elements:{floating:i},platform:a,strategy:o,placement:s}=e,c=g(i),l=c.getComputedStyle(i);if(l.transitionDuration===`0s`||l.transitionDuration===``)return{x:t,y:n,data:wd};let u=await a.getOffsetParent?.(i),d={width:0,height:0};if(o===`fixed`&&c?.visualViewport)d={width:c.visualViewport.width,height:c.visualViewport.height};else if(u===c){let e=_o(i);d={width:e.documentElement.clientWidth,height:e.documentElement.clientHeight}}else await a.isElement?.(u)&&(d=await a.getDimensions(u));let f=Ss(s),p=t,m=n;f===`left`&&(p=d.width-(t+r.width)),f===`top`&&(m=d.height-(n+r.height));let h=f===`left`?`right`:wd.sideX,_=f===`top`?`bottom`:wd.sideY;return{x:p,y:m,data:{sideX:h,sideY:_}}}};function Bd(e){return e===`starting`?xc:z}function Vd(e,t,{styles:n,transitionStatus:r,props:i,refs:a,hidden:o,inert:s=!1}){let c={...n};return s&&(c.pointerEvents=`none`),L(`div`,e,{state:t,ref:a,props:[{role:`presentation`,hidden:o,style:c},Bd(r),i],stateAttributesMapping:Wo})}var Hd=cd(),Ud=U.forwardRef(function(e,t){let{open:n,mounted:r,positionerElement:i,setPositionerElement:a,floatingRootContext:o,nested:s,transitionStatus:c}=xu(),{className:l,render:u,anchor:d,positionMethod:f=`absolute`,side:p=`bottom`,align:m=`center`,sideOffset:h=0,alignOffset:_=0,collisionBoundary:v=`clipping-ancestors`,collisionPadding:y=5,collisionAvoidance:b=s?Cc:Sc,arrowPadding:x=5,sticky:S=!1,disableAnchorTracking:C=!1,style:w,...T}=e,E=yd(),D=Cu(),O=M(),k=M(),[A,j]=U.useState(n),N=U.useRef(n);U.useEffect(()=>{if(!i)return;function e(e){i&&fc(e)&&(e.type===`focusin`?mc:pc)(i)}return cs($(i,`focusin`,e,!0),$(i,`focusout`,e,!0))},[i]);let P=(o||Hd).useState(`domReferenceElement`),F=Id({anchor:d??P,positionMethod:f,mounted:r,side:p,sideOffset:h,align:m,alignOffset:_,arrowPadding:x,collisionBoundary:v,collisionPadding:y,sticky:S,disableAnchorTracking:C,keepMounted:E,floatingRootContext:o,collisionAvoidance:b,shift:{rootBoundary:`layoutViewport`},nodeId:D,adaptiveOrigin:zd}),ee={open:n,side:F.side,align:F.align,anchorHidden:F.anchorHidden,instant:A};U.useEffect(()=>{if(!n)return;N.current&&O.start(0,()=>{N.current=!1,k.isStarted()||j(!1)});function e(){oe.flushSync(()=>{j(!0)}),k.start(100,()=>{j(!1)})}return $(g(i),`resize`,e)},[n,O,k,i]);let te=Vd(e,ee,{styles:F.positionerStyles,transitionStatus:c,props:T,refs:[t,a],hidden:!r,inert:!n});return(0,W.jsx)(Ld.Provider,{value:F,children:te})}),Wd=cd();function Gd({children:e}){let{beforeInsideRef:t,beforeOutsideRef:n,afterInsideRef:r,afterOutsideRef:i,positionerElement:a,viewportElement:o,floatingRootContext:s}=xu(),c=!!Rd(!0),l=a||o;return!s&&!c?e:(0,W.jsxs)(U.Fragment,{children:[(0,W.jsx)(ps,{ref:t,onFocus:e=>{l&&fc(e,l)?uc(l)?.focus():n.current?.focus()}}),e,(0,W.jsx)(ps,{ref:r,onFocus:e=>{l&&fc(e,l)?dc(l)?.focus():i.current?.focus()}})]})}var Kd=U.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,id:o,...s}=e,c=bc(o),{setViewportElement:l,setViewportTargetElement:u,floatingRootContext:d,prevTriggerElementRef:f,viewportInert:p,setViewportInert:m}=xu(),h=!!Rd(!0),g=(d||Wd).useState(`domReferenceElement`);O(()=>{g&&(f.current=g)},[g,f]);let _=L(`div`,e,{ref:[t,l],props:[{id:c,onBlur(e){let t=e.relatedTarget,n=e.currentTarget;t&&!Q(n,t)&&t!==g&&m(!0)},...!h&&p&&{inert:pd(!0)},children:h?a:(0,W.jsx)(Gd,{children:(0,W.jsx)(`div`,{ref:u,children:a})})},s]});return h?(0,W.jsx)(Gd,{children:_}):_}),qd=U.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,{open:s,transitionStatus:c,setPopupElement:l}=xu(),u=Rd(),d=id(),f=dd(a),p={open:s,transitionStatus:c,side:u.side,align:u.align,anchorHidden:u.anchorHidden},m=u.side===`left`;m||=d===`rtl`?u.side===`inline-end`:u.side===`inline-start`;let h=u.side===`top`||m;return L(`nav`,e,{state:p,ref:[t,l],props:[{id:f,tabIndex:-1,style:h?{position:`absolute`,[u.side===`top`?`bottom`:`top`]:`0`,[m?`right`:`left`]:`0`}:{}},Bd(c),o],stateAttributesMapping:Go})}),Jd=U.forwardRef(function(e,t){let{className:n,render:r,active:i=!1,closeOnClick:a=!1,style:o,...s}=e,{setValue:c,popupElement:l,positionerElement:u,rootRef:d}=xu(),f=Cu(),p=Fc();return(0,W.jsx)(_d,{tag:`a`,render:r,className:n,style:o,state:{active:i},refs:[t],props:[{"aria-current":i?`page`:void 0,tabIndex:void 0,onClick(e){a&&c(null,ss(is,e.nativeEvent))},onBlur(e){u&&l&&md({currentTarget:e.currentTarget,relatedTarget:e.relatedTarget},{popupElement:l,rootRef:d,tree:p,nodeId:f})&&c(null,ss(as,e.nativeEvent))}},s]})});function Yd({align:e=`start`,className:t,children:n,...r}){return(0,W.jsxs)(ju,{"data-slot":`navigation-menu`,className:R(`group/navigation-menu relative flex max-w-max flex-1 items-center justify-center`,t),...r,children:[n,(0,W.jsx)($d,{align:e})]})}function Xd({className:e,...t}){return(0,W.jsx)(ld,{"data-slot":`navigation-menu-list`,className:R(`group flex flex-1 list-none items-center justify-center gap-0`,e),...t})}function Zd({className:e,...t}){return(0,W.jsx)(fd,{"data-slot":`navigation-menu-item`,className:R(`relative`,e),...t})}var Qd=te(`group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted`);function $d({className:e,side:t=`bottom`,sideOffset:n=8,align:r=`start`,alignOffset:i=0,...a}){return(0,W.jsx)(bd,{children:(0,W.jsx)(Ud,{side:t,sideOffset:n,align:r,alignOffset:i,className:R(`isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0`,e),...a,children:(0,W.jsx)(qd,{className:`data-[ending-style]:easing-[ease] xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0`,children:(0,W.jsx)(Kd,{className:`relative size-full overflow-hidden`})})})})}function ef({className:e,...t}){return(0,W.jsx)(Jd,{"data-slot":`navigation-menu-link`,className:R(`flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4`,e),...t})}var tf=[{name:`Acting`,url:`/#acting`},{name:`Tech`,url:`/#tech`},{name:`Committee`,url:`/#committee`},{name:`Mailing Lists`,url:`/#talk`,priority:!0},{name:`Contact`,url:`/#contact`},{name:`Tickets`,url:`/tickets`,priority:!0}],nf=()=>(0,W.jsx)(`div`,{className:`w-full bg-black text-white sticky top-0 z-50`,children:(0,W.jsx)(Yd,{className:`min-w-full`,children:(0,W.jsx)(d,{children:(0,W.jsxs)(`div`,{className:`flex justify-between items-center py-2`,children:[(0,W.jsx)(m,{to:`/`,children:(0,W.jsx)(C,{width:50,className:`sm:w-[75px]! sm:h-[75px]!`})}),(0,W.jsx)(Xd,{className:`justify-end gap-1`,children:tf.map(e=>(0,W.jsx)(Zd,{className:[e.priority?``:`hidden sm:list-item`].join(` `),children:(0,W.jsx)(ef,{className:Qd(),render:(0,W.jsx)(m,{to:e.url,children:(0,W.jsx)(`h2`,{className:`font-bold`,children:e.name})})})},e.name))})]})})})});function rf({children:e}){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(`div`,{className:`grow flex flex-col`,children:[(0,W.jsx)(nf,{}),e]}),(0,W.jsx)(ho,{})]})}export{rf as t};