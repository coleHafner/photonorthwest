<!DOCTYPE html>
<html lang="en">

<head>
    <title><?php echo SITE_URL . ' - '; echo !empty($page_title) ? $page_title : ''; ?></title>
    <?php echo link_tag('resources/css/global.css', 'stylesheet', 'text/css', null, null, false); ?>

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="/resources/js/global.js"></script>

    <link type="text/css" rel="stylesheet" href="/resources/css/style.css" media="screen" />
    <link type="text/css" rel="stylesheet" href="/resources/js/shadowbox/shadowbox.css" media="screen" />

    <script type="text/javascript" src="/resources/js/shadowbox/shadowbox.js"></script>
    <script type="text/javascript" src="/resources/js/api_common.js"></script>
    <script type="text/javascript" src="/resources/js/api_google_picasa.js"></script>
</head>

<body>

<div class="page" id="page">

    <div id="content-outer" class="content">
        <div id="content" class="padder-10">

