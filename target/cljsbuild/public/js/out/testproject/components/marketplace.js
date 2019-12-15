// Compiled by ClojureScript 1.10.597 {}
goog.provide('testproject.components.marketplace');
goog.require('cljs.core');
goog.require('reagent.core');
testproject.components.marketplace.cart_total = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
testproject.components.marketplace.shop = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Shoes","Shoes",-1890243969),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),"Shoes",new cljs.core.Keyword(null,"price","price",22129180),(5),new cljs.core.Keyword(null,"img","img",1442687358),"https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"], null),new cljs.core.Keyword(null,"Shirt","Shirt",-22346699),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),"Shirt",new cljs.core.Keyword(null,"price","price",22129180),(10),new cljs.core.Keyword(null,"img","img",1442687358),"https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"], null)], null));
testproject.components.marketplace.marketplace_component = (function testproject$components$marketplace$marketplace_component(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.marketplace.left","div.marketplace.left",-1613840704),cljs.core.map.call(null,(function (item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Item: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,testproject.components.marketplace.shop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"item","item",249373802)], null)))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,cljs.core.deref.call(null,testproject.components.marketplace.shop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"item","item",249373802)], null))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.call(null,cljs.core.deref.call(null,testproject.components.marketplace.shop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,new cljs.core.Keyword(null,"img","img",1442687358)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Add to cart",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.call(null,testproject.components.marketplace.cart_total,cljs.core.update,item,cljs.core.inc);
})], null)], null)], null);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,testproject.components.marketplace.shop)))], null);
});
});
testproject.components.marketplace.get_cart_contents = (function testproject$components$marketplace$get_cart_contents(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function testproject$components$marketplace$get_cart_contents_$_iter__49590(s__49591){
return (new cljs.core.LazySeq(null,(function (){
var s__49591__$1 = s__49591;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__49591__$1);
if(temp__5735__auto__){
var s__49591__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49591__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__49591__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__49593 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__49592 = (0);
while(true){
if((i__49592 < size__4581__auto__)){
var key = cljs.core._nth.call(null,c__4580__auto__,i__49592);
cljs.core.chunk_append.call(null,b__49593,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,testproject.components.marketplace.shop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"item","item",249373802)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,testproject.components.marketplace.cart_total),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__49594 = (i__49592 + (1));
i__49592 = G__49594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49593),testproject$components$marketplace$get_cart_contents_$_iter__49590.call(null,cljs.core.chunk_rest.call(null,s__49591__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49593),null);
}
} else {
var key = cljs.core.first.call(null,s__49591__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,testproject.components.marketplace.shop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"item","item",249373802)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,testproject.components.marketplace.cart_total),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),testproject$components$marketplace$get_cart_contents_$_iter__49590.call(null,cljs.core.rest.call(null,s__49591__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,testproject.components.marketplace.cart_total)));
})()], null);
});
});
testproject.components.marketplace.get_total = (function testproject$components$marketplace$get_total(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (key){
return (cljs.core.get_in.call(null,cljs.core.deref.call(null,testproject.components.marketplace.cart_total),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)) * cljs.core.get_in.call(null,cljs.core.deref.call(null,testproject.components.marketplace.shop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"price","price",22129180)], null)));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,testproject.components.marketplace.cart_total))))], null);
});
});
testproject.components.marketplace.checkout_component = (function testproject$components$marketplace$checkout_component(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right","div.right",1671235139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.components.marketplace.get_cart_contents], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Total: ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.components.marketplace.get_total], null)], null)], null)], null);
});
});
testproject.components.marketplace.marketplace = (function testproject$components$marketplace$marketplace(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.marketplace-container","div.marketplace-container",522151690),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Marketplace"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.components.marketplace.marketplace_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.components.marketplace.checkout_component], null)], null);
});
});

//# sourceMappingURL=marketplace.js.map?rel=1576119169583
