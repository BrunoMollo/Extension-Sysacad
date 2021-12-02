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

    

    wrap_tabla.appendChild(
        todas.subconjunto("Cursa","-").crearTabla("Cursando", ['nombre','com','aula'])
    );


    for(let i=0; i<=5 ;i++){
        wrap_tabla.appendChild(
            todas.subconjunto("-",i).crearTabla((i==0)?'Ingreso':`${i}° Año`, ['nombre','nota','folio','tomo'])
        );
    }


}

