(ns testproject.components.marketplace
  (:require
   [reagent.core :as reagent]))


(def cart-total (reagent/atom {}))
(def shop (reagent/atom {:Shoes {:item "Shoes"
                                 :price 5
                                 :img "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"}

                         :Shirt {:item "Shirt"
                                 :price 10
                                 :img "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"}}))



(defn marketplace-component []
  (fn []
    [:div.marketplace.left
     (map (fn [item] [:div.item ^{:key (get-in @shop [item :item])}
                      [:p (str "Item: " (get-in @shop [item :item]))]
                      [:img {:src (get-in @shop [item :img])}]
                      [:input {:type "button" :value "Add to cart"
                                     :onClick (fn [] (swap!
                                                      cart-total
                                                      update item inc))}]])
          (keys @shop))]))


(defn get-cart-contents []
  (fn []
    [:ul
     (for [key (keys @cart-total)]
       ^{:key key}
       [:li (str (get-in @shop [key :item])
                 " "
                 (get-in @cart-total [key]))])]))


(defn get-total []
  (fn []
    [:div (reduce + (map (fn [key]
                           (* (get-in @cart-total [key])
                              (get-in @shop [key :price])))
                         (keys @cart-total)))]))

(defn checkout-component []
  (fn []
    [:div.right
     [:div [get-cart-contents]]
     [:div [:p "Total: " [get-total]]]]))

(defn marketplace []
  (fn [] [:div.marketplace-container
          [:h1 "Marketplace"]
          ;; [:div [get-cart]]
          [marketplace-component]
          [checkout-component]]))
