// Compiled by ClojureScript 1.10.597 {}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
accountant.core.transformer_create_url = (function accountant$core$transformer_create_url(token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});
accountant.core.transformer_retrieve_token = (function accountant$core$transformer_retrieve_token(path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.hash)].join('');
});
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.history !== 'undefined')){
} else {
accountant.core.history = (function (){var transformer = (new goog.history.Html5History.TokenTransformer());
(transformer.retrieveToken = accountant.core.transformer_retrieve_token);

(transformer.createUrl = accountant.core.transformer_create_url);

return (new goog.history.Html5History(window,transformer));
})();
}
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
return goog.events.listen(history,goog.history.EventType.NAVIGATE,(function (e){
var token = e.token;
return nav_handler.call(null,token);
}));
});
/**
 * Given a DOM node, if it is an element node, return its href attribute.
 *   Otherwise, return nil.
 */
accountant.core.get_href_attribute = (function accountant$core$get_href_attribute(node){
if(cljs.core.truth_((function (){var and__4174__auto__ = node;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.call(null,node.nodeType,Node.ELEMENT_NODE);
} else {
return and__4174__auto__;
}
})())){
return node.getAttribute("href");
} else {
return null;
}
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content, if
 *   it does not have an explicit `data-trigger` attribute to signify a non-navigational
 *   link element.
 */
accountant.core.find_href_node = (function accountant$core$find_href_node(e){
while(true){
var href = accountant.core.get_href_attribute.call(null,e);
var attrs = e.attributes;
var navigation_link_QMARK_ = (function (){var and__4174__auto__ = href;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = attrs;
if(cljs.core.truth_(and__4174__auto____$1)){
return cljs.core.not.call(null,(attrs["data-trigger"]));
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(navigation_link_QMARK_)){
return e;
} else {
var temp__5735__auto__ = e.parentNode;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__40565 = parent;
e = G__40565;
continue;
} else {
return null;
}
}
break;
}
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return null;
} else {
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_.call(null,fragment)){
return null;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_,reload_same_path_QMARK_){
return goog.events.listen(document,"click",(function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__4185__auto__ = meta_key;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = alt_key;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href_node = accountant.core.find_href_node.call(null,target);
var href = (cljs.core.truth_(href_node)?href_node.href:null);
var link_target = (cljs.core.truth_(href_node)?href_node.target:null);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query.call(null,uri);
var fragment = accountant.core.uri__GT_fragment.call(null,uri);
var relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),query,fragment].join('');
var title = target.title;
var host = uri.getDomain();
var port = uri.getPort();
var current_host = window.location.hostname;
var current_port = window.location.port;
var loc = window.location;
var current_relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
if(cljs.core.truth_(((cljs.core.not.call(null,any_key))?(function (){var and__4174__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null).call(null,link_target);
if(cljs.core.truth_(and__4174__auto__)){
if(cljs.core._EQ_.call(null,button,(0))){
if(cljs.core._EQ_.call(null,host,current_host)){
if(((cljs.core.not.call(null,port)) || (cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(port),cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_port))))){
return path_exists_QMARK_.call(null,path);
} else {
return false;
}
} else {
return false;
}
} else {
return false;
}
} else {
return and__4174__auto__;
}
})():false))){
if(cljs.core.not_EQ_.call(null,current_relative_href,relative_href)){
history.setToken(relative_href,title);
} else {
}

e.preventDefault();

if(cljs.core.truth_(reload_same_path_QMARK_)){
return goog.events.dispatchEvent(history,(new goog.history.Event(path,true)));
} else {
return null;
}
} else {
return null;
}
}));
});
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.nav_handler !== 'undefined')){
} else {
accountant.core.nav_handler = null;
}
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.path_exists_QMARK_ !== 'undefined')){
} else {
accountant.core.path_exists_QMARK_ = null;
}
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.document_click_handler_listener_key !== 'undefined')){
} else {
accountant.core.document_click_handler_listener_key = null;
}
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.navigate_listener_key !== 'undefined')){
} else {
accountant.core.navigate_listener_key = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__40566){
var map__40567 = p__40566;
var map__40567__$1 = (((((!((map__40567 == null))))?(((((map__40567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40567):map__40567);
var nav_handler = cljs.core.get.call(null,map__40567__$1,new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484));
var path_exists_QMARK_ = cljs.core.get.call(null,map__40567__$1,new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514));
var reload_same_path_QMARK_ = cljs.core.get.call(null,map__40567__$1,new cljs.core.Keyword(null,"reload-same-path?","reload-same-path?",1981904231));
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

(accountant.core.nav_handler = nav_handler);

(accountant.core.path_exists_QMARK_ = path_exists_QMARK_);

(accountant.core.document_click_handler_listener_key = accountant.core.dispatch_on_navigate.call(null,accountant.core.history,nav_handler));

return (accountant.core.navigate_listener_key = accountant.core.prevent_reload_on_known_path.call(null,accountant.core.history,path_exists_QMARK_,reload_same_path_QMARK_));
});
/**
 * Teardown HTML5 history navigation.
 * 
 *   Undoes all of the stateful changes, including unlistening to events, that are setup as part of
 *   the call to `configure-navigation!`.
 */
accountant.core.unconfigure_navigation_BANG_ = (function accountant$core$unconfigure_navigation_BANG_(){
(accountant.core.nav_handler = null);

(accountant.core.path_exists_QMARK_ = null);

var seq__40569 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [accountant.core.document_click_handler_listener_key,accountant.core.navigate_listener_key], null));
var chunk__40570 = null;
var count__40571 = (0);
var i__40572 = (0);
while(true){
if((i__40572 < count__40571)){
var key = cljs.core._nth.call(null,chunk__40570,i__40572);
if(cljs.core.truth_(key)){
goog.events.unlistenByKey(key);
} else {
}


var G__40573 = seq__40569;
var G__40574 = chunk__40570;
var G__40575 = count__40571;
var G__40576 = (i__40572 + (1));
seq__40569 = G__40573;
chunk__40570 = G__40574;
count__40571 = G__40575;
i__40572 = G__40576;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40569);
if(temp__5735__auto__){
var seq__40569__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40569__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__40569__$1);
var G__40577 = cljs.core.chunk_rest.call(null,seq__40569__$1);
var G__40578 = c__4609__auto__;
var G__40579 = cljs.core.count.call(null,c__4609__auto__);
var G__40580 = (0);
seq__40569 = G__40577;
chunk__40570 = G__40578;
count__40571 = G__40579;
i__40572 = G__40580;
continue;
} else {
var key = cljs.core.first.call(null,seq__40569__$1);
if(cljs.core.truth_(key)){
goog.events.unlistenByKey(key);
} else {
}


var G__40581 = cljs.core.next.call(null,seq__40569__$1);
var G__40582 = null;
var G__40583 = (0);
var G__40584 = (0);
seq__40569 = G__40581;
chunk__40570 = G__40582;
count__40571 = G__40583;
i__40572 = G__40584;
continue;
}
} else {
return null;
}
}
break;
}
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.call(null,(function (p1__40585_SHARP_){
return cljs.core.name.call(null,p1__40585_SHARP_);
}),cljs.core.keys.call(null,query));
var values = cljs.core.vals.call(null,query);
var pairs = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,params,values));
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__40586_SHARP_){
return clojure.string.join.call(null,"=",p1__40586_SHARP_);
}),pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var G__40588 = arguments.length;
switch (G__40588) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
}));

(accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first.call(null,clojure.string.split.call(null,token,"?"));
var query_string = accountant.core.map__GT_params.call(null,cljs.core.reduce_kv.call(null,(function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,valid,k,v);
} else {
return valid;
}
}),cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_.call(null,query_string))?route:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route),"?",query_string].join(''));
if(cljs.core._EQ_.call(null,old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
}));

(accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2);

accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
return accountant.core.nav_handler.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});

//# sourceMappingURL=core.js.map?rel=1575922822149
