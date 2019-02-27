const app = {
    ready: (fn) => {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    },
    scroll: (fn) => {
        window.addEventListener('scroll', fn)
    },
    resize: (fn) => {
        window.addEventListener('resize', fn)
    },
    select: (el) => {
        return document.querySelector(el)
    },
    selectAll: (el) => {
        return document.querySelectorAll(el)
    },
    toggleClass: (el, cl) => {
        el.classList.toggle(cl)
    },
    addClass: (el, className) => {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    },
    removeClass: (el, className) => {
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },
    bgImg: () => {
        let a = app.selectAll('[bg-img]')
        for (i = 0; i < a.length; i++) {
            let el = a[i],
                bgimg = el.getAttribute('bg-img'),
                pos = el.getAttribute('bg-pos'),
                size = el.getAttribute('bg-size')
            if (pos != null) {
                el.style.backgroundPosition = pos;
            } else {
                el.style.backgroundPosition = 'center center'
            }
            if (size != null) {
                el.style.backgroundSize = size;
            } else {
                el.style.backgroundSize = 'cover'
            }
            el.style.backgroundImage = 'url(' + bgimg + ')'
        }
    },
    backToTop: () => {
        app.select('#backToTop').addEventListener('click', function() {
            window.scrollTo({
                behavior: 'smooth',
                left: 0,
                top: 0
            });
        })
    },
    fixedMain: () => {
        let headerHeight = app.select('header').offsetHeight
        app.select('main').style.paddingTop = headerHeight + 'px'
    },
    aos: () => {
        AOS.init({
            duration: 1200,
            once: true,
            disable: 'phone'

        });
    },
    ie: () => {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            app.addClass(app.select('html'), 'ie-browser')
        }
    }
}
app.ready(function() {
    // app.bgImg()
    app.backToTop()
    app.fixedMain()
    app.aos()
    app.ie()
})
