import Conjunto_materias from "./Conjunto_materias.js";
import TablaMateria from "./TablaMaterias.js";



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


    //CURSANDO
    let cursando_tabla=new TablaMateria("Cursando");
    cursando_tabla.definirCampos(['nombre','com','aula']);
    cursando_tabla.cargarMaterias(todas.filter({"estado":"Cursa"}));
    cursando_tabla.insertIn(".wrapper-tabla");
    cursando_tabla.open(150);

    
    //REGULARES
    let regular_tabla=new TablaMateria("Regular");
    regular_tabla.definirCampos(['nombre','añoReg']);
    regular_tabla.cargarMaterias(todas.filter({"estado":"Regular"}));
    regular_tabla.insertIn(".wrapper-tabla");
    regular_tabla.open(320);


    let libreta_tabla=[];
    //APROBADAS Y LIBRES OBLIG
    for(let i=0; i<=5 ;i++){
        libreta_tabla[i]=new TablaMateria((i==0)?'Ingreso':`${i}°Año`);
        libreta_tabla[i].definirCampos(['nombre','nota','tomo','folio']);
        libreta_tabla[i].cargarMaterias(todas.filter({"nivel":i, "tipo":"Oblig"}));
        libreta_tabla[i].insertIn(".wrapper-tabla");      
    }

    //APROBADAS Y LIBRES ELECT
    let electivas_tabla=new TablaMateria("Electivas");
    electivas_tabla.definirCampos(['nivel','nombre','nota','tomo','folio' ,'horas']);
    electivas_tabla.cargarMaterias(todas.filter({"tipo":"Elect"}));
    electivas_tabla.insertIn(".wrapper-tabla");
   

}

