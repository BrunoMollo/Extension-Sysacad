//Este codigo es para que el script se cargue como type='module', pq sino no puede usar el import
(async () => {
    
  //Importa el css de un archivo
    const linker=document.createElement("link");
    linker.rel="stylesheet";
    linker.type="text/css";
    linker.href=chrome.extension.getURL("./style-ext.css");
    document.body.appendChild(linker);

    //importa js
    const src = chrome.extension.getURL('./main.js');
    const contentScript = await import(src);
    contentScript.main();
  })();
