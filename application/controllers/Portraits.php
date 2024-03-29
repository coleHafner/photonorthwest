<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Portraits extends MY_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     * 	- or -
     * 		http://example.com/index.php/welcome/index
     * 	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see http://codeigniter.com/user_guide/general/urls.html
     */

    public $template_head = null;
    public $template_footer = null;

    public function index() {

        $data = array('page_title' => 'Portraits', 'current_page' => 'portraits');
        $this->load->view('portraits/index');
        $this->load->view('templates/default_nav', $data);
    }//index()

//test()
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */