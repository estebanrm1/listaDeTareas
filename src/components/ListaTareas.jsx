import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({tareas, setTareas}) => {
    return (
        <ListGroup>
            {
                tareas.map((tarea, indiceTarea)=><ItemTarea tarea={tarea} key={indiceTarea} setTareas={setTareas}></ItemTarea>)
            }
            
        </ListGroup>
    );
};

export default ListaTareas;