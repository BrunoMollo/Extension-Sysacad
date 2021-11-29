import Materia from "./Materia.js";
import Conjunto_materias from "./Conjunto_materias.js";



class Materias_Todas extends Conjunto_materias{
    constructor(){
        super();
        let trs=document.querySelectorAll("tr .textoTabla");
        for(let i=1; i<trs.length; i++){
            this.push(new Materia(trs[i]));
        }
    }
}



//Genocidio de las materias blancas

let tr_materias=document.querySelectorAll("tr .textoTabla");

tr_materias.forEach(
        tr=>{tr.hidden='true'});

tr_materias.forEach(
        tr=>{if(tr.children[0].innerHTML%2==0)tr.style.backgroundColor="#CCC"});
tr_materias[0].backgroundColor="#AAA"


//-------------------------
let todas=new Materias_Todas();

let cursando=todas.subconjunto("Cursa","-");
cursando.TablaAprobadas("Cursando");


let aprobadas=todas.subconjunto("Aprobada","-");
for(let i=0; i<=5 ;i++){
    aprobadas.subconjunto("Aprobada",i).TablaAprobadas(`Aprobadas ${i}°`);
}

