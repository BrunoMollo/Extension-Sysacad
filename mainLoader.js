

//Este codigo es para que el script se cargue como type='module', pq sino no puede usar el import
async function Load(){
    
  //Importa el css de un archivo
    const linker=document.createElement("link");
    linker.rel="stylesheet";
    linker.type="text/css";
    linker.href=chrome.extension.getURL("./style-ext.css");
    document.body.appendChild(linker);


    //importa js
    const src_js = chrome.extension.getURL('./mainEstadoAcad.js');
    const contentScript = await import(src_js);
    contentScript.main();
  }


  Load();

