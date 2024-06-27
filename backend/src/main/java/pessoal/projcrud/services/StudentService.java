package pessoal.projcrud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pessoal.projcrud.entities.Student;
import pessoal.projcrud.repositories.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository repository;
	
	@Transactional(readOnly = true)
	public List<Student> findAll() {
		
		return repository.findAll();
	}	
}

