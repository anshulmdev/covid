(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{335:function(e,t,r){"use strict";t.a={colors:{default:"#344675",primary:"#42b883",info:"#1d8cf8",danger:"#fd5d93",orange:"#ff8a76",teal:"#00d6b4",primaryGradient:["rgba(76, 211, 150, 0.1)","rgba(53, 183, 125, 0)","rgba(119,52,169,0)"],purpleGradient:["rgba(253,93,147,0.8)","rgba(253,93,147,0)"]},MAPS_API_KEY:"YOUR_GOOGLE_MAPS_API_KEY"}},481:function(e,t,r){var content=r(503);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(6).default)("e00d129c",content,!0,{sourceMap:!1})},502:function(e,t,r){"use strict";var l=r(481);r.n(l).a},503:function(e,t,r){(t=r(5)(!1)).push([e.i,".card-map{min-height:350px}.card-map .map{height:300px;width:100%}",""]),e.exports=t},515:function(e,t,r){"use strict";r.r(t);r(18);var l=r(4),o=r(335),n={name:"google",methods:{initRegularMap:function(){var e=new window.google.maps.LatLng(40.748817,-73.985428),t={zoom:8,center:e,scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},map=new window.google.maps.Map(document.getElementById("regularMap"),t);new window.google.maps.Marker({position:e,title:"Regular Map!"}).setMap(map)}},mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(21).then(r.t.bind(null,512,7));case 2:(l=(l=t.sent).default).KEY=o.a.MAPS_API_KEY,l.load((function(t){e.initRegularMap(t)}));case 6:case"end":return t.stop()}}),t)})))()}},y=(r(502),r(2)),component=Object(y.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("card",{attrs:{type:"plain"}},[t("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[this._v("Google Maps")]),this._v(" "),t("div",{staticClass:"map",attrs:{id:"regularMap"}})])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);