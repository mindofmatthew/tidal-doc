"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5212],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(3117),o=(r(7294),r(3905));const a={title:"Even more",id:"even-more"},c=void 0,l={unversionedId:"reference/even-more",id:"reference/even-more",title:"Even more",description:"Sometimes, the documentation will not be enough for your needs. You might want to explore Tidal in more depth and take a look at each and every function currently in store. There are some tools you can use to explore.",source:"@site/docs/reference/hackage.md",sourceDirName:"reference",slug:"/reference/even-more",permalink:"/tidal-doc/docs/reference/even-more",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/hackage.md",tags:[],version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1623180900,formattedLastUpdatedAt:"Jun 8, 2021",frontMatter:{title:"Even more",id:"even-more"},sidebar:"reference",previous:{title:"State Values",permalink:"/tidal-doc/docs/reference/state_values"},next:{title:"Concatenation",permalink:"/tidal-doc/docs/reference/concatenation"}},i={},p=[{value:"Hackage",id:"hackage",level:2},{value:"Old school Perl script",id:"old-school-perl-script",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes, the documentation will not be enough for your needs. You might want to explore ",(0,o.kt)("strong",{parentName:"p"},"Tidal")," in more depth and take a look at each and every function currently in store. There are some tools you can use to explore."),(0,o.kt)("h2",{id:"hackage"},"Hackage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hackage")," is the central Haskell package repository, maintained by the community. ",(0,o.kt)("strong",{parentName:"p"},"Hackage")," is used to publish libraries. The website will auto-generate an exhaustive documentation (but nothing is perfect!) for each and every package. You can take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/tidal"},"Tidal Hackage page")," to explore all the different modules and functions."),(0,o.kt)("h2",{id:"old-school-perl-script"},"Old school Perl script"),(0,o.kt)("p",null,"You can generate a complete list of all the functions by using a quick hack. The ",(0,o.kt)("strong",{parentName:"p"},"GHCI")," ",(0,o.kt)("inlineCode",{parentName:"p"},":browse")," command can be used to generate the list. The following ",(0,o.kt)("strong",{parentName:"p"},"Perl")," script will clean the output for you and output a more human-readable document: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-perl"},"perl -pe 's!(.*?)\\s*::\\s*(.*)!|-\\n|[[$1]]\\n|<code>$2</code>!'\n")))}u.isMDXComponent=!0}}]);