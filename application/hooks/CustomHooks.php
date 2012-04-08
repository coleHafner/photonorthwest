<?php
class CustomHooks {

    function loadTemplate() {
        $this->CI =& get_instance();

        //this is a way to define custom templates on a per-controller basis
        $head_template = !empty($this->CI->template_head) ? $this->CI->template_head : 'templates/default_head';
        $footer_template = !empty($this->CI->template_footer) ? $this->CI->template_footer : 'templates/default_footer';


        //grab all parts of the page
        $header = $this->CI->load->view($head_template, '', true);
        $content = $this->CI->output->get_output();
        $footer = $this->CI->load->view($footer_template, '', true);

        //render page
        $this->CI->output->set_output($header . $content . $footer);

    }//loadTemplate()

}//class CustomHooks