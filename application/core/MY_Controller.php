<?php

class MY_Controller extends CI_Controller {

    public $nav = array();

    function __construct(){

        $this->nav = array(
            'index' => 'Home',
            'events' => 'Events',
            'portraits' => 'Portraits',
            'about' => 'About',
        );

        parent::__construct();

    }

}//class MY_ApplicationController