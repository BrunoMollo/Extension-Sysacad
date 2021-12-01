import Materia from "../-materias/Materia.js";
export default class Conjunto_materias extends Array{
    constructor(){
        super();
    }
 
    mostrarTodas(){
        this.forEach(x=>console.log(x));
    }
    subconjunto(estado, nivel){
        let sub=new Conjunto_materias("vacio");
        this.forEach(
            m=>{
                if(m.nivel==nivel & m.estado==estado){
                    sub.push(m);
                }
                if(m.nivel==nivel & estado=="-"){
                    sub.push(m);
                }
                if(nivel=='-' & m.estado==estado){
                    sub.push(m);
                }
                
            });
        return sub;
    }


    TablaAprobadas(texto_titulo){
        const wrap_tabla=document.querySelector(".wrapper-tabla");
        
        const bloke=document.createElement("div");
        bloke.classList.add("bloke");

        
        const titulo=document.createElement("div");
        titulo.innerText=texto_titulo;
        titulo.classList.add("tituloTabla");
        
        
        const tabla=document.createElement("table");
        tabla.classList.add(`tabla-aprob`);
        tabla.appendChild(Materia.Create_head(["Nombre", "Nota", "Folio", "Tomo"]));
        this.forEach(materia=>tabla.appendChild(materia.renglonAprobada()));
        

        bloke.appendChild(titulo);
        bloke.appendChild(tabla);
        wrap_tabla.appendChild(bloke);
    }

}

////LA CONCHA DE MI MADREEEEEEEEEEEEEEEE
// function toggleView(x){



    
//     for(let i=0;i<x.children.length;i++){
//         let renglon=x.children.item(i);
//         console.log(renglon.hidden==true);

//         if(renglon.hidden){
//             renglon.removeAttribute("hidden");
//         }
//         else{
//             renglon.hidden="true";
//         }
//         sleep(100);

//     }
// }

