import Materia from "./Materia.js";

export default class TablaMateria{
    constructor(texto_titulo){
        this.bloke=document.createElement("div");
        this.bloke.classList.add("bloke");
        this.bloke.id=texto_titulo;

        this.titulo=document.createElement("div");
        this.titulo.innerText=texto_titulo;
        this.titulo.classList.add("tituloTabla");

        this.bloke.append(this.titulo);
    }

    definirCampos(lista_campos){
        this.campos=lista_campos;
        this.tabla=document.createElement("table");
        this.tabla.append(Materia.Create_head(lista_campos));
        this.bloke.appendChild(this.tabla);
    }

    cargarMaterias(conj_materias){
        conj_materias.forEach(materia=>this.tabla.append(materia.renglon(this.campos)));
        this.#completarTabla();
        this.#initClickBehavior();
    }

    open(delay){
        setTimeout(
            ()=>{this.bloke.style.maxHeight=(50*this.tabla.childElementCount)+"px";},
            delay
        )
    }

    insertIn(selector){
        let container=document.querySelector(selector);
        container.append(this.bloke);
    }

    #completarTabla(){
        while(this.tabla.childElementCount<4 ){
            this.tabla.append(Materia.RenglonVacio(this.campos));
        }
    }

    #initClickBehavior(){
        this.bloke.style=`transition: max-height ${80*this.tabla.childElementCount}ms ease-in-out;`;
        this.bloke.style.maxHeight="38px";
        this.titulo.onclick=(()=>{
            if(this.bloke.style.maxHeight=="38px"){
                this.bloke.style.maxHeight=(50*this.tabla.childElementCount)+"px"; 
            }
            else
                this.bloke.style.maxHeight="38px";  
            })
    }




}