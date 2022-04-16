import Conjunto_materias from "../Conjunto_materias.js";
import TablaMateria from "../TablaMaterias.js";

function borrarTablaVieja(){
    let contenedor_del_muerto=document.querySelector(".wrapper>table>tbody")
    contenedor_del_muerto.removeChild(contenedor_del_muerto.children[1]);
}


//Tengo que hacer una fucnion principal y expostral para poder  modularizar el codigo
export function main(){

    let todas=new Conjunto_materias(Conjunto_materias.INSC_CURSADO);
    borrarTablaVieja();

    const wrap=document.querySelector(".wrapper");
    const wrap_tabla=document.createElement("div");
    wrap_tabla.classList.add("wrapper-tabla");
    wrap.insertBefore(wrap_tabla, document.querySelector(".wrapper>p"));

   console.log(todas[3])


    //Para inscibir
    for(let i=1;i<=5;i++){
        let NoInscripto_tabla=new TablaMateria("Para Inscribir "+i);
        NoInscripto_tabla.definirCampos(['nombre','inscripcion']);
        NoInscripto_tabla.cargarMaterias(todas.filter(m=>m.yaInscripto==false && m.nivel==i));
        NoInscripto_tabla.insertIn(".wrapper-tabla");
        NoInscripto_tabla.open(60);
    }
    

    //ya inscirpto
    let Inscripto_tabla=new TablaMateria("Inscripto");
    Inscripto_tabla.definirCampos(['nivel','nombre','inscripcion',"aula"]);
    Inscripto_tabla.cargarMaterias(todas.filter(m=>m.yaInscripto==true));
    Inscripto_tabla.insertIn(".wrapper-tabla");
    Inscripto_tabla.open(150);


}

