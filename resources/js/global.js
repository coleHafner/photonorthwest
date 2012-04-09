$(function(){

    //auto control page height
    resizePage();

    $(window).resize(function(){
        resizePage();
    });

    //init shadowbox
    Shadowbox.init({
        continuous:true,
        handleOversize:'resize',
        overlayOpacity:0.8,
        overlayColor:'#000000',
        displayNav:true,
        counterType:'default',
        modal:false
    });

    $('#events').click(function(){

    });

    $('#portraits').click(function(){

    });

});

function resizePage() {
    var viewport_height = parseInt($(window).height());
    $('#page').height(viewport_height);

}//resizePage()

function loadPhotoGrid( type, query, user ) {
	var callback = function(){ Shadowbox.init({ skipSetup: true }); Shadowbox.setup(); }
	pwaLoadPhotoGrid( type, query, callback, user );

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
