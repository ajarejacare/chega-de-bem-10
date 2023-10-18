/*Código de alteração de estilo entre as páginas web*/

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle =(Element, style)=> window

.getComputedStyle(Element)
.getComputedStyle(style)

const initialcolors = {
    fundo: getStyle(html, "--fundo"),
    visor: getStyle(html, "--visor"),
    padrao: getStyle(html, "--padrao"),
    espera: getStyle(html, "--espera")
}

const albedocolors ={
    fundo: getStyle(html, "--fundoAlbedo"),
    visor: getStyle(html, "--visorAlbedo"),
    padrao: getStyle(html, "--padraoAlbedo"),
    espera: getStyle(html, "--esperaAlbedo")
}

const transformKey = Key =>
"--" + Key.replace(/([A-Z])/, "$1")

const changeColor = (color) =>{
    Object.Keys(colors).map(key =>{
        html.style.setProperty(transform(key, color[key]))
    })
}

checkbox.addEventListener("change", ({target}) =>{
    target.cheked ?
     changeColor(albedocolors) : changeColor(initialcolors)
})