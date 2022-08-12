import { useContext } from "react";
import { VGContext } from "../context/VGContext";

// CREAMOS NUESTROS PROPIOS HOOKS PARA VIDEOGAMES---------------------------
export const useVideogame = () => {
    // Ejecutando nuestro useContext(), destructuramos el estado global y la funciones
    const {vgState , getVideoGamesByName, getVideoGameById} = useContext(VGContext);
    // Destructuramos los estados de nuestro estado global
    //const { videogames, videogameDetail } = vgState

    // Retornamos un objeto, en donde cada propiedad tenga como valor un estado o
    // una función, para poder usar este hook los componentes.
    return {
        videogames: vgState?.videogames,
        videogameDetail: vgState?.videogameDetail,
        getVideoGamesByName,
        getVideoGameById
    }
}