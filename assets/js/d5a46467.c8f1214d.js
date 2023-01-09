"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(3117),n=(r(7294),r(3905));const l={title:"Haskell resources",permalink:"wiki/Haskell_resources/",layout:"wiki",tags:["Reference"]},i=void 0,o={unversionedId:"advanced/understanding-innards/Haskell_resources",id:"advanced/understanding-innards/Haskell_resources",title:"Haskell resources",description:"TidalCycles is a domain specific language made with the Haskell",source:"@site/docs/advanced/understanding-innards/Haskell_resources.md",sourceDirName:"advanced/understanding-innards",slug:"/advanced/understanding-innards/Haskell_resources",permalink:"/tidal-doc/docs/advanced/understanding-innards/Haskell_resources",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/advanced/understanding-innards/Haskell_resources.md",tags:[{label:"Reference",permalink:"/tidal-doc/docs/tags/reference"}],version:"current",lastUpdatedBy:"Koji Ishimoto",lastUpdatedAt:1615136026,formattedLastUpdatedAt:"Mar 7, 2021",frontMatter:{title:"Haskell resources",permalink:"wiki/Haskell_resources/",layout:"wiki",tags:["Reference"]},sidebar:"advanced",previous:{title:"Type signatures",permalink:"/tidal-doc/docs/advanced/understanding-innards/Type_signatures"}},s={},c=[],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"TidalCycles is a domain specific language made with the Haskell\nprogramming language. Here's a place to collect recommended Haskell\nresources."),(0,n.kt)("h1",{id:"tidal-specific-resources"},"Tidal-specific resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wiki/Understanding_the_$",title:"wikilink"},"Understanding the $")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wiki/Type_signatures",title:"wikilink"},"Type signatures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wiki/What_is_a_pattern?",title:"wikilink"},"What is a pattern?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.imn.htwk-leipzig.de/~waldmann/etc/untutorial/tc/"},"Tidal for\nprogrammers"))),(0,n.kt)("h1",{id:"tidal-related-resources"},"Tidal-related resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=kGbelVBCWDk&list=PLyEzdf4cdMMHGqVnAzLV8eDXn6Ajj46JA"},"NIL Haskell\nschool")," -\nvideo lectures by David Ogborn (not tidal-specific but by David who\namong other things works on Tidal and related projects)")),(0,n.kt)("h1",{id:"general-resources"},"General resources"),(0,n.kt)("p",null,"Note that a lot of Haskell tutorials focus on lists, which are important\nto learn, but aren't used very often in Tidal."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/soupi/haskell-study-plan/blob/master/README.org"},"Haskell study\nplan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learnxinyminutes.com/docs/haskell/"},"Learn Haskell in Y\nminutes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://learnyouahaskell.com/"},"Learn you a Haskell for great good")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://euterpea.com/haskell-school-of-music/"},"Haskell school of expression\nbook")," (",(0,n.kt)("a",{parentName:"li",href:"http://haskell.cs.yale.edu/wp-content/uploads/2015/03/HSoM.pdf"},"pdf of earlier\nversion"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html"},"Functors, applicatives and monads in\npictures")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://haskellbook.com/"},"Haskell programming from first\nprinciples")," - an in-depth book for\nbeginners"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.cs.nott.ac.uk/~pszgmh/pih.html"},"Programming in\nHaskell")," - another nice\nbook, by Graham Hutton"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.haskell.org/How_to_read_Haskell"},"How to read\nHaskell")," - A primer\nfor learning how to work out yourself 'what does this function do?'"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://haskellbook.com/"},"Haskell programming from first\nprinciples")," - by Christopher Allen and\nJulie Moronuki")))}d.isMDXComponent=!0}}]);