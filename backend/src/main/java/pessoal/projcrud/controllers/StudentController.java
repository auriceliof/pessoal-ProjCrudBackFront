package pessoal.projcrud.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pessoal.projcrud.entities.Student;

@RestController
@RequestMapping(value = "/students")
public class StudentController {

	@GetMapping
	public	ResponseEntity<List<Student>> findAll() {
		List<Student> list = new ArrayList<>();
			
			list.add(new Student(1L, "Auricelio Freitas", "123.456.789-00", null, 10999.0));
			list.add(new Student(2L, "Student Test", "123.456.789-00", null, 9999.0));
			
		return	ResponseEntity.ok().body(list);
	}
}
