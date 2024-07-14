import './styles.css';
import { Link } from 'react-router-dom';
import ButtonSecondary from '../../components/ButtonSecondary';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function NewForm() {

    return (
        <main>
            <section id="proj-form-section" className="proj-container">
                <div className="proj-form-container">
                    <form className="proj-card proj-form">
                        <h2 className="proj-mb20">Dados do Aluno</h2>
                        <div className="proj-form-controls-container">
                            <div>
                                <h5>Nome</h5>
                                <input className="proj-form-control" type="text" placeholder='Nome'/>
                            </div>
                            <div>
                                <h5>Cpf</h5>
                                <input className="proj-form-control" type="text" placeholder='Cpf'/>
                            </div>      
                            <div>
                                <h5>Data de Nascimento</h5>
                                <input className="proj-form-control" type="text" placeholder='Data de Nascimento'/>
                            </div>      
                            <div>
                                <h5>Renda</h5>
                                <input className="proj-form-control" type="text" placeholder='Renda'/>
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
