"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,y=s["".concat(o,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const l={title:"Sound.Tidal.Time",slug:"/library/modules/Sound.Tidal.Time"},i=void 0,c={unversionedId:"library/autogenerated/Sound-Tidal-Time/Sound-Tidal-Time",id:"library/autogenerated/Sound-Tidal-Time/Sound-Tidal-Time",title:"Sound.Tidal.Time",description:"\x3c!------------------------------------------------------------------------------",source:"@site/docs/library/autogenerated/Sound-Tidal-Time/Sound-Tidal-Time.mdx",sourceDirName:"library/autogenerated/Sound-Tidal-Time",slug:"/library/modules/Sound.Tidal.Time",permalink:"/tidal-doc/docs/library/modules/Sound.Tidal.Time",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/library/autogenerated/Sound-Tidal-Time/Sound-Tidal-Time.mdx",tags:[],version:"current",lastUpdatedBy:"Matthew Kaney",lastUpdatedAt:1673207986,formattedLastUpdatedAt:"Jan 8, 2023",frontMatter:{title:"Sound.Tidal.Time",slug:"/library/modules/Sound.Tidal.Time"},sidebar:"library",previous:{title:"Sound.Tidal.Tempo",permalink:"/tidal-doc/docs/library/modules/Sound.Tidal.Tempo"},next:{title:"Sound.Tidal.Transition",permalink:"/tidal-doc/docs/library/modules/Sound.Tidal.Transition"}},o={},p=[{value:"type",id:"type",level:3},{value:"data",id:"data",level:3},{value:"type",id:"type-1",level:3},{value:"sam",id:"sam",level:3},{value:"toTime",id:"totime",level:3},{value:"fromTime",id:"fromtime",level:3},{value:"nextSam",id:"nextsam",level:3},{value:"cyclePos",id:"cyclepos",level:3},{value:"hull",id:"hull",level:3},{value:"subArc",id:"subarc",level:3},{value:"subMaybeArc",id:"submaybearc",level:3},{value:"sect",id:"sect",level:3},{value:"timeToCycleArc",id:"timetocyclearc",level:3},{value:"cycleArc",id:"cyclearc",level:3},{value:"cyclesInArc",id:"cyclesinarc",level:3},{value:"cycleArcsInArc",id:"cyclearcsinarc",level:3},{value:"arcCycles",id:"arccycles",level:3},{value:"arcCyclesZW",id:"arccycleszw",level:3},{value:"mapCycle",id:"mapcycle",level:3},{value:"isIn",id:"isin",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"type Time = Rational \n")),(0,a.kt)("p",null,"Time is rational"),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"data ArcF a \n")),(0,a.kt)("p",null,"An arc of time, with a start time (or onset) and a stop time (or offset)"),(0,a.kt)("h3",{id:"type-1"},"type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"type Arc = ArcF Time \n")),(0,a.kt)("h3",{id:"sam"},"sam"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sam :: Time -> Time \n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sam")," (start of cycle) for the given time value.\nCycles have duration 1, so every integer Time value divides two cycles."),(0,a.kt)("h3",{id:"totime"},"toTime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"toTime :: Real a => a -> Rational \n")),(0,a.kt)("p",null,"Turns a number into a (rational) time value. An alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"toRational"),"."),(0,a.kt)("h3",{id:"fromtime"},"fromTime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fromTime :: Fractional a => Time -> a \n")),(0,a.kt)("p",null,"Turns a (rational) time value into another number. An alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"fromRational"),"."),(0,a.kt)("h3",{id:"nextsam"},"nextSam"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nextSam :: Time -> Time \n")),(0,a.kt)("p",null,"The end point of the current cycle (and starting point of the next cycle)"),(0,a.kt)("h3",{id:"cyclepos"},"cyclePos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cyclePos :: Time -> Time \n")),(0,a.kt)("p",null,"The position of a time value relative to the start of its cycle."),(0,a.kt)("h3",{id:"hull"},"hull"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hull :: Arc -> Arc -> Arc \n")),(0,a.kt)("p",null,"convex hull union"),(0,a.kt)("h3",{id:"subarc"},"subArc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subArc :: Arc -> Arc -> Maybe Arc \n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"subArc i j")," is the timespan that is the intersection of ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"j"),".\nintersection\nThe definition is a bit fiddly as results might be zero-width, but\nnot at the end of an non-zero-width arc - e.g. (0,1) and (1,2) do\nnot intersect, but (1,1) (1,1) does."),(0,a.kt)("h3",{id:"submaybearc"},"subMaybeArc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"subMaybeArc :: Maybe Arc -> Maybe Arc -> Maybe (Maybe Arc) \n")),(0,a.kt)("h3",{id:"sect"},"sect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sect :: Arc -> Arc -> Arc \n")),(0,a.kt)("p",null,"Simple intersection of two arcs"),(0,a.kt)("h3",{id:"timetocyclearc"},"timeToCycleArc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"timeToCycleArc :: Time -> Arc \n")),(0,a.kt)("p",null,"The Arc returned is the cycle that the Time falls within."),(0,a.kt)("p",null,"Edge case: If the Time is an integer,\nthe Arc claiming it is the one starting at that Time,\nnot the previous one ending at that Time."),(0,a.kt)("h3",{id:"cyclearc"},"cycleArc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cycleArc :: Arc -> Arc \n")),(0,a.kt)("p",null,"Shifts an Arc to one of equal duration that starts within cycle zero.\n(Note that the output Arc probably does not start ",(0,a.kt)("em",{parentName:"p"},"at")," Time 0 --\nthat only happens when the input Arc starts at an integral Time.)"),(0,a.kt)("h3",{id:"cyclesinarc"},"cyclesInArc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cyclesInArc :: Integral a => Arc -> [a] \n")),(0,a.kt)("p",null,"Returns the numbers of the cycles that the input ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc")," overlaps\n(excluding the input ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc"),'\'s endpoint, unless it has duration 0 --\nsee "Edge cases" below).\n(The "cycle number" of an ',(0,a.kt)("inlineCode",{parentName:"p"},"Arc")," is equal to its start value.\nThus, for instance, ",(0,a.kt)("inlineCode",{parentName:"p"},"cyclesInArc (Arc 0 1.5) == [0,1]"),".)"),(0,a.kt)("p",null,"Edge cases:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," cyclesInArc $ Arc 0 1.0001 == ","[0,1]","\ncyclesInArc $ Arc 0 1      == ","[0]"," -- the endpoint is excluded\ncyclesInArc $ Arc 1 1      == ","[1]"," -- unless the Arc has duration 0")),(0,a.kt)("p",null,"PITFALL: Don't be fooled by the name. The output cycles\nare not necessarily completely contained in the input ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc"),",\nbut they definitely overlap it,\nand they include every cycle that overlaps it."),(0,a.kt)("h3",{id:"cyclearcsinarc"},"cycleArcsInArc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cycleArcsInArc :: Arc -> [Arc] \n")),(0,a.kt)("p",null,"This provides exactly the same information as ",(0,a.kt)("inlineCode",{parentName:"p"},"cyclesInArc"),",\nexcept that this represents its output as ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc"),"s,\nwhereas ",(0,a.kt)("inlineCode",{parentName:"p"},"cyclesInArc")," represents the same information as integral indices.\n(The ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc")," from 0 to 1 corresponds to the index 0,\nthe one from 1 to 2 has index 1, etc.)"),(0,a.kt)("h3",{id:"arccycles"},"arcCycles"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"arcCycles :: Arc -> [Arc] \n")),(0,a.kt)("p",null,"Splits the given ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc")," into a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc"),"s, at cycle boundaries."),(0,a.kt)("h3",{id:"arccycleszw"},"arcCyclesZW"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"arcCyclesZW :: Arc -> [Arc] \n")),(0,a.kt)("p",null,"Like arcCycles, but returns zero-width arcs"),(0,a.kt)("h3",{id:"mapcycle"},"mapCycle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mapCycle :: (Time -> Time) -> Arc -> Arc \n")),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"fmap")," but time is relative to the cycle (i.e. the\nsam of the start of the arc)"),(0,a.kt)("h3",{id:"isin"},"isIn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"isIn :: Arc -> Time -> Bool \n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isIn a t")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," is inside\nthe arc represented by ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"."))}s.isMDXComponent=!0}}]);