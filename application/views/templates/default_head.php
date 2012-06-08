<?php

$nav = array(
    'events' => 'Events',
    'portraits' => 'Portraits',
    'services' => 'Services',
);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title><?php echo SITE_URL . ' - '; echo !empty($page_title) ? $page_title : ''; ?></title>
    <?php echo link_tag('resources/css/global.css', 'stylesheet', 'text/css', null, null, false); ?>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="/resources/js/global.js"></script>

    <link type="text/css" rel="stylesheet" href="/resources/css/style.css" media="screen" />
    <link type="text/css" rel="stylesheet" href="/resources/js/shadowbox/shadowbox.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Londrina+Sketch">

    <script type="text/javascript" src="/resources/js/shadowbox/shadowbox.js"></script>
    <script type="text/javascript" src="/resources/js/api_common.js"></script>
    <script type="text/javascript" src="/resources/js/api_google_picasa.js"></script>
</head>

<body>

    <!--start page-->
    <div class="page" id="page">

       <div class="nav-container-spacer"></div>

        <!--start nav-->
        <div class="nav-container nav" id="nav">

            <div class="content-container">
	       <a href="/home" class="nav-item">
		  <div class="nav-item-inner">
		     LOGO
		  </div>
	       </a>

<?php
$nav_copy = $nav;
$last = array_pop($nav_copy);

foreach($nav as $link => $display) {
   $class = $display == $last ? 'nav-item-inner-last' : 'nav-item-inner';
?>
                <a href="/<?php echo $link; ?>" class="nav-item">
		   <div class="<?php echo $class; ?>">
			<?php echo $display; ?>
		   </div>
                </a>
<?php } ?>
            </div>

        </div>
        <!-- end nav -->

        <!--start content-->
        <div class="content-container" id="content">

