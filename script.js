const btnManzana = document.getElementById("manzana");
const btnBanana = document.getElementById("banana");
const btnNaranja = document.getElementById("naranja");

const respuesta = document.getElementById("respuesta");

class fruta {
	constructor(nombre, color, forma){
		this.nombre = nombre;
		this.color = color;
		this.forma = forma;
		this.info = `Ésta fruta es una ${nombre}, es de color ${color} y tiene forma ${forma}.`;
	}
	verInfo(){
		//alert(this.info);
		respuesta.innerHTML = this.info ;
	}
}

let manzana = new fruta("manzana","rojo", "cuadrada");

let naranja = new fruta("naranja","naranja", "redonda");

let banana = new fruta("banana","amarillo", "curva");

function $frutas(reference){
	if(reference == "manzana"){
		manzana.verInfo();
		respuesta.style.textShadow = "0 0 .5rem #d5003d";
	}
	else if(reference == "banana"){
		banana.verInfo();
		respuesta.style.textShadow = "0 0 .5rem #b5d600";
	}
	else if(reference == "naranja"){
		naranja.verInfo();
		respuesta.style.textShadow = "0 0 .5rem #FCa53C";
	}
}

btnManzana.addEventListener("click", function(){$frutas("manzana")}, true);

btnBanana.addEventListener("click", function(){$frutas("banana")}, true);

btnNaranja.addEventListener("click", function(){$frutas("naranja")}, true);