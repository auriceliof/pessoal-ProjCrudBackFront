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
                            <th className="proj-listing-table-th">ID</th>
                            <th className="proj-listing-table-th">NOME</th>
                            <th className="proj-listing-table-th">CPF</th>
                            <th className="proj-listing-table-th">NASCIMENTO</th>
                            <th className="proj-listing-table-th">RENDA</th>
                            <th className="proj-listing-table-th"></th>
                            <th className="proj-listing-table-th"></th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td className="proj-listing-table-td">1</td>
                            <td className="proj-listing-table-td">Auricelio Freitas</td>
                            <td className="proj-listing-table-td">123.456.789-00</td>
                            <td className="proj-listing-table-td">28/08/1982</td>
                            <td className="proj-listing-table-td">R$ 10999.0</td>
                            <td className="proj-listing-table-td"><img src={editIcon} alt='Editar'/></td>
                            <td className="proj-listing-table-td"><img src={deleteIcon} alt='Deletar'/></td>
                            <td className="proj-listing-table-td"></td>
                            <td className="proj-listing-table-td"></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Miguel Stenio</td>
                            <td>123.456.789-00</td>
                            <td>16/10/187</td>
                            <td>R$ 20999.0</td>
                            <td><img src={editIcon} alt='Editar'/></td>
                            <td><img src={deleteIcon} alt='Deletar'/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Teste Sobrenome</td>
                            <td>123.456.789-00</td>
                            <td>08/06/1990</td>
                            <td>R$ 1999.0</td>
                            <td><img src={editIcon} alt='Editar'/></td>
                            <td><img src={deleteIcon} alt='Deletar'/></td>
                        </tr>                               
                    </tbody>
                </table>
            </section>
        </main>
    )
}
