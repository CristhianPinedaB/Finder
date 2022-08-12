import { VG, VGstate } from "../interfaces/interfaces";

// Inicializamos nuestro estado inicial-----------------------
export const INITIAL_STATE: VGstate = {
    videogames: [],
    videogameDetail: {}
  }

// Tipamos las actions que van a ser despachadas-----------------------------
type VGAction = 
 | {type: 'getVideoGamesByName', payload: VG[]}
 | {type: 'getVideoGameById', payload: VG};

// Creamos nuestra función Reducer que va a recibir el estado y la action ----------------
export const vgReducer = (state: VGstate, action: VGAction): VGstate => {
    // Destructuramos action en : type y payload
    const {type, payload} = action

    // Evaluamos cada caso
    switch (type) {
        case 'getVideoGamesByName':
            return {
                ...state,
                videogames: payload
            };
        case 'getVideoGameById':
            return {
                ...state,
                videogameDetail: payload
            };
    
        default:
            return state;
    }
}