package pessoal.projcrud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pessoal.projcrud.dto.StudentDTO;
import pessoal.projcrud.services.StudentService;

@RestController
@RequestMapping(value = "/students")
public class StudentController {
	
	@Autowired
	private StudentService service;

	@GetMapping
	public	ResponseEntity<List<StudentDTO>> findAll() {
		
		List<StudentDTO> list = service.findAll();
			
		return	ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<StudentDTO> findById(@PathVariable Long id) {
		
		StudentDTO dto = service.findById(id);
		
		return ResponseEntity.ok().body(dto);
	}
}



















