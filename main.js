import Materias_Todas from "./-conjuntosMaterias/Materias_Todas.js";

//Tengo que hacer una fucnion principal y expostral para poder  modularizar el codigo
export function main(){
   
    //Importa el css de un archivo
    const linker=document.createElement("link");
    linker.rel="stylesheet";
    linker.type="text/css";
    linker.href=chrome.extension.getURL("./style-ext.css");
    document.body.appendChild(linker);


    


    //Genocidio de las materias blancas
    /*
    let tr_materias=document.querySelectorAll("tr .textoTabla");
    tr_materias.forEach(tr=>{tr.hidden='true'});
*/

    //-------------------------
    let todas=new Materias_Todas();
    
    const wrap=document.querySelector(".wrapper");
    let contenedor_del_muerto=document.querySelector(".wrapper>table>tbody")
    contenedor_del_muerto.removeChild(contenedor_del_muerto.children[1]);

    const wrap_tabla=document.createElement("div");
    wrap_tabla.classList.add("wrapper-tabla");
    wrap.appendChild(wrap_tabla);

    
    for(let i=0; i<=5 ;i++){
        todas.subconjunto("-",i).TablaAprobadasBeta(`Aprobadas ${i}°`);
    }


}

