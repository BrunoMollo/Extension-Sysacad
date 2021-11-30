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
    //MOVIBLE A UNA SUBCLASE
    renglonesAprobados(){
        let acum='';
        this.forEach(m=>acum=acum+m.renglonAprobadas());
        return acum;
    }

    TablaAprobadas(titulo){
        const wrap=document.querySelector(".wrapper");
        const tabla=document.createElement("table");

        tabla.style.display="inline";
        tabla.style.margin="10px";
    

        tabla.innerHTML=`
        
        <tbody>
            <tr>
                <td class="tituloTabla"><div>${titulo}</div></td>
            </tr>
            
            <tr><td bgcolor="#0000FF">
                <table width="100%" cellpadding="4" cellspacing="1" border="0" >
                    <tbody>
                    <tr><td>
                        <table width="100%" align="center" border="1" cellspacing="0" cellpadding="1" bgcolor="#FFFFFF">
                            <tbody>
                            <tr class="textoTabla">
                                <th width="300px">Materia</th>
                                <th width="60px">Nota</th>
                            </tr>
        
                                ${this.renglonesAprobados()}
                            </tr>
                            </tbody>
                    </table>
            </td></tr>
        </tbody></table>
        </td></tr>
        </tbody>
  
        `
        wrap.appendChild(tabla);
        
    }


    TablaAprobadasBeta(texto_titulo){
        const wrap_tabla=document.querySelector(".wrapper-tabla");
        
        const bloke=document.createElement("div");
        bloke.classList.add("bloke");

        bloke.style.display="inline";
        bloke.style.margin="10px";

        const titulo=document.createElement("div");
        titulo.innerText=texto_titulo;
        titulo.classList.add("tituloTabla");
        
        const tabla=document.createElement("table");
        this.forEach(materia=>tabla.appendChild(materia.renglonAprobada()));
        


        
        bloke.appendChild(titulo);
        bloke.appendChild(tabla);
        wrap_tabla.appendChild(bloke);
        
    }

}


