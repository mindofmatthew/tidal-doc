"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),s=n,k=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(3117),n=(a(7294),a(3905));const l={title:"Sound.Tidal.Utils",slug:"/library/modules/Sound.Tidal.Utils"},o=void 0,i={unversionedId:"library/autogenerated/Sound-Tidal-Utils/Sound-Tidal-Utils",id:"library/autogenerated/Sound-Tidal-Utils/Sound-Tidal-Utils",title:"Sound.Tidal.Utils",description:"\x3c!------------------------------------------------------------------------------",source:"@site/docs/library/autogenerated/Sound-Tidal-Utils/Sound-Tidal-Utils.mdx",sourceDirName:"library/autogenerated/Sound-Tidal-Utils",slug:"/library/modules/Sound.Tidal.Utils",permalink:"/tidal-doc/docs/library/modules/Sound.Tidal.Utils",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/library/autogenerated/Sound-Tidal-Utils/Sound-Tidal-Utils.mdx",tags:[],version:"current",lastUpdatedBy:"Matthew Kaney",lastUpdatedAt:1673207986,formattedLastUpdatedAt:"Jan 8, 2023",frontMatter:{title:"Sound.Tidal.Utils",slug:"/library/modules/Sound.Tidal.Utils"},sidebar:"library",previous:{title:"Sound.Tidal.UI",permalink:"/tidal-doc/docs/library/modules/Sound.Tidal.UI"},next:{title:"Sound.Tidal.Version",permalink:"/tidal-doc/docs/library/modules/Sound.Tidal.Version"}},d={},p=[{value:"writeError",id:"writeerror",level:3},{value:"mapBoth",id:"mapboth",level:3},{value:"mapPartTimes",id:"mapparttimes",level:3},{value:"mapFst",id:"mapfst",level:3},{value:"mapSnd",id:"mapsnd",level:3},{value:"delta",id:"delta",level:3},{value:"mid",id:"mid",level:3},{value:"removeCommon",id:"removecommon",level:3},{value:"readMaybe",id:"readmaybe",level:3},{value:"(!!!)",id:"",level:3},{value:"nth",id:"nth",level:3},{value:"accumulate",id:"accumulate",level:3},{value:"enumerate",id:"enumerate",level:3},{value:"wordsBy",id:"wordsby",level:3},{value:"matchMaybe",id:"matchmaybe",level:3},{value:"fromRight",id:"fromright",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"writeerror"},"writeError"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"writeError :: String -> IO () \n")),(0,n.kt)("h3",{id:"mapboth"},"mapBoth"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mapBoth :: (a -> a) -> (a, a) -> (a, a) \n")),(0,n.kt)("h3",{id:"mapparttimes"},"mapPartTimes"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mapPartTimes :: (a -> a) -> ((a, a), (a, a)) -> ((a, a), (a, a)) \n")),(0,n.kt)("h3",{id:"mapfst"},"mapFst"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mapFst :: (a -> b) -> (a, c) -> (b, c) \n")),(0,n.kt)("h3",{id:"mapsnd"},"mapSnd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mapSnd :: (a -> b) -> (c, a) -> (c, b) \n")),(0,n.kt)("h3",{id:"delta"},"delta"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"delta :: Num a => (a, a) -> a \n")),(0,n.kt)("h3",{id:"mid"},"mid"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mid :: Fractional a => (a, a) -> a \n")),(0,n.kt)("p",null,"The midpoint of two values"),(0,n.kt)("h3",{id:"removecommon"},"removeCommon"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"removeCommon :: Eq a => [a] -> [a] -> ([a], [a]) \n")),(0,n.kt)("h3",{id:"readmaybe"},"readMaybe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"readMaybe :: Read a => String -> Maybe a \n")),(0,n.kt)("h3",{id:""},"(!!!)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"(!!!) :: [a] -> Int -> a \n")),(0,n.kt)("p",null,"like ",(0,n.kt)("inlineCode",{parentName:"p"},"!!")," selects ",(0,n.kt)("inlineCode",{parentName:"p"},"n"),"th element from xs, but wraps over at the end of ",(0,n.kt)("inlineCode",{parentName:"p"},"xs")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-haskell"},">>> map ((!!!) [1,3,5]) [0,1,2,3,4,5]\n[1,3,5,1,3,5]\n")),(0,n.kt)("h3",{id:"nth"},"nth"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"nth :: Int -> [a] -> Maybe a \n")),(0,n.kt)("p",null,"Safer version of !! -"),(0,n.kt)("h3",{id:"accumulate"},"accumulate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"accumulate :: Num t => [t] -> [t] \n")),(0,n.kt)("h3",{id:"enumerate"},"enumerate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"enumerate :: [a] -> [(Int, a)] \n")),(0,n.kt)("p",null,"enumerate a list of things"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-haskell"},'>>> enumerate ["foo","bar","baz"]\n[(1,"foo"), (2,"bar"), (3,"baz")]\n')),(0,n.kt)("h3",{id:"wordsby"},"wordsBy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"wordsBy :: (a -> Bool) -> [a] -> [[a]] \n")),(0,n.kt)("p",null,"split given list of ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," by given single a, e.g."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-haskell"},'>>> wordsBy (== \':\') "bd:3"\n["bd", "3"]\n')),(0,n.kt)("h3",{id:"matchmaybe"},"matchMaybe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"matchMaybe :: Maybe a -> Maybe a -> Maybe a \n")),(0,n.kt)("h3",{id:"fromright"},"fromRight"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"fromRight :: b -> Either a b -> b \n")))}m.isMDXComponent=!0}}]);