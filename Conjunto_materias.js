import Materia from "./Materia.js";
export default class Conjunto_materias extends Array{


    constructor(paramet){
        super();
        if(paramet=="TODAS"){
            let trs=document.querySelectorAll("tr .textoTabla");
            for(let i=1; i<trs.length; i++){
                this.push(new Materia(trs[i]));
            }
        }

        if(paramet.constructor.name=="Array"){
            paramet.forEach(
                (materia)=>this.push(materia)
            );
        }
    }
 


    filter(filtro){
        let sub=[...this];

        Object.entries(filtro).forEach(
            criterio=> 
                sub=sub.filter(
                    (materia)=>{return materia[criterio[0]]==criterio[1]}
            )      
        );

        return new Conjunto_materias(sub);
    }

}
