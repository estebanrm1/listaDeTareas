import { Form,Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState } from "react";


const FormularioTarea = () => {
    
    const[tarea, setTarea] = useState('');
    const[listaTareas, setListaTareas] = useState([]);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setListaTareas([...listaTareas, tarea]);
        setTarea('');
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
                <Button variant='primary' type='submit'>Agregar</Button>
            </Form.Group>
        </Form>
        <ListaTareas propTareas={listaTareas}></ListaTareas>
        </>
        
    );
};

export default FormularioTarea;