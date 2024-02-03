export function Scrollup():void{
    scrollTo({behavior: "smooth", top: 0})
}

export function EnviarComentario():void{
    alert("¡Gracias por su opinión!");
}

export function MostrarCaracteristicas(dialogo:HTMLDialogElement):void{
    dialogo.showModal();
}

export function OcultarModal(dialogo:HTMLDialogElement):void{
    dialogo.close(); 
}