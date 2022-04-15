import Materia from "./Materia.js";


export default class MateriaEstadoAcad extends Materia{

    constructor(tr){
        super(tr);
        this.estado=tr.children[2].innerHTML.split(' ')[0];
        this.plan=tr.children[3].innerHTML;

        this.nota='   ';
        this.tomo='   ';
        this.folio='   ';
        this.horas='   ';

        if(this.estado=='Aprobada'){
            this.nota='A';
            if(this.nivel>'0'){
                this.nota=tr.children[2].innerHTML.split(' ')[2];
                this.horas=tr.children[2].innerHTML.split(' ')[3];
                this.tomo=tr.children[2].innerHTML.split(' ')[6];
                this.folio=tr.children[2].innerHTML.split(' ')[8];
            }  
        }

        if(this.estado=="Cursa"){
            this.com=tr.children[2].innerHTML.split(' ')[2];
            this.aula=tr.children[2].innerHTML.split(' ')[4];
        }

        if(this.estado=="Regular"){
            this.añoReg=tr.children[2].innerHTML.split(' ')[2];
        }
        
    }



}