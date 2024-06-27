package pessoal.projcrud.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pessoal.projcrud.entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
