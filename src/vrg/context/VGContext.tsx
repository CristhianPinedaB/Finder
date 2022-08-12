import { createContext } from "react";
import { VGstate } from "../interfaces/interfaces";

//Aquí definimos el contexto (información) que va a proover el provider a los componentes.

export type VideoGamesContextProps = {
    vgState: VGstate,
    getVideoGamesByName: ( name : string) => void,
    getVideoGameById: (id: string | undefined) => void
}

export const VGContext = createContext<VideoGamesContextProps>({} as VideoGamesContextProps);