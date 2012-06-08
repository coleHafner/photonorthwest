$(function(){

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

    //hover function
    $('.grid_pic').live('mouseenter', function(){
       $(this).fadeTo('700', '1');
    });

    //hover function
    $('.grid_pic').live('mouseleave', function(){
       $(this).fadeTo('700', '.8');
    });
});

function loadEventsAlbum() {
    var pwa_data = pwaGetUserData();
    loadPhotoGrid('album', pwa_data.becky.albums.events, function(){}, pwa_data.becky.id);

}//loadEventsAlbum()

function loadPortraitsAlbum() {
    var pwa_data = pwaGetUserData();
    loadPhotoGrid('album', pwa_data.cole.albums.album1, function(){}, pwa_data.cole.id);

}//loadPortraitsAlbum()

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