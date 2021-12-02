
String.prototype.properCase = function() {
    return this[0].toUpperCase()+ this.substr(1).toLowerCase();
}
export default class Materia{
    constructor(tr){
        this.nivel=tr.children[0].innerHTML;
        this.nombre=tr.children[1].innerHTML;
        this.estado=tr.children[2].innerHTML.split(' ')[0];
        this.plan=tr.children[3].innerHTML;

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

        if(this.estado=="Cursa"){
            this.com=tr.children[2].innerHTML.split(' ')[2];
            this.aula=tr.children[2].innerHTML.split(' ')[4];
        }
        
    }

    static Create_td_head(atributo){
        
        atributo=atributo.properCase();

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

   
    renglon(lista_campos){
        const renglon=document.createElement("tr");
        renglon.classList.add("textoTabla");

        lista_campos=lista_campos.map(e=>e.toLowerCase());
        lista_campos.forEach(atrib=>renglon.appendChild(this.create_td(atrib)));
        
        return renglon;

    }

    static RenglonVacio(lista_campos){
        const renglon=document.createElement("tr");
        renglon.classList.add("textoTabla");
        for(let i=0;i<lista_campos.length;i++){
            const td=document.createElement("td");
            td.innerHTML="&nbsp;";
            renglon.appendChild(td);
        }

        return renglon;

    }

}