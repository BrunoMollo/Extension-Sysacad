import Materias_Todas from "./-conjuntosMaterias/Materias_Todas.js";

//Tengo que hacer una fucnion principal y expostral para poder  modularizar el codigo
export function main(){
    
    //Genocidio de las materias blancas
    let tr_materias=document.querySelectorAll("tr .textoTabla");
    tr_materias.forEach(tr=>{tr.hidden='true'});


    //-------------------------
    let todas=new Materias_Todas();
    let cursando=todas.subconjunto("Cursa","-");
    cursando.TablaAprobadas("Cursando");
    let aprobadas=todas.subconjunto("Aprobada","-");
    for(let i=0; i<=5 ;i++){
        aprobadas.subconjunto("Aprobada",i).TablaAprobadas(`Aprobadas ${i}°`);
    }


}

