webpackJsonp([0],[,function(t,e,s){s(24);var n=s(0)(s(13),s(37),null,null);t.exports=n.exports},function(t,e,s){s(21);var n=s(0)(s(15),s(34),"data-v-502a2b96",null);t.exports=n.exports},,function(t,e,s){s(20);var n=s(0)(s(14),s(33),"data-v-3de6cade",null);t.exports=n.exports},function(t,e,s){"use strict";s.d(e,"a",function(){return c});var n=s(3),a=s(40),o=s(25),i=s.n(o);n.a.use(a.a);var r=(window.location.host.includes("localhost"),"//bcw-music.herokuapp.com"),c=new a.a.Store({state:{myTunes:[],results:[],myPlaylist:[],log:!1},mutations:{setResults:function(t,e){var s=e.filter(function(t){return"song"==t.kind});t.results=s},addToMyTunes:function(t,e){t.myTunes.push(e),c.dispatch("getMyTunes")},updateSongs:function(t,e){t.myTunes=e},retrieveTunes:function(t){var e=t.myTunes;c.dispatch("putTracksAdd",e)},promoteTrack:function(t,e){t.myTunes.find(function(t){return t._id==e}),t.myTunes.find(function(t){return t._id==e-1});c.dispatch("putTracksAdd",tracks)},demoteTrack:function(t,e){var s=t.myTunes.find(function(t){return t._id==e}),n=t.myTunes.indexOf(s);t.myTunes.splice(n+2,0,s),t.myTunes.splice(n,1);var a=t.myTunes;c.dispatch("putTracksAdd",a)},changeLog:function(t){t.log=!t.log}},actions:{getMusicByArtist:function(t,e){var s=t.commit,n=(t.dispatch,"https://itunes.apple.com/search?term="+e),a="//bcw-getter.herokuapp.com/?url="+encodeURIComponent(n);i.a.getJSON(a).then(function(t){var e=t.results.map(function(t){var e="",s="";if(t.collectionName.length>20||t.trackName.length>20){for(var n=0;n<t.collectionName.length;n++){var a=t.collectionName[n];e.length<21&&(e+=a),20==e.length&&(e+="...")}for(var n=0;n<t.trackName.length;n++){var a=t.trackName[n];s.length<20&&(s+=a),19==s.length&&(s+="...")}return{_id:t.trackId,kind:t.kind,title:s,albumArt:t.artworkUrl100,artist:t.artistName,album:e,price:t.collectionPrice,preview:t.previewUrl}}return{_id:t.trackId,kind:t.kind,title:t.trackName,albumArt:t.artworkUrl100,artist:t.artistName,album:t.collectionName,price:t.collectionPrice,preview:t.previewUrl}});s("setResults",e)}).fail(function(t){console.error(t)})},getMyTunes:function(t){var e=t.commit;t.dispatch;i.a.get(r+"/api/songs").then(function(t){e("updateSongs",t)}).fail(function(t){console.error(t)})},addToMyTunes:function(t,e){var s=t.commit;t.dispatch;i.a.post(r+"/api/songs",e).then(function(t){s("addToMyTunes",t)}).fail(function(t){console.error(t)})},removeTrack:function(t,e){var s=(t.commit,t.dispatch);i.a.ajax({contentType:"application/json",method:"DELETE",url:r+"/api/songs/"+e}).then(function(t){s("getMyTunes")}).fail(function(t){console.error(t)})},promoteTrack:function(t,e){var s=(t.commit,t.dispatch);i.a.ajax({contentType:"application/json",method:"PUT",url:r+"/api/promote/"+e._id}).then(function(t){s("getTrack")}).fail(function(t){console.error(t)})},putTracksAdd:function(t,e){for(var s=(t.commit,t.dispatch),n=0;n<e.length;n++){var a=e[n];i.a.post(r+"/api/songs",a).then(function(t){s("getMyTunes")}).fail(function(t){console.error(t)})}},demoteTrack:function(t,e){var s=t.commit;t.dispatch;i.a.ajax({contentType:"application/json",method:"PUT",url:r+"/api/songs/"}).then(function(t){s("demoteTrack",e.trackId)}).fail(function(t){console.error(t)})},login:function(t,e){var s=(t.commit,t.dispatch);i.a.post(r+"/login",e).then(function(t){t.message?(console.log("logged in"),s("changeLog")):t.error&&alert("Invalid Email or password")}).catch(function(){return console.log("error")})},register:function(t,e){var s=(t.commit,t.dispatch);i.a.post(r+"/register",e).then(function(t){t.message?(console.log("account created"),s("login",e)):t.error&&alert("Invalid Email or password")}).catch(function(){return console.log("error")})},changeLog:function(t){var e=t.commit;t.dispatch;e("changeLog")}}})},function(t,e,s){"use strict";var n=s(3),a=s(38),o=s(26),i=s.n(o),r=s(2),c=s.n(r),l=s(1),u=s.n(l),d=s(29),m=s.n(d),p=s(27),v=s.n(p);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/tunes",name:"Tunes",component:c.a},{path:"/results",name:"Results",component:u.a},{path:"/register",name:"Register",component:m.a},{path:"/login",name:"Login",component:v.a}]})},function(t,e,s){s(19);var n=s(0)(s(8),s(32),null,null);t.exports=n.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=s.n(n),o=s(1),i=s.n(o);e.default={name:"app",components:{Search:a.a,Results:i.a},computed:{loggedIn:function(){return this.$store.state.log}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=s.n(n),o=s(28),i=s.n(o),r=s(2),c=s.n(r),l=s(4),u=s.n(l);e.default={name:"home",data:function(){return{}},components:{Results:a.a,Tunes:c.a,Notresults:i.a,Search:u.a},computed:{loggedIn:function(){return this.$store.state.log}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"log",data:function(){return{artist:"",email:"",password:""}},computed:{songs:function(){return this.$store.state.results},loggedIn:function(){return this.$store.state.log}},methods:{getMusic:function(){this.$store.dispatch("getMusicByArtist",this.artist)},login:function(){var t={email:this.email,password:this.password};this.$store.dispatch("login",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=s.n(n),o=s(1),i=s.n(o);e.default={name:"notresults",data:function(){return{artist:""}},computed:{songs:function(){return this.$store.state.results}},methods:{addToMyTunes:function(t){this.$store.dispatch("addToMyTunes",t)}},components:{Tunes:a.a,Results:i.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=s.n(n),o=s(2),i=s.n(o);e.default={name:"register",data:function(){return{artist:"",email:"",password:""}},computed:{songs:function(){return this.$store.state.results},loggedIn:function(){return this.$store.state.log}},methods:{getMusic:function(){this.$store.dispatch("getMusicByArtist",this.artist)},register:function(){var t={email:this.email,password:this.password};this.$store.dispatch("register",t)}},components:{Results:a.a,Tunes:i.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"results",data:function(){return{artist:"",album:""}},computed:{songs:function(){return this.$store.state.results},myTunes:function(){return this.$store.state.myTunes}},methods:{addToMyTunes:function(t){t._id=this.myTunes.length+1,this.$store.dispatch("addToMyTunes",t)},addToMyPlaylist:function(t){}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=s.n(n);e.default={name:"search",data:function(){return{artist:"",email:"",password:""}},methods:{getMusic:function(){this.$store.dispatch("getMusicByArtist",this.artist)},login:function(){var t={email:this.email,password:this.password};this.$store.dispatch("login",t)}},computed:{songs:function(){return this.$store.state.results},loggedIn:function(){return this.$store.state.log},ip:function(){return this.$store.state.ip}},components:{Results:a.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tunes",data:function(){return{}},mounted:function(){this.$store.dispatch("getMyTunes")},methods:{removeTrack:function(t){this.$store.dispatch("removeTrack",t)},removeTrackPlaylist:function(t){},promoteTrack:function(t,e,s){var n={trackId:t,tune:e,tunes:s};this.$store.dispatch("promoteTrack",n)},demoteTrack:function(t,e,s){var n={trackId:t,tune:e,tunes:s};this.$store.dispatch("demoteTrack",n)}},computed:{tunes:function(){return this.$store.state.myTunes}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=s(7),o=s.n(a),i=s(6),r=s(5);new n.a({el:"#app",router:i.a,store:r.a,template:"<App/>",components:{App:o.a}}),document.addEventListener("play",function(t){window.$_currentlyPlaying&&window.$_currentlyPlaying!=t.target&&window.$_currentlyPlaying.pause(),window.$_currentlyPlaying=t.target},!0)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){s(22);var n=s(0)(s(9),s(35),"data-v-a13c13d6",null);t.exports=n.exports},function(t,e,s){s(17);var n=s(0)(s(10),s(30),null,null);t.exports=n.exports},function(t,e,s){s(23);var n=s(0)(s(11),s(36),null,null);t.exports=n.exports},function(t,e,s){s(18);var n=s(0)(s(12),s(31),"data-v-315e6ed9",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-3"},[t.loggedIn?t._e():s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.login()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("p",[t._v("email: a@b.com")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("p",[t._v(" password: abc")]),t._v(" "),s("button",{staticClass:"btn btn-default btn-login",attrs:{type:"submit"}},[t._v("Login")])])])]),t._v(" "),s("div",{staticClass:"col-xs-9"},[s("form",{staticClass:"form-inline text-center form",on:{submit:function(e){e.preventDefault(),t.getMusic()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search For Music"},domProps:{value:t.artist},on:{input:function(e){e.target.composing||(t.artist=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-default",attrs:{type:"submit",id:"get-music-button"}},[t._v("Get Music")])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"text-center"},[s("div",{staticClass:"col-xs-offset-5 col-xs-2"},[t.loggedIn?s("div",[t._m(0)]):s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.register()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-default btn-login",attrs:{type:"submit"}},[t._v("Register")])])])])])]),t._v(" "),t.loggedIn?s("div",[s("tunes")],1):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-default"},[s("a",{attrs:{href:"/#/"}},[t._v("Search")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-3"},[t.loggedIn?t._e():s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.login()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-default btn-login",attrs:{type:"submit"}},[t._v("Login")])])])]),t._v(" "),t.loggedIn?t._e():s("div",[t._m(0)]),t._v(" "),s("div",{staticClass:"col-xs-5"},[s("form",{staticClass:"form-inline text-center form",on:{submit:function(e){e.preventDefault(),t.getMusic()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search For Music"},domProps:{value:t.artist},on:{input:function(e){e.target.composing||(t.artist=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-default",attrs:{type:"submit",id:"get-music-button"}},[t._v("Get Music")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-offset-3 col-xs-1"},[s("button",{staticClass:"btn btn-default"},[s("a",{attrs:{href:"/#/register"}},[t._v("Register")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tunes"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},t._l(t.tunes,function(e){return s("div",[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"playlist"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10"},[s("h5",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v(t._s(e.artist))])]),t._v(" "),s("div",{staticClass:"col-xs-1"},[s("button",{staticClass:"btn btn-default vote",on:{click:function(s){t.promoteTrack(e._id,e,t.tunes)}}},[t._v("+")])]),t._v(" "),s("div",{staticClass:"col-xs-1"},[s("button",{staticClass:"btn btn-default vote",on:{click:function(s){t.demoteTrack(e._id,e,t.tunes)}}},[t._v("-")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10"},[s("audio",{staticClass:"audio",attrs:{controls:""}},[s("source",{attrs:{src:e.preview,type:"audio/mp3 "}})])]),t._v(" "),s("div",{staticClass:"col-xs-1"},[s("button",{staticClass:"btn btn-default",on:{click:function(s){t.removeTrack(e._id),t.removeTrackPlaylist(e.id)}}},[t._v("X")])])])])])])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("search"),t._v(" "),t.loggedIn?s("div",[s("notresults")],1):s("div",[s("results")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notresults"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-8"},[s("results")],1),t._v(" "),s("div",{staticClass:"col-xs-4"},[s("tunes")],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"results"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},t._l(t.songs,function(e){return s("div",[s("div",{staticClass:"col-xs-12 col-lg-6 col-xl-4"},[s("div",{staticClass:"song"},[s("div",{staticClass:"row"},[s("div",{staticClass:" col-xs-6"},[s("img",{staticClass:"img-responsive image fade",attrs:{src:e.albumArt,alt:"album art "}})]),t._v(" "),s("div",{staticClass:"col-xs-6"},[s("div",{staticClass:"title text-center fade"},[s("h4",[t._v(t._s(e.title))])])])]),t._v(" "),s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"replacement"},[s("div",{staticClass:"change"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-8"},[s("h3",[t._v(t._s(e.artist))]),t._v(" "),s("div",{model:{value:t.album,callback:function(e){t.album=e},expression:"album"}},[s("h4",[t._v(t._s(e.album))])]),t._v(" "),s("h5",[t._v("Album Cost: "+t._s(e.price))])]),t._v(" "),s("div",{staticClass:"col-xs-1"},[s("button",{staticClass:"btn btn-default plus",on:{click:function(s){t.addToMyTunes(e),t.addToMyPlaylist(e)}}},[t._v("+")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("audio",{staticClass:"audio",attrs:{controls:""}},[s("source",{attrs:{src:e.preview,type:"audio/mp3 "}})])])])])])])])])])}))])])},staticRenderFns:[]}}],[16]);
//# sourceMappingURL=app.bf1e4bbc7f61156a29ce.js.map