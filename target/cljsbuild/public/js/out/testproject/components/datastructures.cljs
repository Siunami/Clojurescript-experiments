(ns testproject.components.datastructures
  (:require
   [reagent.core :as reagent]))

(def map-structure (reagent/atom {:team1 [65 13 2]
                                   :team2 [12 32 4]}))

(def vector-structure (reagent/atom ["Matt" "Jill" "Pat"]))

(defn render-vector-structures []
  (fn [] [:div
          (for [name @vector-structure]
           [:p name])]))

(defn render-structures []
  (fn [] [:div
          [:div [render-vector-structures]]
          [:div "Hi"]]))


; (doseq [key @map-structure]
;     [:div (for [num (rest key)
;                 [:p num]])])
