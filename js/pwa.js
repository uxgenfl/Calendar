/* Persistent storage + service worker */
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}
if("serviceWorker"in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})})}
