import MateriaEstadoAcad from "./Materias/MateriaEstadoAcad.js";
import MateriaInscCursado from "./Materias/MateriaInscCursado.js"
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
                else if(tipo==Conjunto_materias.INSC_CURSADO){
                    this.push(new MateriaInscCursado(trs[i]));
                }
                else{
                    console.log("tipo de materia no valido(Conjunt_materias.js)")
                }
            }
    }
 
}
