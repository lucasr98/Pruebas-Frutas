class Frutas {
	constructor(nombre, color, forma, texto){
		this.nombre = nombre;
		this.color = color;
		this.forma = forma;
		this.texto = texto;
		this.info = `Ésta fruta es una ${nombre}, es de color ${color} y tiene forma ${forma}.`;
	}
	verInfo(){
		respuesta.innerHTML = this.info ;
		respuesta.style.textShadow = this.texto;
	}
}

const respuesta = document.getElementById("respuesta");

const frutas = [
	["manzana", "rojo", "cuadrada", "0 0 .5rem #d5003d"],
	["naranja","naranja", "redonda", "0 0 .5rem #FCa53C"],
	["banana","amarillo", "curva", "0 0 .5rem #b5d600"]
]

let fruta = [];

for (let i in frutas){
	fruta[i] = new Frutas(frutas[i][0], frutas[i][1], frutas[i][2], frutas[i][3]);
}

window.addEventListener("click", (e)=> {
	let boton = e.target;
	let referencia = "";
	if (boton.classList.contains("fruta")){
		for (let i in frutas){
			if (fruta[i].nombre === boton.id){
				referencia = fruta[i];
				break;
			}
		}
		referencia.verInfo();
	}
});