import MateriaEstadoAcad from "./Materias/MateriaEstadoAcad.js";
export default class Conjunto_materias extends Array{
    static ESTADO_ACADEMICO=1;
    static INSC_CURSADO=2;
    static INSC_EXAMEN=3;

    constructor(tipo){
        super();
            let trs=document.querySelectorAll("tr .textoTabla");
            for(let i=1; i<trs.length; i++){
                if(tipo===Conjunto_materias.ESTADO_ACADEMICO){
                    this.push(new MateriaEstadoAcad(trs[i]));
                }   
            }
    }
 
}
