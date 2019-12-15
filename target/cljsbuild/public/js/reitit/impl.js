// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('meta_merge.core');
goog.require('reitit.trie');
goog.require('reitit.exception');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.impl.Route = (function (path,path_parts,path_params,__meta,__extmap,__hash){
this.path = path;
this.path_parts = path_parts;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k5647,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__5651 = k5647;
var G__5651__$1 = (((G__5651 instanceof cljs.core.Keyword))?G__5651.fqn:null);
switch (G__5651__$1) {
case "path":
return self__.path;

break;
case "path-parts":
return self__.path_parts;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5647,else__4442__auto__);

}
}));

(reitit.impl.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__5652){
var vec__5653 = p__5652;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5653,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5653,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.impl.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.impl.Route{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_parts,self__.path_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null))], null),self__.__extmap));
}));

(reitit.impl.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5646){
var self__ = this;
var G__5646__$1 = this;
return (new cljs.core.RecordIter((0),G__5646__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,cljs.core.cst$kw$path_DASH_parts,cljs.core.cst$kw$path_DASH_params], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.impl.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.impl.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.impl.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(reitit.impl.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__5656 = (function (coll__4436__auto__){
return (573096325 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__5656(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.impl.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5648,other5649){
var self__ = this;
var this5648__$1 = this;
return (((!((other5649 == null)))) && ((this5648__$1.constructor === other5649.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5648__$1.path,other5649.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5648__$1.path_parts,other5649.path_parts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5648__$1.path_params,other5649.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5648__$1.__extmap,other5649.__extmap)));
}));

(reitit.impl.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$path_DASH_parts,null,cljs.core.cst$kw$path_DASH_params,null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.impl.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__5646){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__5657 = cljs.core.keyword_identical_QMARK_;
var expr__5658 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__5660 = cljs.core.cst$kw$path;
var G__5661 = expr__5658;
return (pred__5657.cljs$core$IFn$_invoke$arity$2 ? pred__5657.cljs$core$IFn$_invoke$arity$2(G__5660,G__5661) : pred__5657.call(null,G__5660,G__5661));
})())){
return (new reitit.impl.Route(G__5646,self__.path_parts,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5662 = cljs.core.cst$kw$path_DASH_parts;
var G__5663 = expr__5658;
return (pred__5657.cljs$core$IFn$_invoke$arity$2 ? pred__5657.cljs$core$IFn$_invoke$arity$2(G__5662,G__5663) : pred__5657.call(null,G__5662,G__5663));
})())){
return (new reitit.impl.Route(self__.path,G__5646,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5664 = cljs.core.cst$kw$path_DASH_params;
var G__5665 = expr__5658;
return (pred__5657.cljs$core$IFn$_invoke$arity$2 ? pred__5657.cljs$core$IFn$_invoke$arity$2(G__5664,G__5665) : pred__5657.call(null,G__5664,G__5665));
})())){
return (new reitit.impl.Route(self__.path,self__.path_parts,G__5646,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__5646),null));
}
}
}
}));

(reitit.impl.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_parts,self__.path_parts,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null))], null),self__.__extmap));
}));

(reitit.impl.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__5646){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,G__5646,self__.__extmap,self__.__hash));
}));

(reitit.impl.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.impl.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$path,cljs.core.cst$sym$path_DASH_parts,cljs.core.cst$sym$path_DASH_params], null);
}));

(reitit.impl.Route.cljs$lang$type = true);

(reitit.impl.Route.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.impl/Route",null,(1),null));
}));

(reitit.impl.Route.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.impl/Route");
}));

/**
 * Positional factory function for reitit.impl/Route.
 */
reitit.impl.__GT_Route = (function reitit$impl$__GT_Route(path,path_parts,path_params){
return (new reitit.impl.Route(path,path_parts,path_params,null,null,null));
});

/**
 * Factory function for reitit.impl/Route, taking a map of keywords to field values.
 */
reitit.impl.map__GT_Route = (function reitit$impl$map__GT_Route(G__5650){
var extmap__4478__auto__ = (function (){var G__5666 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5650,cljs.core.cst$kw$path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path_DASH_parts,cljs.core.cst$kw$path_DASH_params], 0));
if(cljs.core.record_QMARK_(G__5650)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5666);
} else {
return G__5666;
}
})();
return (new reitit.impl.Route(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__5650),cljs.core.cst$kw$path_DASH_parts.cljs$core$IFn$_invoke$arity$1(G__5650),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__5650),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

