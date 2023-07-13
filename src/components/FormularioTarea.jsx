import { Form, Button, Spinner } from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState, useEffect } from "react";
import { crearTarea, obtenerTareas } from '../helpers/queries';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const FormularioTarea = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [tareas, setTareas] = useState([]);
    const [spinner, setMostrarSpinner] = useState(true)

    const onSubmit = (tareaNueva) => {
        console.log(tareaNueva);
        crearTarea(tareaNueva).then((respuesta) => {
            if (respuesta.status === 201) {
                Swal.fire('Producto creado', 'La tarea fue creada correctamente', 'success');
                reset();
                traerTareas()
            } else {
                Swal.fire('Ocurrio un error', 'La tarea no pudo ser creada', 'error');
            }
        });
    }

    const traerTareas = () => {
        obtenerTareas().then((respuesta) => {
            setTareas(respuesta);
            setMostrarSpinner(false);
        });
    }
    useEffect(() => {
        traerTareas();
    }, [])

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="Ingrese una tarea" {...register('contenidoTarea', {
                        required: "Ingrese una tarea"
                        , minLength: {
                            value: 5,
                            message: "La cantidad minima de caracteres es de 5"
                        },
                        maxLength: {
                            value: 100
                            , message: "La cantidad máxima de caracteres es 20"
                        }
                    })} />
                    <Form.Text className="text-danger">
                        {errors.contenidoTarea?.message}
                    </Form.Text>
                    <Button variant='primary' type='submit'>Agregar</Button>
                </Form.Group>
            </Form>
            {
                spinner ? (
                    <div className="d-flex justify-content-center">
                        <Spinner variant="primary" animation="border" />
                    </div>) :
                    (<ListaTareas tareas={tareas} setTareas={setTareas}></ListaTareas>)
            }
        </>

    );
};

export default FormularioTarea;