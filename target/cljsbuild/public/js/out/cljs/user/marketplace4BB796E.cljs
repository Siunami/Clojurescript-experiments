(defn marketplace-items []
  (fn []
    [:ul (map (fn [item]
                [:div {:key (str ":item" item)}
                 [:p (str "Item: " item)]
                 [:input {:type "button" :value "Add to cart"
                          :onClick (fn [] (swap!
                                           cart-total
                                           (fn [item] (+ item 5))))}]
                 ]) (range 1 3))]))

(defn marketplace []
  (fn [] [:div.container
          [:h1 "Marketplace"]
          [:p (str "Total: " @cart-total)]
          [:p [marketplace-items]]]))
