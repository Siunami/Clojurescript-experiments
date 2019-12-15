// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__43538__delegate = function (x__43522__auto__){
if(cljs.core.truth_(testproject.core.mount_root)){
return cljs.core.apply.call(null,testproject.core.mount_root,x__43522__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","testproject.core/mount-root","' is missing"].join(''));
}
};
var G__43538 = function (var_args){
var x__43522__auto__ = null;
if (arguments.length > 0) {
var G__43539__i = 0, G__43539__a = new Array(arguments.length -  0);
while (G__43539__i < G__43539__a.length) {G__43539__a[G__43539__i] = arguments[G__43539__i + 0]; ++G__43539__i;}
  x__43522__auto__ = new cljs.core.IndexedSeq(G__43539__a,0,null);
} 
return G__43538__delegate.call(this,x__43522__auto__);};
G__43538.cljs$lang$maxFixedArity = 0;
G__43538.cljs$lang$applyTo = (function (arglist__43540){
var x__43522__auto__ = cljs.core.seq(arglist__43540);
return G__43538__delegate(x__43522__auto__);
});
G__43538.cljs$core$IFn$_invoke$arity$variadic = G__43538__delegate;
return G__43538;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1575922826939
