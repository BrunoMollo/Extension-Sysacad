import Materia from "./Materia.js";
export default class Conjunto_materias extends Array{
    constructor(){
        super();
    }

    Todas(){
        let trs=document.querySelectorAll("tr .textoTabla");
        for(let i=1; i<trs.length; i++){
            this.push(new Materia(trs[i]));
        }
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
                <table width="100%" cellpadding="4" cellspacing="1" border="0">
                    <tbody>
                    <tr><td>
                        <table width="100%" align="center" border="1" cellspacing="0" cellpadding="1" bgcolor="#FFFFFF">
                            <tbody>
                            <tr class="textoTabla">
                                <th>Materia</th><th>Nota</th>
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

}