(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(9),r=(n(0),n(198)),i=n(200),s={id:"how-to-write-documentation",title:"Documentation Guide Lines",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Documentation How To",description:"Writing is an art!",keywords:["sap","cloud","sdk"],image:null},c={id:"dzen/how-to-write-documentation",title:"Documentation Guide Lines",description:"Writing is an art!",source:"@site/docs/dzen/how-to-write-docs.md",permalink:"/cloud-sdk/docs/dzen/how-to-write-documentation",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/dzen/how-to-write-docs.md",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1590437078,sidebar_label:"Documentation How To"},l=[{value:"Cloud SDK Documentation Guidelines",id:"cloud-sdk-documentation-guidelines",children:[]},{value:"Markdown hints",id:"markdown-hints",children:[]},{value:"Take ownership",id:"take-ownership",children:[]},{value:"General notes on Writing",id:"general-notes-on-writing",children:[{value:"Basic recommendations about writing",id:"basic-recommendations-about-writing",children:[]}]}],u={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cloud-sdk-documentation-guidelines"},"Cloud SDK Documentation Guidelines"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you can write code, you can write docs.")),Object(r.b)("h2",{id:"markdown-hints"},"Markdown hints"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start your page with ",Object(r.b)("inlineCode",{parentName:"li"},"H2")," because ",Object(r.b)("inlineCode",{parentName:"li"},"H1")," is for ",Object(r.b)("inlineCode",{parentName:"li"},"title")," specified in the ",Object(r.b)("inlineCode",{parentName:"li"},"meta-header")),Object(r.b)("li",{parentName:"ul"},"If you need ",Object(r.b)("inlineCode",{parentName:"li"},"Tabs")," or other custom react component hoist it to the top of the page after the ",Object(r.b)("inlineCode",{parentName:"li"},"meta-header")),Object(r.b)("li",{parentName:"ul"},"I recommend creating snippets for your editor for most used components like: ",Object(r.b)("inlineCode",{parentName:"li"},"meta-header"),", ",Object(r.b)("inlineCode",{parentName:"li"},"admonitions"),", ",Object(r.b)("inlineCode",{parentName:"li"},"tabs"),", etc..."),Object(r.b)("li",{parentName:"ul"},"Run docs locally to ensure your page looks nice, some design ideas in your head my looked different with additional context")),Object(r.b)("h2",{id:"take-ownership"},"Take ownership"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you see a typo - fix it and make a pull request"),Object(r.b)("li",{parentName:"ul"},"If an action to update yours or someone's article takes less then 10-15 minutes - just do it."),Object(r.b)("li",{parentName:"ul"},"If smth can't be fixed by you - notify an author or respective team.")),Object(r.b)("h2",{id:"general-notes-on-writing"},"General notes on Writing"),Object(r.b)("p",null,"People who do not write frequently often struggle with putting words to paper. It's normal. A mental-ease soon to come with practice."),Object(r.b)("h3",{id:"basic-recommendations-about-writing"},"Basic recommendations about writing"),Object(r.b)("h4",{id:"write-as-you-speak"},"Write as you speak"),Object(r.b)("p",null,"Imagine you're explaining what Cloud SDK does to your friend with enough tech background but without SAP context. Your\nMom would also work."),Object(r.b)("p",null,"Many people think writing is different from speaking. Not that much. Speaking is a natural way to transfer information for\nhumans. Write as you're chatting to someone, answering questions, or asking questions to yourself. Then edit where\nthere's a lack of structure."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Such texts are much easier to read and comprehend than those written in cumbersome and complicated way.")),Object(r.b)("h5",{id:"examples-of-poor-docsumentation"},"Examples of poor docsumentation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html"}),"If you need an example of bad documentation check Odata Sepcification")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.odata.org/getting-started/basic-tutorial/"}),"On the other hand, their Getting Started guide is quite OK"))),Object(r.b)("h4",{id:"use-simple-words"},"Use simple words"),Object(r.b)("p",null,"Don't try to over-smart yourself. Use the most frequent term for the notion. Check what others use if not sure. Be\nconsistent. Google a couple of options if in doubt. Be careful with acronyms, they are . Notice, ",Object(r.b)("inlineCode",{parentName:"p"},"careful")," is better then\n",Object(r.b)("inlineCode",{parentName:"p"},"cautious"),", because careful is higher frequency word for this context."),Object(r.b)("h4",{id:"more-active-case"},"More active case"),Object(r.b)("p",null,"Documentation is written or someone writes it? Both. When it's you who's writing is, please, use active voice where\nappropriate. Instead of ",Object(r.b)("strong",{parentName:"p"},"This feature was developed by us so that you are made happy")," try to use smth like this ",Object(r.b)("strong",{parentName:"p"},"We\ndeveloped this feature to make you happy"),". We naturally speak in an active voice. When appropriate passive voice if fine."),Object(r.b)("h4",{id:"use-short-sentences"},"Use short sentences"),Object(r.b)("p",null,"Make sentences as long as needed, but as short as possible. If you have a second subordinate clause something is\ndefinitely getting wrong."),Object(r.b)("h4",{id:"use-examples"},"Use examples"),Object(r.b)("p",null,"They are better than many abstract terms following each other. Our minds were not made for this kind of work in the\nfirst place. A good example helps connecting dots between concepts and builds beautiful memory associations."),Object(r.b)("h4",{id:"build-upon-the-context"},"Build upon the context"),Object(r.b)("p",null,"The same as defining a function for a code reusability context allows us to re-use already introduced concepts. It makes\nthe explanation more concise, easy to read and allows for scalable writing. Make sure there's just enough context introduced\nand provide links or reminders where it might be lacking."),Object(r.b)("h4",{id:"use-spelling-and-grammar-checking"},"Use spelling and grammar checking"),Object(r.b)("p",null,"Linting, code style, static types checking, typos. Writing is no different from coding here. I found 16 issues in this\ndocument after checking it with free version of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.grammarly.com/"}),"Grammarly")," ."),Object(r.b)("h4",{id:"steal-relentlessly"},'"Steal" relentlessly'),Object(r.b)("p",null,"Think if someone has already documented what you now want to document. Use it as an example! Take parts of it if\nrelevant. Be mindful and check copywrites if copying too much. Bookmark a couple of favorite documentation web-sites\nand visit them for inspiration. Think of Google Cloud SDK, Graph QL, React, etc..."),Object(r.b)("h4",{id:"ask-for-review"},"Ask for review"),Object(r.b)("p",null,"Yeah. Pull requests a new way."),Object(r.b)("h4",{id:"avoid-variant-reading"},"Avoid variant reading"),Object(r.b)("p",null,"Make sure you'll be understood one way and the one way only. For example, try to understand and make a single\ninterpretation for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_ControlInformationtypeodatatype"}),"odata.type meta\nfield"),". Don't spend too much time on it..."),Object(r.b)("h4",{id:"mvp"},"MVP"),Object(r.b)("p",null,"Don't be hard on yourself. Make smth imperfect and improve with every versions. Any documentation is better than no\ndocumentation. Use feedback to iterate. Involve collaborators. We're all not writers here."),Object(r.b)("h4",{id:"inverted-pyramid-style"},"Inverted Pyramid Style"),Object(r.b)("p",null,"Think a bit before getting to the text editor. Or start with an outline. Same as with structuring your class methods and\nvariables it makes eventual writing much simpler and often faster. Here's a method from a journalism world that enriches\nthe coding paradigm example I used before with valuable context. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)"}),"It's called inverted pyramid and might be useful for\ndocumentation, in the same way, it's useful for news.")),Object(r.b)("img",{alt:"Inverted Pyramid of writing",src:Object(i.a)("img/docs/inverted-pyramid.png")}),";")}d.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},199:function(e,t,n){"use strict";var o=n(0),a=n(49);t.a=function(){return Object(o.useContext)(a.a)}},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(202);var o=n(199);function a(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},202:function(e,t,n){"use strict";var o=n(17),a=n(35),r=n(203),i="".startsWith;o(o.P+o.F*n(204)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return i?i.call(t,o,n):t.slice(n,n+o.length)===o}})},203:function(e,t,n){var o=n(69),a=n(23);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},204:function(e,t,n){var o=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);