(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[0],{209:function(e,t,a){e.exports=a(417)},214:function(e,t,a){},417:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=(a(214),a(39)),s=a(457),l=a(470),m=a(199),p=a.n(m),u=a(200),g=a.n(u),h=a(476),d=a(467),f=a(468),b=a(461),w=a(469),k=a(464),v=a(198),E=a.n(v),y=a(475),x=a(466),S=a(477),C=a(463),N=a(460),j=a(418),I=a(7),A=Object(s.a)((function(e){return{root:{padding:"5rem 1rem",textAlign:"center",minHeight:window.innerHeight,position:"relative"},background:{position:"absolute",top:"0",left:"0",opacity:"90%",width:"100%",height:"100%",backgroundImage:"url(".concat(I.a.background,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-999"},title:{fontWeight:400,fontSize:"3em",color:"lightgray"},subtitle:{fontWeight:400,color:"lightgray"},picture:{width:"100%"},img:{width:"6rem",boxShadow:"0px 10px 10px 0px gray",borderRadius:"50%"},text:{textAlign:"center",padding:"0 2rem",margin:"8rem auto 4rem auto",color:"lightgray"},listContainer:{display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto",width:"90%"},list:{margin:"1rem auto"},listItem:{margin:"0.2rem 0.2rem",border:"1px solid black",padding:"0.3rem 0.5rem",borderRadius:"4px",color:"white"}}})),T=function(){var e=A(),t=I.a.about,a=I.a.skills;return o.a.createElement(N.a,{direction:"up",in:!0,timeout:1e3},o.a.createElement(b.a,{component:"section",container:!0,className:e.root},o.a.createElement("div",{className:e.background}),o.a.createElement(b.a,{item:!0,xs:12,className:e.columnImg},o.a.createElement(C.a,{in:!0,timeout:3e3},o.a.createElement("picture",{className:e.picture},o.a.createElement("img",{className:e.img,src:t.location,alt:t.key})))),o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(j.a,{className:e.title,variant:"h2"},t.title),o.a.createElement(j.a,{className:e.subtitle,variant:"h6"},t.subtitle),o.a.createElement(j.a,{className:e.text},t.text),o.a.createElement("div",{className:e.list},a.map((function(t){return o.a.createElement(k.a,{key:Object(S.a)(),className:e.listItem,variant:"outlined"},t)}))))))},z=a(128),R=a.n(z),M=a(194),D=a(98),H=a(129),O=a(195),W=a.n(O),_=a(473),P=a(465),L=a(71),B=Object(L.withScriptjs)(Object(L.withGoogleMap)((function(e){var t=e.zoom,a=e.lat,n=e.lng;return o.a.createElement(L.GoogleMap,{defaultZoom:t,defaultCenter:{lat:a,lng:n}},o.a.createElement(L.Marker,{position:{lat:a,lng:n}}))}))),J=Object(s.a)((function(e){return{root:{position:"relative",padding:"5rem 1rem",textAlign:"center"},background:{position:"absolute",top:"0",left:"0",opacity:"80%",width:"100%",height:"100%",backgroundImage:"url(".concat(I.b.background,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-999"},title:{fontWeight:400,fontSize:"3em",margin:"1rem"},picture:{width:"100%"},columnImg:{padding:"0 5rem"},columnForm:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},form:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},text:{textAlign:"center",padding:"0 2rem"}}})),U={from_name:"",from_email:"",to_name:"AnthonyTC",message_html:""},q=function(){var e=J(),t=I.b.title,a=I.b.zoom,r=I.b.lat,i=I.b.lng,s=I.b.googleMapsKey,l=I.b.userID,m=I.b.serviceID,p=I.b.templateID,u=I.i.wait,g=I.i.submit,h=Object(n.useState)(!1),d=Object(c.a)(h,2),f=d[0],w=d[1],v=Object(n.useState)(null),E=Object(c.a)(v,2),x=E[0],S=E[1],A=Object(n.useState)(U),T=Object(c.a)(A,2),z=T[0],O=T[1],L="https://maps.googleapis.com/maps/api/js?v=3.exp&key=".concat(s),q=o.a.createElement("div",{style:{height:"100%"}}),F=o.a.createElement("div",{style:{height:"100%"}}),G=o.a.createElement(P.a,null),Q=function(e){e.persist(),O((function(t){return Object(H.a)(Object(H.a)({},t),{},Object(D.a)({},e.target.name,e.target.value))}))},K=function(){var e=Object(M.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(!0),S(null),e.prev=3,e.next=6,W.a.send(m,p,z,l);case 6:S("Thank you!"),O(U),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),S("error!");case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(N.a,{direction:"up",in:!0,timeout:1e3},o.a.createElement(b.a,{component:"section",container:!0,className:e.root},o.a.createElement("div",{className:e.background}),o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(j.a,{className:e.title,variant:"h2"},t)),o.a.createElement(b.a,{item:!0,xs:12,md:6,className:e.columnForm},o.a.createElement("form",{onSubmit:K,className:e.form},o.a.createElement(_.a,{margin:"dense",name:"from_name",variant:"outlined",id:"from_name",value:z.from_name,label:"your name (optional)",onChange:Q}),o.a.createElement(_.a,{margin:"dense",type:"email",name:"from_email",variant:"outlined",id:"from_email",value:z.from_email,label:"email",onChange:Q,required:!0}),o.a.createElement(_.a,{margin:"dense",multiline:!0,rows:"8",name:"message_html",variant:"outlined",id:"message_html",value:z.message_html,label:"type here",onChange:Q,required:!0}),o.a.createElement(k.a,{className:e.button,type:"submit",variant:"contained",color:"inherit",disabled:f},f?u:g),null===x?null:o.a.createElement(j.a,{variant:"caption",className:e.text},x))),o.a.createElement(y.a,{smDown:!0},o.a.createElement(b.a,{item:!0,xs:12,md:6,className:e.columnImg},o.a.createElement(C.a,{in:!0,timeout:3e3},o.a.createElement(B,{googleMapURL:L,containerElement:q,mapElement:F,loadingElement:G,zoom:a,lat:parseFloat(r),lng:parseFloat(i)}))))))},F=Object(s.a)((function(e){return{root:{padding:"5rem 1rem",textAlign:"center",minHeight:window.innerHeight,position:"relative"},background:{position:"absolute",top:"0",left:"0",opacity:"90%",width:"100%",height:"100%",backgroundImage:"url(".concat(I.g.background,")"),backgroundSize:"contain",zIndex:"-999"},title:{fontWeight:400,fontSize:"3em",margin:"1rem"},links:{display:"flex",flexDirection:"column",alignItems:"center"},subtitle:{fontWeight:300,fontSize:"2rem",margin:"1rem",color:"black"},caption:{fontSize:"1rem"},picture:{width:"100%"},img:{boxShadow:"0px 10px 15px 5px gray",maxHeight:"20rem",maxWidth:"90%"},article:{padding:"3rem 0"},columnInfo:{display:"flex",flexDirection:"column",justifyContent:"center"},columnImg:{padding:"1rem 1rem 2rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{padding:"1rem",display:"flex"},iconList:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",listStyle:"none",padding:"0 1rem"},icon:{width:"2rem"}}})),G=function(){var e=F(),t=I.g.title,a=I.g.projects;return o.a.createElement(N.a,{direction:"up",in:!0,timeout:1e3},o.a.createElement(b.a,{component:"section",container:!0,className:e.root},o.a.createElement("div",{className:e.background}),o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(j.a,{className:e.title,variant:"h2"},t)),a.map((function(t){return o.a.createElement(b.a,{container:!0,key:Object(S.a)(),component:"article",className:e.article},o.a.createElement(y.a,{mdUp:!0},o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(j.a,{className:e.links,variant:"h2"},o.a.createElement(x.a,{className:e.subtitle,href:t.live,target:"_blank",rel:"noreferrer"},t.title),o.a.createElement(x.a,{className:e.caption,href:t.source,target:"_blank",rel:"noreferrer"},"Source")))),o.a.createElement(b.a,{item:!0,xs:12,md:6,className:e.columnImg},o.a.createElement(C.a,{in:!0,timeout:3e3},o.a.createElement("picture",{className:e.picture},o.a.createElement("img",{className:e.img,src:t.screenshots[0],alt:"screenshot"})))),o.a.createElement(b.a,{item:!0,xs:12,md:6,className:e.columnInfo},o.a.createElement(y.a,{smDown:!0},o.a.createElement(j.a,{className:e.links,variant:"h2"},o.a.createElement(x.a,{className:e.subtitle,href:t.live,target:"_blank",rel:"noreferrer"},t.title),o.a.createElement(x.a,{className:e.caption,href:t.source,target:"_blank",rel:"noreferrer"},"Source"))),o.a.createElement("ul",{className:e.iconList},t.skills.map((function(t){return o.a.createElement("li",{key:Object(S.a)()},o.a.createElement(C.a,{in:!0,timeout:4e3},o.a.createElement("img",{src:I.h[t],alt:"icon-skill",className:e.icon})))}))),o.a.createElement(j.a,{className:e.text,variant:"body1"},t.description)))}))))},Q=Object(s.a)((function(e){return{root:{padding:"5rem 1rem",textAlign:"center",minHeight:window.innerHeight-109,position:"relative"},background:{position:"absolute",top:"0",left:"0",opacity:"90%",width:"100%",height:"100%",backgroundImage:"url(".concat(I.d.background,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-999"},title:{fontWeight:400,fontSize:"3em",margin:"1rem"},links:{display:"flex",flexDirection:"column",alignItems:"center"},subtitle:{fontWeight:300,fontSize:"2rem",margin:"1rem",color:"black"},caption:{fontSize:"1rem"},picture:{width:"100%"},img:{boxShadow:"0px 10px 15px 5px gray",maxHeight:"10rem",maxWidth:"90%"},article:{padding:"3rem 0"},columnImg:{padding:"1rem 1rem 2rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{padding:"1rem",display:"flex"},iconList:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",listStyle:"none",padding:"0 1rem"},icon:{width:"3rem"}}})),K=function(){var e=Q(),t=I.d.title,a=I.d.experience;return o.a.createElement(N.a,{direction:"up",in:!0,timeout:1e3},o.a.createElement(b.a,{component:"section",container:!0,className:e.root},o.a.createElement("div",{className:e.background}),o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(j.a,{className:e.title,variant:"h2"},t)),a.map((function(t){return o.a.createElement(b.a,{key:Object(S.a)(),item:!0,xs:12,md:6,component:"article",className:e.article},o.a.createElement(j.a,{variant:"caption"},t.date),o.a.createElement(j.a,{variant:"h4"},o.a.createElement(x.a,{className:e.subtitle,href:t.href,target:"_blank",rel:"noreferrer"},t.company)),o.a.createElement(j.a,{variant:"h6"},t.position),o.a.createElement("ul",{className:e.iconList},t.skills.map((function(t){return o.a.createElement("li",{key:Object(S.a)()},o.a.createElement(C.a,{in:!0,timeout:4e3},o.a.createElement("img",{src:I.h[t],alt:"icon-skill",className:e.icon})))}))),o.a.createElement(j.a,{variant:"body2"},t.goals))}))))},Y=Object(s.a)((function(e){return{root:{padding:"5rem 1rem",textAlign:"center",minHeight:window.innerHeight-109,position:"relative"},background:{position:"absolute",top:"0",left:"0",opacity:"90%",width:"100%",height:"100%",backgroundImage:"url(".concat(I.c.background,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-999"},title:{fontWeight:400,fontSize:"3em",margin:"1rem"},links:{display:"flex",flexDirection:"column",alignItems:"center"},subtitle:{fontWeight:300,fontSize:"2rem",margin:"1rem",color:"black"},caption:{fontSize:"1rem"},picture:{width:"100%"},img:{boxShadow:"0px 10px 15px 5px gray",maxHeight:"5rem",maxWidth:"90%",margin:"1rem"},article:{padding:"3rem 0"},columnImg:{padding:"1rem 1rem 2rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},text:{padding:"1rem",display:"flex"},iconList:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",listStyle:"none",padding:"0 1rem"},icon:{width:"2rem"}}})),V=function(){var e=Y(),t=I.c.title,a=I.c.education;return o.a.createElement(N.a,{direction:"up",in:!0,timeout:1e3},o.a.createElement(b.a,{component:"section",container:!0,className:e.root},o.a.createElement("div",{className:e.background}),o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(j.a,{className:e.title,variant:"h2"},t)),a.map((function(t){return o.a.createElement(b.a,{key:Object(S.a)(),item:!0,xs:12,md:6,component:"article",className:e.article},o.a.createElement(j.a,{variant:"caption"},t.date),o.a.createElement(j.a,{variant:"h4"},o.a.createElement(x.a,{className:e.subtitle,href:t.href,target:"_blank",rel:"noreferrer"},t.institution)),o.a.createElement(C.a,{in:!0,timeout:3e3},o.a.createElement("picture",{className:e.picture},o.a.createElement("img",{className:e.img,src:t.image,alt:t.institution}))),o.a.createElement(j.a,{variant:"h6"},t.grade),o.a.createElement(j.a,{variant:"body2"},t.goals))}))))},Z=Object(s.a)({root:{flexDirection:"row-reverse",justifyContent:"space-between",background:"whitesmoke"},title:{flexGrow:1},container:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",justifyContent:"center"},link:{margin:"0.5rem",alignSelf:"center"},img:{width:"2rem"},drawer:{zIndex:"999"}}),X=function(e){var t=e.setComponent,a=Z(),r=I.f.contact,i=I.f.experience,s=I.f.projects,m=I.f.education,u=I.f.resume,v=Object(n.useState)(!1),S=Object(c.a)(v,2),C=S[0],N=S[1],j=function(e){t(o.a.createElement(e,null))},A=function(e){null!=e&&t(o.a.createElement(e,null)),N(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{position:"fixed",color:"inherit"},o.a.createElement(f.a,{className:a.root},o.a.createElement(b.a,{container:!0,className:a.container},o.a.createElement(y.a,{smDown:!0},o.a.createElement(w.a,{orientation:"vertical",flexItem:!0}),o.a.createElement(k.a,{onClick:function(){return j(q)},className:a.link},r)),o.a.createElement(y.a,{xsDown:!0},o.a.createElement(w.a,{orientation:"vertical",flexItem:!0}),o.a.createElement(k.a,{onClick:function(){return j(G)},className:a.link},s)),o.a.createElement(w.a,{orientation:"vertical",flexItem:!0}),o.a.createElement(l.a,{onClick:function(){return j(T)},className:a.link},o.a.createElement(E.a,null)),o.a.createElement(w.a,{orientation:"vertical",flexItem:!0}),o.a.createElement(y.a,{xsDown:!0},o.a.createElement(k.a,{onClick:function(){return j(K)},className:a.link},i),o.a.createElement(w.a,{orientation:"vertical",flexItem:!0})),o.a.createElement(y.a,{smDown:!0},o.a.createElement(k.a,{onClick:function(){return j(V)},className:a.link},m),o.a.createElement(w.a,{orientation:"vertical",flexItem:!0}))),o.a.createElement(x.a,{href:u,target:"_blank",rel:"noopener"},o.a.createElement(l.a,null,o.a.createElement(p.a,null))),o.a.createElement(y.a,{mdUp:!0},o.a.createElement(l.a,{"aria-label":"open drawer",onClick:function(){return N(!C)},edge:"start",className:a.drawer},o.a.createElement(g.a,null))))),o.a.createElement(h.a,{anchor:"left",open:C,onClose:function(){return A(null)}},o.a.createElement(k.a,{onClick:function(){return A(q)},className:a.link},r),o.a.createElement(k.a,{onClick:function(){return A(G)},className:a.link},s),o.a.createElement(k.a,{onClick:function(){return A(K)},className:a.link},i),o.a.createElement(k.a,{onClick:function(){return A(V)},className:a.link},m)))},$=a(471),ee=a(472),te=Object(s.a)({footer:{display:"flex",flexDirection:"column",paddingBottom:"1rem",bottom:0,width:"100%",position:"relative"},background:{position:"absolute",top:"0",left:"0",opacity:"90%",width:"100%",height:"100%",backgroundImage:"url(".concat(I.e.background,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-999"},list:{display:"flex",justifyContent:"center",alignItems:"center"},icon:{width:"2rem",margin:"0.5rem"}}),ae=function(){var e=te(),t=(new Date).getFullYear(),a=I.e.authorName,n=I.e.copyright,r=I.e.socialNetworks;return o.a.createElement("footer",{className:e.footer},o.a.createElement($.a,null),o.a.createElement("div",{className:e.background}),0===r.length?null:o.a.createElement("div",{className:e.list},r.map((function(t){return o.a.createElement("a",{key:Object(S.a)(),href:t.href,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:e.icon,src:t.src,alt:"".concat(t.name,"-icon")}))}))),o.a.createElement(ee.a,{maxWidth:"sm"},o.a.createElement(j.a,{variant:"body2",align:"center"},"".concat(t," \xa9 ").concat(a)),o.a.createElement(j.a,{variant:"body2",align:"center"},n)))},ne=function(){var e=Object(n.useState)(o.a.createElement(T,null)),t=Object(c.a)(e,2),a=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(X,{setComponent:r}),o.a.createElement("main",null,a),"AboutHome"===a.type.name?null:o.a.createElement(ae,null))},oe=function(){return o.a.createElement(ne,null)};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(oe,null)),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"a":{"about":{"title":"Anthony Tapia","subtitle":"Full Stack Developer","text":"Hello! My name is Anthony Tapia, I live in Arequipa, Per\xfa. I like to work remotely on projects for people all over the world making their lives or businesses easier. I have a diverse set of skills in Front-end and Back-end. I\'m always looking for my next challenge, knowing that everything is possible working step-by-step. When I\'m not coding, you can find me reading a book or playing guitar.","location":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/gravatar.png","key":"anthony-tapia"},"skills":["HTML","CSS","Bootstrap","JavaScript","React","Material-UI","Redux","Jest","ExpressJS","NodeJS","MongoDB","ESLint","Ruby","Ruby on Rails","Rspec","SQL","MySql","PostgreSQL","Git","Heroku","C#","Java","AWS"],"background":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/bg-volcano.jpg"},"f":{"home":"Home","about":"About me","contact":"Contact","experience":"Experience","projects":"Projects","education":"Education","logo":{"location":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/logo.png","key":"portfolio-logo"},"resume":"https://docs.google.com/document/d/1RcioneKfm64HyaN28igqRSU2L4h89sp9ThynfsnVlw0/edit?usp=sharing"},"b":{"title":"Contact me","zoom":3,"lat":-16.4271974,"lng":-71.5243293,"googleMapsKey":"AIzaSyCfGYcKrIql9GQMnNvIwxHeLg8MOUbOUIY","userID":"user_rNvpe3qVkqG4Htik4Ehnc","serviceID":"gmail","templateID":"template_portfolio_v2","background":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/bg-wall.jpg"},"g":{"title":"My Projects","background":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/bg-wall.jpg","projects":[{"title":"My WebSite","description":"This is a Personal Project with a DashBoard create with Material-UI. All the sections are editable in the admin Panel. There is a collection of images managed with AWS S3. The website can set a position of GoogleMaps. Products, Services and Social Networks can be created, edited and removed.","live":"https://website-atc.herokuapp.com/","source":"https://github.com/AnthonyTC89/website-atc","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/website-atc/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/website-atc/develop/screenshots/02.png"],"pinned":true,"skills":["CSS","React","Material-UI","Redux","RoR","Heroku","AWS","GoogleMaps"],"mobile":false},{"title":"Blogsite","description":"This is a Personal Project based on Instagram. The main purpose is the security of data with JsonWebToken and sessions with localStorage and sessionStorage. This is a responsive website where an User can create an account with his email or Facebook Account. Create posts, edit posts and edit his profile.","live":"https://website-atc.herokuapp.com/","source":"https://github.com/AnthonyTC89/website-atc","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/blogsite/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/blogsite/develop/screenshots/02.png"],"pinned":true,"skills":["HTML","CSS","Bootstrap","React","Material-UI","Redux","nodeJS","MongoDB","Heroku"],"mobile":false},{"title":"Moodle-Pedagogic-School","description":"This project is a Moodle for a pedagogic school in Peru. A user can create an account of a student in the website. The administrator can update the account of a user to be a professor. A professor can create courses, subjects, schedules, upload documents in the Website. A student can view the courses, subjects, schedules and download the documents. There is guest account to have a view of the courses with less options.","live":"https://moodle-pedagogico.herokuapp.com/","source":"https://github.com/AnthonyTC89/moodle","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/moodle/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/moodle/develop/screenshots/02.png"],"pinned":true,"skills":["CSS","Bootstrap","React","Redux","RoR","Heroku","AWS"],"mobile":false},{"title":"Hassana Massages and Health","description":"Web Site build for a Business in Peru. The Page show the information about the business, services, products, testimonials and contact of the owner. The Site has a \'CMS\' where an Administrator can create, update or delete what the owner needs.","live":"https://hassana-masaje-salud.herokuapp.com/","source":"https://github.com/AnthonyTC89/hassana","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/hassana/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/hassana/develop/screenshots/02.png"],"pinned":true,"skills":["CSS","Bootstrap","React","Redux","RoR","Heroku","AWS","GoogleMaps"],"mobile":false},{"title":"Events","description":"Personal Project where a user can create an account and select the events that he wants. The events will be order by date. A super user can create new events in new dates or update what were created.\\nAn administrator can manage all users and create new super users.","live":"https://react-rails-events.herokuapp.com/","source":"https://github.com/AnthonyTC89/react-rails-events","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/react-rails-events/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/react-rails-events/develop/screenshots/02.png"],"pinned":true,"skills":["Bootstrap","React","Redux","RoR","Heroku"],"mobile":true},{"title":"Odonto App","description":"Real Web application built for students of a University where is showed the teeth and is possible to select each teeth to know the description of each face.","live":"https://raw.githack.com/AnthonyTC89/odonto_app_uap/develop/index.html","source":"https://github.com/AnthonyTC89/odonto_app_uap","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/odonto_app_uap/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/odonto_app_uap/develop/screenshots/02.png"],"pinned":true,"skills":["HTML","CSS","Bootstrap","JavaScript","PHP"],"mobile":false},{"title":"NewsWeek Clone","description":"Personal Project based in a popular Website. This WebPage is a layout with many sections about news, editor picks, magazine and amazing footer.","live":"https://anthonytc89.github.io/newsweek-clone/","source":"https://github.com/AnthonyTC89/newsweek-clone","screenshots":["https://raw.githubusercontent.com/AnthonyTC89/newsweek-clone/develop/screenshots/01.png","https://raw.githubusercontent.com/AnthonyTC89/newsweek-clone/develop/screenshots/02.png"],"pinned":true,"skills":["HTML","CSS","Bootstrap"],"mobile":false}]},"d":{"title":"My Work Experience","background":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/bg-wall.jpg","experience":[{"date":"May 2016 - December 2018","company":"Andean University","href":"https://uancv.edu.pe/","skills":["HTML","C#","SQL"],"position":"Software Developer","goals":"Get, process, manage and report information.","industry":"Education","image":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/education.jpg"},{"date":"July 2011 - June 2012","company":"BanTotal","href":"https://www.bantotal.com/en/","skills":["Java","SQL"],"position":"Software Developer","goals":"Build functions according to new requirements.","industry":"Finances","image":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/finances.png"}]},"c":{"title":"My Education","background":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/bg-wall.jpg","education":[{"date":"July 2019 - Abril 2020","institution":"Microverse","href":"https://www.microverse.org/","image":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/microverse.png","grade":"Web Developer","goals":"Full-Stack Development"},{"date":"Abril 2007 - December 2012","institution":"Santa Maria Catholic University","href":"https://www.ucsm.edu.pe/","image":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/ucsm.png","grade":"Bachelor Systems Engineering","goals":"Programming. Algorithms. Data Structures."}]},"e":{"authorName":"AnthonyTC89","authorUrl":"https://github.com/AnthonyTC89","copyright":"All Rights Reserved.","background":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/bg-wall.jpg","socialNetworks":[{"name":"facebook","src":"https://img.icons8.com/color/48/000000/facebook.png","href":"https://www.facebook.com/anthonytapiac"},{"name":"twitter","src":"https://img.icons8.com/color/48/000000/twitter.png","href":"https://twitter.com/ptonypTC"},{"name":"linkedin","src":"https://img.icons8.com/color/48/000000/linkedin.png","href":"https://www.linkedin.com/in/anthony-tapia-cossio/"},{"name":"github","src":"https://img.icons8.com/material-sharp/48/000000/github.png","href":"https://github.com/AnthonyTC89"}]},"i":{"login":"Login","add":"Create","update":"Update","wait":"Wait...","create":"Create","back":"Back","upload":"Upload","select":"Select","submit":"Submit"},"h":{"HTML":"https://img.icons8.com/color/48/000000/html-5.png","CSS":"https://img.icons8.com/color/50/000000/css3.png","Bootstrap":"https://img.icons8.com/color/48/000000/bootstrap.png","JavaScript":"https://img.icons8.com/color/48/000000/javascript.png","nodeJS":"https://img.icons8.com/color/48/000000/nodejs.png","React":"https://img.icons8.com/plasticine/100/000000/react.png","Redux":"https://img.icons8.com/color/48/000000/redux.png","MongoDB":"https://img.icons8.com/color/48/000000/mongodb.png","PHP":"https://img.icons8.com/officel/40/000000/php-logo.png","Ruby":"https://img.icons8.com/office/40/000000/ruby-programming-language.png","RoR":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/rails-icon-23.jpg","PostgreSQL":"https://img.icons8.com/color/48/000000/postgreesql.png","Heroku":"https://img.icons8.com/color/48/000000/heroku.png","AWS":"https://img.icons8.com/color/48/000000/amazon-web-services.png","Java":"https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png","C#":"https://img.icons8.com/color/48/000000/c-sharp-logo.png","MSSQLServer":"https://www.freeiconspng.com/uploads/sql-server-icon-6.jpg","GoogleMaps":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/google_maps_icon.png","Material-UI":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/material-ui.png","SQL":"https://portfolio-atc.s3-sa-east-1.amazonaws.com/sql-icon.png"}}')}},[[209,1,2]]]);
//# sourceMappingURL=main.0ca58234.chunk.js.map