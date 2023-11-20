function toggleMode() {
    const html = document.documentElement
    
    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //}
    //else {
    //    html.classList.add('light')
    //}
    //   Linha abaixo representa o mesmo que  isso acima.
    html.classList.toggle("light")

    // Pegar tag img
    // Substituir a imagem
    // Se tiver light mode, adicionar imagem light
    // Se tiver sem Light mode, manter a imagem normal
    
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assents/Oculos.png")
    }
    else {
        img.setAttribute("src", "./assents/Normal.png")
    }
    }