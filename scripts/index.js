// shrink header after scrolling down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var navs = document.getElementsByClassName("nav-link");
    var button = document.getElementsByClassName("mobile-nav-toggle");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementsByClassName("logo-size")[0].style.width = "100px";

        // document.getElementsByClassName("logo-size")[0].style.maxHeight = "80px";

        document.getElementsByClassName("header-container")[0].style.maxHeight = "3rem";

        button[0].style.top = "0.5rem";
        button[0].style.right = "0.5rem";

        for(let i=0; i<navs.length; i++) {
            navs[i].style.fontSize = "1rem";
        }

    } else {

        document.getElementsByClassName("logo-size")[0].style.width = "150px";

        // document.getElementsByClassName("logo-size")[0].style.maxHeight = "100px";

        document.getElementsByClassName("header-container")[0].style.maxHeight = "4rem";

        button[0].style.top = "1rem";
        button[0].style.right = "1rem";
        
        for(let i=0; i<navs.length; i++) {
            navs[i].style.fontSize = "1.25rem";
        }

    }
}