import './styles.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ButtonSecondary from '../../components/ButtonSecondary';
import ButtonPrimary from '../../components/ButtonPrimary';
import FormInput from '../../components/FormInput';
import { useEffect, useState } from 'react';
import * as forms from '../../utils/forms';
import * as studentService from '../../services/student-service';

export default function NewForm() {

    const params = useParams();

    const navigate = useNavigate();

    const isEditing = params.studentId !== 'create';

    useEffect(() => {

        if (isEditing) {
            studentService.findById(Number(params.studentId))
            .then(response => {
                const newFormData = forms.updateAll(formData, response.data);
                setFormData(newFormData);
            })
        }
    }, [])

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function(value: any) {
                return value.length >= 3 && value.length <= 50;
            },
            message: "Favor informar um nome entre 3 e 50 caracteres"
        },
        cpf: {
            value: "",
            id: "cpf",
            name: "cpf",
            type: "text",
            placeholder: "CPF",
            validation: function(value: any) {
                return /^(([0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}))$/.test(value);
            },
            message: "Favor informar um CPF válido"

        },
        birthDate: {
            value: "",
            id: "birthDate",
            name: "birthDate",
            type: "date",
            placeholder: "Data de Nascimento",
            validation: function(value: any) {
                return /^(([0-9]{4}.?[0-9]{2}.?[0-9]{2}))$/.test(value);
            },
            message: "Favor informar uma data válida"
        },
        income: {
            value: [],
            id: "income",
            name: "income",
            type: "double",
            placeholder: "Salário",
            validation: function(value: any) {
                return Number(value) > 0;
            },
            message: "Favor informar um valor positivo"           
        },
    });

    function handleSubmit(event: any) {
        event.preventDefault();

        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }

        const requestBody = forms.toValues(formData);
        if (isEditing) {
            requestBody.id = params.studentId;
        }

        const request = isEditing

            ? studentService.updateRequest(requestBody)
            : studentService.insertRequest(requestBody)

        request
            .then(() => {
                navigate("/listings");
            });
    }

    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    return (
        <main>
            <section id="proj-form-section" className="proj-container">
                <div className="proj-form-container">
                    <form className="proj-card proj-form" onSubmit={handleSubmit}>
                        <h2 className="proj-mb20">Dados do Aluno</h2>
                        <div className="proj-form-controls-container">
                            <div>
                                <h5>Nome</h5>
                                <FormInput 
                                    { ...formData.name }
                                    className="proj-form-control" 
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="proj-form-error">{formData.name.message}</div>
                            </div>
                            <div>
                                <h5>Cpf</h5>
                                <FormInput
                                    { ...formData.cpf }
                                    className="proj-form-control" 
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="proj-form-error">{formData.cpf.message}</div>
                            </div>      
                            <div>
                                <h5>Data de Nascimento</h5>
                                <FormInput
                                    { ...formData.birthDate }
                                    className="proj-form-control" 
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />                              
                                <div className="proj-form-error">{formData.birthDate.message}</div>  
                            </div>      
                            <div>
                                <h5>Renda</h5>
                                <FormInput
                                    { ...formData.income }
                                    className="proj-form-control" 
                                    onTurnDirty={handleTurnDirty}
                                    onChange={handleInputChange}
                                />
                                <div className="proj-form-error">{formData.income.message}</div>
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
