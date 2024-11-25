"use strict";(self.webpackChunkobsidian_jira_issue=self.webpackChunkobsidian_jira_issue||[]).push([[970],{8860:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var a=n(7953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,g=p["".concat(c,".").concat(y)]||p[y]||d[y]||i;return n?a.createElement(g,o(o({ref:t},l),{},{components:n})):a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(991),r=(n(7953),n(8860));const i={sidebar_position:3},o="Basic authentication",s={unversionedId:"get-started/basic-authentication",id:"get-started/basic-authentication",title:"Basic authentication",description:"Access the plugin options using and in the Connection section configure the host and authentication.",source:"@site/docs/get-started/basic-authentication.md",sourceDirName:"get-started",slug:"/get-started/basic-authentication",permalink:"/obsidian-jira-issue/docs/get-started/basic-authentication",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/obsidian-jira-issue/docs/get-started/installation"},next:{title:"Basic usage",permalink:"/obsidian-jira-issue/docs/get-started/basic-usage"}},c={},u=[{value:"Host",id:"host",level:2},{value:"Authentication Types",id:"authentication-types",level:2},{value:"Username and password",id:"username-and-password",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"basic-authentication"},"Basic authentication"),(0,r.yg)("p",null,"Access the plugin options using and in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Connection")," section configure the ",(0,r.yg)("inlineCode",{parentName:"p"},"host")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"authentication"),"."),(0,r.yg)("h2",{id:"host"},"Host"),(0,r.yg)("p",null,"In case of Atlassian Jira Server or Jira Cloud the host is the base URL of your jira instance."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/authentication#host"},"Read more...")),(0,r.yg)("h2",{id:"authentication-types"},"Authentication Types"),(0,r.yg)("p",null,"The authentication type depends on the type of Jira you use:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Open"),": guest mode for open source projects"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Basic Authentication"),": for Jira Server and Jira Cloud")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/authentication#authentication-types"},"Read more...")),(0,r.yg)("h3",{id:"username-and-password"},"Username and password"),(0,r.yg)("p",null,"If you chose the ",(0,r.yg)("inlineCode",{parentName:"p"},"Basic Authentication")," you need to provide the username and password to authenticate with the server."),(0,r.yg)("p",null,"In case of Jira Server, the username and password are the same as you use to login."),(0,r.yg)("p",null,"On the other hand, if you use Jira Cloud the username is your email and the password needs to be filled with an APIKey."),(0,r.yg)("p",null,"You can create a new API token in Jira Cloud from ",(0,r.yg)("inlineCode",{parentName:"p"},"Account Settings > Security > Create and manage API tokens")," (",(0,r.yg)("a",{parentName:"p",href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/"},"Official Documentation"),")."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/configuration/authentication#username-and-password"},"Read more...")))}d.isMDXComponent=!0}}]);