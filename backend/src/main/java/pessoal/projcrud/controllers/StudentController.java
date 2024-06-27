package pessoal.projcrud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pessoal.projcrud.entities.Student;
import pessoal.projcrud.services.StudentService;

@RestController
@RequestMapping(value = "/students")
public class StudentController {
	
	@Autowired
	private StudentService service;

	@GetMapping
	public	ResponseEntity<List<Student>> findAll() {
		
		List<Student> list = service.findAll();
			
		return	ResponseEntity.ok().body(list);
	}
}
