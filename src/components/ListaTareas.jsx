import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({propTareas}) => {
    return (
        <ListGroup>
            {
                propTareas.map((tarea, indiceTarea)=><ItemTarea propTarea={tarea} key={indiceTarea}></ItemTarea>)
            }
            
        </ListGroup>
    );
};

export default ListaTareas;