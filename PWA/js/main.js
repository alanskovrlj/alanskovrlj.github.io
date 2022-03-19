window.onload = () => {
    "use strict";
  
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./PWA/sw.js");
    }
  };