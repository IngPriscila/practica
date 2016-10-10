
function validaForm(){
	var nombre=document.getElementById("nom").value;
	var ape1=document.getElementById("ape1").value;
	var ape2=document.getElementById("ape2").value;
	var fecha=document.getElementById("fecha").value;
	var tel=document.getElementById("tel").value;
	var dom=document.getElementById("dom").value;
	var email=document.getElementById("email").value;
	var sexo=document.getElementById("sexo").value;
	var user=document.getElementById("user").value;
	var password=document.getElementById("pass").value;
	var confirmar=document.getElementById("confirm").value;

	if(nombre==""){
		document.getElementById("errornom").innerHTML="*Favor de Teclear su Nombre";
		document.getElementById("errornom").style.color="red";
		document.getElementById("nom").style.background="yellow";
		return false;
	}
	if(ape1==""){
		document.getElementById("errorape1").innerHTML="*Favor de Teclear su Apellido Paterno";
		document.getElementById("errorape1").style.color="red";
		document.getElementById("ape1").style.background="yellow";
		return false;
	}
	if(ape2==""){
		document.getElementById("errorape2").innerHTML="*Favor de Teclear su Apellido Materno";
		document.getElementById("errorape2").style.color="red";
		document.getElementById("ape2").style.background="yellow";
		return false;
	}
	if(fecha==""){
		document.getElementById("errordate").innerHTML="*Favor de Seleccionar su Fecha de Nacimiento";
		document.getElementById("errordate").style.color="red";
		document.getElementById("fecha").style.background="yellow";
		return false;
	}
	if(tel==""){
		document.getElementById("errortel").innerHTML="*Favor de Teclear su Telefono";
		document.getElementById("errortel").style.color="red";
		document.getElementById("tel").style.background="yellow";
		return false;
	}
	if(dom==""){
		document.getElementById("errordom").innerHTML="*Favor de Teclear su Domicilio";
		document.getElementById("errordom").style.color="red";
		document.getElementById("dom").style.background="yellow";
		return false;
	}	
	if(email==""){
		document.getElementById("errormail").innerHTML="*Favor de Teclear su Correo electronico";
		document.getElementById("errormail").style.color="red";
		document.getElementById("email").style.background="yellow";
		return false;
	}	
	if(sexo==""){
		document.getElementById("errorsex").innerHTML="*Favor de Seleccionar su sexo";
		document.getElementById("errorsex").style.color="red";
		document.getElementById("sexo").style.background="yellow";
		return false;
	}	
	if(user==""){
		document.getElementById("erroruser").innerHTML="*Favor de Teclear un User";
		document.getElementById("erroruser").style.color="red";
		document.getElementById("user").style.background="yellow";
		return false;
	}	
	if(password==""){
		document.getElementById("errorpass").innerHTML="*Favor de Teclear una Password";
		document.getElementById("errorpass").style.color="red";
		document.getElementById("pass").style.background="yellow";
		return false;
	}	
	if(confirmar==""){
		document.getElementById("errorconfirm").innerHTML="*Favor de Confirmar su Password";
		document.getElementById("errorconfirm").style.color="red";
		document.getElementById("confirm").style.background="yellow";
		return false;
	}	
	if(!(password==confirmar)){
		alert("Las Contraseñas No coinciden!");
		document.getElementById("pass").value="";
		document.getElementById("confirm").value="";
		return false;
	}
	return true;
}
function validaLogin(){
	return true;
}
function validaOrden(){
	return true;
}

	function Tiempo(){
		var f = new Date();
		var meridiano;

		var hoy = new Date();

		var d = hoy.getDate();
		var dia = (d< 10) ? '0' + d : d;

		var m = hoy.getMonth() + 1;
		var mes = (m < 10) ? '0' + m : m;

		var a = hoy.getFullYear();
		var año = (a < 10) ? '0' + a : a;

		var h = hoy.getHours();
		var hora = (h < 10) ? '0' + h : h;

		var min = hoy.getMinutes();
		var minuto = (min < 10) ? '0' + min : min;
		
		if (f.getHours()>=12){
			meridiano="p.m.";
		}
		else{
			meridiano="a.m.";
		}
		
		return dia+"/"+mes+"/"+año+" ("+hora+":"+minuto+" "+meridiano+")";		
 	}
	document.getElementById('fecha').value = Tiempo();
