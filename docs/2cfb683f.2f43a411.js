(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,O=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(O,s({ref:t},c,{components:n})):a.a.createElement(O,s({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),i=(n(0),n(113)),o={id:"contributing",title:"Contributing",sidebar_label:"Contributing",description:"Contributing to Assistant Relay"},s={id:"contributing",title:"Contributing",description:"Contributing to Assistant Relay",source:"@site/docs\\contributing.md",permalink:"/assistant-relay/docs/contributing",sidebar_label:"Contributing",sidebar:"docs",previous:{title:"Introduction",permalink:"/assistant-relay/docs/introduction"},next:{title:"Installation",permalink:"/assistant-relay/docs/getting-started/installation"}},l=[{value:"Getting Involved",id:"getting-involved",children:[{value:"Join our Discord Channel",id:"join-our-discord-channel",children:[]}]},{value:"Our development process",id:"our-development-process",children:[{value:"Reporting a new issue",id:"reporting-a-new-issue",children:[]},{value:"Requesting new features",id:"requesting-new-features",children:[]}]},{value:"Developing Assistant Relay",id:"developing-assistant-relay",children:[{value:"Installation",id:"installation",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Assistant Relay is in active development, and welcomes contributions to assist with bug fixes and feature enhancements."),Object(i.b)("h2",{id:"getting-involved"},"Getting Involved"),Object(i.b)("p",null,"Contributing to Assistant Relay doesn't always involve writing code.  There are many ways to get involved:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Answering questions on ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/greghesp/assistant-relay/issues"}),"GitHub")," or ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://discord.gg/Jz8AM9k"}),"Discord")),Object(i.b)("li",{parentName:"ul"},"Contributing to this documentation. (Check out ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://v2.docusaurus.io/docs/"}),"Docusaurus")," for guides on how to edit these docs)")),Object(i.b)("h3",{id:"join-our-discord-channel"},"Join our Discord Channel"),Object(i.b)("p",null,"If you fancy contributing to Assistant Relay as a developer, join our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.gg/MqTSSqa"}),"#assistant-relay-development")," channel on Discord"),Object(i.b)("h2",{id:"our-development-process"},"Our development process"),Object(i.b)("h3",{id:"reporting-a-new-issue"},"Reporting a new issue"),Object(i.b)("p",null,"When ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/greghesp/assistant-relay/issues/new/choose"}),"reporting a new issue"),", please make sure you fill out the provided template where possible.\nFilling out this template helps us look for the issue faster as the basic questions have been answered."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"One issue, one bug"),": One bug per issue please"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"How can we replicate it"),": Please complete the template and list the steps to reproduce the issue")),Object(i.b)("h3",{id:"requesting-new-features"},"Requesting new features"),Object(i.b)("p",null,"Whilst feature requests are always welcomed, we can't guarantee they will be implemented.  Assistant Relay is built as a non commercial, hobbyist solution and all features are built in free time."),Object(i.b)("p",null,"If you wish to request a new feature, please complete the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/greghesp/assistant-relay/issues/new/choose"}),"Feature Request")," template"),Object(i.b)("h2",{id:"developing-assistant-relay"},"Developing Assistant Relay"),Object(i.b)("p",null,"Assistant Relay uses Express to power the REST API and connection to the Google Assistant SDK, and React to power the web dashboard.  When a new release is issued, React is bundled and included in the Express server."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"IF YOU ARE NOT DEVELOPING ASSISTANT RELAY, PLEASE FOLLOW THE INSTALLATION INSTRUCTIONS UNDER ",Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"getting-started/installation"}),"GETTING STARTED")," INSTEAD"))),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Ensure that you have ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js")," installed"),Object(i.b)("li",{parentName:"ol"},"After cloning the repository, run ",Object(i.b)("inlineCode",{parentName:"li"},"npm i")," in both the ",Object(i.b)("inlineCode",{parentName:"li"},"relay")," and ",Object(i.b)("inlineCode",{parentName:"li"},"client")," directories"),Object(i.b)("li",{parentName:"ol"},"Go into the ",Object(i.b)("inlineCode",{parentName:"li"},"client")," directory and run ",Object(i.b)("inlineCode",{parentName:"li"},"npm run start")," to start the React instance"),Object(i.b)("li",{parentName:"ol"},"Go into the ",Object(i.b)("inlineCode",{parentName:"li"},"relay")," directory and run ",Object(i.b)("inlineCode",{parentName:"li"},"npm run dev")," to start the Express server")))}u.isMDXComponent=!0}}]);