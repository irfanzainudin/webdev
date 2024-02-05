var observeDOM = (function () {
  var MutationObserver =
    window.MutationObserver || window.WebKitMutationObserver;

  return function (obj, callback) {
    if (!obj || obj.nodeType !== 1) return;

    if (MutationObserver) {
      // define a new observer
      var mutationObserver = new MutationObserver(callback);

      // have the observer observe for changes in children
      mutationObserver.observe(obj, { childList: true, subtree: true });
      return mutationObserver;
    }

    // browser support fallback
    else if (window.addEventListener) {
      obj.addEventListener("DOMNodeInserted", callback, false);
      obj.addEventListener("DOMNodeRemoved", callback, false);
    }
  };
})();

var saveToWishlist = function () {
  console.log("hello");
};

observeDOM(document.body, function (m) {
  var b = document.getElementsByTagName("b");
  // console.log(b[0]);
  console.log(b[0].textContent);
  if (b[0]) {
    if (window.hasRun) {
      return;
    }
    window.hasRun = true;
    // Append button
    const btn = document.createElement("button");
    btn.textContent = "Save";
    btn.style.margin = "10px";
    btn.style.padding = "10px 16px";
    // btn.style.backgroundColor = "#198754";
    btn.style.backgroundColor = "green";
    btn.style.borderRadius = "4px";
    btn.style.color = "#fff";
    btn.style.pointerEvents = "auto";
    btn.onclick = saveToWishlist;
    b[0].parentNode.parentNode.appendChild(btn);
  }
});
