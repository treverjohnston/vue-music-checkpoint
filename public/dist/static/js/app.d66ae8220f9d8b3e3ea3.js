webpackJsonp([0],[,,function(t,s,e){e(19);var a=e(0)(e(10),e(29),null,null);t.exports=a.exports},function(t,s,e){e(16);var a=e(0)(e(12),e(26),"data-v-502a2b96",null);t.exports=a.exports},function(t,s,e){"use strict";e.d(s,"a",function(){return c});var a=e(1),n=e(32),i=e(20),o=e.n(i);a.a.use(n.a);var r=e.i({NODE_ENV:"production"}).PORT||"//localhost:3000",c=new n.a.Store({state:{myTunes:[],results:[],myPlaylist:[],log:!1},mutations:{setResults:function(t,s){var e=s.filter(function(t){return"song"==t.kind});t.results=e},addToMyTunes:function(t,s){t.myTunes.push(s),c.dispatch("getMyTunes")},updateSongs:function(t,s){t.myTunes=s},retrieveTunes:function(t){var s=t.myTunes;c.dispatch("putTracksAdd",s)},promoteTrack:function(t,s){var e=t.myTunes.find(function(t){return t._id==s}),a=t.myTunes.indexOf(e);t.myTunes.splice(a-1,0,e),t.myTunes.splice(a+1,1);var n=t.myTunes;c.dispatch("putTracksAdd",n)},demoteTrack:function(t,s){var e=t.myTunes.find(function(t){return t._id==s}),a=t.myTunes.indexOf(e);t.myTunes.splice(a+2,0,e),t.myTunes.splice(a,1);var n=t.myTunes;c.dispatch("putTracksAdd",n)},changeLog:function(t){t.log=!t.log}},actions:{getMusicByArtist:function(t,s){var e=t.commit,a=(t.dispatch,"https://itunes.apple.com/search?term="+s),n="//bcw-getter.herokuapp.com/?url="+encodeURIComponent(a);o.a.getJSON(n).then(function(t){var s=t.results.map(function(t){var s="",e="";if(t.collectionName.length>20||t.trackName.length>20){for(var a=0;a<t.collectionName.length;a++){var n=t.collectionName[a];s.length<21&&(s+=n),20==s.length&&(s+="...")}for(var a=0;a<t.trackName.length;a++){var n=t.trackName[a];e.length<20&&(e+=n),19==e.length&&(e+="...")}return{_id:t.trackId,kind:t.kind,title:e,albumArt:t.artworkUrl100,artist:t.artistName,album:s,price:t.collectionPrice,preview:t.previewUrl}}return{_id:t.trackId,kind:t.kind,title:t.trackName,albumArt:t.artworkUrl100,artist:t.artistName,album:t.collectionName,price:t.collectionPrice,preview:t.previewUrl}});e("setResults",s)}).fail(function(t){console.error(t)})},getMyTunes:function(t){var s=t.commit;t.dispatch;o.a.get(r+"/api/songs").then(function(t){s("updateSongs",t)}).fail(function(t){console.error(t)})},addToMyTunes:function(t,s){var e=t.commit;t.dispatch;o.a.post(r+"/api/songs",s).then(function(t){e("addToMyTunes",t)}).fail(function(t){console.error(t)})},removeTrack:function(t,s){var e=(t.commit,t.dispatch);o.a.ajax({contentType:"application/json",method:"DELETE",url:r+"/api/songs/"+s}).then(function(t){e("getMyTunes")}).fail(function(t){console.error(t)})},promoteTrack:function(t,s){var e=t.commit;t.dispatch;o.a.ajax({contentType:"application/json",method:"PUT",url:r+"/api/songs/"}).then(function(t){e("promoteTrack",s.trackId)}).fail(function(t){console.error(t)})},putTracksAdd:function(t,s){for(var e=(t.commit,t.dispatch),a=0;a<s.length;a++){var n=s[a];o.a.post(r+"/api/songs",n).then(function(t){e("getMyTunes")}).fail(function(t){console.error(t)})}},demoteTrack:function(t,s){var e=t.commit;t.dispatch;o.a.ajax({contentType:"application/json",method:"PUT",url:r+"/api/songs/"}).then(function(t){e("demoteTrack",s.trackId)}).fail(function(t){console.error(t)})},login:function(t,s){var e=(t.commit,t.dispatch);o.a.post(r+"/login",s).then(function(t){t.message?(console.log("logged in"),e("changeLog")):t.error&&alert("Invalid Email or password")}).catch(function(){return console.log("error")})},register:function(t,s){var e=(t.commit,t.dispatch);o.a.post(r+"/register",s).then(function(t){t.message?(console.log("account created"),e("changeLog")):t.error&&alert("Invalid Email or password")}).catch(function(){return console.log("error")})},changeLog:function(t){var s=t.commit;t.dispatch;s("changeLog")}}})},function(t,s,e){"use strict";var a=e(1),n=e(30),i=e(21),o=e.n(i),r=e(3),c=e.n(r),l=e(2),u=e.n(l);a.a.use(n.a),s.a=new n.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/tunes",name:"Tunes",component:c.a},{path:"/results",name:"Results",component:u.a}]})},function(t,s,e){e(14);var a=e(0)(e(7),e(24),null,null);t.exports=a.exports},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(23),n=e.n(a),i=e(2),o=e.n(i);s.default={name:"app",components:{Search:n.a,Results:o.a},computed:{loggedIn:function(){return this.$store.state.log}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(2),n=e.n(a),i=e(22),o=e.n(i),r=e(3),c=e.n(r);s.default={name:"home",data:function(){return{loggedIn:!0}},components:{Results:n.a,Tunes:c.a,Notresults:o.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"notresults",data:function(){return{artist:""}},computed:{songs:function(){return this.$store.state.results}},methods:{addToMyTunes:function(t){this.$store.dispatch("addToMyTunes",t)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"results",data:function(){return{artist:"",album:""}},computed:{songs:function(){return this.$store.state.results}},methods:{addToMyTunes:function(t){this.$store.dispatch("addToMyTunes",t)},addToMyPlaylist:function(t){}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"search",data:function(){return{artist:"",email:"",password:""}},methods:{getMusic:function(){this.$store.dispatch("getMusicByArtist",this.artist)},login:function(){var t={email:this.email,password:this.password};this.$store.dispatch("login",t)}},computed:{songs:function(){return this.$store.state.results},loggedIn:function(){return this.$store.state.log}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"tunes",data:function(){return{}},mounted:function(){this.$store.dispatch("getMyTunes")},methods:{removeTrack:function(t){this.$store.dispatch("removeTrack",t)},removeTrackPlaylist:function(t){},promoteTrack:function(t,s,e){var a={trackId:t,tune:s,tunes:e};this.$store.dispatch("promoteTrack",a)},demoteTrack:function(t,s,e){var a={trackId:t,tune:s,tunes:e};this.$store.dispatch("demoteTrack",a)}},computed:{tunes:function(){return this.$store.state.myTunes}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(1),n=e(6),i=e.n(n),o=e(5),r=e(4);new a.a({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:i.a}}),document.addEventListener("play",function(t){window.$_currentlyPlaying&&window.$_currentlyPlaying!=t.target&&window.$_currentlyPlaying.pause(),window.$_currentlyPlaying=t.target},!0)},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){e(17);var a=e(0)(e(8),e(27),"data-v-a13c13d6",null);t.exports=a.exports},function(t,s,e){e(18);var a=e(0)(e(9),e(28),null,null);t.exports=a.exports},function(t,s,e){e(15);var a=e(0)(e(11),e(25),"data-v-3de6cade",null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[t.loggedIn?e("div",[e("search"),t._v(" "),e("router-view")],1):e("div",[e("search"),t._v(" "),e("results")],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-3"},[t.loggedIn?t._e():e("div",[e("form",{on:{submit:function(s){s.preventDefault(),t.login()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._v(" "),e("p",[t._v("email: a@b.com")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),e("p",[t._v(" password: abc")]),t._v(" "),e("button",{staticClass:"btn btn-default btn-login",attrs:{type:"submit"}},[t._v("Login")])])])]),t._v(" "),e("div",{staticClass:"col-xs-9"},[e("form",{staticClass:"form-inline text-center form",on:{submit:function(s){s.preventDefault(),t.getMusic()}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search For Music"},domProps:{value:t.artist},on:{input:function(s){s.target.composing||(t.artist=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-default",attrs:{type:"submit",id:"get-music-button"}},[t._v("Get Music")])])])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tunes"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},t._l(t.tunes,function(s){return e("div",[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"playlist"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-10"},[e("h5",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.artist))])]),t._v(" "),e("div",{staticClass:"col-xs-1"},[e("button",{staticClass:"btn btn-default vote",on:{click:function(e){t.promoteTrack(s._id,s,t.tunes)}}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"col-xs-1"},[e("button",{staticClass:"btn btn-default vote",on:{click:function(e){t.demoteTrack(s._id,s,t.tunes)}}},[t._v("-")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-10"},[e("audio",{staticClass:"audio",attrs:{controls:""}},[e("source",{attrs:{src:s.preview,type:"audio/mp3 "}})])]),t._v(" "),e("div",{staticClass:"col-xs-1"},[e("button",{staticClass:"btn btn-default",on:{click:function(e){t.removeTrack(s._id),t.removeTrackPlaylist(s.id)}}},[t._v("X")])])])])])])}))])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("div",{staticClass:"container-fluid"},[t.loggedIn?e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-9"},[e("div",{staticClass:"search"},[e("results")],1)]),t._v(" "),e("div",{staticClass:"col-xs-3"},[e("div",{staticClass:"list"},[e("tunes")],1)])])]):e("div",[e("notresults")],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"results"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},t._l(t.songs,function(s){return e("div",[e("div",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-4"},[e("div",{staticClass:"song"},[e("div",{staticClass:"row"},[e("div",{staticClass:" col-xs-6"},[e("img",{staticClass:"img-responsive image fade",attrs:{src:s.albumArt,alt:"album art "}})]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"title text-center fade"},[e("h4",[t._v(t._s(s.title))])])])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"replacement"},[e("div",{staticClass:"change"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-10"},[e("h3",[t._v(t._s(s.artist))]),t._v(" "),e("h4",[t._v(t._s(s.album))]),t._v(" "),e("h5",[t._v("Album Cost: "+t._s(s.price))])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("audio",{staticClass:"audio",attrs:{controls:""}},[e("source",{attrs:{src:s.preview,type:"audio/mp3 "}})])])])])])])])])])}))])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"results"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},t._l(t.songs,function(s){return e("div",[e("div",{staticClass:"col-xs-12 col-sm-6 col-md-6 col-lg-4"},[e("div",{staticClass:"song"},[e("div",{staticClass:"row"},[e("div",{staticClass:" col-xs-6"},[e("img",{staticClass:"img-responsive image fade",attrs:{src:s.albumArt,alt:"album art "}})]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"title text-center fade"},[e("h4",[t._v(t._s(s.title))])])])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"replacement"},[e("div",{staticClass:"change"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-8"},[e("h3",[t._v(t._s(s.artist))]),t._v(" "),e("div",{model:{value:t.album,callback:function(s){t.album=s},expression:"album"}},[e("h4",[t._v(t._s(s.album))])]),t._v(" "),e("h5",[t._v("Album Cost: "+t._s(s.price))])]),t._v(" "),e("div",{staticClass:"col-xs-1"},[e("button",{staticClass:"btn btn-default plus",on:{click:function(e){t.addToMyTunes(s),t.addToMyPlaylist(s)}}},[t._v("+")])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("audio",{staticClass:"audio",attrs:{controls:""}},[e("source",{attrs:{src:s.preview,type:"audio/mp3 "}})])])])])])])])])])}))])])},staticRenderFns:[]}}],[13]);
//# sourceMappingURL=app.d66ae8220f9d8b3e3ea3.js.map