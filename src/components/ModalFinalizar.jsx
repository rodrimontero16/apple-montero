import Modal from 'react-bootstrap/Modal';
import { FormFInal } from './FormFInal';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';


export const ModalFinalizar = (props) => {
    const {handleConfirmar, datos} = useContext(CartContext);
    const buttonDisabled = !(datos.nombre && datos.apellido && datos.email);

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Por favor, completa con tus datos
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormFInal/>
        </Modal.Body>
        <Modal.Footer>
            <Link to='/detail' onClick={(e) => {
                if (buttonDisabled){
                    e.preventDefault();
                }
            }} > 
                <button type='submit' className='btn btn-outline-dark' onClick={handleConfirmar} disabled={buttonDisabled}>
                    Confirmar
                </button>
            </Link>
        </Modal.Footer>
        </Modal>
    );
}