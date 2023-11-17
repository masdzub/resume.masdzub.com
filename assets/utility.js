// Disable right-click function
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

  
// Prevent viewing page source
document.onkeydown = function (event) {
    if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 83)) {
        return false;
    }
};

//minify html 
document.addEventListener('DOMContentLoaded', function() {
    var html = document.documentElement.outerHTML;
    var minifiedHTML = html.replace(/[\n\r]+|[\s]{2,}/g, ' ').replace(/> </g, '><');
    document.documentElement.outerHTML = minifiedHTML;
  });