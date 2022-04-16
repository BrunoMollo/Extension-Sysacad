import Materia from "./Materia.js";


export default class MateriaEstadoAcad extends Materia{

    constructor(tr){
        super(tr);
        this.inscripcion=tr.children[2].innerHTML;
        this.plan=tr.children[3].innerHTML;
        this.cod=tr.children[4].innerHTML;

        //Si cuanod no esta insctipto hay solo un <a>, si ya esta inscitpyo hay texto suelto antes de la etiqueta
        this.yaInscripto=(this.inscripcion[0]!="<")

        if(this.yaInscripto){
            let arr=this.inscripcion.split(" ")
            this.com=arr[0]+arr[1];
            this.aula=arr[5];
        //     console.log(this.inscripcion.indexOf("<a"))
        //     console.log(this.inscripcion.indexOf("</a>"))    VEREMOS......
        //     this.linkEliminar=this.inscripcion.
          
        }
    }



}