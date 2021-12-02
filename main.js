import Materias_Todas from "./-conjuntosMaterias/Materias_Todas.js";

//Tengo que hacer una fucnion principal y expostral para poder  modularizar el codigo
export function main(){

    let todas=new Materias_Todas();
    
    const wrap=document.querySelector(".wrapper");
    let contenedor_del_muerto=document.querySelector(".wrapper>table>tbody")
    contenedor_del_muerto.removeChild(contenedor_del_muerto.children[1]);

    const wrap_tabla=document.createElement("div");
    wrap_tabla.classList.add("wrapper-tabla");
    wrap.insertBefore(wrap_tabla, document.querySelector(".wrapper>p"));

    
    for(let i=0; i<=5 ;i++){
        todas.subconjunto("-",i).TablaAprobadas((i==0)?'Ingreso':`${i}° Año`);
    }


}

