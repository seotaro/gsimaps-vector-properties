(this["webpackJsonpgsimaps-vector-properties"]=this["webpackJsonpgsimaps-vector-properties"]||[]).push([[0],{113:function(t,e){},148:function(t,e,n){},149:function(t,e,n){},153:function(t,e){},159:function(t,e,n){"use strict";n.r(e);var o=n(32),i=n.n(o),r=n(128),a=n.n(r),l=(n(148),n(172)),c=n(174),s=n(137),u=n(173),p=(n(149),n(48)),g={longitude:138,latitude:37,zoom:5,minZoom:4,maxZoom:16};var d=function(){return Object(p.jsxs)(o.Fragment,{children:[Object(p.jsxs)(l.a,{initialViewState:g,controller:!0,getTooltip:function(t){return function(t){if(!t)return null;var e="";for(var n in e+="<ul>",e+="<li>geometry</li>",e+="<ul>",e+="<li>type: ".concat(t.geometry.type,"</li>"),e+="<li>coordinates.length: ".concat(t.geometry.coordinates.length,"</li>"),e+="</ul>",e+="<li>properties</li>",e+="<ul>",t.properties){var o=t.properties[n];e+="<li>".concat(n," : ").concat(o,"</li>")}return e+="</ul>",{html:"".concat(e+="</ul>"),className:"tooltip",style:{backgroundColor:"black",color:"white",opacity:.75}}}(t.object)},getCursor:function(t){return t.isHovering?"pointer":"grab"},children:[Object(p.jsx)(u.a,{data:"https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf",minZoom:4,maxZoom:16,renderSubLayers:function(t){var e=t.tile.bbox,n=e.west,o=e.south,i=e.east,r=e.north;return new c.a(t,{data:t.data,bounds:[n,o,i,r],pickable:!0,highlightColor:[255,127,127],autoHighlight:!0})},getFillColor:function(t){switch(t.geometry.type){case"Point":return[96,96,96];default:return[192,192,192]}},getLineColor:function(t){switch(t.geometry.type){case"Point":case"Polygon":case"MultiPolygon":return[128,128,128,0];default:return[128,128,128]}},lineWidthMinPixels:1,pointRadiusScale:1,pointRadiusUnits:"pixels",pointRadiusMinPixels:4}),Object(p.jsx)(s.a,{id:"map",controller:!0,repeat:!0})]}),Object(p.jsx)("div",{className:"attribution",children:Object(p.jsx)("a",{href:"https://maps.gsi.go.jp/development/vt_expt.html",target:"_blank",rel:"noopener noreferrer",children:"\xa9 \u56fd\u571f\u5730\u7406\u9662\u30d9\u30af\u30c8\u30eb\u30bf\u30a4\u30eb\u63d0\u4f9b\u5b9f\u9a13"})})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),o(t),i(t),r(t),a(t)}))};a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root")),h()}},[[159,1,2]]]);