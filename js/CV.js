//seccion botones de menu//
document.getElementById ("direccion").onclick = function () {
    console.log ("cick en direccion");
    document.getElementById ("titulo").innerHTML=" Dirección";
    document.getElementById ("subtitulo1").innerHTML="Calle";
    document.getElementById ("parrafo").innerHTML=" Av. Brig. Gral. Juan Manuel de Rosas 3910";
    document.getElementById ("subtitulo2").innerHTML="Zona";
    document.getElementById ("parrafo2").innerHTML=" B1754 San Justo, Provincia de Buenos Aires ";
    document.getElementById ("imgcont").src="media/imgdireccion.jpg";
}
document.getElementById ("telefono").onclick = function () {
    console.log ("cick en telefono");
    document.getElementById ("titulo").innerHTML=" Telefonos de Contacto";
    document.getElementById ("subtitulo1").innerHTML="Particular";
    document.getElementById ("parrafo").innerHTML=" Mi telefono particular es 011 4480-2800";
    document.getElementById ("subtitulo2").innerHTML="Telefono movil";
    document.getElementById ("parrafo2").innerHTML=" Mi movil es: 011-15- 2839-4718 ";
    document.getElementById ("imgcont").src="media/imgtelefono.jpg";
}
document.getElementById ("mail").onclick = function () {
    console.log ("cick en e-mail");
    document.getElementById ("titulo").innerHTML=" correo de Contacto";
    document.getElementById ("subtitulo1").innerHTML="E-mail particular";
    document.getElementById ("parrafo").innerHTML=" Mi E-mail particular  es: lee.bennett@example.com";
    document.getElementById ("subtitulo2").innerHTML="Email Profesional";
    document.getElementById ("parrafo2").innerHTML=" Mi E-mail profecional es lee.bennettprof@example.com";
    document.getElementById ("imgcont").src="media/imgemail.jpg";
}
document.getElementById ("experiencia").onclick = function () {
    console.log ("cick en experiencia");
    document.getElementById ("titulo").innerHTML=" Formación y Experiencia";
    document.getElementById ("subtitulo1").innerHTML="Formacion";
    document.getElementById ("parrafo").innerHTML=" Estudios primarios y secundarios completos- Formacion en Argentina programa 4.0 a traves de Ticmas- Frontend";
    document.getElementById ("subtitulo2").innerHTML="Experiencia";
    document.getElementById ("parrafo2").innerHTML=" 03/2018 - presente Responsable de almacén, Almacenes Centrales- 01/2012 - 03/2018 Operario de logística, Transportes Unidos-09/2010 - 01/2012 Mozo de almacén, Almacenes Industriales";
    document.getElementById ("imgcont").src="media/imgexperiencia.jpg";
}

document.getElementById ("inicio").onclick = function () {
    console.log ("cick en inicio");
    document.getElementById ("titulo").innerHTML=" Proyecto Final";
    document.getElementById ("subtitulo1").innerHTML="Ejemplo de CV";
    document.getElementById ("parrafo").innerHTML=" Este trabajo ha sido realizado por Juan Daniel Fernández, el mismo contiene Funciones de Js en el menu que modifica el contenido principal";
    document.getElementById ("subtitulo2").innerHTML="";
    document.getElementById ("parrafo2").innerHTML="";
    document.getElementById ("imgcont").src="media/imgproyectocv.jpg";
}

const colorSwitch = document.querySelector('#temas input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'dia'); document.getElementById ("deslisador").innerHTML="🌜";
                } else {
                    document.documentElement.setAttribute('tema', 'noche'); document.getElementById ("deslisador").innerHTML="🌞";
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);