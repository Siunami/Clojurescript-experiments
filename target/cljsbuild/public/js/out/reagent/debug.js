// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__37613__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37614__i = 0, G__37614__a = new Array(arguments.length -  0);
while (G__37614__i < G__37614__a.length) {G__37614__a[G__37614__i] = arguments[G__37614__i + 0]; ++G__37614__i;}
  args = new cljs.core.IndexedSeq(G__37614__a,0,null);
} 
return G__37613__delegate.call(this,args);};
G__37613.cljs$lang$maxFixedArity = 0;
G__37613.cljs$lang$applyTo = (function (arglist__37615){
var args = cljs.core.seq(arglist__37615);
return G__37613__delegate(args);
});
G__37613.cljs$core$IFn$_invoke$arity$variadic = G__37613__delegate;
return G__37613;
})()
);

(o.error = (function() { 
var G__37616__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37617__i = 0, G__37617__a = new Array(arguments.length -  0);
while (G__37617__i < G__37617__a.length) {G__37617__a[G__37617__i] = arguments[G__37617__i + 0]; ++G__37617__i;}
  args = new cljs.core.IndexedSeq(G__37617__a,0,null);
} 
return G__37616__delegate.call(this,args);};
G__37616.cljs$lang$maxFixedArity = 0;
G__37616.cljs$lang$applyTo = (function (arglist__37618){
var args = cljs.core.seq(arglist__37618);
return G__37616__delegate(args);
});
G__37616.cljs$core$IFn$_invoke$arity$variadic = G__37616__delegate;
return G__37616;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1575922817468
