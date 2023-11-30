import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function SelectedBeast(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.selectedBeast.description}</Modal.Body>
                <Modal.Footer>
                    <Button /*variant="secondary"*/ onClick={props.handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default SelectedBeast;