(ns content
  (:require [reagent.core :as r]
            ["/antd" :as antd]))


(def antd-app (r/adapt-react-class antd/default))


(defn content []
  (fn []
    [:div
     [antd-app {:text "Click me"
                :onClick #(js/alert "Clicked")}]]))


