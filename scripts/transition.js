window.transitionToPage = function(href) {
    console.log(href);
    if (window.location.origin == "http://127.0.0.1:5500/") {
        href = window.location.origin + href.substring(10);
    }
    console.log(href);

    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})