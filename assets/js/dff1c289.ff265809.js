"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[3792],{4137:function(e,n,t){t.d(n,{Zo:function(){return M},kt:function(){return N}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},M=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,M=s(e,["components","mdxType","originalType","parentName"]),g=u(t),N=i,T=g["".concat(c,".").concat(N)]||g[N]||l[N]||o;return t?r.createElement(T,a(a({ref:n},M),{},{components:t})):r.createElement(T,a({ref:n},M))}));function N(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3577:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return M},toc:function(){return l},default:function(){return N}});var r=t(7462),i=t(3366),o=(t(7294),t(4137)),a=["components"],s={sidebar_position:1},c="Manage Docs Versions",u={unversionedId:"tutorial-extras/manage-docs-versions",id:"tutorial-extras/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/docs/tutorial-extras/manage-docs-versions",editUrl:"https://github.com/juzibot/tech-blog/docs/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"},next:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"}},M={},l=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],g={toc:l};function N(e){var n=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,o.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,o.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,o.kt)("p",null,"Release a version 1.0 of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,o.kt)("p",null,"Your docs now have 2 versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,o.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,o.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,o.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,o.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Docs Version Dropdown",src:t(1126).Z,width:"25",height:"30"})),(0,o.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,o.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}N.isMDXComponent=!0},1126:function(e,n){n.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjVweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjUgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+bG9nbzwvdGl0bGU+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuS+p+i+ueagjy8t6IGK5aSp6K6w5b2VIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQuMDAwMDAwLCAtMzUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjAwMDAwMCwgMzUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5Y+l5a6i5a6dbG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wMDAwMjQsIDAuMjQwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC41ODU5OTk2LDMuNTkwMTU5OTMgQzE4LjE5NjU1OTYsMS4xOTc4Mzk5OCAxNS4zNjIzOTk3LDYuMDM5NjEzMjVlLTE0IDEyLjA4NDcxOTgsNi4wMzk2MTMyNWUtMTQgQzguODA1NTk5ODMsNi4wMzk2MTMyNWUtMTQgNS45NzE2Nzk4OCwxLjE5NzgzOTk4IDMuNTgzNjc5OTMsMy41OTAxNTk5MyBDMS4xOTM3NTk5OCw1Ljk4MzkxOTg4IC0xLjAyMTQwNTE4ZS0xMiw4LjgyMzExOTgyIC0xLjAyMTQwNTE4ZS0xMiwxMi4xMDU4Mzk4IEMtMS4wMjE0MDUxOGUtMTIsMTQuNzIzNTE5NyAwLjgwNDcxOTk4NCwxNy4xMjk3NTk3IDIuNDE2Nzk5OTUsMTkuMzI4MTU5NiBDNC4wMjc2Nzk5MiwyMS41MjYwNzk2IDYuMTk0ODc5ODgsMjMuMDE0NTU5NSA4LjkxNzkxOTgyLDIzLjc5NTAzOTUgTDguOTE3OTE5ODIsMjguMjE5OTE5NCBDMTkuMDg1NTE5NiwyNC43Njg0Nzk1IDI0LjE2OTY3OTUsMTkuMzk4OTU5NiAyNC4xNjk2Nzk1LDEyLjEwNTgzOTggQzI0LjE2OTY3OTUsOC44MjMxMTk4MiAyMi45NzQ0Nzk1LDUuOTgzOTE5ODggMjAuNTg1OTk5NiwzLjU5MDE1OTkzIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkM3OTBEIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC42NDc0MTU3LDE0Ljk1OTQzOTcgQzE0LjY0NzQxNTcsMTQuOTU5NDM5NyAxNC42NjMwMTU3LDE0Ljk0NDU1OTcgMTQuNjg5ODk1NywxNC45MTgzOTk3IEMxNS44NDM1NzU3LDE0LjIwMjk1OTcgMTYuNjEzOTc1NywxMy4wMjAyMzk3IDE2LjY0NzU3NTcsMTEuNjYwODc5OCBDMTYuNzAzNDk1Nyw5LjQwMTk5OTgxIDE0LjcxMDI5NTcsNy41MTk5MTk4NSAxMi4xOTUwOTU4LDcuNDU3Mjc5ODUgQzkuNjgwMzc1ODEsNy4zOTUxMTk4NSA3LjU5NjY5NTg1LDkuMTc1OTE5ODIgNy41NDA3NzU4NSwxMS40MzUyNzk4IEM3LjQ4NTA5NTg1LDEzLjY5NDM5OTcgOS40NzgyOTU4MSwxNS41NzU3NTk3IDExLjk5MzI1NTgsMTUuNjM4Mzk5NyBDMTIuMDk0Mjk1OCwxNS42NDE1MTk3IDEyLjE5MzE3NTgsMTUuNjM1Mjc5NyAxMi4yOTIyOTU4LDE1LjYzMjYzOTcgQzEyLjI5MjI5NTgsMTUuNjMzMTE5NyAxMi43MjA2OTU3LDE1LjkzNjIzOTcgMTMuMTkwNjE1NywxNi4xNzgxNTk3IEMxMy43MTQ1MzU3LDE2LjQ0NzE5OTcgMTQuMzU4MjE1NywxNi42Mjc5MTk3IDE0LjczMjM3NTcsMTYuNTk1NzU5NyBDMTUuMjI3NDk1NywxNi41NTMyNzk3IDE1LjMwNTQ5NTcsMTYuMjM0Nzk5NyAxNS4yMDYzNzU3LDE2LjA3MTgzOTcgQzE1LjExMjI5NTcsMTUuOTE2NTU5NyAxNC45NDc4OTU3LDE1LjkwOTU5OTcgMTQuNzg5MDE1NywxNS44MDk3NTk3IEMxNC41OTgyMTU3LDE1LjY4OTI3OTcgMTQuNTEzNzM1NywxNS42MjgzMTk3IDE0LjQzNTI1NTcsMTUuNDQxMzU5NyBDMTQuMzQ1MjU1NywxNS4yMjYwNzk3IDE0LjQ0OTQxNTcsMTUuMDY2MjM5NyAxNC42NDc0MTU3LDE0Ljk1OTQzOTciIGlkPSJGaWxsLTMiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="}}]);