


String.prototype.properCase = function() {
    return this[0].toUpperCase()+ this.substr(1).toLowerCase();
}
export default class Materia{
    constructor(tr){
        this.nivel=tr.children[0].innerHTML;
        this.nombre=tr.children[1].innerHTML;
        if(dic_incompletas[this.nombre]!=undefined){
            this.nombre=dic_incompletas[this.nombre];
        }
        if(/w*(Elec.)/.test(this.nombre)){
            
            this.tipo="Elect";
            this.nombre=this.nombre.replace('(Elec.)', '');
        }
        else
            this.tipo="Oblig";
    

        
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

        if(this.estado=="Regular"){
            this.añoReg=tr.children[2].innerHTML.split(' ')[2];
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



}


const dic_incompletas={

    "Formación Avanzada en Áreas Ingenieriles":"Formación Avanzada en Áreas Ingenieriles?(Elec.)",
    "Gestión de Trabajos con Sist. Operativo":"Gestión de Trabajos con Sist. Operativo ?(Elec.)",
    "Introducción a la Investigación Científi":"Introducción a la Investigación Científica(Elec.)",
    "Formación Básica en Áreas Ingenieriles e":"Formación Básica en Áreas Ingenieriles e?(Elec.)",
    "Formación en Tecnología en Áreas Ingenie":"Formación en Tecnología en Áreas Ingenie?(Elec.)",
    "Formación en Áreas Ingenieriles en el Ex":"Formación en Áreas Ingenieriles en el Extranjero(Elec.)",
    "Introducción a la Práctica Profesional(E":"Introducción a la Práctica Profesional(Elec.)",
    "Lenguaje Orientado a la Administración C":"Lenguaje Orientado a la Administración Gerencial(COBOL)(Elec.)",
    "Tecnologías de Desarrollo de Software ID":"Tecnologías de Desarrollo de Software IDE(Elec.)",
    "Soporte a la Gestión de Datos con Progra":"Soporte a la Gestión de Datos con Programacion Visual(Elec.)",
    "Técnicas y Tecnologías Avanzadas de Desa":"Técnicas y Tecnologías Avanzadas de Desarrollo de Software(Elec.)",
    "Análisis y Diseño de Datos e Información":"Análisis y Diseño de Datos e Información(Elec.)",
    "Informática en la Administración Pública":"Informática en la Administración Pública(Elec.)",
    "Metodologías Ágiles en el Desarrollo de":"Metodologías Ágiles en el Desarrollo de Software(Elec.)",
    "Sistemas de Información Integrados para":"Sistemas de Información Integrados para la industria(Elec.)"
    
    
    }