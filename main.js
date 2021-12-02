import Conjunto_materias from "./Conjunto_materias.js";



function borrarTablaVieja(){
    let contenedor_del_muerto=document.querySelector(".wrapper>table>tbody")
    contenedor_del_muerto.removeChild(contenedor_del_muerto.children[1]);
}



//Tengo que hacer una fucnion principal y expostral para poder  modularizar el codigo
export function main(){

    let todas=new Conjunto_materias("TODAS");

    borrarTablaVieja();

    const wrap=document.querySelector(".wrapper");
    const wrap_tabla=document.createElement("div");
    wrap_tabla.classList.add("wrapper-tabla");
    wrap.insertBefore(wrap_tabla, document.querySelector(".wrapper>p"));

    

    wrap_tabla.appendChild(
        todas.subconjunto({"estado":"Cursa"}).crearTabla("Cursando", ['nombre','com','aula'],"open")
    );

    wrap_tabla.appendChild(
        todas.subconjunto({"estado":"Regular"}).crearTabla("Regulares", ['nombre','añoReg'],"open")
    );



    for(let i=0; i<=5 ;i++){
        wrap_tabla.appendChild(
            todas.subconjunto({"nivel":i, "tipo":"Oblig"}).crearTabla((i==0)?'Ingreso':`${i}°Año`, ['nombre','nota','tomo','folio'])
        );
    }

    wrap_tabla.appendChild(
        todas.subconjunto({"tipo":"Elect"}).crearTabla("Electivas", ['nivel','nombre','nota','tomo','folio' ,'horas'])
    );



}

