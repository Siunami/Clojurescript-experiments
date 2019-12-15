// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reitit.coercion');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('reitit.impl');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.coercion._get_name[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.coercion._get_name["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-name",this$);
}
}
}
});

/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.coercion._get_options[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.coercion._get_options["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-options",this$);
}
}
}
});

/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,specification,data){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,specification,data);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__4488__auto__.call(null,this$,specification,data));
} else {
var m__4485__auto__ = (reitit.coercion._get_apidocs["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__4485__auto__.call(null,this$,specification,data));
} else {
throw cljs.core.missing_protocol("Coercion.-get-apidocs",this$);
}
}
}
});

/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__4488__auto__.call(null,this$,model,name));
} else {
var m__4485__auto__ = (reitit.coercion._compile_model["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__4485__auto__.call(null,this$,model,name));
} else {
throw cljs.core.missing_protocol("Coercion.-compile-model",this$);
}
}
}
});

/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.coercion._open_model[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4488__auto__.call(null,this$,model));
} else {
var m__4485__auto__ = (reitit.coercion._open_model["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4485__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-open-model",this$);
}
}
}
});

/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4488__auto__.call(null,this$,error));
} else {
var m__4485__auto__ = (reitit.coercion._encode_error["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4485__auto__.call(null,this$,error));
} else {
throw cljs.core.missing_protocol("Coercion.-encode-error",this$);
}
}
}
});

/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__4488__auto__.call(null,this$,type,model));
} else {
var m__4485__auto__ = (reitit.coercion._request_coercer["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__4485__auto__.call(null,this$,type,model));
} else {
throw cljs.core.missing_protocol("Coercion.-request-coercer",this$);
}
}
}
});

/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4488__auto__.call(null,this$,model));
} else {
var m__4485__auto__ = (reitit.coercion._response_coercer["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4485__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-response-coercer",this$);
}
}
}
});


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
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k10170,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__10174 = k10170;
switch (G__10174) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10170,else__4442__auto__);

}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__10175){
var vec__10176 = p__10175;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10176,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10176,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10169){
var self__ = this;
var G__10169__$1 = this;
return (new cljs.core.RecordIter((0),G__10169__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__10179 = (function (coll__4436__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__10179(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10171,other10172){
var self__ = this;
var this10171__$1 = this;
return (((!((other10172 == null)))) && ((this10171__$1.constructor === other10172.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10171__$1.__extmap,other10172.__extmap)));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__10169){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__10180 = cljs.core.keyword_identical_QMARK_;
var expr__10181 = k__4447__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__10169),null));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__10169){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__10169,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(reitit.coercion.CoercionError.cljs$lang$type = true);

(reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
}));

(reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.coercion/CoercionError");
}));

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__10173){
var extmap__4478__auto__ = (function (){var G__10183 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__10173);
if(cljs.core.record_QMARK_(G__10173)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__10183);
} else {
return G__10183;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty(extmap__4478__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
});

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
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k10186,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__10190 = k10186;
var G__10190__$1 = (((G__10190 instanceof cljs.core.Keyword))?G__10190.fqn:null);
switch (G__10190__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10186,else__4442__auto__);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__10191){
var vec__10192 = p__10191;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10192,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10192,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$style,self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$keywordize_QMARK_,self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$open_QMARK_,self__.open_QMARK_],null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10185){
var self__ = this;
var G__10185__$1 = this;
return (new cljs.core.RecordIter((0),G__10185__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,cljs.core.cst$kw$style,cljs.core.cst$kw$keywordize_QMARK_,cljs.core.cst$kw$open_QMARK_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__10195 = (function (coll__4436__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__10195(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10187,other10188){
var self__ = this;
var this10187__$1 = this;
return (((!((other10188 == null)))) && ((this10187__$1.constructor === other10188.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10187__$1.in,other10188.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10187__$1.style,other10188.style)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10187__$1.keywordize_QMARK_,other10188.keywordize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10187__$1.open_QMARK_,other10188.open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10187__$1.__extmap,other10188.__extmap)));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$keywordize_QMARK_,null,cljs.core.cst$kw$style,null,cljs.core.cst$kw$open_QMARK_,null,cljs.core.cst$kw$in,null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__10185){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__10196 = cljs.core.keyword_identical_QMARK_;
var expr__10197 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__10199 = cljs.core.cst$kw$in;
var G__10200 = expr__10197;
return (pred__10196.cljs$core$IFn$_invoke$arity$2 ? pred__10196.cljs$core$IFn$_invoke$arity$2(G__10199,G__10200) : pred__10196.call(null,G__10199,G__10200));
})())){
return (new reitit.coercion.ParameterCoercion(G__10185,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10201 = cljs.core.cst$kw$style;
var G__10202 = expr__10197;
return (pred__10196.cljs$core$IFn$_invoke$arity$2 ? pred__10196.cljs$core$IFn$_invoke$arity$2(G__10201,G__10202) : pred__10196.call(null,G__10201,G__10202));
})())){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__10185,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10203 = cljs.core.cst$kw$keywordize_QMARK_;
var G__10204 = expr__10197;
return (pred__10196.cljs$core$IFn$_invoke$arity$2 ? pred__10196.cljs$core$IFn$_invoke$arity$2(G__10203,G__10204) : pred__10196.call(null,G__10203,G__10204));
})())){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__10185,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__10205 = cljs.core.cst$kw$open_QMARK_;
var G__10206 = expr__10197;
return (pred__10196.cljs$core$IFn$_invoke$arity$2 ? pred__10196.cljs$core$IFn$_invoke$arity$2(G__10205,G__10206) : pred__10196.call(null,G__10205,G__10206));
})())){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__10185,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__10185),null));
}
}
}
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$in,self__.in$,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$style,self__.style,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$keywordize_QMARK_,self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$open_QMARK_,self__.open_QMARK_,null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__10185){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__10185,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$in,cljs.core.cst$sym$style,cljs.core.cst$sym$keywordize_QMARK_,cljs.core.cst$sym$open_QMARK_], null);
}));

