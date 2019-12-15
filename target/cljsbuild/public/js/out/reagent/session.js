// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40051 = arguments.length;
var i__4790__auto___40052 = (0);
while(true){
if((i__4790__auto___40052 < len__4789__auto___40051)){
args__4795__auto__.push((arguments[i__4790__auto___40052]));

var G__40053 = (i__4790__auto___40052 + (1));
i__4790__auto___40052 = G__40053;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__40047){
var vec__40048 = p__40047;
var default$ = cljs.core.nth.call(null,vec__40048,(0),null);
var temp_a = cljs.core.deref.call(null,reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
}));

(reagent.session.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get.cljs$lang$applyTo = (function (seq40045){
var G__40046 = cljs.core.first.call(null,seq40045);
var seq40045__$1 = cljs.core.next.call(null,seq40045);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40046,seq40045__$1);
}));

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40060 = arguments.length;
var i__4790__auto___40061 = (0);
while(true){
if((i__4790__auto___40061 < len__4789__auto___40060)){
args__4795__auto__.push((arguments[i__4790__auto___40061]));

var G__40062 = (i__4790__auto___40061 + (1));
i__4790__auto___40061 = G__40062;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__40056){
var vec__40057 = p__40056;
var default$ = cljs.core.nth.call(null,vec__40057,(0),null);
var result = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
}));

(reagent.session.get_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in.cljs$lang$applyTo = (function (seq40054){
var G__40055 = cljs.core.first.call(null,seq40054);
var seq40054__$1 = cljs.core.next.call(null,seq40054);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40055,seq40054__$1);
}));

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40065 = arguments.length;
var i__4790__auto___40066 = (0);
while(true){
if((i__4790__auto___40066 < len__4789__auto___40065)){
args__4795__auto__.push((arguments[i__4790__auto___40066]));

var G__40067 = (i__4790__auto___40066 + (1));
i__4790__auto___40066 = G__40067;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
}));

(reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq40063){
var G__40064 = cljs.core.first.call(null,seq40063);
var seq40063__$1 = cljs.core.next.call(null,seq40063);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40064,seq40063__$1);
}));

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40074 = arguments.length;
var i__4790__auto___40075 = (0);
while(true){
if((i__4790__auto___40075 < len__4789__auto___40074)){
args__4795__auto__.push((arguments[i__4790__auto___40075]));

var G__40076 = (i__4790__auto___40075 + (1));
i__4790__auto___40075 = G__40076;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__40070){
var vec__40071 = p__40070;
var default$ = cljs.core.nth.call(null,vec__40071,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
}));

(reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq40068){
var G__40069 = cljs.core.first.call(null,seq40068);
var seq40068__$1 = cljs.core.next.call(null,seq40068);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40069,seq40068__$1);
}));

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40083 = arguments.length;
var i__4790__auto___40084 = (0);
while(true){
if((i__4790__auto___40084 < len__4789__auto___40083)){
args__4795__auto__.push((arguments[i__4790__auto___40084]));

var G__40085 = (i__4790__auto___40084 + (1));
i__4790__auto___40084 = G__40085;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__40079){
var vec__40080 = p__40079;
var default$ = cljs.core.nth.call(null,vec__40080,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
}));

(reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq40077){
var G__40078 = cljs.core.first.call(null,seq40077);
var seq40077__$1 = cljs.core.next.call(null,seq40077);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40078,seq40077__$1);
}));

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40090 = arguments.length;
var i__4790__auto___40091 = (0);
while(true){
if((i__4790__auto___40091 < len__4789__auto___40090)){
args__4795__auto__.push((arguments[i__4790__auto___40091]));

var G__40092 = (i__4790__auto___40091 + (1));
i__4790__auto___40091 = G__40092;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__40086_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__40086_SHARP_,k,f),args);
}));
}));

(reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq40087){
var G__40088 = cljs.core.first.call(null,seq40087);
var seq40087__$1 = cljs.core.next.call(null,seq40087);
var G__40089 = cljs.core.first.call(null,seq40087__$1);
var seq40087__$2 = cljs.core.next.call(null,seq40087__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40088,G__40089,seq40087__$2);
}));

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40097 = arguments.length;
var i__4790__auto___40098 = (0);
while(true){
if((i__4790__auto___40098 < len__4789__auto___40097)){
args__4795__auto__.push((arguments[i__4790__auto___40098]));

var G__40099 = (i__4790__auto___40098 + (1));
i__4790__auto___40098 = G__40099;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__40093_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__40093_SHARP_,ks,f),args);
}));
}));

(reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq40094){
var G__40095 = cljs.core.first.call(null,seq40094);
var seq40094__$1 = cljs.core.next.call(null,seq40094);
var G__40096 = cljs.core.first.call(null,seq40094__$1);
var seq40094__$2 = cljs.core.next.call(null,seq40094__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40095,G__40096,seq40094__$2);
}));


//# sourceMappingURL=session.js.map?rel=1575922820867
