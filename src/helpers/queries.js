
const URL_tareas = import.meta.env.VITE_API_TAREAS

export const obtenerTareas = async () => {
    try {
        const respuesta = await fetch(URL_tareas);
        const listaTareas = await respuesta.json();
        return listaTareas;
    } catch (error) {
        console.log(error);
    }
}
export const borrarTarea= async(id)=>{
    try{
    const respuesta = await fetch(URL_tareas+'/'+id,{
        method:'DELETE',
    })
    return respuesta;
    }catch(error){
        console.log(error)
    }
}
export const crearTarea = async (tarea) => {
    try {
        const respuesta = await fetch(URL_tareas,{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(tarea)
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}