// Compiled by ClojureScript 1.10.597 {}
goog.provide('testproject.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
goog.require('clojure.string');
goog.require('testproject.components.marketplace');
goog.require('testproject.components.datastructures');
goog.require('testproject.components.burritomaps');
testproject.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/analytics",new cljs.core.Keyword(null,"analytics","analytics",316686129)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/marketplace",new cljs.core.Keyword(null,"marketplace","marketplace",236355452)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/datastructures",new cljs.core.Keyword(null,"datastructures","datastructures",-1085076002)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/burritomaps",new cljs.core.Keyword(null,"burritomaps","burritomaps",-1653667391)], null)], null));
testproject.core.path_for = (function testproject$core$path_for(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49839 = arguments.length;
var i__4790__auto___49840 = (0);
while(true){
if((i__4790__auto___49840 < len__4789__auto___49839)){
args__4795__auto__.push((arguments[i__4790__auto___49840]));

var G__49841 = (i__4790__auto___49840 + (1));
i__4790__auto___49840 = G__49841;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return testproject.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(testproject.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__49835){
var vec__49836 = p__49835;
var params = cljs.core.nth.call(null,vec__49836,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,testproject.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,testproject.core.router,route));
}
}));

(testproject.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(testproject.core.path_for.cljs$lang$applyTo = (function (seq49833){
var G__49834 = cljs.core.first.call(null,seq49833);
var seq49833__$1 = cljs.core.next.call(null,seq49833);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49834,seq49833__$1);
}));

testproject.core.path_for.call(null,new cljs.core.Keyword(null,"about","about",1423892543));
testproject.core.home_page = (function testproject$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to testproject"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),testproject.core.path_for.call(null,new cljs.core.Keyword(null,"items","items",1031954938))], null),"Items of testproject"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/broken/link"], null),"Broken link"], null)], null)], null)], null);
});
});
testproject.core.items_page = (function testproject$core$items_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The items of testproject"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),testproject.core.path_for.call(null,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null))], null),"Item: ",item_id], null)], null);
}),cljs.core.range.call(null,(1),(60)))], null)], null);
});
});
testproject.core.item_page = (function testproject$core$item_page(){
return (function (){
var routing_data = reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309));
var item = cljs.core.get_in.call(null,routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)," of testproject"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),testproject.core.path_for.call(null,new cljs.core.Keyword(null,"items","items",1031954938))], null),"Back to the list of items"], null)], null)], null);
});
});
testproject.core.lister = (function testproject$core$lister(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function testproject$core$lister_$_iter__49842(s__49843){
return (new cljs.core.LazySeq(null,(function (){
var s__49843__$1 = s__49843;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__49843__$1);
if(temp__5735__auto__){
var s__49843__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49843__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__49843__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__49845 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__49844 = (0);
while(true){
if((i__49844 < size__4581__auto__)){
var item = cljs.core._nth.call(null,c__4580__auto__,i__49844);
cljs.core.chunk_append.call(null,b__49845,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__49846 = (i__49844 + (1));
i__49844 = G__49846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49845),testproject$core$lister_$_iter__49842.call(null,cljs.core.chunk_rest.call(null,s__49843__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49845),null);
}
} else {
var item = cljs.core.first.call(null,s__49843__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),testproject$core$lister_$_iter__49842.call(null,cljs.core.rest.call(null,s__49843__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,items);
})()], null);
});
testproject.core.lister_user = (function testproject$core$lister_user(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Here is a list:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.lister,(new cljs.core.List(null,"Cake",(new cljs.core.List(null,"Cookie",(new cljs.core.List(null,"Pie",null,(1),null)),(2),null)),(3),null))], null)], null);
});
testproject.core.click_count = reagent.core.atom.call(null,(0));
testproject.core.counting_component = (function testproject$core$counting_component(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"click-count"], null)," has value: ",cljs.core.deref.call(null,testproject.core.click_count),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Click me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,testproject.core.click_count,cljs.core.inc);
})], null)], null)], null);
});
testproject.core.timer_component = (function testproject$core$timer_component(){
var seconds_elapsed = reagent.core.atom.call(null,(0));
return (function (){
setTimeout((function (){
return cljs.core.swap_BANG_.call(null,seconds_elapsed,cljs.core.inc);
}),(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Seconds Elapsed: ",cljs.core.deref.call(null,seconds_elapsed)], null);
});
});
testproject.core.about_page = (function testproject$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About testproject"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.lister_user], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.counting_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.timer_component], null)], null);
});
});
testproject.core.analytics_component = (function testproject$core$analytics_component(words){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-counting","div.word-counting",1153985324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.words","p.words",-262088989),"words to be analyzed."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.words","p.words",-262088989),words], null)], null);
});
});
testproject.core.analytics = (function testproject$core$analytics(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Analytics Dashboard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.analytics_component,"Hi there"], null)], null)], null);
});
});
testproject.core.page_for = (function testproject$core$page_for(route){
var G__49847 = route;
var G__49847__$1 = (((G__49847 instanceof cljs.core.Keyword))?G__49847.fqn:null);
switch (G__49847__$1) {
case "index":
return new cljs.core.Var(function(){return testproject.core.home_page;},new cljs.core.Symbol("testproject.core","home-page","testproject.core/home-page",1414442063,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testproject.core","testproject.core",-1315960624,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/testproject/core.cljs",16,1,40,40,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.home_page)?testproject.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return testproject.core.about_page;},new cljs.core.Symbol("testproject.core","about-page","testproject.core/about-page",154886595,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testproject.core","testproject.core",-1315960624,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/testproject/core.cljs",17,1,93,93,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.about_page)?testproject.core.about_page.cljs$lang$test:null)]));

