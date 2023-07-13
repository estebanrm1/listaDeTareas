import { Button, ListGroupItem } from "react-bootstrap";
import { borrarTarea, obtenerTareas } from "../helpers/queries";
import Swal from "sweetalert2";


const ItemTarea = ({tarea, setTareas}) => {

    const handleDelete = ()=>{
        Swal.fire({
          title: 'Esta seguro de borrar esta tarea?',
          text: "El siguiente cambio no podra ser revertido",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, quiero borrar!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            borrarTarea(tarea._id).then((respuesta)=>{
              if(respuesta.status === 200){
                obtenerTareas().then((respuesta)=>{
                  if(respuesta){
                    setTareas(respuesta);
                  }else{
                    Swal.fire('Error', 'Intente realizar esta operación en unos minutos', 'error');
                  }
                })
                Swal.fire(
                  'Borrado!',
                  'La tarea fue borrada.',
                  'success'
                )
              }else{
                Swal.fire({
                  title: "Lo siento!",
                  text: "La tarea no pudo ser eliminada.",
                  icon: "error",
                  confirmButtonColor: "#fa8072",
                });
              }
            })
          }
        })
      }

    return (
        <ListGroupItem className="d-flex justify-content-between">
            {tarea.contenidoTarea}
            <Button variant="danger" onClick={handleDelete}>Borrar</Button>
            </ListGroupItem>
    );
};

export default ItemTarea;