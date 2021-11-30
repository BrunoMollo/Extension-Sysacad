
export default class Materia{
    constructor(tr){
        this.nivel=tr.children[0].innerHTML;
        this.nombre=tr.children[1].innerHTML;
        this.estado=tr.children[2].innerHTML.split(' ')[0];
        this.nota='   ';
        if(this.estado=='Aprobada'){
            this.nota='A';
            if(this.nivel>'0'){
                this.nota=tr.children[2].innerHTML.split(' ')[2];
                this.horas=tr.children[2].innerHTML.split(' ')[3];
                this.tomo=tr.children[2].innerHTML.split(' ')[6];
                this.folio=tr.children[2].innerHTML.split(' ')[8];
            }
            
        }
        this.plan=tr.children[3].innerHTML;
    }

    //MOVER A UNA SUBCLASE
    renglonAprobada(){
        const renglon=document.createElement("tr");
        renglon.classList.add("textoTabla");
        
        const td_nombre= document.createElement("td");
        td_nombre.innerText=this.nombre;
        renglon.appendChild(td_nombre);

        const td_nota= document.createElement("td");
        td_nota.classList.add("td-nota");
        td_nota.innerText=this.nota;
        renglon.appendChild(td_nota);



        return renglon;

    }

}