break;
case "items":
return new cljs.core.Var(function(){return testproject.core.items_page;},new cljs.core.Symbol("testproject.core","items-page","testproject.core/items-page",990945576,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testproject.core","testproject.core",-1315960624,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"src/cljs/testproject/core.cljs",17,1,50,50,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.items_page)?testproject.core.items_page.cljs$lang$test:null)]));

break;
case "item":
return new cljs.core.Var(function(){return testproject.core.item_page;},new cljs.core.Symbol("testproject.core","item-page","testproject.core/item-page",-1250254762,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testproject.core","testproject.core",-1315960624,null),new cljs.core.Symbol(null,"item-page","item-page",1282130364,null),"src/cljs/testproject/core.cljs",16,1,60,60,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.item_page)?testproject.core.item_page.cljs$lang$test:null)]));

break;
case "analytics":
return new cljs.core.Var(function(){return testproject.core.analytics;},new cljs.core.Symbol("testproject.core","analytics","testproject.core/analytics",-807852142,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testproject.core","testproject.core",-1315960624,null),new cljs.core.Symbol(null,"analytics","analytics",1957217656,null),"src/cljs/testproject/core.cljs",16,1,123,123,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.analytics)?testproject.core.analytics.cljs$lang$test:null)]));

break;
case "marketplace":
return new cljs.core.Var(function(){return testproject.components.marketplace.marketplace;},new cljs.core.Symbol("testproject.components.marketplace","marketplace","testproject.components.marketplace/marketplace",671409353,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testproject.components.marketplace","testproject.components.marketplace",1687632172,null),new cljs.core.Symbol(null,"marketplace","marketplace",1876886979,null),"src/cljs/testproject/components/marketplace.cljs",18,1,53,53,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.components.marketplace.marketplace)?testproject.components.marketplace.marketplace.cljs$lang$test:null)]));

break;
case "datastructures":
return new cljs.core.Var(function(){return testproject.components.datastructures.render_structures;},new cljs.core.Symbol("testproject.components.datastructures","render-structures","testproject.components.datastructures/render-structures",1898816994,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testproject.components.datastructures","testproject.components.datastructures",-54549677,null),new cljs.core.Symbol(null,"render-structures","render-structures",-998078611,null),"/Users/Siunami/Desktop/testproject/src/cljs/testproject/components/datastructures.cljs",24,1,15,15,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.components.datastructures.render_structures)?testproject.components.datastructures.render_structures.cljs$lang$test:null)]));

break;
case "burritomaps":
return new cljs.core.Var(function(){return testproject.components.burritomaps.render_map;},new cljs.core.Symbol("testproject.components.burritomaps","render-map","testproject.components.burritomaps/render-map",-549672022,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testproject.components.burritomaps","testproject.components.burritomaps",639331057,null),new cljs.core.Symbol(null,"render-map","render-map",-1538950959,null),"src/cljs/testproject/components/burritomaps.cljs",17,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.components.burritomaps.render_map)?testproject.components.burritomaps.render_map.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49847__$1)].join('')));

}
});
testproject.core.current_page = (function testproject$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),testproject.core.path_for.call(null,new cljs.core.Keyword(null,"index","index",-1531685915))], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),testproject.core.path_for.call(null,new cljs.core.Keyword(null,"about","about",1423892543))], null),"About testproject"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),testproject.core.path_for.call(null,new cljs.core.Keyword(null,"analytics","analytics",316686129))], null),"Analytics Dashboard"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),testproject.core.path_for.call(null,new cljs.core.Keyword(null,"marketplace","marketplace",236355452))], null),"Marketplace"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),testproject.core.path_for.call(null,new cljs.core.Keyword(null,"datastructures","datastructures",-1085076002))], null),"Data Structures"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),testproject.core.path_for.call(null,new cljs.core.Keyword(null,"burritomaps","burritomaps",-1653667391))], null),"Burrito Maps"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null);
});
});
testproject.core.mount_root = (function testproject$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.current_page], null),document.getElementById("app"));
});
testproject.core.init_BANG_ = (function testproject$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,testproject.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),testproject.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,testproject.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return testproject.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1576135794948
