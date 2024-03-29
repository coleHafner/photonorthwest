$(function(){

    //auto control page height
    resizePage();

    $(window).resize(function(){
        resizePage();
        resizeModal();
    });

    $('.menu-section a').click( function(){
        $('.menu-section a').removeClass('menu-section-selected');
        $(this).addClass('menu-section-selected');
    });

    //init shadowbox
    Shadowbox.init({
        continuous:true,
        handleOversize:'resize',
        overlayOpacity:0.6,
        overlayColor:'#ffffff',
        displayNav:true,
        counterType:'default',
        modal:false
    });
});

function loadEventsAlbum() {
    var pwa_data = pwaGetUserData();
    loadPhotoGrid('album', pwa_data.becky.albums.events, function(){padContent()}, pwa_data.becky.id);

}//loadEventsAlbum()

function loadPortraitsAlbum() {
    var pwa_data = pwaGetUserData();
    loadPhotoGrid('album', pwa_data.cole.albums.album1, function(){padContent()}, pwa_data.cole.id);

}//loadPortraitsAlbum()

function padContent() {
    var init_height = $('#content').height();
    var height = init_height + 110;
    //alert('init: ' + init_height + ' now:' + height);
    $('#content').height(height);

    Shadowbox.init({skipSetup: true});
    Shadowbox.setup();

}//padContent()

function resizePage() {
    var viewport_height = parseInt($(window).height());
    $('#page').height(viewport_height);
    $('#content-outer').height(viewport_height - 100);

    var viewport_width = parseInt($(window).width());
    var ideal_width = (viewport_width - 100);
    var menu_margin = viewport_width - (viewport_width - 100)/2;

    $('.menu').width(ideal_width);
    $('.menu').css('left', '50px');
    $('#content').width(ideal_width);
    $('#content').css('left', '50px');



}//resizePage()

function loadPhotoGrid( type, query, callback, user ) {
    pwaLoadPhotoGrid(type, query, callback, user);
}//loadPhotoGrid()

function getViewportInfo() {
	//determine viewPort height, assume non-ie
    var innerHeight = window.innerHeight;
    var innerWidth = window.innerWidth;
    var viewport = new Object();

    //check for ie
    var agent = $.browser;
    var major_version = parseInt( agent.version.slice( 0, 1 ) );

    //get specific
    if( agent.msie == true )
    {
        if( major_version <= 5 )
        {
            innerHeight = document.getElementsByTagName('body')[0].clientHeight;
            innerWidth = document.getElementsByTagName('body')[0].clientWidth;
        }
        else
        {
        	innerHeight = document.documentElement.clientHeight;
        	innerWidth = document.documentElement.clientWidth;
        }
    }

    viewport.innerHeight = innerHeight;
    viewport.innerWidth = innerWidth;
    //alert( "H" + viewport.innerHeight + " W: " + viewport.innerWidth );

    return viewport;

}//getViewportInfo()

function resizeModal() {
        var doc_height = $(document).height();
        var menu_height = $('.menu').height();
        var menu_width = $('.menu').width();
        var width_offset = 150;
        var height_offset = 50;
        var new_height = doc_height - (menu_height + height_offset);
        var margin = height_offset/2;
        var $page = $('.centered-modal');
        $page.height(new_height);
        $page.width(menu_width - width_offset);

}//resizeModal()