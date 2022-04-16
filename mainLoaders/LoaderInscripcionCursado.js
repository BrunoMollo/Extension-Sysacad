
//Este codigo es para que el script se cargue como type='module', pq sino no puede usar el import
async function Load(){
    
    //importa js
    const src_js = chrome.extension.getURL('../Mains/mainInscirpcionCursado.js');
    const contentScript = await import(src_js);
    contentScript.main();
  }

  Load();
