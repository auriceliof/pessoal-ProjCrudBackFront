import './styles.css';
import { Link, useParams } from 'react-router-dom';
import ButtonSecondary from '../../components/ButtonSecondary';
import ButtonPrimary from '../../components/ButtonPrimary';
import FormInput from '../../components/FormInput';
import { useEffect, useState } from 'react';
import * as forms from '../../utils/forms';
import * as studentService from '../../services/student-service';

export default function NewForm() {

    const params = useParams();

    const isEditing = params.studentId !== 'create';

    useEffect(() => {
        if (isEditing) {
            studentService.findById(Number(params.studentId))
            .then(response => {
                console.log(response.data);
            })
        }
    }, [])

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome"
        },
        cpf: {
            value: "",
            id: "cpf",
            name: "cpf",
            type: "text",
            placeholder: "CPF"
        },
        birthDate: {
            value: "",
            id: "birthDate",
            name: "birthDate",
            type: "date",
            placeholder: "Data de Nascimento"
        },
        income: {
            value: 0,
            id: "income",
            name: "income",
            type: "double",
            placeholder: "Salário"           
        },
    });

    function handleInputChange(event: any) {
        setFormData(forms.update(formData, event.target.name, event.target.value));
    }

    return (
        <main>
            <section id="proj-form-section" className="proj-container">
                <div className="proj-form-container">
                    <form className="proj-card proj-form">
                        <h2 className="proj-mb20">Dados do Aluno</h2>
                        <div className="proj-form-controls-container">
                            <div>
                                <h5>Nome</h5>
                                <FormInput 
                                    { ...formData.name }
                                    className="proj-form-control" 
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <h5>Cpf</h5>
                                <FormInput
                                    { ...formData.cpf }
                                    className="proj-form-control" 
                                    onChange={handleInputChange}
                                />
                            </div>      
                            <div>
                                <h5>Data de Nascimento</h5>
                                <FormInput
                                    { ...formData.birthDate }
                                    className="proj-form-control" 
                                    onChange={handleInputChange}

                                />                                
                            </div>      
                            <div>
                                <h5>Renda</h5>
                                <FormInput
                                    { ...formData.income }
                                    className="proj-form-control" 
                                    onChange={handleInputChange}
                                />
                            </div>          
                        </div>

                        <div className="proj-form-buttons">
                            <Link to="/listings">
                                <ButtonSecondary name='Cancelar'/>
                            </Link>
                            <ButtonPrimary name='Salvar' />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
