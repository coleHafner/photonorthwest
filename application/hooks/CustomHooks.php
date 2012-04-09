<?php
class CustomHooks {

    function loadTemplate() {
        $this->CI =& get_instance();

        //this is a way to define custom templates on a per-controller basis
        //$nav_template = !empty($this->CI->template_nav) ? $this->CI->template_nav : 'templates/default_nav';
        $head_template = !empty($this->CI->template_head) ? $this->CI->template_head : 'templates/default_head';
        $footer_template = !empty($this->CI->template_footer) ? $this->CI->template_footer : 'templates/default_footer';


        //grab all parts of the page
        $header = $this->CI->load->view($head_template, '', true);
        $content = $this->CI->output->get_output();
        $footer = $this->CI->load->view($footer_template, '', true);
        //$nav = $this->CI->load->view($nav_template, '', true);
        $nav = '';

        //render page
        $this->CI->output->set_output($header . $content . $nav . $footer);

    }//loadTemplate()

}//class CustomHooks