(ns testproject.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]
   [clojure.string :as str]))

;; TODO: How to import shit
;; ;; Your own libraries. JS libraries

;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/items"
     ["" :items]
     ["/:item-id" :item]]
    ["/about" :about]
    ["/analytics" :analytics]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

(path-for :about)
;; -------------------------
;; Page components

(defn home-page []
  (fn []
    [:span.main
     [:h1 "Welcome to testproject"]
     [:ul
      [:li [:a {:href (path-for :items)} "Items of testproject"]]
      [:li [:a {:href "/broken/link"} "Broken link"]]]]))



(defn items-page []
  (fn []
    [:span.main
     [:h1 "The items of testproject"]
     [:ul (map (fn [item-id]
                 [:li {:name (str "item-" item-id) :key (str "item-" item-id)}
                  [:a {:href (path-for :item {:item-id item-id})} "Item: " item-id]])
               (range 1 60))]]))


(defn item-page []
  (fn []
    (let [routing-data (session/get :route)
          item (get-in routing-data [:route-params :item-id])]
      [:span.main
       [:h1 (str "Item " item " of testproject")]
       [:p [:a {:href (path-for :items)} "Back to the list of items"]]])))

(defn lister [items]
 [:ul
  (for [item items]
    ^{:key item} [:li "Item " item])])

(defn lister-user []
  [:div
   "Here is a list:"
   [lister (list "Cake" "Cookie" "Pie")]])

(def click-count (reagent/atom 0))

(defn counting-component []
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(defn timer-component []
  (let [seconds-elapsed (reagent/atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div "Seconds Elapsed: " @seconds-elapsed])))

(defn about-page []
  (fn [] [:span.main
          [:h1 "About testproject"]
          [lister-user]
          [counting-component]
          [timer-component]]))

; (defn- remove-punctuation [sentence]
;   (->>
;     sentence
;     (filter #(or (isLetter? %)
;                  (isSpace? %)
;                  (isDigit? %)))
;     (apply str)))
;
; (defn- extract-words-from [sentence]
;   (str/split (remove-punctuation (str/lower-case sentence)) #"\s+"))
;
; (defn word-count [sentence]
;   (frequencies (extract-words-from sentence)))


(defn analytics-component [words]
  (fn [] [:div.word-counting
          [:p.words "words to be analyzed."]
          [:p.words words]
          ]))

;; [:p.analytics (word-count words)]

(defn analytics []
  (fn [][:div.container
         [:h1 "Analytics Dashboard"]
         [:div [analytics-component "Hi there"]]]))

;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :items #'items-page
    :item #'item-page
    :analytics #'analytics))


;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header
        [:p [:a {:href (path-for :index)} "Home"] " | "
         [:a {:href (path-for :about)} "About testproject"] " | "
         [:a {:href (path-for :analytics)} "Analytics Dashboard"]]]
       [page]
       [:footer
        [:p "testproject was generated by the "
         [:a {:href "https://github.com/reagent-project/reagent-template"} "Reagent Template"] "."]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)
        ))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
