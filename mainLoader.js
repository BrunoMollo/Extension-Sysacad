//Este codigo es para que el script se cargue como type='module', pq sino no puede usar el import
(async () => {
    const src = chrome.extension.getURL('./main.js');
    const contentScript = await import(src);
    contentScript.main();
  })();
  //NO TOCAR