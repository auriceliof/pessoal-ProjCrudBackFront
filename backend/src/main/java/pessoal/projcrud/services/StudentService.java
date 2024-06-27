package pessoal.projcrud.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pessoal.projcrud.dto.StudentDTO;
import pessoal.projcrud.entities.Student;
import pessoal.projcrud.repositories.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository repository;
	
	@Transactional(readOnly = true)
	public List<StudentDTO> findAll() {
		
		List<Student> list = repository.findAll();
		
		return list.stream().map(x -> new StudentDTO(x)).collect(Collectors.toList());
	}	
}

