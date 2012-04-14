    <div class="menu">
<?php
foreach($this->nav as $page => $title) {
    $selected = $page == $current_page ? 'class="menu-section-selected"' : '';
?>
        <div class="menu-section">
            <a href="<?php echo base_url($page); ?>" id="<?php echo $page; ?>" <?php echo $selected; ?>>
                <?php echo $page == 'home' ? 'LOGO' : $title; ?>

            </a>

        </div>

<?php } ?>

        <div class="menu-section">
            <div class="menu-section-inner">
                <div class="icon-container">
                    <div class="icon"><img src="/resources/images/icon_fb.gif" alt="Facebook" /></div>
                    <div class="icon"><img src="/resources/images/icon_tw.png" alt="Twitter" /></div>
                    <div class="icon"><img src="/resources/images/icon_et.png" alt="Etsy" /></div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>

        <div class="clear"></div>

    </div>