
const buscadorDeGif = document.getElementById('gif');
const mostradorDeGif = document.getElementById('mostradordegif');


buscadorDeGif.addEventListener('keypress', (event) => {
    let key = event.which || event.keyCod;
     if (key === 13) {
        let gif = buscadorDeGif.value;
        buscadorDeGif.value = '';

fetch(`https:api.giphy.com/v1/gifs/search?api_key=PMDO6VN7ot4b8XlJT37ZUVQw2RtsoqYv&q=${gif}=25&offset=0&rating=G&lang=en`)
    .then(respuesta => respuesta.json ())
    .then(data => {
    imprimirEnHtml(data);
    })
  }
})

const imprimirEnHtml = data => {
    data.data.forEach(element => {
    mostradorDeGif.innerHTML += `<img src ='${element.images.downsized.url}'>`
    });
    
  
   
    
}
