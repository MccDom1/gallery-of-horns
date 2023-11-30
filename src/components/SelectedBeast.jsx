// Add image
// Change names in props.title locations


import  Modal  from "react-bootstrap/Modal";    
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SelectedBeast(props){
    return(
        <Modal show={props.show} handleClose={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card.Img src={props.image_url} alt="Horned Beast" rounded fluid></Card.Img>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
} 
export default SelectedBeast;