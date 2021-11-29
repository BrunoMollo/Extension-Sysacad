import Materia from "../-materias/Materia.js";
import Conjunto_materias from "./Conjunto_materias.js";

export default class Materias_Todas extends Conjunto_materias{
    constructor(){
        super();
        let trs=document.querySelectorAll("tr .textoTabla");
        for(let i=1; i<trs.length; i++){
            this.push(new Materia(trs[i]));
        }
    }
}
