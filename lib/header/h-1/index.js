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
function toggleLanguage() {
    let i = $('.ct-header .main .language .language-toggle')
    i.on('click', function() {
        $(this).parents('.language').find('.language-menu').toggleClass('active')
    })
}
function toggleButton() {
    $('.ct-header .main .sg-logo .toggle-button').on('click', function() {
        $(this).find('.button').toggleClass('active')
        $('.ct-header .main .main-nav').toggleClass('active')
    })
}
function toggleSearch() {
    $('.ct-header .search .search-icon').on('click', function() {
        $(this).siblings('.searchbox').toggleClass('active')
    })
}
$(document).ready(function() {
    toggleLanguage()
    toggleButton()
    toggleSearch()
    positionMainNav()
})
