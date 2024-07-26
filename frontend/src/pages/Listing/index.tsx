import './styles.css';
import editIcon from '../../assets/pencil.svg';
import deleteIcon from '../../assets/trash.svg';
import ButtonPrimary from '../../components/ButtonPrimary';
import { useEffect, useState } from 'react';
import * as studentService from "../../services/student-service";
import { StudentDTO } from '../../models/students';
import { formatDateBR } from '../../utils/format';
import { useNavigate } from 'react-router-dom';

type QueryParams = {
    page: number;
    name: string;
}

export default function Listing() {

    const navigate = useNavigate();

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    const [students, setStudents] = useState<StudentDTO[]>([])


    useEffect(() => {
        studentService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                setStudents(response.data.content)
            })
    }, [])

    function handleNewProduct() {
        navigate("/listings/create")
    };

    function handleUpdate(studentId: number) {
        navigate(`/listings/${studentId}`);
    }

    return (
        <main>
            <section id="proj-listing-section" className="proj-container">
                <div>
                    <h2 className="proj-mt20">Listagem de Alunos</h2>
                </div>

                <div className="proj-mt40 proj-mb20">
                    <div className="proj-listing-btn" onClick={handleNewProduct}>
                        <ButtonPrimary name='Novo' />
                    </div>
                </div>

                <table className="proj-listing-table proj-mb20 proj-mt20">
                    <thead>
                        <tr>
                            <th className='proj-listing-table-id'>ID</th>
                            <th>NOME</th>
                            <th>CPF</th>
                            <th>NASCIMENTO</th>
                            <th>RENDA</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            students.map(student => (
                                <tr key={student.id}>
                                    <td className='proj-listing-table-id'>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.cpf}</td>
                                    <td>{formatDateBR(student.birthDate)}</td>
                                    <td>R$ {student.income}</td>
                                    <td><img src={editIcon} alt='Editar' onClick={() => {handleUpdate(student.id)}}/></td>
                                    <td><img src={deleteIcon} alt='Deletar'/></td>
                                </tr>                                
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )
}
