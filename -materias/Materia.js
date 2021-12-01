
export default class Materia{
    constructor(tr){
        this.nivel=tr.children[0].innerHTML;
        this.nombre=tr.children[1].innerHTML;
        this.estado=tr.children[2].innerHTML.split(' ')[0];
        this.nota='   ';
        this.tomo='   ';
        this.folio='   ';
        this.horas='   ';

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

    static Create_td_head(atributo){
        const td= document.createElement("td");
        td.classList.add(`td-head`);
        td.innerText=atributo;
        return td;
    }

    static Create_head(atributos){
        const head=document.createElement("tr")
        atributos.forEach(atri => {
            head.appendChild(Materia.Create_td_head(atri));
        });
        return head;
    }


    create_td(atributo){
        const td= document.createElement("td");
        td.classList.add(`td-${atributo}`);
        td.innerText=this[atributo];
        return td;
    }

    //MOVER A UNA SUBCLASE???
    renglonAprobada(){
        const renglon=document.createElement("tr");
        renglon.classList.add("textoTabla");
        

        renglon.appendChild(this.create_td("nombre"));
        renglon.appendChild(this.create_td("nota"));
        renglon.appendChild(this.create_td("folio"));
        renglon.appendChild(this.create_td("tomo"));
        
        return renglon;

    }

}