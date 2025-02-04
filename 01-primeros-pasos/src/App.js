import logo from './logo.svg';
import './App.css';
import MiComponente from './componentes/MiComponente.js';
import SegundoComponente from './componentes/SegundoComponente.js'
import TercerComponente from './componentes/TercerComponente.js';
import Eventos from './componentes/Eventos.js';

function App() {
  // Ejemplo de un objeto para pasarlo como props.
  const pacienteEjemplo = {
    nombre: "Juan Pérez",
    edad: 30,
    altura: 175,
    peso: 70,
    grupoSanguineo: "O+",
    alergias: "Ninguna",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className='segundo-componente'>
          <Eventos/>
          <hr></hr>
          <TercerComponente
          ficha={pacienteEjemplo}
        /> {/* Asi es como le podemos pasar las props. */}
          <hr></hr>
          <SegundoComponente/>
          <hr></hr>
          <MiComponente/>
          <hr></hr>
          
        </div>
        
      </header>
    </div>
  );
}

export default App;

// Aclaraciones:
/*
  1- Las importaciones e imbocaciones de archivos es igual a la de react con vite.
  2- Para escribir un comentario en react tenemos que usar este las llaves {} y adentro de estas usamos los caracteres de comentarios en bloque de js.
*/