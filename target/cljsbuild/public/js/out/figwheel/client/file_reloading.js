// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4185__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41390_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41390_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41391 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41392 = null;
var count__41393 = (0);
var i__41394 = (0);
while(true){
if((i__41394 < count__41393)){
var n = cljs.core._nth.call(null,chunk__41392,i__41394);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41395 = seq__41391;
var G__41396 = chunk__41392;
var G__41397 = count__41393;
var G__41398 = (i__41394 + (1));
seq__41391 = G__41395;
chunk__41392 = G__41396;
count__41393 = G__41397;
i__41394 = G__41398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41391);
if(temp__5735__auto__){
var seq__41391__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41391__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__41391__$1);
var G__41399 = cljs.core.chunk_rest.call(null,seq__41391__$1);
var G__41400 = c__4609__auto__;
var G__41401 = cljs.core.count.call(null,c__4609__auto__);
var G__41402 = (0);
seq__41391 = G__41399;
chunk__41392 = G__41400;
count__41393 = G__41401;
i__41394 = G__41402;
continue;
} else {
var n = cljs.core.first.call(null,seq__41391__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41403 = cljs.core.next.call(null,seq__41391__$1);
var G__41404 = null;
var G__41405 = (0);
var G__41406 = (0);
seq__41391 = G__41403;
chunk__41392 = G__41404;
count__41393 = G__41405;
i__41394 = G__41406;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__41407){
var vec__41408 = p__41407;
var _ = cljs.core.nth.call(null,vec__41408,(0),null);
var v = cljs.core.nth.call(null,vec__41408,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__41411){
var vec__41412 = p__41411;
var k = cljs.core.nth.call(null,vec__41412,(0),null);
var v = cljs.core.nth.call(null,vec__41412,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41424_41432 = cljs.core.seq.call(null,deps);
var chunk__41425_41433 = null;
var count__41426_41434 = (0);
var i__41427_41435 = (0);
while(true){
if((i__41427_41435 < count__41426_41434)){
var dep_41436 = cljs.core._nth.call(null,chunk__41425_41433,i__41427_41435);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_41436;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41436));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41436,(depth + (1)),state);
} else {
}


var G__41437 = seq__41424_41432;
var G__41438 = chunk__41425_41433;
var G__41439 = count__41426_41434;
var G__41440 = (i__41427_41435 + (1));
seq__41424_41432 = G__41437;
chunk__41425_41433 = G__41438;
count__41426_41434 = G__41439;
i__41427_41435 = G__41440;
continue;
} else {
var temp__5735__auto___41441 = cljs.core.seq.call(null,seq__41424_41432);
if(temp__5735__auto___41441){
var seq__41424_41442__$1 = temp__5735__auto___41441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41424_41442__$1)){
var c__4609__auto___41443 = cljs.core.chunk_first.call(null,seq__41424_41442__$1);
var G__41444 = cljs.core.chunk_rest.call(null,seq__41424_41442__$1);
var G__41445 = c__4609__auto___41443;
var G__41446 = cljs.core.count.call(null,c__4609__auto___41443);
var G__41447 = (0);
seq__41424_41432 = G__41444;
chunk__41425_41433 = G__41445;
count__41426_41434 = G__41446;
i__41427_41435 = G__41447;
continue;
} else {
var dep_41448 = cljs.core.first.call(null,seq__41424_41442__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_41448;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41448));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41448,(depth + (1)),state);
} else {
}


var G__41449 = cljs.core.next.call(null,seq__41424_41442__$1);
var G__41450 = null;
var G__41451 = (0);
var G__41452 = (0);
seq__41424_41432 = G__41449;
chunk__41425_41433 = G__41450;
count__41426_41434 = G__41451;
i__41427_41435 = G__41452;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41428){
var vec__41429 = p__41428;
var seq__41430 = cljs.core.seq.call(null,vec__41429);
var first__41431 = cljs.core.first.call(null,seq__41430);
var seq__41430__$1 = cljs.core.next.call(null,seq__41430);
var x = first__41431;
var xs = seq__41430__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__41415_SHARP_){
return clojure.set.difference.call(null,p1__41415_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41453 = cljs.core.seq.call(null,provides);
var chunk__41454 = null;
var count__41455 = (0);
var i__41456 = (0);
while(true){
if((i__41456 < count__41455)){
var prov = cljs.core._nth.call(null,chunk__41454,i__41456);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41465_41473 = cljs.core.seq.call(null,requires);
var chunk__41466_41474 = null;
var count__41467_41475 = (0);
var i__41468_41476 = (0);
while(true){
if((i__41468_41476 < count__41467_41475)){
var req_41477 = cljs.core._nth.call(null,chunk__41466_41474,i__41468_41476);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41477,prov);


var G__41478 = seq__41465_41473;
var G__41479 = chunk__41466_41474;
var G__41480 = count__41467_41475;
var G__41481 = (i__41468_41476 + (1));
seq__41465_41473 = G__41478;
chunk__41466_41474 = G__41479;
count__41467_41475 = G__41480;
i__41468_41476 = G__41481;
continue;
} else {
var temp__5735__auto___41482 = cljs.core.seq.call(null,seq__41465_41473);
if(temp__5735__auto___41482){
var seq__41465_41483__$1 = temp__5735__auto___41482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41465_41483__$1)){
var c__4609__auto___41484 = cljs.core.chunk_first.call(null,seq__41465_41483__$1);
var G__41485 = cljs.core.chunk_rest.call(null,seq__41465_41483__$1);
var G__41486 = c__4609__auto___41484;
var G__41487 = cljs.core.count.call(null,c__4609__auto___41484);
var G__41488 = (0);
seq__41465_41473 = G__41485;
chunk__41466_41474 = G__41486;
count__41467_41475 = G__41487;
i__41468_41476 = G__41488;
continue;
} else {
var req_41489 = cljs.core.first.call(null,seq__41465_41483__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41489,prov);


var G__41490 = cljs.core.next.call(null,seq__41465_41483__$1);
var G__41491 = null;
var G__41492 = (0);
var G__41493 = (0);
seq__41465_41473 = G__41490;
chunk__41466_41474 = G__41491;
count__41467_41475 = G__41492;
i__41468_41476 = G__41493;
continue;
}
} else {
}
}
break;
}


var G__41494 = seq__41453;
var G__41495 = chunk__41454;
var G__41496 = count__41455;
var G__41497 = (i__41456 + (1));
seq__41453 = G__41494;
chunk__41454 = G__41495;
count__41455 = G__41496;
i__41456 = G__41497;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41453);
if(temp__5735__auto__){
var seq__41453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41453__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__41453__$1);
var G__41498 = cljs.core.chunk_rest.call(null,seq__41453__$1);
var G__41499 = c__4609__auto__;
var G__41500 = cljs.core.count.call(null,c__4609__auto__);
var G__41501 = (0);
seq__41453 = G__41498;
chunk__41454 = G__41499;
count__41455 = G__41500;
i__41456 = G__41501;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41453__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41469_41502 = cljs.core.seq.call(null,requires);
var chunk__41470_41503 = null;
var count__41471_41504 = (0);
var i__41472_41505 = (0);
while(true){
if((i__41472_41505 < count__41471_41504)){
var req_41506 = cljs.core._nth.call(null,chunk__41470_41503,i__41472_41505);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41506,prov);


var G__41507 = seq__41469_41502;
var G__41508 = chunk__41470_41503;
var G__41509 = count__41471_41504;
var G__41510 = (i__41472_41505 + (1));
seq__41469_41502 = G__41507;
chunk__41470_41503 = G__41508;
count__41471_41504 = G__41509;
i__41472_41505 = G__41510;
continue;
} else {
var temp__5735__auto___41511__$1 = cljs.core.seq.call(null,seq__41469_41502);
if(temp__5735__auto___41511__$1){
var seq__41469_41512__$1 = temp__5735__auto___41511__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41469_41512__$1)){
var c__4609__auto___41513 = cljs.core.chunk_first.call(null,seq__41469_41512__$1);
var G__41514 = cljs.core.chunk_rest.call(null,seq__41469_41512__$1);
var G__41515 = c__4609__auto___41513;
var G__41516 = cljs.core.count.call(null,c__4609__auto___41513);
var G__41517 = (0);
seq__41469_41502 = G__41514;
chunk__41470_41503 = G__41515;
count__41471_41504 = G__41516;
i__41472_41505 = G__41517;
continue;
} else {
var req_41518 = cljs.core.first.call(null,seq__41469_41512__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41518,prov);


var G__41519 = cljs.core.next.call(null,seq__41469_41512__$1);
var G__41520 = null;
var G__41521 = (0);
var G__41522 = (0);
seq__41469_41502 = G__41519;
chunk__41470_41503 = G__41520;
count__41471_41504 = G__41521;
i__41472_41505 = G__41522;
continue;
}
} else {
}
}
break;
}


