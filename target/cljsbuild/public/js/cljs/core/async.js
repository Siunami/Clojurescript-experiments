// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__7591 = arguments.length;
switch (G__7591) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7592 = (function (f,blockable,meta7593){
this.f = f;
this.blockable = blockable;
this.meta7593 = meta7593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async7592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7594,meta7593__$1){
var self__ = this;
var _7594__$1 = this;
return (new cljs.core.async.t_cljs$core$async7592(self__.f,self__.blockable,meta7593__$1));
}));

(cljs.core.async.t_cljs$core$async7592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7594){
var self__ = this;
var _7594__$1 = this;
return self__.meta7593;
}));

(cljs.core.async.t_cljs$core$async7592.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async7592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async7592.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async7592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async7592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta7593], null);
}));

(cljs.core.async.t_cljs$core$async7592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async7592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7592");

(cljs.core.async.t_cljs$core$async7592.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async7592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7592.
 */
cljs.core.async.__GT_t_cljs$core$async7592 = (function cljs$core$async$__GT_t_cljs$core$async7592(f__$1,blockable__$1,meta7593){
return (new cljs.core.async.t_cljs$core$async7592(f__$1,blockable__$1,meta7593));
});

}

return (new cljs.core.async.t_cljs$core$async7592(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__7598 = arguments.length;
switch (G__7598) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__7601 = arguments.length;
switch (G__7601) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__7604 = arguments.length;
switch (G__7604) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_7606 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7606) : fn1.call(null,val_7606));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_7606) : fn1.call(null,val_7606));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__7608 = arguments.length;
switch (G__7608) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___7610 = n;
var x_7611 = (0);
while(true){
if((x_7611 < n__4666__auto___7610)){
(a[x_7611] = (0));

var G__7612 = (x_7611 + (1));
x_7611 = G__7612;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__7613 = (i + (1));
i = G__7613;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7614 = (function (flag,meta7615){
this.flag = flag;
this.meta7615 = meta7615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async7614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7616,meta7615__$1){
var self__ = this;
var _7616__$1 = this;
return (new cljs.core.async.t_cljs$core$async7614(self__.flag,meta7615__$1));
}));

(cljs.core.async.t_cljs$core$async7614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7616){
var self__ = this;
var _7616__$1 = this;
return self__.meta7615;
}));

(cljs.core.async.t_cljs$core$async7614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async7614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async7614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async7614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async7614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta7615], null);
}));

(cljs.core.async.t_cljs$core$async7614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async7614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7614");

(cljs.core.async.t_cljs$core$async7614.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async7614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7614.
 */
cljs.core.async.__GT_t_cljs$core$async7614 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7614(flag__$1,meta7615){
return (new cljs.core.async.t_cljs$core$async7614(flag__$1,meta7615));
});

}

return (new cljs.core.async.t_cljs$core$async7614(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async7617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7617 = (function (flag,cb,meta7618){
this.flag = flag;
this.cb = cb;
this.meta7618 = meta7618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async7617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7619,meta7618__$1){
var self__ = this;
var _7619__$1 = this;
return (new cljs.core.async.t_cljs$core$async7617(self__.flag,self__.cb,meta7618__$1));
}));

(cljs.core.async.t_cljs$core$async7617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7619){
var self__ = this;
var _7619__$1 = this;
return self__.meta7618;
}));

(cljs.core.async.t_cljs$core$async7617.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async7617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async7617.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async7617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async7617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta7618], null);
}));

(cljs.core.async.t_cljs$core$async7617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async7617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7617");

(cljs.core.async.t_cljs$core$async7617.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async7617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7617.
 */
cljs.core.async.__GT_t_cljs$core$async7617 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7617(flag__$1,cb__$1,meta7618){
return (new cljs.core.async.t_cljs$core$async7617(flag__$1,cb__$1,meta7618));
});

}

