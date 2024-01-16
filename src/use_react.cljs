(ns use-react
  (:require [goog.dom :as gdom]
            [reagent.core :as r]
            [reagent.dom.client :as rc]
            [content :refer [content]]))


(defonce root (rc/create-root (gdom/getElement "root")))

(defn init []
  (.render root (r/as-element [content])))
