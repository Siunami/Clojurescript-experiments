// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reitit.frontend');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('reitit.coercion');
goog.require('reitit.core');
goog.require('goog.Uri');
/**
 * Given goog.Uri, read query parameters into Clojure map.
 */
reitit.frontend.query_params = (function reitit$frontend$query_params(uri){
var q = uri.getQueryData();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,(function (p1__10264_SHARP_){
return q.get(p1__10264_SHARP_);
})),q.getKeys()));
});
/**
 * Given routing tree and current path, return match with possibly
 *   coerced parameters. Return nil if no match found.
 */
reitit.frontend.match_by_path = (function reitit$frontend$match_by_path(router,path){
var uri = goog.Uri.parse(path);
var temp__5733__auto__ = reitit.core.match_by_path(router,uri.getPath());
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var q = reitit.frontend.query_params(uri);
var match__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,cljs.core.cst$kw$query_DASH_params,q);
var parameters = (function (){var or__4185__auto__ = reitit.coercion.coerce_BANG_(match__$1);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(match__$1),cljs.core.cst$kw$query,q], null);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match__$1,cljs.core.cst$kw$parameters,parameters);
} else {
return null;
}
});
/**
 * Given a router, route name and optionally path-parameters,
 *   will return a Match (exact match), PartialMatch (missing path-parameters)
 *   or `nil` (no match).
 */
reitit.frontend.match_by_name = (function reitit$frontend$match_by_name(var_args){
var G__10266 = arguments.length;
switch (G__10266) {
case 2:
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(router,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (router,name,path_params){
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(router,name,path_params);
}));

(reitit.frontend.match_by_name.cljs$lang$maxFixedArity = 3);

/**
 * Create a `reitit.core.router` from raw route data and optionally an options map.
 *   Enables request coercion. See [[reitit.core/router]] for details on options.
 */
reitit.frontend.router = (function reitit$frontend$router(var_args){
var G__10269 = arguments.length;
switch (G__10269) {
case 1:
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$compile,reitit.coercion.compile_request_coercers], null),opts], 0)));
}));

(reitit.frontend.router.cljs$lang$maxFixedArity = 2);

/**
 * Logs problems using console.warn
 */
reitit.frontend.match_by_name_BANG_ = (function reitit$frontend$match_by_name_BANG_(var_args){
var G__10273 = arguments.length;
switch (G__10273) {
case 2:
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,name){
return reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(router,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,name,path_params){
var temp__5733__auto__ = reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(router,name,path_params);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
if(reitit.core.partial_match_QMARK_(match)){
if(cljs.core.every_QMARK_((function (p1__10271_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__10271_SHARP_);
}),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(match))){
return match;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(match),defined);
console.warn("missing path-params for route",name,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$template,cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$missing,missing,cljs.core.cst$kw$path_DASH_params,path_params,cljs.core.cst$kw$required,cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(match)], null));

return null;
}
} else {
return match;
}
} else {
console.warn("missing route",name);

return null;
}
}));

(reitit.frontend.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

