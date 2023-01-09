"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9681],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),v=l,k=c["".concat(p,".").concat(v)]||c[v]||s[v]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},9360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(3117),l=(a(7294),a(3905));const r={title:"Sound.Tidal.Pattern",slug:"/library/modules/Sound.Tidal.Pattern"},i=void 0,o={unversionedId:"library/autogenerated/Sound-Tidal-Pattern/Sound-Tidal-Pattern",id:"library/autogenerated/Sound-Tidal-Pattern/Sound-Tidal-Pattern",title:"Sound.Tidal.Pattern",description:"\x3c!------------------------------------------------------------------------------",source:"@site/docs/library/autogenerated/Sound-Tidal-Pattern/Sound-Tidal-Pattern.mdx",sourceDirName:"library/autogenerated/Sound-Tidal-Pattern",slug:"/library/modules/Sound.Tidal.Pattern",permalink:"/tidal-doc/docs/library/modules/Sound.Tidal.Pattern",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/library/autogenerated/Sound-Tidal-Pattern/Sound-Tidal-Pattern.mdx",tags:[],version:"current",lastUpdatedBy:"Matthew Kaney",lastUpdatedAt:1673207986,formattedLastUpdatedAt:"Jan 8, 2023",frontMatter:{title:"Sound.Tidal.Pattern",slug:"/library/modules/Sound.Tidal.Pattern"},sidebar:"library",previous:{title:"Sound.Tidal.ParseBP",permalink:"/tidal-doc/docs/library/modules/Sound.Tidal.ParseBP"},next:{title:"Sound.Tidal.Safe.Boot",permalink:"/tidal-doc/docs/library/modules/Sound.Tidal.Safe.Boot"}},p={},u=[{value:"type",id:"type",level:3},{value:"data",id:"data",level:3},{value:"data",id:"data-1",level:3},{value:"data",id:"data-2",level:3},{value:"type",id:"type-1",level:3},{value:"type",id:"type-2",level:3},{value:"class",id:"class",level:3},{value:"newtype",id:"newtype",level:3},{value:"data",id:"data-3",level:3},{value:"class",id:"class-1",level:3},{value:"data",id:"data-4",level:3},{value:"class",id:"class-2",level:3},{value:"(*&gt;)",id:"",level:3},{value:"empty",id:"empty",level:3},{value:"(&lt;*)",id:"-1",level:3},{value:"silence",id:"silence",level:3},{value:"rev",id:"rev",level:3},{value:"noOv",id:"noov",level:3},{value:"applyPatToPatBoth",id:"applypattopatboth",level:3},{value:"applyPatToPatLeft",id:"applypattopatleft",level:3},{value:"applyPatToPatRight",id:"applypattopatright",level:3},{value:"(&lt;&lt;*)",id:"-2",level:3},{value:"applyPatToPatSqueeze",id:"applypattopatsqueeze",level:3},{value:"applyPatToPat",id:"applypattopat",level:3},{value:"wholeOrPart",id:"wholeorpart",level:3},{value:"filterAnalog",id:"filteranalog",level:3},{value:"filterDigital",id:"filterdigital",level:3},{value:"combineContexts",id:"combinecontexts",level:3},{value:"squeezeJoin",id:"squeezejoin",level:3},{value:"unwrap",id:"unwrap",level:3},{value:"innerJoin",id:"innerjoin",level:3},{value:"outerJoin",id:"outerjoin",level:3},{value:"focusArc",id:"focusarc",level:3},{value:"applyFIS",id:"applyfis",level:3},{value:"fNum2",id:"fnum2",level:3},{value:"queryArc",id:"queryarc",level:3},{value:"splitQueries",id:"splitqueries",level:3},{value:"withResultArc",id:"withresultarc",level:3},{value:"withResultTime",id:"withresulttime",level:3},{value:"withQueryArc",id:"withqueryarc",level:3},{value:"withQueryTime",id:"withquerytime",level:3},{value:"withQueryControls",id:"withquerycontrols",level:3},{value:"withEvent",id:"withevent",level:3},{value:"withValue",id:"withvalue",level:3},{value:"withEvents",id:"withevents",level:3},{value:"withPart",id:"withpart",level:3},{value:"_extract",id:"_extract",level:3},{value:"filterJust",id:"filterjust",level:3},{value:"extractI",id:"extracti",level:3},{value:"getI",id:"geti",level:3},{value:"extractF",id:"extractf",level:3},{value:"getF",id:"getf",level:3},{value:"extractS",id:"extracts",level:3},{value:"getS",id:"gets",level:3},{value:"extractB",id:"extractb",level:3},{value:"getB",id:"getb",level:3},{value:"extractR",id:"extractr",level:3},{value:"getR",id:"getr",level:3},{value:"compressArc",id:"compressarc",level:3},{value:"rotR",id:"rotr",level:3},{value:"_fastGap",id:"_fastgap",level:3},{value:"compressArcTo",id:"compressarcto",level:3},{value:"_fast",id:"_fast",level:3},{value:"fast",id:"fast",level:3},{value:"tParam",id:"tparam",level:3},{value:"fastSqueeze",id:"fastsqueeze",level:3},{value:"tParamSqueeze",id:"tparamsqueeze",level:3},{value:"density",id:"density",level:3},{value:"slow",id:"slow",level:3},{value:"_slow",id:"_slow",level:3},{value:"rotL",id:"rotl",level:3},{value:"matchManyToOne",id:"matchmanytoone",level:3},{value:"filterValues",id:"filtervalues",level:3},{value:"filterWhen",id:"filterwhen",level:3},{value:"wholeStart",id:"wholestart",level:3},{value:"filterOnsets",id:"filteronsets",level:3},{value:"eventPartStart",id:"eventpartstart",level:3},{value:"filterEvents",id:"filterevents",level:3},{value:"isDigital",id:"isdigital",level:3},{value:"isAnalog",id:"isanalog",level:3},{value:"playFor",id:"playfor",level:3},{value:"tParam2",id:"tparam2",level:3},{value:"tParam3",id:"tparam3",level:3},{value:"setContext",id:"setcontext",level:3},{value:"withContext",id:"withcontext",level:3},{value:"deltaMini",id:"deltamini",level:3},{value:"onsetIn",id:"onsetin",level:3},{value:"defragParts",id:"defragparts",level:3},{value:"isAdjacent",id:"isadjacent",level:3},{value:"wholeStop",id:"wholestop",level:3},{value:"eventPartStop",id:"eventpartstop",level:3},{value:"eventPart",id:"eventpart",level:3},{value:"eventValue",id:"eventvalue",level:3},{value:"eventHasOnset",id:"eventhasonset",level:3},{value:"toEvent",id:"toevent",level:3},{value:"resolveState",id:"resolvestate",level:3},{value:"getN",id:"getn",level:3},{value:"getBlob",id:"getblob",level:3},{value:"getList",id:"getlist",level:3},{value:"valueToPattern",id:"valuetopattern",level:3},{value:"sameDur",id:"samedur",level:3},{value:"groupEventsBy",id:"groupeventsby",level:3},{value:"collectEvent",id:"collectevent",level:3},{value:"collectEventsBy",id:"collecteventsby",level:3},{value:"collectBy",id:"collectby",level:3},{value:"collect",id:"collect",level:3},{value:"uncollectEvent",id:"uncollectevent",level:3},{value:"uncollectEvents",id:"uncollectevents",level:3},{value:"uncollect",id:"uncollect",level:3},{value:"module",id:"module",level:3}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"type Event a = EventF (ArcF Time) a \n")),(0,l.kt)("h3",{id:"data"},"data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"data State \n")),(0,l.kt)("p",null,"an Arc and some named control values"),(0,l.kt)("h3",{id:"data-1"},"data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"data Pattern a \n")),(0,l.kt)("p",null,"A datatype representing events taking place over time"),(0,l.kt)("h3",{id:"data-2"},"data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"data Context \n")),(0,l.kt)("p",null,"Some context for an event, currently just position within sourcecode"),(0,l.kt)("h3",{id:"type-1"},"type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"type ControlPattern = Pattern ValueMap \n")),(0,l.kt)("h3",{id:"type-2"},"type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"type ValueMap = Map String Value \n")),(0,l.kt)("h3",{id:"class"},"class"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"class Moddable a where \n")),(0,l.kt)("h3",{id:"newtype"},"newtype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"newtype Note \n")),(0,l.kt)("p",null,"Note is Double, but with a different parser"),(0,l.kt)("h3",{id:"data-3"},"data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"data Value \n")),(0,l.kt)("p",null,"Polymorphic values"),(0,l.kt)("h3",{id:"class-1"},"class"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"class Stringy a where \n")),(0,l.kt)("h3",{id:"data-4"},"data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"data EventF a b \n")),(0,l.kt)("p",null,"An event is a value that's active during a timespan. If a whole\nis present, the part should be equal to or fit inside it."),(0,l.kt)("h3",{id:"class-2"},"class"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"class Valuable a where \n")),(0,l.kt)("h3",{id:""},"(*>)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(*>) :: Pattern (a -> b) -> Pattern a -> Pattern b infixl 4 \n")),(0,l.kt)("p",null,"Like *, but the ",(0,l.kt)("inlineCode",{parentName:"p"},"wholes")," come from the right"),(0,l.kt)("h3",{id:"empty"},"empty"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"empty :: Pattern a \n")),(0,l.kt)("h3",{id:"-1"},"(<*)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(<*) :: Pattern (a -> b) -> Pattern a -> Pattern b infixl 4 \n")),(0,l.kt)("p",null,"Like *, but the ",(0,l.kt)("inlineCode",{parentName:"p"},"wholes")," come from the left"),(0,l.kt)("h3",{id:"silence"},"silence"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"silence :: Pattern a \n")),(0,l.kt)("h3",{id:"rev"},"rev"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rev :: Pattern a -> Pattern a \n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rev p")," returns ",(0,l.kt)("inlineCode",{parentName:"p"},"p")," with the event positions in each cycle\nreversed (or mirrored)."),(0,l.kt)("h3",{id:"noov"},"noOv"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"noOv :: String -> a \n")),(0,l.kt)("h3",{id:"applypattopatboth"},"applyPatToPatBoth"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"applyPatToPatBoth :: Pattern (a -> b) -> Pattern a -> Pattern b \n")),(0,l.kt)("h3",{id:"applypattopatleft"},"applyPatToPatLeft"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"applyPatToPatLeft :: Pattern (a -> b) -> Pattern a -> Pattern b \n")),(0,l.kt)("h3",{id:"applypattopatright"},"applyPatToPatRight"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"applyPatToPatRight :: Pattern (a -> b) -> Pattern a -> Pattern b \n")),(0,l.kt)("h3",{id:"-2"},"(<<*)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"(<<*) :: Pattern (a -> b) -> Pattern a -> Pattern b infixl 4 \n")),(0,l.kt)("p",null,"Like *, but the ",(0,l.kt)("inlineCode",{parentName:"p"},"wholes")," come from the left"),(0,l.kt)("h3",{id:"applypattopatsqueeze"},"applyPatToPatSqueeze"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"applyPatToPatSqueeze :: Pattern (a -> b) -> Pattern a -> Pattern b \n")),(0,l.kt)("h3",{id:"applypattopat"},"applyPatToPat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"applyPatToPat :: (Maybe Arc -> Maybe Arc -> Maybe (Maybe Arc)) -> Pattern (a -> b) -> Pattern a -> Pattern b \n")),(0,l.kt)("h3",{id:"wholeorpart"},"wholeOrPart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wholeOrPart :: Event a -> Arc \n")),(0,l.kt)("h3",{id:"filteranalog"},"filterAnalog"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"filterAnalog :: Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"filterdigital"},"filterDigital"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"filterDigital :: Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"combinecontexts"},"combineContexts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"combineContexts :: [Context] -> Context \n")),(0,l.kt)("h3",{id:"squeezejoin"},"squeezeJoin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"squeezeJoin :: Pattern (Pattern a) -> Pattern a \n")),(0,l.kt)("p",null,"Like ",(0,l.kt)("inlineCode",{parentName:"p"},"unwrap"),", but cycles of the inner patterns are compressed to fit the\ntimespan of the outer whole (or the original query if it's a continuous pattern?)\nTODO - what if a continuous pattern contains a discrete one, or vice-versa?"),(0,l.kt)("h3",{id:"unwrap"},"unwrap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"unwrap :: Pattern (Pattern a) -> Pattern a \n")),(0,l.kt)("p",null,"Turns a pattern of patterns into a single pattern.\n(this is actually ",(0,l.kt)("inlineCode",{parentName:"p"},"join"),")"),(0,l.kt)("p",null,"1/ For query ",(0,l.kt)("inlineCode",{parentName:"p"},"arc"),", get the events from the outer pattern ",(0,l.kt)("inlineCode",{parentName:"p"},"pp"),"\n2/ Query the inner pattern using the ",(0,l.kt)("inlineCode",{parentName:"p"},"part")," of the outer\n3/ For each inner event, set the whole and part to be the intersection\nof the outer whole and part, respectively\n4 Concatenate all the events together (discarding wholesparts that didn't intersect)"),(0,l.kt)("p",null,"TODO - what if a continuous pattern contains a discrete one, or vice-versa?"),(0,l.kt)("h3",{id:"innerjoin"},"innerJoin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"innerJoin :: Pattern (Pattern a) -> Pattern a \n")),(0,l.kt)("p",null,"Turns a pattern of patterns into a single pattern. Like ",(0,l.kt)("inlineCode",{parentName:"p"},"unwrap"),",\nbut structure only comes from the inner pattern."),(0,l.kt)("h3",{id:"outerjoin"},"outerJoin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"outerJoin :: Pattern (Pattern a) -> Pattern a \n")),(0,l.kt)("p",null,"Turns a pattern of patterns into a single pattern. Like ",(0,l.kt)("inlineCode",{parentName:"p"},"unwrap"),",\nbut structure only comes from the outer pattern."),(0,l.kt)("h3",{id:"focusarc"},"focusArc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"focusArc :: Arc -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"applyfis"},"applyFIS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"applyFIS :: (Double -> Double) -> (Int -> Int) -> (String -> String) -> Value -> Value \n")),(0,l.kt)("p",null,"General utilities.."),(0,l.kt)("p",null,"Apply one of three functions to a Value, depending on its type"),(0,l.kt)("h3",{id:"fnum2"},"fNum2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fNum2 :: (Int -> Int -> Int) -> (Double -> Double -> Double) -> Value -> Value -> Value \n")),(0,l.kt)("p",null,"Apply one of two functions to a pair of Values, depending on their types (int\nor float; strings and rationals are ignored)"),(0,l.kt)("h3",{id:"queryarc"},"queryArc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"queryArc :: Pattern a -> Arc -> [Event a] \n")),(0,l.kt)("h3",{id:"splitqueries"},"splitQueries"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"splitQueries :: Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Splits queries that span cycles. For example ",(0,l.kt)("inlineCode",{parentName:"p"},"query p (0.5, 1.5)")," would be\nturned into two queries, ",(0,l.kt)("inlineCode",{parentName:"p"},"(0.5,1)")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"(1,1.5)"),", and the results\ncombined. Being able to assume queries don't span cycles often\nmakes transformations easier to specify."),(0,l.kt)("h3",{id:"withresultarc"},"withResultArc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withResultArc :: (Arc -> Arc) -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Apply a function to the arcs/timespans (both whole and parts) of the result"),(0,l.kt)("h3",{id:"withresulttime"},"withResultTime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withResultTime :: (Time -> Time) -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Apply a function to the time (both start and end of the timespans\nof both whole and parts) of the result"),(0,l.kt)("h3",{id:"withqueryarc"},"withQueryArc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withQueryArc :: (Arc -> Arc) -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Apply a function to the timespan of the query"),(0,l.kt)("h3",{id:"withquerytime"},"withQueryTime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withQueryTime :: (Time -> Time) -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Apply a function to the time (both start and end) of the query"),(0,l.kt)("h3",{id:"withquerycontrols"},"withQueryControls"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withQueryControls :: (ValueMap -> ValueMap) -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Apply a function to the control values of the query"),(0,l.kt)("h3",{id:"withevent"},"withEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withEvent :: (Event a -> Event b) -> Pattern a -> Pattern b \n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"withEvent f p")," returns a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Pattern")," with each event mapped over\nfunction ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,l.kt)("h3",{id:"withvalue"},"withValue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withValue :: (a -> b) -> Pattern a -> Pattern b \n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"withEvent f p")," returns a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Pattern")," with each value mapped over\nfunction ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,l.kt)("h3",{id:"withevents"},"withEvents"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withEvents :: ([Event a] -> [Event b]) -> Pattern a -> Pattern b \n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"withEvent f p")," returns a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Pattern")," with f applied to the resulting list of events for each query\nfunction ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,l.kt)("h3",{id:"withpart"},"withPart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withPart :: (Arc -> Arc) -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"withPart f p")," returns a new ",(0,l.kt)("inlineCode",{parentName:"p"},"Pattern")," with function ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," applied\nto the part."),(0,l.kt)("h3",{id:"_extract"},"_extract"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"_extract :: (Value -> Maybe a) -> String -> ControlPattern -> Pattern a \n")),(0,l.kt)("h3",{id:"filterjust"},"filterJust"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"filterJust :: Pattern (Maybe a) -> Pattern a \n")),(0,l.kt)("p",null,"Turns a pattern of ",(0,l.kt)("inlineCode",{parentName:"p"},"Maybe")," values into a pattern of values,\ndropping the events of ",(0,l.kt)("inlineCode",{parentName:"p"},"Nothing"),"."),(0,l.kt)("h3",{id:"extracti"},"extractI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"extractI :: String -> ControlPattern -> Pattern Int \n")),(0,l.kt)("p",null,"Extract a pattern of integer values by from a control pattern, given the name of the control"),(0,l.kt)("h3",{id:"geti"},"getI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"getI :: Value -> Maybe Int \n")),(0,l.kt)("h3",{id:"extractf"},"extractF"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"extractF :: String -> ControlPattern -> Pattern Double \n")),(0,l.kt)("p",null,"Extract a pattern of floating point values by from a control pattern, given the name of the control"),(0,l.kt)("h3",{id:"getf"},"getF"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"getF :: Value -> Maybe Double \n")),(0,l.kt)("h3",{id:"extracts"},"extractS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"extractS :: String -> ControlPattern -> Pattern String \n")),(0,l.kt)("p",null,"Extract a pattern of string values by from a control pattern, given the name of the control"),(0,l.kt)("h3",{id:"gets"},"getS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"getS :: Value -> Maybe String \n")),(0,l.kt)("h3",{id:"extractb"},"extractB"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"extractB :: String -> ControlPattern -> Pattern Bool \n")),(0,l.kt)("p",null,"Extract a pattern of boolean values by from a control pattern, given the name of the control"),(0,l.kt)("h3",{id:"getb"},"getB"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"getB :: Value -> Maybe Bool \n")),(0,l.kt)("h3",{id:"extractr"},"extractR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"extractR :: String -> ControlPattern -> Pattern Rational \n")),(0,l.kt)("p",null,"Extract a pattern of rational values by from a control pattern, given the name of the control"),(0,l.kt)("h3",{id:"getr"},"getR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"getR :: Value -> Maybe Rational \n")),(0,l.kt)("h3",{id:"compressarc"},"compressArc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"compressArc :: Arc -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"rotr"},"rotR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rotR :: Time -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Shifts a pattern forward in time by the given amount, expressed in cycles"),(0,l.kt)("h3",{id:"_fastgap"},"_fastGap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"_fastGap :: Time -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"compressarcto"},"compressArcTo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"compressArcTo :: Arc -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"_fast"},"_fast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"_fast :: Time -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"fast"},"fast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fast :: Pattern Time -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Speed up a pattern by the given time pattern"),(0,l.kt)("h3",{id:"tparam"},"tParam"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tParam :: (t1 -> t2 -> Pattern a) -> Pattern t1 -> t2 -> Pattern a \n")),(0,l.kt)("h3",{id:"fastsqueeze"},"fastSqueeze"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fastSqueeze :: Pattern Time -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Slow down a pattern by the factors in the given time pattern, ",(0,l.kt)("inlineCode",{parentName:"p"},"squeezing"),"\nthe pattern to fit the slot given in the time pattern"),(0,l.kt)("h3",{id:"tparamsqueeze"},"tParamSqueeze"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tParamSqueeze :: (a -> Pattern b -> Pattern c) -> Pattern a -> Pattern b -> Pattern c \n")),(0,l.kt)("h3",{id:"density"},"density"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"density :: Pattern Time -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"An alias for ",(0,l.kt)("inlineCode",{parentName:"p"},"fast")),(0,l.kt)("h3",{id:"slow"},"slow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"slow :: Pattern Time -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Slow down a pattern by the given time pattern"),(0,l.kt)("h3",{id:"_slow"},"_slow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"_slow :: Time -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"rotl"},"rotL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rotL :: Time -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Shifts a pattern back in time by the given amount, expressed in cycles"),(0,l.kt)("h3",{id:"matchmanytoone"},"matchManyToOne"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"matchManyToOne :: (b -> a -> Bool) -> Pattern a -> Pattern b -> Pattern (Bool, b) \n")),(0,l.kt)("p",null,"Mark values in the first pattern which match with at least one\nvalue in the second pattern."),(0,l.kt)("h3",{id:"filtervalues"},"filterValues"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"filterValues :: (a -> Bool) -> Pattern a -> Pattern a \n")),(0,l.kt)("p",null,"Remove events from patterns that to not meet the given test"),(0,l.kt)("h3",{id:"filterwhen"},"filterWhen"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"filterWhen :: (Time -> Bool) -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"wholestart"},"wholeStart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wholeStart :: Event a -> Time \n")),(0,l.kt)("p",null,"Get the onset of an event's ",(0,l.kt)("inlineCode",{parentName:"p"},"whole")),(0,l.kt)("h3",{id:"filteronsets"},"filterOnsets"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"filterOnsets :: Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"eventpartstart"},"eventPartStart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eventPartStart :: Event a -> Time \n")),(0,l.kt)("p",null,"Get the onset of an event's ",(0,l.kt)("inlineCode",{parentName:"p"},"whole")),(0,l.kt)("h3",{id:"filterevents"},"filterEvents"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"filterEvents :: (Event a -> Bool) -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"isdigital"},"isDigital"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"isDigital :: Event a -> Bool \n")),(0,l.kt)("h3",{id:"isanalog"},"isAnalog"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"isAnalog :: Event a -> Bool \n")),(0,l.kt)("h3",{id:"playfor"},"playFor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"playFor :: Time -> Time -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"tparam2"},"tParam2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tParam2 :: (a -> b -> c -> Pattern d) -> Pattern a -> Pattern b -> c -> Pattern d \n")),(0,l.kt)("h3",{id:"tparam3"},"tParam3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tParam3 :: (a -> b -> c -> Pattern d -> Pattern e) -> Pattern a -> Pattern b -> Pattern c -> Pattern d -> Pattern e \n")),(0,l.kt)("h3",{id:"setcontext"},"setContext"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"setContext :: Context -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"withcontext"},"withContext"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"withContext :: (Context -> Context) -> Pattern a -> Pattern a \n")),(0,l.kt)("h3",{id:"deltamini"},"deltaMini"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deltaMini :: String -> String \n")),(0,l.kt)("h3",{id:"onsetin"},"onsetIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"onsetIn :: Arc -> Event a -> Bool \n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"True")," if an ",(0,l.kt)("inlineCode",{parentName:"p"},"EventF"),"'s starts is within given ",(0,l.kt)("inlineCode",{parentName:"p"},"ArcF")),(0,l.kt)("h3",{id:"defragparts"},"defragParts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"defragParts :: Eq a => [Event a] -> [Event a] \n")),(0,l.kt)("p",null,"Returns a list of events, with any adjacent parts of the same whole combined"),(0,l.kt)("h3",{id:"isadjacent"},"isAdjacent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"isAdjacent :: Eq a => Event a -> Event a -> Bool \n")),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," if the two given events are adjacent parts of the same whole"),(0,l.kt)("h3",{id:"wholestop"},"wholeStop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wholeStop :: Event a -> Time \n")),(0,l.kt)("p",null,"Get the offset of an event's ",(0,l.kt)("inlineCode",{parentName:"p"},"whole")),(0,l.kt)("h3",{id:"eventpartstop"},"eventPartStop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eventPartStop :: Event a -> Time \n")),(0,l.kt)("p",null,"Get the offset of an event's ",(0,l.kt)("inlineCode",{parentName:"p"},"part")),(0,l.kt)("h3",{id:"eventpart"},"eventPart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eventPart :: Event a -> Arc \n")),(0,l.kt)("p",null,"Get the timespan of an event's ",(0,l.kt)("inlineCode",{parentName:"p"},"part")),(0,l.kt)("h3",{id:"eventvalue"},"eventValue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eventValue :: Event a -> a \n")),(0,l.kt)("h3",{id:"eventhasonset"},"eventHasOnset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eventHasOnset :: Event a -> Bool \n")),(0,l.kt)("h3",{id:"toevent"},"toEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"toEvent :: (((Time, Time), (Time, Time)), a) -> Event a \n")),(0,l.kt)("h3",{id:"resolvestate"},"resolveState"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"resolveState :: ValueMap -> [Event ValueMap] -> (ValueMap, [Event ValueMap]) \n")),(0,l.kt)("h3",{id:"getn"},"getN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"getN :: Value -> Maybe Note \n")),(0,l.kt)("h3",{id:"getblob"},"getBlob"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"getBlob :: Value -> Maybe [Word8] \n")),(0,l.kt)("h3",{id:"getlist"},"getList"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"getList :: Value -> Maybe [Value] \n")),(0,l.kt)("h3",{id:"valuetopattern"},"valueToPattern"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"valueToPattern :: Value -> Pattern Value \n")),(0,l.kt)("h3",{id:"samedur"},"sameDur"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sameDur :: Event a -> Event a -> Bool \n")),(0,l.kt)("h3",{id:"groupeventsby"},"groupEventsBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"groupEventsBy :: Eq a => (Event a -> Event a -> Bool) -> [Event a] -> [[Event a]] \n")),(0,l.kt)("h3",{id:"collectevent"},"collectEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"collectEvent :: [Event a] -> Maybe (Event [a]) \n")),(0,l.kt)("h3",{id:"collecteventsby"},"collectEventsBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"collectEventsBy :: Eq a => (Event a -> Event a -> Bool) -> [Event a] -> [Event [a]] \n")),(0,l.kt)("h3",{id:"collectby"},"collectBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"collectBy :: Eq a => (Event a -> Event a -> Bool) -> Pattern a -> Pattern [a] \n")),(0,l.kt)("p",null,"collects all events satisfying the same constraint into a list"),(0,l.kt)("h3",{id:"collect"},"collect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"collect :: Eq a => Pattern a -> Pattern [a] \n")),(0,l.kt)("p",null,"collects all events occuring at the exact same time into a list"),(0,l.kt)("h3",{id:"uncollectevent"},"uncollectEvent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"uncollectEvent :: Event [a] -> [Event a] \n")),(0,l.kt)("h3",{id:"uncollectevents"},"uncollectEvents"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"uncollectEvents :: [Event [a]] -> [Event a] \n")),(0,l.kt)("h3",{id:"uncollect"},"uncollect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"uncollect :: Pattern [a] -> Pattern a \n")),(0,l.kt)("p",null,"merges all values in a list into one pattern by stacking the values"),(0,l.kt)("h3",{id:"module"},"module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"module Sound.Tidal.Time\n")))}c.isMDXComponent=!0}}]);