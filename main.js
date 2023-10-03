

//Funciolidad para enviar mensaje via Whasaap

const btnEnviarDatos = document.getElementById('btn__enviar')

if (btnEnviarDatos) {

	btnEnviarDatos.addEventListener('click', (e) => {
		e.preventDefault();
		var mensajeNombre = document.getElementById('nombre');
		var mensajeCorreo = document.getElementById('correo');
		var mensajeAsunto = document.getElementById('asunto');
		var mensajeMensaje = document.getElementById('mensaje');

		var numeroTelefono = "+51921324118";

		var mensaje = "Hola Christian, me gustaria contactarme contigo, por favor contactame:\n" + "\nNombre: " + mensajeNombre.value + "\nCorreo: " + mensajeCorreo.value + "\nAsunto: " + mensajeAsunto.value + "\nMensaje: " + mensajeMensaje.value;
		var url = "https://api.whatsapp.com/send?phone=" + numeroTelefono + "&text=" + encodeURIComponent(mensaje);

        window.open(url);
        mensajeNombre.value= ""
		mensajeCorreo.value = ""
		mensajeAsunto.value = ""
		mensajeMensaje.value = ""
        alert("Mensaje Enviado")
	})
}

//Logica para el menu Responsive

let menu = document.getElementById('menu__navbar')
let menuBtn = document.getElementById('btn__menu')

menuBtn.addEventListener('click', () => {
	menu.classList.toggle("menu_activo");
})