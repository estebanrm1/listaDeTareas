import { Form,Button } from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from "react";


const FormularioTarea = () => {
    const tareasLocalStorage = JSON.parse(localStorage.getItem('listaDeTareas')) || [];
    const[tarea, setTarea] = useState("");
    const[listaTareas, setListaTareas] = useState(tareasLocalStorage);
    
    useEffect(()=>{
        localStorage.setItem('listaDeTareas', JSON.stringify(listaTareas))
    }, [listaTareas]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setListaTareas([...listaTareas, tarea]);
        setTarea('');
    };

const borrarTarea = (nombreTarea) =>{
    let copiaTareas = listaTareas.filter((itemTarea)=> itemTarea !== nombreTarea);
    setListaTareas(copiaTareas);
}

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
                <Button variant='primary' type='submit'>Agregar</Button>
            </Form.Group>
        </Form>
        <ListaTareas propTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
        </>
        
    );
};

export default FormularioTarea;