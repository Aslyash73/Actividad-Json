let tabla=[
	{nombre:"son",apellido:"goku",direccion:"kamehouse",genero:"masculino",identificacion:"172849594"},
	{nombre:"son",apellido:"gohan",direccion:"calle 5",genero:"masculino",identificacion:"172833889"},
	{nombre:"picoro",apellido:"daimaku",direccion:"calle 9",genero:"masculino",identificacion:"18288394"},
]

function cargar(){
	let elemento=document.getElementById("usuarios")
	tablallena=""
	for (let i = 0; i < tabla.length; i++) {
		tablallena+=`<tr>
		<td>${tabla[i].nombre}</td>
		<td>${tabla[i].apellido}</td>
		<td>${tabla[i].direccion}</td>
		<td>${tabla[i].genero}</td>
		<td>${tabla[i].identificacion}</td>
		</tr>`
	}
	elemento.innerHTML=tablallena;
}
function registrar(){
	let nombre=document.getElementById("nombre").value
	let apellido=document.getElementById("apellido").value
	let direccion=document.getElementById("direccion").value
	let genero=document.getElementById("genero").value
	let identificacion=document.getElementById("Id").value

	if(nombre=='' || nombre ===undefined){
		alert ("Recuerde llenar el campo nombre")
		return;
	}

	if(apellido=='' || apellido ===undefined){
		alert ("Recuerde llenar el campo apellido")
		return;
	}

	if(direccion=='' || direccion ===undefined){
		alert ("Recuerde llenar el campo direccion")
		return;

	}

	if(genero=='' || genero ===undefined){
		alert ("Recuerde llenar el campo genero")
		return;
	}

	if(identificacion=='' || identificacion ===undefined){
		alert ("Recuerde llenar el campo identificacion")
		return;
	}

	const enocntrado=tabla.filter(persona=>persona.identificacion==identificacion);//te devuelve un vector
	if (enocntrado.length>0) {
		alert ("Debe poner una identificacion validad")
		return;
	}
	//agregar a la tabla
	let usertabla={nombre,apellido,direccion,genero,identificacion}
	tabla.push(usertabla)

	cargar();
}

