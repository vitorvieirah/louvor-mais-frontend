import { Integrante } from "./integrante";
import { Musica } from "./musica.model";

export interface Setlist {
    id_setlist: string;
    data: string;
    musicas: Musica[];
    folgas: Integrante[];
    escalados: Integrante[];
}