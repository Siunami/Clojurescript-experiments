// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37827 = arguments.length;
switch (G__37827) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37828 = (function (f,blockable,meta37829){
this.f = f;
this.blockable = blockable;
this.meta37829 = meta37829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37830,meta37829__$1){
var self__ = this;
var _37830__$1 = this;
return (new cljs.core.async.t_cljs$core$async37828(self__.f,self__.blockable,meta37829__$1));
}));

(cljs.core.async.t_cljs$core$async37828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37830){
var self__ = this;
var _37830__$1 = this;
return self__.meta37829;
}));

(cljs.core.async.t_cljs$core$async37828.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37828.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37829","meta37829",-2089551279,null)], null);
}));

(cljs.core.async.t_cljs$core$async37828.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37828");

(cljs.core.async.t_cljs$core$async37828.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async37828");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37828.
 */
cljs.core.async.__GT_t_cljs$core$async37828 = (function cljs$core$async$__GT_t_cljs$core$async37828(f__$1,blockable__$1,meta37829){
return (new cljs.core.async.t_cljs$core$async37828(f__$1,blockable__$1,meta37829));
});

}

return (new cljs.core.async.t_cljs$core$async37828(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37834 = arguments.length;
switch (G__37834) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37837 = arguments.length;
switch (G__37837) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37840 = arguments.length;
switch (G__37840) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37842 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37842);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_37842);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37844 = arguments.length;
switch (G__37844) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___37846 = n;
var x_37847 = (0);
while(true){
if((x_37847 < n__4666__auto___37846)){
(a[x_37847] = (0));

var G__37848 = (x_37847 + (1));
x_37847 = G__37848;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37849 = (i + (1));
i = G__37849;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37850 = (function (flag,meta37851){
this.flag = flag;
this.meta37851 = meta37851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37852,meta37851__$1){
var self__ = this;
var _37852__$1 = this;
return (new cljs.core.async.t_cljs$core$async37850(self__.flag,meta37851__$1));
}));

(cljs.core.async.t_cljs$core$async37850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37852){
var self__ = this;
var _37852__$1 = this;
return self__.meta37851;
}));

(cljs.core.async.t_cljs$core$async37850.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async37850.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37851","meta37851",-724461491,null)], null);
}));

(cljs.core.async.t_cljs$core$async37850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37850");

(cljs.core.async.t_cljs$core$async37850.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async37850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37850.
 */
cljs.core.async.__GT_t_cljs$core$async37850 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37850(flag__$1,meta37851){
return (new cljs.core.async.t_cljs$core$async37850(flag__$1,meta37851));
});

}

return (new cljs.core.async.t_cljs$core$async37850(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37853 = (function (flag,cb,meta37854){
this.flag = flag;
this.cb = cb;
this.meta37854 = meta37854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37855,meta37854__$1){
var self__ = this;
var _37855__$1 = this;
return (new cljs.core.async.t_cljs$core$async37853(self__.flag,self__.cb,meta37854__$1));
}));

(cljs.core.async.t_cljs$core$async37853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37855){
var self__ = this;
var _37855__$1 = this;
return self__.meta37854;
}));

(cljs.core.async.t_cljs$core$async37853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async37853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37854","meta37854",-760455287,null)], null);
}));

(cljs.core.async.t_cljs$core$async37853.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37853");

(cljs.core.async.t_cljs$core$async37853.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async37853");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37853.
 */
cljs.core.async.__GT_t_cljs$core$async37853 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37853(flag__$1,cb__$1,meta37854){
return (new cljs.core.async.t_cljs$core$async37853(flag__$1,cb__$1,meta37854));
});

}

