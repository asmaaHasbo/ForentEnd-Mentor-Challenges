let shareBtn = document.querySelector(".share-btn");

let sharingBox = document.querySelector(".sharing-box");
let ishidden = true;
shareBtn.onmouseover = function () {
  if (ishidden) {
    ishidden = false;

    sharingBox.style.setProperty("visibility", "visible");
  } else {
    ishidden = true;
    sharingBox.style.setProperty("visibility", "hidden");
  }
};

shareBtn.onmouseleave = function () {
  sharingBox.style.setProperty("visibility", "hidden");
};