reitit.impl.parse = (function reitit$impl$parse(path){
var path__$1 = reitit.trie.normalize(path);
var path_parts = reitit.trie.split_path(path__$1);
var path_params = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,path_parts)));
return reitit.impl.map__GT_Route(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path_DASH_params,path_params,cljs.core.cst$kw$path_DASH_parts,path_parts,cljs.core.cst$kw$path,path__$1], null));
});
reitit.impl.wild_route_QMARK_ = (function reitit$impl$wild_route_QMARK_(p__5668){
var vec__5669 = p__5668;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5669,(0),null);
return cljs.core.boolean$(cljs.core.seq(reitit.impl.parse(path).path_params));
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5737__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5737__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5737__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__5674){
var map__5675 = p__5674;
var map__5675__$1 = (((((!((map__5675 == null))))?(((((map__5675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5675):map__5675);
var opts = map__5675__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5675__$1,cljs.core.cst$kw$path);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5675__$1,cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5675__$1,cljs.core.cst$kw$routes,cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5675__$1,cljs.core.cst$kw$expand);
var walk_many = (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__5672_SHARP_,p2__5673_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__5672_SHARP_,walk_one(p,m,p2__5673_SHARP_));
}),cljs.core.PersistentVector.EMPTY,r);
});
var walk_one = (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__5686 = routes__$1;
var seq__5687 = cljs.core.seq(vec__5686);
var first__5688 = cljs.core.first(seq__5687);
var seq__5687__$1 = cljs.core.next(seq__5687);
var path__$1 = first__5688;
var vec__5689 = seq__5687__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5689,(0),null);
var args = vec__5689;
var vec__5692 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5692,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5692,(1),null);
var macc__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(macc,(expand.cljs$core$IFn$_invoke$arity$2 ? expand.cljs$core$IFn$_invoke$arity$2(data__$1,opts) : expand.call(null,data__$1,opts)));
var child_routes = walk_many([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,childs));
if(cljs.core.seq(childs)){
return cljs.core.seq(child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__5695){
var vec__5696 = p__5695;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5696,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5696,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p,ds) : f.call(null,p,ds))], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__5699){
var vec__5700 = p__5699;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5700,(1),null);
try{return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e5703){if((e5703 instanceof Error)){
var e = e5703;
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$impl_SLASH_merge_DASH_data,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,p,cljs.core.cst$kw$left,acc,cljs.core.cst$kw$right,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),cljs.core.cst$kw$exception,e], null));
} else {
throw e5703;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__5705){
var map__5706 = p__5705;
var map__5706__$1 = (((((!((map__5706 == null))))?(((((map__5706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5706):map__5706);
var opts = map__5706__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5706__$1,cljs.core.cst$kw$coerce);
var G__5708 = reitit.impl.map_data(reitit.impl.merge_data,reitit.impl.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__5704_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__5704_SHARP_,opts) : coerce.call(null,p1__5704_SHARP_,opts));
})),G__5708);
} else {
return G__5708;
}
});
reitit.impl.conflicting_routes_QMARK_ = (function reitit$impl$conflicting_routes_QMARK_(route1,route2){
return reitit.trie.conflicting_paths_QMARK_(cljs.core.first(route1),cljs.core.first(route2));
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reitit.impl.conflicting_routes_QMARK_,route)),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(routes,(index + (1))))], null);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second))),routes));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function reitit$impl$conflicting_paths_$_iter__5709(s__5710){
return (new cljs.core.LazySeq(null,(function (){
var s__5710__$1 = s__5710;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__5710__$1);
if(temp__5735__auto__){
var s__5710__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5710__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__5710__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__5712 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__5711 = (0);
while(true){
if((i__5711 < size__4581__auto__)){
var vec__5713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__5711);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5713,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5713,(1),null);
cljs.core.chunk_append(b__5712,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__5719 = (i__5711 + (1));
i__5711 = G__5719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5712),reitit$impl$conflicting_paths_$_iter__5709(cljs.core.chunk_rest(s__5710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5712),null);
}
} else {
var vec__5716 = cljs.core.first(s__5710__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5716,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5716,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$impl$conflicting_paths_$_iter__5709(cljs.core.rest(s__5710__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__5720 = routes;
var G__5720__$1 = (((G__5720 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.second),G__5720));
var G__5720__$2 = (((G__5720__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__5720__$1));
var G__5720__$3 = (((G__5720__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__5720__$2));
var G__5720__$4 = (((G__5720__$3 == null))?null:cljs.core.seq(G__5720__$3));
var G__5720__$5 = (((G__5720__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__5721){
var vec__5722 = p__5721;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5722,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
}),G__5720__$4));
if((G__5720__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5720__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__5725_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__5725_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__5726,p__5727){
var vec__5728 = p__5726;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5728,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5728,(1),null);
var route = vec__5728;
var map__5731 = p__5727;
var map__5731__$1 = (((((!((map__5731 == null))))?(((((map__5731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5731):map__5731);
var opts = map__5731__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5731__$1,cljs.core.cst$kw$compile);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__5733_SHARP_){
return reitit.impl.compile_route(p1__5733_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(route))){
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_params,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5733__auto__)){
var p = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return cljs.core.reduced(null);
}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$path_DASH_parts.cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5733__auto__)){
var parts = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts);
} else {
return null;
}
} else {
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_((function (p1__5734_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__5734_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required,defined);
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path_DASH_params,path_params,cljs.core.cst$kw$required,required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4185__auto__ = reitit.impl.maybe_url_decode(s);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace(s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values(reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (reitit.impl.into_string[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (reitit.impl.into_string["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

goog.object.set(reitit.impl.into_string,"string",(function (this$){
return this$;
}));

(cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name(this$__$1)].join('');
}));

goog.object.set(reitit.impl.IntoString,"boolean",true);

goog.object.set(reitit.impl.into_string,"boolean",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"number",true);

goog.object.set(reitit.impl.into_string,"number",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"object",true);

goog.object.set(reitit.impl.into_string,"object",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(reitit.impl.IntoString,"null",true);

goog.object.set(reitit.impl.into_string,"null",(function (_){
return null;
}));
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__5736_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__5736_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__5737){
var vec__5738 = p__5737;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5738,(1),null);
return [reitit.impl.form_encode(reitit.impl.into_string(k)),"=",reitit.impl.form_encode(reitit.impl.into_string(v))].join('');
}),params));
});
var ret__4835__auto___5747 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4795__auto__ = [];
var len__4789__auto___5748 = arguments.length;
var i__4790__auto___5749 = (0);
while(true){
if((i__4790__auto___5749 < len__4789__auto___5748)){
args__4795__auto__.push((arguments[i__4790__auto___5749]));

var G__5750 = (i__4790__auto___5749 + (1));
i__4790__auto___5749 = G__5750;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((5) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((5)),(0),null)):null);
return reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4796__auto__);
});

(reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,base_type,ctor,methods$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),ctor))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$goog_SLASH_inherits,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,base_type,null,(1),null))], 0)))),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$set_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$$,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$reitit$impl_SLASH__DASH_prototype,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(method))].join('')),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),cljs.core.rest(method)))),null,(1),null))], 0))));
}),methods$)], 0))));
}));

(reitit.impl.goog_extend.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq5741){
var G__5742 = cljs.core.first(seq5741);
var seq5741__$1 = cljs.core.next(seq5741);
var G__5743 = cljs.core.first(seq5741__$1);
var seq5741__$2 = cljs.core.next(seq5741__$1);
var G__5744 = cljs.core.first(seq5741__$2);
var seq5741__$3 = cljs.core.next(seq5741__$2);
var G__5745 = cljs.core.first(seq5741__$3);
var seq5741__$4 = cljs.core.next(seq5741__$3);
var G__5746 = cljs.core.first(seq5741__$4);
var seq5741__$5 = cljs.core.next(seq5741__$4);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5742,G__5743,G__5744,G__5745,G__5746,seq5741__$5);
}));

return null;
})()
;
(reitit.impl.goog_extend.cljs$lang$macro = true);

