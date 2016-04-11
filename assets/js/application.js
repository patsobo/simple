$(document).ready(function() {
    // highlights the current page on the sidebar menu
    var found = false; 
    $(".sidelist li").each(function() {
        var link = $(this).find("a").attr("href").split("#")[0];
        var url = window.location.href.split("#")[0];
        // check all combinations of having a trailing slash
        if (link + "/" == url || link == url) {
            $(this).addClass("highlight");
            found = true;
            return; // we've done what we want so leave
        }
    });

    // if no link matches the current url, you must be in the blog
    if (!found) $(".sidelist .blog-link").addClass("highlight");

    // same as above for the blog nav links
    var found = false; 
    $(".taglist li").each(function() {
        var link = $(this).find("a").attr("href").split("#")[0];
        var url = window.location.href.split("#")[0];
        // check all combinations of having a trailing slash
        if (link + "/" == url || link == url) {
            $(this).addClass("highlight");
            found = true;
            return; // we've done what we want so leave
        }
    });

    // Handles the hidden blog on the main page
    //$(".blog-button").on("click", function() {
    //    $(".content").removeClass("hidden");
    //});

    // TODO: Add the search stuff (or just change it)
    /*

    // Save search form
    $("#nav-search").keydown(function(e) {
	    if(e.which == 13) {
	    	var searchVal = $('#nav-search').val();
       		sessionStorage.setItem("searchVal", searchVal);
        }
	});

    // Write search term to search form
	$('#search-field').val(sessionStorage.getItem("searchVal"));
    */


    // TODO: add the project list files
    /*

    var sliding = false;

    // Fancy animation on the project entries
    $(".projectList").on("mouseenter mouseleave", ".project-entry", function() {
        $(this).closest('.project-entry').find('.project-buttons').stop();
        $(this).closest('.project-entry').find('.project-buttons').slideToggle(250);
    });

    // Outdated.
    //$(".tag-projects").on('mouseenter', 'article', function() {
    //    $(this).closest('.tag-projects').find('.project-buttons').stop();
    //    $(this).closest('.tag-projects').find('.project-buttons').slideDown(250);
    //});
    //$(".tag-projects").on('mouseleave', 'article', function() {
    //    $(this).closest('.tag-projects').find('.project-buttons').stop();
    //    $(this).closest('.tag-projects').find('.project-buttons').slideUp(250);
    //});

    */


});

