import Materia from "./Materia.js";
export default class Conjunto_materias extends Array{
    constructor(paramet){
        super();
        if(paramet="TODAS"){
            let trs=document.querySelectorAll("tr .textoTabla");
            for(let i=1; i<trs.length; i++){
                this.push(new Materia(trs[i]));
            }
        }
    }
 
    mostrarTodas(){
        this.forEach(x=>console.log(x));
    }
    subconjunto(estado, nivel,tipo){
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

    subconjunto(filtro){
        let sub=new Conjunto_materias("vacio");
        this.forEach(
            materia=>{
                let pass=true
                Object.entries(filtro).forEach(atr=>{
                    if(materia[atr[0]]!=atr[1])
                        pass=false;
                });
                if(pass)sub.push(materia);
            });
        return sub;
    }


    crearTabla(texto_titulo,lista_campos){
        
        
        const bloke=document.createElement("div");
        bloke.classList.add("bloke");
        bloke.id=texto_titulo;

        
        const titulo=document.createElement("div");
        titulo.innerText=texto_titulo;
        titulo.classList.add("tituloTabla");
        
        
        const tabla=document.createElement("table");
        tabla.classList.add(`tabla-aprob`);
        tabla.appendChild(Materia.Create_head(lista_campos));
        this.forEach(materia=>tabla.appendChild(materia.renglon(lista_campos)));

        while(tabla.childElementCount<4 ){
            tabla.appendChild(Materia.RenglonVacio(lista_campos));
        }


        bloke.style.maxHeight="38px";//en el css lo toma como vacio, asi que lo asigno aca¿?
        titulo.onclick=(()=>{
            if(bloke.style.maxHeight=="38px"){
                bloke.style.maxHeight=(50*tabla.childElementCount)+"px";    
                window.location.hash=texto_titulo;
            }
            else
                bloke.style.maxHeight="38px";
            })

        
        

        bloke.appendChild(titulo);
        bloke.appendChild(tabla);
        return bloke;
    }

}
