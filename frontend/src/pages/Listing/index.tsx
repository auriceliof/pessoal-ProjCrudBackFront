import './styles.css';
import editIcon from '../../assets/pencil.svg';
import deleteIcon from '../../assets/trash.svg';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function Listing() {

    return (
        <main>
            <section id="proj-listing-section" className="proj-container">
                <div>
                    <h2 className="proj-mt20">Listagem de Alunos</h2>
                </div>

                <div className="proj-mt40 proj-mb20">
                    <div className="proj-listing-btn">
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
                        <tr>
                            <td className='proj-listing-table-id'>1</td>
                            <td>Auricelio Freitas</td>
                            <td>123.456.789-00</td>
                            <td>28/08/1982</td>
                            <td>R$ 10999.0</td>
                            <td><img src={editIcon} alt='Editar'/></td>
                            <td><img src={deleteIcon} alt='Deletar'/></td>
                        </tr>
                        <tr>
                            <td className='proj-listing-table-id'>2</td>
                            <td>Teste1 Sobrenome</td>
                            <td>123.456.789-00</td>
                            <td>08/06/1990</td>
                            <td>R$ 1999.0</td>
                            <td><img src={editIcon} alt='Editar'/></td>
                            <td><img src={deleteIcon} alt='Deletar'/></td>
                        </tr>    
                        <tr>
                            <td className='proj-listing-table-id'>3</td>
                            <td>Teste2 Sobrenome</td>
                            <td>123.456.789-00</td>
                            <td>08/06/1990</td>
                            <td>R$ 12999.0</td>
                            <td><img src={editIcon} alt='Editar'/></td>
                            <td><img src={deleteIcon} alt='Deletar'/></td>
                        </tr>    
                        <tr>
                            <td className='proj-listing-table-id'>4</td>
                            <td>Teste3 Sobrenome</td>
                            <td>123.456.789-00</td>
                            <td>08/06/1990</td>
                            <td>R$ 8999.0</td>
                            <td><img src={editIcon} alt='Editar'/></td>
                            <td><img src={deleteIcon} alt='Deletar'/></td>
                        </tr>   
                        <tr>
                            <td className='proj-listing-table-id'>5</td>
                            <td>Teste4 Sobrenome</td>
                            <td>123.456.789-00</td>
                            <td>08/06/1990</td>
                            <td>R$ 15999.0</td>
                            <td><img src={editIcon} alt='Editar'/></td>
                            <td><img src={deleteIcon} alt='Deletar'/></td>
                        </tr>                                
                    </tbody>
                </table>
            </section>
        </main>
    )
}
