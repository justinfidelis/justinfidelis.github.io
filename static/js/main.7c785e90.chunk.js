(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i(4),c=i.n(n),r=(i(9),i(2)),a=i(0),l=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(a.jsx)("a",{id:"header-logo",href:".",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:Object(a.jsx)("svg",{height:"50",width:"50",children:Object(a.jsxs)("g",{id:"g852",transform:"matrix(1.8,0,0,1.8,-4.2,-5.8)",children:[Object(a.jsx)("path",{id:"path928",fill:"none",fillOpacity:"0.15",stroke:i?"#cccccc":"#ffffff",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",d:"M 16.252976,29.697918 5.4276562,23.447917 V 10.947916 L 16.252976,4.6979154 27.078296,10.947914 v 12.500003 z"}),Object(a.jsx)("path",{fill:"none",stroke:i?"#cccccc":"#ffffff",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",d:"m 12.262096,11.881168 v 7 0 c 0,1.656855 -1.119288,3.000001 -2.5,3.000001",id:"path839-9-3-0-5-6-9"}),Object(a.jsx)("path",{fill:"none",stroke:i?"#cccccc":"#ffffff",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",d:"m 16.641262,14.852002 v 6.5",id:"path1321-3-3-6"}),Object(a.jsx)("path",{id:"path1321-4-2-7-4",d:"m 21.932929,14.852002 v 6.5",fill:"none",stroke:i?"#cccccc":"#ffffff",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}),Object(a.jsx)("path",{id:"path1321-3-1-0-1",d:"m 19.287095,18.852002 v 2.5",fill:"none",stroke:i?"#cccccc":"#ffffff",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"})]})})})},o=function(e){return Object(a.jsxs)("ul",{id:"horizontal"===e.mode?"header-list-horizontal":"header-list-vertical",children:[Object(a.jsx)("li",{id:"horizontal"===e.mode?"header-list-item-horizontal":"header-list-item-vertical",children:Object(a.jsx)("a",{className:"header-list-item-link",href:"#about",children:"About"})}),Object(a.jsx)("li",{id:"horizontal"===e.mode?"header-list-item-horizontal":"header-list-item-vertical",children:Object(a.jsx)("a",{className:"header-list-item-link",href:"#skills",children:"Skills"})}),Object(a.jsx)("li",{id:"horizontal"===e.mode?"header-list-item-horizontal":"header-list-item-vertical",children:Object(a.jsx)("a",{className:"header-list-item-link",href:"#education",children:"Education"})}),Object(a.jsx)("li",{id:"horizontal"===e.mode?"header-list-item-horizontal":"header-list-item-vertical",children:Object(a.jsx)("a",{className:"header-list-item-link",href:"#experience",children:"Experience"})}),Object(a.jsx)("li",{id:"horizontal"===e.mode?"header-list-item-horizontal":"header-list-item-vertical",children:Object(a.jsx)("a",{className:"header-list-item-link",href:"#contact",children:"Contact"})})]})},d=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(a.jsx)("div",{id:"nav-logo-inner",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:Object(a.jsx)("svg",{height:"50",width:"50",children:Object(a.jsxs)("g",{transform:"matrix(1.1,0,0,1.1,3.2,8.5)",children:[Object(a.jsx)("path",{id:"path835",d:"M 5.9999995,6 H 34",fill:"none",stroke:i?"#CCCCCC":"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}),Object(a.jsx)("path",{d:"M 5.9999998,15.999999 H 34",id:"path835-6",fill:"none",stroke:i?"#CCCCCC":"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"}),Object(a.jsx)("path",{d:"M 6,26 H 34",id:"path835-8",fill:"none",stroke:i?"#CCCCCC":"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"})]})})})},j=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),i=t[0],n=t[1],c=Object(s.useState)(!0),j=Object(r.a)(c,2),h=j[0],b=j[1],m=Object(s.useState)(!1),O=Object(r.a)(m,2),x=O[0],f=O[1],u=Object(s.useState)(0),p=Object(r.a)(u,2),k=p[0],v=p[1],N=Object(s.useState)(!0),g=Object(r.a)(N,2),y=g[0],L=g[1],M=Object(s.useState)(!0),C=Object(r.a)(M,2),S=C[0],w=C[1];return Object(s.useEffect)((function(){var e=function(){var e=window.pageYOffset;b(x||!S||e<i||e<10),n(e),w(!0)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[S,i,x]),Object(s.useEffect)((function(){var e=function(){var e=window.innerWidth,t=y?e<660:e>=660;L(e>=660),w(!!y||(!!t||S))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[y,S]),Object(s.useEffect)((function(){var e=function(){f(!0),clearTimeout(k);var e=setTimeout((function(){f(!1)}),100);v(e)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[x,k]),Object(s.useEffect)((function(){L(window.innerWidth>=660),w(!0)}),[]),Object(a.jsxs)("div",{id:"header",style:{top:h?"0":"-67px"},children:[Object(a.jsx)("div",{id:"header-content-container",style:{borderBottomWidth:S?"0px":"2px",transitionDelay:S?"0.5s":"0s"},children:Object(a.jsxs)("div",{id:"header-content",children:[Object(a.jsx)(l,{}),y?Object(a.jsx)(o,{mode:"horizontal"}):Object(a.jsx)("button",{id:"nav-logo-outer",onClick:function(){return w(!S)},children:Object(a.jsx)(d,{})})]})}),Object(a.jsx)("div",{id:"header-list-container",style:{height:S?"0px":"196px"},children:Object(a.jsx)(o,{mode:"vertical"})})]})},h=function(){return Object(a.jsx)("div",{id:"content-intro",children:Object(a.jsxs)("div",{id:"intro-container",children:[Object(a.jsx)("div",{id:"intro-greeting",children:"Hi, my name is"}),Object(a.jsx)("div",{id:"intro-name",children:"Justin Wong."}),Object(a.jsx)("div",{id:"intro-description",children:"I'm currently studying computer engineering at NUS."})]})})},b=function(){return Object(a.jsxs)("div",{id:"about",className:"section-container",children:[Object(a.jsx)("h2",{children:"About"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"about-container",children:[Object(a.jsx)("div",{id:"about-text-container",children:Object(a.jsxs)("div",{className:"section-text",children:[Object(a.jsx)("p",{children:" Hello! My name is Justin and I am currently a Year 2 computer engineering student at the National University of Singapore. "}),Object(a.jsx)("p",{children:" I am also pursuing a specialisation in Internet of Things (IoT) and have an interest in Artificial Intelligence, Computer Vision and Computer Networking. "})]})}),Object(a.jsx)("div",{id:"about-image-container",children:Object(a.jsx)("img",{className:"about-image",src:"self-pic.jpg",alt:""})})]})]})},m=function(){return Object(a.jsxs)("div",{id:"skills",className:"section-container",children:[Object(a.jsx)("h2",{children:"Skills"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"skills-container",children:[Object(a.jsxs)("div",{className:"skills-card",children:[Object(a.jsx)("h3",{className:"card-title",children:"Programming Languages"}),Object(a.jsx)("hr",{className:"card-break"}),Object(a.jsxs)("ul",{className:"skills-list",children:[Object(a.jsx)("li",{className:"skills-list-item",children:"C"}),Object(a.jsx)("li",{className:"skills-list-item",children:"C++"}),Object(a.jsx)("li",{className:"skills-list-item",children:"Java"}),Object(a.jsx)("li",{className:"skills-list-item",children:"Python"})]})]}),Object(a.jsxs)("div",{className:"skills-card",children:[Object(a.jsx)("h3",{className:"card-title",children:"Hardware Technologies"}),Object(a.jsx)("hr",{className:"card-break"}),Object(a.jsxs)("ul",{className:"skills-list",children:[Object(a.jsx)("li",{className:"skills-list-item",children:"Verilog"}),Object(a.jsx)("li",{className:"skills-list-item",children:"Arduino"}),Object(a.jsx)("li",{className:"skills-list-item",children:"Raspberry Pi"}),Object(a.jsx)("li",{className:"skills-list-item",children:"ARM"}),Object(a.jsx)("li",{className:"skills-list-item",children:"ROS"})]})]}),Object(a.jsxs)("div",{className:"skills-card",children:[Object(a.jsx)("h3",{className:"card-title",children:"Database Management"}),Object(a.jsx)("hr",{className:"card-break"}),Object(a.jsxs)("ul",{className:"skills-list",children:[Object(a.jsx)("li",{className:"skills-list-item",children:"PostgreSQL"}),Object(a.jsx)("li",{className:"skills-list-item",children:"MySQL"})]})]}),Object(a.jsxs)("div",{className:"skills-card",children:[Object(a.jsx)("h3",{className:"card-title",children:"Web Development"}),Object(a.jsx)("hr",{className:"card-break"}),Object(a.jsxs)("ul",{className:"skills-list",children:[Object(a.jsx)("li",{className:"skills-list-item",children:"HTML"}),Object(a.jsx)("li",{className:"skills-list-item",children:"CSS"}),Object(a.jsx)("li",{className:"skills-list-item",children:"JavaScript"}),Object(a.jsx)("li",{className:"skills-list-item",children:"ReactJS"})]})]})]})]})},O=function(){return Object(a.jsxs)("div",{id:"education",className:"section-container",children:[Object(a.jsx)("h2",{children:"Education"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"section-text",children:[Object(a.jsxs)("div",{className:"education-container",children:[Object(a.jsx)("h3",{className:"education-header",children:"National University of Singapore"}),Object(a.jsx)("small",{className:"education-date",children:"August 2020 - Present (Graduating in May 2024)"}),Object(a.jsxs)("div",{className:"education-text",children:["B.Eng. in Computer Engineering, Honours ",Object(a.jsx)("br",{}),"Specialisation in Internet of Things ",Object(a.jsx)("br",{}),"Awarded NUS Merit Scholarship ",Object(a.jsx)("br",{}),"Current CAP: 4.97/5.0"]})]}),Object(a.jsxs)("div",{className:"education-container",children:[Object(a.jsx)("h3",{className:"education-header",children:"NUS High School of Math and Science"}),Object(a.jsx)("small",{className:"education-date",children:"2012 - 2017"}),Object(a.jsxs)("div",{className:"education-text",children:["NUS High School Diploma (High Distinction) ",Object(a.jsx)("br",{}),"Honours in Chemistry and Physics, and Major in Mathematics",Object(a.jsx)("br",{}),"Graduation CAP: 4.6/5.0"]})]})]})]})},x=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),i=t[0],n=t[1],c=Object(a.jsxs)("div",{id:"experience-list",children:[Object(a.jsx)("button",{className:0===i?"experience-list-item-selected":"experience-list-item",onClick:function(){return n(0)},children:"Singapore Armed Forces"}),Object(a.jsx)("button",{className:1===i?"experience-list-item-selected":"experience-list-item",onClick:function(){return n(1)},children:"DSO National Laboratories"})]}),l=Object(a.jsxs)("div",{id:"experience-content-container",children:[Object(a.jsxs)("div",{className:"experience-content",style:0===i?{display:"flex"}:{display:"none"},children:[Object(a.jsx)("h3",{className:"experience-header",children:"Singapore Armed Forces"}),Object(a.jsx)("small",{className:"experience-role",children:"Admin Supervisor & Section Trainer"}),Object(a.jsx)("small",{className:"experience-date",children:"April 2018 - April 2020"}),Object(a.jsxs)("div",{className:"experience-text",children:[Object(a.jsx)("p",{children:"Conducted lessons for 12 batches of trainees on the responsibilities and requisite technical knowledge of an admin support assistant."}),Object(a.jsx)("p",{children:"Managed administrative work at the company level, including management of personal data and consolidation of course results."}),Object(a.jsx)("p",{children:"Coordinated the implementation of an online platform to support the conduct of the course."}),Object(a.jsx)("p",{children:"Received the MINDEF Service Excellence Award for Q1 2020."})]})]}),Object(a.jsxs)("div",{className:"experience-content",style:1===i?{display:"flex"}:{display:"none"},children:[Object(a.jsx)("h3",{className:"experience-header",children:"DSO National Laboratories"}),Object(a.jsx)("small",{className:"experience-role",children:"Intern"}),Object(a.jsx)("small",{className:"experience-date",children:"Feb 2018 - April 2020"}),Object(a.jsx)("div",{className:"experience-text",children:Object(a.jsx)("p",{children:"Programmed a C++ algorithm for the extrinsic calibration of a Camera-LiDAR System."})})]})]});return Object(a.jsxs)("div",{id:"experience",className:"section-container",children:[Object(a.jsx)("h2",{children:"Experience"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{id:"experience-container",children:[c,l]})]})},f=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(a.jsx)("a",{className:"contact-logo-container",href:"mailto:justinfidelis@gmail.com",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:Object(a.jsx)("svg",{height:"70",width:"70",children:Object(a.jsxs)("g",{transform:"matrix(0.9,0,0,0.9,-1.1,0)",children:[Object(a.jsx)("path",{id:"path1602",fill:"none",stroke:i?"#39E5D1":"#ffffff",strokeWidth:"2.2",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",d:"M 7.6027863,17.344897 40.000003,44.529395 v 0 L 72.397221,17.344896"}),Object(a.jsx)("path",{id:"path1689",fill:"none",stroke:i?"#39E5D1":"#ffffff",strokeWidth:"2.2",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",d:"M 34.601977,40.000088 7.6030299,62.654898"}),Object(a.jsx)("path",{id:"path1686",fill:"none",stroke:i?"#39E5D1":"#ffffff",strokeWidth:"2.2",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",d:"M 45.398022,40.000088 72.39697,62.654898"}),Object(a.jsx)("path",{id:"rect1426",fill:"none",stroke:i?"#39E5D1":"#ffffff",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1",d:"m 11,16 h 58 c 2.77,0 5,2.23 5,5 v 38 c 0,2.77 -2.23,5 -5,5 H 11 C 8.23,64 6,61.77 6,59 V 21 c 0,-2.77 2.23,-5 5,-5 z"})]})})})},u=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(a.jsx)("a",{className:"contact-logo-container",href:"https://github.com/justinfidelis/",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:Object(a.jsx)("svg",{height:"70",width:"70",children:Object(a.jsx)("g",{id:"g855",transform:"matrix(1.5,0,0,1.5,3,3)",children:Object(a.jsx)("path",{id:"path1033",fill:"none",fillOpacity:"1",fillRule:"evenodd",stroke:i?"#39E5D1":"#ffffff",strokeWidth:"1.2",d:"M 21.30354,0 C 9.53946,0 0,9.53735 0,21.30354 c 0,9.41211 6.10411,17.39759 14.56866,20.21452 1.06468,0.19721 1.45556,-0.46214 1.45556,-1.02482 0,-0.50764 -0.0198,-2.18616 -0.0289,-3.96628 -5.92666,1.2887 -7.17726,-2.51354 -7.17726,-2.51354 -0.96908,-2.46203 -2.36538,-3.11714 -2.36538,-3.11714 -1.93287,-1.32221 0.1457,-1.29505 0.1457,-1.29505 2.13925,0.15028 3.26567,2.19569 3.26567,2.19569 1.90006,3.25649 4.98369,2.31493 6.19936,1.77059 0.19156,-1.37654 0.7433,-2.31669 1.35255,-2.84868 -4.73181,-0.53834 -9.70598,-2.36538 -9.70598,-10.5283 0,-2.32551 0.83221,-4.22592 2.19499,-5.71782 -0.22119,-0.53693 -0.95039,-2.70369 0.20673,-5.6381 0,0 1.78893,-0.5722 5.85963,2.18405 1.69933,-0.47202 3.52178,-0.70873 5.33224,-0.7172 1.81046,0.008 3.63432,0.24518 5.33682,0.7172 4.06612,-2.75625 5.85259,-2.18405 5.85259,-2.18405 1.15958,2.93441 0.43038,5.10117 0.20919,5.6381 1.36596,1.4919 2.19216,3.39231 2.19216,5.71782 0,8.18268 -4.98369,9.98396 -9.72749,10.51137 0.76412,0.6611 1.44498,1.95756 1.44498,3.94511 0,2.85044 -0.0243,5.14456 -0.0243,5.84623 0,0.56727 0.38311,1.23155 1.46296,1.02235 C 36.5108,38.69549 42.60715,30.71283 42.60715,21.30354 42.60715,9.53735 33.0691,0 21.30361,0"})})})})},p=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(a.jsx)("a",{className:"contact-logo-container",href:"https://www.linkedin.com/in/justin-wong-3732151b4/",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:Object(a.jsx)("svg",{height:"70",width:"70",children:Object(a.jsx)("g",{transform:"matrix(0.9,0,0,0.9,2,2)",children:Object(a.jsx)("path",{d:"M 9.099992,0.5 C 4.3503494,0.50000409 0.50000425,4.3503491 0.5,9.0999917 c 3.37e-6,4.7496433 3.8503488,8.5999893 8.599992,8.5999933 4.749643,-5e-6 8.599988,-3.85035 8.599991,-8.5999933 C 17.699979,4.3503495 13.849634,0.50000464 9.099992,0.5 Z m 45.540372,22.540742 c -10.807681,0.05892 -14.279247,7.572819 -14.399638,7.869804 -0.04756,-0.0059 -0.09416,-0.01869 -0.14056,-0.03462 V 24.200361 H 25.800265 V 72.000027 H 40.100166 40.73837 V 46.092049 c 0.235368,-3.356316 1.070044,-8.879875 6.366021,-9.768914 5.510535,-0.925058 9.65291,0.252611 10.195758,9.737391 v 25.939501 h 14.80013 c -5.9e-5,-8.846201 0,-18.648614 0,-26.9999 -0.314849,-1.753931 1.51808,-19.31066 -13.138731,-21.616771 -1.555924,-0.244808 -2.993924,-0.34985 -4.321184,-0.342614 z M 1.600192,24.200361 V 72.000027 H 16.600309 V 24.200361 Z",fill:"none",fillOpacity:"1",stroke:i?"#39E5D1":"#ffffff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"4",strokeDasharray:"none",id:"path3214"})})})})},k=function(){return Object(a.jsxs)("div",{id:"contact",className:"section-container",style:{paddingBottom:"60px"},children:[Object(a.jsx)("h2",{children:"Contact"}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{id:"contact-container",children:[Object(a.jsx)(u,{}),Object(a.jsx)(f,{}),Object(a.jsx)(p,{})]})]})},v=function(){return Object(a.jsx)("div",{id:"content",children:Object(a.jsxs)("div",{id:"content-body",children:[Object(a.jsx)(h,{}),Object(a.jsx)(b,{}),Object(a.jsx)(m,{}),Object(a.jsx)(O,{}),Object(a.jsx)(x,{}),Object(a.jsx)(k,{})]})})},N=function(){return Object(a.jsxs)("div",{id:"app",children:[Object(a.jsx)(j,{}),Object(a.jsx)(v,{})]})};c.a.render(Object(a.jsx)(N,{}),document.getElementById("root"))},9:function(e,t,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.7c785e90.chunk.js.map