(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{177:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),o=t(9),r=(t(0),t(211)),l={id:"change-log-level",title:"Change log level",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Increase log level",description:"Change log levels for your Cloud SDK application for efficient debugging",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},i={id:"java/tips-and-tricks/change-log-level",title:"Change log level",description:"Change log levels for your Cloud SDK application for efficient debugging",source:"@site/docs/java/tips-and-tricks/logging.md",permalink:"/cloud-sdk/docs/java/tips-and-tricks/change-log-level",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/tips-and-tricks/logging.md",lastUpdatedBy:"Emdee89",lastUpdatedAt:1593443001,sidebar_label:"Increase log level",sidebar:"someSidebar",previous:{title:"Multi Tenancy with the Thread Context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"},next:{title:"Getting started on Linux",permalink:"/cloud-sdk/docs/java/guides/sap-cloud-sdk-linux-how-to"}},c=[{value:"When running app/debugging on localhost",id:"when-running-appdebugging-on-localhost",children:[{value:"Change Default Log Level",id:"change-default-log-level",children:[]},{value:"Change Log Level for specific Package",id:"change-log-level-for-specific-package",children:[]}]},{value:"After deploying to Cloud Foundry",id:"after-deploying-to-cloud-foundry",children:[{value:"<strong>TomEE</strong> based application",id:"tomee-based-application",children:[]}]},{value:"<strong>Spring Boot</strong> based application",id:"spring-boot-based-application",children:[]}],p={rightToc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"when-running-appdebugging-on-localhost"},"When running app/debugging on localhost"),Object(r.b)("p",null,"For applications that run on localhost you can influence the log level settings via Maven."),Object(r.b)("h3",{id:"change-default-log-level"},"Change Default Log Level"),Object(r.b)("p",null,"To change the default log level, add this argument to your ",Object(r.b)("inlineCode",{parentName:"p"},"mvn")," run command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-makefile"}),"-Dorg.slf4j.simpleLogger.defaultLogLevel=debug\n")),Object(r.b)("h3",{id:"change-log-level-for-specific-package"},"Change Log Level for specific Package"),Object(r.b)("p",null,"To change the log level for a specific package and all its sub packages, add this argument to your ",Object(r.b)("inlineCode",{parentName:"p"},"mvn")," run command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-makefile"}),"-Dorg.slf4j.simpleLogger.log.package.to.change.log.level.for=debug\n")),Object(r.b)("h2",{id:"after-deploying-to-cloud-foundry"},"After deploying to Cloud Foundry"),Object(r.b)("p",null,"For applications deployed on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/cp-cf-fundamentals.html"}),"SAP CF")," you have to\nconfigure individual log levels for specific packages of your application and third-party dependencies, e.g. ",Object(r.b)("em",{parentName:"p"},"SAP Cloud\nSDK")," or ",Object(r.b)("em",{parentName:"p"},"SAP Cloud Platform SDK for Service Development")," or ",Object(r.b)("em",{parentName:"p"},"Apache HTTP components"),". Here is how you do it for different Java Frameworks."),Object(r.b)("h3",{id:"tomee-based-application"},Object(r.b)("strong",{parentName:"h3"},"TomEE")," based application"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Edit the ",Object(r.b)("inlineCode",{parentName:"li"},"manifest.yml")," to include the following ",Object(r.b)("inlineCode",{parentName:"li"},"env")," entry for the ",Object(r.b)("inlineCode",{parentName:"li"},"SET_LOGGING_LEVEL")," environment variable:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-makefile"}),"SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO, org.apache.http.wire: DEBUG}'\n")),Object(r.b)("p",null,"You can customize the ",Object(r.b)("inlineCode",{parentName:"p"},"logging level")," to reflect you debugging needs."),Object(r.b)("h2",{id:"spring-boot-based-application"},Object(r.b)("strong",{parentName:"h2"},"Spring Boot")," based application"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"We assume the ",Object(r.b)("inlineCode",{parentName:"li"},"logback")," framework is used")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Edit or create a file: ",Object(r.b)("inlineCode",{parentName:"li"},"application/src/main/resources/logback-spring.xml"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'    <?xml version="1.0" encoding="UTF-8"?>\n    <configuration>\n        <springProfile name="!cloud">\n            <include resource="org/springframework/boot/logging/logback/base.xml"/>\n            <root level="INFO"/>\n            <logger name="org.springframework.web" level="INFO"/>\n        </springProfile>\n\n        <springProfile name="cloud">\n            <appender name="STDOUT-JSON" class="ch.qos.logback.core.ConsoleAppender">\n                <encoder class="com.sap.hcp.cf.logback.encoder.JsonEncoder"/>\n            </appender>\n            <logger name="org.springframework.web" level="INFO"/>\n            <logger name="com.sap.cloud.sdk" level="INFO"/>\n            <logger name="org.apache.http.wire" level="DEBUG"/>\n            <root level="INFO">\n                <appender-ref ref="STDOUT-JSON"/>\n            </root>\n        </springProfile>\n    </configuration>\n')),Object(r.b)("p",null,"You can customize the ",Object(r.b)("inlineCode",{parentName:"p"},"logging level")," to reflect you debugging needs."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Pay attention to the different profile settings.")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure the ",Object(r.b)("inlineCode",{parentName:"p"},"cloud")," profile is active for deployed applications. Edit the ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.yml")," to include the following ",Object(r.b)("inlineCode",{parentName:"p"},"env")," entry for the ",Object(r.b)("inlineCode",{parentName:"p"},"SPRING_PROFILES_ACTIVE")," environment variable:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-makefile"}),"SPRING_PROFILES_ACTIVE: 'cloud'\n")))))}d.isMDXComponent=!0},211:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),g=a,u=s["".concat(l,".").concat(g)]||s[g]||b[g]||r;return t?o.a.createElement(u,i(i({ref:n},p),{},{components:t})):o.a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);