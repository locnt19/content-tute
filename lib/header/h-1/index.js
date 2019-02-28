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
	i.on('click', function () {
		$(this).parents('.language').find('.language-menu').toggleClass('active')
	})
}

function toggleButton() {
	$('.ct-header .main .sg-logo .toggle-button').on('click', function () {
		$(this).find('.button').toggleClass('active')
		$('.ct-header .main .main-nav').toggleClass('active')
	})
}

function toggleSearch() {
	$('.ct-header .search .search-icon').on('click', function () {
		$(this).siblings('.searchbox').toggleClass('active')
	})
}

function headerActive() {
	let i = $('header').height()
	if ($(window).scrollTop() > i) {
		$('header').addClass('active')
	} else {
		$('header').removeClass('active')
	}
}
$(window).resize(function () {
	headerActive()
})
$(document).on('scroll', function () {
	headerActive()
})

function activeClassInHeader() {
	// modify version 3
	const listLi = $('.ct-header .main .main-nav ul li');
	listLi.removeClass('active');
	const currentPage = './' + window.location.pathname.split("/").pop();
	listLi.each(function () {
		if ($(this).find('a').attr('href') == currentPage) {
			console.log('active:', currentPage);
			$(this).addClass('active');
		}
	});
}

$(window).on('load', activeClassInHeader());

$(document).ready(function () {
	toggleLanguage()
	$('header').addClass('fixed-header')
	headerActive()
	toggleButton()
	toggleSearch()
	headerActive()
});
