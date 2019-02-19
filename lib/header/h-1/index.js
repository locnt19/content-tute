const language = new MappingListener({
    selector: '.ct-header .language',
    desktopWrapper: '.ct-header .topbar',
    desktopMethod: 'appendTo',
    mobileWrapper: '.ct-header .sg-logo',
    mobileMethod: 'prependTo',
    breakpoint: 992,
}).watch()
const search = new MappingListener({
    selector: '.ct-header .search',
    mobileWrapper: '.ct-header .main-nav',  
    mobileMethod: 'appendTo',
    desktopWrapper: '.ct-header .topbar',
    desktopMethod: 'prependTo',
    breakpoint: 992,
}).watch()
$(document).ready(function() {
    toggleLanguage()
    toggleButton()
    toggleSearch()
    positionMainNav()
})
