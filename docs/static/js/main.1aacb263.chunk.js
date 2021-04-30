(this["webpackJsonpgsimaps-vector-properties"]=this["webpackJsonpgsimaps-vector-properties"]||[]).push([[0],{131:function(e,t){},177:function(e,t,n){},178:function(e,t,n){},184:function(e,t){},189:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),r=n(89),i=n.n(r),c=(n(177),n(128)),s=n.n(c),l=n(149),p=n(159),u=n(223),d=n(230),b=n(224),g=n(158),m=n(160),h=n(228),j=(n(178),n(227)),f=n(232),y=n(225),x=n(217),v=n(218),O=n(155),k=Object(O.a)({palette:{primary:{main:"#eeeeee",background:"#111111",opacity:.75},secondary:{main:"#eeeeee"}},typography:{fontFamily:["Noto Sans","sans-serif"].join(","),h1:{fontSize:24,fontWeight:"600"},body1:{fontSize:16,fontWeight:"300"}}}),w=n(40),C=Object(x.a)((function(){return{root:{display:"inline-block",position:"absolute",top:0,zIndex:10,padding:"4px 10px",margin:k.spacing(2),color:k.palette.primary.main,background:k.palette.primary.background,opacity:k.palette.primary.opacity,borderRadius:"8px"},checkbox:{color:k.palette.primary.main}}}));var S=function(e){var t=C();return Object(w.jsx)(v.a,{theme:k,children:Object(w.jsx)(j.a,{className:t.root,children:Object(w.jsx)(f.a,{control:Object(w.jsx)(y.a,{className:t.checkbox,checked:e.isEnableBasemap,onChange:function(t){e.handleChangeEnableBasemap(t.target.checked)}}),label:"\u30e9\u30b9\u30bf\u30fc\u30bf\u30a4\u30eb\u3092\u91cd\u306d\u308b"})})})},z={longitude:138,latitude:37,zoom:5,minZoom:4,maxZoom:16};var P=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1];return Object(w.jsxs)(a.Fragment,{children:[Object(w.jsx)(S,{isEnableBasemap:n,handleChangeEnableBasemap:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(w.jsxs)(u.a,{initialViewState:z,controller:!0,getTooltip:function(e){return function(e){if(!e)return null;var t="";for(var n in t+="<ul>",t+="<li>geometry</li>",t+="<ul>",t+="<li>type: ".concat(e.geometry.type,"</li>"),t+="<li>coordinates.length: ".concat(e.geometry.coordinates.length,"</li>"),t+="</ul>",t+="<li>properties</li>",t+="<ul>",e.properties){var a=e.properties[n];t+="<li>".concat(n," : ").concat(a,"</li>")}return t+="</ul>",{html:"".concat(t+="</ul>"),className:"tooltip",style:{backgroundColor:"#111111",color:"#eeeeee",opacity:.75}}}(e.object)},getCursor:function(e){return e.isHovering?"pointer":"grab"},children:[Object(w.jsx)(m.a,{id:"raster",data:"https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",minZoom:5,maxZoom:18,tileSize:256,opacity:1,visible:n,renderSubLayers:function(e){var t=e.tile.bbox,n=t.west,a=t.south,o=t.east,r=t.north;return new d.a(e,{data:null,image:e.data,bounds:[n,a,o,r]})}}),Object(w.jsx)(h.a,{data:"https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf",minZoom:4,maxZoom:16,renderSubLayers:function(e){var t=e.tile.bbox,n=t.west,a=t.south,o=t.east,r=t.north;return new b.a(e,{data:e.data,bounds:[n,a,o,r],pickable:!0,highlightColor:[255,127,127],autoHighlight:!0})},getFillColor:function(e){switch(e.geometry.type){case"Point":return[96,96,96];default:return[192,192,192]}},getLineColor:function(e){switch(e.geometry.type){case"Point":case"Polygon":case"MultiPolygon":return[128,128,128,0];default:return[128,128,128]}},lineWidthMinPixels:1,pointRadiusScale:1,pointRadiusUnits:"pixels",pointRadiusMinPixels:4}),Object(w.jsx)(g.a,{id:"map",controller:!0,repeat:!0})]}),Object(w.jsxs)("div",{className:"attribution",children:[Object(w.jsx)("a",{href:"https://maps.gsi.go.jp/development/ichiran.html",target:"_blank",rel:"noopener noreferrer",children:"\u5730\u7406\u9662\u30bf\u30a4\u30eb"}),"\uff5c",Object(w.jsx)("a",{href:"https://maps.gsi.go.jp/development/vt_expt.html",target:"_blank",rel:"noopener noreferrer",children:"\u56fd\u571f\u5730\u7406\u9662\u30d9\u30af\u30c8\u30eb\u30bf\u30a4\u30eb\u63d0\u4f9b\u5b9f\u9a13"})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};i.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root")),F()}},[[189,1,2]]]);