(reitit.coercion.ParameterCoercion.cljs$lang$type = true);

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
}));

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.coercion/ParameterCoercion");
}));

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__10189){
var extmap__4478__auto__ = (function (){var G__10207 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10189,cljs.core.cst$kw$in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$style,cljs.core.cst$kw$keywordize_QMARK_,cljs.core.cst$kw$open_QMARK_], 0));
if(cljs.core.record_QMARK_(G__10189)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__10207);
} else {
return G__10207;
}
})();
return (new reitit.coercion.ParameterCoercion(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(G__10189),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(G__10189),cljs.core.cst$kw$keywordize_QMARK_.cljs$core$IFn$_invoke$arity$1(G__10189),cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(G__10189),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$query,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$query_DASH_params,cljs.core.cst$kw$string,true,true),cljs.core.cst$kw$body,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$body_DASH_params,cljs.core.cst$kw$body,false,false),cljs.core.cst$kw$form,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$form_DASH_params,cljs.core.cst$kw$string,true,true),cljs.core.cst$kw$header,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$headers,cljs.core.cst$kw$string,true,true),cljs.core.cst$kw$path,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$string,true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Request coercion failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$coercion_SLASH_request_DASH_coercion,cljs.core.cst$kw$coercion,coercion,cljs.core.cst$kw$value,value,cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$request,in$], null),cljs.core.cst$kw$request,request], null)], 0)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Response coercion failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$coercion_SLASH_response_DASH_coercion,cljs.core.cst$kw$coercion,coercion,cljs.core.cst$kw$value,value,cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response,cljs.core.cst$kw$body], null),cljs.core.cst$kw$request,request,cljs.core.cst$kw$response,response], null)], 0)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$muuntaja_SLASH_request.cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__10209){
var map__10210 = p__10209;
var map__10210__$1 = (((((!((map__10210 == null))))?(((((map__10210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10210):map__10210);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10210__$1,cljs.core.cst$kw$reitit$coercion_SLASH_extract_DASH_request_DASH_format,reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10210__$1,cljs.core.cst$kw$reitit$coercion_SLASH_parameter_DASH_coercion,reitit.coercion.default_parameter_coercion);
if(cljs.core.truth_(coercion)){
var temp__5733__auto__ = (parameter_coercion.cljs$core$IFn$_invoke$arity$1 ? parameter_coercion.cljs$core$IFn$_invoke$arity$1(type) : parameter_coercion.call(null,type));
if(cljs.core.truth_(temp__5733__auto__)){
var map__10212 = temp__5733__auto__;
var map__10212__$1 = (((((!((map__10212 == null))))?(((((map__10212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10212):map__10212);
var keywordize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10212__$1,cljs.core.cst$kw$keywordize_QMARK_);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10212__$1,cljs.core.cst$kw$open_QMARK_);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10212__$1,cljs.core.cst$kw$in);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10212__$1,cljs.core.cst$kw$style);
var transform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var model__$1 = (cljs.core.truth_(open_QMARK_)?reitit.coercion._open_model(coercion,model):model);
var coercer = reitit.coercion._request_coercer(coercion,style,model__$1);
return (function (request){
var value = (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(request) : transform.call(null,request));
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null,request));
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,_){
return cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$muuntaja_SLASH_response.cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,body,p__10214){
var map__10215 = p__10214;
var map__10215__$1 = (((((!((map__10215 == null))))?(((((map__10215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10215):map__10215);
var extract_response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10215__$1,cljs.core.cst$kw$extract_DASH_response_DASH_format,reitit.coercion.extract_response_format_default);
if(cljs.core.truth_(coercion)){
var coercer = reitit.coercion._response_coercer(coercion,body);
return (function (request,response){
var format = (extract_response_format.cljs$core$IFn$_invoke$arity$2 ? extract_response_format.cljs$core$IFn$_invoke$arity$2(request,response) : extract_response_format.call(null,request,response));
var value = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(response);
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.response_coercion_failed_BANG_(result,coercion,value,request,response);
} else {
return result;
}
});
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error(cljs.core.cst$kw$coercion.cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$request,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$response], 0)),cljs.core.cst$kw$coercion,reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv((function (acc,k,coercer){
return reitit.impl.fast_assoc(acc,k,(coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(request) : coercer.call(null,request)));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.coerce_response = (function reitit$coercion$coerce_response(coercers,request,response){
if(cljs.core.truth_(response)){
var temp__5733__auto__ = (function (){var or__4185__auto__ = (function (){var G__10218 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response);
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(G__10218) : coercers.call(null,G__10218));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__10219 = cljs.core.cst$kw$default;
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(G__10219) : coercers.call(null,G__10219));
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var coercer = temp__5733__auto__;
return reitit.impl.fast_assoc(response,cljs.core.cst$kw$body,(coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(request,response) : coercer.call(null,request,response)));
} else {
return response;
}
} else {
return null;
}
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(coercion,parameters,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var iter__4582__auto__ = (function reitit$coercion$request_coercers_$_iter__10220(s__10221){
return (new cljs.core.LazySeq(null,(function (){
var s__10221__$1 = s__10221;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10221__$1);
if(temp__5735__auto__){
var s__10221__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10221__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__10221__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__10223 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__10222 = (0);
while(true){
if((i__10222 < size__4581__auto__)){
var vec__10224 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__10222);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10224,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__10223,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null));

var G__10230 = (i__10222 + (1));
i__10222 = G__10230;
continue;
} else {
var G__10231 = (i__10222 + (1));
i__10222 = G__10231;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10223),reitit$coercion$request_coercers_$_iter__10220(cljs.core.chunk_rest(s__10221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10223),null);
}
} else {
var vec__10227 = cljs.core.first(s__10221__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10227,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null),reitit$coercion$request_coercers_$_iter__10220(cljs.core.rest(s__10221__$2)));
} else {
var G__10232 = cljs.core.rest(s__10221__$2);
s__10221__$1 = G__10232;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})()));
});
reitit.coercion.response_coercers = (function reitit$coercion$response_coercers(coercion,responses,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$coercion$response_coercers_$_iter__10233(s__10234){
return (new cljs.core.LazySeq(null,(function (){
var s__10234__$1 = s__10234;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10234__$1);
if(temp__5735__auto__){
var s__10234__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10234__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__10234__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__10236 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__10235 = (0);
while(true){
if((i__10235 < size__4581__auto__)){
var vec__10237 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__10235);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10237,(0),null);
var map__10240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10237,(1),null);
var map__10240__$1 = (((((!((map__10240 == null))))?(((((map__10240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10240):map__10240);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10240__$1,cljs.core.cst$kw$body);
if(cljs.core.truth_(body)){
cljs.core.chunk_append(b__10236,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,body,opts)], null));

var G__10247 = (i__10235 + (1));
i__10235 = G__10247;
continue;
} else {
var G__10248 = (i__10235 + (1));
i__10235 = G__10248;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10236),reitit$coercion$response_coercers_$_iter__10233(cljs.core.chunk_rest(s__10234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10236),null);
}
} else {
var vec__10242 = cljs.core.first(s__10234__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10242,(0),null);
var map__10245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10242,(1),null);
var map__10245__$1 = (((((!((map__10245 == null))))?(((((map__10245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10245):map__10245);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10245__$1,cljs.core.cst$kw$body);
if(cljs.core.truth_(body)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,body,opts)], null),reitit$coercion$response_coercers_$_iter__10233(cljs.core.rest(s__10234__$2)));
} else {
var G__10249 = cljs.core.rest(s__10234__$2);
s__10234__$1 = G__10249;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(responses);
})());
});
reitit.coercion.get_apidocs = (function reitit$coercion$get_apidocs(this$,specification,data){
var swagger_parameter = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$query,cljs.core.cst$kw$query,cljs.core.cst$kw$body,cljs.core.cst$kw$body,cljs.core.cst$kw$form,cljs.core.cst$kw$formData,cljs.core.cst$kw$header,cljs.core.cst$kw$header,cljs.core.cst$kw$path,cljs.core.cst$kw$path,cljs.core.cst$kw$multipart,cljs.core.cst$kw$formData], null);
var G__10250 = specification;
var G__10250__$1 = (((G__10250 instanceof cljs.core.Keyword))?G__10250.fqn:null);
switch (G__10250__$1) {
case "swagger":
return reitit.coercion._get_apidocs(this$,specification,cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$parameters,(function (parameters){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10251){
var vec__10252 = p__10251;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10252,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(swagger_parameter.cljs$core$IFn$_invoke$arity$1 ? swagger_parameter.cljs$core$IFn$_invoke$arity$1(k) : swagger_parameter.call(null,k)),v], null);
}),parameters)));
})));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10250__$1)].join('')));

}
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to create compiled coercers into Match under
 *   `:result. A pre-requisite to use [[coerce!]].
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__10256,opts){
var vec__10257 = p__10256;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10257,(0),null);
var map__10260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10257,(1),null);
var map__10260__$1 = (((((!((map__10260 == null))))?(((((map__10260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10260):map__10260);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10260__$1,cljs.core.cst$kw$parameters);
var coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10260__$1,cljs.core.cst$kw$coercion);
if(cljs.core.truth_((function (){var and__4174__auto__ = parameters;
if(cljs.core.truth_(and__4174__auto__)){
return coercion;
} else {
return and__4174__auto__;
}
})())){
return reitit.coercion.request_coercers(coercion,parameters,opts);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled
 *   coercers under `:result` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced
 *   If coercion or parameters are not defined, return `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5733__auto__ = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(temp__5733__auto__)){
var coercers = temp__5733__auto__;
return reitit.coercion.coerce_request(coercers,match);
} else {
return null;
}
});
