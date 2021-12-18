<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Prime extends CI_Controller {

	public function index()
	{
		$data['title'] = "Designs";
		$data["header"] = "Designs";
		$data["content"] = "pages/prime";
		$this->load->view("template/template", $data);
	}

	public function two()
	{
		$data['title'] = "Page 2";
		$data["header"] = "Page 2";
		$data["content"] = "pages/grid2";
		$this->load->view("template/template", $data);
	}
	public function three()
	{
		$data['title'] = "Page 3";
		$data["header"] = "Page 3";
		$data["content"] = "pages/grid3";
		$this->load->view("template/template", $data);
	}
	public function four()
	{
		$data['title'] = "Page 4";
		$data["header"] = "Page 4";
		$data["content"] = "pages/page4";
		$this->load->view("template/template", $data);
	}

}

/* End of file Prime.php */
/* Location: ./application/controllers/Prime.php */