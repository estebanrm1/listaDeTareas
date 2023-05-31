import { Button, ListGroupItem } from "react-bootstrap";

const ItemTarea = ({propTarea}) => {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            {propTarea}
            <Button variant="danger">Borrar</Button>
            </ListGroupItem>
    );
};

export default ItemTarea;