// Compiled by ClojureScript 1.10.597 {}
goog.provide('testproject.components.datastructures');
goog.require('cljs.core');
goog.require('reagent.core');
testproject.components.datastructures.map_structure = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team1","team1",-1475026514),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(65),(13),(2)], null),new cljs.core.Keyword(null,"team2","team2",228351662),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(32),(4)], null)], null));
testproject.components.datastructures.vector_structure = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matt","Jill","Pat"], null));
testproject.components.datastructures.render_vector_structures = (function testproject$components$datastructures$render_vector_structures(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function testproject$components$datastructures$render_vector_structures_$_iter__48641(s__48642){
return (new cljs.core.LazySeq(null,(function (){
var s__48642__$1 = s__48642;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__48642__$1);
if(temp__5735__auto__){
var s__48642__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48642__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__48642__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__48644 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__48643 = (0);
while(true){
if((i__48643 < size__4581__auto__)){
var name = cljs.core._nth.call(null,c__4580__auto__,i__48643);
cljs.core.chunk_append.call(null,b__48644,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),name], null));

var G__48645 = (i__48643 + (1));
i__48643 = G__48645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48644),testproject$components$datastructures$render_vector_structures_$_iter__48641.call(null,cljs.core.chunk_rest.call(null,s__48642__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48644),null);
}
} else {
var name = cljs.core.first.call(null,s__48642__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),name], null),testproject$components$datastructures$render_vector_structures_$_iter__48641.call(null,cljs.core.rest.call(null,s__48642__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,cljs.core.deref.call(null,testproject.components.datastructures.vector_structure));
})()], null);
});
});
testproject.components.datastructures.render_structures = (function testproject$components$datastructures$render_structures(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testproject.components.datastructures.render_vector_structures], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hi"], null)], null);
});
});

//# sourceMappingURL=datastructures.js.map?rel=1576113255206
