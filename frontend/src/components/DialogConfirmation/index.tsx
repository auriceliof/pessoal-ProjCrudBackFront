import ButtonPrimary from '../ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary';
import './styles.css';

type Props = {
    id: number;
    message: string;
    onDialogAnswer: Function;
}
export default function DialogConfirmation( {id, message, onDialogAnswer} : Props) {

    return (
        <div className="proj-dialog-background" onClick={() => onDialogAnswer(false, id)}>
            <div className="proj-dialog-box" onClick={(event) => event.stopPropagation}>
                <h2>{message}</h2>

                <div className="proj-dialog-btn">
                    <div onClick={() => onDialogAnswer(false, id)}>
                        <ButtonSecondary name="Não"/>
                    </div>
                    <div onClick={() => onDialogAnswer(true, id)}>
                        <ButtonPrimary name="Sim"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
