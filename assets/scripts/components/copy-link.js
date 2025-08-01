var copyLink = function() {
  var t = document.getElementById("copyLink");
  
  if (!t) {
      console.log("Error: Button with id 'copyLink' not found.");
      return; // Exit if button is not found
  }

  t.addEventListener("click", function() {
      console.log("Button clicked!");

      var e = t.getAttribute("data-link");
      if (!e) {
          console.log("Error: 'data-link' attribute is missing.");
          return; // Exit if data-link attribute is missing
      }
      console.log("Link to copy:", e);

      var o = t.querySelector("#promptText");
      if (!o) {
          console.log("Error: Element with id 'promptText' not found inside the button.");
          return; // Exit if promptText span is not found
      }

      navigator.clipboard.writeText(e).then(function() {
          console.log("Text copied to clipboard successfully!");
          o.textContent = "Link Copied!";
          setTimeout(function() {
              o.textContent = "Copy Link";
          }, 500);
      }).catch(function(err) {
          console.log("Error copying text to clipboard:", err);
          o.textContent = "Failed to Copy";
          setTimeout(function() {
              o.textContent = "Copy Link";
          }, 2000);
      });
  });
};
copyLink();
