// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('testproject.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
goog.require('clojure.string');
testproject.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.cst$kw$index], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$items], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",cljs.core.cst$kw$item], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",cljs.core.cst$kw$about], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/analytics",cljs.core.cst$kw$analytics], null)], null));
testproject.core.path_for = (function testproject$core$path_for(var_args){
var args__4795__auto__ = [];
var len__4789__auto___10315 = arguments.length;
var i__4790__auto___10316 = (0);
while(true){
if((i__4790__auto___10316 < len__4789__auto___10315)){
args__4795__auto__.push((arguments[i__4790__auto___10316]));

var G__10317 = (i__4790__auto___10316 + (1));
i__4790__auto___10316 = G__10317;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return testproject.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(testproject.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__10311){
var vec__10312 = p__10311;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10312,(0),null);
if(cljs.core.truth_(params)){
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(testproject.core.router,route,params));
} else {
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(testproject.core.router,route));
}
}));

(testproject.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(testproject.core.path_for.cljs$lang$applyTo = (function (seq10309){
var G__10310 = cljs.core.first(seq10309);
var seq10309__$1 = cljs.core.next(seq10309);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10310,seq10309__$1);
}));

testproject.core.path_for(cljs.core.cst$kw$about);
testproject.core.home_page = (function testproject$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Welcome to testproject"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,testproject.core.path_for(cljs.core.cst$kw$items)], null),"Items of testproject"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/broken/link"], null),"Broken link"], null)], null)], null)], null);
});
});
testproject.core.items_page = (function testproject$core$items_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"The items of testproject"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),cljs.core.cst$kw$key,["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,testproject.core.path_for.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$item_DASH_id,item_id], null)], 0))], null),"Item: ",item_id], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(60)))], null)], null);
});
});
testproject.core.item_page = (function testproject$core$item_page(){
return (function (){
var routing_data = reagent.session.get(cljs.core.cst$kw$route);
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_params,cljs.core.cst$kw$item_DASH_id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)," of testproject"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,testproject.core.path_for(cljs.core.cst$kw$items)], null),"Back to the list of items"], null)], null)], null);
});
});
testproject.core.lister = (function testproject$core$lister(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4582__auto__ = (function testproject$core$lister_$_iter__10318(s__10319){
return (new cljs.core.LazySeq(null,(function (){
var s__10319__$1 = s__10319;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10319__$1);
if(temp__5735__auto__){
var s__10319__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10319__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__10319__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__10321 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__10320 = (0);
while(true){
if((i__10320 < size__4581__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__10320);
cljs.core.chunk_append(b__10321,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)));

var G__10322 = (i__10320 + (1));
i__10320 = G__10322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10321),testproject$core$lister_$_iter__10318(cljs.core.chunk_rest(s__10319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10321),null);
}
} else {
var item = cljs.core.first(s__10319__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Item ",item], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)),testproject$core$lister_$_iter__10318(cljs.core.rest(s__10319__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(items);
})()], null);
});
testproject.core.lister_user = (function testproject$core$lister_user(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Here is a list:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.lister,(new cljs.core.List(null,"Cake",(new cljs.core.List(null,"Cookie",(new cljs.core.List(null,"Pie",null,(1),null)),(2),null)),(3),null))], null)], null);
});
testproject.core.click_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
testproject.core.counting_component = (function testproject$core$counting_component(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"The atom ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"click-count"], null)," has value: ",cljs.core.deref(testproject.core.click_count),". ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Click me!",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(testproject.core.click_count,cljs.core.inc);
})], null)], null)], null);
});
testproject.core.timer_component = (function testproject$core$timer_component(){
var seconds_elapsed = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seconds_elapsed,cljs.core.inc);
}),(1000));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Seconds Elapsed: ",cljs.core.deref(seconds_elapsed)], null);
});
});
testproject.core.about_page = (function testproject$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"About testproject"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.lister_user], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.counting_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.timer_component], null)], null);
});
});
testproject.core.analytics_component = (function testproject$core$analytics_component(words){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$word_DASH_counting,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$words,"words to be analyzed."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$words,words], null)], null);
});
});
testproject.core.analytics = (function testproject$core$analytics(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Analytics Dashboard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.analytics_component,"Hi there"], null)], null)], null);
});
});
testproject.core.page_for = (function testproject$core$page_for(route){
var G__10323 = route;
var G__10323__$1 = (((G__10323 instanceof cljs.core.Keyword))?G__10323.fqn:null);
switch (G__10323__$1) {
case "index":
return new cljs.core.Var(function(){return testproject.core.home_page;},cljs.core.cst$sym$testproject$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$testproject$core,cljs.core.cst$sym$home_DASH_page,"/Users/Siunami/Desktop/testproject/src/cljs/testproject/core.cljs",16,1,34,34,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.home_page)?testproject.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return testproject.core.about_page;},cljs.core.cst$sym$testproject$core_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$testproject$core,cljs.core.cst$sym$about_DASH_page,"/Users/Siunami/Desktop/testproject/src/cljs/testproject/core.cljs",17,1,87,87,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.about_page)?testproject.core.about_page.cljs$lang$test:null)]));

break;
case "items":
return new cljs.core.Var(function(){return testproject.core.items_page;},cljs.core.cst$sym$testproject$core_SLASH_items_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$testproject$core,cljs.core.cst$sym$items_DASH_page,"/Users/Siunami/Desktop/testproject/src/cljs/testproject/core.cljs",17,1,44,44,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.items_page)?testproject.core.items_page.cljs$lang$test:null)]));

break;
case "item":
return new cljs.core.Var(function(){return testproject.core.item_page;},cljs.core.cst$sym$testproject$core_SLASH_item_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$testproject$core,cljs.core.cst$sym$item_DASH_page,"/Users/Siunami/Desktop/testproject/src/cljs/testproject/core.cljs",16,1,54,54,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.item_page)?testproject.core.item_page.cljs$lang$test:null)]));

break;
case "analytics":
return new cljs.core.Var(function(){return testproject.core.analytics;},cljs.core.cst$sym$testproject$core_SLASH_analytics,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$testproject$core,cljs.core.cst$sym$analytics,"/Users/Siunami/Desktop/testproject/src/cljs/testproject/core.cljs",16,1,117,117,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testproject.core.analytics)?testproject.core.analytics.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10323__$1)].join('')));

}
});
testproject.core.current_page = (function testproject$core$current_page(){
return (function (){
var page = cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1(reagent.session.get(cljs.core.cst$kw$route));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,testproject.core.path_for(cljs.core.cst$kw$index)], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,testproject.core.path_for(cljs.core.cst$kw$about)], null),"About testproject"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,testproject.core.path_for(cljs.core.cst$kw$analytics)], null),"Analytics Dashboard"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"testproject was generated by the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/reagent-project/reagent-template"], null),"Reagent Template"], null),"."], null)], null)], null);
});
});
testproject.core.mount_root = (function testproject$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.core.current_page], null),document.getElementById("app"));
});
testproject.core.init_BANG_ = (function testproject$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
var match = reitit.frontend.match_by_path(testproject.core.router,path);
var current_page = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match));
var route_params = cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_page,testproject.core.page_for(current_page),cljs.core.cst$kw$route_DASH_params,route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(testproject.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return testproject.core.mount_root();
});
