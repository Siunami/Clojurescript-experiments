// Compiled by ClojureScript 1.10.597 {}
goog.provide('testproject.components.burritomaps');
goog.require('cljs.core');
goog.require('reagent.core');
testproject.components.burritomaps.base_url = "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=";
testproject.components.burritomaps.address_url = (function testproject$components$burritomaps$address_url(street,city){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(street),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(city)].join('');
});
testproject.components.burritomaps.street_view_url = (function testproject$components$burritomaps$street_view_url(street,city){
return [testproject.components.burritomaps.base_url,testproject.components.burritomaps.address_url.call(null,street,city)].join('');
});
testproject.components.burritomaps.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"street","street",1870012303),"24 Willie Mays Plaza",new cljs.core.Keyword(null,"city","city",-393302614),"San Francisco"], null));
testproject.components.burritomaps.input = (function testproject$components$burritomaps$input(k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,testproject.components.burritomaps.app_state).call(null,k),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49830_SHARP_){
return cljs.core.swap_BANG_.call(null,testproject.components.burritomaps.app_state,cljs.core.assoc,k,p1__49830_SHARP_.target.value);
})], null)], null);
});
testproject.components.burritomaps.home = (function testproject$components$burritomaps$home(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Street: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.components.burritomaps.input,new cljs.core.Keyword(null,"street","street",1870012303)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"City: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.components.burritomaps.input,new cljs.core.Keyword(null,"city","city",-393302614)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),testproject.components.burritomaps.street_view_url.call(null,cljs.core.deref.call(null,testproject.components.burritomaps.app_state).call(null,new cljs.core.Keyword(null,"street","street",1870012303)),cljs.core.deref.call(null,testproject.components.burritomaps.app_state).call(null,new cljs.core.Keyword(null,"city","city",-393302614)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),testproject.components.burritomaps.street_view_url.call(null,cljs.core.deref.call(null,testproject.components.burritomaps.app_state).call(null,new cljs.core.Keyword(null,"street","street",1870012303)),cljs.core.deref.call(null,testproject.components.burritomaps.app_state).call(null,new cljs.core.Keyword(null,"city","city",-393302614)))], null)], null)], null);
});
testproject.components.burritomaps.render_map = (function testproject$components$burritomaps$render_map(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Burrito maps"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.components.burritomaps.home], null)], null);
});

//# sourceMappingURL=burritomaps.js.map?rel=1576135794893
