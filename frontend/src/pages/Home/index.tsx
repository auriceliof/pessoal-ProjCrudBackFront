import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/ButtonPrimary';
import './styles.css';

export default function Home() {

    return (
        <main>
            <section className='proj-container'>
                <div className='proj-mt20 proj-card'>
                    <div className="proj-home-content">
                        <h1>Bem-vindo ao projeto CRUD no frontend!!!</h1>
                    </div>
                    <div className="proj-home-content">
                        <h5>Clique no botão abaixo para iniciar</h5>
                    </div>
                    <div className='proj-home-btn'>
                        <Link to="/listings">
                            <ButtonPrimary name='Entrar'/>
                        </Link>
                    </div>
                </div>            
            </section>         
        </main>
    )
}