return (new cljs.core.async.t_cljs$core$async37853(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37856_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37856_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37857_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37857_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37858 = (i + (1));
i = G__37858;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37864 = arguments.length;
var i__4790__auto___37865 = (0);
while(true){
if((i__4790__auto___37865 < len__4789__auto___37864)){
args__4795__auto__.push((arguments[i__4790__auto___37865]));

var G__37866 = (i__4790__auto___37865 + (1));
i__4790__auto___37865 = G__37866;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37861){
var map__37862 = p__37861;
var map__37862__$1 = (((((!((map__37862 == null))))?(((((map__37862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37862):map__37862);
var opts = map__37862__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37859){
var G__37860 = cljs.core.first.call(null,seq37859);
var seq37859__$1 = cljs.core.next.call(null,seq37859);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37860,seq37859__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37868 = arguments.length;
switch (G__37868) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34285__auto___37914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_37892){
var state_val_37893 = (state_37892[(1)]);
if((state_val_37893 === (7))){
var inst_37888 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37894_37915 = state_37892__$1;
(statearr_37894_37915[(2)] = inst_37888);

(statearr_37894_37915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (1))){
var state_37892__$1 = state_37892;
var statearr_37895_37916 = state_37892__$1;
(statearr_37895_37916[(2)] = null);

(statearr_37895_37916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (4))){
var inst_37871 = (state_37892[(7)]);
var inst_37871__$1 = (state_37892[(2)]);
var inst_37872 = (inst_37871__$1 == null);
var state_37892__$1 = (function (){var statearr_37896 = state_37892;
(statearr_37896[(7)] = inst_37871__$1);

return statearr_37896;
})();
if(cljs.core.truth_(inst_37872)){
var statearr_37897_37917 = state_37892__$1;
(statearr_37897_37917[(1)] = (5));

} else {
var statearr_37898_37918 = state_37892__$1;
(statearr_37898_37918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (13))){
var state_37892__$1 = state_37892;
var statearr_37899_37919 = state_37892__$1;
(statearr_37899_37919[(2)] = null);

(statearr_37899_37919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (6))){
var inst_37871 = (state_37892[(7)]);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37892__$1,(11),to,inst_37871);
} else {
if((state_val_37893 === (3))){
var inst_37890 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37892__$1,inst_37890);
} else {
if((state_val_37893 === (12))){
var state_37892__$1 = state_37892;
var statearr_37900_37920 = state_37892__$1;
(statearr_37900_37920[(2)] = null);

(statearr_37900_37920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (2))){
var state_37892__$1 = state_37892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37892__$1,(4),from);
} else {
if((state_val_37893 === (11))){
var inst_37881 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
if(cljs.core.truth_(inst_37881)){
var statearr_37901_37921 = state_37892__$1;
(statearr_37901_37921[(1)] = (12));

} else {
var statearr_37902_37922 = state_37892__$1;
(statearr_37902_37922[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (9))){
var state_37892__$1 = state_37892;
var statearr_37903_37923 = state_37892__$1;
(statearr_37903_37923[(2)] = null);

(statearr_37903_37923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (5))){
var state_37892__$1 = state_37892;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37904_37924 = state_37892__$1;
(statearr_37904_37924[(1)] = (8));

} else {
var statearr_37905_37925 = state_37892__$1;
(statearr_37905_37925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (14))){
var inst_37886 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37906_37926 = state_37892__$1;
(statearr_37906_37926[(2)] = inst_37886);

(statearr_37906_37926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (10))){
var inst_37878 = (state_37892[(2)]);
var state_37892__$1 = state_37892;
var statearr_37907_37927 = state_37892__$1;
(statearr_37907_37927[(2)] = inst_37878);

(statearr_37907_37927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37893 === (8))){
var inst_37875 = cljs.core.async.close_BANG_.call(null,to);
var state_37892__$1 = state_37892;
var statearr_37908_37928 = state_37892__$1;
(statearr_37908_37928[(2)] = inst_37875);

(statearr_37908_37928[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_37909 = [null,null,null,null,null,null,null,null];
(statearr_37909[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_37909[(1)] = (1));

return statearr_37909;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_37892){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_37892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e37910){if((e37910 instanceof Object)){
var ex__34266__auto__ = e37910;
var statearr_37911_37929 = state_37892;
(statearr_37911_37929[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37930 = state_37892;
state_37892 = G__37930;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_37892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_37892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_37912 = f__34286__auto__.call(null);
(statearr_37912[(6)] = c__34285__auto___37914);

return statearr_37912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__37931){
var vec__37932 = p__37931;
var v = cljs.core.nth.call(null,vec__37932,(0),null);
var p = cljs.core.nth.call(null,vec__37932,(1),null);
var job = vec__37932;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34285__auto___38103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_37939){
var state_val_37940 = (state_37939[(1)]);
if((state_val_37940 === (1))){
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37939__$1,(2),res,v);
} else {
if((state_val_37940 === (2))){
var inst_37936 = (state_37939[(2)]);
var inst_37937 = cljs.core.async.close_BANG_.call(null,res);
var state_37939__$1 = (function (){var statearr_37941 = state_37939;
(statearr_37941[(7)] = inst_37936);

return statearr_37941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37939__$1,inst_37937);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0 = (function (){
var statearr_37942 = [null,null,null,null,null,null,null,null];
(statearr_37942[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__);

(statearr_37942[(1)] = (1));

return statearr_37942;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1 = (function (state_37939){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_37939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e37943){if((e37943 instanceof Object)){
var ex__34266__auto__ = e37943;
var statearr_37944_38104 = state_37939;
(statearr_37944_38104[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38105 = state_37939;
state_37939 = G__38105;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = function(state_37939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1.call(this,state_37939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_37945 = f__34286__auto__.call(null);
(statearr_37945[(6)] = c__34285__auto___38103);

return statearr_37945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__37946){
var vec__37947 = p__37946;
var v = cljs.core.nth.call(null,vec__37947,(0),null);
var p = cljs.core.nth.call(null,vec__37947,(1),null);
var job = vec__37947;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___38106 = n;
var __38107 = (0);
while(true){
if((__38107 < n__4666__auto___38106)){
var G__37950_38108 = type;
var G__37950_38109__$1 = (((G__37950_38108 instanceof cljs.core.Keyword))?G__37950_38108.fqn:null);
switch (G__37950_38109__$1) {
case "compute":
var c__34285__auto___38111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38107,c__34285__auto___38111,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async){
return (function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = ((function (__38107,c__34285__auto___38111,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async){
return (function (state_37963){
var state_val_37964 = (state_37963[(1)]);
if((state_val_37964 === (1))){
var state_37963__$1 = state_37963;
var statearr_37965_38112 = state_37963__$1;
(statearr_37965_38112[(2)] = null);

(statearr_37965_38112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37964 === (2))){
var state_37963__$1 = state_37963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37963__$1,(4),jobs);
} else {
if((state_val_37964 === (3))){
var inst_37961 = (state_37963[(2)]);
var state_37963__$1 = state_37963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37963__$1,inst_37961);
} else {
if((state_val_37964 === (4))){
var inst_37953 = (state_37963[(2)]);
var inst_37954 = process.call(null,inst_37953);
var state_37963__$1 = state_37963;
if(cljs.core.truth_(inst_37954)){
var statearr_37966_38113 = state_37963__$1;
(statearr_37966_38113[(1)] = (5));

} else {
var statearr_37967_38114 = state_37963__$1;
(statearr_37967_38114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37964 === (5))){
var state_37963__$1 = state_37963;
var statearr_37968_38115 = state_37963__$1;
(statearr_37968_38115[(2)] = null);

(statearr_37968_38115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37964 === (6))){
var state_37963__$1 = state_37963;
var statearr_37969_38116 = state_37963__$1;
(statearr_37969_38116[(2)] = null);

(statearr_37969_38116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37964 === (7))){
var inst_37959 = (state_37963[(2)]);
var state_37963__$1 = state_37963;
var statearr_37970_38117 = state_37963__$1;
(statearr_37970_38117[(2)] = inst_37959);

(statearr_37970_38117[(1)] = (3));


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
});})(__38107,c__34285__auto___38111,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async))
;
return ((function (__38107,switch__34262__auto__,c__34285__auto___38111,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0 = (function (){
var statearr_37971 = [null,null,null,null,null,null,null];
(statearr_37971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__);

(statearr_37971[(1)] = (1));

return statearr_37971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1 = (function (state_37963){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_37963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e37972){if((e37972 instanceof Object)){
var ex__34266__auto__ = e37972;
var statearr_37973_38118 = state_37963;
(statearr_37973_38118[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38119 = state_37963;
state_37963 = G__38119;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = function(state_37963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1.call(this,state_37963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__;
})()
;})(__38107,switch__34262__auto__,c__34285__auto___38111,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async))
})();
var state__34287__auto__ = (function (){var statearr_37974 = f__34286__auto__.call(null);
(statearr_37974[(6)] = c__34285__auto___38111);

return statearr_37974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
});})(__38107,c__34285__auto___38111,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async))
);


break;
case "async":
var c__34285__auto___38120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38107,c__34285__auto___38120,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async){
return (function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = ((function (__38107,c__34285__auto___38120,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async){
return (function (state_37987){
var state_val_37988 = (state_37987[(1)]);
if((state_val_37988 === (1))){
var state_37987__$1 = state_37987;
var statearr_37989_38121 = state_37987__$1;
(statearr_37989_38121[(2)] = null);

(statearr_37989_38121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (2))){
var state_37987__$1 = state_37987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37987__$1,(4),jobs);
} else {
if((state_val_37988 === (3))){
var inst_37985 = (state_37987[(2)]);
var state_37987__$1 = state_37987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37987__$1,inst_37985);
} else {
if((state_val_37988 === (4))){
var inst_37977 = (state_37987[(2)]);
var inst_37978 = async.call(null,inst_37977);
var state_37987__$1 = state_37987;
if(cljs.core.truth_(inst_37978)){
var statearr_37990_38122 = state_37987__$1;
(statearr_37990_38122[(1)] = (5));

} else {
var statearr_37991_38123 = state_37987__$1;
(statearr_37991_38123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (5))){
var state_37987__$1 = state_37987;
var statearr_37992_38124 = state_37987__$1;
(statearr_37992_38124[(2)] = null);

(statearr_37992_38124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (6))){
var state_37987__$1 = state_37987;
var statearr_37993_38125 = state_37987__$1;
(statearr_37993_38125[(2)] = null);

(statearr_37993_38125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37988 === (7))){
var inst_37983 = (state_37987[(2)]);
var state_37987__$1 = state_37987;
var statearr_37994_38126 = state_37987__$1;
(statearr_37994_38126[(2)] = inst_37983);

(statearr_37994_38126[(1)] = (3));


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
});})(__38107,c__34285__auto___38120,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async))
;
return ((function (__38107,switch__34262__auto__,c__34285__auto___38120,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0 = (function (){
var statearr_37995 = [null,null,null,null,null,null,null];
(statearr_37995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__);

(statearr_37995[(1)] = (1));

return statearr_37995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1 = (function (state_37987){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_37987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e37996){if((e37996 instanceof Object)){
var ex__34266__auto__ = e37996;
var statearr_37997_38127 = state_37987;
(statearr_37997_38127[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38128 = state_37987;
state_37987 = G__38128;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = function(state_37987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1.call(this,state_37987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__;
})()
;})(__38107,switch__34262__auto__,c__34285__auto___38120,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async))
})();
var state__34287__auto__ = (function (){var statearr_37998 = f__34286__auto__.call(null);
(statearr_37998[(6)] = c__34285__auto___38120);

return statearr_37998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
});})(__38107,c__34285__auto___38120,G__37950_38108,G__37950_38109__$1,n__4666__auto___38106,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37950_38109__$1)].join('')));

}

var G__38129 = (__38107 + (1));
__38107 = G__38129;
continue;
} else {
}
break;
}

var c__34285__auto___38130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_38020){
var state_val_38021 = (state_38020[(1)]);
if((state_val_38021 === (7))){
var inst_38016 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38022_38131 = state_38020__$1;
(statearr_38022_38131[(2)] = inst_38016);

(statearr_38022_38131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (1))){
var state_38020__$1 = state_38020;
var statearr_38023_38132 = state_38020__$1;
(statearr_38023_38132[(2)] = null);

(statearr_38023_38132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (4))){
var inst_38001 = (state_38020[(7)]);
var inst_38001__$1 = (state_38020[(2)]);
var inst_38002 = (inst_38001__$1 == null);
var state_38020__$1 = (function (){var statearr_38024 = state_38020;
(statearr_38024[(7)] = inst_38001__$1);

return statearr_38024;
})();
if(cljs.core.truth_(inst_38002)){
var statearr_38025_38133 = state_38020__$1;
(statearr_38025_38133[(1)] = (5));

} else {
var statearr_38026_38134 = state_38020__$1;
(statearr_38026_38134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (6))){
var inst_38001 = (state_38020[(7)]);
var inst_38006 = (state_38020[(8)]);
var inst_38006__$1 = cljs.core.async.chan.call(null,(1));
var inst_38007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38008 = [inst_38001,inst_38006__$1];
var inst_38009 = (new cljs.core.PersistentVector(null,2,(5),inst_38007,inst_38008,null));
var state_38020__$1 = (function (){var statearr_38027 = state_38020;
(statearr_38027[(8)] = inst_38006__$1);

return statearr_38027;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38020__$1,(8),jobs,inst_38009);
} else {
if((state_val_38021 === (3))){
var inst_38018 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38020__$1,inst_38018);
} else {
if((state_val_38021 === (2))){
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(4),from);
} else {
if((state_val_38021 === (9))){
var inst_38013 = (state_38020[(2)]);
var state_38020__$1 = (function (){var statearr_38028 = state_38020;
(statearr_38028[(9)] = inst_38013);

return statearr_38028;
})();
var statearr_38029_38135 = state_38020__$1;
(statearr_38029_38135[(2)] = null);

(statearr_38029_38135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (5))){
var inst_38004 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38020__$1 = state_38020;
var statearr_38030_38136 = state_38020__$1;
(statearr_38030_38136[(2)] = inst_38004);

(statearr_38030_38136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (8))){
var inst_38006 = (state_38020[(8)]);
var inst_38011 = (state_38020[(2)]);
var state_38020__$1 = (function (){var statearr_38031 = state_38020;
(statearr_38031[(10)] = inst_38011);

return statearr_38031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38020__$1,(9),results,inst_38006);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0 = (function (){
var statearr_38032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38032[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__);

(statearr_38032[(1)] = (1));

return statearr_38032;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1 = (function (state_38020){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_38020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e38033){if((e38033 instanceof Object)){
var ex__34266__auto__ = e38033;
var statearr_38034_38137 = state_38020;
(statearr_38034_38137[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38138 = state_38020;
state_38020 = G__38138;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = function(state_38020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1.call(this,state_38020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_38035 = f__34286__auto__.call(null);
(statearr_38035[(6)] = c__34285__auto___38130);

return statearr_38035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_38073){
var state_val_38074 = (state_38073[(1)]);
if((state_val_38074 === (7))){
var inst_38069 = (state_38073[(2)]);
var state_38073__$1 = state_38073;
var statearr_38075_38139 = state_38073__$1;
(statearr_38075_38139[(2)] = inst_38069);

(statearr_38075_38139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (20))){
var state_38073__$1 = state_38073;
var statearr_38076_38140 = state_38073__$1;
(statearr_38076_38140[(2)] = null);

(statearr_38076_38140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (1))){
var state_38073__$1 = state_38073;
var statearr_38077_38141 = state_38073__$1;
(statearr_38077_38141[(2)] = null);

(statearr_38077_38141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (4))){
var inst_38038 = (state_38073[(7)]);
var inst_38038__$1 = (state_38073[(2)]);
var inst_38039 = (inst_38038__$1 == null);
var state_38073__$1 = (function (){var statearr_38078 = state_38073;
(statearr_38078[(7)] = inst_38038__$1);

return statearr_38078;
})();
if(cljs.core.truth_(inst_38039)){
var statearr_38079_38142 = state_38073__$1;
(statearr_38079_38142[(1)] = (5));

} else {
var statearr_38080_38143 = state_38073__$1;
(statearr_38080_38143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (15))){
var inst_38051 = (state_38073[(8)]);
var state_38073__$1 = state_38073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38073__$1,(18),to,inst_38051);
} else {
if((state_val_38074 === (21))){
var inst_38064 = (state_38073[(2)]);
var state_38073__$1 = state_38073;
var statearr_38081_38144 = state_38073__$1;
(statearr_38081_38144[(2)] = inst_38064);

(statearr_38081_38144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (13))){
var inst_38066 = (state_38073[(2)]);
var state_38073__$1 = (function (){var statearr_38082 = state_38073;
(statearr_38082[(9)] = inst_38066);

return statearr_38082;
})();
var statearr_38083_38145 = state_38073__$1;
(statearr_38083_38145[(2)] = null);

(statearr_38083_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (6))){
var inst_38038 = (state_38073[(7)]);
var state_38073__$1 = state_38073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38073__$1,(11),inst_38038);
} else {
if((state_val_38074 === (17))){
var inst_38059 = (state_38073[(2)]);
var state_38073__$1 = state_38073;
if(cljs.core.truth_(inst_38059)){
var statearr_38084_38146 = state_38073__$1;
(statearr_38084_38146[(1)] = (19));

} else {
var statearr_38085_38147 = state_38073__$1;
(statearr_38085_38147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (3))){
var inst_38071 = (state_38073[(2)]);
var state_38073__$1 = state_38073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38073__$1,inst_38071);
} else {
if((state_val_38074 === (12))){
var inst_38048 = (state_38073[(10)]);
var state_38073__$1 = state_38073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38073__$1,(14),inst_38048);
} else {
if((state_val_38074 === (2))){
var state_38073__$1 = state_38073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38073__$1,(4),results);
} else {
if((state_val_38074 === (19))){
var state_38073__$1 = state_38073;
var statearr_38086_38148 = state_38073__$1;
(statearr_38086_38148[(2)] = null);

(statearr_38086_38148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (11))){
var inst_38048 = (state_38073[(2)]);
var state_38073__$1 = (function (){var statearr_38087 = state_38073;
(statearr_38087[(10)] = inst_38048);

return statearr_38087;
})();
var statearr_38088_38149 = state_38073__$1;
(statearr_38088_38149[(2)] = null);

(statearr_38088_38149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (9))){
var state_38073__$1 = state_38073;
var statearr_38089_38150 = state_38073__$1;
(statearr_38089_38150[(2)] = null);

(statearr_38089_38150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (5))){
var state_38073__$1 = state_38073;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38090_38151 = state_38073__$1;
(statearr_38090_38151[(1)] = (8));

} else {
var statearr_38091_38152 = state_38073__$1;
(statearr_38091_38152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (14))){
var inst_38051 = (state_38073[(8)]);
var inst_38051__$1 = (state_38073[(2)]);
var inst_38052 = (inst_38051__$1 == null);
var inst_38053 = cljs.core.not.call(null,inst_38052);
var state_38073__$1 = (function (){var statearr_38092 = state_38073;
(statearr_38092[(8)] = inst_38051__$1);

return statearr_38092;
})();
if(inst_38053){
var statearr_38093_38153 = state_38073__$1;
(statearr_38093_38153[(1)] = (15));

} else {
var statearr_38094_38154 = state_38073__$1;
(statearr_38094_38154[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (16))){
var state_38073__$1 = state_38073;
var statearr_38095_38155 = state_38073__$1;
(statearr_38095_38155[(2)] = false);

(statearr_38095_38155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (10))){
var inst_38045 = (state_38073[(2)]);
var state_38073__$1 = state_38073;
var statearr_38096_38156 = state_38073__$1;
(statearr_38096_38156[(2)] = inst_38045);

(statearr_38096_38156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (18))){
var inst_38056 = (state_38073[(2)]);
var state_38073__$1 = state_38073;
var statearr_38097_38157 = state_38073__$1;
(statearr_38097_38157[(2)] = inst_38056);

(statearr_38097_38157[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38074 === (8))){
var inst_38042 = cljs.core.async.close_BANG_.call(null,to);
var state_38073__$1 = state_38073;
var statearr_38098_38158 = state_38073__$1;
(statearr_38098_38158[(2)] = inst_38042);

(statearr_38098_38158[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0 = (function (){
var statearr_38099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__);

(statearr_38099[(1)] = (1));

return statearr_38099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1 = (function (state_38073){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_38073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e38100){if((e38100 instanceof Object)){
var ex__34266__auto__ = e38100;
var statearr_38101_38159 = state_38073;
(statearr_38101_38159[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38160 = state_38073;
state_38073 = G__38160;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__ = function(state_38073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1.call(this,state_38073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34263__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_38102 = f__34286__auto__.call(null);
(statearr_38102[(6)] = c__34285__auto__);

return statearr_38102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38162 = arguments.length;
switch (G__38162) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38165 = arguments.length;
switch (G__38165) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38168 = arguments.length;
switch (G__38168) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34285__auto___38217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_38194){
var state_val_38195 = (state_38194[(1)]);
if((state_val_38195 === (7))){
var inst_38190 = (state_38194[(2)]);
var state_38194__$1 = state_38194;
var statearr_38196_38218 = state_38194__$1;
(statearr_38196_38218[(2)] = inst_38190);

(statearr_38196_38218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (1))){
var state_38194__$1 = state_38194;
var statearr_38197_38219 = state_38194__$1;
(statearr_38197_38219[(2)] = null);

(statearr_38197_38219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (4))){
var inst_38171 = (state_38194[(7)]);
var inst_38171__$1 = (state_38194[(2)]);
var inst_38172 = (inst_38171__$1 == null);
var state_38194__$1 = (function (){var statearr_38198 = state_38194;
(statearr_38198[(7)] = inst_38171__$1);

return statearr_38198;
})();
if(cljs.core.truth_(inst_38172)){
var statearr_38199_38220 = state_38194__$1;
(statearr_38199_38220[(1)] = (5));

} else {
var statearr_38200_38221 = state_38194__$1;
(statearr_38200_38221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (13))){
var state_38194__$1 = state_38194;
var statearr_38201_38222 = state_38194__$1;
(statearr_38201_38222[(2)] = null);

(statearr_38201_38222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (6))){
var inst_38171 = (state_38194[(7)]);
var inst_38177 = p.call(null,inst_38171);
var state_38194__$1 = state_38194;
if(cljs.core.truth_(inst_38177)){
var statearr_38202_38223 = state_38194__$1;
(statearr_38202_38223[(1)] = (9));

} else {
var statearr_38203_38224 = state_38194__$1;
(statearr_38203_38224[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (3))){
var inst_38192 = (state_38194[(2)]);
var state_38194__$1 = state_38194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38194__$1,inst_38192);
} else {
if((state_val_38195 === (12))){
var state_38194__$1 = state_38194;
var statearr_38204_38225 = state_38194__$1;
(statearr_38204_38225[(2)] = null);

(statearr_38204_38225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (2))){
var state_38194__$1 = state_38194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38194__$1,(4),ch);
} else {
if((state_val_38195 === (11))){
var inst_38171 = (state_38194[(7)]);
var inst_38181 = (state_38194[(2)]);
var state_38194__$1 = state_38194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38194__$1,(8),inst_38181,inst_38171);
} else {
if((state_val_38195 === (9))){
var state_38194__$1 = state_38194;
var statearr_38205_38226 = state_38194__$1;
(statearr_38205_38226[(2)] = tc);

(statearr_38205_38226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (5))){
var inst_38174 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38175 = cljs.core.async.close_BANG_.call(null,fc);
var state_38194__$1 = (function (){var statearr_38206 = state_38194;
(statearr_38206[(8)] = inst_38174);

return statearr_38206;
})();
var statearr_38207_38227 = state_38194__$1;
(statearr_38207_38227[(2)] = inst_38175);

(statearr_38207_38227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (14))){
var inst_38188 = (state_38194[(2)]);
var state_38194__$1 = state_38194;
var statearr_38208_38228 = state_38194__$1;
(statearr_38208_38228[(2)] = inst_38188);

(statearr_38208_38228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (10))){
var state_38194__$1 = state_38194;
var statearr_38209_38229 = state_38194__$1;
(statearr_38209_38229[(2)] = fc);

(statearr_38209_38229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38195 === (8))){
var inst_38183 = (state_38194[(2)]);
var state_38194__$1 = state_38194;
if(cljs.core.truth_(inst_38183)){
var statearr_38210_38230 = state_38194__$1;
(statearr_38210_38230[(1)] = (12));

} else {
var statearr_38211_38231 = state_38194__$1;
(statearr_38211_38231[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_38212 = [null,null,null,null,null,null,null,null,null];
(statearr_38212[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_38212[(1)] = (1));

return statearr_38212;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_38194){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_38194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e38213){if((e38213 instanceof Object)){
var ex__34266__auto__ = e38213;
var statearr_38214_38232 = state_38194;
(statearr_38214_38232[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38233 = state_38194;
state_38194 = G__38233;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_38194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_38194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_38215 = f__34286__auto__.call(null);
(statearr_38215[(6)] = c__34285__auto___38217);

return statearr_38215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_38254){
var state_val_38255 = (state_38254[(1)]);
if((state_val_38255 === (7))){
var inst_38250 = (state_38254[(2)]);
var state_38254__$1 = state_38254;
var statearr_38256_38274 = state_38254__$1;
(statearr_38256_38274[(2)] = inst_38250);

(statearr_38256_38274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38255 === (1))){
var inst_38234 = init;
var state_38254__$1 = (function (){var statearr_38257 = state_38254;
(statearr_38257[(7)] = inst_38234);

return statearr_38257;
})();
var statearr_38258_38275 = state_38254__$1;
(statearr_38258_38275[(2)] = null);

(statearr_38258_38275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38255 === (4))){
var inst_38237 = (state_38254[(8)]);
var inst_38237__$1 = (state_38254[(2)]);
var inst_38238 = (inst_38237__$1 == null);
var state_38254__$1 = (function (){var statearr_38259 = state_38254;
(statearr_38259[(8)] = inst_38237__$1);

return statearr_38259;
})();
if(cljs.core.truth_(inst_38238)){
var statearr_38260_38276 = state_38254__$1;
(statearr_38260_38276[(1)] = (5));

} else {
var statearr_38261_38277 = state_38254__$1;
(statearr_38261_38277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38255 === (6))){
var inst_38237 = (state_38254[(8)]);
var inst_38234 = (state_38254[(7)]);
var inst_38241 = (state_38254[(9)]);
var inst_38241__$1 = f.call(null,inst_38234,inst_38237);
var inst_38242 = cljs.core.reduced_QMARK_.call(null,inst_38241__$1);
var state_38254__$1 = (function (){var statearr_38262 = state_38254;
(statearr_38262[(9)] = inst_38241__$1);

return statearr_38262;
})();
if(inst_38242){
var statearr_38263_38278 = state_38254__$1;
(statearr_38263_38278[(1)] = (8));

} else {
var statearr_38264_38279 = state_38254__$1;
(statearr_38264_38279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38255 === (3))){
var inst_38252 = (state_38254[(2)]);
var state_38254__$1 = state_38254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38254__$1,inst_38252);
} else {
if((state_val_38255 === (2))){
var state_38254__$1 = state_38254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38254__$1,(4),ch);
} else {
if((state_val_38255 === (9))){
var inst_38241 = (state_38254[(9)]);
var inst_38234 = inst_38241;
var state_38254__$1 = (function (){var statearr_38265 = state_38254;
(statearr_38265[(7)] = inst_38234);

return statearr_38265;
})();
var statearr_38266_38280 = state_38254__$1;
(statearr_38266_38280[(2)] = null);

(statearr_38266_38280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38255 === (5))){
var inst_38234 = (state_38254[(7)]);
var state_38254__$1 = state_38254;
var statearr_38267_38281 = state_38254__$1;
(statearr_38267_38281[(2)] = inst_38234);

(statearr_38267_38281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38255 === (10))){
var inst_38248 = (state_38254[(2)]);
var state_38254__$1 = state_38254;
var statearr_38268_38282 = state_38254__$1;
(statearr_38268_38282[(2)] = inst_38248);

(statearr_38268_38282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38255 === (8))){
var inst_38241 = (state_38254[(9)]);
var inst_38244 = cljs.core.deref.call(null,inst_38241);
var state_38254__$1 = state_38254;
var statearr_38269_38283 = state_38254__$1;
(statearr_38269_38283[(2)] = inst_38244);

(statearr_38269_38283[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34263__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34263__auto____0 = (function (){
var statearr_38270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38270[(0)] = cljs$core$async$reduce_$_state_machine__34263__auto__);

(statearr_38270[(1)] = (1));

return statearr_38270;
});
var cljs$core$async$reduce_$_state_machine__34263__auto____1 = (function (state_38254){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_38254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e38271){if((e38271 instanceof Object)){
var ex__34266__auto__ = e38271;
var statearr_38272_38284 = state_38254;
(statearr_38272_38284[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38285 = state_38254;
state_38254 = G__38285;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34263__auto__ = function(state_38254){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34263__auto____1.call(this,state_38254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34263__auto____0;
cljs$core$async$reduce_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34263__auto____1;
return cljs$core$async$reduce_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_38273 = f__34286__auto__.call(null);
(statearr_38273[(6)] = c__34285__auto__);

return statearr_38273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_38291){
var state_val_38292 = (state_38291[(1)]);
if((state_val_38292 === (1))){
var inst_38286 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_38291__$1 = state_38291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38291__$1,(2),inst_38286);
} else {
if((state_val_38292 === (2))){
var inst_38288 = (state_38291[(2)]);
var inst_38289 = f__$1.call(null,inst_38288);
var state_38291__$1 = state_38291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38291__$1,inst_38289);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34263__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34263__auto____0 = (function (){
var statearr_38293 = [null,null,null,null,null,null,null];
(statearr_38293[(0)] = cljs$core$async$transduce_$_state_machine__34263__auto__);

(statearr_38293[(1)] = (1));

return statearr_38293;
});
var cljs$core$async$transduce_$_state_machine__34263__auto____1 = (function (state_38291){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_38291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e38294){if((e38294 instanceof Object)){
var ex__34266__auto__ = e38294;
var statearr_38295_38297 = state_38291;
(statearr_38295_38297[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38298 = state_38291;
state_38291 = G__38298;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34263__auto__ = function(state_38291){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34263__auto____1.call(this,state_38291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34263__auto____0;
cljs$core$async$transduce_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34263__auto____1;
return cljs$core$async$transduce_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_38296 = f__34286__auto__.call(null);
(statearr_38296[(6)] = c__34285__auto__);

return statearr_38296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38300 = arguments.length;
switch (G__38300) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_38325){
var state_val_38326 = (state_38325[(1)]);
if((state_val_38326 === (7))){
var inst_38307 = (state_38325[(2)]);
var state_38325__$1 = state_38325;
var statearr_38327_38348 = state_38325__$1;
(statearr_38327_38348[(2)] = inst_38307);

(statearr_38327_38348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (1))){
var inst_38301 = cljs.core.seq.call(null,coll);
var inst_38302 = inst_38301;
var state_38325__$1 = (function (){var statearr_38328 = state_38325;
(statearr_38328[(7)] = inst_38302);

return statearr_38328;
})();
var statearr_38329_38349 = state_38325__$1;
(statearr_38329_38349[(2)] = null);

(statearr_38329_38349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (4))){
var inst_38302 = (state_38325[(7)]);
var inst_38305 = cljs.core.first.call(null,inst_38302);
var state_38325__$1 = state_38325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38325__$1,(7),ch,inst_38305);
} else {
if((state_val_38326 === (13))){
var inst_38319 = (state_38325[(2)]);
var state_38325__$1 = state_38325;
var statearr_38330_38350 = state_38325__$1;
(statearr_38330_38350[(2)] = inst_38319);

(statearr_38330_38350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (6))){
var inst_38310 = (state_38325[(2)]);
var state_38325__$1 = state_38325;
if(cljs.core.truth_(inst_38310)){
var statearr_38331_38351 = state_38325__$1;
(statearr_38331_38351[(1)] = (8));

} else {
var statearr_38332_38352 = state_38325__$1;
(statearr_38332_38352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (3))){
var inst_38323 = (state_38325[(2)]);
var state_38325__$1 = state_38325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38325__$1,inst_38323);
} else {
if((state_val_38326 === (12))){
var state_38325__$1 = state_38325;
var statearr_38333_38353 = state_38325__$1;
(statearr_38333_38353[(2)] = null);

(statearr_38333_38353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (2))){
var inst_38302 = (state_38325[(7)]);
var state_38325__$1 = state_38325;
if(cljs.core.truth_(inst_38302)){
var statearr_38334_38354 = state_38325__$1;
(statearr_38334_38354[(1)] = (4));

} else {
var statearr_38335_38355 = state_38325__$1;
(statearr_38335_38355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (11))){
var inst_38316 = cljs.core.async.close_BANG_.call(null,ch);
var state_38325__$1 = state_38325;
var statearr_38336_38356 = state_38325__$1;
(statearr_38336_38356[(2)] = inst_38316);

(statearr_38336_38356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (9))){
var state_38325__$1 = state_38325;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38337_38357 = state_38325__$1;
(statearr_38337_38357[(1)] = (11));

} else {
var statearr_38338_38358 = state_38325__$1;
(statearr_38338_38358[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (5))){
var inst_38302 = (state_38325[(7)]);
var state_38325__$1 = state_38325;
var statearr_38339_38359 = state_38325__$1;
(statearr_38339_38359[(2)] = inst_38302);

(statearr_38339_38359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (10))){
var inst_38321 = (state_38325[(2)]);
var state_38325__$1 = state_38325;
var statearr_38340_38360 = state_38325__$1;
(statearr_38340_38360[(2)] = inst_38321);

(statearr_38340_38360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38326 === (8))){
var inst_38302 = (state_38325[(7)]);
var inst_38312 = cljs.core.next.call(null,inst_38302);
var inst_38302__$1 = inst_38312;
var state_38325__$1 = (function (){var statearr_38341 = state_38325;
(statearr_38341[(7)] = inst_38302__$1);

return statearr_38341;
})();
var statearr_38342_38361 = state_38325__$1;
(statearr_38342_38361[(2)] = null);

(statearr_38342_38361[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_38343 = [null,null,null,null,null,null,null,null];
(statearr_38343[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_38343[(1)] = (1));

return statearr_38343;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_38325){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_38325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e38344){if((e38344 instanceof Object)){
var ex__34266__auto__ = e38344;
var statearr_38345_38362 = state_38325;
(statearr_38345_38362[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38363 = state_38325;
state_38325 = G__38363;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_38325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_38325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_38346 = f__34286__auto__.call(null);
(statearr_38346[(6)] = c__34285__auto__);

return statearr_38346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38364 = (function (ch,cs,meta38365){
this.ch = ch;
this.cs = cs;
this.meta38365 = meta38365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38366,meta38365__$1){
var self__ = this;
var _38366__$1 = this;
return (new cljs.core.async.t_cljs$core$async38364(self__.ch,self__.cs,meta38365__$1));
}));

(cljs.core.async.t_cljs$core$async38364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38366){
var self__ = this;
var _38366__$1 = this;
return self__.meta38365;
}));

(cljs.core.async.t_cljs$core$async38364.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38364.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38364.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38364.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38364.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38364.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38365","meta38365",-74897798,null)], null);
}));

(cljs.core.async.t_cljs$core$async38364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38364");

(cljs.core.async.t_cljs$core$async38364.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async38364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38364.
 */
cljs.core.async.__GT_t_cljs$core$async38364 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38364(ch__$1,cs__$1,meta38365){
return (new cljs.core.async.t_cljs$core$async38364(ch__$1,cs__$1,meta38365));
});

}

return (new cljs.core.async.t_cljs$core$async38364(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__34285__auto___38586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_38501){
var state_val_38502 = (state_38501[(1)]);
if((state_val_38502 === (7))){
var inst_38497 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38503_38587 = state_38501__$1;
(statearr_38503_38587[(2)] = inst_38497);

(statearr_38503_38587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (20))){
var inst_38400 = (state_38501[(7)]);
var inst_38412 = cljs.core.first.call(null,inst_38400);
var inst_38413 = cljs.core.nth.call(null,inst_38412,(0),null);
var inst_38414 = cljs.core.nth.call(null,inst_38412,(1),null);
var state_38501__$1 = (function (){var statearr_38504 = state_38501;
(statearr_38504[(8)] = inst_38413);

return statearr_38504;
})();
if(cljs.core.truth_(inst_38414)){
var statearr_38505_38588 = state_38501__$1;
(statearr_38505_38588[(1)] = (22));

} else {
var statearr_38506_38589 = state_38501__$1;
(statearr_38506_38589[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (27))){
var inst_38369 = (state_38501[(9)]);
var inst_38444 = (state_38501[(10)]);
var inst_38442 = (state_38501[(11)]);
var inst_38449 = (state_38501[(12)]);
var inst_38449__$1 = cljs.core._nth.call(null,inst_38442,inst_38444);
var inst_38450 = cljs.core.async.put_BANG_.call(null,inst_38449__$1,inst_38369,done);
var state_38501__$1 = (function (){var statearr_38507 = state_38501;
(statearr_38507[(12)] = inst_38449__$1);

return statearr_38507;
})();
if(cljs.core.truth_(inst_38450)){
var statearr_38508_38590 = state_38501__$1;
(statearr_38508_38590[(1)] = (30));

} else {
var statearr_38509_38591 = state_38501__$1;
(statearr_38509_38591[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (1))){
var state_38501__$1 = state_38501;
var statearr_38510_38592 = state_38501__$1;
(statearr_38510_38592[(2)] = null);

(statearr_38510_38592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (24))){
var inst_38400 = (state_38501[(7)]);
var inst_38419 = (state_38501[(2)]);
var inst_38420 = cljs.core.next.call(null,inst_38400);
var inst_38378 = inst_38420;
var inst_38379 = null;
var inst_38380 = (0);
var inst_38381 = (0);
var state_38501__$1 = (function (){var statearr_38511 = state_38501;
(statearr_38511[(13)] = inst_38378);

(statearr_38511[(14)] = inst_38379);

(statearr_38511[(15)] = inst_38419);

(statearr_38511[(16)] = inst_38380);

(statearr_38511[(17)] = inst_38381);

return statearr_38511;
})();
var statearr_38512_38593 = state_38501__$1;
(statearr_38512_38593[(2)] = null);

(statearr_38512_38593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (39))){
var state_38501__$1 = state_38501;
var statearr_38516_38594 = state_38501__$1;
(statearr_38516_38594[(2)] = null);

(statearr_38516_38594[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (4))){
var inst_38369 = (state_38501[(9)]);
var inst_38369__$1 = (state_38501[(2)]);
var inst_38370 = (inst_38369__$1 == null);
var state_38501__$1 = (function (){var statearr_38517 = state_38501;
(statearr_38517[(9)] = inst_38369__$1);

return statearr_38517;
})();
if(cljs.core.truth_(inst_38370)){
var statearr_38518_38595 = state_38501__$1;
(statearr_38518_38595[(1)] = (5));

} else {
var statearr_38519_38596 = state_38501__$1;
(statearr_38519_38596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (15))){
var inst_38378 = (state_38501[(13)]);
var inst_38379 = (state_38501[(14)]);
var inst_38380 = (state_38501[(16)]);
var inst_38381 = (state_38501[(17)]);
var inst_38396 = (state_38501[(2)]);
var inst_38397 = (inst_38381 + (1));
var tmp38513 = inst_38378;
var tmp38514 = inst_38379;
var tmp38515 = inst_38380;
var inst_38378__$1 = tmp38513;
var inst_38379__$1 = tmp38514;
var inst_38380__$1 = tmp38515;
var inst_38381__$1 = inst_38397;
var state_38501__$1 = (function (){var statearr_38520 = state_38501;
(statearr_38520[(13)] = inst_38378__$1);

(statearr_38520[(14)] = inst_38379__$1);

(statearr_38520[(18)] = inst_38396);

(statearr_38520[(16)] = inst_38380__$1);

(statearr_38520[(17)] = inst_38381__$1);

return statearr_38520;
})();
var statearr_38521_38597 = state_38501__$1;
(statearr_38521_38597[(2)] = null);

(statearr_38521_38597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (21))){
var inst_38423 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38525_38598 = state_38501__$1;
(statearr_38525_38598[(2)] = inst_38423);

(statearr_38525_38598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (31))){
var inst_38449 = (state_38501[(12)]);
var inst_38453 = done.call(null,null);
var inst_38454 = cljs.core.async.untap_STAR_.call(null,m,inst_38449);
var state_38501__$1 = (function (){var statearr_38526 = state_38501;
(statearr_38526[(19)] = inst_38453);

return statearr_38526;
})();
var statearr_38527_38599 = state_38501__$1;
(statearr_38527_38599[(2)] = inst_38454);

(statearr_38527_38599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (32))){
var inst_38443 = (state_38501[(20)]);
var inst_38441 = (state_38501[(21)]);
var inst_38444 = (state_38501[(10)]);
var inst_38442 = (state_38501[(11)]);
var inst_38456 = (state_38501[(2)]);
var inst_38457 = (inst_38444 + (1));
var tmp38522 = inst_38443;
var tmp38523 = inst_38441;
var tmp38524 = inst_38442;
var inst_38441__$1 = tmp38523;
var inst_38442__$1 = tmp38524;
var inst_38443__$1 = tmp38522;
var inst_38444__$1 = inst_38457;
var state_38501__$1 = (function (){var statearr_38528 = state_38501;
(statearr_38528[(20)] = inst_38443__$1);

(statearr_38528[(21)] = inst_38441__$1);

(statearr_38528[(22)] = inst_38456);

(statearr_38528[(10)] = inst_38444__$1);

(statearr_38528[(11)] = inst_38442__$1);

return statearr_38528;
})();
var statearr_38529_38600 = state_38501__$1;
(statearr_38529_38600[(2)] = null);

(statearr_38529_38600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (40))){
var inst_38469 = (state_38501[(23)]);
var inst_38473 = done.call(null,null);
var inst_38474 = cljs.core.async.untap_STAR_.call(null,m,inst_38469);
var state_38501__$1 = (function (){var statearr_38530 = state_38501;
(statearr_38530[(24)] = inst_38473);

return statearr_38530;
})();
var statearr_38531_38601 = state_38501__$1;
(statearr_38531_38601[(2)] = inst_38474);

(statearr_38531_38601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (33))){
var inst_38460 = (state_38501[(25)]);
var inst_38462 = cljs.core.chunked_seq_QMARK_.call(null,inst_38460);
var state_38501__$1 = state_38501;
if(inst_38462){
var statearr_38532_38602 = state_38501__$1;
(statearr_38532_38602[(1)] = (36));

} else {
var statearr_38533_38603 = state_38501__$1;
(statearr_38533_38603[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (13))){
var inst_38390 = (state_38501[(26)]);
var inst_38393 = cljs.core.async.close_BANG_.call(null,inst_38390);
var state_38501__$1 = state_38501;
var statearr_38534_38604 = state_38501__$1;
(statearr_38534_38604[(2)] = inst_38393);

(statearr_38534_38604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (22))){
var inst_38413 = (state_38501[(8)]);
var inst_38416 = cljs.core.async.close_BANG_.call(null,inst_38413);
var state_38501__$1 = state_38501;
var statearr_38535_38605 = state_38501__$1;
(statearr_38535_38605[(2)] = inst_38416);

(statearr_38535_38605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (36))){
var inst_38460 = (state_38501[(25)]);
var inst_38464 = cljs.core.chunk_first.call(null,inst_38460);
var inst_38465 = cljs.core.chunk_rest.call(null,inst_38460);
var inst_38466 = cljs.core.count.call(null,inst_38464);
var inst_38441 = inst_38465;
var inst_38442 = inst_38464;
var inst_38443 = inst_38466;
var inst_38444 = (0);
var state_38501__$1 = (function (){var statearr_38536 = state_38501;
(statearr_38536[(20)] = inst_38443);

(statearr_38536[(21)] = inst_38441);

(statearr_38536[(10)] = inst_38444);

(statearr_38536[(11)] = inst_38442);

return statearr_38536;
})();
var statearr_38537_38606 = state_38501__$1;
(statearr_38537_38606[(2)] = null);

(statearr_38537_38606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (41))){
var inst_38460 = (state_38501[(25)]);
var inst_38476 = (state_38501[(2)]);
var inst_38477 = cljs.core.next.call(null,inst_38460);
var inst_38441 = inst_38477;
var inst_38442 = null;
var inst_38443 = (0);
var inst_38444 = (0);
var state_38501__$1 = (function (){var statearr_38538 = state_38501;
(statearr_38538[(27)] = inst_38476);

(statearr_38538[(20)] = inst_38443);

(statearr_38538[(21)] = inst_38441);

(statearr_38538[(10)] = inst_38444);

(statearr_38538[(11)] = inst_38442);

return statearr_38538;
})();
var statearr_38539_38607 = state_38501__$1;
(statearr_38539_38607[(2)] = null);

(statearr_38539_38607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (43))){
var state_38501__$1 = state_38501;
var statearr_38540_38608 = state_38501__$1;
(statearr_38540_38608[(2)] = null);

(statearr_38540_38608[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (29))){
var inst_38485 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38541_38609 = state_38501__$1;
(statearr_38541_38609[(2)] = inst_38485);

(statearr_38541_38609[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (44))){
var inst_38494 = (state_38501[(2)]);
var state_38501__$1 = (function (){var statearr_38542 = state_38501;
(statearr_38542[(28)] = inst_38494);

return statearr_38542;
})();
var statearr_38543_38610 = state_38501__$1;
(statearr_38543_38610[(2)] = null);

(statearr_38543_38610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (6))){
var inst_38433 = (state_38501[(29)]);
var inst_38432 = cljs.core.deref.call(null,cs);
var inst_38433__$1 = cljs.core.keys.call(null,inst_38432);
var inst_38434 = cljs.core.count.call(null,inst_38433__$1);
var inst_38435 = cljs.core.reset_BANG_.call(null,dctr,inst_38434);
var inst_38440 = cljs.core.seq.call(null,inst_38433__$1);
var inst_38441 = inst_38440;
var inst_38442 = null;
var inst_38443 = (0);
var inst_38444 = (0);
var state_38501__$1 = (function (){var statearr_38544 = state_38501;
(statearr_38544[(29)] = inst_38433__$1);

(statearr_38544[(20)] = inst_38443);

(statearr_38544[(21)] = inst_38441);

(statearr_38544[(30)] = inst_38435);

(statearr_38544[(10)] = inst_38444);

(statearr_38544[(11)] = inst_38442);

return statearr_38544;
})();
var statearr_38545_38611 = state_38501__$1;
(statearr_38545_38611[(2)] = null);

(statearr_38545_38611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (28))){
var inst_38441 = (state_38501[(21)]);
var inst_38460 = (state_38501[(25)]);
var inst_38460__$1 = cljs.core.seq.call(null,inst_38441);
var state_38501__$1 = (function (){var statearr_38546 = state_38501;
(statearr_38546[(25)] = inst_38460__$1);

return statearr_38546;
})();
if(inst_38460__$1){
var statearr_38547_38612 = state_38501__$1;
(statearr_38547_38612[(1)] = (33));

} else {
var statearr_38548_38613 = state_38501__$1;
(statearr_38548_38613[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (25))){
var inst_38443 = (state_38501[(20)]);
var inst_38444 = (state_38501[(10)]);
var inst_38446 = (inst_38444 < inst_38443);
var inst_38447 = inst_38446;
var state_38501__$1 = state_38501;
if(cljs.core.truth_(inst_38447)){
var statearr_38549_38614 = state_38501__$1;
(statearr_38549_38614[(1)] = (27));

} else {
var statearr_38550_38615 = state_38501__$1;
(statearr_38550_38615[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (34))){
var state_38501__$1 = state_38501;
var statearr_38551_38616 = state_38501__$1;
(statearr_38551_38616[(2)] = null);

(statearr_38551_38616[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (17))){
var state_38501__$1 = state_38501;
var statearr_38552_38617 = state_38501__$1;
(statearr_38552_38617[(2)] = null);

(statearr_38552_38617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (3))){
var inst_38499 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38501__$1,inst_38499);
} else {
if((state_val_38502 === (12))){
var inst_38428 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38553_38618 = state_38501__$1;
(statearr_38553_38618[(2)] = inst_38428);

(statearr_38553_38618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (2))){
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38501__$1,(4),ch);
} else {
if((state_val_38502 === (23))){
var state_38501__$1 = state_38501;
var statearr_38554_38619 = state_38501__$1;
(statearr_38554_38619[(2)] = null);

(statearr_38554_38619[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (35))){
var inst_38483 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38555_38620 = state_38501__$1;
(statearr_38555_38620[(2)] = inst_38483);

(statearr_38555_38620[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (19))){
var inst_38400 = (state_38501[(7)]);
var inst_38404 = cljs.core.chunk_first.call(null,inst_38400);
var inst_38405 = cljs.core.chunk_rest.call(null,inst_38400);
var inst_38406 = cljs.core.count.call(null,inst_38404);
var inst_38378 = inst_38405;
var inst_38379 = inst_38404;
var inst_38380 = inst_38406;
var inst_38381 = (0);
var state_38501__$1 = (function (){var statearr_38556 = state_38501;
(statearr_38556[(13)] = inst_38378);

(statearr_38556[(14)] = inst_38379);

(statearr_38556[(16)] = inst_38380);

(statearr_38556[(17)] = inst_38381);

return statearr_38556;
})();
var statearr_38557_38621 = state_38501__$1;
(statearr_38557_38621[(2)] = null);

(statearr_38557_38621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (11))){
var inst_38400 = (state_38501[(7)]);
var inst_38378 = (state_38501[(13)]);
var inst_38400__$1 = cljs.core.seq.call(null,inst_38378);
var state_38501__$1 = (function (){var statearr_38558 = state_38501;
(statearr_38558[(7)] = inst_38400__$1);

return statearr_38558;
})();
if(inst_38400__$1){
var statearr_38559_38622 = state_38501__$1;
(statearr_38559_38622[(1)] = (16));

} else {
var statearr_38560_38623 = state_38501__$1;
(statearr_38560_38623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (9))){
var inst_38430 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38561_38624 = state_38501__$1;
(statearr_38561_38624[(2)] = inst_38430);

(statearr_38561_38624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (5))){
var inst_38376 = cljs.core.deref.call(null,cs);
var inst_38377 = cljs.core.seq.call(null,inst_38376);
var inst_38378 = inst_38377;
var inst_38379 = null;
var inst_38380 = (0);
var inst_38381 = (0);
var state_38501__$1 = (function (){var statearr_38562 = state_38501;
(statearr_38562[(13)] = inst_38378);

(statearr_38562[(14)] = inst_38379);

(statearr_38562[(16)] = inst_38380);

(statearr_38562[(17)] = inst_38381);

return statearr_38562;
})();
var statearr_38563_38625 = state_38501__$1;
(statearr_38563_38625[(2)] = null);

(statearr_38563_38625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (14))){
var state_38501__$1 = state_38501;
var statearr_38564_38626 = state_38501__$1;
(statearr_38564_38626[(2)] = null);

(statearr_38564_38626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (45))){
var inst_38491 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38565_38627 = state_38501__$1;
(statearr_38565_38627[(2)] = inst_38491);

(statearr_38565_38627[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (26))){
var inst_38433 = (state_38501[(29)]);
var inst_38487 = (state_38501[(2)]);
var inst_38488 = cljs.core.seq.call(null,inst_38433);
var state_38501__$1 = (function (){var statearr_38566 = state_38501;
(statearr_38566[(31)] = inst_38487);

return statearr_38566;
})();
if(inst_38488){
var statearr_38567_38628 = state_38501__$1;
(statearr_38567_38628[(1)] = (42));

} else {
var statearr_38568_38629 = state_38501__$1;
(statearr_38568_38629[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (16))){
var inst_38400 = (state_38501[(7)]);
var inst_38402 = cljs.core.chunked_seq_QMARK_.call(null,inst_38400);
var state_38501__$1 = state_38501;
if(inst_38402){
var statearr_38569_38630 = state_38501__$1;
(statearr_38569_38630[(1)] = (19));

} else {
var statearr_38570_38631 = state_38501__$1;
(statearr_38570_38631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (38))){
var inst_38480 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38571_38632 = state_38501__$1;
(statearr_38571_38632[(2)] = inst_38480);

(statearr_38571_38632[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (30))){
var state_38501__$1 = state_38501;
var statearr_38572_38633 = state_38501__$1;
(statearr_38572_38633[(2)] = null);

(statearr_38572_38633[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (10))){
var inst_38379 = (state_38501[(14)]);
var inst_38381 = (state_38501[(17)]);
var inst_38389 = cljs.core._nth.call(null,inst_38379,inst_38381);
var inst_38390 = cljs.core.nth.call(null,inst_38389,(0),null);
var inst_38391 = cljs.core.nth.call(null,inst_38389,(1),null);
var state_38501__$1 = (function (){var statearr_38573 = state_38501;
(statearr_38573[(26)] = inst_38390);

return statearr_38573;
})();
if(cljs.core.truth_(inst_38391)){
var statearr_38574_38634 = state_38501__$1;
(statearr_38574_38634[(1)] = (13));

} else {
var statearr_38575_38635 = state_38501__$1;
(statearr_38575_38635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (18))){
var inst_38426 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38576_38636 = state_38501__$1;
(statearr_38576_38636[(2)] = inst_38426);

(statearr_38576_38636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (42))){
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38501__$1,(45),dchan);
} else {
if((state_val_38502 === (37))){
var inst_38469 = (state_38501[(23)]);
var inst_38369 = (state_38501[(9)]);
var inst_38460 = (state_38501[(25)]);
var inst_38469__$1 = cljs.core.first.call(null,inst_38460);
var inst_38470 = cljs.core.async.put_BANG_.call(null,inst_38469__$1,inst_38369,done);
var state_38501__$1 = (function (){var statearr_38577 = state_38501;
(statearr_38577[(23)] = inst_38469__$1);

return statearr_38577;
})();
if(cljs.core.truth_(inst_38470)){
var statearr_38578_38637 = state_38501__$1;
(statearr_38578_38637[(1)] = (39));

} else {
var statearr_38579_38638 = state_38501__$1;
(statearr_38579_38638[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (8))){
var inst_38380 = (state_38501[(16)]);
var inst_38381 = (state_38501[(17)]);
var inst_38383 = (inst_38381 < inst_38380);
var inst_38384 = inst_38383;
var state_38501__$1 = state_38501;
if(cljs.core.truth_(inst_38384)){
var statearr_38580_38639 = state_38501__$1;
(statearr_38580_38639[(1)] = (10));

} else {
var statearr_38581_38640 = state_38501__$1;
(statearr_38581_38640[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__34263__auto__ = null;
var cljs$core$async$mult_$_state_machine__34263__auto____0 = (function (){
var statearr_38582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38582[(0)] = cljs$core$async$mult_$_state_machine__34263__auto__);

(statearr_38582[(1)] = (1));

return statearr_38582;
});
var cljs$core$async$mult_$_state_machine__34263__auto____1 = (function (state_38501){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_38501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e38583){if((e38583 instanceof Object)){
var ex__34266__auto__ = e38583;
var statearr_38584_38641 = state_38501;
(statearr_38584_38641[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38642 = state_38501;
state_38501 = G__38642;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34263__auto__ = function(state_38501){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34263__auto____1.call(this,state_38501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34263__auto____0;
cljs$core$async$mult_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34263__auto____1;
return cljs$core$async$mult_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_38585 = f__34286__auto__.call(null);
(statearr_38585[(6)] = c__34285__auto___38586);

return statearr_38585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38644 = arguments.length;
switch (G__38644) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38656 = arguments.length;
var i__4790__auto___38657 = (0);
while(true){
if((i__4790__auto___38657 < len__4789__auto___38656)){
args__4795__auto__.push((arguments[i__4790__auto___38657]));

var G__38658 = (i__4790__auto___38657 + (1));
i__4790__auto___38657 = G__38658;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38650){
var map__38651 = p__38650;
var map__38651__$1 = (((((!((map__38651 == null))))?(((((map__38651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38651):map__38651);
var opts = map__38651__$1;
var statearr_38653_38659 = state;
(statearr_38653_38659[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_38654_38660 = state;
(statearr_38654_38660[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_38655_38661 = state;
(statearr_38655_38661[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38646){
var G__38647 = cljs.core.first.call(null,seq38646);
var seq38646__$1 = cljs.core.next.call(null,seq38646);
var G__38648 = cljs.core.first.call(null,seq38646__$1);
var seq38646__$2 = cljs.core.next.call(null,seq38646__$1);
var G__38649 = cljs.core.first.call(null,seq38646__$2);
var seq38646__$3 = cljs.core.next.call(null,seq38646__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38647,G__38648,G__38649,seq38646__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38662 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38663){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38663 = meta38663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38664,meta38663__$1){
var self__ = this;
var _38664__$1 = this;
return (new cljs.core.async.t_cljs$core$async38662(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38663__$1));
}));

(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38664){
var self__ = this;
var _38664__$1 = this;
return self__.meta38663;
}));

(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38662.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async38662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38663","meta38663",1135937454,null)], null);
}));

(cljs.core.async.t_cljs$core$async38662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38662");

(cljs.core.async.t_cljs$core$async38662.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async38662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38662.
 */
cljs.core.async.__GT_t_cljs$core$async38662 = (function cljs$core$async$mix_$___GT_t_cljs$core$async38662(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38663){
return (new cljs.core.async.t_cljs$core$async38662(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38663));
});

}

return (new cljs.core.async.t_cljs$core$async38662(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34285__auto___38826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_38766){
var state_val_38767 = (state_38766[(1)]);
if((state_val_38767 === (7))){
var inst_38681 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
var statearr_38768_38827 = state_38766__$1;
(statearr_38768_38827[(2)] = inst_38681);

(statearr_38768_38827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (20))){
var inst_38693 = (state_38766[(7)]);
var state_38766__$1 = state_38766;
var statearr_38769_38828 = state_38766__$1;
(statearr_38769_38828[(2)] = inst_38693);

(statearr_38769_38828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (27))){
var state_38766__$1 = state_38766;
var statearr_38770_38829 = state_38766__$1;
(statearr_38770_38829[(2)] = null);

(statearr_38770_38829[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (1))){
var inst_38668 = (state_38766[(8)]);
var inst_38668__$1 = calc_state.call(null);
var inst_38670 = (inst_38668__$1 == null);
var inst_38671 = cljs.core.not.call(null,inst_38670);
var state_38766__$1 = (function (){var statearr_38771 = state_38766;
(statearr_38771[(8)] = inst_38668__$1);

return statearr_38771;
})();
if(inst_38671){
var statearr_38772_38830 = state_38766__$1;
(statearr_38772_38830[(1)] = (2));

} else {
var statearr_38773_38831 = state_38766__$1;
(statearr_38773_38831[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (24))){
var inst_38740 = (state_38766[(9)]);
var inst_38726 = (state_38766[(10)]);
var inst_38717 = (state_38766[(11)]);
var inst_38740__$1 = inst_38717.call(null,inst_38726);
var state_38766__$1 = (function (){var statearr_38774 = state_38766;
(statearr_38774[(9)] = inst_38740__$1);

return statearr_38774;
})();
if(cljs.core.truth_(inst_38740__$1)){
var statearr_38775_38832 = state_38766__$1;
(statearr_38775_38832[(1)] = (29));

} else {
var statearr_38776_38833 = state_38766__$1;
(statearr_38776_38833[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (4))){
var inst_38684 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
if(cljs.core.truth_(inst_38684)){
var statearr_38777_38834 = state_38766__$1;
(statearr_38777_38834[(1)] = (8));

} else {
var statearr_38778_38835 = state_38766__$1;
(statearr_38778_38835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (15))){
var inst_38711 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
if(cljs.core.truth_(inst_38711)){
var statearr_38779_38836 = state_38766__$1;
(statearr_38779_38836[(1)] = (19));

} else {
var statearr_38780_38837 = state_38766__$1;
(statearr_38780_38837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (21))){
var inst_38716 = (state_38766[(12)]);
var inst_38716__$1 = (state_38766[(2)]);
var inst_38717 = cljs.core.get.call(null,inst_38716__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38718 = cljs.core.get.call(null,inst_38716__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38719 = cljs.core.get.call(null,inst_38716__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38766__$1 = (function (){var statearr_38781 = state_38766;
(statearr_38781[(12)] = inst_38716__$1);

(statearr_38781[(13)] = inst_38718);

(statearr_38781[(11)] = inst_38717);

return statearr_38781;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38766__$1,(22),inst_38719);
} else {
if((state_val_38767 === (31))){
var inst_38748 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
if(cljs.core.truth_(inst_38748)){
var statearr_38782_38838 = state_38766__$1;
(statearr_38782_38838[(1)] = (32));

} else {
var statearr_38783_38839 = state_38766__$1;
(statearr_38783_38839[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (32))){
var inst_38725 = (state_38766[(14)]);
var state_38766__$1 = state_38766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38766__$1,(35),out,inst_38725);
} else {
if((state_val_38767 === (33))){
var inst_38716 = (state_38766[(12)]);
var inst_38693 = inst_38716;
var state_38766__$1 = (function (){var statearr_38784 = state_38766;
(statearr_38784[(7)] = inst_38693);

return statearr_38784;
})();
var statearr_38785_38840 = state_38766__$1;
(statearr_38785_38840[(2)] = null);

(statearr_38785_38840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (13))){
var inst_38693 = (state_38766[(7)]);
var inst_38700 = inst_38693.cljs$lang$protocol_mask$partition0$;
var inst_38701 = (inst_38700 & (64));
var inst_38702 = inst_38693.cljs$core$ISeq$;
var inst_38703 = (cljs.core.PROTOCOL_SENTINEL === inst_38702);
var inst_38704 = ((inst_38701) || (inst_38703));
var state_38766__$1 = state_38766;
if(cljs.core.truth_(inst_38704)){
var statearr_38786_38841 = state_38766__$1;
(statearr_38786_38841[(1)] = (16));

} else {
var statearr_38787_38842 = state_38766__$1;
(statearr_38787_38842[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (22))){
var inst_38726 = (state_38766[(10)]);
var inst_38725 = (state_38766[(14)]);
var inst_38724 = (state_38766[(2)]);
var inst_38725__$1 = cljs.core.nth.call(null,inst_38724,(0),null);
var inst_38726__$1 = cljs.core.nth.call(null,inst_38724,(1),null);
var inst_38727 = (inst_38725__$1 == null);
var inst_38728 = cljs.core._EQ_.call(null,inst_38726__$1,change);
var inst_38729 = ((inst_38727) || (inst_38728));
var state_38766__$1 = (function (){var statearr_38788 = state_38766;
(statearr_38788[(10)] = inst_38726__$1);

(statearr_38788[(14)] = inst_38725__$1);

return statearr_38788;
})();
if(cljs.core.truth_(inst_38729)){
var statearr_38789_38843 = state_38766__$1;
(statearr_38789_38843[(1)] = (23));

} else {
var statearr_38790_38844 = state_38766__$1;
(statearr_38790_38844[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (36))){
var inst_38716 = (state_38766[(12)]);
var inst_38693 = inst_38716;
var state_38766__$1 = (function (){var statearr_38791 = state_38766;
(statearr_38791[(7)] = inst_38693);

return statearr_38791;
})();
var statearr_38792_38845 = state_38766__$1;
(statearr_38792_38845[(2)] = null);

(statearr_38792_38845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (29))){
var inst_38740 = (state_38766[(9)]);
var state_38766__$1 = state_38766;
var statearr_38793_38846 = state_38766__$1;
(statearr_38793_38846[(2)] = inst_38740);

(statearr_38793_38846[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (6))){
var state_38766__$1 = state_38766;
var statearr_38794_38847 = state_38766__$1;
(statearr_38794_38847[(2)] = false);

(statearr_38794_38847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (28))){
var inst_38736 = (state_38766[(2)]);
var inst_38737 = calc_state.call(null);
var inst_38693 = inst_38737;
var state_38766__$1 = (function (){var statearr_38795 = state_38766;
(statearr_38795[(7)] = inst_38693);

(statearr_38795[(15)] = inst_38736);

return statearr_38795;
})();
var statearr_38796_38848 = state_38766__$1;
(statearr_38796_38848[(2)] = null);

(statearr_38796_38848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (25))){
var inst_38762 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
var statearr_38797_38849 = state_38766__$1;
(statearr_38797_38849[(2)] = inst_38762);

(statearr_38797_38849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (34))){
var inst_38760 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
var statearr_38798_38850 = state_38766__$1;
(statearr_38798_38850[(2)] = inst_38760);

(statearr_38798_38850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (17))){
var state_38766__$1 = state_38766;
var statearr_38799_38851 = state_38766__$1;
(statearr_38799_38851[(2)] = false);

(statearr_38799_38851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (3))){
var state_38766__$1 = state_38766;
var statearr_38800_38852 = state_38766__$1;
(statearr_38800_38852[(2)] = false);

(statearr_38800_38852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (12))){
var inst_38764 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38766__$1,inst_38764);
} else {
if((state_val_38767 === (2))){
var inst_38668 = (state_38766[(8)]);
var inst_38673 = inst_38668.cljs$lang$protocol_mask$partition0$;
var inst_38674 = (inst_38673 & (64));
var inst_38675 = inst_38668.cljs$core$ISeq$;
var inst_38676 = (cljs.core.PROTOCOL_SENTINEL === inst_38675);
var inst_38677 = ((inst_38674) || (inst_38676));
var state_38766__$1 = state_38766;
if(cljs.core.truth_(inst_38677)){
var statearr_38801_38853 = state_38766__$1;
(statearr_38801_38853[(1)] = (5));

} else {
var statearr_38802_38854 = state_38766__$1;
(statearr_38802_38854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (23))){
var inst_38725 = (state_38766[(14)]);
var inst_38731 = (inst_38725 == null);
var state_38766__$1 = state_38766;
if(cljs.core.truth_(inst_38731)){
var statearr_38803_38855 = state_38766__$1;
(statearr_38803_38855[(1)] = (26));

} else {
var statearr_38804_38856 = state_38766__$1;
(statearr_38804_38856[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (35))){
var inst_38751 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
if(cljs.core.truth_(inst_38751)){
var statearr_38805_38857 = state_38766__$1;
(statearr_38805_38857[(1)] = (36));

} else {
var statearr_38806_38858 = state_38766__$1;
(statearr_38806_38858[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (19))){
var inst_38693 = (state_38766[(7)]);
var inst_38713 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38693);
var state_38766__$1 = state_38766;
var statearr_38807_38859 = state_38766__$1;
(statearr_38807_38859[(2)] = inst_38713);

(statearr_38807_38859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (11))){
var inst_38693 = (state_38766[(7)]);
var inst_38697 = (inst_38693 == null);
var inst_38698 = cljs.core.not.call(null,inst_38697);
var state_38766__$1 = state_38766;
if(inst_38698){
var statearr_38808_38860 = state_38766__$1;
(statearr_38808_38860[(1)] = (13));

} else {
var statearr_38809_38861 = state_38766__$1;
(statearr_38809_38861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (9))){
var inst_38668 = (state_38766[(8)]);
var state_38766__$1 = state_38766;
var statearr_38810_38862 = state_38766__$1;
(statearr_38810_38862[(2)] = inst_38668);

(statearr_38810_38862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (5))){
var state_38766__$1 = state_38766;
var statearr_38811_38863 = state_38766__$1;
(statearr_38811_38863[(2)] = true);

(statearr_38811_38863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (14))){
var state_38766__$1 = state_38766;
var statearr_38812_38864 = state_38766__$1;
(statearr_38812_38864[(2)] = false);

(statearr_38812_38864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (26))){
var inst_38726 = (state_38766[(10)]);
var inst_38733 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38726);
var state_38766__$1 = state_38766;
var statearr_38813_38865 = state_38766__$1;
(statearr_38813_38865[(2)] = inst_38733);

(statearr_38813_38865[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (16))){
var state_38766__$1 = state_38766;
var statearr_38814_38866 = state_38766__$1;
(statearr_38814_38866[(2)] = true);

(statearr_38814_38866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (38))){
var inst_38756 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
var statearr_38815_38867 = state_38766__$1;
(statearr_38815_38867[(2)] = inst_38756);

(statearr_38815_38867[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (30))){
var inst_38718 = (state_38766[(13)]);
var inst_38726 = (state_38766[(10)]);
var inst_38717 = (state_38766[(11)]);
var inst_38743 = cljs.core.empty_QMARK_.call(null,inst_38717);
var inst_38744 = inst_38718.call(null,inst_38726);
var inst_38745 = cljs.core.not.call(null,inst_38744);
var inst_38746 = ((inst_38743) && (inst_38745));
var state_38766__$1 = state_38766;
var statearr_38816_38868 = state_38766__$1;
(statearr_38816_38868[(2)] = inst_38746);

(statearr_38816_38868[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (10))){
var inst_38668 = (state_38766[(8)]);
var inst_38689 = (state_38766[(2)]);
var inst_38690 = cljs.core.get.call(null,inst_38689,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38691 = cljs.core.get.call(null,inst_38689,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38692 = cljs.core.get.call(null,inst_38689,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38693 = inst_38668;
var state_38766__$1 = (function (){var statearr_38817 = state_38766;
(statearr_38817[(16)] = inst_38692);

(statearr_38817[(17)] = inst_38690);

(statearr_38817[(7)] = inst_38693);

(statearr_38817[(18)] = inst_38691);

return statearr_38817;
})();
var statearr_38818_38869 = state_38766__$1;
(statearr_38818_38869[(2)] = null);

(statearr_38818_38869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (18))){
var inst_38708 = (state_38766[(2)]);
var state_38766__$1 = state_38766;
var statearr_38819_38870 = state_38766__$1;
(statearr_38819_38870[(2)] = inst_38708);

(statearr_38819_38870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (37))){
var state_38766__$1 = state_38766;
var statearr_38820_38871 = state_38766__$1;
(statearr_38820_38871[(2)] = null);

(statearr_38820_38871[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38767 === (8))){
var inst_38668 = (state_38766[(8)]);
var inst_38686 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38668);
var state_38766__$1 = state_38766;
var statearr_38821_38872 = state_38766__$1;
(statearr_38821_38872[(2)] = inst_38686);

(statearr_38821_38872[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__34263__auto__ = null;
var cljs$core$async$mix_$_state_machine__34263__auto____0 = (function (){
var statearr_38822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38822[(0)] = cljs$core$async$mix_$_state_machine__34263__auto__);

(statearr_38822[(1)] = (1));

return statearr_38822;
});
var cljs$core$async$mix_$_state_machine__34263__auto____1 = (function (state_38766){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_38766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e38823){if((e38823 instanceof Object)){
var ex__34266__auto__ = e38823;
var statearr_38824_38873 = state_38766;
(statearr_38824_38873[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38874 = state_38766;
state_38766 = G__38874;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34263__auto__ = function(state_38766){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34263__auto____1.call(this,state_38766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34263__auto____0;
cljs$core$async$mix_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34263__auto____1;
return cljs$core$async$mix_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_38825 = f__34286__auto__.call(null);
(statearr_38825[(6)] = c__34285__auto___38826);

return statearr_38825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38876 = arguments.length;
switch (G__38876) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38880 = arguments.length;
switch (G__38880) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__38878_SHARP_){
if(cljs.core.truth_(p1__38878_SHARP_.call(null,topic))){
return p1__38878_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38878_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38881 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38882){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38882 = meta38882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38883,meta38882__$1){
var self__ = this;
var _38883__$1 = this;
return (new cljs.core.async.t_cljs$core$async38881(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38882__$1));
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38883){
var self__ = this;
var _38883__$1 = this;
return self__.meta38882;
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38881.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38882","meta38882",119064182,null)], null);
}));

(cljs.core.async.t_cljs$core$async38881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38881");

(cljs.core.async.t_cljs$core$async38881.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async38881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38881.
 */
cljs.core.async.__GT_t_cljs$core$async38881 = (function cljs$core$async$__GT_t_cljs$core$async38881(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38882){
return (new cljs.core.async.t_cljs$core$async38881(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38882));
});

}

return (new cljs.core.async.t_cljs$core$async38881(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34285__auto___39001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_38955){
var state_val_38956 = (state_38955[(1)]);
if((state_val_38956 === (7))){
var inst_38951 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38957_39002 = state_38955__$1;
(statearr_38957_39002[(2)] = inst_38951);

(statearr_38957_39002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (20))){
var state_38955__$1 = state_38955;
var statearr_38958_39003 = state_38955__$1;
(statearr_38958_39003[(2)] = null);

(statearr_38958_39003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (1))){
var state_38955__$1 = state_38955;
var statearr_38959_39004 = state_38955__$1;
(statearr_38959_39004[(2)] = null);

(statearr_38959_39004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (24))){
var inst_38934 = (state_38955[(7)]);
var inst_38943 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38934);
var state_38955__$1 = state_38955;
var statearr_38960_39005 = state_38955__$1;
(statearr_38960_39005[(2)] = inst_38943);

(statearr_38960_39005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (4))){
var inst_38886 = (state_38955[(8)]);
var inst_38886__$1 = (state_38955[(2)]);
var inst_38887 = (inst_38886__$1 == null);
var state_38955__$1 = (function (){var statearr_38961 = state_38955;
(statearr_38961[(8)] = inst_38886__$1);

return statearr_38961;
})();
if(cljs.core.truth_(inst_38887)){
var statearr_38962_39006 = state_38955__$1;
(statearr_38962_39006[(1)] = (5));

} else {
var statearr_38963_39007 = state_38955__$1;
(statearr_38963_39007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (15))){
var inst_38928 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38964_39008 = state_38955__$1;
(statearr_38964_39008[(2)] = inst_38928);

(statearr_38964_39008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (21))){
var inst_38948 = (state_38955[(2)]);
var state_38955__$1 = (function (){var statearr_38965 = state_38955;
(statearr_38965[(9)] = inst_38948);

return statearr_38965;
})();
var statearr_38966_39009 = state_38955__$1;
(statearr_38966_39009[(2)] = null);

(statearr_38966_39009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (13))){
var inst_38910 = (state_38955[(10)]);
var inst_38912 = cljs.core.chunked_seq_QMARK_.call(null,inst_38910);
var state_38955__$1 = state_38955;
if(inst_38912){
var statearr_38967_39010 = state_38955__$1;
(statearr_38967_39010[(1)] = (16));

} else {
var statearr_38968_39011 = state_38955__$1;
(statearr_38968_39011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (22))){
var inst_38940 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
if(cljs.core.truth_(inst_38940)){
var statearr_38969_39012 = state_38955__$1;
(statearr_38969_39012[(1)] = (23));

} else {
var statearr_38970_39013 = state_38955__$1;
(statearr_38970_39013[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (6))){
var inst_38936 = (state_38955[(11)]);
var inst_38886 = (state_38955[(8)]);
var inst_38934 = (state_38955[(7)]);
var inst_38934__$1 = topic_fn.call(null,inst_38886);
var inst_38935 = cljs.core.deref.call(null,mults);
var inst_38936__$1 = cljs.core.get.call(null,inst_38935,inst_38934__$1);
var state_38955__$1 = (function (){var statearr_38971 = state_38955;
(statearr_38971[(11)] = inst_38936__$1);

(statearr_38971[(7)] = inst_38934__$1);

return statearr_38971;
})();
if(cljs.core.truth_(inst_38936__$1)){
var statearr_38972_39014 = state_38955__$1;
(statearr_38972_39014[(1)] = (19));

} else {
var statearr_38973_39015 = state_38955__$1;
(statearr_38973_39015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (25))){
var inst_38945 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38974_39016 = state_38955__$1;
(statearr_38974_39016[(2)] = inst_38945);

(statearr_38974_39016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (17))){
var inst_38910 = (state_38955[(10)]);
var inst_38919 = cljs.core.first.call(null,inst_38910);
var inst_38920 = cljs.core.async.muxch_STAR_.call(null,inst_38919);
var inst_38921 = cljs.core.async.close_BANG_.call(null,inst_38920);
var inst_38922 = cljs.core.next.call(null,inst_38910);
var inst_38896 = inst_38922;
var inst_38897 = null;
var inst_38898 = (0);
var inst_38899 = (0);
var state_38955__$1 = (function (){var statearr_38975 = state_38955;
(statearr_38975[(12)] = inst_38897);

(statearr_38975[(13)] = inst_38898);

(statearr_38975[(14)] = inst_38899);

(statearr_38975[(15)] = inst_38896);

(statearr_38975[(16)] = inst_38921);

return statearr_38975;
})();
var statearr_38976_39017 = state_38955__$1;
(statearr_38976_39017[(2)] = null);

(statearr_38976_39017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (3))){
var inst_38953 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38955__$1,inst_38953);
} else {
if((state_val_38956 === (12))){
var inst_38930 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38977_39018 = state_38955__$1;
(statearr_38977_39018[(2)] = inst_38930);

(statearr_38977_39018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (2))){
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38955__$1,(4),ch);
} else {
if((state_val_38956 === (23))){
var state_38955__$1 = state_38955;
var statearr_38978_39019 = state_38955__$1;
(statearr_38978_39019[(2)] = null);

(statearr_38978_39019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (19))){
var inst_38936 = (state_38955[(11)]);
var inst_38886 = (state_38955[(8)]);
var inst_38938 = cljs.core.async.muxch_STAR_.call(null,inst_38936);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38955__$1,(22),inst_38938,inst_38886);
} else {
if((state_val_38956 === (11))){
var inst_38910 = (state_38955[(10)]);
var inst_38896 = (state_38955[(15)]);
var inst_38910__$1 = cljs.core.seq.call(null,inst_38896);
var state_38955__$1 = (function (){var statearr_38979 = state_38955;
(statearr_38979[(10)] = inst_38910__$1);

return statearr_38979;
})();
if(inst_38910__$1){
var statearr_38980_39020 = state_38955__$1;
(statearr_38980_39020[(1)] = (13));

} else {
var statearr_38981_39021 = state_38955__$1;
(statearr_38981_39021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (9))){
var inst_38932 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38982_39022 = state_38955__$1;
(statearr_38982_39022[(2)] = inst_38932);

(statearr_38982_39022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (5))){
var inst_38893 = cljs.core.deref.call(null,mults);
var inst_38894 = cljs.core.vals.call(null,inst_38893);
var inst_38895 = cljs.core.seq.call(null,inst_38894);
var inst_38896 = inst_38895;
var inst_38897 = null;
var inst_38898 = (0);
var inst_38899 = (0);
var state_38955__$1 = (function (){var statearr_38983 = state_38955;
(statearr_38983[(12)] = inst_38897);

(statearr_38983[(13)] = inst_38898);

(statearr_38983[(14)] = inst_38899);

(statearr_38983[(15)] = inst_38896);

return statearr_38983;
})();
var statearr_38984_39023 = state_38955__$1;
(statearr_38984_39023[(2)] = null);

(statearr_38984_39023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (14))){
var state_38955__$1 = state_38955;
var statearr_38988_39024 = state_38955__$1;
(statearr_38988_39024[(2)] = null);

(statearr_38988_39024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (16))){
var inst_38910 = (state_38955[(10)]);
var inst_38914 = cljs.core.chunk_first.call(null,inst_38910);
var inst_38915 = cljs.core.chunk_rest.call(null,inst_38910);
var inst_38916 = cljs.core.count.call(null,inst_38914);
var inst_38896 = inst_38915;
var inst_38897 = inst_38914;
var inst_38898 = inst_38916;
var inst_38899 = (0);
var state_38955__$1 = (function (){var statearr_38989 = state_38955;
(statearr_38989[(12)] = inst_38897);

(statearr_38989[(13)] = inst_38898);

(statearr_38989[(14)] = inst_38899);

(statearr_38989[(15)] = inst_38896);

return statearr_38989;
})();
var statearr_38990_39025 = state_38955__$1;
(statearr_38990_39025[(2)] = null);

(statearr_38990_39025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (10))){
var inst_38897 = (state_38955[(12)]);
var inst_38898 = (state_38955[(13)]);
var inst_38899 = (state_38955[(14)]);
var inst_38896 = (state_38955[(15)]);
var inst_38904 = cljs.core._nth.call(null,inst_38897,inst_38899);
var inst_38905 = cljs.core.async.muxch_STAR_.call(null,inst_38904);
var inst_38906 = cljs.core.async.close_BANG_.call(null,inst_38905);
var inst_38907 = (inst_38899 + (1));
var tmp38985 = inst_38897;
var tmp38986 = inst_38898;
var tmp38987 = inst_38896;
var inst_38896__$1 = tmp38987;
var inst_38897__$1 = tmp38985;
var inst_38898__$1 = tmp38986;
var inst_38899__$1 = inst_38907;
var state_38955__$1 = (function (){var statearr_38991 = state_38955;
(statearr_38991[(12)] = inst_38897__$1);

(statearr_38991[(13)] = inst_38898__$1);

(statearr_38991[(17)] = inst_38906);

(statearr_38991[(14)] = inst_38899__$1);

(statearr_38991[(15)] = inst_38896__$1);

return statearr_38991;
})();
var statearr_38992_39026 = state_38955__$1;
(statearr_38992_39026[(2)] = null);

(statearr_38992_39026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (18))){
var inst_38925 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38993_39027 = state_38955__$1;
(statearr_38993_39027[(2)] = inst_38925);

(statearr_38993_39027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (8))){
var inst_38898 = (state_38955[(13)]);
var inst_38899 = (state_38955[(14)]);
var inst_38901 = (inst_38899 < inst_38898);
var inst_38902 = inst_38901;
var state_38955__$1 = state_38955;
if(cljs.core.truth_(inst_38902)){
var statearr_38994_39028 = state_38955__$1;
(statearr_38994_39028[(1)] = (10));

} else {
var statearr_38995_39029 = state_38955__$1;
(statearr_38995_39029[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_38996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38996[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_38996[(1)] = (1));

return statearr_38996;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_38955){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_38955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e38997){if((e38997 instanceof Object)){
var ex__34266__auto__ = e38997;
var statearr_38998_39030 = state_38955;
(statearr_38998_39030[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39031 = state_38955;
state_38955 = G__39031;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_38955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_38955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_38999 = f__34286__auto__.call(null);
(statearr_38999[(6)] = c__34285__auto___39001);

return statearr_38999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39033 = arguments.length;
switch (G__39033) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39036 = arguments.length;
switch (G__39036) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39039 = arguments.length;
switch (G__39039) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__34285__auto___39106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_39078){
var state_val_39079 = (state_39078[(1)]);
if((state_val_39079 === (7))){
var state_39078__$1 = state_39078;
var statearr_39080_39107 = state_39078__$1;
(statearr_39080_39107[(2)] = null);

(statearr_39080_39107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (1))){
var state_39078__$1 = state_39078;
var statearr_39081_39108 = state_39078__$1;
(statearr_39081_39108[(2)] = null);

(statearr_39081_39108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (4))){
var inst_39042 = (state_39078[(7)]);
var inst_39044 = (inst_39042 < cnt);
var state_39078__$1 = state_39078;
if(cljs.core.truth_(inst_39044)){
var statearr_39082_39109 = state_39078__$1;
(statearr_39082_39109[(1)] = (6));

} else {
var statearr_39083_39110 = state_39078__$1;
(statearr_39083_39110[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (15))){
var inst_39074 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39084_39111 = state_39078__$1;
(statearr_39084_39111[(2)] = inst_39074);

(statearr_39084_39111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (13))){
var inst_39067 = cljs.core.async.close_BANG_.call(null,out);
var state_39078__$1 = state_39078;
var statearr_39085_39112 = state_39078__$1;
(statearr_39085_39112[(2)] = inst_39067);

(statearr_39085_39112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (6))){
var state_39078__$1 = state_39078;
var statearr_39086_39113 = state_39078__$1;
(statearr_39086_39113[(2)] = null);

(statearr_39086_39113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (3))){
var inst_39076 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39078__$1,inst_39076);
} else {
if((state_val_39079 === (12))){
var inst_39064 = (state_39078[(8)]);
var inst_39064__$1 = (state_39078[(2)]);
var inst_39065 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39064__$1);
var state_39078__$1 = (function (){var statearr_39087 = state_39078;
(statearr_39087[(8)] = inst_39064__$1);

return statearr_39087;
})();
if(cljs.core.truth_(inst_39065)){
var statearr_39088_39114 = state_39078__$1;
(statearr_39088_39114[(1)] = (13));

} else {
var statearr_39089_39115 = state_39078__$1;
(statearr_39089_39115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (2))){
var inst_39041 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39042 = (0);
var state_39078__$1 = (function (){var statearr_39090 = state_39078;
(statearr_39090[(9)] = inst_39041);

(statearr_39090[(7)] = inst_39042);

return statearr_39090;
})();
var statearr_39091_39116 = state_39078__$1;
(statearr_39091_39116[(2)] = null);

(statearr_39091_39116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (11))){
var inst_39042 = (state_39078[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39078,(10),Object,null,(9));
var inst_39051 = chs__$1.call(null,inst_39042);
var inst_39052 = done.call(null,inst_39042);
var inst_39053 = cljs.core.async.take_BANG_.call(null,inst_39051,inst_39052);
var state_39078__$1 = state_39078;
var statearr_39092_39117 = state_39078__$1;
(statearr_39092_39117[(2)] = inst_39053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (9))){
var inst_39042 = (state_39078[(7)]);
var inst_39055 = (state_39078[(2)]);
var inst_39056 = (inst_39042 + (1));
var inst_39042__$1 = inst_39056;
var state_39078__$1 = (function (){var statearr_39093 = state_39078;
(statearr_39093[(10)] = inst_39055);

(statearr_39093[(7)] = inst_39042__$1);

return statearr_39093;
})();
var statearr_39094_39118 = state_39078__$1;
(statearr_39094_39118[(2)] = null);

(statearr_39094_39118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (5))){
var inst_39062 = (state_39078[(2)]);
var state_39078__$1 = (function (){var statearr_39095 = state_39078;
(statearr_39095[(11)] = inst_39062);

return statearr_39095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39078__$1,(12),dchan);
} else {
if((state_val_39079 === (14))){
var inst_39064 = (state_39078[(8)]);
var inst_39069 = cljs.core.apply.call(null,f,inst_39064);
var state_39078__$1 = state_39078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39078__$1,(16),out,inst_39069);
} else {
if((state_val_39079 === (16))){
var inst_39071 = (state_39078[(2)]);
var state_39078__$1 = (function (){var statearr_39096 = state_39078;
(statearr_39096[(12)] = inst_39071);

return statearr_39096;
})();
var statearr_39097_39119 = state_39078__$1;
(statearr_39097_39119[(2)] = null);

(statearr_39097_39119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (10))){
var inst_39046 = (state_39078[(2)]);
var inst_39047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39078__$1 = (function (){var statearr_39098 = state_39078;
(statearr_39098[(13)] = inst_39046);

return statearr_39098;
})();
var statearr_39099_39120 = state_39078__$1;
(statearr_39099_39120[(2)] = inst_39047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39079 === (8))){
var inst_39060 = (state_39078[(2)]);
var state_39078__$1 = state_39078;
var statearr_39100_39121 = state_39078__$1;
(statearr_39100_39121[(2)] = inst_39060);

(statearr_39100_39121[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_39101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39101[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_39101[(1)] = (1));

return statearr_39101;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_39078){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_39078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e39102){if((e39102 instanceof Object)){
var ex__34266__auto__ = e39102;
var statearr_39103_39122 = state_39078;
(statearr_39103_39122[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39123 = state_39078;
state_39078 = G__39123;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_39078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_39078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_39104 = f__34286__auto__.call(null);
(statearr_39104[(6)] = c__34285__auto___39106);

return statearr_39104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39126 = arguments.length;
switch (G__39126) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34285__auto___39180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_39158){
var state_val_39159 = (state_39158[(1)]);
if((state_val_39159 === (7))){
var inst_39137 = (state_39158[(7)]);
var inst_39138 = (state_39158[(8)]);
var inst_39137__$1 = (state_39158[(2)]);
var inst_39138__$1 = cljs.core.nth.call(null,inst_39137__$1,(0),null);
var inst_39139 = cljs.core.nth.call(null,inst_39137__$1,(1),null);
var inst_39140 = (inst_39138__$1 == null);
var state_39158__$1 = (function (){var statearr_39160 = state_39158;
(statearr_39160[(9)] = inst_39139);

(statearr_39160[(7)] = inst_39137__$1);

(statearr_39160[(8)] = inst_39138__$1);

return statearr_39160;
})();
if(cljs.core.truth_(inst_39140)){
var statearr_39161_39181 = state_39158__$1;
(statearr_39161_39181[(1)] = (8));

} else {
var statearr_39162_39182 = state_39158__$1;
(statearr_39162_39182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (1))){
var inst_39127 = cljs.core.vec.call(null,chs);
var inst_39128 = inst_39127;
var state_39158__$1 = (function (){var statearr_39163 = state_39158;
(statearr_39163[(10)] = inst_39128);

return statearr_39163;
})();
var statearr_39164_39183 = state_39158__$1;
(statearr_39164_39183[(2)] = null);

(statearr_39164_39183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (4))){
var inst_39128 = (state_39158[(10)]);
var state_39158__$1 = state_39158;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39158__$1,(7),inst_39128);
} else {
if((state_val_39159 === (6))){
var inst_39154 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39165_39184 = state_39158__$1;
(statearr_39165_39184[(2)] = inst_39154);

(statearr_39165_39184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (3))){
var inst_39156 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39158__$1,inst_39156);
} else {
if((state_val_39159 === (2))){
var inst_39128 = (state_39158[(10)]);
var inst_39130 = cljs.core.count.call(null,inst_39128);
var inst_39131 = (inst_39130 > (0));
var state_39158__$1 = state_39158;
if(cljs.core.truth_(inst_39131)){
var statearr_39167_39185 = state_39158__$1;
(statearr_39167_39185[(1)] = (4));

} else {
var statearr_39168_39186 = state_39158__$1;
(statearr_39168_39186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (11))){
var inst_39128 = (state_39158[(10)]);
var inst_39147 = (state_39158[(2)]);
var tmp39166 = inst_39128;
var inst_39128__$1 = tmp39166;
var state_39158__$1 = (function (){var statearr_39169 = state_39158;
(statearr_39169[(10)] = inst_39128__$1);

(statearr_39169[(11)] = inst_39147);

return statearr_39169;
})();
var statearr_39170_39187 = state_39158__$1;
(statearr_39170_39187[(2)] = null);

(statearr_39170_39187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (9))){
var inst_39138 = (state_39158[(8)]);
var state_39158__$1 = state_39158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39158__$1,(11),out,inst_39138);
} else {
if((state_val_39159 === (5))){
var inst_39152 = cljs.core.async.close_BANG_.call(null,out);
var state_39158__$1 = state_39158;
var statearr_39171_39188 = state_39158__$1;
(statearr_39171_39188[(2)] = inst_39152);

(statearr_39171_39188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (10))){
var inst_39150 = (state_39158[(2)]);
var state_39158__$1 = state_39158;
var statearr_39172_39189 = state_39158__$1;
(statearr_39172_39189[(2)] = inst_39150);

(statearr_39172_39189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39159 === (8))){
var inst_39128 = (state_39158[(10)]);
var inst_39139 = (state_39158[(9)]);
var inst_39137 = (state_39158[(7)]);
var inst_39138 = (state_39158[(8)]);
var inst_39142 = (function (){var cs = inst_39128;
var vec__39133 = inst_39137;
var v = inst_39138;
var c = inst_39139;
return (function (p1__39124_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39124_SHARP_);
});
})();
var inst_39143 = cljs.core.filterv.call(null,inst_39142,inst_39128);
var inst_39128__$1 = inst_39143;
var state_39158__$1 = (function (){var statearr_39173 = state_39158;
(statearr_39173[(10)] = inst_39128__$1);

return statearr_39173;
})();
var statearr_39174_39190 = state_39158__$1;
(statearr_39174_39190[(2)] = null);

(statearr_39174_39190[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_39175 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39175[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_39175[(1)] = (1));

return statearr_39175;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_39158){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_39158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e39176){if((e39176 instanceof Object)){
var ex__34266__auto__ = e39176;
var statearr_39177_39191 = state_39158;
(statearr_39177_39191[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39192 = state_39158;
state_39158 = G__39192;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_39158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_39158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_39178 = f__34286__auto__.call(null);
(statearr_39178[(6)] = c__34285__auto___39180);

return statearr_39178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39194 = arguments.length;
switch (G__39194) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34285__auto___39239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_39218){
var state_val_39219 = (state_39218[(1)]);
if((state_val_39219 === (7))){
var inst_39200 = (state_39218[(7)]);
var inst_39200__$1 = (state_39218[(2)]);
var inst_39201 = (inst_39200__$1 == null);
var inst_39202 = cljs.core.not.call(null,inst_39201);
var state_39218__$1 = (function (){var statearr_39220 = state_39218;
(statearr_39220[(7)] = inst_39200__$1);

return statearr_39220;
})();
if(inst_39202){
var statearr_39221_39240 = state_39218__$1;
(statearr_39221_39240[(1)] = (8));

} else {
var statearr_39222_39241 = state_39218__$1;
(statearr_39222_39241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (1))){
var inst_39195 = (0);
var state_39218__$1 = (function (){var statearr_39223 = state_39218;
(statearr_39223[(8)] = inst_39195);

return statearr_39223;
})();
var statearr_39224_39242 = state_39218__$1;
(statearr_39224_39242[(2)] = null);

(statearr_39224_39242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (4))){
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39218__$1,(7),ch);
} else {
if((state_val_39219 === (6))){
var inst_39213 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39225_39243 = state_39218__$1;
(statearr_39225_39243[(2)] = inst_39213);

(statearr_39225_39243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (3))){
var inst_39215 = (state_39218[(2)]);
var inst_39216 = cljs.core.async.close_BANG_.call(null,out);
var state_39218__$1 = (function (){var statearr_39226 = state_39218;
(statearr_39226[(9)] = inst_39215);

return statearr_39226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39218__$1,inst_39216);
} else {
if((state_val_39219 === (2))){
var inst_39195 = (state_39218[(8)]);
var inst_39197 = (inst_39195 < n);
var state_39218__$1 = state_39218;
if(cljs.core.truth_(inst_39197)){
var statearr_39227_39244 = state_39218__$1;
(statearr_39227_39244[(1)] = (4));

} else {
var statearr_39228_39245 = state_39218__$1;
(statearr_39228_39245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (11))){
var inst_39195 = (state_39218[(8)]);
var inst_39205 = (state_39218[(2)]);
var inst_39206 = (inst_39195 + (1));
var inst_39195__$1 = inst_39206;
var state_39218__$1 = (function (){var statearr_39229 = state_39218;
(statearr_39229[(8)] = inst_39195__$1);

(statearr_39229[(10)] = inst_39205);

return statearr_39229;
})();
var statearr_39230_39246 = state_39218__$1;
(statearr_39230_39246[(2)] = null);

(statearr_39230_39246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (9))){
var state_39218__$1 = state_39218;
var statearr_39231_39247 = state_39218__$1;
(statearr_39231_39247[(2)] = null);

(statearr_39231_39247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (5))){
var state_39218__$1 = state_39218;
var statearr_39232_39248 = state_39218__$1;
(statearr_39232_39248[(2)] = null);

(statearr_39232_39248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (10))){
var inst_39210 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39233_39249 = state_39218__$1;
(statearr_39233_39249[(2)] = inst_39210);

(statearr_39233_39249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (8))){
var inst_39200 = (state_39218[(7)]);
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39218__$1,(11),out,inst_39200);
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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_39234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39234[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_39234[(1)] = (1));

return statearr_39234;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_39218){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_39218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e39235){if((e39235 instanceof Object)){
var ex__34266__auto__ = e39235;
var statearr_39236_39250 = state_39218;
(statearr_39236_39250[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39251 = state_39218;
state_39218 = G__39251;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_39218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_39218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_39237 = f__34286__auto__.call(null);
(statearr_39237[(6)] = c__34285__auto___39239);

return statearr_39237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39253 = (function (f,ch,meta39254){
this.f = f;
this.ch = ch;
this.meta39254 = meta39254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39255,meta39254__$1){
var self__ = this;
var _39255__$1 = this;
return (new cljs.core.async.t_cljs$core$async39253(self__.f,self__.ch,meta39254__$1));
}));

(cljs.core.async.t_cljs$core$async39253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39255){
var self__ = this;
var _39255__$1 = this;
return self__.meta39254;
}));

(cljs.core.async.t_cljs$core$async39253.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async39253.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async39253.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39256 = (function (f,ch,meta39254,_,fn1,meta39257){
this.f = f;
this.ch = ch;
this.meta39254 = meta39254;
this._ = _;
this.fn1 = fn1;
this.meta39257 = meta39257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39258,meta39257__$1){
var self__ = this;
var _39258__$1 = this;
return (new cljs.core.async.t_cljs$core$async39256(self__.f,self__.ch,self__.meta39254,self__._,self__.fn1,meta39257__$1));
}));

(cljs.core.async.t_cljs$core$async39256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39258){
var self__ = this;
var _39258__$1 = this;
return self__.meta39257;
}));

(cljs.core.async.t_cljs$core$async39256.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__39252_SHARP_){
return f1.call(null,(((p1__39252_SHARP_ == null))?null:self__.f.call(null,p1__39252_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async39256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39254","meta39254",-290692846,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39253","cljs.core.async/t_cljs$core$async39253",1054090609,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39257","meta39257",-852936120,null)], null);
}));

(cljs.core.async.t_cljs$core$async39256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39256");

(cljs.core.async.t_cljs$core$async39256.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async39256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39256.
 */
cljs.core.async.__GT_t_cljs$core$async39256 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39256(f__$1,ch__$1,meta39254__$1,___$2,fn1__$1,meta39257){
return (new cljs.core.async.t_cljs$core$async39256(f__$1,ch__$1,meta39254__$1,___$2,fn1__$1,meta39257));
});

}

return (new cljs.core.async.t_cljs$core$async39256(self__.f,self__.ch,self__.meta39254,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39253.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39254","meta39254",-290692846,null)], null);
}));

(cljs.core.async.t_cljs$core$async39253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39253");

(cljs.core.async.t_cljs$core$async39253.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async39253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39253.
 */
cljs.core.async.__GT_t_cljs$core$async39253 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39253(f__$1,ch__$1,meta39254){
return (new cljs.core.async.t_cljs$core$async39253(f__$1,ch__$1,meta39254));
});

}

return (new cljs.core.async.t_cljs$core$async39253(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39259 = (function (f,ch,meta39260){
this.f = f;
this.ch = ch;
this.meta39260 = meta39260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39261,meta39260__$1){
var self__ = this;
var _39261__$1 = this;
return (new cljs.core.async.t_cljs$core$async39259(self__.f,self__.ch,meta39260__$1));
}));

(cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39261){
var self__ = this;
var _39261__$1 = this;
return self__.meta39260;
}));

(cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async39259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39260","meta39260",645098583,null)], null);
}));

(cljs.core.async.t_cljs$core$async39259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39259");

(cljs.core.async.t_cljs$core$async39259.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async39259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39259.
 */
cljs.core.async.__GT_t_cljs$core$async39259 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39259(f__$1,ch__$1,meta39260){
return (new cljs.core.async.t_cljs$core$async39259(f__$1,ch__$1,meta39260));
});

}

return (new cljs.core.async.t_cljs$core$async39259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39262 = (function (p,ch,meta39263){
this.p = p;
this.ch = ch;
this.meta39263 = meta39263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39264,meta39263__$1){
var self__ = this;
var _39264__$1 = this;
return (new cljs.core.async.t_cljs$core$async39262(self__.p,self__.ch,meta39263__$1));
}));

(cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39264){
var self__ = this;
var _39264__$1 = this;
return self__.meta39263;
}));

(cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39263","meta39263",-1668992621,null)], null);
}));

(cljs.core.async.t_cljs$core$async39262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39262");

(cljs.core.async.t_cljs$core$async39262.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async39262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39262.
 */
cljs.core.async.__GT_t_cljs$core$async39262 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39262(p__$1,ch__$1,meta39263){
return (new cljs.core.async.t_cljs$core$async39262(p__$1,ch__$1,meta39263));
});

}

return (new cljs.core.async.t_cljs$core$async39262(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39266 = arguments.length;
switch (G__39266) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34285__auto___39306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_39287){
var state_val_39288 = (state_39287[(1)]);
if((state_val_39288 === (7))){
var inst_39283 = (state_39287[(2)]);
var state_39287__$1 = state_39287;
var statearr_39289_39307 = state_39287__$1;
(statearr_39289_39307[(2)] = inst_39283);

(statearr_39289_39307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39288 === (1))){
var state_39287__$1 = state_39287;
var statearr_39290_39308 = state_39287__$1;
(statearr_39290_39308[(2)] = null);

(statearr_39290_39308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39288 === (4))){
var inst_39269 = (state_39287[(7)]);
var inst_39269__$1 = (state_39287[(2)]);
var inst_39270 = (inst_39269__$1 == null);
var state_39287__$1 = (function (){var statearr_39291 = state_39287;
(statearr_39291[(7)] = inst_39269__$1);

return statearr_39291;
})();
if(cljs.core.truth_(inst_39270)){
var statearr_39292_39309 = state_39287__$1;
(statearr_39292_39309[(1)] = (5));

} else {
var statearr_39293_39310 = state_39287__$1;
(statearr_39293_39310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39288 === (6))){
var inst_39269 = (state_39287[(7)]);
var inst_39274 = p.call(null,inst_39269);
var state_39287__$1 = state_39287;
if(cljs.core.truth_(inst_39274)){
var statearr_39294_39311 = state_39287__$1;
(statearr_39294_39311[(1)] = (8));

} else {
var statearr_39295_39312 = state_39287__$1;
(statearr_39295_39312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39288 === (3))){
var inst_39285 = (state_39287[(2)]);
var state_39287__$1 = state_39287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39287__$1,inst_39285);
} else {
if((state_val_39288 === (2))){
var state_39287__$1 = state_39287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39287__$1,(4),ch);
} else {
if((state_val_39288 === (11))){
var inst_39277 = (state_39287[(2)]);
var state_39287__$1 = state_39287;
var statearr_39296_39313 = state_39287__$1;
(statearr_39296_39313[(2)] = inst_39277);

(statearr_39296_39313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39288 === (9))){
var state_39287__$1 = state_39287;
var statearr_39297_39314 = state_39287__$1;
(statearr_39297_39314[(2)] = null);

(statearr_39297_39314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39288 === (5))){
var inst_39272 = cljs.core.async.close_BANG_.call(null,out);
var state_39287__$1 = state_39287;
var statearr_39298_39315 = state_39287__$1;
(statearr_39298_39315[(2)] = inst_39272);

(statearr_39298_39315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39288 === (10))){
var inst_39280 = (state_39287[(2)]);
var state_39287__$1 = (function (){var statearr_39299 = state_39287;
(statearr_39299[(8)] = inst_39280);

return statearr_39299;
})();
var statearr_39300_39316 = state_39287__$1;
(statearr_39300_39316[(2)] = null);

(statearr_39300_39316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39288 === (8))){
var inst_39269 = (state_39287[(7)]);
var state_39287__$1 = state_39287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39287__$1,(11),out,inst_39269);
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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_39301 = [null,null,null,null,null,null,null,null,null];
(statearr_39301[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_39301[(1)] = (1));

return statearr_39301;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_39287){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_39287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e39302){if((e39302 instanceof Object)){
var ex__34266__auto__ = e39302;
var statearr_39303_39317 = state_39287;
(statearr_39303_39317[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39318 = state_39287;
state_39287 = G__39318;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_39287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_39287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_39304 = f__34286__auto__.call(null);
(statearr_39304[(6)] = c__34285__auto___39306);

return statearr_39304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39320 = arguments.length;
switch (G__39320) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_39383){
var state_val_39384 = (state_39383[(1)]);
if((state_val_39384 === (7))){
var inst_39379 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
var statearr_39385_39423 = state_39383__$1;
(statearr_39385_39423[(2)] = inst_39379);

(statearr_39385_39423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (20))){
var inst_39349 = (state_39383[(7)]);
var inst_39360 = (state_39383[(2)]);
var inst_39361 = cljs.core.next.call(null,inst_39349);
var inst_39335 = inst_39361;
var inst_39336 = null;
var inst_39337 = (0);
var inst_39338 = (0);
var state_39383__$1 = (function (){var statearr_39386 = state_39383;
(statearr_39386[(8)] = inst_39335);

(statearr_39386[(9)] = inst_39338);

(statearr_39386[(10)] = inst_39336);

(statearr_39386[(11)] = inst_39360);

(statearr_39386[(12)] = inst_39337);

return statearr_39386;
})();
var statearr_39387_39424 = state_39383__$1;
(statearr_39387_39424[(2)] = null);

(statearr_39387_39424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (1))){
var state_39383__$1 = state_39383;
var statearr_39388_39425 = state_39383__$1;
(statearr_39388_39425[(2)] = null);

(statearr_39388_39425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (4))){
var inst_39324 = (state_39383[(13)]);
var inst_39324__$1 = (state_39383[(2)]);
var inst_39325 = (inst_39324__$1 == null);
var state_39383__$1 = (function (){var statearr_39389 = state_39383;
(statearr_39389[(13)] = inst_39324__$1);

return statearr_39389;
})();
if(cljs.core.truth_(inst_39325)){
var statearr_39390_39426 = state_39383__$1;
(statearr_39390_39426[(1)] = (5));

} else {
var statearr_39391_39427 = state_39383__$1;
(statearr_39391_39427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (15))){
var state_39383__$1 = state_39383;
var statearr_39395_39428 = state_39383__$1;
(statearr_39395_39428[(2)] = null);

(statearr_39395_39428[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (21))){
var state_39383__$1 = state_39383;
var statearr_39396_39429 = state_39383__$1;
(statearr_39396_39429[(2)] = null);

(statearr_39396_39429[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (13))){
var inst_39335 = (state_39383[(8)]);
var inst_39338 = (state_39383[(9)]);
var inst_39336 = (state_39383[(10)]);
var inst_39337 = (state_39383[(12)]);
var inst_39345 = (state_39383[(2)]);
var inst_39346 = (inst_39338 + (1));
var tmp39392 = inst_39335;
var tmp39393 = inst_39336;
var tmp39394 = inst_39337;
var inst_39335__$1 = tmp39392;
var inst_39336__$1 = tmp39393;
var inst_39337__$1 = tmp39394;
var inst_39338__$1 = inst_39346;
var state_39383__$1 = (function (){var statearr_39397 = state_39383;
(statearr_39397[(8)] = inst_39335__$1);

(statearr_39397[(9)] = inst_39338__$1);

(statearr_39397[(14)] = inst_39345);

(statearr_39397[(10)] = inst_39336__$1);

(statearr_39397[(12)] = inst_39337__$1);

return statearr_39397;
})();
var statearr_39398_39430 = state_39383__$1;
(statearr_39398_39430[(2)] = null);

(statearr_39398_39430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (22))){
var state_39383__$1 = state_39383;
var statearr_39399_39431 = state_39383__$1;
(statearr_39399_39431[(2)] = null);

(statearr_39399_39431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (6))){
var inst_39324 = (state_39383[(13)]);
var inst_39333 = f.call(null,inst_39324);
var inst_39334 = cljs.core.seq.call(null,inst_39333);
var inst_39335 = inst_39334;
var inst_39336 = null;
var inst_39337 = (0);
var inst_39338 = (0);
var state_39383__$1 = (function (){var statearr_39400 = state_39383;
(statearr_39400[(8)] = inst_39335);

(statearr_39400[(9)] = inst_39338);

(statearr_39400[(10)] = inst_39336);

(statearr_39400[(12)] = inst_39337);

return statearr_39400;
})();
var statearr_39401_39432 = state_39383__$1;
(statearr_39401_39432[(2)] = null);

(statearr_39401_39432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (17))){
var inst_39349 = (state_39383[(7)]);
var inst_39353 = cljs.core.chunk_first.call(null,inst_39349);
var inst_39354 = cljs.core.chunk_rest.call(null,inst_39349);
var inst_39355 = cljs.core.count.call(null,inst_39353);
var inst_39335 = inst_39354;
var inst_39336 = inst_39353;
var inst_39337 = inst_39355;
var inst_39338 = (0);
var state_39383__$1 = (function (){var statearr_39402 = state_39383;
(statearr_39402[(8)] = inst_39335);

(statearr_39402[(9)] = inst_39338);

(statearr_39402[(10)] = inst_39336);

(statearr_39402[(12)] = inst_39337);

return statearr_39402;
})();
var statearr_39403_39433 = state_39383__$1;
(statearr_39403_39433[(2)] = null);

(statearr_39403_39433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (3))){
var inst_39381 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39383__$1,inst_39381);
} else {
if((state_val_39384 === (12))){
var inst_39369 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
var statearr_39404_39434 = state_39383__$1;
(statearr_39404_39434[(2)] = inst_39369);

(statearr_39404_39434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (2))){
var state_39383__$1 = state_39383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39383__$1,(4),in$);
} else {
if((state_val_39384 === (23))){
var inst_39377 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
var statearr_39405_39435 = state_39383__$1;
(statearr_39405_39435[(2)] = inst_39377);

(statearr_39405_39435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (19))){
var inst_39364 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
var statearr_39406_39436 = state_39383__$1;
(statearr_39406_39436[(2)] = inst_39364);

(statearr_39406_39436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (11))){
var inst_39335 = (state_39383[(8)]);
var inst_39349 = (state_39383[(7)]);
var inst_39349__$1 = cljs.core.seq.call(null,inst_39335);
var state_39383__$1 = (function (){var statearr_39407 = state_39383;
(statearr_39407[(7)] = inst_39349__$1);

return statearr_39407;
})();
if(inst_39349__$1){
var statearr_39408_39437 = state_39383__$1;
(statearr_39408_39437[(1)] = (14));

} else {
var statearr_39409_39438 = state_39383__$1;
(statearr_39409_39438[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (9))){
var inst_39371 = (state_39383[(2)]);
var inst_39372 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39383__$1 = (function (){var statearr_39410 = state_39383;
(statearr_39410[(15)] = inst_39371);

return statearr_39410;
})();
if(cljs.core.truth_(inst_39372)){
var statearr_39411_39439 = state_39383__$1;
(statearr_39411_39439[(1)] = (21));

} else {
var statearr_39412_39440 = state_39383__$1;
(statearr_39412_39440[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (5))){
var inst_39327 = cljs.core.async.close_BANG_.call(null,out);
var state_39383__$1 = state_39383;
var statearr_39413_39441 = state_39383__$1;
(statearr_39413_39441[(2)] = inst_39327);

(statearr_39413_39441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (14))){
var inst_39349 = (state_39383[(7)]);
var inst_39351 = cljs.core.chunked_seq_QMARK_.call(null,inst_39349);
var state_39383__$1 = state_39383;
if(inst_39351){
var statearr_39414_39442 = state_39383__$1;
(statearr_39414_39442[(1)] = (17));

} else {
var statearr_39415_39443 = state_39383__$1;
(statearr_39415_39443[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (16))){
var inst_39367 = (state_39383[(2)]);
var state_39383__$1 = state_39383;
var statearr_39416_39444 = state_39383__$1;
(statearr_39416_39444[(2)] = inst_39367);

(statearr_39416_39444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39384 === (10))){
var inst_39338 = (state_39383[(9)]);
var inst_39336 = (state_39383[(10)]);
var inst_39343 = cljs.core._nth.call(null,inst_39336,inst_39338);
var state_39383__$1 = state_39383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39383__$1,(13),out,inst_39343);
} else {
if((state_val_39384 === (18))){
var inst_39349 = (state_39383[(7)]);
var inst_39358 = cljs.core.first.call(null,inst_39349);
var state_39383__$1 = state_39383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39383__$1,(20),out,inst_39358);
} else {
if((state_val_39384 === (8))){
var inst_39338 = (state_39383[(9)]);
var inst_39337 = (state_39383[(12)]);
var inst_39340 = (inst_39338 < inst_39337);
var inst_39341 = inst_39340;
var state_39383__$1 = state_39383;
if(cljs.core.truth_(inst_39341)){
var statearr_39417_39445 = state_39383__$1;
(statearr_39417_39445[(1)] = (10));

} else {
var statearr_39418_39446 = state_39383__$1;
(statearr_39418_39446[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34263__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34263__auto____0 = (function (){
var statearr_39419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39419[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34263__auto__);

(statearr_39419[(1)] = (1));

return statearr_39419;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34263__auto____1 = (function (state_39383){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_39383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e39420){if((e39420 instanceof Object)){
var ex__34266__auto__ = e39420;
var statearr_39421_39447 = state_39383;
(statearr_39421_39447[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39448 = state_39383;
state_39383 = G__39448;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34263__auto__ = function(state_39383){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34263__auto____1.call(this,state_39383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34263__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34263__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_39422 = f__34286__auto__.call(null);
(statearr_39422[(6)] = c__34285__auto__);

return statearr_39422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39450 = arguments.length;
switch (G__39450) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39453 = arguments.length;
switch (G__39453) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39456 = arguments.length;
switch (G__39456) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34285__auto___39503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_39480){
var state_val_39481 = (state_39480[(1)]);
if((state_val_39481 === (7))){
var inst_39475 = (state_39480[(2)]);
var state_39480__$1 = state_39480;
var statearr_39482_39504 = state_39480__$1;
(statearr_39482_39504[(2)] = inst_39475);

(statearr_39482_39504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (1))){
var inst_39457 = null;
var state_39480__$1 = (function (){var statearr_39483 = state_39480;
(statearr_39483[(7)] = inst_39457);

return statearr_39483;
})();
var statearr_39484_39505 = state_39480__$1;
(statearr_39484_39505[(2)] = null);

(statearr_39484_39505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (4))){
var inst_39460 = (state_39480[(8)]);
var inst_39460__$1 = (state_39480[(2)]);
var inst_39461 = (inst_39460__$1 == null);
var inst_39462 = cljs.core.not.call(null,inst_39461);
var state_39480__$1 = (function (){var statearr_39485 = state_39480;
(statearr_39485[(8)] = inst_39460__$1);

return statearr_39485;
})();
if(inst_39462){
var statearr_39486_39506 = state_39480__$1;
(statearr_39486_39506[(1)] = (5));

} else {
var statearr_39487_39507 = state_39480__$1;
(statearr_39487_39507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (6))){
var state_39480__$1 = state_39480;
var statearr_39488_39508 = state_39480__$1;
(statearr_39488_39508[(2)] = null);

(statearr_39488_39508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (3))){
var inst_39477 = (state_39480[(2)]);
var inst_39478 = cljs.core.async.close_BANG_.call(null,out);
var state_39480__$1 = (function (){var statearr_39489 = state_39480;
(statearr_39489[(9)] = inst_39477);

return statearr_39489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39480__$1,inst_39478);
} else {
if((state_val_39481 === (2))){
var state_39480__$1 = state_39480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39480__$1,(4),ch);
} else {
if((state_val_39481 === (11))){
var inst_39460 = (state_39480[(8)]);
var inst_39469 = (state_39480[(2)]);
var inst_39457 = inst_39460;
var state_39480__$1 = (function (){var statearr_39490 = state_39480;
(statearr_39490[(7)] = inst_39457);

(statearr_39490[(10)] = inst_39469);

return statearr_39490;
})();
var statearr_39491_39509 = state_39480__$1;
(statearr_39491_39509[(2)] = null);

(statearr_39491_39509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (9))){
var inst_39460 = (state_39480[(8)]);
var state_39480__$1 = state_39480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39480__$1,(11),out,inst_39460);
} else {
if((state_val_39481 === (5))){
var inst_39457 = (state_39480[(7)]);
var inst_39460 = (state_39480[(8)]);
var inst_39464 = cljs.core._EQ_.call(null,inst_39460,inst_39457);
var state_39480__$1 = state_39480;
if(inst_39464){
var statearr_39493_39510 = state_39480__$1;
(statearr_39493_39510[(1)] = (8));

} else {
var statearr_39494_39511 = state_39480__$1;
(statearr_39494_39511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (10))){
var inst_39472 = (state_39480[(2)]);
var state_39480__$1 = state_39480;
var statearr_39495_39512 = state_39480__$1;
(statearr_39495_39512[(2)] = inst_39472);

(statearr_39495_39512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (8))){
var inst_39457 = (state_39480[(7)]);
var tmp39492 = inst_39457;
var inst_39457__$1 = tmp39492;
var state_39480__$1 = (function (){var statearr_39496 = state_39480;
(statearr_39496[(7)] = inst_39457__$1);

return statearr_39496;
})();
var statearr_39497_39513 = state_39480__$1;
(statearr_39497_39513[(2)] = null);

(statearr_39497_39513[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_39498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39498[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_39498[(1)] = (1));

return statearr_39498;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_39480){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_39480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e39499){if((e39499 instanceof Object)){
var ex__34266__auto__ = e39499;
var statearr_39500_39514 = state_39480;
(statearr_39500_39514[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39515 = state_39480;
state_39480 = G__39515;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_39480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_39480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_39501 = f__34286__auto__.call(null);
(statearr_39501[(6)] = c__34285__auto___39503);

return statearr_39501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39517 = arguments.length;
switch (G__39517) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34285__auto___39583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_39555){
var state_val_39556 = (state_39555[(1)]);
if((state_val_39556 === (7))){
var inst_39551 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
var statearr_39557_39584 = state_39555__$1;
(statearr_39557_39584[(2)] = inst_39551);

(statearr_39557_39584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (1))){
var inst_39518 = (new Array(n));
var inst_39519 = inst_39518;
var inst_39520 = (0);
var state_39555__$1 = (function (){var statearr_39558 = state_39555;
(statearr_39558[(7)] = inst_39520);

(statearr_39558[(8)] = inst_39519);

return statearr_39558;
})();
var statearr_39559_39585 = state_39555__$1;
(statearr_39559_39585[(2)] = null);

(statearr_39559_39585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (4))){
var inst_39523 = (state_39555[(9)]);
var inst_39523__$1 = (state_39555[(2)]);
var inst_39524 = (inst_39523__$1 == null);
var inst_39525 = cljs.core.not.call(null,inst_39524);
var state_39555__$1 = (function (){var statearr_39560 = state_39555;
(statearr_39560[(9)] = inst_39523__$1);

return statearr_39560;
})();
if(inst_39525){
var statearr_39561_39586 = state_39555__$1;
(statearr_39561_39586[(1)] = (5));

} else {
var statearr_39562_39587 = state_39555__$1;
(statearr_39562_39587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (15))){
var inst_39545 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
var statearr_39563_39588 = state_39555__$1;
(statearr_39563_39588[(2)] = inst_39545);

(statearr_39563_39588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (13))){
var state_39555__$1 = state_39555;
var statearr_39564_39589 = state_39555__$1;
(statearr_39564_39589[(2)] = null);

(statearr_39564_39589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (6))){
var inst_39520 = (state_39555[(7)]);
var inst_39541 = (inst_39520 > (0));
var state_39555__$1 = state_39555;
if(cljs.core.truth_(inst_39541)){
var statearr_39565_39590 = state_39555__$1;
(statearr_39565_39590[(1)] = (12));

} else {
var statearr_39566_39591 = state_39555__$1;
(statearr_39566_39591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (3))){
var inst_39553 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39555__$1,inst_39553);
} else {
if((state_val_39556 === (12))){
var inst_39519 = (state_39555[(8)]);
var inst_39543 = cljs.core.vec.call(null,inst_39519);
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39555__$1,(15),out,inst_39543);
} else {
if((state_val_39556 === (2))){
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39555__$1,(4),ch);
} else {
if((state_val_39556 === (11))){
var inst_39535 = (state_39555[(2)]);
var inst_39536 = (new Array(n));
var inst_39519 = inst_39536;
var inst_39520 = (0);
var state_39555__$1 = (function (){var statearr_39567 = state_39555;
(statearr_39567[(7)] = inst_39520);

(statearr_39567[(8)] = inst_39519);

(statearr_39567[(10)] = inst_39535);

return statearr_39567;
})();
var statearr_39568_39592 = state_39555__$1;
(statearr_39568_39592[(2)] = null);

(statearr_39568_39592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (9))){
var inst_39519 = (state_39555[(8)]);
var inst_39533 = cljs.core.vec.call(null,inst_39519);
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39555__$1,(11),out,inst_39533);
} else {
if((state_val_39556 === (5))){
var inst_39520 = (state_39555[(7)]);
var inst_39523 = (state_39555[(9)]);
var inst_39519 = (state_39555[(8)]);
var inst_39528 = (state_39555[(11)]);
var inst_39527 = (inst_39519[inst_39520] = inst_39523);
var inst_39528__$1 = (inst_39520 + (1));
var inst_39529 = (inst_39528__$1 < n);
var state_39555__$1 = (function (){var statearr_39569 = state_39555;
(statearr_39569[(12)] = inst_39527);

(statearr_39569[(11)] = inst_39528__$1);

return statearr_39569;
})();
if(cljs.core.truth_(inst_39529)){
var statearr_39570_39593 = state_39555__$1;
(statearr_39570_39593[(1)] = (8));

} else {
var statearr_39571_39594 = state_39555__$1;
(statearr_39571_39594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (14))){
var inst_39548 = (state_39555[(2)]);
var inst_39549 = cljs.core.async.close_BANG_.call(null,out);
var state_39555__$1 = (function (){var statearr_39573 = state_39555;
(statearr_39573[(13)] = inst_39548);

return statearr_39573;
})();
var statearr_39574_39595 = state_39555__$1;
(statearr_39574_39595[(2)] = inst_39549);

(statearr_39574_39595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (10))){
var inst_39539 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
var statearr_39575_39596 = state_39555__$1;
(statearr_39575_39596[(2)] = inst_39539);

(statearr_39575_39596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (8))){
var inst_39519 = (state_39555[(8)]);
var inst_39528 = (state_39555[(11)]);
var tmp39572 = inst_39519;
var inst_39519__$1 = tmp39572;
var inst_39520 = inst_39528;
var state_39555__$1 = (function (){var statearr_39576 = state_39555;
(statearr_39576[(7)] = inst_39520);

(statearr_39576[(8)] = inst_39519__$1);

return statearr_39576;
})();
var statearr_39577_39597 = state_39555__$1;
(statearr_39577_39597[(2)] = null);

(statearr_39577_39597[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_39578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39578[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_39578[(1)] = (1));

return statearr_39578;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_39555){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_39555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e39579){if((e39579 instanceof Object)){
var ex__34266__auto__ = e39579;
var statearr_39580_39598 = state_39555;
(statearr_39580_39598[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39599 = state_39555;
state_39555 = G__39599;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_39555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_39555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_39581 = f__34286__auto__.call(null);
(statearr_39581[(6)] = c__34285__auto___39583);

return statearr_39581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39601 = arguments.length;
switch (G__39601) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34285__auto___39671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_39643){
var state_val_39644 = (state_39643[(1)]);
if((state_val_39644 === (7))){
var inst_39639 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39645_39672 = state_39643__$1;
(statearr_39645_39672[(2)] = inst_39639);

(statearr_39645_39672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (1))){
var inst_39602 = [];
var inst_39603 = inst_39602;
var inst_39604 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39643__$1 = (function (){var statearr_39646 = state_39643;
(statearr_39646[(7)] = inst_39603);

(statearr_39646[(8)] = inst_39604);

return statearr_39646;
})();
var statearr_39647_39673 = state_39643__$1;
(statearr_39647_39673[(2)] = null);

(statearr_39647_39673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (4))){
var inst_39607 = (state_39643[(9)]);
var inst_39607__$1 = (state_39643[(2)]);
var inst_39608 = (inst_39607__$1 == null);
var inst_39609 = cljs.core.not.call(null,inst_39608);
var state_39643__$1 = (function (){var statearr_39648 = state_39643;
(statearr_39648[(9)] = inst_39607__$1);

return statearr_39648;
})();
if(inst_39609){
var statearr_39649_39674 = state_39643__$1;
(statearr_39649_39674[(1)] = (5));

} else {
var statearr_39650_39675 = state_39643__$1;
(statearr_39650_39675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (15))){
var inst_39633 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39651_39676 = state_39643__$1;
(statearr_39651_39676[(2)] = inst_39633);

(statearr_39651_39676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (13))){
var state_39643__$1 = state_39643;
var statearr_39652_39677 = state_39643__$1;
(statearr_39652_39677[(2)] = null);

(statearr_39652_39677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (6))){
var inst_39603 = (state_39643[(7)]);
var inst_39628 = inst_39603.length;
var inst_39629 = (inst_39628 > (0));
var state_39643__$1 = state_39643;
if(cljs.core.truth_(inst_39629)){
var statearr_39653_39678 = state_39643__$1;
(statearr_39653_39678[(1)] = (12));

} else {
var statearr_39654_39679 = state_39643__$1;
(statearr_39654_39679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (3))){
var inst_39641 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39643__$1,inst_39641);
} else {
if((state_val_39644 === (12))){
var inst_39603 = (state_39643[(7)]);
var inst_39631 = cljs.core.vec.call(null,inst_39603);
var state_39643__$1 = state_39643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39643__$1,(15),out,inst_39631);
} else {
if((state_val_39644 === (2))){
var state_39643__$1 = state_39643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39643__$1,(4),ch);
} else {
if((state_val_39644 === (11))){
var inst_39611 = (state_39643[(10)]);
var inst_39607 = (state_39643[(9)]);
var inst_39621 = (state_39643[(2)]);
var inst_39622 = [];
var inst_39623 = inst_39622.push(inst_39607);
var inst_39603 = inst_39622;
var inst_39604 = inst_39611;
var state_39643__$1 = (function (){var statearr_39655 = state_39643;
(statearr_39655[(11)] = inst_39621);

(statearr_39655[(7)] = inst_39603);

(statearr_39655[(8)] = inst_39604);

(statearr_39655[(12)] = inst_39623);

return statearr_39655;
})();
var statearr_39656_39680 = state_39643__$1;
(statearr_39656_39680[(2)] = null);

(statearr_39656_39680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (9))){
var inst_39603 = (state_39643[(7)]);
var inst_39619 = cljs.core.vec.call(null,inst_39603);
var state_39643__$1 = state_39643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39643__$1,(11),out,inst_39619);
} else {
if((state_val_39644 === (5))){
var inst_39611 = (state_39643[(10)]);
var inst_39607 = (state_39643[(9)]);
var inst_39604 = (state_39643[(8)]);
var inst_39611__$1 = f.call(null,inst_39607);
var inst_39612 = cljs.core._EQ_.call(null,inst_39611__$1,inst_39604);
var inst_39613 = cljs.core.keyword_identical_QMARK_.call(null,inst_39604,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39614 = ((inst_39612) || (inst_39613));
var state_39643__$1 = (function (){var statearr_39657 = state_39643;
(statearr_39657[(10)] = inst_39611__$1);

return statearr_39657;
})();
if(cljs.core.truth_(inst_39614)){
var statearr_39658_39681 = state_39643__$1;
(statearr_39658_39681[(1)] = (8));

} else {
var statearr_39659_39682 = state_39643__$1;
(statearr_39659_39682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (14))){
var inst_39636 = (state_39643[(2)]);
var inst_39637 = cljs.core.async.close_BANG_.call(null,out);
var state_39643__$1 = (function (){var statearr_39661 = state_39643;
(statearr_39661[(13)] = inst_39636);

return statearr_39661;
})();
var statearr_39662_39683 = state_39643__$1;
(statearr_39662_39683[(2)] = inst_39637);

(statearr_39662_39683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (10))){
var inst_39626 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39663_39684 = state_39643__$1;
(statearr_39663_39684[(2)] = inst_39626);

(statearr_39663_39684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (8))){
var inst_39611 = (state_39643[(10)]);
var inst_39607 = (state_39643[(9)]);
var inst_39603 = (state_39643[(7)]);
var inst_39616 = inst_39603.push(inst_39607);
var tmp39660 = inst_39603;
var inst_39603__$1 = tmp39660;
var inst_39604 = inst_39611;
var state_39643__$1 = (function (){var statearr_39664 = state_39643;
(statearr_39664[(7)] = inst_39603__$1);

(statearr_39664[(8)] = inst_39604);

(statearr_39664[(14)] = inst_39616);

return statearr_39664;
})();
var statearr_39665_39685 = state_39643__$1;
(statearr_39665_39685[(2)] = null);

(statearr_39665_39685[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34263__auto__ = null;
var cljs$core$async$state_machine__34263__auto____0 = (function (){
var statearr_39666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39666[(0)] = cljs$core$async$state_machine__34263__auto__);

(statearr_39666[(1)] = (1));

return statearr_39666;
});
var cljs$core$async$state_machine__34263__auto____1 = (function (state_39643){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_39643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e39667){if((e39667 instanceof Object)){
var ex__34266__auto__ = e39667;
var statearr_39668_39686 = state_39643;
(statearr_39668_39686[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39687 = state_39643;
state_39643 = G__39687;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
cljs$core$async$state_machine__34263__auto__ = function(state_39643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34263__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34263__auto____1.call(this,state_39643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34263__auto____0;
cljs$core$async$state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34263__auto____1;
return cljs$core$async$state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_39669 = f__34286__auto__.call(null);
(statearr_39669[(6)] = c__34285__auto___39671);

return statearr_39669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1575922819410
