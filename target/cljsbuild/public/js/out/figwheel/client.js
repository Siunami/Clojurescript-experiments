// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e43040){if((e43040 instanceof Error)){
var e = e43040;
return "Error: Unable to stringify";
} else {
throw e43040;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43043 = arguments.length;
switch (G__43043) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43041_SHARP_){
if(typeof p1__43041_SHARP_ === 'string'){
return p1__43041_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43041_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43046 = arguments.length;
var i__4790__auto___43047 = (0);
while(true){
if((i__4790__auto___43047 < len__4789__auto___43046)){
args__4795__auto__.push((arguments[i__4790__auto___43047]));

var G__43048 = (i__4790__auto___43047 + (1));
i__4790__auto___43047 = G__43048;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43045){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43045));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43050 = arguments.length;
var i__4790__auto___43051 = (0);
while(true){
if((i__4790__auto___43051 < len__4789__auto___43050)){
args__4795__auto__.push((arguments[i__4790__auto___43051]));

var G__43052 = (i__4790__auto___43051 + (1));
i__4790__auto___43051 = G__43052;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43049){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43049));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43053){
var map__43054 = p__43053;
var map__43054__$1 = (((((!((map__43054 == null))))?(((((map__43054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43054):map__43054);
var message = cljs.core.get.call(null,map__43054__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43054__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4185__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34285__auto___43133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_43105){
var state_val_43106 = (state_43105[(1)]);
if((state_val_43106 === (7))){
var inst_43101 = (state_43105[(2)]);
var state_43105__$1 = state_43105;
var statearr_43107_43134 = state_43105__$1;
(statearr_43107_43134[(2)] = inst_43101);

(statearr_43107_43134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (1))){
var state_43105__$1 = state_43105;
var statearr_43108_43135 = state_43105__$1;
(statearr_43108_43135[(2)] = null);

(statearr_43108_43135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (4))){
var inst_43058 = (state_43105[(7)]);
var inst_43058__$1 = (state_43105[(2)]);
var state_43105__$1 = (function (){var statearr_43109 = state_43105;
(statearr_43109[(7)] = inst_43058__$1);

return statearr_43109;
})();
if(cljs.core.truth_(inst_43058__$1)){
var statearr_43110_43136 = state_43105__$1;
(statearr_43110_43136[(1)] = (5));

} else {
var statearr_43111_43137 = state_43105__$1;
(statearr_43111_43137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (15))){
var inst_43065 = (state_43105[(8)]);
var inst_43080 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43065);
var inst_43081 = cljs.core.first.call(null,inst_43080);
var inst_43082 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43081);
var inst_43083 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43082)].join('');
var inst_43084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43083);
var state_43105__$1 = state_43105;
var statearr_43112_43138 = state_43105__$1;
(statearr_43112_43138[(2)] = inst_43084);

(statearr_43112_43138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (13))){
var inst_43089 = (state_43105[(2)]);
var state_43105__$1 = state_43105;
var statearr_43113_43139 = state_43105__$1;
(statearr_43113_43139[(2)] = inst_43089);

(statearr_43113_43139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (6))){
var state_43105__$1 = state_43105;
var statearr_43114_43140 = state_43105__$1;
(statearr_43114_43140[(2)] = null);

(statearr_43114_43140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (17))){
var inst_43087 = (state_43105[(2)]);
var state_43105__$1 = state_43105;
var statearr_43115_43141 = state_43105__$1;
(statearr_43115_43141[(2)] = inst_43087);

(statearr_43115_43141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (3))){
var inst_43103 = (state_43105[(2)]);
var state_43105__$1 = state_43105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43105__$1,inst_43103);
} else {
if((state_val_43106 === (12))){
var inst_43064 = (state_43105[(9)]);
var inst_43078 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43064,opts);
var state_43105__$1 = state_43105;
if(inst_43078){
var statearr_43116_43142 = state_43105__$1;
(statearr_43116_43142[(1)] = (15));

} else {
var statearr_43117_43143 = state_43105__$1;
(statearr_43117_43143[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (2))){
var state_43105__$1 = state_43105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43105__$1,(4),ch);
} else {
if((state_val_43106 === (11))){
var inst_43065 = (state_43105[(8)]);
var inst_43070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43071 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43065);
var inst_43072 = cljs.core.async.timeout.call(null,(1000));
var inst_43073 = [inst_43071,inst_43072];
var inst_43074 = (new cljs.core.PersistentVector(null,2,(5),inst_43070,inst_43073,null));
var state_43105__$1 = state_43105;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43105__$1,(14),inst_43074);
} else {
if((state_val_43106 === (9))){
var inst_43065 = (state_43105[(8)]);
var inst_43091 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43092 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43065);
var inst_43093 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43092);
var inst_43094 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43093)].join('');
var inst_43095 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43094);
var state_43105__$1 = (function (){var statearr_43118 = state_43105;
(statearr_43118[(10)] = inst_43091);

return statearr_43118;
})();
var statearr_43119_43144 = state_43105__$1;
(statearr_43119_43144[(2)] = inst_43095);

(statearr_43119_43144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (5))){
var inst_43058 = (state_43105[(7)]);
var inst_43060 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43061 = (new cljs.core.PersistentArrayMap(null,2,inst_43060,null));
var inst_43062 = (new cljs.core.PersistentHashSet(null,inst_43061,null));
var inst_43063 = figwheel.client.focus_msgs.call(null,inst_43062,inst_43058);
var inst_43064 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43063);
var inst_43065 = cljs.core.first.call(null,inst_43063);
var inst_43066 = figwheel.client.autoload_QMARK_.call(null);
var state_43105__$1 = (function (){var statearr_43120 = state_43105;
(statearr_43120[(9)] = inst_43064);

(statearr_43120[(8)] = inst_43065);

return statearr_43120;
})();
if(cljs.core.truth_(inst_43066)){
var statearr_43121_43145 = state_43105__$1;
(statearr_43121_43145[(1)] = (8));

} else {
var statearr_43122_43146 = state_43105__$1;
(statearr_43122_43146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (14))){
var inst_43076 = (state_43105[(2)]);
var state_43105__$1 = state_43105;
var statearr_43123_43147 = state_43105__$1;
(statearr_43123_43147[(2)] = inst_43076);

(statearr_43123_43147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (16))){
var state_43105__$1 = state_43105;
var statearr_43124_43148 = state_43105__$1;
(statearr_43124_43148[(2)] = null);

(statearr_43124_43148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (10))){
var inst_43097 = (state_43105[(2)]);
var state_43105__$1 = (function (){var statearr_43125 = state_43105;
(statearr_43125[(11)] = inst_43097);

return statearr_43125;
})();
var statearr_43126_43149 = state_43105__$1;
(statearr_43126_43149[(2)] = null);

(statearr_43126_43149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (8))){
var inst_43064 = (state_43105[(9)]);
var inst_43068 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43064,opts);
var state_43105__$1 = state_43105;
if(cljs.core.truth_(inst_43068)){
var statearr_43127_43150 = state_43105__$1;
(statearr_43127_43150[(1)] = (11));

} else {
var statearr_43128_43151 = state_43105__$1;
(statearr_43128_43151[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34263__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34263__auto____0 = (function (){
var statearr_43129 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43129[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34263__auto__);

(statearr_43129[(1)] = (1));

return statearr_43129;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34263__auto____1 = (function (state_43105){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_43105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e43130){if((e43130 instanceof Object)){
var ex__34266__auto__ = e43130;
var statearr_43131_43152 = state_43105;
(statearr_43131_43152[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43153 = state_43105;
state_43105 = G__43153;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34263__auto__ = function(state_43105){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34263__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34263__auto____1.call(this,state_43105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34263__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34263__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_43132 = f__34286__auto__.call(null);
(statearr_43132[(6)] = c__34285__auto___43133);

return statearr_43132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43154_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43154_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43160 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43156 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43158 = true;
var _STAR_print_fn_STAR__temp_val__43159 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43158);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43159);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43157);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43156);
}}catch (e43155){if((e43155 instanceof Error)){
var e = e43155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43160], null));
} else {
var e = e43155;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43161){
var map__43162 = p__43161;
var map__43162__$1 = (((((!((map__43162 == null))))?(((((map__43162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43162):map__43162);
var opts = map__43162__$1;
var build_id = cljs.core.get.call(null,map__43162__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__43164){
var vec__43165 = p__43164;
var seq__43166 = cljs.core.seq.call(null,vec__43165);
var first__43167 = cljs.core.first.call(null,seq__43166);
var seq__43166__$1 = cljs.core.next.call(null,seq__43166);
var map__43168 = first__43167;
var map__43168__$1 = (((((!((map__43168 == null))))?(((((map__43168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43168):map__43168);
var msg = map__43168__$1;
var msg_name = cljs.core.get.call(null,map__43168__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43166__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43170){
var vec__43171 = p__43170;
var seq__43172 = cljs.core.seq.call(null,vec__43171);
var first__43173 = cljs.core.first.call(null,seq__43172);
var seq__43172__$1 = cljs.core.next.call(null,seq__43172);
var map__43174 = first__43173;
var map__43174__$1 = (((((!((map__43174 == null))))?(((((map__43174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43174):map__43174);
var msg = map__43174__$1;
var msg_name = cljs.core.get.call(null,map__43174__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43172__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43176){
var map__43177 = p__43176;
var map__43177__$1 = (((((!((map__43177 == null))))?(((((map__43177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43177):map__43177);
var on_compile_warning = cljs.core.get.call(null,map__43177__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43177__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__43179){
var vec__43180 = p__43179;
var seq__43181 = cljs.core.seq.call(null,vec__43180);
var first__43182 = cljs.core.first.call(null,seq__43181);
var seq__43181__$1 = cljs.core.next.call(null,seq__43181);
var map__43183 = first__43182;
var map__43183__$1 = (((((!((map__43183 == null))))?(((((map__43183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43183):map__43183);
var msg = map__43183__$1;
var msg_name = cljs.core.get.call(null,map__43183__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43181__$1;
var pred__43185 = cljs.core._EQ_;
var expr__43186 = msg_name;
if(cljs.core.truth_(pred__43185.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43186))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43185.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43186))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_43275){
var state_val_43276 = (state_43275[(1)]);
if((state_val_43276 === (7))){
var inst_43195 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
if(cljs.core.truth_(inst_43195)){
var statearr_43277_43324 = state_43275__$1;
(statearr_43277_43324[(1)] = (8));

} else {
var statearr_43278_43325 = state_43275__$1;
(statearr_43278_43325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (20))){
var inst_43269 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43279_43326 = state_43275__$1;
(statearr_43279_43326[(2)] = inst_43269);

(statearr_43279_43326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (27))){
var inst_43265 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43280_43327 = state_43275__$1;
(statearr_43280_43327[(2)] = inst_43265);

(statearr_43280_43327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (1))){
var inst_43188 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43275__$1 = state_43275;
if(cljs.core.truth_(inst_43188)){
var statearr_43281_43328 = state_43275__$1;
(statearr_43281_43328[(1)] = (2));

} else {
var statearr_43282_43329 = state_43275__$1;
(statearr_43282_43329[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (24))){
var inst_43267 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43283_43330 = state_43275__$1;
(statearr_43283_43330[(2)] = inst_43267);

(statearr_43283_43330[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (4))){
var inst_43273 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43275__$1,inst_43273);
} else {
if((state_val_43276 === (15))){
var inst_43271 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43284_43331 = state_43275__$1;
(statearr_43284_43331[(2)] = inst_43271);

(statearr_43284_43331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (21))){
var inst_43224 = (state_43275[(2)]);
var inst_43225 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43226 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43225);
var state_43275__$1 = (function (){var statearr_43285 = state_43275;
(statearr_43285[(7)] = inst_43224);

return statearr_43285;
})();
var statearr_43286_43332 = state_43275__$1;
(statearr_43286_43332[(2)] = inst_43226);

(statearr_43286_43332[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (31))){
var inst_43254 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43275__$1 = state_43275;
if(inst_43254){
var statearr_43287_43333 = state_43275__$1;
(statearr_43287_43333[(1)] = (34));

} else {
var statearr_43288_43334 = state_43275__$1;
(statearr_43288_43334[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (32))){
var inst_43263 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43289_43335 = state_43275__$1;
(statearr_43289_43335[(2)] = inst_43263);

(statearr_43289_43335[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (33))){
var inst_43250 = (state_43275[(2)]);
var inst_43251 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43252 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43251);
var state_43275__$1 = (function (){var statearr_43290 = state_43275;
(statearr_43290[(8)] = inst_43250);

return statearr_43290;
})();
var statearr_43291_43336 = state_43275__$1;
(statearr_43291_43336[(2)] = inst_43252);

(statearr_43291_43336[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (13))){
var inst_43209 = figwheel.client.heads_up.clear.call(null);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(16),inst_43209);
} else {
if((state_val_43276 === (22))){
var inst_43230 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43231 = figwheel.client.heads_up.append_warning_message.call(null,inst_43230);
var state_43275__$1 = state_43275;
var statearr_43292_43337 = state_43275__$1;
(statearr_43292_43337[(2)] = inst_43231);

(statearr_43292_43337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (36))){
var inst_43261 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43293_43338 = state_43275__$1;
(statearr_43293_43338[(2)] = inst_43261);

(statearr_43293_43338[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (29))){
var inst_43241 = (state_43275[(2)]);
var inst_43242 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43243 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43242);
var state_43275__$1 = (function (){var statearr_43294 = state_43275;
(statearr_43294[(9)] = inst_43241);

return statearr_43294;
})();
var statearr_43295_43339 = state_43275__$1;
(statearr_43295_43339[(2)] = inst_43243);

(statearr_43295_43339[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (6))){
var inst_43190 = (state_43275[(10)]);
var state_43275__$1 = state_43275;
var statearr_43296_43340 = state_43275__$1;
(statearr_43296_43340[(2)] = inst_43190);

(statearr_43296_43340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (28))){
var inst_43237 = (state_43275[(2)]);
var inst_43238 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43239 = figwheel.client.heads_up.display_warning.call(null,inst_43238);
var state_43275__$1 = (function (){var statearr_43297 = state_43275;
(statearr_43297[(11)] = inst_43237);

return statearr_43297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(29),inst_43239);
} else {
if((state_val_43276 === (25))){
var inst_43235 = figwheel.client.heads_up.clear.call(null);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(28),inst_43235);
} else {
if((state_val_43276 === (34))){
var inst_43256 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(37),inst_43256);
} else {
if((state_val_43276 === (17))){
var inst_43215 = (state_43275[(2)]);
var inst_43216 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43217 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43216);
var state_43275__$1 = (function (){var statearr_43298 = state_43275;
(statearr_43298[(12)] = inst_43215);

return statearr_43298;
})();
var statearr_43299_43341 = state_43275__$1;
(statearr_43299_43341[(2)] = inst_43217);

(statearr_43299_43341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (3))){
var inst_43207 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43275__$1 = state_43275;
if(inst_43207){
var statearr_43300_43342 = state_43275__$1;
(statearr_43300_43342[(1)] = (13));

} else {
var statearr_43301_43343 = state_43275__$1;
(statearr_43301_43343[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (12))){
var inst_43203 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43302_43344 = state_43275__$1;
(statearr_43302_43344[(2)] = inst_43203);

(statearr_43302_43344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (2))){
var inst_43190 = (state_43275[(10)]);
var inst_43190__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43275__$1 = (function (){var statearr_43303 = state_43275;
(statearr_43303[(10)] = inst_43190__$1);

return statearr_43303;
})();
if(cljs.core.truth_(inst_43190__$1)){
var statearr_43304_43345 = state_43275__$1;
(statearr_43304_43345[(1)] = (5));

} else {
var statearr_43305_43346 = state_43275__$1;
(statearr_43305_43346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (23))){
var inst_43233 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43275__$1 = state_43275;
if(inst_43233){
var statearr_43306_43347 = state_43275__$1;
(statearr_43306_43347[(1)] = (25));

} else {
var statearr_43307_43348 = state_43275__$1;
(statearr_43307_43348[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (35))){
var state_43275__$1 = state_43275;
var statearr_43308_43349 = state_43275__$1;
(statearr_43308_43349[(2)] = null);

(statearr_43308_43349[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (19))){
var inst_43228 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43275__$1 = state_43275;
if(inst_43228){
var statearr_43309_43350 = state_43275__$1;
(statearr_43309_43350[(1)] = (22));

} else {
var statearr_43310_43351 = state_43275__$1;
(statearr_43310_43351[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (11))){
var inst_43199 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43311_43352 = state_43275__$1;
(statearr_43311_43352[(2)] = inst_43199);

(statearr_43311_43352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (9))){
var inst_43201 = figwheel.client.heads_up.clear.call(null);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(12),inst_43201);
} else {
if((state_val_43276 === (5))){
var inst_43192 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43275__$1 = state_43275;
var statearr_43312_43353 = state_43275__$1;
(statearr_43312_43353[(2)] = inst_43192);

(statearr_43312_43353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (14))){
var inst_43219 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43275__$1 = state_43275;
if(inst_43219){
var statearr_43313_43354 = state_43275__$1;
(statearr_43313_43354[(1)] = (18));

} else {
var statearr_43314_43355 = state_43275__$1;
(statearr_43314_43355[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (26))){
var inst_43245 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43275__$1 = state_43275;
if(inst_43245){
var statearr_43315_43356 = state_43275__$1;
(statearr_43315_43356[(1)] = (30));

} else {
var statearr_43316_43357 = state_43275__$1;
(statearr_43316_43357[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (16))){
var inst_43211 = (state_43275[(2)]);
var inst_43212 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43213 = figwheel.client.heads_up.display_exception.call(null,inst_43212);
var state_43275__$1 = (function (){var statearr_43317 = state_43275;
(statearr_43317[(13)] = inst_43211);

return statearr_43317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(17),inst_43213);
} else {
if((state_val_43276 === (30))){
var inst_43247 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43248 = figwheel.client.heads_up.display_warning.call(null,inst_43247);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(33),inst_43248);
} else {
if((state_val_43276 === (10))){
var inst_43205 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43318_43358 = state_43275__$1;
(statearr_43318_43358[(2)] = inst_43205);

(statearr_43318_43358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (18))){
var inst_43221 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43222 = figwheel.client.heads_up.display_exception.call(null,inst_43221);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(21),inst_43222);
} else {
if((state_val_43276 === (37))){
var inst_43258 = (state_43275[(2)]);
var state_43275__$1 = state_43275;
var statearr_43319_43359 = state_43275__$1;
(statearr_43319_43359[(2)] = inst_43258);

(statearr_43319_43359[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43276 === (8))){
var inst_43197 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43275__$1 = state_43275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43275__$1,(11),inst_43197);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto____0 = (function (){
var statearr_43320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43320[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto__);

(statearr_43320[(1)] = (1));

return statearr_43320;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto____1 = (function (state_43275){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_43275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e43321){if((e43321 instanceof Object)){
var ex__34266__auto__ = e43321;
var statearr_43322_43360 = state_43275;
(statearr_43322_43360[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43361 = state_43275;
state_43275 = G__43361;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto__ = function(state_43275){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto____1.call(this,state_43275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_43323 = f__34286__auto__.call(null);
(statearr_43323[(6)] = c__34285__auto__);

return statearr_43323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34285__auto___43390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_43376){
var state_val_43377 = (state_43376[(1)]);
if((state_val_43377 === (1))){
var state_43376__$1 = state_43376;
var statearr_43378_43391 = state_43376__$1;
(statearr_43378_43391[(2)] = null);

(statearr_43378_43391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (2))){
var state_43376__$1 = state_43376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43376__$1,(4),ch);
} else {
if((state_val_43377 === (3))){
var inst_43374 = (state_43376[(2)]);
var state_43376__$1 = state_43376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43376__$1,inst_43374);
} else {
if((state_val_43377 === (4))){
var inst_43364 = (state_43376[(7)]);
var inst_43364__$1 = (state_43376[(2)]);
var state_43376__$1 = (function (){var statearr_43379 = state_43376;
(statearr_43379[(7)] = inst_43364__$1);

return statearr_43379;
})();
if(cljs.core.truth_(inst_43364__$1)){
var statearr_43380_43392 = state_43376__$1;
(statearr_43380_43392[(1)] = (5));

} else {
var statearr_43381_43393 = state_43376__$1;
(statearr_43381_43393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (5))){
var inst_43364 = (state_43376[(7)]);
var inst_43366 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43364);
var state_43376__$1 = state_43376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43376__$1,(8),inst_43366);
} else {
if((state_val_43377 === (6))){
var state_43376__$1 = state_43376;
var statearr_43382_43394 = state_43376__$1;
(statearr_43382_43394[(2)] = null);

(statearr_43382_43394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (7))){
var inst_43372 = (state_43376[(2)]);
var state_43376__$1 = state_43376;
var statearr_43383_43395 = state_43376__$1;
(statearr_43383_43395[(2)] = inst_43372);

(statearr_43383_43395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43377 === (8))){
var inst_43368 = (state_43376[(2)]);
var state_43376__$1 = (function (){var statearr_43384 = state_43376;
(statearr_43384[(8)] = inst_43368);

return statearr_43384;
})();
var statearr_43385_43396 = state_43376__$1;
(statearr_43385_43396[(2)] = null);

(statearr_43385_43396[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34263__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34263__auto____0 = (function (){
var statearr_43386 = [null,null,null,null,null,null,null,null,null];
(statearr_43386[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34263__auto__);

(statearr_43386[(1)] = (1));

return statearr_43386;
});
var figwheel$client$heads_up_plugin_$_state_machine__34263__auto____1 = (function (state_43376){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_43376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e43387){if((e43387 instanceof Object)){
var ex__34266__auto__ = e43387;
var statearr_43388_43397 = state_43376;
(statearr_43388_43397[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43398 = state_43376;
state_43376 = G__43398;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34263__auto__ = function(state_43376){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34263__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34263__auto____1.call(this,state_43376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34263__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34263__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_43389 = f__34286__auto__.call(null);
(statearr_43389[(6)] = c__34285__auto___43390);

return statearr_43389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_43404){
var state_val_43405 = (state_43404[(1)]);
if((state_val_43405 === (1))){
var inst_43399 = cljs.core.async.timeout.call(null,(3000));
var state_43404__$1 = state_43404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43404__$1,(2),inst_43399);
} else {
if((state_val_43405 === (2))){
var inst_43401 = (state_43404[(2)]);
var inst_43402 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43404__$1 = (function (){var statearr_43406 = state_43404;
(statearr_43406[(7)] = inst_43401);

return statearr_43406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43404__$1,inst_43402);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34263__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34263__auto____0 = (function (){
var statearr_43407 = [null,null,null,null,null,null,null,null];
(statearr_43407[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34263__auto__);

(statearr_43407[(1)] = (1));

return statearr_43407;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34263__auto____1 = (function (state_43404){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_43404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e43408){if((e43408 instanceof Object)){
var ex__34266__auto__ = e43408;
var statearr_43409_43411 = state_43404;
(statearr_43409_43411[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43412 = state_43404;
state_43404 = G__43412;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34263__auto__ = function(state_43404){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34263__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34263__auto____1.call(this,state_43404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34263__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34263__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_43410 = f__34286__auto__.call(null);
(statearr_43410[(6)] = c__34285__auto__);

return statearr_43410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34285__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34286__auto__ = (function (){var switch__34262__auto__ = (function (state_43419){
var state_val_43420 = (state_43419[(1)]);
if((state_val_43420 === (1))){
var inst_43413 = cljs.core.async.timeout.call(null,(2000));
var state_43419__$1 = state_43419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43419__$1,(2),inst_43413);
} else {
if((state_val_43420 === (2))){
var inst_43415 = (state_43419[(2)]);
var inst_43416 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_43417 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43416);
var state_43419__$1 = (function (){var statearr_43421 = state_43419;
(statearr_43421[(7)] = inst_43415);

return statearr_43421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43419__$1,inst_43417);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto____0 = (function (){
var statearr_43422 = [null,null,null,null,null,null,null,null];
(statearr_43422[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto__);

(statearr_43422[(1)] = (1));

return statearr_43422;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto____1 = (function (state_43419){
while(true){
var ret_value__34264__auto__ = (function (){try{while(true){
var result__34265__auto__ = switch__34262__auto__.call(null,state_43419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34265__auto__;
}
break;
}
}catch (e43423){if((e43423 instanceof Object)){
var ex__34266__auto__ = e43423;
var statearr_43424_43426 = state_43419;
(statearr_43424_43426[(5)] = ex__34266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43427 = state_43419;
state_43419 = G__43427;
continue;
} else {
return ret_value__34264__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto__ = function(state_43419){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto____1.call(this,state_43419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34263__auto__;
})()
})();
var state__34287__auto__ = (function (){var statearr_43425 = f__34286__auto__.call(null);
(statearr_43425[(6)] = c__34285__auto__);

return statearr_43425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34287__auto__);
}));

return c__34285__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43428){
var map__43429 = p__43428;
var map__43429__$1 = (((((!((map__43429 == null))))?(((((map__43429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43429):map__43429);
var file = cljs.core.get.call(null,map__43429__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43429__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43429__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43431 = "";
var G__43431__$1 = (cljs.core.truth_(file)?[G__43431,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__43431);
var G__43431__$2 = (cljs.core.truth_(line)?[G__43431__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__43431__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__43431__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__43431__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43432){
var map__43433 = p__43432;
var map__43433__$1 = (((((!((map__43433 == null))))?(((((map__43433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43433):map__43433);
var ed = map__43433__$1;
var exception_data = cljs.core.get.call(null,map__43433__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43433__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_43436 = (function (){var G__43435 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43435)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__43435;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_43436);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43437){
var map__43438 = p__43437;
var map__43438__$1 = (((((!((map__43438 == null))))?(((((map__43438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43438):map__43438);
var w = map__43438__$1;
var message = cljs.core.get.call(null,map__43438__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4174__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43440 = cljs.core.seq.call(null,plugins);
var chunk__43441 = null;
var count__43442 = (0);
var i__43443 = (0);
while(true){
if((i__43443 < count__43442)){
var vec__43450 = cljs.core._nth.call(null,chunk__43441,i__43443);
var k = cljs.core.nth.call(null,vec__43450,(0),null);
var plugin = cljs.core.nth.call(null,vec__43450,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43456 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43440,chunk__43441,count__43442,i__43443,pl_43456,vec__43450,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43456.call(null,msg_hist);
});})(seq__43440,chunk__43441,count__43442,i__43443,pl_43456,vec__43450,k,plugin))
);
} else {
}


var G__43457 = seq__43440;
var G__43458 = chunk__43441;
var G__43459 = count__43442;
var G__43460 = (i__43443 + (1));
seq__43440 = G__43457;
chunk__43441 = G__43458;
count__43442 = G__43459;
i__43443 = G__43460;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__43440);
if(temp__5735__auto__){
var seq__43440__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43440__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__43440__$1);
var G__43461 = cljs.core.chunk_rest.call(null,seq__43440__$1);
var G__43462 = c__4609__auto__;
var G__43463 = cljs.core.count.call(null,c__4609__auto__);
var G__43464 = (0);
seq__43440 = G__43461;
chunk__43441 = G__43462;
count__43442 = G__43463;
i__43443 = G__43464;
continue;
} else {
var vec__43453 = cljs.core.first.call(null,seq__43440__$1);
var k = cljs.core.nth.call(null,vec__43453,(0),null);
var plugin = cljs.core.nth.call(null,vec__43453,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43465 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43440,chunk__43441,count__43442,i__43443,pl_43465,vec__43453,k,plugin,seq__43440__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43465.call(null,msg_hist);
});})(seq__43440,chunk__43441,count__43442,i__43443,pl_43465,vec__43453,k,plugin,seq__43440__$1,temp__5735__auto__))
);
} else {
}


var G__43466 = cljs.core.next.call(null,seq__43440__$1);
var G__43467 = null;
var G__43468 = (0);
var G__43469 = (0);
seq__43440 = G__43466;
chunk__43441 = G__43467;
count__43442 = G__43468;
i__43443 = G__43469;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__43471 = arguments.length;
switch (G__43471) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__43472_43477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43473_43478 = null;
var count__43474_43479 = (0);
var i__43475_43480 = (0);
while(true){
if((i__43475_43480 < count__43474_43479)){
var msg_43481 = cljs.core._nth.call(null,chunk__43473_43478,i__43475_43480);
figwheel.client.socket.handle_incoming_message.call(null,msg_43481);


var G__43482 = seq__43472_43477;
var G__43483 = chunk__43473_43478;
var G__43484 = count__43474_43479;
var G__43485 = (i__43475_43480 + (1));
seq__43472_43477 = G__43482;
chunk__43473_43478 = G__43483;
count__43474_43479 = G__43484;
i__43475_43480 = G__43485;
continue;
} else {
var temp__5735__auto___43486 = cljs.core.seq.call(null,seq__43472_43477);
if(temp__5735__auto___43486){
var seq__43472_43487__$1 = temp__5735__auto___43486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43472_43487__$1)){
var c__4609__auto___43488 = cljs.core.chunk_first.call(null,seq__43472_43487__$1);
var G__43489 = cljs.core.chunk_rest.call(null,seq__43472_43487__$1);
var G__43490 = c__4609__auto___43488;
var G__43491 = cljs.core.count.call(null,c__4609__auto___43488);
var G__43492 = (0);
seq__43472_43477 = G__43489;
chunk__43473_43478 = G__43490;
count__43474_43479 = G__43491;
i__43475_43480 = G__43492;
continue;
} else {
var msg_43493 = cljs.core.first.call(null,seq__43472_43487__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43493);


var G__43494 = cljs.core.next.call(null,seq__43472_43487__$1);
var G__43495 = null;
var G__43496 = (0);
var G__43497 = (0);
seq__43472_43477 = G__43494;
chunk__43473_43478 = G__43495;
count__43474_43479 = G__43496;
i__43475_43480 = G__43497;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43502 = arguments.length;
var i__4790__auto___43503 = (0);
while(true){
if((i__4790__auto___43503 < len__4789__auto___43502)){
args__4795__auto__.push((arguments[i__4790__auto___43503]));

var G__43504 = (i__4790__auto___43503 + (1));
i__4790__auto___43503 = G__43504;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43499){
var map__43500 = p__43499;
var map__43500__$1 = (((((!((map__43500 == null))))?(((((map__43500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43500):map__43500);
var opts = map__43500__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43498){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43498));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43505){if((e43505 instanceof Error)){
var e = e43505;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43505;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__43506){
var map__43507 = p__43506;
var map__43507__$1 = (((((!((map__43507 == null))))?(((((map__43507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43507):map__43507);
var msg_name = cljs.core.get.call(null,map__43507__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1575922826831
