export function Scrollup():void{
    scrollTo({behavior: "smooth", top: 0})
}

export function EnviarComentario():void{
    alert("¡Gracias por su opinión!");
}

export function MostrarBeneficios():void{

}

export function EvaluarContenido(texto:string):boolean{
    return texto.length > 1;
}