var G__41523 = cljs.core.next.call(null,seq__41453__$1);
var G__41524 = null;
var G__41525 = (0);
var G__41526 = (0);
seq__41453 = G__41523;
chunk__41454 = G__41524;
count__41455 = G__41525;
i__41456 = G__41526;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41527_41531 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41528_41532 = null;
var count__41529_41533 = (0);
var i__41530_41534 = (0);
while(true){
if((i__41530_41534 < count__41529_41533)){
var ns_41535 = cljs.core._nth.call(null,chunk__41528_41532,i__41530_41534);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41535);


var G__41536 = seq__41527_41531;
var G__41537 = chunk__41528_41532;
var G__41538 = count__41529_41533;
var G__41539 = (i__41530_41534 + (1));
seq__41527_41531 = G__41536;
chunk__41528_41532 = G__41537;
count__41529_41533 = G__41538;
i__41530_41534 = G__41539;
continue;
} else {
var temp__5735__auto___41540 = cljs.core.seq.call(null,seq__41527_41531);
if(temp__5735__auto___41540){
var seq__41527_41541__$1 = temp__5735__auto___41540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41527_41541__$1)){
var c__4609__auto___41542 = cljs.core.chunk_first.call(null,seq__41527_41541__$1);
var G__41543 = cljs.core.chunk_rest.call(null,seq__41527_41541__$1);
var G__41544 = c__4609__auto___41542;
var G__41545 = cljs.core.count.call(null,c__4609__auto___41542);
var G__41546 = (0);
seq__41527_41531 = G__41543;
chunk__41528_41532 = G__41544;
count__41529_41533 = G__41545;
i__41530_41534 = G__41546;
continue;
} else {
var ns_41547 = cljs.core.first.call(null,seq__41527_41541__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41547);


var G__41548 = cljs.core.next.call(null,seq__41527_41541__$1);
var G__41549 = null;
var G__41550 = (0);
var G__41551 = (0);
seq__41527_41531 = G__41548;
chunk__41528_41532 = G__41549;
count__41529_41533 = G__41550;
i__41530_41534 = G__41551;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__41552__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41553__i = 0, G__41553__a = new Array(arguments.length -  0);
while (G__41553__i < G__41553__a.length) {G__41553__a[G__41553__i] = arguments[G__41553__i + 0]; ++G__41553__i;}
  args = new cljs.core.IndexedSeq(G__41553__a,0,null);
} 
return G__41552__delegate.call(this,args);};
G__41552.cljs$lang$maxFixedArity = 0;
G__41552.cljs$lang$applyTo = (function (arglist__41554){
var args = cljs.core.seq(arglist__41554);
return G__41552__delegate(args);
});
G__41552.cljs$core$IFn$_invoke$arity$variadic = G__41552__delegate;
return G__41552;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__41555_SHARP_,p2__41556_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41555_SHARP_)),p2__41556_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__41557_SHARP_,p2__41558_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41557_SHARP_),p2__41558_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__41559 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__41559.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__41559.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__41559;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41560){if((e41560 instanceof Error)){
var e = e41560;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41560;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41561){if((e41561 instanceof Error)){
var e = e41561;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41561;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41562 = cljs.core._EQ_;
var expr__41563 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41562.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41563))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__41562.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41563))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__41562.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41563))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41565,callback){
var map__41566 = p__41565;
var map__41566__$1 = (((((!((map__41566 == null))))?(((((map__41566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41566):map__41566);
var file_msg = map__41566__$1;
var request_url = cljs.core.get.call(null,map__41566__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_41604){
var state_val_41605 = (state_41604[(1)]);
if((state_val_41605 === (7))){
var inst_41600 = (state_41604[(2)]);
var state_41604__$1 = state_41604;
var statearr_41606_41632 = state_41604__$1;
(statearr_41606_41632[(2)] = inst_41600);

(statearr_41606_41632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (1))){
var state_41604__$1 = state_41604;
var statearr_41607_41633 = state_41604__$1;
(statearr_41607_41633[(2)] = null);

(statearr_41607_41633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (4))){
var inst_41570 = (state_41604[(7)]);
var inst_41570__$1 = (state_41604[(2)]);
var state_41604__$1 = (function (){var statearr_41608 = state_41604;
(statearr_41608[(7)] = inst_41570__$1);

return statearr_41608;
})();
if(cljs.core.truth_(inst_41570__$1)){
var statearr_41609_41634 = state_41604__$1;
(statearr_41609_41634[(1)] = (5));

} else {
var statearr_41610_41635 = state_41604__$1;
(statearr_41610_41635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (15))){
var inst_41585 = (state_41604[(8)]);
var inst_41583 = (state_41604[(9)]);
var inst_41587 = inst_41585.call(null,inst_41583);
var state_41604__$1 = state_41604;
var statearr_41611_41636 = state_41604__$1;
(statearr_41611_41636[(2)] = inst_41587);

(statearr_41611_41636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (13))){
var inst_41594 = (state_41604[(2)]);
var state_41604__$1 = state_41604;
var statearr_41612_41637 = state_41604__$1;
(statearr_41612_41637[(2)] = inst_41594);

(statearr_41612_41637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (6))){
var state_41604__$1 = state_41604;
var statearr_41613_41638 = state_41604__$1;
(statearr_41613_41638[(2)] = null);

(statearr_41613_41638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (17))){
var inst_41591 = (state_41604[(2)]);
var state_41604__$1 = state_41604;
var statearr_41614_41639 = state_41604__$1;
(statearr_41614_41639[(2)] = inst_41591);

(statearr_41614_41639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (3))){
var inst_41602 = (state_41604[(2)]);
var state_41604__$1 = state_41604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41604__$1,inst_41602);
} else {
if((state_val_41605 === (12))){
var state_41604__$1 = state_41604;
var statearr_41615_41640 = state_41604__$1;
(statearr_41615_41640[(2)] = null);

(statearr_41615_41640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (2))){
var state_41604__$1 = state_41604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41604__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41605 === (11))){
var inst_41575 = (state_41604[(10)]);
var inst_41581 = figwheel.client.file_reloading.blocking_load.call(null,inst_41575);
var state_41604__$1 = state_41604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41604__$1,(14),inst_41581);
} else {
if((state_val_41605 === (9))){
var inst_41575 = (state_41604[(10)]);
var state_41604__$1 = state_41604;
if(cljs.core.truth_(inst_41575)){
var statearr_41616_41641 = state_41604__$1;
(statearr_41616_41641[(1)] = (11));

} else {
var statearr_41617_41642 = state_41604__$1;
(statearr_41617_41642[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (5))){
var inst_41570 = (state_41604[(7)]);
var inst_41576 = (state_41604[(11)]);
var inst_41575 = cljs.core.nth.call(null,inst_41570,(0),null);
var inst_41576__$1 = cljs.core.nth.call(null,inst_41570,(1),null);
var state_41604__$1 = (function (){var statearr_41618 = state_41604;
(statearr_41618[(10)] = inst_41575);

(statearr_41618[(11)] = inst_41576__$1);

return statearr_41618;
})();
if(cljs.core.truth_(inst_41576__$1)){
var statearr_41619_41643 = state_41604__$1;
(statearr_41619_41643[(1)] = (8));

} else {
var statearr_41620_41644 = state_41604__$1;
(statearr_41620_41644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (14))){
var inst_41585 = (state_41604[(8)]);
var inst_41575 = (state_41604[(10)]);
var inst_41583 = (state_41604[(2)]);
var inst_41584 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41585__$1 = cljs.core.get.call(null,inst_41584,inst_41575);
var state_41604__$1 = (function (){var statearr_41621 = state_41604;
(statearr_41621[(8)] = inst_41585__$1);

(statearr_41621[(9)] = inst_41583);

return statearr_41621;
})();
if(cljs.core.truth_(inst_41585__$1)){
var statearr_41622_41645 = state_41604__$1;
(statearr_41622_41645[(1)] = (15));

} else {
var statearr_41623_41646 = state_41604__$1;
(statearr_41623_41646[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (16))){
var inst_41583 = (state_41604[(9)]);
var inst_41589 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41583);
var state_41604__$1 = state_41604;
var statearr_41624_41647 = state_41604__$1;
(statearr_41624_41647[(2)] = inst_41589);

(statearr_41624_41647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (10))){
var inst_41596 = (state_41604[(2)]);
var state_41604__$1 = (function (){var statearr_41625 = state_41604;
(statearr_41625[(12)] = inst_41596);

return statearr_41625;
})();
var statearr_41626_41648 = state_41604__$1;
(statearr_41626_41648[(2)] = null);

(statearr_41626_41648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41605 === (8))){
var inst_41576 = (state_41604[(11)]);
var inst_41578 = eval(inst_41576);
var state_41604__$1 = state_41604;
var statearr_41627_41649 = state_41604__$1;
(statearr_41627_41649[(2)] = inst_41578);

(statearr_41627_41649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__34263__auto__ = null;
var figwheel$client$file_reloading$state_machine__34263__auto____0 = (function (){
var statearr_41628 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41628[(0)] = figwheel$client$file_reloading$state_machine__34263__auto__);

(statearr_41628[(1)] = (1));

return statearr_41628;
});
var figwheel$client$file_reloading$state_machine__34263__auto____1 = (function (state_41604){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_41604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e41629){if((e41629 instanceof Object)){
var ex__34266__auto__ = e41629;
var statearr_41630_41650 = state_41604;
(statearr_41630_41650[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41651 = state_41604;
state_41604 = G__41651;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34263__auto__ = function(state_41604){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34263__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34263__auto____1.call(this,state_41604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34263__auto____0;
figwheel$client$file_reloading$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34263__auto____1;
return figwheel$client$file_reloading$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_41631 = f__34286__auto__.call(null);
(statearr_41631[(6)] = c__34285__auto__);

return statearr_41631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__41653 = arguments.length;
switch (G__41653) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41655,callback){
var map__41656 = p__41655;
var map__41656__$1 = (((((!((map__41656 == null))))?(((((map__41656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41656):map__41656);
var file_msg = map__41656__$1;
var namespace = cljs.core.get.call(null,map__41656__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41658){
var map__41659 = p__41658;
var map__41659__$1 = (((((!((map__41659 == null))))?(((((map__41659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41659):map__41659);
var file_msg = map__41659__$1;
var namespace = cljs.core.get.call(null,map__41659__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41661){
var map__41662 = p__41661;
var map__41662__$1 = (((((!((map__41662 == null))))?(((((map__41662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41662):map__41662);
var file_msg = map__41662__$1;
var namespace = cljs.core.get.call(null,map__41662__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41664,callback){
var map__41665 = p__41664;
var map__41665__$1 = (((((!((map__41665 == null))))?(((((map__41665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41665):map__41665);
var file_msg = map__41665__$1;
var request_url = cljs.core.get.call(null,map__41665__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41665__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34285__auto___41715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_41700){
var state_val_41701 = (state_41700[(1)]);
if((state_val_41701 === (1))){
var inst_41674 = cljs.core.seq.call(null,files);
var inst_41675 = cljs.core.first.call(null,inst_41674);
var inst_41676 = cljs.core.next.call(null,inst_41674);
var inst_41677 = files;
var state_41700__$1 = (function (){var statearr_41702 = state_41700;
(statearr_41702[(7)] = inst_41676);

(statearr_41702[(8)] = inst_41677);

(statearr_41702[(9)] = inst_41675);

return statearr_41702;
})();
var statearr_41703_41716 = state_41700__$1;
(statearr_41703_41716[(2)] = null);

(statearr_41703_41716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41701 === (2))){
var inst_41683 = (state_41700[(10)]);
var inst_41677 = (state_41700[(8)]);
var inst_41682 = cljs.core.seq.call(null,inst_41677);
var inst_41683__$1 = cljs.core.first.call(null,inst_41682);
var inst_41684 = cljs.core.next.call(null,inst_41682);
var inst_41685 = (inst_41683__$1 == null);
var inst_41686 = cljs.core.not.call(null,inst_41685);
var state_41700__$1 = (function (){var statearr_41704 = state_41700;
(statearr_41704[(11)] = inst_41684);

(statearr_41704[(10)] = inst_41683__$1);

return statearr_41704;
})();
if(inst_41686){
var statearr_41705_41717 = state_41700__$1;
(statearr_41705_41717[(1)] = (4));

} else {
var statearr_41706_41718 = state_41700__$1;
(statearr_41706_41718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41701 === (3))){
var inst_41698 = (state_41700[(2)]);
var state_41700__$1 = state_41700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41700__$1,inst_41698);
} else {
if((state_val_41701 === (4))){
var inst_41683 = (state_41700[(10)]);
var inst_41688 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41683);
var state_41700__$1 = state_41700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41700__$1,(7),inst_41688);
} else {
if((state_val_41701 === (5))){
var inst_41694 = cljs.core.async.close_BANG_.call(null,out);
var state_41700__$1 = state_41700;
var statearr_41707_41719 = state_41700__$1;
(statearr_41707_41719[(2)] = inst_41694);

(statearr_41707_41719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41701 === (6))){
var inst_41696 = (state_41700[(2)]);
var state_41700__$1 = state_41700;
var statearr_41708_41720 = state_41700__$1;
(statearr_41708_41720[(2)] = inst_41696);

(statearr_41708_41720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41701 === (7))){
var inst_41684 = (state_41700[(11)]);
var inst_41690 = (state_41700[(2)]);
var inst_41691 = cljs.core.async.put_BANG_.call(null,out,inst_41690);
var inst_41677 = inst_41684;
var state_41700__$1 = (function (){var statearr_41709 = state_41700;
(statearr_41709[(12)] = inst_41691);

(statearr_41709[(8)] = inst_41677);

return statearr_41709;
})();
var statearr_41710_41721 = state_41700__$1;
(statearr_41710_41721[(2)] = null);

(statearr_41710_41721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto____0 = (function (){
var statearr_41711 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41711[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto__);

(statearr_41711[(1)] = (1));

return statearr_41711;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto____1 = (function (state_41700){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_41700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e41712){if((e41712 instanceof Object)){
var ex__34266__auto__ = e41712;
var statearr_41713_41722 = state_41700;
(statearr_41713_41722[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41723 = state_41700;
state_41700 = G__41723;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto__ = function(state_41700){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto____1.call(this,state_41700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_41714 = f__34286__auto__.call(null);
(statearr_41714[(6)] = c__34285__auto___41715);

return statearr_41714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41724,opts){
var map__41725 = p__41724;
var map__41725__$1 = (((((!((map__41725 == null))))?(((((map__41725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41725):map__41725);
var eval_body = cljs.core.get.call(null,map__41725__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4174__auto__ = eval_body;
if(cljs.core.truth_(and__4174__auto__)){
return typeof eval_body === 'string';
} else {
return and__4174__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41727){var e = e41727;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__41728_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41728_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41729){
var vec__41730 = p__41729;
var k = cljs.core.nth.call(null,vec__41730,(0),null);
var v = cljs.core.nth.call(null,vec__41730,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41733){
var vec__41734 = p__41733;
var k = cljs.core.nth.call(null,vec__41734,(0),null);
var v = cljs.core.nth.call(null,vec__41734,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41740,p__41741){
var map__41742 = p__41740;
var map__41742__$1 = (((((!((map__41742 == null))))?(((((map__41742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41742):map__41742);
var opts = map__41742__$1;
var before_jsload = cljs.core.get.call(null,map__41742__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41742__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41742__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41743 = p__41741;
var map__41743__$1 = (((((!((map__41743 == null))))?(((((map__41743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41743):map__41743);
var msg = map__41743__$1;
var files = cljs.core.get.call(null,map__41743__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41743__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41743__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_41897){
var state_val_41898 = (state_41897[(1)]);
if((state_val_41898 === (7))){
var inst_41759 = (state_41897[(7)]);
var inst_41757 = (state_41897[(8)]);
var inst_41760 = (state_41897[(9)]);
var inst_41758 = (state_41897[(10)]);
var inst_41765 = cljs.core._nth.call(null,inst_41758,inst_41760);
var inst_41766 = figwheel.client.file_reloading.eval_body.call(null,inst_41765,opts);
var inst_41767 = (inst_41760 + (1));
var tmp41899 = inst_41759;
var tmp41900 = inst_41757;
var tmp41901 = inst_41758;
var inst_41757__$1 = tmp41900;
var inst_41758__$1 = tmp41901;
var inst_41759__$1 = tmp41899;
var inst_41760__$1 = inst_41767;
var state_41897__$1 = (function (){var statearr_41902 = state_41897;
(statearr_41902[(7)] = inst_41759__$1);

(statearr_41902[(11)] = inst_41766);

(statearr_41902[(8)] = inst_41757__$1);

(statearr_41902[(9)] = inst_41760__$1);

(statearr_41902[(10)] = inst_41758__$1);

return statearr_41902;
})();
var statearr_41903_41986 = state_41897__$1;
(statearr_41903_41986[(2)] = null);

(statearr_41903_41986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (20))){
var inst_41800 = (state_41897[(12)]);
var inst_41808 = figwheel.client.file_reloading.sort_files.call(null,inst_41800);
var state_41897__$1 = state_41897;
var statearr_41904_41987 = state_41897__$1;
(statearr_41904_41987[(2)] = inst_41808);

(statearr_41904_41987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (27))){
var state_41897__$1 = state_41897;
var statearr_41905_41988 = state_41897__$1;
(statearr_41905_41988[(2)] = null);

(statearr_41905_41988[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (1))){
var inst_41749 = (state_41897[(13)]);
var inst_41746 = before_jsload.call(null,files);
var inst_41747 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41748 = (function (){return (function (p1__41737_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41737_SHARP_);
});
})();
var inst_41749__$1 = cljs.core.filter.call(null,inst_41748,files);
var inst_41750 = cljs.core.not_empty.call(null,inst_41749__$1);
var state_41897__$1 = (function (){var statearr_41906 = state_41897;
(statearr_41906[(14)] = inst_41747);

(statearr_41906[(15)] = inst_41746);

(statearr_41906[(13)] = inst_41749__$1);

return statearr_41906;
})();
if(cljs.core.truth_(inst_41750)){
var statearr_41907_41989 = state_41897__$1;
(statearr_41907_41989[(1)] = (2));

} else {
var statearr_41908_41990 = state_41897__$1;
(statearr_41908_41990[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (24))){
var state_41897__$1 = state_41897;
var statearr_41909_41991 = state_41897__$1;
(statearr_41909_41991[(2)] = null);

(statearr_41909_41991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (39))){
var inst_41850 = (state_41897[(16)]);
var state_41897__$1 = state_41897;
var statearr_41910_41992 = state_41897__$1;
(statearr_41910_41992[(2)] = inst_41850);

(statearr_41910_41992[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (46))){
var inst_41892 = (state_41897[(2)]);
var state_41897__$1 = state_41897;
var statearr_41911_41993 = state_41897__$1;
(statearr_41911_41993[(2)] = inst_41892);

(statearr_41911_41993[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (4))){
var inst_41794 = (state_41897[(2)]);
var inst_41795 = cljs.core.List.EMPTY;
var inst_41796 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41795);
var inst_41797 = (function (){return (function (p1__41738_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41738_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41738_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41738_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_41798 = cljs.core.filter.call(null,inst_41797,files);
var inst_41799 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41800 = cljs.core.concat.call(null,inst_41798,inst_41799);
var state_41897__$1 = (function (){var statearr_41912 = state_41897;
(statearr_41912[(17)] = inst_41794);

(statearr_41912[(12)] = inst_41800);

(statearr_41912[(18)] = inst_41796);

return statearr_41912;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41913_41994 = state_41897__$1;
(statearr_41913_41994[(1)] = (16));

} else {
var statearr_41914_41995 = state_41897__$1;
(statearr_41914_41995[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (15))){
var inst_41784 = (state_41897[(2)]);
var state_41897__$1 = state_41897;
var statearr_41915_41996 = state_41897__$1;
(statearr_41915_41996[(2)] = inst_41784);

(statearr_41915_41996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (21))){
var inst_41810 = (state_41897[(19)]);
var inst_41810__$1 = (state_41897[(2)]);
var inst_41811 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41810__$1);
var state_41897__$1 = (function (){var statearr_41916 = state_41897;
(statearr_41916[(19)] = inst_41810__$1);

return statearr_41916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41897__$1,(22),inst_41811);
} else {
if((state_val_41898 === (31))){
var inst_41895 = (state_41897[(2)]);
var state_41897__$1 = state_41897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41897__$1,inst_41895);
} else {
if((state_val_41898 === (32))){
var inst_41850 = (state_41897[(16)]);
var inst_41855 = inst_41850.cljs$lang$protocol_mask$partition0$;
var inst_41856 = (inst_41855 & (64));
var inst_41857 = inst_41850.cljs$core$ISeq$;
var inst_41858 = (cljs.core.PROTOCOL_SENTINEL === inst_41857);
var inst_41859 = ((inst_41856) || (inst_41858));
var state_41897__$1 = state_41897;
if(cljs.core.truth_(inst_41859)){
var statearr_41917_41997 = state_41897__$1;
(statearr_41917_41997[(1)] = (35));

} else {
var statearr_41918_41998 = state_41897__$1;
(statearr_41918_41998[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (40))){
var inst_41872 = (state_41897[(20)]);
var inst_41871 = (state_41897[(2)]);
var inst_41872__$1 = cljs.core.get.call(null,inst_41871,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41873 = cljs.core.get.call(null,inst_41871,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41874 = cljs.core.not_empty.call(null,inst_41872__$1);
var state_41897__$1 = (function (){var statearr_41919 = state_41897;
(statearr_41919[(21)] = inst_41873);

(statearr_41919[(20)] = inst_41872__$1);

return statearr_41919;
})();
if(cljs.core.truth_(inst_41874)){
var statearr_41920_41999 = state_41897__$1;
(statearr_41920_41999[(1)] = (41));

} else {
var statearr_41921_42000 = state_41897__$1;
(statearr_41921_42000[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (33))){
var state_41897__$1 = state_41897;
var statearr_41922_42001 = state_41897__$1;
(statearr_41922_42001[(2)] = false);

(statearr_41922_42001[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (13))){
var inst_41770 = (state_41897[(22)]);
var inst_41774 = cljs.core.chunk_first.call(null,inst_41770);
var inst_41775 = cljs.core.chunk_rest.call(null,inst_41770);
var inst_41776 = cljs.core.count.call(null,inst_41774);
var inst_41757 = inst_41775;
var inst_41758 = inst_41774;
var inst_41759 = inst_41776;
var inst_41760 = (0);
var state_41897__$1 = (function (){var statearr_41923 = state_41897;
(statearr_41923[(7)] = inst_41759);

(statearr_41923[(8)] = inst_41757);

(statearr_41923[(9)] = inst_41760);

(statearr_41923[(10)] = inst_41758);

return statearr_41923;
})();
var statearr_41924_42002 = state_41897__$1;
(statearr_41924_42002[(2)] = null);

(statearr_41924_42002[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (22))){
var inst_41810 = (state_41897[(19)]);
var inst_41813 = (state_41897[(23)]);
var inst_41814 = (state_41897[(24)]);
var inst_41818 = (state_41897[(25)]);
var inst_41813__$1 = (state_41897[(2)]);
var inst_41814__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41813__$1);
var inst_41815 = (function (){var all_files = inst_41810;
var res_SINGLEQUOTE_ = inst_41813__$1;
var res = inst_41814__$1;
return (function (p1__41739_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41739_SHARP_));
});
})();
var inst_41816 = cljs.core.filter.call(null,inst_41815,inst_41813__$1);
var inst_41817 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41818__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41817);
var inst_41819 = cljs.core.not_empty.call(null,inst_41818__$1);
var state_41897__$1 = (function (){var statearr_41925 = state_41897;
(statearr_41925[(23)] = inst_41813__$1);

(statearr_41925[(24)] = inst_41814__$1);

(statearr_41925[(25)] = inst_41818__$1);

(statearr_41925[(26)] = inst_41816);

return statearr_41925;
})();
if(cljs.core.truth_(inst_41819)){
var statearr_41926_42003 = state_41897__$1;
(statearr_41926_42003[(1)] = (23));

} else {
var statearr_41927_42004 = state_41897__$1;
(statearr_41927_42004[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (36))){
var state_41897__$1 = state_41897;
var statearr_41928_42005 = state_41897__$1;
(statearr_41928_42005[(2)] = false);

(statearr_41928_42005[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (41))){
var inst_41872 = (state_41897[(20)]);
var inst_41876 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41877 = cljs.core.map.call(null,inst_41876,inst_41872);
var inst_41878 = cljs.core.pr_str.call(null,inst_41877);
var inst_41879 = ["figwheel-no-load meta-data: ",inst_41878].join('');
var inst_41880 = figwheel.client.utils.log.call(null,inst_41879);
var state_41897__$1 = state_41897;
var statearr_41929_42006 = state_41897__$1;
(statearr_41929_42006[(2)] = inst_41880);

(statearr_41929_42006[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (43))){
var inst_41873 = (state_41897[(21)]);
var inst_41883 = (state_41897[(2)]);
var inst_41884 = cljs.core.not_empty.call(null,inst_41873);
var state_41897__$1 = (function (){var statearr_41930 = state_41897;
(statearr_41930[(27)] = inst_41883);

return statearr_41930;
})();
if(cljs.core.truth_(inst_41884)){
var statearr_41931_42007 = state_41897__$1;
(statearr_41931_42007[(1)] = (44));

} else {
var statearr_41932_42008 = state_41897__$1;
(statearr_41932_42008[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (29))){
var inst_41810 = (state_41897[(19)]);
var inst_41813 = (state_41897[(23)]);
var inst_41814 = (state_41897[(24)]);
var inst_41818 = (state_41897[(25)]);
var inst_41850 = (state_41897[(16)]);
var inst_41816 = (state_41897[(26)]);
var inst_41846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41849 = (function (){var all_files = inst_41810;
var res_SINGLEQUOTE_ = inst_41813;
var res = inst_41814;
var files_not_loaded = inst_41816;
var dependencies_that_loaded = inst_41818;
return (function (p__41848){
var map__41933 = p__41848;
var map__41933__$1 = (((((!((map__41933 == null))))?(((((map__41933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41933):map__41933);
var namespace = cljs.core.get.call(null,map__41933__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_41850__$1 = cljs.core.group_by.call(null,inst_41849,inst_41816);
var inst_41852 = (inst_41850__$1 == null);
var inst_41853 = cljs.core.not.call(null,inst_41852);
var state_41897__$1 = (function (){var statearr_41935 = state_41897;
(statearr_41935[(28)] = inst_41846);

(statearr_41935[(16)] = inst_41850__$1);

return statearr_41935;
})();
if(inst_41853){
var statearr_41936_42009 = state_41897__$1;
(statearr_41936_42009[(1)] = (32));

} else {
var statearr_41937_42010 = state_41897__$1;
(statearr_41937_42010[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (44))){
var inst_41873 = (state_41897[(21)]);
var inst_41886 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41873);
var inst_41887 = cljs.core.pr_str.call(null,inst_41886);
var inst_41888 = ["not required: ",inst_41887].join('');
var inst_41889 = figwheel.client.utils.log.call(null,inst_41888);
var state_41897__$1 = state_41897;
var statearr_41938_42011 = state_41897__$1;
(statearr_41938_42011[(2)] = inst_41889);

(statearr_41938_42011[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (6))){
var inst_41791 = (state_41897[(2)]);
var state_41897__$1 = state_41897;
var statearr_41939_42012 = state_41897__$1;
(statearr_41939_42012[(2)] = inst_41791);

(statearr_41939_42012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (28))){
var inst_41816 = (state_41897[(26)]);
var inst_41843 = (state_41897[(2)]);
var inst_41844 = cljs.core.not_empty.call(null,inst_41816);
var state_41897__$1 = (function (){var statearr_41940 = state_41897;
(statearr_41940[(29)] = inst_41843);

return statearr_41940;
})();
if(cljs.core.truth_(inst_41844)){
var statearr_41941_42013 = state_41897__$1;
(statearr_41941_42013[(1)] = (29));

} else {
var statearr_41942_42014 = state_41897__$1;
(statearr_41942_42014[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (25))){
var inst_41814 = (state_41897[(24)]);
var inst_41830 = (state_41897[(2)]);
var inst_41831 = cljs.core.not_empty.call(null,inst_41814);
var state_41897__$1 = (function (){var statearr_41943 = state_41897;
(statearr_41943[(30)] = inst_41830);

return statearr_41943;
})();
if(cljs.core.truth_(inst_41831)){
var statearr_41944_42015 = state_41897__$1;
(statearr_41944_42015[(1)] = (26));

} else {
var statearr_41945_42016 = state_41897__$1;
(statearr_41945_42016[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (34))){
var inst_41866 = (state_41897[(2)]);
var state_41897__$1 = state_41897;
if(cljs.core.truth_(inst_41866)){
var statearr_41946_42017 = state_41897__$1;
(statearr_41946_42017[(1)] = (38));

} else {
var statearr_41947_42018 = state_41897__$1;
(statearr_41947_42018[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (17))){
var state_41897__$1 = state_41897;
var statearr_41948_42019 = state_41897__$1;
(statearr_41948_42019[(2)] = recompile_dependents);

(statearr_41948_42019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (3))){
var state_41897__$1 = state_41897;
var statearr_41949_42020 = state_41897__$1;
(statearr_41949_42020[(2)] = null);

(statearr_41949_42020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (12))){
var inst_41787 = (state_41897[(2)]);
var state_41897__$1 = state_41897;
var statearr_41950_42021 = state_41897__$1;
(statearr_41950_42021[(2)] = inst_41787);

(statearr_41950_42021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (2))){
var inst_41749 = (state_41897[(13)]);
var inst_41756 = cljs.core.seq.call(null,inst_41749);
var inst_41757 = inst_41756;
var inst_41758 = null;
var inst_41759 = (0);
var inst_41760 = (0);
var state_41897__$1 = (function (){var statearr_41951 = state_41897;
(statearr_41951[(7)] = inst_41759);

(statearr_41951[(8)] = inst_41757);

(statearr_41951[(9)] = inst_41760);

(statearr_41951[(10)] = inst_41758);

return statearr_41951;
})();
var statearr_41952_42022 = state_41897__$1;
(statearr_41952_42022[(2)] = null);

(statearr_41952_42022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (23))){
var inst_41810 = (state_41897[(19)]);
var inst_41813 = (state_41897[(23)]);
var inst_41814 = (state_41897[(24)]);
var inst_41818 = (state_41897[(25)]);
var inst_41816 = (state_41897[(26)]);
var inst_41821 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41823 = (function (){var all_files = inst_41810;
var res_SINGLEQUOTE_ = inst_41813;
var res = inst_41814;
var files_not_loaded = inst_41816;
var dependencies_that_loaded = inst_41818;
return (function (p__41822){
var map__41953 = p__41822;
var map__41953__$1 = (((((!((map__41953 == null))))?(((((map__41953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41953):map__41953);
var request_url = cljs.core.get.call(null,map__41953__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_41824 = cljs.core.reverse.call(null,inst_41818);
var inst_41825 = cljs.core.map.call(null,inst_41823,inst_41824);
var inst_41826 = cljs.core.pr_str.call(null,inst_41825);
var inst_41827 = figwheel.client.utils.log.call(null,inst_41826);
var state_41897__$1 = (function (){var statearr_41955 = state_41897;
(statearr_41955[(31)] = inst_41821);

return statearr_41955;
})();
var statearr_41956_42023 = state_41897__$1;
(statearr_41956_42023[(2)] = inst_41827);

(statearr_41956_42023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (35))){
var state_41897__$1 = state_41897;
var statearr_41957_42024 = state_41897__$1;
(statearr_41957_42024[(2)] = true);

(statearr_41957_42024[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (19))){
var inst_41800 = (state_41897[(12)]);
var inst_41806 = figwheel.client.file_reloading.expand_files.call(null,inst_41800);
var state_41897__$1 = state_41897;
var statearr_41958_42025 = state_41897__$1;
(statearr_41958_42025[(2)] = inst_41806);

(statearr_41958_42025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (11))){
var state_41897__$1 = state_41897;
var statearr_41959_42026 = state_41897__$1;
(statearr_41959_42026[(2)] = null);

(statearr_41959_42026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (9))){
var inst_41789 = (state_41897[(2)]);
var state_41897__$1 = state_41897;
var statearr_41960_42027 = state_41897__$1;
(statearr_41960_42027[(2)] = inst_41789);

(statearr_41960_42027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (5))){
var inst_41759 = (state_41897[(7)]);
var inst_41760 = (state_41897[(9)]);
var inst_41762 = (inst_41760 < inst_41759);
var inst_41763 = inst_41762;
var state_41897__$1 = state_41897;
if(cljs.core.truth_(inst_41763)){
var statearr_41961_42028 = state_41897__$1;
(statearr_41961_42028[(1)] = (7));

} else {
var statearr_41962_42029 = state_41897__$1;
(statearr_41962_42029[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (14))){
var inst_41770 = (state_41897[(22)]);
var inst_41779 = cljs.core.first.call(null,inst_41770);
var inst_41780 = figwheel.client.file_reloading.eval_body.call(null,inst_41779,opts);
var inst_41781 = cljs.core.next.call(null,inst_41770);
var inst_41757 = inst_41781;
var inst_41758 = null;
var inst_41759 = (0);
var inst_41760 = (0);
var state_41897__$1 = (function (){var statearr_41963 = state_41897;
(statearr_41963[(32)] = inst_41780);

(statearr_41963[(7)] = inst_41759);

(statearr_41963[(8)] = inst_41757);

(statearr_41963[(9)] = inst_41760);

(statearr_41963[(10)] = inst_41758);

return statearr_41963;
})();
var statearr_41964_42030 = state_41897__$1;
(statearr_41964_42030[(2)] = null);

(statearr_41964_42030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (45))){
var state_41897__$1 = state_41897;
var statearr_41965_42031 = state_41897__$1;
(statearr_41965_42031[(2)] = null);

(statearr_41965_42031[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (26))){
var inst_41810 = (state_41897[(19)]);
var inst_41813 = (state_41897[(23)]);
var inst_41814 = (state_41897[(24)]);
var inst_41818 = (state_41897[(25)]);
var inst_41816 = (state_41897[(26)]);
var inst_41833 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41835 = (function (){var all_files = inst_41810;
var res_SINGLEQUOTE_ = inst_41813;
var res = inst_41814;
var files_not_loaded = inst_41816;
var dependencies_that_loaded = inst_41818;
return (function (p__41834){
var map__41966 = p__41834;
var map__41966__$1 = (((((!((map__41966 == null))))?(((((map__41966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41966):map__41966);
var namespace = cljs.core.get.call(null,map__41966__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41966__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_41836 = cljs.core.map.call(null,inst_41835,inst_41814);
var inst_41837 = cljs.core.pr_str.call(null,inst_41836);
var inst_41838 = figwheel.client.utils.log.call(null,inst_41837);
var inst_41839 = (function (){var all_files = inst_41810;
var res_SINGLEQUOTE_ = inst_41813;
var res = inst_41814;
var files_not_loaded = inst_41816;
var dependencies_that_loaded = inst_41818;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_41840 = setTimeout(inst_41839,(10));
var state_41897__$1 = (function (){var statearr_41968 = state_41897;
(statearr_41968[(33)] = inst_41833);

(statearr_41968[(34)] = inst_41838);

return statearr_41968;
})();
var statearr_41969_42032 = state_41897__$1;
(statearr_41969_42032[(2)] = inst_41840);

(statearr_41969_42032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (16))){
var state_41897__$1 = state_41897;
var statearr_41970_42033 = state_41897__$1;
(statearr_41970_42033[(2)] = reload_dependents);

(statearr_41970_42033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (38))){
var inst_41850 = (state_41897[(16)]);
var inst_41868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41850);
var state_41897__$1 = state_41897;
var statearr_41971_42034 = state_41897__$1;
(statearr_41971_42034[(2)] = inst_41868);

(statearr_41971_42034[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (30))){
var state_41897__$1 = state_41897;
var statearr_41972_42035 = state_41897__$1;
(statearr_41972_42035[(2)] = null);

(statearr_41972_42035[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (10))){
var inst_41770 = (state_41897[(22)]);
var inst_41772 = cljs.core.chunked_seq_QMARK_.call(null,inst_41770);
var state_41897__$1 = state_41897;
if(inst_41772){
var statearr_41973_42036 = state_41897__$1;
(statearr_41973_42036[(1)] = (13));

} else {
var statearr_41974_42037 = state_41897__$1;
(statearr_41974_42037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (18))){
var inst_41804 = (state_41897[(2)]);
var state_41897__$1 = state_41897;
if(cljs.core.truth_(inst_41804)){
var statearr_41975_42038 = state_41897__$1;
(statearr_41975_42038[(1)] = (19));

} else {
var statearr_41976_42039 = state_41897__$1;
(statearr_41976_42039[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (42))){
var state_41897__$1 = state_41897;
var statearr_41977_42040 = state_41897__$1;
(statearr_41977_42040[(2)] = null);

(statearr_41977_42040[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (37))){
var inst_41863 = (state_41897[(2)]);
var state_41897__$1 = state_41897;
var statearr_41978_42041 = state_41897__$1;
(statearr_41978_42041[(2)] = inst_41863);

(statearr_41978_42041[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41898 === (8))){
var inst_41757 = (state_41897[(8)]);
var inst_41770 = (state_41897[(22)]);
var inst_41770__$1 = cljs.core.seq.call(null,inst_41757);
var state_41897__$1 = (function (){var statearr_41979 = state_41897;
(statearr_41979[(22)] = inst_41770__$1);

return statearr_41979;
})();
if(inst_41770__$1){
var statearr_41980_42042 = state_41897__$1;
(statearr_41980_42042[(1)] = (10));

} else {
var statearr_41981_42043 = state_41897__$1;
(statearr_41981_42043[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto____0 = (function (){
var statearr_41982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41982[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto__);

(statearr_41982[(1)] = (1));

return statearr_41982;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto____1 = (function (state_41897){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_41897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e41983){if((e41983 instanceof Object)){
var ex__34266__auto__ = e41983;
var statearr_41984_42044 = state_41897;
(statearr_41984_42044[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42045 = state_41897;
state_41897 = G__42045;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto__ = function(state_41897){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto____1.call(this,state_41897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_41985 = f__34286__auto__.call(null);
(statearr_41985[(6)] = c__34285__auto__);

return statearr_41985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42048,link){
var map__42049 = p__42048;
var map__42049__$1 = (((((!((map__42049 == null))))?(((((map__42049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42049):map__42049);
var file = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__42046_SHARP_,p2__42047_SHARP_){
if(cljs.core._EQ_.call(null,p1__42046_SHARP_,p2__42047_SHARP_)){
return p1__42046_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42052){
var map__42053 = p__42052;
var map__42053__$1 = (((((!((map__42053 == null))))?(((((map__42053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42053):map__42053);
var match_length = cljs.core.get.call(null,map__42053__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42053__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42051_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42051_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42055_SHARP_,p2__42056_SHARP_){
return cljs.core.assoc.call(null,p1__42055_SHARP_,cljs.core.get.call(null,p2__42056_SHARP_,key),p2__42056_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_42057 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42057);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42057);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42058,p__42059){
var map__42060 = p__42058;
var map__42060__$1 = (((((!((map__42060 == null))))?(((((map__42060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42060):map__42060);
var on_cssload = cljs.core.get.call(null,map__42060__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42061 = p__42059;
var map__42061__$1 = (((((!((map__42061 == null))))?(((((map__42061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42061):map__42061);
var files_msg = map__42061__$1;
var files = cljs.core.get.call(null,map__42061__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1575922824923