return (new cljs.core.async.t_cljs$core$async7617(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7620_SHARP_){
var G__7622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7620_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7622) : fret.call(null,G__7622));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7621_SHARP_){
var G__7623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7621_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__7623) : fret.call(null,G__7623));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7624 = (i + (1));
i = G__7624;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4789__auto___7630 = arguments.length;
var i__4790__auto___7631 = (0);
while(true){
if((i__4790__auto___7631 < len__4789__auto___7630)){
args__4795__auto__.push((arguments[i__4790__auto___7631]));

var G__7632 = (i__4790__auto___7631 + (1));
i__4790__auto___7631 = G__7632;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7627){
var map__7628 = p__7627;
var map__7628__$1 = (((((!((map__7628 == null))))?(((((map__7628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7628):map__7628);
var opts = map__7628__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7625){
var G__7626 = cljs.core.first(seq7625);
var seq7625__$1 = cljs.core.next(seq7625);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7626,seq7625__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__7634 = arguments.length;
switch (G__7634) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7531__auto___7680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_7658){
var state_val_7659 = (state_7658[(1)]);
if((state_val_7659 === (7))){
var inst_7654 = (state_7658[(2)]);
var state_7658__$1 = state_7658;
var statearr_7660_7681 = state_7658__$1;
(statearr_7660_7681[(2)] = inst_7654);

(statearr_7660_7681[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (1))){
var state_7658__$1 = state_7658;
var statearr_7661_7682 = state_7658__$1;
(statearr_7661_7682[(2)] = null);

(statearr_7661_7682[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (4))){
var inst_7637 = (state_7658[(7)]);
var inst_7637__$1 = (state_7658[(2)]);
var inst_7638 = (inst_7637__$1 == null);
var state_7658__$1 = (function (){var statearr_7662 = state_7658;
(statearr_7662[(7)] = inst_7637__$1);

return statearr_7662;
})();
if(cljs.core.truth_(inst_7638)){
var statearr_7663_7683 = state_7658__$1;
(statearr_7663_7683[(1)] = (5));

} else {
var statearr_7664_7684 = state_7658__$1;
(statearr_7664_7684[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (13))){
var state_7658__$1 = state_7658;
var statearr_7665_7685 = state_7658__$1;
(statearr_7665_7685[(2)] = null);

(statearr_7665_7685[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (6))){
var inst_7637 = (state_7658[(7)]);
var state_7658__$1 = state_7658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7658__$1,(11),to,inst_7637);
} else {
if((state_val_7659 === (3))){
var inst_7656 = (state_7658[(2)]);
var state_7658__$1 = state_7658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7658__$1,inst_7656);
} else {
if((state_val_7659 === (12))){
var state_7658__$1 = state_7658;
var statearr_7666_7686 = state_7658__$1;
(statearr_7666_7686[(2)] = null);

(statearr_7666_7686[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (2))){
var state_7658__$1 = state_7658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7658__$1,(4),from);
} else {
if((state_val_7659 === (11))){
var inst_7647 = (state_7658[(2)]);
var state_7658__$1 = state_7658;
if(cljs.core.truth_(inst_7647)){
var statearr_7667_7687 = state_7658__$1;
(statearr_7667_7687[(1)] = (12));

} else {
var statearr_7668_7688 = state_7658__$1;
(statearr_7668_7688[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (9))){
var state_7658__$1 = state_7658;
var statearr_7669_7689 = state_7658__$1;
(statearr_7669_7689[(2)] = null);

(statearr_7669_7689[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (5))){
var state_7658__$1 = state_7658;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7670_7690 = state_7658__$1;
(statearr_7670_7690[(1)] = (8));

} else {
var statearr_7671_7691 = state_7658__$1;
(statearr_7671_7691[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (14))){
var inst_7652 = (state_7658[(2)]);
var state_7658__$1 = state_7658;
var statearr_7672_7692 = state_7658__$1;
(statearr_7672_7692[(2)] = inst_7652);

(statearr_7672_7692[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (10))){
var inst_7644 = (state_7658[(2)]);
var state_7658__$1 = state_7658;
var statearr_7673_7693 = state_7658__$1;
(statearr_7673_7693[(2)] = inst_7644);

(statearr_7673_7693[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7659 === (8))){
var inst_7641 = cljs.core.async.close_BANG_(to);
var state_7658__$1 = state_7658;
var statearr_7674_7694 = state_7658__$1;
(statearr_7674_7694[(2)] = inst_7641);

(statearr_7674_7694[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_7675 = [null,null,null,null,null,null,null,null];
(statearr_7675[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_7675[(1)] = (1));

return statearr_7675;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_7658){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_7658);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e7676){if((e7676 instanceof Object)){
var ex__7428__auto__ = e7676;
var statearr_7677_7695 = state_7658;
(statearr_7677_7695[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7658);

return cljs.core.cst$kw$recur;
} else {
throw e7676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__7696 = state_7658;
state_7658 = G__7696;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_7658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_7658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_7678 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_7678[(6)] = c__7531__auto___7680);

return statearr_7678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__7697){
var vec__7698 = p__7697;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7698,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7698,(1),null);
var job = vec__7698;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7531__auto___7869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_7705){
var state_val_7706 = (state_7705[(1)]);
if((state_val_7706 === (1))){
var state_7705__$1 = state_7705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7705__$1,(2),res,v);
} else {
if((state_val_7706 === (2))){
var inst_7702 = (state_7705[(2)]);
var inst_7703 = cljs.core.async.close_BANG_(res);
var state_7705__$1 = (function (){var statearr_7707 = state_7705;
(statearr_7707[(7)] = inst_7702);

return statearr_7707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_7705__$1,inst_7703);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0 = (function (){
var statearr_7708 = [null,null,null,null,null,null,null,null];
(statearr_7708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__);

(statearr_7708[(1)] = (1));

return statearr_7708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1 = (function (state_7705){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_7705);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e7709){if((e7709 instanceof Object)){
var ex__7428__auto__ = e7709;
var statearr_7710_7870 = state_7705;
(statearr_7710_7870[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7705);

return cljs.core.cst$kw$recur;
} else {
throw e7709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__7871 = state_7705;
state_7705 = G__7871;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = function(state_7705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1.call(this,state_7705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_7711 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_7711[(6)] = c__7531__auto___7869);

return statearr_7711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__7712){
var vec__7713 = p__7712;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7713,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7713,(1),null);
var job = vec__7713;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___7872 = n;
var __7873 = (0);
while(true){
if((__7873 < n__4666__auto___7872)){
var G__7716_7874 = type;
var G__7716_7875__$1 = (((G__7716_7874 instanceof cljs.core.Keyword))?G__7716_7874.fqn:null);
switch (G__7716_7875__$1) {
case "compute":
var c__7531__auto___7877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__7873,c__7531__auto___7877,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async){
return (function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = ((function (__7873,c__7531__auto___7877,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async){
return (function (state_7729){
var state_val_7730 = (state_7729[(1)]);
if((state_val_7730 === (1))){
var state_7729__$1 = state_7729;
var statearr_7731_7878 = state_7729__$1;
(statearr_7731_7878[(2)] = null);

(statearr_7731_7878[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7730 === (2))){
var state_7729__$1 = state_7729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7729__$1,(4),jobs);
} else {
if((state_val_7730 === (3))){
var inst_7727 = (state_7729[(2)]);
var state_7729__$1 = state_7729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7729__$1,inst_7727);
} else {
if((state_val_7730 === (4))){
var inst_7719 = (state_7729[(2)]);
var inst_7720 = process(inst_7719);
var state_7729__$1 = state_7729;
if(cljs.core.truth_(inst_7720)){
var statearr_7732_7879 = state_7729__$1;
(statearr_7732_7879[(1)] = (5));

} else {
var statearr_7733_7880 = state_7729__$1;
(statearr_7733_7880[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7730 === (5))){
var state_7729__$1 = state_7729;
var statearr_7734_7881 = state_7729__$1;
(statearr_7734_7881[(2)] = null);

(statearr_7734_7881[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7730 === (6))){
var state_7729__$1 = state_7729;
var statearr_7735_7882 = state_7729__$1;
(statearr_7735_7882[(2)] = null);

(statearr_7735_7882[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7730 === (7))){
var inst_7725 = (state_7729[(2)]);
var state_7729__$1 = state_7729;
var statearr_7736_7883 = state_7729__$1;
(statearr_7736_7883[(2)] = inst_7725);

(statearr_7736_7883[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__7873,c__7531__auto___7877,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async))
;
return ((function (__7873,switch__7424__auto__,c__7531__auto___7877,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0 = (function (){
var statearr_7737 = [null,null,null,null,null,null,null];
(statearr_7737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__);

(statearr_7737[(1)] = (1));

return statearr_7737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1 = (function (state_7729){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_7729);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e7738){if((e7738 instanceof Object)){
var ex__7428__auto__ = e7738;
var statearr_7739_7884 = state_7729;
(statearr_7739_7884[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7729);

return cljs.core.cst$kw$recur;
} else {
throw e7738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__7885 = state_7729;
state_7729 = G__7885;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = function(state_7729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1.call(this,state_7729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__;
})()
;})(__7873,switch__7424__auto__,c__7531__auto___7877,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async))
})();
var state__7533__auto__ = (function (){var statearr_7740 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_7740[(6)] = c__7531__auto___7877);

return statearr_7740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
});})(__7873,c__7531__auto___7877,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async))
);


break;
case "async":
var c__7531__auto___7886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__7873,c__7531__auto___7886,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async){
return (function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = ((function (__7873,c__7531__auto___7886,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async){
return (function (state_7753){
var state_val_7754 = (state_7753[(1)]);
if((state_val_7754 === (1))){
var state_7753__$1 = state_7753;
var statearr_7755_7887 = state_7753__$1;
(statearr_7755_7887[(2)] = null);

(statearr_7755_7887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7754 === (2))){
var state_7753__$1 = state_7753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7753__$1,(4),jobs);
} else {
if((state_val_7754 === (3))){
var inst_7751 = (state_7753[(2)]);
var state_7753__$1 = state_7753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7753__$1,inst_7751);
} else {
if((state_val_7754 === (4))){
var inst_7743 = (state_7753[(2)]);
var inst_7744 = async(inst_7743);
var state_7753__$1 = state_7753;
if(cljs.core.truth_(inst_7744)){
var statearr_7756_7888 = state_7753__$1;
(statearr_7756_7888[(1)] = (5));

} else {
var statearr_7757_7889 = state_7753__$1;
(statearr_7757_7889[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7754 === (5))){
var state_7753__$1 = state_7753;
var statearr_7758_7890 = state_7753__$1;
(statearr_7758_7890[(2)] = null);

(statearr_7758_7890[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7754 === (6))){
var state_7753__$1 = state_7753;
var statearr_7759_7891 = state_7753__$1;
(statearr_7759_7891[(2)] = null);

(statearr_7759_7891[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7754 === (7))){
var inst_7749 = (state_7753[(2)]);
var state_7753__$1 = state_7753;
var statearr_7760_7892 = state_7753__$1;
(statearr_7760_7892[(2)] = inst_7749);

(statearr_7760_7892[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__7873,c__7531__auto___7886,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async))
;
return ((function (__7873,switch__7424__auto__,c__7531__auto___7886,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0 = (function (){
var statearr_7761 = [null,null,null,null,null,null,null];
(statearr_7761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__);

(statearr_7761[(1)] = (1));

return statearr_7761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1 = (function (state_7753){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_7753);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e7762){if((e7762 instanceof Object)){
var ex__7428__auto__ = e7762;
var statearr_7763_7893 = state_7753;
(statearr_7763_7893[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7753);

return cljs.core.cst$kw$recur;
} else {
throw e7762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__7894 = state_7753;
state_7753 = G__7894;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = function(state_7753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1.call(this,state_7753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__;
})()
;})(__7873,switch__7424__auto__,c__7531__auto___7886,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async))
})();
var state__7533__auto__ = (function (){var statearr_7764 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_7764[(6)] = c__7531__auto___7886);

return statearr_7764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
});})(__7873,c__7531__auto___7886,G__7716_7874,G__7716_7875__$1,n__4666__auto___7872,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7716_7875__$1)].join('')));

}

var G__7895 = (__7873 + (1));
__7873 = G__7895;
continue;
} else {
}
break;
}

var c__7531__auto___7896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_7786){
var state_val_7787 = (state_7786[(1)]);
if((state_val_7787 === (7))){
var inst_7782 = (state_7786[(2)]);
var state_7786__$1 = state_7786;
var statearr_7788_7897 = state_7786__$1;
(statearr_7788_7897[(2)] = inst_7782);

(statearr_7788_7897[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7787 === (1))){
var state_7786__$1 = state_7786;
var statearr_7789_7898 = state_7786__$1;
(statearr_7789_7898[(2)] = null);

(statearr_7789_7898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7787 === (4))){
var inst_7767 = (state_7786[(7)]);
var inst_7767__$1 = (state_7786[(2)]);
var inst_7768 = (inst_7767__$1 == null);
var state_7786__$1 = (function (){var statearr_7790 = state_7786;
(statearr_7790[(7)] = inst_7767__$1);

return statearr_7790;
})();
if(cljs.core.truth_(inst_7768)){
var statearr_7791_7899 = state_7786__$1;
(statearr_7791_7899[(1)] = (5));

} else {
var statearr_7792_7900 = state_7786__$1;
(statearr_7792_7900[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7787 === (6))){
var inst_7772 = (state_7786[(8)]);
var inst_7767 = (state_7786[(7)]);
var inst_7772__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_7773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7774 = [inst_7767,inst_7772__$1];
var inst_7775 = (new cljs.core.PersistentVector(null,2,(5),inst_7773,inst_7774,null));
var state_7786__$1 = (function (){var statearr_7793 = state_7786;
(statearr_7793[(8)] = inst_7772__$1);

return statearr_7793;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7786__$1,(8),jobs,inst_7775);
} else {
if((state_val_7787 === (3))){
var inst_7784 = (state_7786[(2)]);
var state_7786__$1 = state_7786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7786__$1,inst_7784);
} else {
if((state_val_7787 === (2))){
var state_7786__$1 = state_7786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7786__$1,(4),from);
} else {
if((state_val_7787 === (9))){
var inst_7779 = (state_7786[(2)]);
var state_7786__$1 = (function (){var statearr_7794 = state_7786;
(statearr_7794[(9)] = inst_7779);

return statearr_7794;
})();
var statearr_7795_7901 = state_7786__$1;
(statearr_7795_7901[(2)] = null);

(statearr_7795_7901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7787 === (5))){
var inst_7770 = cljs.core.async.close_BANG_(jobs);
var state_7786__$1 = state_7786;
var statearr_7796_7902 = state_7786__$1;
(statearr_7796_7902[(2)] = inst_7770);

(statearr_7796_7902[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7787 === (8))){
var inst_7772 = (state_7786[(8)]);
var inst_7777 = (state_7786[(2)]);
var state_7786__$1 = (function (){var statearr_7797 = state_7786;
(statearr_7797[(10)] = inst_7777);

return statearr_7797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7786__$1,(9),results,inst_7772);
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
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0 = (function (){
var statearr_7798 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__);

(statearr_7798[(1)] = (1));

return statearr_7798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1 = (function (state_7786){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_7786);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e7799){if((e7799 instanceof Object)){
var ex__7428__auto__ = e7799;
var statearr_7800_7903 = state_7786;
(statearr_7800_7903[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7786);

return cljs.core.cst$kw$recur;
} else {
throw e7799;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__7904 = state_7786;
state_7786 = G__7904;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = function(state_7786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1.call(this,state_7786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_7801 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_7801[(6)] = c__7531__auto___7896);

return statearr_7801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));


var c__7531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_7839){
var state_val_7840 = (state_7839[(1)]);
if((state_val_7840 === (7))){
var inst_7835 = (state_7839[(2)]);
var state_7839__$1 = state_7839;
var statearr_7841_7905 = state_7839__$1;
(statearr_7841_7905[(2)] = inst_7835);

(statearr_7841_7905[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (20))){
var state_7839__$1 = state_7839;
var statearr_7842_7906 = state_7839__$1;
(statearr_7842_7906[(2)] = null);

(statearr_7842_7906[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (1))){
var state_7839__$1 = state_7839;
var statearr_7843_7907 = state_7839__$1;
(statearr_7843_7907[(2)] = null);

(statearr_7843_7907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (4))){
var inst_7804 = (state_7839[(7)]);
var inst_7804__$1 = (state_7839[(2)]);
var inst_7805 = (inst_7804__$1 == null);
var state_7839__$1 = (function (){var statearr_7844 = state_7839;
(statearr_7844[(7)] = inst_7804__$1);

return statearr_7844;
})();
if(cljs.core.truth_(inst_7805)){
var statearr_7845_7908 = state_7839__$1;
(statearr_7845_7908[(1)] = (5));

} else {
var statearr_7846_7909 = state_7839__$1;
(statearr_7846_7909[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (15))){
var inst_7817 = (state_7839[(8)]);
var state_7839__$1 = state_7839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7839__$1,(18),to,inst_7817);
} else {
if((state_val_7840 === (21))){
var inst_7830 = (state_7839[(2)]);
var state_7839__$1 = state_7839;
var statearr_7847_7910 = state_7839__$1;
(statearr_7847_7910[(2)] = inst_7830);

(statearr_7847_7910[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (13))){
var inst_7832 = (state_7839[(2)]);
var state_7839__$1 = (function (){var statearr_7848 = state_7839;
(statearr_7848[(9)] = inst_7832);

return statearr_7848;
})();
var statearr_7849_7911 = state_7839__$1;
(statearr_7849_7911[(2)] = null);

(statearr_7849_7911[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (6))){
var inst_7804 = (state_7839[(7)]);
var state_7839__$1 = state_7839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7839__$1,(11),inst_7804);
} else {
if((state_val_7840 === (17))){
var inst_7825 = (state_7839[(2)]);
var state_7839__$1 = state_7839;
if(cljs.core.truth_(inst_7825)){
var statearr_7850_7912 = state_7839__$1;
(statearr_7850_7912[(1)] = (19));

} else {
var statearr_7851_7913 = state_7839__$1;
(statearr_7851_7913[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (3))){
var inst_7837 = (state_7839[(2)]);
var state_7839__$1 = state_7839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7839__$1,inst_7837);
} else {
if((state_val_7840 === (12))){
var inst_7814 = (state_7839[(10)]);
var state_7839__$1 = state_7839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7839__$1,(14),inst_7814);
} else {
if((state_val_7840 === (2))){
var state_7839__$1 = state_7839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7839__$1,(4),results);
} else {
if((state_val_7840 === (19))){
var state_7839__$1 = state_7839;
var statearr_7852_7914 = state_7839__$1;
(statearr_7852_7914[(2)] = null);

(statearr_7852_7914[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (11))){
var inst_7814 = (state_7839[(2)]);
var state_7839__$1 = (function (){var statearr_7853 = state_7839;
(statearr_7853[(10)] = inst_7814);

return statearr_7853;
})();
var statearr_7854_7915 = state_7839__$1;
(statearr_7854_7915[(2)] = null);

(statearr_7854_7915[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (9))){
var state_7839__$1 = state_7839;
var statearr_7855_7916 = state_7839__$1;
(statearr_7855_7916[(2)] = null);

(statearr_7855_7916[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (5))){
var state_7839__$1 = state_7839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7856_7917 = state_7839__$1;
(statearr_7856_7917[(1)] = (8));

} else {
var statearr_7857_7918 = state_7839__$1;
(statearr_7857_7918[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (14))){
var inst_7817 = (state_7839[(8)]);
var inst_7817__$1 = (state_7839[(2)]);
var inst_7818 = (inst_7817__$1 == null);
var inst_7819 = cljs.core.not(inst_7818);
var state_7839__$1 = (function (){var statearr_7858 = state_7839;
(statearr_7858[(8)] = inst_7817__$1);

return statearr_7858;
})();
if(inst_7819){
var statearr_7859_7919 = state_7839__$1;
(statearr_7859_7919[(1)] = (15));

} else {
var statearr_7860_7920 = state_7839__$1;
(statearr_7860_7920[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (16))){
var state_7839__$1 = state_7839;
var statearr_7861_7921 = state_7839__$1;
(statearr_7861_7921[(2)] = false);

(statearr_7861_7921[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (10))){
var inst_7811 = (state_7839[(2)]);
var state_7839__$1 = state_7839;
var statearr_7862_7922 = state_7839__$1;
(statearr_7862_7922[(2)] = inst_7811);

(statearr_7862_7922[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (18))){
var inst_7822 = (state_7839[(2)]);
var state_7839__$1 = state_7839;
var statearr_7863_7923 = state_7839__$1;
(statearr_7863_7923[(2)] = inst_7822);

(statearr_7863_7923[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7840 === (8))){
var inst_7808 = cljs.core.async.close_BANG_(to);
var state_7839__$1 = state_7839;
var statearr_7864_7924 = state_7839__$1;
(statearr_7864_7924[(2)] = inst_7808);

(statearr_7864_7924[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0 = (function (){
var statearr_7865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__);

(statearr_7865[(1)] = (1));

return statearr_7865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1 = (function (state_7839){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_7839);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e7866){if((e7866 instanceof Object)){
var ex__7428__auto__ = e7866;
var statearr_7867_7925 = state_7839;
(statearr_7867_7925[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7839);

return cljs.core.cst$kw$recur;
} else {
throw e7866;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__7926 = state_7839;
state_7839 = G__7926;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__ = function(state_7839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1.call(this,state_7839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7425__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_7868 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_7868[(6)] = c__7531__auto__);

return statearr_7868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));

return c__7531__auto__;
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
var G__7928 = arguments.length;
switch (G__7928) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__7931 = arguments.length;
switch (G__7931) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__7934 = arguments.length;
switch (G__7934) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__7531__auto___7983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_7960){
var state_val_7961 = (state_7960[(1)]);
if((state_val_7961 === (7))){
var inst_7956 = (state_7960[(2)]);
var state_7960__$1 = state_7960;
var statearr_7962_7984 = state_7960__$1;
(statearr_7962_7984[(2)] = inst_7956);

(statearr_7962_7984[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (1))){
var state_7960__$1 = state_7960;
var statearr_7963_7985 = state_7960__$1;
(statearr_7963_7985[(2)] = null);

(statearr_7963_7985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (4))){
var inst_7937 = (state_7960[(7)]);
var inst_7937__$1 = (state_7960[(2)]);
var inst_7938 = (inst_7937__$1 == null);
var state_7960__$1 = (function (){var statearr_7964 = state_7960;
(statearr_7964[(7)] = inst_7937__$1);

return statearr_7964;
})();
if(cljs.core.truth_(inst_7938)){
var statearr_7965_7986 = state_7960__$1;
(statearr_7965_7986[(1)] = (5));

} else {
var statearr_7966_7987 = state_7960__$1;
(statearr_7966_7987[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (13))){
var state_7960__$1 = state_7960;
var statearr_7967_7988 = state_7960__$1;
(statearr_7967_7988[(2)] = null);

(statearr_7967_7988[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (6))){
var inst_7937 = (state_7960[(7)]);
var inst_7943 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_7937) : p.call(null,inst_7937));
var state_7960__$1 = state_7960;
if(cljs.core.truth_(inst_7943)){
var statearr_7968_7989 = state_7960__$1;
(statearr_7968_7989[(1)] = (9));

} else {
var statearr_7969_7990 = state_7960__$1;
(statearr_7969_7990[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (3))){
var inst_7958 = (state_7960[(2)]);
var state_7960__$1 = state_7960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_7960__$1,inst_7958);
} else {
if((state_val_7961 === (12))){
var state_7960__$1 = state_7960;
var statearr_7970_7991 = state_7960__$1;
(statearr_7970_7991[(2)] = null);

(statearr_7970_7991[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (2))){
var state_7960__$1 = state_7960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_7960__$1,(4),ch);
} else {
if((state_val_7961 === (11))){
var inst_7937 = (state_7960[(7)]);
var inst_7947 = (state_7960[(2)]);
var state_7960__$1 = state_7960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_7960__$1,(8),inst_7947,inst_7937);
} else {
if((state_val_7961 === (9))){
var state_7960__$1 = state_7960;
var statearr_7971_7992 = state_7960__$1;
(statearr_7971_7992[(2)] = tc);

(statearr_7971_7992[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (5))){
var inst_7940 = cljs.core.async.close_BANG_(tc);
var inst_7941 = cljs.core.async.close_BANG_(fc);
var state_7960__$1 = (function (){var statearr_7972 = state_7960;
(statearr_7972[(8)] = inst_7940);

return statearr_7972;
})();
var statearr_7973_7993 = state_7960__$1;
(statearr_7973_7993[(2)] = inst_7941);

(statearr_7973_7993[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (14))){
var inst_7954 = (state_7960[(2)]);
var state_7960__$1 = state_7960;
var statearr_7974_7994 = state_7960__$1;
(statearr_7974_7994[(2)] = inst_7954);

(statearr_7974_7994[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (10))){
var state_7960__$1 = state_7960;
var statearr_7975_7995 = state_7960__$1;
(statearr_7975_7995[(2)] = fc);

(statearr_7975_7995[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_7961 === (8))){
var inst_7949 = (state_7960[(2)]);
var state_7960__$1 = state_7960;
if(cljs.core.truth_(inst_7949)){
var statearr_7976_7996 = state_7960__$1;
(statearr_7976_7996[(1)] = (12));

} else {
var statearr_7977_7997 = state_7960__$1;
(statearr_7977_7997[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_7978 = [null,null,null,null,null,null,null,null,null];
(statearr_7978[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_7978[(1)] = (1));

return statearr_7978;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_7960){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_7960);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e7979){if((e7979 instanceof Object)){
var ex__7428__auto__ = e7979;
var statearr_7980_7998 = state_7960;
(statearr_7980_7998[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_7960);

return cljs.core.cst$kw$recur;
} else {
throw e7979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__7999 = state_7960;
state_7960 = G__7999;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_7960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_7960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_7981 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_7981[(6)] = c__7531__auto___7983);

return statearr_7981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
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
var c__7531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_8020){
var state_val_8021 = (state_8020[(1)]);
if((state_val_8021 === (7))){
var inst_8016 = (state_8020[(2)]);
var state_8020__$1 = state_8020;
var statearr_8022_8040 = state_8020__$1;
(statearr_8022_8040[(2)] = inst_8016);

(statearr_8022_8040[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8021 === (1))){
var inst_8000 = init;
var state_8020__$1 = (function (){var statearr_8023 = state_8020;
(statearr_8023[(7)] = inst_8000);

return statearr_8023;
})();
var statearr_8024_8041 = state_8020__$1;
(statearr_8024_8041[(2)] = null);

(statearr_8024_8041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8021 === (4))){
var inst_8003 = (state_8020[(8)]);
var inst_8003__$1 = (state_8020[(2)]);
var inst_8004 = (inst_8003__$1 == null);
var state_8020__$1 = (function (){var statearr_8025 = state_8020;
(statearr_8025[(8)] = inst_8003__$1);

return statearr_8025;
})();
if(cljs.core.truth_(inst_8004)){
var statearr_8026_8042 = state_8020__$1;
(statearr_8026_8042[(1)] = (5));

} else {
var statearr_8027_8043 = state_8020__$1;
(statearr_8027_8043[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8021 === (6))){
var inst_8000 = (state_8020[(7)]);
var inst_8003 = (state_8020[(8)]);
var inst_8007 = (state_8020[(9)]);
var inst_8007__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_8000,inst_8003) : f.call(null,inst_8000,inst_8003));
var inst_8008 = cljs.core.reduced_QMARK_(inst_8007__$1);
var state_8020__$1 = (function (){var statearr_8028 = state_8020;
(statearr_8028[(9)] = inst_8007__$1);

return statearr_8028;
})();
if(inst_8008){
var statearr_8029_8044 = state_8020__$1;
(statearr_8029_8044[(1)] = (8));

} else {
var statearr_8030_8045 = state_8020__$1;
(statearr_8030_8045[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8021 === (3))){
var inst_8018 = (state_8020[(2)]);
var state_8020__$1 = state_8020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8020__$1,inst_8018);
} else {
if((state_val_8021 === (2))){
var state_8020__$1 = state_8020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8020__$1,(4),ch);
} else {
if((state_val_8021 === (9))){
var inst_8007 = (state_8020[(9)]);
var inst_8000 = inst_8007;
var state_8020__$1 = (function (){var statearr_8031 = state_8020;
(statearr_8031[(7)] = inst_8000);

return statearr_8031;
})();
var statearr_8032_8046 = state_8020__$1;
(statearr_8032_8046[(2)] = null);

(statearr_8032_8046[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8021 === (5))){
var inst_8000 = (state_8020[(7)]);
var state_8020__$1 = state_8020;
var statearr_8033_8047 = state_8020__$1;
(statearr_8033_8047[(2)] = inst_8000);

(statearr_8033_8047[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8021 === (10))){
var inst_8014 = (state_8020[(2)]);
var state_8020__$1 = state_8020;
var statearr_8034_8048 = state_8020__$1;
(statearr_8034_8048[(2)] = inst_8014);

(statearr_8034_8048[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8021 === (8))){
var inst_8007 = (state_8020[(9)]);
var inst_8010 = cljs.core.deref(inst_8007);
var state_8020__$1 = state_8020;
var statearr_8035_8049 = state_8020__$1;
(statearr_8035_8049[(2)] = inst_8010);

(statearr_8035_8049[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$reduce_$_state_machine__7425__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7425__auto____0 = (function (){
var statearr_8036 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8036[(0)] = cljs$core$async$reduce_$_state_machine__7425__auto__);

(statearr_8036[(1)] = (1));

return statearr_8036;
});
var cljs$core$async$reduce_$_state_machine__7425__auto____1 = (function (state_8020){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_8020);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e8037){if((e8037 instanceof Object)){
var ex__7428__auto__ = e8037;
var statearr_8038_8050 = state_8020;
(statearr_8038_8050[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8020);

return cljs.core.cst$kw$recur;
} else {
throw e8037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__8051 = state_8020;
state_8020 = G__8051;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7425__auto__ = function(state_8020){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7425__auto____1.call(this,state_8020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7425__auto____0;
cljs$core$async$reduce_$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7425__auto____1;
return cljs$core$async$reduce_$_state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_8039 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_8039[(6)] = c__7531__auto__);

return statearr_8039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));

return c__7531__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__7531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_8057){
var state_val_8058 = (state_8057[(1)]);
if((state_val_8058 === (1))){
var inst_8052 = cljs.core.async.reduce(f__$1,init,ch);
var state_8057__$1 = state_8057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8057__$1,(2),inst_8052);
} else {
if((state_val_8058 === (2))){
var inst_8054 = (state_8057[(2)]);
var inst_8055 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_8054) : f__$1.call(null,inst_8054));
var state_8057__$1 = state_8057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8057__$1,inst_8055);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__7425__auto__ = null;
var cljs$core$async$transduce_$_state_machine__7425__auto____0 = (function (){
var statearr_8059 = [null,null,null,null,null,null,null];
(statearr_8059[(0)] = cljs$core$async$transduce_$_state_machine__7425__auto__);

(statearr_8059[(1)] = (1));

return statearr_8059;
});
var cljs$core$async$transduce_$_state_machine__7425__auto____1 = (function (state_8057){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_8057);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e8060){if((e8060 instanceof Object)){
var ex__7428__auto__ = e8060;
var statearr_8061_8063 = state_8057;
(statearr_8061_8063[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8057);

return cljs.core.cst$kw$recur;
} else {
throw e8060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__8064 = state_8057;
state_8057 = G__8064;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__7425__auto__ = function(state_8057){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__7425__auto____1.call(this,state_8057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__7425__auto____0;
cljs$core$async$transduce_$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__7425__auto____1;
return cljs$core$async$transduce_$_state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_8062 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_8062[(6)] = c__7531__auto__);

return statearr_8062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));

return c__7531__auto__;
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
var G__8066 = arguments.length;
switch (G__8066) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_8091){
var state_val_8092 = (state_8091[(1)]);
if((state_val_8092 === (7))){
var inst_8073 = (state_8091[(2)]);
var state_8091__$1 = state_8091;
var statearr_8093_8114 = state_8091__$1;
(statearr_8093_8114[(2)] = inst_8073);

(statearr_8093_8114[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (1))){
var inst_8067 = cljs.core.seq(coll);
var inst_8068 = inst_8067;
var state_8091__$1 = (function (){var statearr_8094 = state_8091;
(statearr_8094[(7)] = inst_8068);

return statearr_8094;
})();
var statearr_8095_8115 = state_8091__$1;
(statearr_8095_8115[(2)] = null);

(statearr_8095_8115[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (4))){
var inst_8068 = (state_8091[(7)]);
var inst_8071 = cljs.core.first(inst_8068);
var state_8091__$1 = state_8091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8091__$1,(7),ch,inst_8071);
} else {
if((state_val_8092 === (13))){
var inst_8085 = (state_8091[(2)]);
var state_8091__$1 = state_8091;
var statearr_8096_8116 = state_8091__$1;
(statearr_8096_8116[(2)] = inst_8085);

(statearr_8096_8116[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (6))){
var inst_8076 = (state_8091[(2)]);
var state_8091__$1 = state_8091;
if(cljs.core.truth_(inst_8076)){
var statearr_8097_8117 = state_8091__$1;
(statearr_8097_8117[(1)] = (8));

} else {
var statearr_8098_8118 = state_8091__$1;
(statearr_8098_8118[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (3))){
var inst_8089 = (state_8091[(2)]);
var state_8091__$1 = state_8091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8091__$1,inst_8089);
} else {
if((state_val_8092 === (12))){
var state_8091__$1 = state_8091;
var statearr_8099_8119 = state_8091__$1;
(statearr_8099_8119[(2)] = null);

(statearr_8099_8119[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (2))){
var inst_8068 = (state_8091[(7)]);
var state_8091__$1 = state_8091;
if(cljs.core.truth_(inst_8068)){
var statearr_8100_8120 = state_8091__$1;
(statearr_8100_8120[(1)] = (4));

} else {
var statearr_8101_8121 = state_8091__$1;
(statearr_8101_8121[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (11))){
var inst_8082 = cljs.core.async.close_BANG_(ch);
var state_8091__$1 = state_8091;
var statearr_8102_8122 = state_8091__$1;
(statearr_8102_8122[(2)] = inst_8082);

(statearr_8102_8122[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (9))){
var state_8091__$1 = state_8091;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8103_8123 = state_8091__$1;
(statearr_8103_8123[(1)] = (11));

} else {
var statearr_8104_8124 = state_8091__$1;
(statearr_8104_8124[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (5))){
var inst_8068 = (state_8091[(7)]);
var state_8091__$1 = state_8091;
var statearr_8105_8125 = state_8091__$1;
(statearr_8105_8125[(2)] = inst_8068);

(statearr_8105_8125[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (10))){
var inst_8087 = (state_8091[(2)]);
var state_8091__$1 = state_8091;
var statearr_8106_8126 = state_8091__$1;
(statearr_8106_8126[(2)] = inst_8087);

(statearr_8106_8126[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8092 === (8))){
var inst_8068 = (state_8091[(7)]);
var inst_8078 = cljs.core.next(inst_8068);
var inst_8068__$1 = inst_8078;
var state_8091__$1 = (function (){var statearr_8107 = state_8091;
(statearr_8107[(7)] = inst_8068__$1);

return statearr_8107;
})();
var statearr_8108_8127 = state_8091__$1;
(statearr_8108_8127[(2)] = null);

(statearr_8108_8127[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_8109 = [null,null,null,null,null,null,null,null];
(statearr_8109[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_8109[(1)] = (1));

return statearr_8109;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_8091){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_8091);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e8110){if((e8110 instanceof Object)){
var ex__7428__auto__ = e8110;
var statearr_8111_8128 = state_8091;
(statearr_8111_8128[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8091);

return cljs.core.cst$kw$recur;
} else {
throw e8110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__8129 = state_8091;
state_8091 = G__8129;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_8091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_8091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_8112 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_8112[(6)] = c__7531__auto__);

return statearr_8112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));

return c__7531__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8130 = (function (ch,cs,meta8131){
this.ch = ch;
this.cs = cs;
this.meta8131 = meta8131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8132,meta8131__$1){
var self__ = this;
var _8132__$1 = this;
return (new cljs.core.async.t_cljs$core$async8130(self__.ch,self__.cs,meta8131__$1));
}));

(cljs.core.async.t_cljs$core$async8130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8132){
var self__ = this;
var _8132__$1 = this;
return self__.meta8131;
}));

(cljs.core.async.t_cljs$core$async8130.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async8130.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8130.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async8130.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async8130.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async8130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta8131], null);
}));

(cljs.core.async.t_cljs$core$async8130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8130");

(cljs.core.async.t_cljs$core$async8130.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async8130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8130.
 */
cljs.core.async.__GT_t_cljs$core$async8130 = (function cljs$core$async$mult_$___GT_t_cljs$core$async8130(ch__$1,cs__$1,meta8131){
return (new cljs.core.async.t_cljs$core$async8130(ch__$1,cs__$1,meta8131));
});

}

return (new cljs.core.async.t_cljs$core$async8130(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__7531__auto___8352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_8267){
var state_val_8268 = (state_8267[(1)]);
if((state_val_8268 === (7))){
var inst_8263 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8269_8353 = state_8267__$1;
(statearr_8269_8353[(2)] = inst_8263);

(statearr_8269_8353[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (20))){
var inst_8166 = (state_8267[(7)]);
var inst_8178 = cljs.core.first(inst_8166);
var inst_8179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8178,(0),null);
var inst_8180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8178,(1),null);
var state_8267__$1 = (function (){var statearr_8270 = state_8267;
(statearr_8270[(8)] = inst_8179);

return statearr_8270;
})();
if(cljs.core.truth_(inst_8180)){
var statearr_8271_8354 = state_8267__$1;
(statearr_8271_8354[(1)] = (22));

} else {
var statearr_8272_8355 = state_8267__$1;
(statearr_8272_8355[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (27))){
var inst_8135 = (state_8267[(9)]);
var inst_8210 = (state_8267[(10)]);
var inst_8208 = (state_8267[(11)]);
var inst_8215 = (state_8267[(12)]);
var inst_8215__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8208,inst_8210);
var inst_8216 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8215__$1,inst_8135,done);
var state_8267__$1 = (function (){var statearr_8273 = state_8267;
(statearr_8273[(12)] = inst_8215__$1);

return statearr_8273;
})();
if(cljs.core.truth_(inst_8216)){
var statearr_8274_8356 = state_8267__$1;
(statearr_8274_8356[(1)] = (30));

} else {
var statearr_8275_8357 = state_8267__$1;
(statearr_8275_8357[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (1))){
var state_8267__$1 = state_8267;
var statearr_8276_8358 = state_8267__$1;
(statearr_8276_8358[(2)] = null);

(statearr_8276_8358[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (24))){
var inst_8166 = (state_8267[(7)]);
var inst_8185 = (state_8267[(2)]);
var inst_8186 = cljs.core.next(inst_8166);
var inst_8144 = inst_8186;
var inst_8145 = null;
var inst_8146 = (0);
var inst_8147 = (0);
var state_8267__$1 = (function (){var statearr_8277 = state_8267;
(statearr_8277[(13)] = inst_8145);

(statearr_8277[(14)] = inst_8146);

(statearr_8277[(15)] = inst_8144);

(statearr_8277[(16)] = inst_8147);

(statearr_8277[(17)] = inst_8185);

return statearr_8277;
})();
var statearr_8278_8359 = state_8267__$1;
(statearr_8278_8359[(2)] = null);

(statearr_8278_8359[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (39))){
var state_8267__$1 = state_8267;
var statearr_8282_8360 = state_8267__$1;
(statearr_8282_8360[(2)] = null);

(statearr_8282_8360[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (4))){
var inst_8135 = (state_8267[(9)]);
var inst_8135__$1 = (state_8267[(2)]);
var inst_8136 = (inst_8135__$1 == null);
var state_8267__$1 = (function (){var statearr_8283 = state_8267;
(statearr_8283[(9)] = inst_8135__$1);

return statearr_8283;
})();
if(cljs.core.truth_(inst_8136)){
var statearr_8284_8361 = state_8267__$1;
(statearr_8284_8361[(1)] = (5));

} else {
var statearr_8285_8362 = state_8267__$1;
(statearr_8285_8362[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (15))){
var inst_8145 = (state_8267[(13)]);
var inst_8146 = (state_8267[(14)]);
var inst_8144 = (state_8267[(15)]);
var inst_8147 = (state_8267[(16)]);
var inst_8162 = (state_8267[(2)]);
var inst_8163 = (inst_8147 + (1));
var tmp8279 = inst_8145;
var tmp8280 = inst_8146;
var tmp8281 = inst_8144;
var inst_8144__$1 = tmp8281;
var inst_8145__$1 = tmp8279;
var inst_8146__$1 = tmp8280;
var inst_8147__$1 = inst_8163;
var state_8267__$1 = (function (){var statearr_8286 = state_8267;
(statearr_8286[(13)] = inst_8145__$1);

(statearr_8286[(14)] = inst_8146__$1);

(statearr_8286[(15)] = inst_8144__$1);

(statearr_8286[(16)] = inst_8147__$1);

(statearr_8286[(18)] = inst_8162);

return statearr_8286;
})();
var statearr_8287_8363 = state_8267__$1;
(statearr_8287_8363[(2)] = null);

(statearr_8287_8363[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (21))){
var inst_8189 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8291_8364 = state_8267__$1;
(statearr_8291_8364[(2)] = inst_8189);

(statearr_8291_8364[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (31))){
var inst_8215 = (state_8267[(12)]);
var inst_8219 = done(null);
var inst_8220 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8215);
var state_8267__$1 = (function (){var statearr_8292 = state_8267;
(statearr_8292[(19)] = inst_8219);

return statearr_8292;
})();
var statearr_8293_8365 = state_8267__$1;
(statearr_8293_8365[(2)] = inst_8220);

(statearr_8293_8365[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (32))){
var inst_8207 = (state_8267[(20)]);
var inst_8209 = (state_8267[(21)]);
var inst_8210 = (state_8267[(10)]);
var inst_8208 = (state_8267[(11)]);
var inst_8222 = (state_8267[(2)]);
var inst_8223 = (inst_8210 + (1));
var tmp8288 = inst_8207;
var tmp8289 = inst_8209;
var tmp8290 = inst_8208;
var inst_8207__$1 = tmp8288;
var inst_8208__$1 = tmp8290;
var inst_8209__$1 = tmp8289;
var inst_8210__$1 = inst_8223;
var state_8267__$1 = (function (){var statearr_8294 = state_8267;
(statearr_8294[(20)] = inst_8207__$1);

(statearr_8294[(21)] = inst_8209__$1);

(statearr_8294[(10)] = inst_8210__$1);

(statearr_8294[(11)] = inst_8208__$1);

(statearr_8294[(22)] = inst_8222);

return statearr_8294;
})();
var statearr_8295_8366 = state_8267__$1;
(statearr_8295_8366[(2)] = null);

(statearr_8295_8366[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (40))){
var inst_8235 = (state_8267[(23)]);
var inst_8239 = done(null);
var inst_8240 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_8235);
var state_8267__$1 = (function (){var statearr_8296 = state_8267;
(statearr_8296[(24)] = inst_8239);

return statearr_8296;
})();
var statearr_8297_8367 = state_8267__$1;
(statearr_8297_8367[(2)] = inst_8240);

(statearr_8297_8367[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (33))){
var inst_8226 = (state_8267[(25)]);
var inst_8228 = cljs.core.chunked_seq_QMARK_(inst_8226);
var state_8267__$1 = state_8267;
if(inst_8228){
var statearr_8298_8368 = state_8267__$1;
(statearr_8298_8368[(1)] = (36));

} else {
var statearr_8299_8369 = state_8267__$1;
(statearr_8299_8369[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (13))){
var inst_8156 = (state_8267[(26)]);
var inst_8159 = cljs.core.async.close_BANG_(inst_8156);
var state_8267__$1 = state_8267;
var statearr_8300_8370 = state_8267__$1;
(statearr_8300_8370[(2)] = inst_8159);

(statearr_8300_8370[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (22))){
var inst_8179 = (state_8267[(8)]);
var inst_8182 = cljs.core.async.close_BANG_(inst_8179);
var state_8267__$1 = state_8267;
var statearr_8301_8371 = state_8267__$1;
(statearr_8301_8371[(2)] = inst_8182);

(statearr_8301_8371[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (36))){
var inst_8226 = (state_8267[(25)]);
var inst_8230 = cljs.core.chunk_first(inst_8226);
var inst_8231 = cljs.core.chunk_rest(inst_8226);
var inst_8232 = cljs.core.count(inst_8230);
var inst_8207 = inst_8231;
var inst_8208 = inst_8230;
var inst_8209 = inst_8232;
var inst_8210 = (0);
var state_8267__$1 = (function (){var statearr_8302 = state_8267;
(statearr_8302[(20)] = inst_8207);

(statearr_8302[(21)] = inst_8209);

(statearr_8302[(10)] = inst_8210);

(statearr_8302[(11)] = inst_8208);

return statearr_8302;
})();
var statearr_8303_8372 = state_8267__$1;
(statearr_8303_8372[(2)] = null);

(statearr_8303_8372[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (41))){
var inst_8226 = (state_8267[(25)]);
var inst_8242 = (state_8267[(2)]);
var inst_8243 = cljs.core.next(inst_8226);
var inst_8207 = inst_8243;
var inst_8208 = null;
var inst_8209 = (0);
var inst_8210 = (0);
var state_8267__$1 = (function (){var statearr_8304 = state_8267;
(statearr_8304[(20)] = inst_8207);

(statearr_8304[(21)] = inst_8209);

(statearr_8304[(10)] = inst_8210);

(statearr_8304[(11)] = inst_8208);

(statearr_8304[(27)] = inst_8242);

return statearr_8304;
})();
var statearr_8305_8373 = state_8267__$1;
(statearr_8305_8373[(2)] = null);

(statearr_8305_8373[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (43))){
var state_8267__$1 = state_8267;
var statearr_8306_8374 = state_8267__$1;
(statearr_8306_8374[(2)] = null);

(statearr_8306_8374[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (29))){
var inst_8251 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8307_8375 = state_8267__$1;
(statearr_8307_8375[(2)] = inst_8251);

(statearr_8307_8375[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (44))){
var inst_8260 = (state_8267[(2)]);
var state_8267__$1 = (function (){var statearr_8308 = state_8267;
(statearr_8308[(28)] = inst_8260);

return statearr_8308;
})();
var statearr_8309_8376 = state_8267__$1;
(statearr_8309_8376[(2)] = null);

(statearr_8309_8376[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (6))){
var inst_8199 = (state_8267[(29)]);
var inst_8198 = cljs.core.deref(cs);
var inst_8199__$1 = cljs.core.keys(inst_8198);
var inst_8200 = cljs.core.count(inst_8199__$1);
var inst_8201 = cljs.core.reset_BANG_(dctr,inst_8200);
var inst_8206 = cljs.core.seq(inst_8199__$1);
var inst_8207 = inst_8206;
var inst_8208 = null;
var inst_8209 = (0);
var inst_8210 = (0);
var state_8267__$1 = (function (){var statearr_8310 = state_8267;
(statearr_8310[(20)] = inst_8207);

(statearr_8310[(21)] = inst_8209);

(statearr_8310[(10)] = inst_8210);

(statearr_8310[(11)] = inst_8208);

(statearr_8310[(29)] = inst_8199__$1);

(statearr_8310[(30)] = inst_8201);

return statearr_8310;
})();
var statearr_8311_8377 = state_8267__$1;
(statearr_8311_8377[(2)] = null);

(statearr_8311_8377[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (28))){
var inst_8207 = (state_8267[(20)]);
var inst_8226 = (state_8267[(25)]);
var inst_8226__$1 = cljs.core.seq(inst_8207);
var state_8267__$1 = (function (){var statearr_8312 = state_8267;
(statearr_8312[(25)] = inst_8226__$1);

return statearr_8312;
})();
if(inst_8226__$1){
var statearr_8313_8378 = state_8267__$1;
(statearr_8313_8378[(1)] = (33));

} else {
var statearr_8314_8379 = state_8267__$1;
(statearr_8314_8379[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (25))){
var inst_8209 = (state_8267[(21)]);
var inst_8210 = (state_8267[(10)]);
var inst_8212 = (inst_8210 < inst_8209);
var inst_8213 = inst_8212;
var state_8267__$1 = state_8267;
if(cljs.core.truth_(inst_8213)){
var statearr_8315_8380 = state_8267__$1;
(statearr_8315_8380[(1)] = (27));

} else {
var statearr_8316_8381 = state_8267__$1;
(statearr_8316_8381[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (34))){
var state_8267__$1 = state_8267;
var statearr_8317_8382 = state_8267__$1;
(statearr_8317_8382[(2)] = null);

(statearr_8317_8382[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (17))){
var state_8267__$1 = state_8267;
var statearr_8318_8383 = state_8267__$1;
(statearr_8318_8383[(2)] = null);

(statearr_8318_8383[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (3))){
var inst_8265 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8267__$1,inst_8265);
} else {
if((state_val_8268 === (12))){
var inst_8194 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8319_8384 = state_8267__$1;
(statearr_8319_8384[(2)] = inst_8194);

(statearr_8319_8384[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (2))){
var state_8267__$1 = state_8267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8267__$1,(4),ch);
} else {
if((state_val_8268 === (23))){
var state_8267__$1 = state_8267;
var statearr_8320_8385 = state_8267__$1;
(statearr_8320_8385[(2)] = null);

(statearr_8320_8385[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (35))){
var inst_8249 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8321_8386 = state_8267__$1;
(statearr_8321_8386[(2)] = inst_8249);

(statearr_8321_8386[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (19))){
var inst_8166 = (state_8267[(7)]);
var inst_8170 = cljs.core.chunk_first(inst_8166);
var inst_8171 = cljs.core.chunk_rest(inst_8166);
var inst_8172 = cljs.core.count(inst_8170);
var inst_8144 = inst_8171;
var inst_8145 = inst_8170;
var inst_8146 = inst_8172;
var inst_8147 = (0);
var state_8267__$1 = (function (){var statearr_8322 = state_8267;
(statearr_8322[(13)] = inst_8145);

(statearr_8322[(14)] = inst_8146);

(statearr_8322[(15)] = inst_8144);

(statearr_8322[(16)] = inst_8147);

return statearr_8322;
})();
var statearr_8323_8387 = state_8267__$1;
(statearr_8323_8387[(2)] = null);

(statearr_8323_8387[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (11))){
var inst_8166 = (state_8267[(7)]);
var inst_8144 = (state_8267[(15)]);
var inst_8166__$1 = cljs.core.seq(inst_8144);
var state_8267__$1 = (function (){var statearr_8324 = state_8267;
(statearr_8324[(7)] = inst_8166__$1);

return statearr_8324;
})();
if(inst_8166__$1){
var statearr_8325_8388 = state_8267__$1;
(statearr_8325_8388[(1)] = (16));

} else {
var statearr_8326_8389 = state_8267__$1;
(statearr_8326_8389[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (9))){
var inst_8196 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8327_8390 = state_8267__$1;
(statearr_8327_8390[(2)] = inst_8196);

(statearr_8327_8390[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (5))){
var inst_8142 = cljs.core.deref(cs);
var inst_8143 = cljs.core.seq(inst_8142);
var inst_8144 = inst_8143;
var inst_8145 = null;
var inst_8146 = (0);
var inst_8147 = (0);
var state_8267__$1 = (function (){var statearr_8328 = state_8267;
(statearr_8328[(13)] = inst_8145);

(statearr_8328[(14)] = inst_8146);

(statearr_8328[(15)] = inst_8144);

(statearr_8328[(16)] = inst_8147);

return statearr_8328;
})();
var statearr_8329_8391 = state_8267__$1;
(statearr_8329_8391[(2)] = null);

(statearr_8329_8391[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (14))){
var state_8267__$1 = state_8267;
var statearr_8330_8392 = state_8267__$1;
(statearr_8330_8392[(2)] = null);

(statearr_8330_8392[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (45))){
var inst_8257 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8331_8393 = state_8267__$1;
(statearr_8331_8393[(2)] = inst_8257);

(statearr_8331_8393[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (26))){
var inst_8199 = (state_8267[(29)]);
var inst_8253 = (state_8267[(2)]);
var inst_8254 = cljs.core.seq(inst_8199);
var state_8267__$1 = (function (){var statearr_8332 = state_8267;
(statearr_8332[(31)] = inst_8253);

return statearr_8332;
})();
if(inst_8254){
var statearr_8333_8394 = state_8267__$1;
(statearr_8333_8394[(1)] = (42));

} else {
var statearr_8334_8395 = state_8267__$1;
(statearr_8334_8395[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (16))){
var inst_8166 = (state_8267[(7)]);
var inst_8168 = cljs.core.chunked_seq_QMARK_(inst_8166);
var state_8267__$1 = state_8267;
if(inst_8168){
var statearr_8335_8396 = state_8267__$1;
(statearr_8335_8396[(1)] = (19));

} else {
var statearr_8336_8397 = state_8267__$1;
(statearr_8336_8397[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (38))){
var inst_8246 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8337_8398 = state_8267__$1;
(statearr_8337_8398[(2)] = inst_8246);

(statearr_8337_8398[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (30))){
var state_8267__$1 = state_8267;
var statearr_8338_8399 = state_8267__$1;
(statearr_8338_8399[(2)] = null);

(statearr_8338_8399[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (10))){
var inst_8145 = (state_8267[(13)]);
var inst_8147 = (state_8267[(16)]);
var inst_8155 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8145,inst_8147);
var inst_8156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8155,(0),null);
var inst_8157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8155,(1),null);
var state_8267__$1 = (function (){var statearr_8339 = state_8267;
(statearr_8339[(26)] = inst_8156);

return statearr_8339;
})();
if(cljs.core.truth_(inst_8157)){
var statearr_8340_8400 = state_8267__$1;
(statearr_8340_8400[(1)] = (13));

} else {
var statearr_8341_8401 = state_8267__$1;
(statearr_8341_8401[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (18))){
var inst_8192 = (state_8267[(2)]);
var state_8267__$1 = state_8267;
var statearr_8342_8402 = state_8267__$1;
(statearr_8342_8402[(2)] = inst_8192);

(statearr_8342_8402[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (42))){
var state_8267__$1 = state_8267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8267__$1,(45),dchan);
} else {
if((state_val_8268 === (37))){
var inst_8226 = (state_8267[(25)]);
var inst_8135 = (state_8267[(9)]);
var inst_8235 = (state_8267[(23)]);
var inst_8235__$1 = cljs.core.first(inst_8226);
var inst_8236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_8235__$1,inst_8135,done);
var state_8267__$1 = (function (){var statearr_8343 = state_8267;
(statearr_8343[(23)] = inst_8235__$1);

return statearr_8343;
})();
if(cljs.core.truth_(inst_8236)){
var statearr_8344_8403 = state_8267__$1;
(statearr_8344_8403[(1)] = (39));

} else {
var statearr_8345_8404 = state_8267__$1;
(statearr_8345_8404[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8268 === (8))){
var inst_8146 = (state_8267[(14)]);
var inst_8147 = (state_8267[(16)]);
var inst_8149 = (inst_8147 < inst_8146);
var inst_8150 = inst_8149;
var state_8267__$1 = state_8267;
if(cljs.core.truth_(inst_8150)){
var statearr_8346_8405 = state_8267__$1;
(statearr_8346_8405[(1)] = (10));

} else {
var statearr_8347_8406 = state_8267__$1;
(statearr_8347_8406[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mult_$_state_machine__7425__auto__ = null;
var cljs$core$async$mult_$_state_machine__7425__auto____0 = (function (){
var statearr_8348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8348[(0)] = cljs$core$async$mult_$_state_machine__7425__auto__);

(statearr_8348[(1)] = (1));

return statearr_8348;
});
var cljs$core$async$mult_$_state_machine__7425__auto____1 = (function (state_8267){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_8267);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e8349){if((e8349 instanceof Object)){
var ex__7428__auto__ = e8349;
var statearr_8350_8407 = state_8267;
(statearr_8350_8407[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8267);

return cljs.core.cst$kw$recur;
} else {
throw e8349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__8408 = state_8267;
state_8267 = G__8408;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7425__auto__ = function(state_8267){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7425__auto____1.call(this,state_8267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7425__auto____0;
cljs$core$async$mult_$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7425__auto____1;
return cljs$core$async$mult_$_state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_8351 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_8351[(6)] = c__7531__auto___8352);

return statearr_8351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
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
var G__8410 = arguments.length;
switch (G__8410) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___8422 = arguments.length;
var i__4790__auto___8423 = (0);
while(true){
if((i__4790__auto___8423 < len__4789__auto___8422)){
args__4795__auto__.push((arguments[i__4790__auto___8423]));

var G__8424 = (i__4790__auto___8423 + (1));
i__4790__auto___8423 = G__8424;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8416){
var map__8417 = p__8416;
var map__8417__$1 = (((((!((map__8417 == null))))?(((((map__8417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8417):map__8417);
var opts = map__8417__$1;
var statearr_8419_8425 = state;
(statearr_8419_8425[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_8420_8426 = state;
(statearr_8420_8426[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_8421_8427 = state;
(statearr_8421_8427[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8412){
var G__8413 = cljs.core.first(seq8412);
var seq8412__$1 = cljs.core.next(seq8412);
var G__8414 = cljs.core.first(seq8412__$1);
var seq8412__$2 = cljs.core.next(seq8412__$1);
var G__8415 = cljs.core.first(seq8412__$2);
var seq8412__$3 = cljs.core.next(seq8412__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8413,G__8414,G__8415,seq8412__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8428 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8429){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8429 = meta8429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8430,meta8429__$1){
var self__ = this;
var _8430__$1 = this;
return (new cljs.core.async.t_cljs$core$async8428(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8429__$1));
}));

(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8430){
var self__ = this;
var _8430__$1 = this;
return self__.meta8429;
}));

(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8428.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async8428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta8429], null);
}));

(cljs.core.async.t_cljs$core$async8428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8428");

(cljs.core.async.t_cljs$core$async8428.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async8428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8428.
 */
cljs.core.async.__GT_t_cljs$core$async8428 = (function cljs$core$async$mix_$___GT_t_cljs$core$async8428(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8429){
return (new cljs.core.async.t_cljs$core$async8428(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8429));
});

}

return (new cljs.core.async.t_cljs$core$async8428(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7531__auto___8592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_8532){
var state_val_8533 = (state_8532[(1)]);
if((state_val_8533 === (7))){
var inst_8447 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
var statearr_8534_8593 = state_8532__$1;
(statearr_8534_8593[(2)] = inst_8447);

(statearr_8534_8593[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (20))){
var inst_8459 = (state_8532[(7)]);
var state_8532__$1 = state_8532;
var statearr_8535_8594 = state_8532__$1;
(statearr_8535_8594[(2)] = inst_8459);

(statearr_8535_8594[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (27))){
var state_8532__$1 = state_8532;
var statearr_8536_8595 = state_8532__$1;
(statearr_8536_8595[(2)] = null);

(statearr_8536_8595[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (1))){
var inst_8434 = (state_8532[(8)]);
var inst_8434__$1 = calc_state();
var inst_8436 = (inst_8434__$1 == null);
var inst_8437 = cljs.core.not(inst_8436);
var state_8532__$1 = (function (){var statearr_8537 = state_8532;
(statearr_8537[(8)] = inst_8434__$1);

return statearr_8537;
})();
if(inst_8437){
var statearr_8538_8596 = state_8532__$1;
(statearr_8538_8596[(1)] = (2));

} else {
var statearr_8539_8597 = state_8532__$1;
(statearr_8539_8597[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (24))){
var inst_8506 = (state_8532[(9)]);
var inst_8492 = (state_8532[(10)]);
var inst_8483 = (state_8532[(11)]);
var inst_8506__$1 = (inst_8483.cljs$core$IFn$_invoke$arity$1 ? inst_8483.cljs$core$IFn$_invoke$arity$1(inst_8492) : inst_8483.call(null,inst_8492));
var state_8532__$1 = (function (){var statearr_8540 = state_8532;
(statearr_8540[(9)] = inst_8506__$1);

return statearr_8540;
})();
if(cljs.core.truth_(inst_8506__$1)){
var statearr_8541_8598 = state_8532__$1;
(statearr_8541_8598[(1)] = (29));

} else {
var statearr_8542_8599 = state_8532__$1;
(statearr_8542_8599[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (4))){
var inst_8450 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
if(cljs.core.truth_(inst_8450)){
var statearr_8543_8600 = state_8532__$1;
(statearr_8543_8600[(1)] = (8));

} else {
var statearr_8544_8601 = state_8532__$1;
(statearr_8544_8601[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (15))){
var inst_8477 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
if(cljs.core.truth_(inst_8477)){
var statearr_8545_8602 = state_8532__$1;
(statearr_8545_8602[(1)] = (19));

} else {
var statearr_8546_8603 = state_8532__$1;
(statearr_8546_8603[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (21))){
var inst_8482 = (state_8532[(12)]);
var inst_8482__$1 = (state_8532[(2)]);
var inst_8483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8482__$1,cljs.core.cst$kw$solos);
var inst_8484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8482__$1,cljs.core.cst$kw$mutes);
var inst_8485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8482__$1,cljs.core.cst$kw$reads);
var state_8532__$1 = (function (){var statearr_8547 = state_8532;
(statearr_8547[(13)] = inst_8484);

(statearr_8547[(12)] = inst_8482__$1);

(statearr_8547[(11)] = inst_8483);

return statearr_8547;
})();
return cljs.core.async.ioc_alts_BANG_(state_8532__$1,(22),inst_8485);
} else {
if((state_val_8533 === (31))){
var inst_8514 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
if(cljs.core.truth_(inst_8514)){
var statearr_8548_8604 = state_8532__$1;
(statearr_8548_8604[(1)] = (32));

} else {
var statearr_8549_8605 = state_8532__$1;
(statearr_8549_8605[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (32))){
var inst_8491 = (state_8532[(14)]);
var state_8532__$1 = state_8532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8532__$1,(35),out,inst_8491);
} else {
if((state_val_8533 === (33))){
var inst_8482 = (state_8532[(12)]);
var inst_8459 = inst_8482;
var state_8532__$1 = (function (){var statearr_8550 = state_8532;
(statearr_8550[(7)] = inst_8459);

return statearr_8550;
})();
var statearr_8551_8606 = state_8532__$1;
(statearr_8551_8606[(2)] = null);

(statearr_8551_8606[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (13))){
var inst_8459 = (state_8532[(7)]);
var inst_8466 = inst_8459.cljs$lang$protocol_mask$partition0$;
var inst_8467 = (inst_8466 & (64));
var inst_8468 = inst_8459.cljs$core$ISeq$;
var inst_8469 = (cljs.core.PROTOCOL_SENTINEL === inst_8468);
var inst_8470 = ((inst_8467) || (inst_8469));
var state_8532__$1 = state_8532;
if(cljs.core.truth_(inst_8470)){
var statearr_8552_8607 = state_8532__$1;
(statearr_8552_8607[(1)] = (16));

} else {
var statearr_8553_8608 = state_8532__$1;
(statearr_8553_8608[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (22))){
var inst_8491 = (state_8532[(14)]);
var inst_8492 = (state_8532[(10)]);
var inst_8490 = (state_8532[(2)]);
var inst_8491__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8490,(0),null);
var inst_8492__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8490,(1),null);
var inst_8493 = (inst_8491__$1 == null);
var inst_8494 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8492__$1,change);
var inst_8495 = ((inst_8493) || (inst_8494));
var state_8532__$1 = (function (){var statearr_8554 = state_8532;
(statearr_8554[(14)] = inst_8491__$1);

(statearr_8554[(10)] = inst_8492__$1);

return statearr_8554;
})();
if(cljs.core.truth_(inst_8495)){
var statearr_8555_8609 = state_8532__$1;
(statearr_8555_8609[(1)] = (23));

} else {
var statearr_8556_8610 = state_8532__$1;
(statearr_8556_8610[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (36))){
var inst_8482 = (state_8532[(12)]);
var inst_8459 = inst_8482;
var state_8532__$1 = (function (){var statearr_8557 = state_8532;
(statearr_8557[(7)] = inst_8459);

return statearr_8557;
})();
var statearr_8558_8611 = state_8532__$1;
(statearr_8558_8611[(2)] = null);

(statearr_8558_8611[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (29))){
var inst_8506 = (state_8532[(9)]);
var state_8532__$1 = state_8532;
var statearr_8559_8612 = state_8532__$1;
(statearr_8559_8612[(2)] = inst_8506);

(statearr_8559_8612[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (6))){
var state_8532__$1 = state_8532;
var statearr_8560_8613 = state_8532__$1;
(statearr_8560_8613[(2)] = false);

(statearr_8560_8613[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (28))){
var inst_8502 = (state_8532[(2)]);
var inst_8503 = calc_state();
var inst_8459 = inst_8503;
var state_8532__$1 = (function (){var statearr_8561 = state_8532;
(statearr_8561[(15)] = inst_8502);

(statearr_8561[(7)] = inst_8459);

return statearr_8561;
})();
var statearr_8562_8614 = state_8532__$1;
(statearr_8562_8614[(2)] = null);

(statearr_8562_8614[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (25))){
var inst_8528 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
var statearr_8563_8615 = state_8532__$1;
(statearr_8563_8615[(2)] = inst_8528);

(statearr_8563_8615[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (34))){
var inst_8526 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
var statearr_8564_8616 = state_8532__$1;
(statearr_8564_8616[(2)] = inst_8526);

(statearr_8564_8616[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (17))){
var state_8532__$1 = state_8532;
var statearr_8565_8617 = state_8532__$1;
(statearr_8565_8617[(2)] = false);

(statearr_8565_8617[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (3))){
var state_8532__$1 = state_8532;
var statearr_8566_8618 = state_8532__$1;
(statearr_8566_8618[(2)] = false);

(statearr_8566_8618[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (12))){
var inst_8530 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8532__$1,inst_8530);
} else {
if((state_val_8533 === (2))){
var inst_8434 = (state_8532[(8)]);
var inst_8439 = inst_8434.cljs$lang$protocol_mask$partition0$;
var inst_8440 = (inst_8439 & (64));
var inst_8441 = inst_8434.cljs$core$ISeq$;
var inst_8442 = (cljs.core.PROTOCOL_SENTINEL === inst_8441);
var inst_8443 = ((inst_8440) || (inst_8442));
var state_8532__$1 = state_8532;
if(cljs.core.truth_(inst_8443)){
var statearr_8567_8619 = state_8532__$1;
(statearr_8567_8619[(1)] = (5));

} else {
var statearr_8568_8620 = state_8532__$1;
(statearr_8568_8620[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (23))){
var inst_8491 = (state_8532[(14)]);
var inst_8497 = (inst_8491 == null);
var state_8532__$1 = state_8532;
if(cljs.core.truth_(inst_8497)){
var statearr_8569_8621 = state_8532__$1;
(statearr_8569_8621[(1)] = (26));

} else {
var statearr_8570_8622 = state_8532__$1;
(statearr_8570_8622[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (35))){
var inst_8517 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
if(cljs.core.truth_(inst_8517)){
var statearr_8571_8623 = state_8532__$1;
(statearr_8571_8623[(1)] = (36));

} else {
var statearr_8572_8624 = state_8532__$1;
(statearr_8572_8624[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (19))){
var inst_8459 = (state_8532[(7)]);
var inst_8479 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8459);
var state_8532__$1 = state_8532;
var statearr_8573_8625 = state_8532__$1;
(statearr_8573_8625[(2)] = inst_8479);

(statearr_8573_8625[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (11))){
var inst_8459 = (state_8532[(7)]);
var inst_8463 = (inst_8459 == null);
var inst_8464 = cljs.core.not(inst_8463);
var state_8532__$1 = state_8532;
if(inst_8464){
var statearr_8574_8626 = state_8532__$1;
(statearr_8574_8626[(1)] = (13));

} else {
var statearr_8575_8627 = state_8532__$1;
(statearr_8575_8627[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (9))){
var inst_8434 = (state_8532[(8)]);
var state_8532__$1 = state_8532;
var statearr_8576_8628 = state_8532__$1;
(statearr_8576_8628[(2)] = inst_8434);

(statearr_8576_8628[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (5))){
var state_8532__$1 = state_8532;
var statearr_8577_8629 = state_8532__$1;
(statearr_8577_8629[(2)] = true);

(statearr_8577_8629[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (14))){
var state_8532__$1 = state_8532;
var statearr_8578_8630 = state_8532__$1;
(statearr_8578_8630[(2)] = false);

(statearr_8578_8630[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (26))){
var inst_8492 = (state_8532[(10)]);
var inst_8499 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_8492);
var state_8532__$1 = state_8532;
var statearr_8579_8631 = state_8532__$1;
(statearr_8579_8631[(2)] = inst_8499);

(statearr_8579_8631[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (16))){
var state_8532__$1 = state_8532;
var statearr_8580_8632 = state_8532__$1;
(statearr_8580_8632[(2)] = true);

(statearr_8580_8632[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (38))){
var inst_8522 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
var statearr_8581_8633 = state_8532__$1;
(statearr_8581_8633[(2)] = inst_8522);

(statearr_8581_8633[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (30))){
var inst_8484 = (state_8532[(13)]);
var inst_8492 = (state_8532[(10)]);
var inst_8483 = (state_8532[(11)]);
var inst_8509 = cljs.core.empty_QMARK_(inst_8483);
var inst_8510 = (inst_8484.cljs$core$IFn$_invoke$arity$1 ? inst_8484.cljs$core$IFn$_invoke$arity$1(inst_8492) : inst_8484.call(null,inst_8492));
var inst_8511 = cljs.core.not(inst_8510);
var inst_8512 = ((inst_8509) && (inst_8511));
var state_8532__$1 = state_8532;
var statearr_8582_8634 = state_8532__$1;
(statearr_8582_8634[(2)] = inst_8512);

(statearr_8582_8634[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (10))){
var inst_8434 = (state_8532[(8)]);
var inst_8455 = (state_8532[(2)]);
var inst_8456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8455,cljs.core.cst$kw$solos);
var inst_8457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8455,cljs.core.cst$kw$mutes);
var inst_8458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8455,cljs.core.cst$kw$reads);
var inst_8459 = inst_8434;
var state_8532__$1 = (function (){var statearr_8583 = state_8532;
(statearr_8583[(16)] = inst_8456);

(statearr_8583[(17)] = inst_8458);

(statearr_8583[(7)] = inst_8459);

(statearr_8583[(18)] = inst_8457);

return statearr_8583;
})();
var statearr_8584_8635 = state_8532__$1;
(statearr_8584_8635[(2)] = null);

(statearr_8584_8635[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (18))){
var inst_8474 = (state_8532[(2)]);
var state_8532__$1 = state_8532;
var statearr_8585_8636 = state_8532__$1;
(statearr_8585_8636[(2)] = inst_8474);

(statearr_8585_8636[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (37))){
var state_8532__$1 = state_8532;
var statearr_8586_8637 = state_8532__$1;
(statearr_8586_8637[(2)] = null);

(statearr_8586_8637[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8533 === (8))){
var inst_8434 = (state_8532[(8)]);
var inst_8452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_8434);
var state_8532__$1 = state_8532;
var statearr_8587_8638 = state_8532__$1;
(statearr_8587_8638[(2)] = inst_8452);

(statearr_8587_8638[(1)] = (10));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$mix_$_state_machine__7425__auto__ = null;
var cljs$core$async$mix_$_state_machine__7425__auto____0 = (function (){
var statearr_8588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8588[(0)] = cljs$core$async$mix_$_state_machine__7425__auto__);

(statearr_8588[(1)] = (1));

return statearr_8588;
});
var cljs$core$async$mix_$_state_machine__7425__auto____1 = (function (state_8532){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_8532);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e8589){if((e8589 instanceof Object)){
var ex__7428__auto__ = e8589;
var statearr_8590_8639 = state_8532;
(statearr_8590_8639[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8532);

return cljs.core.cst$kw$recur;
} else {
throw e8589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__8640 = state_8532;
state_8532 = G__8640;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7425__auto__ = function(state_8532){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7425__auto____1.call(this,state_8532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7425__auto____0;
cljs$core$async$mix_$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7425__auto____1;
return cljs$core$async$mix_$_state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_8591 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_8591[(6)] = c__7531__auto___8592);

return statearr_8591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8642 = arguments.length;
switch (G__8642) {
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__8646 = arguments.length;
switch (G__8646) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__8644_SHARP_){
if(cljs.core.truth_((p1__8644_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8644_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__8644_SHARP_.call(null,topic)))){
return p1__8644_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__8644_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8647 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8648){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8648 = meta8648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8649,meta8648__$1){
var self__ = this;
var _8649__$1 = this;
return (new cljs.core.async.t_cljs$core$async8647(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8648__$1));
}));

(cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8649){
var self__ = this;
var _8649__$1 = this;
return self__.meta8648;
}));

(cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async8647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async8647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta8648], null);
}));

(cljs.core.async.t_cljs$core$async8647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async8647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8647");

(cljs.core.async.t_cljs$core$async8647.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async8647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8647.
 */
cljs.core.async.__GT_t_cljs$core$async8647 = (function cljs$core$async$__GT_t_cljs$core$async8647(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8648){
return (new cljs.core.async.t_cljs$core$async8647(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8648));
});

}

return (new cljs.core.async.t_cljs$core$async8647(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7531__auto___8767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_8721){
var state_val_8722 = (state_8721[(1)]);
if((state_val_8722 === (7))){
var inst_8717 = (state_8721[(2)]);
var state_8721__$1 = state_8721;
var statearr_8723_8768 = state_8721__$1;
(statearr_8723_8768[(2)] = inst_8717);

(statearr_8723_8768[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (20))){
var state_8721__$1 = state_8721;
var statearr_8724_8769 = state_8721__$1;
(statearr_8724_8769[(2)] = null);

(statearr_8724_8769[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (1))){
var state_8721__$1 = state_8721;
var statearr_8725_8770 = state_8721__$1;
(statearr_8725_8770[(2)] = null);

(statearr_8725_8770[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (24))){
var inst_8700 = (state_8721[(7)]);
var inst_8709 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_8700);
var state_8721__$1 = state_8721;
var statearr_8726_8771 = state_8721__$1;
(statearr_8726_8771[(2)] = inst_8709);

(statearr_8726_8771[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (4))){
var inst_8652 = (state_8721[(8)]);
var inst_8652__$1 = (state_8721[(2)]);
var inst_8653 = (inst_8652__$1 == null);
var state_8721__$1 = (function (){var statearr_8727 = state_8721;
(statearr_8727[(8)] = inst_8652__$1);

return statearr_8727;
})();
if(cljs.core.truth_(inst_8653)){
var statearr_8728_8772 = state_8721__$1;
(statearr_8728_8772[(1)] = (5));

} else {
var statearr_8729_8773 = state_8721__$1;
(statearr_8729_8773[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (15))){
var inst_8694 = (state_8721[(2)]);
var state_8721__$1 = state_8721;
var statearr_8730_8774 = state_8721__$1;
(statearr_8730_8774[(2)] = inst_8694);

(statearr_8730_8774[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (21))){
var inst_8714 = (state_8721[(2)]);
var state_8721__$1 = (function (){var statearr_8731 = state_8721;
(statearr_8731[(9)] = inst_8714);

return statearr_8731;
})();
var statearr_8732_8775 = state_8721__$1;
(statearr_8732_8775[(2)] = null);

(statearr_8732_8775[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (13))){
var inst_8676 = (state_8721[(10)]);
var inst_8678 = cljs.core.chunked_seq_QMARK_(inst_8676);
var state_8721__$1 = state_8721;
if(inst_8678){
var statearr_8733_8776 = state_8721__$1;
(statearr_8733_8776[(1)] = (16));

} else {
var statearr_8734_8777 = state_8721__$1;
(statearr_8734_8777[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (22))){
var inst_8706 = (state_8721[(2)]);
var state_8721__$1 = state_8721;
if(cljs.core.truth_(inst_8706)){
var statearr_8735_8778 = state_8721__$1;
(statearr_8735_8778[(1)] = (23));

} else {
var statearr_8736_8779 = state_8721__$1;
(statearr_8736_8779[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (6))){
var inst_8700 = (state_8721[(7)]);
var inst_8702 = (state_8721[(11)]);
var inst_8652 = (state_8721[(8)]);
var inst_8700__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_8652) : topic_fn.call(null,inst_8652));
var inst_8701 = cljs.core.deref(mults);
var inst_8702__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_8701,inst_8700__$1);
var state_8721__$1 = (function (){var statearr_8737 = state_8721;
(statearr_8737[(7)] = inst_8700__$1);

(statearr_8737[(11)] = inst_8702__$1);

return statearr_8737;
})();
if(cljs.core.truth_(inst_8702__$1)){
var statearr_8738_8780 = state_8721__$1;
(statearr_8738_8780[(1)] = (19));

} else {
var statearr_8739_8781 = state_8721__$1;
(statearr_8739_8781[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (25))){
var inst_8711 = (state_8721[(2)]);
var state_8721__$1 = state_8721;
var statearr_8740_8782 = state_8721__$1;
(statearr_8740_8782[(2)] = inst_8711);

(statearr_8740_8782[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (17))){
var inst_8676 = (state_8721[(10)]);
var inst_8685 = cljs.core.first(inst_8676);
var inst_8686 = cljs.core.async.muxch_STAR_(inst_8685);
var inst_8687 = cljs.core.async.close_BANG_(inst_8686);
var inst_8688 = cljs.core.next(inst_8676);
var inst_8662 = inst_8688;
var inst_8663 = null;
var inst_8664 = (0);
var inst_8665 = (0);
var state_8721__$1 = (function (){var statearr_8741 = state_8721;
(statearr_8741[(12)] = inst_8664);

(statearr_8741[(13)] = inst_8662);

(statearr_8741[(14)] = inst_8665);

(statearr_8741[(15)] = inst_8663);

(statearr_8741[(16)] = inst_8687);

return statearr_8741;
})();
var statearr_8742_8783 = state_8721__$1;
(statearr_8742_8783[(2)] = null);

(statearr_8742_8783[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (3))){
var inst_8719 = (state_8721[(2)]);
var state_8721__$1 = state_8721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8721__$1,inst_8719);
} else {
if((state_val_8722 === (12))){
var inst_8696 = (state_8721[(2)]);
var state_8721__$1 = state_8721;
var statearr_8743_8784 = state_8721__$1;
(statearr_8743_8784[(2)] = inst_8696);

(statearr_8743_8784[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (2))){
var state_8721__$1 = state_8721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8721__$1,(4),ch);
} else {
if((state_val_8722 === (23))){
var state_8721__$1 = state_8721;
var statearr_8744_8785 = state_8721__$1;
(statearr_8744_8785[(2)] = null);

(statearr_8744_8785[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (19))){
var inst_8702 = (state_8721[(11)]);
var inst_8652 = (state_8721[(8)]);
var inst_8704 = cljs.core.async.muxch_STAR_(inst_8702);
var state_8721__$1 = state_8721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8721__$1,(22),inst_8704,inst_8652);
} else {
if((state_val_8722 === (11))){
var inst_8662 = (state_8721[(13)]);
var inst_8676 = (state_8721[(10)]);
var inst_8676__$1 = cljs.core.seq(inst_8662);
var state_8721__$1 = (function (){var statearr_8745 = state_8721;
(statearr_8745[(10)] = inst_8676__$1);

return statearr_8745;
})();
if(inst_8676__$1){
var statearr_8746_8786 = state_8721__$1;
(statearr_8746_8786[(1)] = (13));

} else {
var statearr_8747_8787 = state_8721__$1;
(statearr_8747_8787[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (9))){
var inst_8698 = (state_8721[(2)]);
var state_8721__$1 = state_8721;
var statearr_8748_8788 = state_8721__$1;
(statearr_8748_8788[(2)] = inst_8698);

(statearr_8748_8788[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (5))){
var inst_8659 = cljs.core.deref(mults);
var inst_8660 = cljs.core.vals(inst_8659);
var inst_8661 = cljs.core.seq(inst_8660);
var inst_8662 = inst_8661;
var inst_8663 = null;
var inst_8664 = (0);
var inst_8665 = (0);
var state_8721__$1 = (function (){var statearr_8749 = state_8721;
(statearr_8749[(12)] = inst_8664);

(statearr_8749[(13)] = inst_8662);

(statearr_8749[(14)] = inst_8665);

(statearr_8749[(15)] = inst_8663);

return statearr_8749;
})();
var statearr_8750_8789 = state_8721__$1;
(statearr_8750_8789[(2)] = null);

(statearr_8750_8789[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (14))){
var state_8721__$1 = state_8721;
var statearr_8754_8790 = state_8721__$1;
(statearr_8754_8790[(2)] = null);

(statearr_8754_8790[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (16))){
var inst_8676 = (state_8721[(10)]);
var inst_8680 = cljs.core.chunk_first(inst_8676);
var inst_8681 = cljs.core.chunk_rest(inst_8676);
var inst_8682 = cljs.core.count(inst_8680);
var inst_8662 = inst_8681;
var inst_8663 = inst_8680;
var inst_8664 = inst_8682;
var inst_8665 = (0);
var state_8721__$1 = (function (){var statearr_8755 = state_8721;
(statearr_8755[(12)] = inst_8664);

(statearr_8755[(13)] = inst_8662);

(statearr_8755[(14)] = inst_8665);

(statearr_8755[(15)] = inst_8663);

return statearr_8755;
})();
var statearr_8756_8791 = state_8721__$1;
(statearr_8756_8791[(2)] = null);

(statearr_8756_8791[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (10))){
var inst_8664 = (state_8721[(12)]);
var inst_8662 = (state_8721[(13)]);
var inst_8665 = (state_8721[(14)]);
var inst_8663 = (state_8721[(15)]);
var inst_8670 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_8663,inst_8665);
var inst_8671 = cljs.core.async.muxch_STAR_(inst_8670);
var inst_8672 = cljs.core.async.close_BANG_(inst_8671);
var inst_8673 = (inst_8665 + (1));
var tmp8751 = inst_8664;
var tmp8752 = inst_8662;
var tmp8753 = inst_8663;
var inst_8662__$1 = tmp8752;
var inst_8663__$1 = tmp8753;
var inst_8664__$1 = tmp8751;
var inst_8665__$1 = inst_8673;
var state_8721__$1 = (function (){var statearr_8757 = state_8721;
(statearr_8757[(17)] = inst_8672);

(statearr_8757[(12)] = inst_8664__$1);

(statearr_8757[(13)] = inst_8662__$1);

(statearr_8757[(14)] = inst_8665__$1);

(statearr_8757[(15)] = inst_8663__$1);

return statearr_8757;
})();
var statearr_8758_8792 = state_8721__$1;
(statearr_8758_8792[(2)] = null);

(statearr_8758_8792[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (18))){
var inst_8691 = (state_8721[(2)]);
var state_8721__$1 = state_8721;
var statearr_8759_8793 = state_8721__$1;
(statearr_8759_8793[(2)] = inst_8691);

(statearr_8759_8793[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8722 === (8))){
var inst_8664 = (state_8721[(12)]);
var inst_8665 = (state_8721[(14)]);
var inst_8667 = (inst_8665 < inst_8664);
var inst_8668 = inst_8667;
var state_8721__$1 = state_8721;
if(cljs.core.truth_(inst_8668)){
var statearr_8760_8794 = state_8721__$1;
(statearr_8760_8794[(1)] = (10));

} else {
var statearr_8761_8795 = state_8721__$1;
(statearr_8761_8795[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_8762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8762[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_8762[(1)] = (1));

return statearr_8762;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_8721){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_8721);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e8763){if((e8763 instanceof Object)){
var ex__7428__auto__ = e8763;
var statearr_8764_8796 = state_8721;
(statearr_8764_8796[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8721);

return cljs.core.cst$kw$recur;
} else {
throw e8763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__8797 = state_8721;
state_8721 = G__8797;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_8721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_8721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_8765 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_8765[(6)] = c__7531__auto___8767);

return statearr_8765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
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
var G__8799 = arguments.length;
switch (G__8799) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__8802 = arguments.length;
switch (G__8802) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__8805 = arguments.length;
switch (G__8805) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__7531__auto___8872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_8844){
var state_val_8845 = (state_8844[(1)]);
if((state_val_8845 === (7))){
var state_8844__$1 = state_8844;
var statearr_8846_8873 = state_8844__$1;
(statearr_8846_8873[(2)] = null);

(statearr_8846_8873[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (1))){
var state_8844__$1 = state_8844;
var statearr_8847_8874 = state_8844__$1;
(statearr_8847_8874[(2)] = null);

(statearr_8847_8874[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (4))){
var inst_8808 = (state_8844[(7)]);
var inst_8810 = (inst_8808 < cnt);
var state_8844__$1 = state_8844;
if(cljs.core.truth_(inst_8810)){
var statearr_8848_8875 = state_8844__$1;
(statearr_8848_8875[(1)] = (6));

} else {
var statearr_8849_8876 = state_8844__$1;
(statearr_8849_8876[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (15))){
var inst_8840 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
var statearr_8850_8877 = state_8844__$1;
(statearr_8850_8877[(2)] = inst_8840);

(statearr_8850_8877[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (13))){
var inst_8833 = cljs.core.async.close_BANG_(out);
var state_8844__$1 = state_8844;
var statearr_8851_8878 = state_8844__$1;
(statearr_8851_8878[(2)] = inst_8833);

(statearr_8851_8878[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (6))){
var state_8844__$1 = state_8844;
var statearr_8852_8879 = state_8844__$1;
(statearr_8852_8879[(2)] = null);

(statearr_8852_8879[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (3))){
var inst_8842 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8844__$1,inst_8842);
} else {
if((state_val_8845 === (12))){
var inst_8830 = (state_8844[(8)]);
var inst_8830__$1 = (state_8844[(2)]);
var inst_8831 = cljs.core.some(cljs.core.nil_QMARK_,inst_8830__$1);
var state_8844__$1 = (function (){var statearr_8853 = state_8844;
(statearr_8853[(8)] = inst_8830__$1);

return statearr_8853;
})();
if(cljs.core.truth_(inst_8831)){
var statearr_8854_8880 = state_8844__$1;
(statearr_8854_8880[(1)] = (13));

} else {
var statearr_8855_8881 = state_8844__$1;
(statearr_8855_8881[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (2))){
var inst_8807 = cljs.core.reset_BANG_(dctr,cnt);
var inst_8808 = (0);
var state_8844__$1 = (function (){var statearr_8856 = state_8844;
(statearr_8856[(7)] = inst_8808);

(statearr_8856[(9)] = inst_8807);

return statearr_8856;
})();
var statearr_8857_8882 = state_8844__$1;
(statearr_8857_8882[(2)] = null);

(statearr_8857_8882[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (11))){
var inst_8808 = (state_8844[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_8844,(10),Object,null,(9));
var inst_8817 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_8808) : chs__$1.call(null,inst_8808));
var inst_8818 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_8808) : done.call(null,inst_8808));
var inst_8819 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_8817,inst_8818);
var state_8844__$1 = state_8844;
var statearr_8858_8883 = state_8844__$1;
(statearr_8858_8883[(2)] = inst_8819);


cljs.core.async.impl.ioc_helpers.process_exception(state_8844__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (9))){
var inst_8808 = (state_8844[(7)]);
var inst_8821 = (state_8844[(2)]);
var inst_8822 = (inst_8808 + (1));
var inst_8808__$1 = inst_8822;
var state_8844__$1 = (function (){var statearr_8859 = state_8844;
(statearr_8859[(7)] = inst_8808__$1);

(statearr_8859[(10)] = inst_8821);

return statearr_8859;
})();
var statearr_8860_8884 = state_8844__$1;
(statearr_8860_8884[(2)] = null);

(statearr_8860_8884[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (5))){
var inst_8828 = (state_8844[(2)]);
var state_8844__$1 = (function (){var statearr_8861 = state_8844;
(statearr_8861[(11)] = inst_8828);

return statearr_8861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8844__$1,(12),dchan);
} else {
if((state_val_8845 === (14))){
var inst_8830 = (state_8844[(8)]);
var inst_8835 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_8830);
var state_8844__$1 = state_8844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8844__$1,(16),out,inst_8835);
} else {
if((state_val_8845 === (16))){
var inst_8837 = (state_8844[(2)]);
var state_8844__$1 = (function (){var statearr_8862 = state_8844;
(statearr_8862[(12)] = inst_8837);

return statearr_8862;
})();
var statearr_8863_8885 = state_8844__$1;
(statearr_8863_8885[(2)] = null);

(statearr_8863_8885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (10))){
var inst_8812 = (state_8844[(2)]);
var inst_8813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_8844__$1 = (function (){var statearr_8864 = state_8844;
(statearr_8864[(13)] = inst_8812);

return statearr_8864;
})();
var statearr_8865_8886 = state_8844__$1;
(statearr_8865_8886[(2)] = inst_8813);


cljs.core.async.impl.ioc_helpers.process_exception(state_8844__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_8845 === (8))){
var inst_8826 = (state_8844[(2)]);
var state_8844__$1 = state_8844;
var statearr_8866_8887 = state_8844__$1;
(statearr_8866_8887[(2)] = inst_8826);

(statearr_8866_8887[(1)] = (5));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_8867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8867[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_8867[(1)] = (1));

return statearr_8867;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_8844){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_8844);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e8868){if((e8868 instanceof Object)){
var ex__7428__auto__ = e8868;
var statearr_8869_8888 = state_8844;
(statearr_8869_8888[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8844);

return cljs.core.cst$kw$recur;
} else {
throw e8868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__8889 = state_8844;
state_8844 = G__8889;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_8844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_8844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_8870 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_8870[(6)] = c__7531__auto___8872);

return statearr_8870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
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
var G__8892 = arguments.length;
switch (G__8892) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7531__auto___8946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_8924){
var state_val_8925 = (state_8924[(1)]);
if((state_val_8925 === (7))){
var inst_8904 = (state_8924[(7)]);
var inst_8903 = (state_8924[(8)]);
var inst_8903__$1 = (state_8924[(2)]);
var inst_8904__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8903__$1,(0),null);
var inst_8905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8903__$1,(1),null);
var inst_8906 = (inst_8904__$1 == null);
var state_8924__$1 = (function (){var statearr_8926 = state_8924;
(statearr_8926[(7)] = inst_8904__$1);

(statearr_8926[(9)] = inst_8905);

(statearr_8926[(8)] = inst_8903__$1);

return statearr_8926;
})();
if(cljs.core.truth_(inst_8906)){
var statearr_8927_8947 = state_8924__$1;
(statearr_8927_8947[(1)] = (8));

} else {
var statearr_8928_8948 = state_8924__$1;
(statearr_8928_8948[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8925 === (1))){
var inst_8893 = cljs.core.vec(chs);
var inst_8894 = inst_8893;
var state_8924__$1 = (function (){var statearr_8929 = state_8924;
(statearr_8929[(10)] = inst_8894);

return statearr_8929;
})();
var statearr_8930_8949 = state_8924__$1;
(statearr_8930_8949[(2)] = null);

(statearr_8930_8949[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8925 === (4))){
var inst_8894 = (state_8924[(10)]);
var state_8924__$1 = state_8924;
return cljs.core.async.ioc_alts_BANG_(state_8924__$1,(7),inst_8894);
} else {
if((state_val_8925 === (6))){
var inst_8920 = (state_8924[(2)]);
var state_8924__$1 = state_8924;
var statearr_8931_8950 = state_8924__$1;
(statearr_8931_8950[(2)] = inst_8920);

(statearr_8931_8950[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8925 === (3))){
var inst_8922 = (state_8924[(2)]);
var state_8924__$1 = state_8924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8924__$1,inst_8922);
} else {
if((state_val_8925 === (2))){
var inst_8894 = (state_8924[(10)]);
var inst_8896 = cljs.core.count(inst_8894);
var inst_8897 = (inst_8896 > (0));
var state_8924__$1 = state_8924;
if(cljs.core.truth_(inst_8897)){
var statearr_8933_8951 = state_8924__$1;
(statearr_8933_8951[(1)] = (4));

} else {
var statearr_8934_8952 = state_8924__$1;
(statearr_8934_8952[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8925 === (11))){
var inst_8894 = (state_8924[(10)]);
var inst_8913 = (state_8924[(2)]);
var tmp8932 = inst_8894;
var inst_8894__$1 = tmp8932;
var state_8924__$1 = (function (){var statearr_8935 = state_8924;
(statearr_8935[(11)] = inst_8913);

(statearr_8935[(10)] = inst_8894__$1);

return statearr_8935;
})();
var statearr_8936_8953 = state_8924__$1;
(statearr_8936_8953[(2)] = null);

(statearr_8936_8953[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8925 === (9))){
var inst_8904 = (state_8924[(7)]);
var state_8924__$1 = state_8924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8924__$1,(11),out,inst_8904);
} else {
if((state_val_8925 === (5))){
var inst_8918 = cljs.core.async.close_BANG_(out);
var state_8924__$1 = state_8924;
var statearr_8937_8954 = state_8924__$1;
(statearr_8937_8954[(2)] = inst_8918);

(statearr_8937_8954[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8925 === (10))){
var inst_8916 = (state_8924[(2)]);
var state_8924__$1 = state_8924;
var statearr_8938_8955 = state_8924__$1;
(statearr_8938_8955[(2)] = inst_8916);

(statearr_8938_8955[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8925 === (8))){
var inst_8904 = (state_8924[(7)]);
var inst_8905 = (state_8924[(9)]);
var inst_8894 = (state_8924[(10)]);
var inst_8903 = (state_8924[(8)]);
var inst_8908 = (function (){var cs = inst_8894;
var vec__8899 = inst_8903;
var v = inst_8904;
var c = inst_8905;
return (function (p1__8890_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__8890_SHARP_);
});
})();
var inst_8909 = cljs.core.filterv(inst_8908,inst_8894);
var inst_8894__$1 = inst_8909;
var state_8924__$1 = (function (){var statearr_8939 = state_8924;
(statearr_8939[(10)] = inst_8894__$1);

return statearr_8939;
})();
var statearr_8940_8956 = state_8924__$1;
(statearr_8940_8956[(2)] = null);

(statearr_8940_8956[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_8941 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8941[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_8941[(1)] = (1));

return statearr_8941;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_8924){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_8924);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e8942){if((e8942 instanceof Object)){
var ex__7428__auto__ = e8942;
var statearr_8943_8957 = state_8924;
(statearr_8943_8957[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8924);

return cljs.core.cst$kw$recur;
} else {
throw e8942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__8958 = state_8924;
state_8924 = G__8958;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_8924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_8924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_8944 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_8944[(6)] = c__7531__auto___8946);

return statearr_8944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__8960 = arguments.length;
switch (G__8960) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7531__auto___9005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_8984){
var state_val_8985 = (state_8984[(1)]);
if((state_val_8985 === (7))){
var inst_8966 = (state_8984[(7)]);
var inst_8966__$1 = (state_8984[(2)]);
var inst_8967 = (inst_8966__$1 == null);
var inst_8968 = cljs.core.not(inst_8967);
var state_8984__$1 = (function (){var statearr_8986 = state_8984;
(statearr_8986[(7)] = inst_8966__$1);

return statearr_8986;
})();
if(inst_8968){
var statearr_8987_9006 = state_8984__$1;
(statearr_8987_9006[(1)] = (8));

} else {
var statearr_8988_9007 = state_8984__$1;
(statearr_8988_9007[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8985 === (1))){
var inst_8961 = (0);
var state_8984__$1 = (function (){var statearr_8989 = state_8984;
(statearr_8989[(8)] = inst_8961);

return statearr_8989;
})();
var statearr_8990_9008 = state_8984__$1;
(statearr_8990_9008[(2)] = null);

(statearr_8990_9008[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8985 === (4))){
var state_8984__$1 = state_8984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8984__$1,(7),ch);
} else {
if((state_val_8985 === (6))){
var inst_8979 = (state_8984[(2)]);
var state_8984__$1 = state_8984;
var statearr_8991_9009 = state_8984__$1;
(statearr_8991_9009[(2)] = inst_8979);

(statearr_8991_9009[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8985 === (3))){
var inst_8981 = (state_8984[(2)]);
var inst_8982 = cljs.core.async.close_BANG_(out);
var state_8984__$1 = (function (){var statearr_8992 = state_8984;
(statearr_8992[(9)] = inst_8981);

return statearr_8992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8984__$1,inst_8982);
} else {
if((state_val_8985 === (2))){
var inst_8961 = (state_8984[(8)]);
var inst_8963 = (inst_8961 < n);
var state_8984__$1 = state_8984;
if(cljs.core.truth_(inst_8963)){
var statearr_8993_9010 = state_8984__$1;
(statearr_8993_9010[(1)] = (4));

} else {
var statearr_8994_9011 = state_8984__$1;
(statearr_8994_9011[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_8985 === (11))){
var inst_8961 = (state_8984[(8)]);
var inst_8971 = (state_8984[(2)]);
var inst_8972 = (inst_8961 + (1));
var inst_8961__$1 = inst_8972;
var state_8984__$1 = (function (){var statearr_8995 = state_8984;
(statearr_8995[(10)] = inst_8971);

(statearr_8995[(8)] = inst_8961__$1);

return statearr_8995;
})();
var statearr_8996_9012 = state_8984__$1;
(statearr_8996_9012[(2)] = null);

(statearr_8996_9012[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8985 === (9))){
var state_8984__$1 = state_8984;
var statearr_8997_9013 = state_8984__$1;
(statearr_8997_9013[(2)] = null);

(statearr_8997_9013[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8985 === (5))){
var state_8984__$1 = state_8984;
var statearr_8998_9014 = state_8984__$1;
(statearr_8998_9014[(2)] = null);

(statearr_8998_9014[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8985 === (10))){
var inst_8976 = (state_8984[(2)]);
var state_8984__$1 = state_8984;
var statearr_8999_9015 = state_8984__$1;
(statearr_8999_9015[(2)] = inst_8976);

(statearr_8999_9015[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_8985 === (8))){
var inst_8966 = (state_8984[(7)]);
var state_8984__$1 = state_8984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8984__$1,(11),out,inst_8966);
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_9000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9000[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_9000[(1)] = (1));

return statearr_9000;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_8984){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_8984);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e9001){if((e9001 instanceof Object)){
var ex__7428__auto__ = e9001;
var statearr_9002_9016 = state_8984;
(statearr_9002_9016[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8984);

return cljs.core.cst$kw$recur;
} else {
throw e9001;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__9017 = state_8984;
state_8984 = G__9017;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_8984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_8984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_9003 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_9003[(6)] = c__7531__auto___9005);

return statearr_9003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9019 = (function (f,ch,meta9020){
this.f = f;
this.ch = ch;
this.meta9020 = meta9020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9021,meta9020__$1){
var self__ = this;
var _9021__$1 = this;
return (new cljs.core.async.t_cljs$core$async9019(self__.f,self__.ch,meta9020__$1));
}));

(cljs.core.async.t_cljs$core$async9019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9021){
var self__ = this;
var _9021__$1 = this;
return self__.meta9020;
}));

(cljs.core.async.t_cljs$core$async9019.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9019.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9022 = (function (f,ch,meta9020,_,fn1,meta9023){
this.f = f;
this.ch = ch;
this.meta9020 = meta9020;
this._ = _;
this.fn1 = fn1;
this.meta9023 = meta9023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9024,meta9023__$1){
var self__ = this;
var _9024__$1 = this;
return (new cljs.core.async.t_cljs$core$async9022(self__.f,self__.ch,self__.meta9020,self__._,self__.fn1,meta9023__$1));
}));

(cljs.core.async.t_cljs$core$async9022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9024){
var self__ = this;
var _9024__$1 = this;
return self__.meta9023;
}));

(cljs.core.async.t_cljs$core$async9022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async9022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__9018_SHARP_){
var G__9025 = (((p1__9018_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__9018_SHARP_) : self__.f.call(null,p1__9018_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__9025) : f1.call(null,G__9025));
});
}));

(cljs.core.async.t_cljs$core$async9022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9020,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async9019], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta9023], null);
}));

(cljs.core.async.t_cljs$core$async9022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9022");

(cljs.core.async.t_cljs$core$async9022.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async9022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9022.
 */
cljs.core.async.__GT_t_cljs$core$async9022 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9022(f__$1,ch__$1,meta9020__$1,___$2,fn1__$1,meta9023){
return (new cljs.core.async.t_cljs$core$async9022(f__$1,ch__$1,meta9020__$1,___$2,fn1__$1,meta9023));
});

}

return (new cljs.core.async.t_cljs$core$async9022(self__.f,self__.ch,self__.meta9020,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__9026 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__9026) : self__.f.call(null,G__9026));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async9019.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async9019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9020], null);
}));

(cljs.core.async.t_cljs$core$async9019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9019");

(cljs.core.async.t_cljs$core$async9019.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async9019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9019.
 */
cljs.core.async.__GT_t_cljs$core$async9019 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9019(f__$1,ch__$1,meta9020){
return (new cljs.core.async.t_cljs$core$async9019(f__$1,ch__$1,meta9020));
});

}

return (new cljs.core.async.t_cljs$core$async9019(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9027 = (function (f,ch,meta9028){
this.f = f;
this.ch = ch;
this.meta9028 = meta9028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9029,meta9028__$1){
var self__ = this;
var _9029__$1 = this;
return (new cljs.core.async.t_cljs$core$async9027(self__.f,self__.ch,meta9028__$1));
}));

(cljs.core.async.t_cljs$core$async9027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9029){
var self__ = this;
var _9029__$1 = this;
return self__.meta9028;
}));

(cljs.core.async.t_cljs$core$async9027.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9027.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async9027.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async9027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9028], null);
}));

(cljs.core.async.t_cljs$core$async9027.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9027");

(cljs.core.async.t_cljs$core$async9027.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async9027");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9027.
 */
cljs.core.async.__GT_t_cljs$core$async9027 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9027(f__$1,ch__$1,meta9028){
return (new cljs.core.async.t_cljs$core$async9027(f__$1,ch__$1,meta9028));
});

}

return (new cljs.core.async.t_cljs$core$async9027(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9030 = (function (p,ch,meta9031){
this.p = p;
this.ch = ch;
this.meta9031 = meta9031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9032,meta9031__$1){
var self__ = this;
var _9032__$1 = this;
return (new cljs.core.async.t_cljs$core$async9030(self__.p,self__.ch,meta9031__$1));
}));

(cljs.core.async.t_cljs$core$async9030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9032){
var self__ = this;
var _9032__$1 = this;
return self__.meta9031;
}));

(cljs.core.async.t_cljs$core$async9030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async9030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async9030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async9030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta9031], null);
}));

(cljs.core.async.t_cljs$core$async9030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9030");

(cljs.core.async.t_cljs$core$async9030.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async9030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9030.
 */
cljs.core.async.__GT_t_cljs$core$async9030 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9030(p__$1,ch__$1,meta9031){
return (new cljs.core.async.t_cljs$core$async9030(p__$1,ch__$1,meta9031));
});

}

return (new cljs.core.async.t_cljs$core$async9030(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__9034 = arguments.length;
switch (G__9034) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7531__auto___9074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_9055){
var state_val_9056 = (state_9055[(1)]);
if((state_val_9056 === (7))){
var inst_9051 = (state_9055[(2)]);
var state_9055__$1 = state_9055;
var statearr_9057_9075 = state_9055__$1;
(statearr_9057_9075[(2)] = inst_9051);

(statearr_9057_9075[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9056 === (1))){
var state_9055__$1 = state_9055;
var statearr_9058_9076 = state_9055__$1;
(statearr_9058_9076[(2)] = null);

(statearr_9058_9076[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9056 === (4))){
var inst_9037 = (state_9055[(7)]);
var inst_9037__$1 = (state_9055[(2)]);
var inst_9038 = (inst_9037__$1 == null);
var state_9055__$1 = (function (){var statearr_9059 = state_9055;
(statearr_9059[(7)] = inst_9037__$1);

return statearr_9059;
})();
if(cljs.core.truth_(inst_9038)){
var statearr_9060_9077 = state_9055__$1;
(statearr_9060_9077[(1)] = (5));

} else {
var statearr_9061_9078 = state_9055__$1;
(statearr_9061_9078[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9056 === (6))){
var inst_9037 = (state_9055[(7)]);
var inst_9042 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9037) : p.call(null,inst_9037));
var state_9055__$1 = state_9055;
if(cljs.core.truth_(inst_9042)){
var statearr_9062_9079 = state_9055__$1;
(statearr_9062_9079[(1)] = (8));

} else {
var statearr_9063_9080 = state_9055__$1;
(statearr_9063_9080[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9056 === (3))){
var inst_9053 = (state_9055[(2)]);
var state_9055__$1 = state_9055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9055__$1,inst_9053);
} else {
if((state_val_9056 === (2))){
var state_9055__$1 = state_9055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9055__$1,(4),ch);
} else {
if((state_val_9056 === (11))){
var inst_9045 = (state_9055[(2)]);
var state_9055__$1 = state_9055;
var statearr_9064_9081 = state_9055__$1;
(statearr_9064_9081[(2)] = inst_9045);

(statearr_9064_9081[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9056 === (9))){
var state_9055__$1 = state_9055;
var statearr_9065_9082 = state_9055__$1;
(statearr_9065_9082[(2)] = null);

(statearr_9065_9082[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9056 === (5))){
var inst_9040 = cljs.core.async.close_BANG_(out);
var state_9055__$1 = state_9055;
var statearr_9066_9083 = state_9055__$1;
(statearr_9066_9083[(2)] = inst_9040);

(statearr_9066_9083[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9056 === (10))){
var inst_9048 = (state_9055[(2)]);
var state_9055__$1 = (function (){var statearr_9067 = state_9055;
(statearr_9067[(8)] = inst_9048);

return statearr_9067;
})();
var statearr_9068_9084 = state_9055__$1;
(statearr_9068_9084[(2)] = null);

(statearr_9068_9084[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9056 === (8))){
var inst_9037 = (state_9055[(7)]);
var state_9055__$1 = state_9055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9055__$1,(11),out,inst_9037);
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_9069 = [null,null,null,null,null,null,null,null,null];
(statearr_9069[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_9069[(1)] = (1));

return statearr_9069;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_9055){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_9055);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e9070){if((e9070 instanceof Object)){
var ex__7428__auto__ = e9070;
var statearr_9071_9085 = state_9055;
(statearr_9071_9085[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9055);

return cljs.core.cst$kw$recur;
} else {
throw e9070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__9086 = state_9055;
state_9055 = G__9086;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_9055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_9055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_9072 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_9072[(6)] = c__7531__auto___9074);

return statearr_9072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__9088 = arguments.length;
switch (G__9088) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7531__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_9151){
var state_val_9152 = (state_9151[(1)]);
if((state_val_9152 === (7))){
var inst_9147 = (state_9151[(2)]);
var state_9151__$1 = state_9151;
var statearr_9153_9191 = state_9151__$1;
(statearr_9153_9191[(2)] = inst_9147);

(statearr_9153_9191[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (20))){
var inst_9117 = (state_9151[(7)]);
var inst_9128 = (state_9151[(2)]);
var inst_9129 = cljs.core.next(inst_9117);
var inst_9103 = inst_9129;
var inst_9104 = null;
var inst_9105 = (0);
var inst_9106 = (0);
var state_9151__$1 = (function (){var statearr_9154 = state_9151;
(statearr_9154[(8)] = inst_9105);

(statearr_9154[(9)] = inst_9106);

(statearr_9154[(10)] = inst_9103);

(statearr_9154[(11)] = inst_9128);

(statearr_9154[(12)] = inst_9104);

return statearr_9154;
})();
var statearr_9155_9192 = state_9151__$1;
(statearr_9155_9192[(2)] = null);

(statearr_9155_9192[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (1))){
var state_9151__$1 = state_9151;
var statearr_9156_9193 = state_9151__$1;
(statearr_9156_9193[(2)] = null);

(statearr_9156_9193[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (4))){
var inst_9092 = (state_9151[(13)]);
var inst_9092__$1 = (state_9151[(2)]);
var inst_9093 = (inst_9092__$1 == null);
var state_9151__$1 = (function (){var statearr_9157 = state_9151;
(statearr_9157[(13)] = inst_9092__$1);

return statearr_9157;
})();
if(cljs.core.truth_(inst_9093)){
var statearr_9158_9194 = state_9151__$1;
(statearr_9158_9194[(1)] = (5));

} else {
var statearr_9159_9195 = state_9151__$1;
(statearr_9159_9195[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (15))){
var state_9151__$1 = state_9151;
var statearr_9163_9196 = state_9151__$1;
(statearr_9163_9196[(2)] = null);

(statearr_9163_9196[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (21))){
var state_9151__$1 = state_9151;
var statearr_9164_9197 = state_9151__$1;
(statearr_9164_9197[(2)] = null);

(statearr_9164_9197[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (13))){
var inst_9105 = (state_9151[(8)]);
var inst_9106 = (state_9151[(9)]);
var inst_9103 = (state_9151[(10)]);
var inst_9104 = (state_9151[(12)]);
var inst_9113 = (state_9151[(2)]);
var inst_9114 = (inst_9106 + (1));
var tmp9160 = inst_9105;
var tmp9161 = inst_9103;
var tmp9162 = inst_9104;
var inst_9103__$1 = tmp9161;
var inst_9104__$1 = tmp9162;
var inst_9105__$1 = tmp9160;
var inst_9106__$1 = inst_9114;
var state_9151__$1 = (function (){var statearr_9165 = state_9151;
(statearr_9165[(14)] = inst_9113);

(statearr_9165[(8)] = inst_9105__$1);

(statearr_9165[(9)] = inst_9106__$1);

(statearr_9165[(10)] = inst_9103__$1);

(statearr_9165[(12)] = inst_9104__$1);

return statearr_9165;
})();
var statearr_9166_9198 = state_9151__$1;
(statearr_9166_9198[(2)] = null);

(statearr_9166_9198[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (22))){
var state_9151__$1 = state_9151;
var statearr_9167_9199 = state_9151__$1;
(statearr_9167_9199[(2)] = null);

(statearr_9167_9199[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (6))){
var inst_9092 = (state_9151[(13)]);
var inst_9101 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9092) : f.call(null,inst_9092));
var inst_9102 = cljs.core.seq(inst_9101);
var inst_9103 = inst_9102;
var inst_9104 = null;
var inst_9105 = (0);
var inst_9106 = (0);
var state_9151__$1 = (function (){var statearr_9168 = state_9151;
(statearr_9168[(8)] = inst_9105);

(statearr_9168[(9)] = inst_9106);

(statearr_9168[(10)] = inst_9103);

(statearr_9168[(12)] = inst_9104);

return statearr_9168;
})();
var statearr_9169_9200 = state_9151__$1;
(statearr_9169_9200[(2)] = null);

(statearr_9169_9200[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (17))){
var inst_9117 = (state_9151[(7)]);
var inst_9121 = cljs.core.chunk_first(inst_9117);
var inst_9122 = cljs.core.chunk_rest(inst_9117);
var inst_9123 = cljs.core.count(inst_9121);
var inst_9103 = inst_9122;
var inst_9104 = inst_9121;
var inst_9105 = inst_9123;
var inst_9106 = (0);
var state_9151__$1 = (function (){var statearr_9170 = state_9151;
(statearr_9170[(8)] = inst_9105);

(statearr_9170[(9)] = inst_9106);

(statearr_9170[(10)] = inst_9103);

(statearr_9170[(12)] = inst_9104);

return statearr_9170;
})();
var statearr_9171_9201 = state_9151__$1;
(statearr_9171_9201[(2)] = null);

(statearr_9171_9201[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (3))){
var inst_9149 = (state_9151[(2)]);
var state_9151__$1 = state_9151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9151__$1,inst_9149);
} else {
if((state_val_9152 === (12))){
var inst_9137 = (state_9151[(2)]);
var state_9151__$1 = state_9151;
var statearr_9172_9202 = state_9151__$1;
(statearr_9172_9202[(2)] = inst_9137);

(statearr_9172_9202[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (2))){
var state_9151__$1 = state_9151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9151__$1,(4),in$);
} else {
if((state_val_9152 === (23))){
var inst_9145 = (state_9151[(2)]);
var state_9151__$1 = state_9151;
var statearr_9173_9203 = state_9151__$1;
(statearr_9173_9203[(2)] = inst_9145);

(statearr_9173_9203[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (19))){
var inst_9132 = (state_9151[(2)]);
var state_9151__$1 = state_9151;
var statearr_9174_9204 = state_9151__$1;
(statearr_9174_9204[(2)] = inst_9132);

(statearr_9174_9204[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (11))){
var inst_9117 = (state_9151[(7)]);
var inst_9103 = (state_9151[(10)]);
var inst_9117__$1 = cljs.core.seq(inst_9103);
var state_9151__$1 = (function (){var statearr_9175 = state_9151;
(statearr_9175[(7)] = inst_9117__$1);

return statearr_9175;
})();
if(inst_9117__$1){
var statearr_9176_9205 = state_9151__$1;
(statearr_9176_9205[(1)] = (14));

} else {
var statearr_9177_9206 = state_9151__$1;
(statearr_9177_9206[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (9))){
var inst_9139 = (state_9151[(2)]);
var inst_9140 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_9151__$1 = (function (){var statearr_9178 = state_9151;
(statearr_9178[(15)] = inst_9139);

return statearr_9178;
})();
if(cljs.core.truth_(inst_9140)){
var statearr_9179_9207 = state_9151__$1;
(statearr_9179_9207[(1)] = (21));

} else {
var statearr_9180_9208 = state_9151__$1;
(statearr_9180_9208[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (5))){
var inst_9095 = cljs.core.async.close_BANG_(out);
var state_9151__$1 = state_9151;
var statearr_9181_9209 = state_9151__$1;
(statearr_9181_9209[(2)] = inst_9095);

(statearr_9181_9209[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (14))){
var inst_9117 = (state_9151[(7)]);
var inst_9119 = cljs.core.chunked_seq_QMARK_(inst_9117);
var state_9151__$1 = state_9151;
if(inst_9119){
var statearr_9182_9210 = state_9151__$1;
(statearr_9182_9210[(1)] = (17));

} else {
var statearr_9183_9211 = state_9151__$1;
(statearr_9183_9211[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (16))){
var inst_9135 = (state_9151[(2)]);
var state_9151__$1 = state_9151;
var statearr_9184_9212 = state_9151__$1;
(statearr_9184_9212[(2)] = inst_9135);

(statearr_9184_9212[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9152 === (10))){
var inst_9106 = (state_9151[(9)]);
var inst_9104 = (state_9151[(12)]);
var inst_9111 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9104,inst_9106);
var state_9151__$1 = state_9151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9151__$1,(13),out,inst_9111);
} else {
if((state_val_9152 === (18))){
var inst_9117 = (state_9151[(7)]);
var inst_9126 = cljs.core.first(inst_9117);
var state_9151__$1 = state_9151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9151__$1,(20),out,inst_9126);
} else {
if((state_val_9152 === (8))){
var inst_9105 = (state_9151[(8)]);
var inst_9106 = (state_9151[(9)]);
var inst_9108 = (inst_9106 < inst_9105);
var inst_9109 = inst_9108;
var state_9151__$1 = state_9151;
if(cljs.core.truth_(inst_9109)){
var statearr_9185_9213 = state_9151__$1;
(statearr_9185_9213[(1)] = (10));

} else {
var statearr_9186_9214 = state_9151__$1;
(statearr_9186_9214[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
var cljs$core$async$mapcat_STAR__$_state_machine__7425__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7425__auto____0 = (function (){
var statearr_9187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9187[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7425__auto__);

(statearr_9187[(1)] = (1));

return statearr_9187;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7425__auto____1 = (function (state_9151){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_9151);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e9188){if((e9188 instanceof Object)){
var ex__7428__auto__ = e9188;
var statearr_9189_9215 = state_9151;
(statearr_9189_9215[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9151);

return cljs.core.cst$kw$recur;
} else {
throw e9188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__9216 = state_9151;
state_9151 = G__9216;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7425__auto__ = function(state_9151){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7425__auto____1.call(this,state_9151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7425__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7425__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_9190 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_9190[(6)] = c__7531__auto__);

return statearr_9190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));

return c__7531__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__9218 = arguments.length;
switch (G__9218) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__9221 = arguments.length;
switch (G__9221) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__9224 = arguments.length;
switch (G__9224) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7531__auto___9271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_9248){
var state_val_9249 = (state_9248[(1)]);
if((state_val_9249 === (7))){
var inst_9243 = (state_9248[(2)]);
var state_9248__$1 = state_9248;
var statearr_9250_9272 = state_9248__$1;
(statearr_9250_9272[(2)] = inst_9243);

(statearr_9250_9272[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9249 === (1))){
var inst_9225 = null;
var state_9248__$1 = (function (){var statearr_9251 = state_9248;
(statearr_9251[(7)] = inst_9225);

return statearr_9251;
})();
var statearr_9252_9273 = state_9248__$1;
(statearr_9252_9273[(2)] = null);

(statearr_9252_9273[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9249 === (4))){
var inst_9228 = (state_9248[(8)]);
var inst_9228__$1 = (state_9248[(2)]);
var inst_9229 = (inst_9228__$1 == null);
var inst_9230 = cljs.core.not(inst_9229);
var state_9248__$1 = (function (){var statearr_9253 = state_9248;
(statearr_9253[(8)] = inst_9228__$1);

return statearr_9253;
})();
if(inst_9230){
var statearr_9254_9274 = state_9248__$1;
(statearr_9254_9274[(1)] = (5));

} else {
var statearr_9255_9275 = state_9248__$1;
(statearr_9255_9275[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9249 === (6))){
var state_9248__$1 = state_9248;
var statearr_9256_9276 = state_9248__$1;
(statearr_9256_9276[(2)] = null);

(statearr_9256_9276[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9249 === (3))){
var inst_9245 = (state_9248[(2)]);
var inst_9246 = cljs.core.async.close_BANG_(out);
var state_9248__$1 = (function (){var statearr_9257 = state_9248;
(statearr_9257[(9)] = inst_9245);

return statearr_9257;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9248__$1,inst_9246);
} else {
if((state_val_9249 === (2))){
var state_9248__$1 = state_9248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9248__$1,(4),ch);
} else {
if((state_val_9249 === (11))){
var inst_9228 = (state_9248[(8)]);
var inst_9237 = (state_9248[(2)]);
var inst_9225 = inst_9228;
var state_9248__$1 = (function (){var statearr_9258 = state_9248;
(statearr_9258[(10)] = inst_9237);

(statearr_9258[(7)] = inst_9225);

return statearr_9258;
})();
var statearr_9259_9277 = state_9248__$1;
(statearr_9259_9277[(2)] = null);

(statearr_9259_9277[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9249 === (9))){
var inst_9228 = (state_9248[(8)]);
var state_9248__$1 = state_9248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9248__$1,(11),out,inst_9228);
} else {
if((state_val_9249 === (5))){
var inst_9228 = (state_9248[(8)]);
var inst_9225 = (state_9248[(7)]);
var inst_9232 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9228,inst_9225);
var state_9248__$1 = state_9248;
if(inst_9232){
var statearr_9261_9278 = state_9248__$1;
(statearr_9261_9278[(1)] = (8));

} else {
var statearr_9262_9279 = state_9248__$1;
(statearr_9262_9279[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9249 === (10))){
var inst_9240 = (state_9248[(2)]);
var state_9248__$1 = state_9248;
var statearr_9263_9280 = state_9248__$1;
(statearr_9263_9280[(2)] = inst_9240);

(statearr_9263_9280[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9249 === (8))){
var inst_9225 = (state_9248[(7)]);
var tmp9260 = inst_9225;
var inst_9225__$1 = tmp9260;
var state_9248__$1 = (function (){var statearr_9264 = state_9248;
(statearr_9264[(7)] = inst_9225__$1);

return statearr_9264;
})();
var statearr_9265_9281 = state_9248__$1;
(statearr_9265_9281[(2)] = null);

(statearr_9265_9281[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_9266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9266[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_9266[(1)] = (1));

return statearr_9266;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_9248){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_9248);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e9267){if((e9267 instanceof Object)){
var ex__7428__auto__ = e9267;
var statearr_9268_9282 = state_9248;
(statearr_9268_9282[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9248);

return cljs.core.cst$kw$recur;
} else {
throw e9267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__9283 = state_9248;
state_9248 = G__9283;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_9248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_9248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_9269 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_9269[(6)] = c__7531__auto___9271);

return statearr_9269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__9285 = arguments.length;
switch (G__9285) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7531__auto___9351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_9323){
var state_val_9324 = (state_9323[(1)]);
if((state_val_9324 === (7))){
var inst_9319 = (state_9323[(2)]);
var state_9323__$1 = state_9323;
var statearr_9325_9352 = state_9323__$1;
(statearr_9325_9352[(2)] = inst_9319);

(statearr_9325_9352[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (1))){
var inst_9286 = (new Array(n));
var inst_9287 = inst_9286;
var inst_9288 = (0);
var state_9323__$1 = (function (){var statearr_9326 = state_9323;
(statearr_9326[(7)] = inst_9288);

(statearr_9326[(8)] = inst_9287);

return statearr_9326;
})();
var statearr_9327_9353 = state_9323__$1;
(statearr_9327_9353[(2)] = null);

(statearr_9327_9353[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (4))){
var inst_9291 = (state_9323[(9)]);
var inst_9291__$1 = (state_9323[(2)]);
var inst_9292 = (inst_9291__$1 == null);
var inst_9293 = cljs.core.not(inst_9292);
var state_9323__$1 = (function (){var statearr_9328 = state_9323;
(statearr_9328[(9)] = inst_9291__$1);

return statearr_9328;
})();
if(inst_9293){
var statearr_9329_9354 = state_9323__$1;
(statearr_9329_9354[(1)] = (5));

} else {
var statearr_9330_9355 = state_9323__$1;
(statearr_9330_9355[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (15))){
var inst_9313 = (state_9323[(2)]);
var state_9323__$1 = state_9323;
var statearr_9331_9356 = state_9323__$1;
(statearr_9331_9356[(2)] = inst_9313);

(statearr_9331_9356[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (13))){
var state_9323__$1 = state_9323;
var statearr_9332_9357 = state_9323__$1;
(statearr_9332_9357[(2)] = null);

(statearr_9332_9357[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (6))){
var inst_9288 = (state_9323[(7)]);
var inst_9309 = (inst_9288 > (0));
var state_9323__$1 = state_9323;
if(cljs.core.truth_(inst_9309)){
var statearr_9333_9358 = state_9323__$1;
(statearr_9333_9358[(1)] = (12));

} else {
var statearr_9334_9359 = state_9323__$1;
(statearr_9334_9359[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (3))){
var inst_9321 = (state_9323[(2)]);
var state_9323__$1 = state_9323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9323__$1,inst_9321);
} else {
if((state_val_9324 === (12))){
var inst_9287 = (state_9323[(8)]);
var inst_9311 = cljs.core.vec(inst_9287);
var state_9323__$1 = state_9323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9323__$1,(15),out,inst_9311);
} else {
if((state_val_9324 === (2))){
var state_9323__$1 = state_9323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9323__$1,(4),ch);
} else {
if((state_val_9324 === (11))){
var inst_9303 = (state_9323[(2)]);
var inst_9304 = (new Array(n));
var inst_9287 = inst_9304;
var inst_9288 = (0);
var state_9323__$1 = (function (){var statearr_9335 = state_9323;
(statearr_9335[(7)] = inst_9288);

(statearr_9335[(8)] = inst_9287);

(statearr_9335[(10)] = inst_9303);

return statearr_9335;
})();
var statearr_9336_9360 = state_9323__$1;
(statearr_9336_9360[(2)] = null);

(statearr_9336_9360[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (9))){
var inst_9287 = (state_9323[(8)]);
var inst_9301 = cljs.core.vec(inst_9287);
var state_9323__$1 = state_9323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9323__$1,(11),out,inst_9301);
} else {
if((state_val_9324 === (5))){
var inst_9288 = (state_9323[(7)]);
var inst_9296 = (state_9323[(11)]);
var inst_9287 = (state_9323[(8)]);
var inst_9291 = (state_9323[(9)]);
var inst_9295 = (inst_9287[inst_9288] = inst_9291);
var inst_9296__$1 = (inst_9288 + (1));
var inst_9297 = (inst_9296__$1 < n);
var state_9323__$1 = (function (){var statearr_9337 = state_9323;
(statearr_9337[(12)] = inst_9295);

(statearr_9337[(11)] = inst_9296__$1);

return statearr_9337;
})();
if(cljs.core.truth_(inst_9297)){
var statearr_9338_9361 = state_9323__$1;
(statearr_9338_9361[(1)] = (8));

} else {
var statearr_9339_9362 = state_9323__$1;
(statearr_9339_9362[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (14))){
var inst_9316 = (state_9323[(2)]);
var inst_9317 = cljs.core.async.close_BANG_(out);
var state_9323__$1 = (function (){var statearr_9341 = state_9323;
(statearr_9341[(13)] = inst_9316);

return statearr_9341;
})();
var statearr_9342_9363 = state_9323__$1;
(statearr_9342_9363[(2)] = inst_9317);

(statearr_9342_9363[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (10))){
var inst_9307 = (state_9323[(2)]);
var state_9323__$1 = state_9323;
var statearr_9343_9364 = state_9323__$1;
(statearr_9343_9364[(2)] = inst_9307);

(statearr_9343_9364[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9324 === (8))){
var inst_9296 = (state_9323[(11)]);
var inst_9287 = (state_9323[(8)]);
var tmp9340 = inst_9287;
var inst_9287__$1 = tmp9340;
var inst_9288 = inst_9296;
var state_9323__$1 = (function (){var statearr_9344 = state_9323;
(statearr_9344[(7)] = inst_9288);

(statearr_9344[(8)] = inst_9287__$1);

return statearr_9344;
})();
var statearr_9345_9365 = state_9323__$1;
(statearr_9345_9365[(2)] = null);

(statearr_9345_9365[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_9346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9346[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_9346[(1)] = (1));

return statearr_9346;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_9323){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_9323);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e9347){if((e9347 instanceof Object)){
var ex__7428__auto__ = e9347;
var statearr_9348_9366 = state_9323;
(statearr_9348_9366[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9323);

return cljs.core.cst$kw$recur;
} else {
throw e9347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__9367 = state_9323;
state_9323 = G__9367;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_9323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_9323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_9349 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_9349[(6)] = c__7531__auto___9351);

return statearr_9349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__9369 = arguments.length;
switch (G__9369) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7531__auto___9439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__7532__auto__ = (function (){var switch__7424__auto__ = (function (state_9411){
var state_val_9412 = (state_9411[(1)]);
if((state_val_9412 === (7))){
var inst_9407 = (state_9411[(2)]);
var state_9411__$1 = state_9411;
var statearr_9413_9440 = state_9411__$1;
(statearr_9413_9440[(2)] = inst_9407);

(statearr_9413_9440[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (1))){
var inst_9370 = [];
var inst_9371 = inst_9370;
var inst_9372 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_9411__$1 = (function (){var statearr_9414 = state_9411;
(statearr_9414[(7)] = inst_9371);

(statearr_9414[(8)] = inst_9372);

return statearr_9414;
})();
var statearr_9415_9441 = state_9411__$1;
(statearr_9415_9441[(2)] = null);

(statearr_9415_9441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (4))){
var inst_9375 = (state_9411[(9)]);
var inst_9375__$1 = (state_9411[(2)]);
var inst_9376 = (inst_9375__$1 == null);
var inst_9377 = cljs.core.not(inst_9376);
var state_9411__$1 = (function (){var statearr_9416 = state_9411;
(statearr_9416[(9)] = inst_9375__$1);

return statearr_9416;
})();
if(inst_9377){
var statearr_9417_9442 = state_9411__$1;
(statearr_9417_9442[(1)] = (5));

} else {
var statearr_9418_9443 = state_9411__$1;
(statearr_9418_9443[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (15))){
var inst_9401 = (state_9411[(2)]);
var state_9411__$1 = state_9411;
var statearr_9419_9444 = state_9411__$1;
(statearr_9419_9444[(2)] = inst_9401);

(statearr_9419_9444[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (13))){
var state_9411__$1 = state_9411;
var statearr_9420_9445 = state_9411__$1;
(statearr_9420_9445[(2)] = null);

(statearr_9420_9445[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (6))){
var inst_9371 = (state_9411[(7)]);
var inst_9396 = inst_9371.length;
var inst_9397 = (inst_9396 > (0));
var state_9411__$1 = state_9411;
if(cljs.core.truth_(inst_9397)){
var statearr_9421_9446 = state_9411__$1;
(statearr_9421_9446[(1)] = (12));

} else {
var statearr_9422_9447 = state_9411__$1;
(statearr_9422_9447[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (3))){
var inst_9409 = (state_9411[(2)]);
var state_9411__$1 = state_9411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9411__$1,inst_9409);
} else {
if((state_val_9412 === (12))){
var inst_9371 = (state_9411[(7)]);
var inst_9399 = cljs.core.vec(inst_9371);
var state_9411__$1 = state_9411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9411__$1,(15),out,inst_9399);
} else {
if((state_val_9412 === (2))){
var state_9411__$1 = state_9411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9411__$1,(4),ch);
} else {
if((state_val_9412 === (11))){
var inst_9375 = (state_9411[(9)]);
var inst_9379 = (state_9411[(10)]);
var inst_9389 = (state_9411[(2)]);
var inst_9390 = [];
var inst_9391 = inst_9390.push(inst_9375);
var inst_9371 = inst_9390;
var inst_9372 = inst_9379;
var state_9411__$1 = (function (){var statearr_9423 = state_9411;
(statearr_9423[(11)] = inst_9389);

(statearr_9423[(7)] = inst_9371);

(statearr_9423[(12)] = inst_9391);

(statearr_9423[(8)] = inst_9372);

return statearr_9423;
})();
var statearr_9424_9448 = state_9411__$1;
(statearr_9424_9448[(2)] = null);

(statearr_9424_9448[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (9))){
var inst_9371 = (state_9411[(7)]);
var inst_9387 = cljs.core.vec(inst_9371);
var state_9411__$1 = state_9411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9411__$1,(11),out,inst_9387);
} else {
if((state_val_9412 === (5))){
var inst_9372 = (state_9411[(8)]);
var inst_9375 = (state_9411[(9)]);
var inst_9379 = (state_9411[(10)]);
var inst_9379__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_9375) : f.call(null,inst_9375));
var inst_9380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9379__$1,inst_9372);
var inst_9381 = cljs.core.keyword_identical_QMARK_(inst_9372,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_9382 = ((inst_9380) || (inst_9381));
var state_9411__$1 = (function (){var statearr_9425 = state_9411;
(statearr_9425[(10)] = inst_9379__$1);

return statearr_9425;
})();
if(cljs.core.truth_(inst_9382)){
var statearr_9426_9449 = state_9411__$1;
(statearr_9426_9449[(1)] = (8));

} else {
var statearr_9427_9450 = state_9411__$1;
(statearr_9427_9450[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (14))){
var inst_9404 = (state_9411[(2)]);
var inst_9405 = cljs.core.async.close_BANG_(out);
var state_9411__$1 = (function (){var statearr_9429 = state_9411;
(statearr_9429[(13)] = inst_9404);

return statearr_9429;
})();
var statearr_9430_9451 = state_9411__$1;
(statearr_9430_9451[(2)] = inst_9405);

(statearr_9430_9451[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (10))){
var inst_9394 = (state_9411[(2)]);
var state_9411__$1 = state_9411;
var statearr_9431_9452 = state_9411__$1;
(statearr_9431_9452[(2)] = inst_9394);

(statearr_9431_9452[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9412 === (8))){
var inst_9371 = (state_9411[(7)]);
var inst_9375 = (state_9411[(9)]);
var inst_9379 = (state_9411[(10)]);
var inst_9384 = inst_9371.push(inst_9375);
var tmp9428 = inst_9371;
var inst_9371__$1 = tmp9428;
var inst_9372 = inst_9379;
var state_9411__$1 = (function (){var statearr_9432 = state_9411;
(statearr_9432[(7)] = inst_9371__$1);

(statearr_9432[(8)] = inst_9372);

(statearr_9432[(14)] = inst_9384);

return statearr_9432;
})();
var statearr_9433_9453 = state_9411__$1;
(statearr_9433_9453[(2)] = null);

(statearr_9433_9453[(1)] = (2));


return cljs.core.cst$kw$recur;
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
var cljs$core$async$state_machine__7425__auto__ = null;
var cljs$core$async$state_machine__7425__auto____0 = (function (){
var statearr_9434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9434[(0)] = cljs$core$async$state_machine__7425__auto__);

(statearr_9434[(1)] = (1));

return statearr_9434;
});
var cljs$core$async$state_machine__7425__auto____1 = (function (state_9411){
while(true){
var ret_value__7426__auto__ = (function (){try{while(true){
var result__7427__auto__ = switch__7424__auto__(state_9411);
if(cljs.core.keyword_identical_QMARK_(result__7427__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__7427__auto__;
}
break;
}
}catch (e9435){if((e9435 instanceof Object)){
var ex__7428__auto__ = e9435;
var statearr_9436_9454 = state_9411;
(statearr_9436_9454[(5)] = ex__7428__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9411);

return cljs.core.cst$kw$recur;
} else {
throw e9435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7426__auto__,cljs.core.cst$kw$recur)){
var G__9455 = state_9411;
state_9411 = G__9455;
continue;
} else {
return ret_value__7426__auto__;
}
break;
}
});
cljs$core$async$state_machine__7425__auto__ = function(state_9411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7425__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7425__auto____1.call(this,state_9411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7425__auto____0;
cljs$core$async$state_machine__7425__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7425__auto____1;
return cljs$core$async$state_machine__7425__auto__;
})()
})();
var state__7533__auto__ = (function (){var statearr_9437 = (f__7532__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7532__auto__.cljs$core$IFn$_invoke$arity$0() : f__7532__auto__.call(null));
(statearr_9437[(6)] = c__7531__auto___9439);

return statearr_9437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7533__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

