(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{193:function(e,t,r){e.exports=r(252)},252:function(e,t,r){"use strict";r.r(t);var a=r(269),n=r(0),i=r.n(n),s=r(40),o=r(132),c=r(268),l=r(16),u=r.n(l),h=r(29),d=r(18),p=r(45),g=r(37),f=r(6),y=r.n(f),m=r(7),b=r.n(m),w=r(9),P=r.n(w),S=r(10),v=r.n(S),R=r(1),I=r.n(R),A=r(8),E=r(4),O=r(68);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=I()(e);if(t){var n=I()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v()(this,r)}}var C=function(e){P()(r,e);var t=k(r);function r(){return y()(this,r),t.apply(this,arguments)}return b()(r,[{key:"render",value:function(){var e,t=(e=this.props,E.a.create({style:{justifyContent:"center",backgroundColor:e.color,alignItems:"center",height:e.height,width:e.width}})).style;return this.props.nudge&&(t=E.a.compose(t,function(e){return E.a.create({style:{top:e.top,bottom:e.bottom,left:e.left,right:e.right}})}(this.props).style)),this.props.horizontal&&(t=E.a.compose(t,(this.props,E.a.create({style:{justifyContent:"flex-start",flexDirection:"row"}})).style)),this.props.apart&&(t=E.a.compose(t,(this.props,E.a.create({style:{justifyContent:"space-between"}})).style)),this.props.radius&&(t=E.a.compose(t,function(e){return E.a.create({style:{borderRadius:e.radius}})}(this.props).style)),this.props.onPress?i.a.createElement(O.c,{onPress:this.props.onPress,style:t},this.props.children):i.a.createElement(A.a,{style:t},this.props.children)}}]),r}(i.a.Component),x=r(47);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=I()(e);if(t){var n=I()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v()(this,r)}}var D=function(e){P()(r,e);var t=_(r);function r(){return y()(this,r),t.apply(this,arguments)}return b()(r,[{key:"render",value:function(){var e,t=(e=this.props,E.a.create({style:{justifyContent:"center",alignItems:"center",height:e.height,width:e.width,resizeMode:"center",backgroundColor:"black",overflow:"hidden"}}));return i.a.createElement(x.a,{style:t.style,source:this.props.image},this.props.children)}}]),r}(i.a.Component),T={calculate_scaledImageDim:function(e,t){var r=e.width/e.height;if(t.width/t.height<r){var a=e.height/t.height;return{height:e.height,width:a*t.width,scalingRatio:a}}var n=e.width/t.width;return{height:n*t.height,width:e.width,scalingRatio:n}}},z=r(28);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=I()(e);if(t){var n=I()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v()(this,r)}}var B=function(e){P()(r,e);var t=N(r);function r(){return y()(this,r),t.apply(this,arguments)}return b()(r,[{key:"render",value:function(){var e,t=(e=this.props,E.a.create({scroll:{flexWrap:"wrap",overflow:"scroll",showsVerticalScrollIndicato:!1},default:{borderWidth:e.borderWidth,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:3,justifyContent:"center",flexWrap:"wrap",overflow:"hidden",paddingHorizontal:"3%",alignItems:"center"},justLeft:{borderWidth:0,borderLeftWidth:e.borderWidth,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:0,justifyContent:"center",alignItems:"center"},noTop:{borderWidth:e.borderWidth,borderTopWidth:0,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:3,justifyContent:"center",alignItems:"center",borderTopLeftRadius:0,borderTopRightRadius:0},noBottom:{borderWidth:e.borderWidth,borderBottomWidth:0,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:3,justifyContent:"center",alignItems:"center",borderBottomLeftRadius:0,borderBottomRightRadius:0},bottomCorners:{borderWidth:e.borderWidth,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:3,justifyContent:"center",alignItems:"center",borderBottomLeftRadius:0,borderBottomRightRadius:0,flexWrap:"wrap",overflow:"hidden"},corners:{borderWidth:e.borderWidth,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:0,justifyContent:"center",alignItems:"center"},justBorder:{borderWidth:e.borderWidth,borderColor:"#b4a7d6",width:e.width,height:e.height,justifyContent:"center",alignItems:"center"},fontStyle:{fontFamily:"PressStart2P_400Regular",fontSize:e.fontSize,textAlign:"center",textAlignVertical:"center",color:"white",opacity:1,lineHeight:e.lineHeight}})),r=t.default;return this.props.justLeft?r=t.justLeft:this.props.noTop?r=t.noTop:this.props.noBottom?r=t.noBottom:this.props.bottomCorners?r=t.bottomCorners:this.props.justBorder?r=t.justBorder:this.props.corners&&(r=t.corners),this.props.touchable?i.a.createElement(h.a,{style:r},i.a.createElement(C,{height:"100%",width:"100%"},i.a.createElement(z.a,{style:t.fontStyle},this.props.children))):i.a.createElement(A.a,{style:r},i.a.createElement(z.a,{style:t.fontStyle},this.props.children))}}]),r}(i.a.Component),H=function(e){return{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/"+e}},W={HomeScreenImage:{height:2880,width:5120,src:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/031_cover_kstr.png"}},themeImage:{Sad:{height:2880,width:5120,src:H("028_sad1.png")},Pumped:{height:2880,width:5120,src:H("032_pumped.png")},Cloudy:{height:2880,width:5120,src:H("034_cloud.png")},Romantic:{height:2880,width:5120,src:H("036_romantic.png")},Snowy:{height:2880,width:5120,src:H("038_snow.png")},Party:{height:2880,width:5120,src:H("039_party.png")},Beach:{height:2880,width:5120,src:H("042_beach.png")},Weird:{height:2880,width:5120,src:H("043_weirdagain.png")},Home:{height:2880,width:5120,src:H("044_home.png")},Spacy:{height:2880,width:5120,src:H("045_space.png")},Happy:{height:2880,width:5120,src:H("046_happy.png")}},themes:{Sad:"Sad",Pumped:"Pumped",Cloudy:"Cloudy",Romantic:"Romantic",Snowy:"Snowy",Party:"Party",Beach:"Beach",Weird:"Weird",Home:"Home",Spacy:"Spacy",Happy:"Happy"},themePlaylists:{Anime:[{name:"Mario Coin",artist:"Uhh",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/Mario-coin-sound.mp3"}},{name:"Linked Horizon",artist:"Revo",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/LinkedHorizon.mp3"}},{name:"Let Me Hear",artist:"Fear and Loathing in Las Vegas",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/LetMeHear.mp3"}},{name:"Heavenly Blue",artist:"Hiroyuki Sawano",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/HeavenlyBlue.mp3"}},{name:"The World",artist:"Yutaka Yamada",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/TheWorld.mp3"}},{name:"Sono Chi No Sadame",artist:"Bluff",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/SonoChiNoSadame.mp3"}},{name:"Unravel",artist:"Toru Kitajima",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/Unravel.mp3"}},{name:"Magia",artist:"Kalafina",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/angryPuella.mp3"}},{name:"Papermoon",artist:"Tomoko Kawase",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/Papermoon.mp3"}},{name:"Clattanoia",artist:"OxT",track:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/Clattanoia.mp3"}}],Beach:[{name:"Limonada Fria",artist:"Future You",track:H("FutureYou_Limonada%20Fria.wav")},{name:"Verano En Playa Azul",artist:"Michelle Lugo",track:H("Michelle_VeranoEnPlayaAzul.wav")}]},BACKGROUND_IMAGE:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/backgroundBanner.gif"},BACKGROUND_IMAGE_HEIGHT:867,BACKGROUND_IMAGE_WIDTH:1542,BUTTON_BORDER_WIDTH:7,GOOGLE_DOCS_TEXT_CONVERSION_RATIO:2.14285714,TILE_FONT_SIZE:24*2.14285714,SUBTITLE_FONT_SIZE:21*2.14285714,CLICK_FONT_SIZE:14*2.14285714,LINE_SPACING:1.15},L=function(e){var t=e.navigation,r=Object(n.useState)(d.a.get("window")),a=u()(r,2),s=a[0],o=a[1];window.addEventListener("resize",(function(){return o(d.a.get("window"))}));var c=Object(g.b)({PressStart2P_400Regular:g.a});if(!u()(c,1)[0])return i.a.createElement(p.a,null);var l={height:W.BACKGROUND_IMAGE_HEIGHT,width:W.BACKGROUND_IMAGE_WIDTH},f=T.calculate_scaledImageDim(s,l),y=f.scalingRatio*W.BUTTON_BORDER_WIDTH,m=f.scalingRatio*W.TILE_FONT_SIZE,b=m*W.LINE_SPACING;f.scalingRatio;return i.a.createElement(C,{color:"white",height:"100%",width:"100%",horizontal:!0},i.a.createElement(h.a,{onPress:function(){t.navigate("MatchMyMood")},style:{backgroundColor:"rgb(238,238,238)",height:"100%",width:"50%",justifyContent:"center",alignItems:"center"}},i.a.createElement(B,{borderWidth:y,fontSize:m,lineHeight:b,height:"20%",width:"80%"},"[Match My",i.a.createElement("br",null),"Mood!]")),i.a.createElement(h.a,{onPress:function(){t.navigate("TakeMeSomewhere")},style:{backgroundColor:"#8e7cc3c6",height:"100%",width:"50%",justifyContent:"center",alignItems:"center"}},i.a.createElement(B,{borderWidth:y,fontSize:m,lineHeight:b,height:"20%",width:"80%"},"[Take Me",i.a.createElement("br",null),"Somewhere!]")))},j=r(23),M=r.n(j),G=r(5),F=r.n(G);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){F()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=I()(e);if(t){var n=I()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v()(this,r)}}var J=function(e){P()(r,e);var t=K(r);function r(e){var a;return y()(this,r),(a=t.call(this,e)).fillRectangle=function(e,t){var r=a.fillRectangleHeight,n=Math.ceil(a.radius),s=r*e,o={width:n-Math.ceil(Math.sqrt(Math.pow(a.radius,2)-Math.pow(s,2))),height:r},c=s+n,l={};"topLeft"===t?l={left:0,bottom:c}:"bottomLeft"===t?l={left:0,top:c}:"topRight"===t?l={right:0,top:c}:"bottomRight"===t&&(l={right:0,bottom:c});var u=""+e+t;return i.a.createElement(A.a,{key:u,style:U(U(U({},a.baseRectangleStyle),o),l)})},a.renderLines=function(e){return M()(Array(a.numberOfRectangles)).map((function(t,r){return a.fillRectangle(r+1,e)}))},a.fillRectangles=function(){return i.a.createElement(i.a.Fragment,null,a.renderLines("topLeft"),a.renderLines("bottomLeft"),a.renderLines("topRight"),a.renderLines("bottomRight"))},a.numberOfRectangles=15,a.radius=a.props.circleDiameter/2,a.fillRectangleHeight=a.radius/(a.numberOfRectangles+1),a.baseRectangleStyle={position:"absolute",zIndex:10,elevation:10},a}return b()(r,[{key:"render",value:function(){var e=V(this.props);return i.a.createElement(A.a,{style:e.container},i.a.createElement(h.a,{activeOpacity:.2,style:e.button,onPress:this.props.onPress},this.props.children),this.fillRectangles())}}]),r}(i.a.Component),V=function(e){return E.a.create({container:{position:"relative",zIndex:0},button:{backgroundColor:"clear",justifyContent:"center",alignContent:"center",borderRadius:e.circleDiameter/2,width:e.circleDiameter,height:e.circleDiameter,top:e.top,bottom:e.bottom,right:e.right,left:e.left}})},Z=r(36);function X(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=I()(e);if(t){var n=I()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v()(this,r)}}var q=function(e){P()(r,e);var t=X(r);function r(){return y()(this,r),t.apply(this,arguments)}return b()(r,[{key:"render",value:function(){return i.a.createElement(A.a,{style:{bottom:this.props.centerHeight+this.props.displaceRadius*Math.sin(this.props.angle),left:this.props.centerWidth+this.props.displaceRadius*Math.cos(this.props.angle),position:"absolute"}},i.a.createElement(J,{circleDiameter:this.props.iconSize,onPress:this.props.onPress},i.a.createElement(Z.a,{style:{height:this.props.iconSize,width:this.props.iconSize,borderRadius:100},source:this.props.image})))}}]),r}(i.a.Component),Q={Back:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/back.png",name:"Back"},Pumped:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/pumped.png",name:"Pumped"},Lazy:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/lazy.png",name:"Lazy"},Happy:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/happy.png",name:"Happy"},Weird:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/weird.png",name:"Weird"},Sad:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/sad.png",name:"Sad"},Romantic:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/romance.png",name:"Romantic"},Random:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/random.png",name:"Random"}},$=["Back","Pumped","Lazy","Happy","Weird","Sad","Romantic","Random"],ee=function(e){var t=e.navigation,r=Object(n.useState)(d.a.get("window")),a=u()(r,2),s=a[0],o=a[1];window.addEventListener("resize",(function(){return o(d.a.get("window"))}));var c=Object(g.b)({PressStart2P_400Regular:g.a});if(!u()(c,1)[0])return i.a.createElement(p.a,null);var l={height:W.BACKGROUND_IMAGE_HEIGHT,width:W.BACKGROUND_IMAGE_WIDTH},h=T.calculate_scaledImageDim(s,l),f=(h.scalingRatio,h.scalingRatio,h.scalingRatio,h.height/2-180*h.scalingRatio/2),y=h.width/2-180*h.scalingRatio/2,m=320*h.scalingRatio,b=$.map((function(e,r){return"Back"===e?i.a.createElement(q,{key:e,centerHeight:f,centerWidth:y,displaceRadius:m,image:Q[e],angle:Math.PI/2+Math.PI/4*r,iconSize:180*h.scalingRatio,onPress:function(){t.navigate("ChooseMoodOrPlace")}}):i.a.createElement(q,{key:e,centerHeight:f,centerWidth:y,displaceRadius:m,image:Q[e],angle:Math.PI/2+Math.PI/4*r,iconSize:180*h.scalingRatio,onPress:function(){t.navigate("Playlist",{themeName:e})}})}));return i.a.createElement(C,{color:"black",height:"100%",width:"100%"},i.a.createElement(D,{image:W.BACKGROUND_IMAGE,height:h.height,width:h.width},b))},te={Back:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/back.png",name:"Back"},Home:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/home.png",name:"Home"},Cloudy:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/clouds.png",name:"cloudy"},Beach:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/beach.png",name:"Beach"},Party:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/party.png",name:"Party"},Icy:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/cold%20updated.png",name:"Icy"},Space:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/space.png",name:"Space"},Random:{uri:"https://yahtzeerage.github.io/CYOA-Assets/assets/random.png",name:"Random"}},re=["Back","Home","Cloudy","Beach","Party","Icy","Space","Random"],ae=function(e){var t=e.navigation,r=Object(n.useState)(d.a.get("window")),a=u()(r,2),s=a[0],o=a[1];window.addEventListener("resize",(function(){return o(d.a.get("window"))}));var c=Object(g.b)({PressStart2P_400Regular:g.a});if(!u()(c,1)[0])return i.a.createElement(p.a,null);var l={height:W.BACKGROUND_IMAGE_HEIGHT,width:W.BACKGROUND_IMAGE_WIDTH},h=T.calculate_scaledImageDim(s,l),f=(h.scalingRatio,h.scalingRatio,h.scalingRatio,h.height/2-180*h.scalingRatio/2),y=h.width/2-180*h.scalingRatio/2,m=320*h.scalingRatio,b=re.map((function(e,r){return"Back"===e?i.a.createElement(q,{key:e,centerHeight:f,centerWidth:y,displaceRadius:m,image:te[e],angle:Math.PI/2+Math.PI/4*r,iconSize:180*h.scalingRatio,onPress:function(){t.navigate("ChooseMoodOrPlace")}}):i.a.createElement(q,{key:e,centerHeight:f,centerWidth:y,displaceRadius:m,image:te[e],angle:Math.PI/2+Math.PI/4*r,iconSize:180*h.scalingRatio,onPress:function(){t.navigate("Playlist",{themeName:e})}})}));return i.a.createElement(C,{color:"black",height:"100%",width:"100%"},i.a.createElement(D,{image:W.BACKGROUND_IMAGE,height:h.height,width:h.width},b))},ne=r(2),ie=r.n(ne);function se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=I()(e);if(t){var n=I()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v()(this,r)}}var oe=function(e){P()(r,e);var t=se(r);function r(){return y()(this,r),t.apply(this,arguments)}return b()(r,[{key:"render",value:function(){var e,t=(e=this.props,E.a.create({scroll:{flexWrap:"wrap",overflow:"scroll",showsVerticalScrollIndicato:!1},default:{borderWidth:e.borderWidth,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:3,flexWrap:"wrap",overflow:"hidden"},justLeft:{borderWidth:0,borderLeftWidth:e.borderWidth,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:0,justifyContent:"center",alignItems:"center"},noTop:{borderWidth:e.borderWidth,borderTopWidth:0,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:3,justifyContent:"center",alignItems:"center",borderTopLeftRadius:0,borderTopRightRadius:0},noBottom:{borderWidth:e.borderWidth,borderBottomWidth:0,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:3,justifyContent:"center",alignItems:"center",borderBottomLeftRadius:0,borderBottomRightRadius:0},bottomCorners:{borderWidth:e.borderWidth,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:3,justifyContent:"center",alignItems:"center",borderBottomLeftRadius:0,borderBottomRightRadius:0,flexWrap:"wrap",overflow:"hidden"},corners:{borderWidth:e.borderWidth,borderColor:"#b4a7d6",backgroundColor:"#8e7cc3c6",width:e.width,height:e.height,borderRadius:0,justifyContent:"center",alignItems:"center"},justBorder:{borderWidth:e.borderWidth,borderColor:"#b4a7d6",width:e.width,height:e.height,justifyContent:"center",alignItems:"center"}})),r=t.default;return this.props.justLeft?r=t.justLeft:this.props.bottomCorners?r=t.bottomCorners:this.props.justBorder&&(r=t.justBorder),this.props.noBackground&&(r=E.a.compose(r,E.a.create({backgroundColor:"clear"}))),this.props.borderColor&&(r=E.a.compose(r,E.a.create({borderColor:this.props.borderColor}))),this.props.noTop&&(r=E.a.compose(r,E.a.create({borderTopWidth:0}))),this.props.noBottom&&(r=E.a.compose(r,E.a.create({borderBottomWidth:0}))),this.props.noBorder&&(r=E.a.compose(r,E.a.create({borderWidth:0}))),this.props.corners&&(r=E.a.compose(r,E.a.create({borderRadius:0}))),this.props.touchable?i.a.createElement(h.a,{style:r},i.a.createElement(C,{height:"100%",width:"100%"},this.props.children)):i.a.createElement(A.a,{style:r},this.props.children)}}]),r}(i.a.Component),ce=function(){function e(t,r){y()(this,e),this.playlist=null,this.onStartSong=null,this.onEndSong=null,this.soundPlayer=null,this.States={INITIAL:"INITIAL",PLAYING:"PLAYING",PAUSED:"PAUSED",FINISHED:"FINISHED"},this.playlist=r,this.soundPlayer=t}return b()(e,[{key:"getSongIndex",value:function(e){return this.playlist.findIndex((function(t){return t.name===e}))}},{key:"playPause",value:function(e,t,r){var a,n,i=this,s=arguments;return ie.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:a=s.length>3&&void 0!==s[3]?s[3]:function(e){},n=this.getSongIndex(r),o.t0=e,o.next=o.t0===this.States.INITIAL?5:o.t0===this.States.PLAYING?11:o.t0===this.States.PAUSED?23:o.t0===this.States.FINISHED?35:37;break;case 5:return o.next=7,ie.a.awrap(this.soundPlayer.loadAsync(this.playlist[n].track));case 7:return o.next=9,ie.a.awrap(this.soundPlayer.playAsync());case 9:return this.soundPlayer._onPlaybackStatusUpdate=function(e){return ie.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==e.didJustFinish){t.next=4;break}return t.next=3,ie.a.awrap(i.soundPlayer.unloadAsync());case 3:a(r);case 4:case"end":return t.stop()}}),null,null,null,Promise)},o.abrupt("return",this.States.PLAYING);case 11:if(t!==r){o.next=15;break}return o.next=14,ie.a.awrap(this.soundPlayer.pauseAsync());case 14:return o.abrupt("return",this.States.PAUSED);case 15:return o.next=17,ie.a.awrap(this.soundPlayer.unloadAsync());case 17:return o.next=19,ie.a.awrap(this.soundPlayer.loadAsync(this.playlist[n].track));case 19:return o.next=21,ie.a.awrap(this.soundPlayer.playAsync());case 21:return this.soundPlayer._onPlaybackStatusUpdate=function(e){return ie.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==e.didJustFinish){t.next=4;break}return t.next=3,ie.a.awrap(i.soundPlayer.unloadAsync());case 3:a(r);case 4:case"end":return t.stop()}}),null,null,null,Promise)},o.abrupt("return",this.States.PLAYING);case 23:if(t!==r){o.next=27;break}return o.next=26,ie.a.awrap(this.soundPlayer.playAsync());case 26:return o.abrupt("return",this.States.PLAYING);case 27:return o.next=29,ie.a.awrap(this.soundPlayer.unloadAsync());case 29:return o.next=31,ie.a.awrap(this.soundPlayer.loadAsync(this.playlist[n].track));case 31:return o.next=33,ie.a.awrap(this.soundPlayer.playAsync());case 33:return this.soundPlayer._onPlaybackStatusUpdate=function(e){return ie.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==e.didJustFinish){t.next=4;break}return t.next=3,ie.a.awrap(i.soundPlayer.unloadAsync());case 3:a(r);case 4:case"end":return t.stop()}}),null,null,null,Promise)},o.abrupt("return",this.States.PLAYING);case 35:return console.log("Song Finished"),o.abrupt("return",this.States.FINISHED);case 37:case"end":return o.stop()}}),null,this,null,Promise)}},{key:"skipToSong",value:function(e,t){var r,a,n=this,i=arguments;return ie.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:r=i.length>2&&void 0!==i[2]?i[2]:function(e){},a=this.getSongIndex(t),s.t0=e,s.next=s.t0===this.States.INITIAL?5:s.t0===this.States.PLAYING?10:s.t0===this.States.PAUSED?18:s.t0===this.States.FINISHED?26:28;break;case 5:return s.next=7,ie.a.awrap(this.soundPlayer.loadAsync(this.playlist[a].track));case 7:return s.next=9,ie.a.awrap(this.soundPlayer.playAsync());case 9:this.soundPlayer._onPlaybackStatusUpdate=function(e){return ie.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!0!==e.didJustFinish){a.next=4;break}return a.next=3,ie.a.awrap(n.soundPlayer.unloadAsync());case 3:r(t);case 4:case"end":return a.stop()}}),null,null,null,Promise)};case 10:return s.next=12,ie.a.awrap(this.soundPlayer.unloadAsync());case 12:return s.next=14,ie.a.awrap(this.soundPlayer.loadAsync(this.playlist[a].track));case 14:return s.next=16,ie.a.awrap(this.soundPlayer.playAsync());case 16:return this.soundPlayer._onPlaybackStatusUpdate=function(e){return ie.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!0!==e.didJustFinish){a.next=4;break}return a.next=3,ie.a.awrap(n.soundPlayer.unloadAsync());case 3:r(t);case 4:case"end":return a.stop()}}),null,null,null,Promise)},s.abrupt("return",this.States.PLAYING);case 18:return s.next=20,ie.a.awrap(this.soundPlayer.unloadAsync());case 20:return s.next=22,ie.a.awrap(this.soundPlayer.loadAsync(this.playlist[a].track));case 22:return s.next=24,ie.a.awrap(this.soundPlayer.playAsync());case 24:return this.soundPlayer._onPlaybackStatusUpdate=function(e){return ie.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!0!==e.didJustFinish){a.next=4;break}return a.next=3,ie.a.awrap(n.soundPlayer.unloadAsync());case 3:r(t);case 4:case"end":return a.stop()}}),null,null,null,Promise)},s.abrupt("return",this.States.PLAYING);case 26:return console.log("Song Finished"),s.abrupt("return",this.States.FINISHED);case 28:case"end":return s.stop()}}),null,this,null,Promise)}}]),e}(),le=r(73),ue=r(41),he=r(266),de=r(267);function pe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=I()(e);if(t){var n=I()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v()(this,r)}}var ge=.5,fe=1,ye=function(e){P()(r,e);var t=pe(r);function r(e){var a;return y()(this,r),(a=t.call(this,e)).state={isNexting:!1,flatListRef:null,isPlaying:!1,playbackInstance:null,currentIndex:0,volume:1,isBuffering:!1,opacities:Object.assign.apply(Object,[{}].concat(M()(a.props.playlist.map((function(e){return F()({},e.name,fe)})))))},a.onPlayPause_dispatchSideEffects=function(e){var t=function(e,t){var r=Object.entries(e).map((function(e){var t=u()(e,2),r=t[0];t[1];return F()({},r,fe)}));return r[t.type]=t.payload,r}(a.state.opacities,{type:a.props.playlist[a.state.currentIndex].name,payload:e?ge:fe});a.state.flatListRef.scrollToIndex({animated:!0,index:a.state.currentIndex}),a.setState({opacities:t})},a.onPlaybackStatusUpdate=function(e){if(a.setState({isBuffering:e.isBuffering}),e.didJustFinish){if(a.state.currentIndex===a.props.playlist.length-1)return void a.handlePlayPause();a.handleNextTrack()}},a.handleSongButton=function(e){var t,r,n;return ie.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(t=a.state.currentIndex,e!==a.props.playlist[a.state.currentIndex]){i.next=6;break}return i.next=4,ie.a.awrap(a.handlePlayPause());case 4:i.next=27;break;case 6:if(t!==a.props.playlist.length-1){i.next=10;break}e=a.props.playlist[0].name,i.next=27;break;case 10:if(-1===(r=a.props.playlist.findIndex((function(t){return t.name===e})))&&console.warn("ERROR: SONG NOT FOUND: 103"),i.prev=12,-1===r&&(r=0),!(n=a.state.playbackInstance)){i.next=21;break}return i.next=18,ie.a.awrap(n.unloadAsync());case 18:a.setState({currentIndex:r}),a.setState({isPlaying:!0}),a.loadAudio();case 21:a.onPlayPause_dispatchSideEffects(!0),i.next=27;break;case 24:i.prev=24,i.t0=i.catch(12),console.error(i.t0);case 27:case"end":return i.stop()}}),null,null,[[12,24]],Promise)},a.handlePlayPause=function(){var e,t,r;return ie.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=a.state,t=e.isPlaying,r=e.playbackInstance,!t){n.next=6;break}return n.next=4,ie.a.awrap(r.pauseAsync());case 4:n.next=8;break;case 6:return n.next=8,ie.a.awrap(r.playAsync());case 8:a.onPlayPause_dispatchSideEffects(!t),a.setState({isPlaying:!t});case 10:case"end":return n.stop()}}),null,null,null,Promise)},a.handlePreviousTrack=function(){var e,t,r;return ie.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=a.state,t=e.playbackInstance,r=e.currentIndex,e.isPlaying||0!==r){n.next=6;break}return n.next=4,ie.a.awrap(a.handlePlayPause());case 4:n.next=17;break;case 6:if(0!==r){n.next=10;break}return n.abrupt("return");case 10:if(!t){n.next=17;break}return n.next=13,ie.a.awrap(t.unloadAsync());case 13:r<a.props.playlist.length-1?r-=1:r=0,a.setState({currentIndex:r}),a.setState({isPlaying:!0}),a.loadAudio();case 17:a.onPlayPause_dispatchSideEffects(!0);case 18:case"end":return n.stop()}}),null,null,null,Promise)},a.handleNextTrack=function(){var e,t,r,n;return ie.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e=a.state,t=e.playbackInstance,r=e.currentIndex,n=e.isPlaying,!a.state.isNexting){i.next=5;break}return i.abrupt("return");case 5:if(n||0!==r){i.next=10;break}return i.next=8,ie.a.awrap(a.handlePlayPause());case 8:i.next=18;break;case 10:if(!t){i.next=18;break}return a.state.isNexting=!0,i.next=14,ie.a.awrap(t.unloadAsync());case 14:r<a.props.playlist.length-1?r+=1:r=0,a.setState({currentIndex:r}),a.setState({isPlaying:!0}),a.loadAudio();case 18:a.onPlayPause_dispatchSideEffects(!0),a.state.isNexting=!1;case 20:case"end":return i.stop()}}),null,null,null,Promise)},a}return b()(r,[{key:"loadAudio",value:function(){var e,t,r,a,n,i,s;return ie.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=this.state,t=e.currentIndex,r=e.isPlaying,a=e.volume,o.prev=1,n=new le.a.Sound,i={uri:this.props.playlist[t].track.uri},s={shouldPlay:r,volume:a},n.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate),o.next=8,ie.a.awrap(n.loadAsync(i,s,!1));case 8:this.setState({playbackInstance:n}),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(1),console.log(o.t0);case 14:case"end":return o.stop()}}),null,this,[[1,11]],Promise)}},{key:"componentDidMount",value:function(){return ie.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.a.awrap(le.a.setAudioModeAsync({allowsRecordingIOS:!1,interruptionModeIOS:le.a.INTERRUPTION_MODE_IOS_DO_NOT_MIX,playsInSilentModeIOS:!0,interruptionModeAndroid:le.a.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,shouldDuckAndroid:!0,staysActiveInBackground:!1,playThroughEarpieceAndroid:!0}));case 3:this.loadAudio(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),null,this,[[0,6]],Promise)}},{key:"componentWillUnmount",value:function(){return ie.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.playbackInstance.unloadAsync();case 1:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var e=this;return i.a.createElement(C,{color:"clear",height:"54.5454545%",width:"50%",top:".6%",nudge:!0},i.a.createElement(C,{height:"20%",width:"50%"},i.a.createElement(B,{noBottom:!0,height:"100%",width:"100%",borderWidth:this.props.bannerBorderWidth,fontSize:this.props.subtitleFontSize,lineHeight:this.props.subtitleLineHeight},this.props.themeName)),i.a.createElement(oe,{height:"65%",width:"100%",borderWidth:this.props.bannerBorderWidth,corners:!0},i.a.createElement(O.a,{ref:function(t){e.state.flatListRef=t},vertical:!0,showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,keyExtractor:function(e){return e.name},data:this.props.playlist,renderItem:function(t){var r=t.item;return i.a.createElement(oe,{height:"100%",width:"100%",corners:!0,noBorder:!0,noBackground:!0},i.a.createElement(h.a,{onPress:function(){e.handleSongButton(r.name)}},i.a.createElement(A.a,{style:{opacity:e.state.opacities[r.name]}},i.a.createElement(ue.a,{style:{flexDirection:"row"},horizontal:!0,showsHorizontalScrollIndicator:!1,nestedScrollEnabled:!0},i.a.createElement(A.a,null,i.a.createElement(z.a,{style:e.props.fontStyle(e.props.subtitleFontSize,e.props.subtitleLineHeight,"flex-start",e.props.subtitleFontSize/2).style},r.name," / ",r.artist))),i.a.createElement(ue.a,null,i.a.createElement(A.a,null,i.a.createElement(z.a,{style:e.props.fontStyle(e.props.titleFontSize,e.props.titleLineHeight,"center",0).style},"--------------"))))))}})),i.a.createElement(C,{color:"clear",height:"15%",width:"100%"},i.a.createElement(B,{noTop:!0,height:"100%",width:"100%",borderWidth:this.props.bannerBorderWidth,fontSize:this.props.subtitleFontSize,lineHeight:this.props.subtitleLineHeight},i.a.createElement(h.a,{onPress:this.handlePreviousTrack},i.a.createElement(he.a,{name:"play-skip-back-circle",size:this.props.titleFontSize,color:"white"})),i.a.createElement(z.a,null," "),i.a.createElement(h.a,{onPress:this.handlePlayPause},this.state.isPlaying?i.a.createElement(de.a,{name:"pausecircle",size:this.props.titleFontSize,color:"white"}):i.a.createElement(de.a,{name:"play",size:this.props.titleFontSize,color:"white"})),i.a.createElement(z.a,null," "),i.a.createElement(h.a,{onPress:this.handleNextTrack},i.a.createElement(he.a,{name:"play-skip-forward-circle",size:this.props.titleFontSize,color:"white"})))))}}]),r}(i.a.Component);function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var be="play",we=.5,Pe=1,Se=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(Object(r),!0).forEach((function(t){F()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);return r[t.type]===we?r[t.type]=Pe:r[t.type]=we,r},ve="INITIAL",Re=function(e){var t,r,a=e.navigation,s=a.getParam("themeName");switch(s){case W.themes.Beach:t=W.themeImage[s],r=W.themePlaylists[s];break;default:t=W.HomeScreenImage,r=W.themePlaylists.Anime}console.log(s);var o=i.a.useState(new le.a.Sound),c=u()(o,2),l=c[0],h=(c[1],r.map((function(e){var t={};return t[e.name]=Pe,t}))),f=i.a.useReducer(Se,h),y=u()(f,2),m=y[0],b=(y[1],Object(n.useState)(ve)),w=u()(b,2),P=(w[0],w[1],Object(n.useState)("")),S=u()(P,2),v=(S[0],S[1],new ce(l,r),Object(n.useState)(be)),R=u()(v,2),I=R[0],A=(R[1],Object(n.useState)(d.a.get("window"))),O=u()(A,2),k=O[0],x=O[1];window.addEventListener("resize",(function(){return x(d.a.get("window"))}));var _=Object(g.b)({PressStart2P_400Regular:g.a});if(!u()(_,1)[0])return i.a.createElement(p.a,null);var z=W.HomeScreenImage.height,N=W.HomeScreenImage.width,B=N/W.BACKGROUND_IMAGE_WIDTH,H={height:z,width:N},L=T.calculate_scaledImageDim(k,H),j=L.scalingRatio*W.BUTTON_BORDER_WIDTH*B,M=L.scalingRatio*W.TILE_FONT_SIZE*B,G=1*M,F=L.scalingRatio*W.SUBTITLE_FONT_SIZE*B,Y=1.5*F,U=function(e,t,r,a){return E.a.create({style:{fontFamily:"PressStart2P_400Regular",fontSize:e,textAlign:"left",textAlignVertical:"center",color:"white",opacity:1,lineHeight:t,paddingLeft:a,alignSelf:r,alignContent:"flex-start",alignItems:"flex-start"}})};return console.log(U(5,4)),i.a.createElement(C,{color:"black",height:"100%",width:"100%"},i.a.createElement(D,{image:t.src,height:L.height,width:L.width},i.a.createElement(ye,{navigation:a,themeName:a.getParam("themeName"),playlist:r,opacityState:m,fontStyle:U,subtitleFontSize:F,subtitleLineHeight:Y,titleFontSize:M,titleLineHeight:G,playPauseState:I,bannerBorderWidth:j})))};function Ie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=I()(e);if(t){var n=I()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v()(this,r)}}var Ae=function(e){P()(r,e);var t=Ie(r);function r(e){var a;return y()(this,r),(a=t.call(this,e)).props=e,console.log(a.props),a}return b()(r,[{key:"componentDidMount",value:function(){(0,this.props.props.navigation.navigate)("Home")}},{key:"render",value:function(){return i.a.createElement(p.a,null)}}]),r}(i.a.Component);Ae.navigationOptions={title:"First"};var Ee=function(e){var t=Object(n.useState)(d.a.get("window")),r=u()(t,2),a=r[0],s=r[1];window.addEventListener("resize",(function(){return s(d.a.get("window"))}));var o=Object(g.b)({PressStart2P_400Regular:g.a});if(!u()(o,1)[0])return i.a.createElement(p.a,null);var c={height:W.BACKGROUND_IMAGE_HEIGHT,width:W.BACKGROUND_IMAGE_WIDTH};T.calculate_scaledImageDim(a,c);return i.a.createElement(A.a,null,i.a.createElement(Ae,{props:e}))},Oe=r(14),ke=function(e){var t=e.navigation,r=Object(n.useState)(d.a.get("window")),a=u()(r,2),s=a[0],o=a[1];window.addEventListener("resize",(function(){return o(d.a.get("window"))}));var c=Object(g.b)({PressStart2P_400Regular:g.a});if(!u()(c,1)[0])return i.a.createElement(p.a,null);var l=W.HomeScreenImage.height,f=W.HomeScreenImage.width,y=f/W.BACKGROUND_IMAGE_WIDTH,m={height:l,width:f},b=T.calculate_scaledImageDim(s,m),w=W.BUTTON_BORDER_WIDTH*b.scalingRatio*y,P=W.TILE_FONT_SIZE*b.scalingRatio*y,S=P*W.LINE_SPACING,v=b.scalingRatio*W.CLICK_FONT_SIZE*y,R=v*W.LINE_SPACING;return i.a.createElement(C,{color:"black",height:"100%",width:"100%"},i.a.createElement(h.a,{onPress:function(){t.navigate("ChooseMoodOrPlace")}},i.a.createElement(D,{image:W.HomeScreenImage.src,height:b.height,width:b.width},i.a.createElement(C,{apart:!0,nudge:!0,color:"clear",height:"84.5%",width:"50%",top:".6%"},i.a.createElement(C,{color:"clear",height:"36%",width:"100%"},i.a.createElement(B,{borderWidth:w,fontSize:P,lineHeight:S,height:"78%",width:"100%",bottomCorners:!0},"Choose Your Own Audioventure!"),i.a.createElement(B,{borderWidth:w,fontSize:v,lineHeight:R,height:"22%",width:"100%",noTop:!0},"Click anywhere to start!")),i.a.createElement(B,{borderWidth:w,fontSize:v,lineHeight:R,height:"9%",width:"33%",touchable:!0},"Credits")))))},Ce=Object(c.a)({Root:Ee,Home:ke,ChooseMoodOrPlace:L,MatchMyMood:ee,TakeMeSomewhere:ae,Playlist:Re},{initialRouteName:"Root",headerMode:"none",defaultNavigationOptions:{title:"App",cardStyle:{backgroundColor:"black"}}}),xe=Oe.a.select({web:function(e){return Object(o.createBrowserApp)(e,{history:"hash"})},default:function(e){return Object(s.createAppContainer)(e)}})(Ce);Object(a.a)(xe)}},[[193,1,2]]]);
//# sourceMappingURL=app.205154ae.chunk.js.map