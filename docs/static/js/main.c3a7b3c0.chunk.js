(this["webpackJsonpgsimaps-vector-properties"]=this["webpackJsonpgsimaps-vector-properties"]||[]).push([[0],{113:function(t,e){},148:function(t,e,o){},149:function(t,e,o){},153:function(t,e){},159:function(t,e,o){"use strict";o.r(e);var n=o(36),i=o.n(n),r=o(128),a=o.n(r),l=(o(148),o(172)),c=o(174),s=o(137),u=o(173),p=(o(149),o(66)),g={longitude:138,latitude:37,zoom:5,minZoom:4,maxZoom:16};var d=function(){return Object(p.jsxs)(l.a,{initialViewState:g,controller:!0,getTooltip:function(t){return function(t){if(!t)return null;var e="";for(var o in e+="<ul>",e+="<li>geometry</li>",e+="<ul>",e+="<li>type: ".concat(t.geometry.type,"</li>"),e+="<li>coordinates.length: ".concat(t.geometry.coordinates.length,"</li>"),e+="</ul>",e+="<li>properties</li>",e+="<ul>",t.properties){var n=t.properties[o];e+="<li>".concat(o," : ").concat(n,"</li>")}return e+="</ul>",{html:"".concat(e+="</ul>"),className:"tooltip",style:{backgroundColor:"black",color:"white",opacity:.75}}}(t.object)},getCursor:function(t){return t.isHovering?"pointer":"grab"},children:[Object(p.jsx)(u.a,{data:"https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf",minZoom:4,maxZoom:16,renderSubLayers:function(t){var e=t.tile.bbox,o=e.west,n=e.south,i=e.east,r=e.north;return new c.a(t,{data:t.data,bounds:[o,n,i,r],pickable:!0,highlightColor:[255,127,127],autoHighlight:!0})},getFillColor:function(t){switch(t.geometry.type){case"Point":return[96,96,96];default:return[192,192,192]}},getLineColor:function(t){switch(t.geometry.type){case"Point":case"Polygon":case"MultiPolygon":return[128,128,128,0];default:return[128,128,128]}},lineWidthMinPixels:1,pointRadiusScale:1,pointRadiusUnits:"pixels",pointRadiusMinPixels:4}),Object(p.jsx)(s.a,{id:"map",controller:!0,repeat:!0})]})},m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,178)).then((function(e){var o=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;o(t),n(t),i(t),r(t),a(t)}))};a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root")),m()}},[[159,1,2]]]);