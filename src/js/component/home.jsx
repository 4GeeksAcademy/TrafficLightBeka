import React, { useState } from "react";


//create your first component
const Home = () => {
	const [activarColor, setActivarColor] = useState("");
	const [activarBotonCambiarColor, SetActivarBotonCambiarColor] = useState("");

  
	const cambiarColor = (color) => {
		setActivarColor(color);
	};

	const cambiarColorBoton = () => {
		const colores = ['rojo', 'amarillo', 'verde'];
		const colorActual = colores.indexOf(activarColor);
		const siguienteColor = colores[(colorActual + 1) % colores.length];
		setActivarColor(siguienteColor);
		setActivarBotonCambiarColor(siguienteColor);
	  };
  
	return (
	  <div>
		<div className="d-flex justify-content-center">
			<div  className="text-center bg-black" id="semaforo1"></div>
		</div>
		<div id="semaforo" className="text-center bg-black">
		  <button
			type="button"
			id="circulos"
			className={`button ${activarColor === 'rojo' ? 'bg-danger shine' : 'bg-danger'}`}
			onClick={() => cambiarColor('rojo')}
		  ></button>
		  <button
			type="button"
			id="circulos"
			className={`button ${activarColor === 'amarillo' ? 'bg-warning shine' : 'bg-warning'}`}
			onClick={() => cambiarColor('amarillo')}
		  ></button>
		  <button
			type="button"
			id="circulos"
			className={`button ${activarColor === 'verde' ? 'bg-success shine' : 'bg-success'}`}
			onClick={() => cambiarColor('verde')}
		  ></button>
		</div>
		<div id="cambiarcolor">
		<button
          type="button"
          id="buttoncambiarcolor"
          className="btn btn-primary"
          onClick={cambiarColorBoton}
        >
          Cambiar color
        </button>
			
		</div>
	  </div>
	);
  };

export default Home;
