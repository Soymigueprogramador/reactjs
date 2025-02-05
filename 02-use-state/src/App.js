import Hooks from "./componets/Hooks.js"; 
import Ejersicio1 from "./ejersicios/Ejersicio1.js"; 

const App = () => {
  return (
    <>
      <h1>Repasando algunos hooks en React.js</h1>

      <Hooks />
      <hr></hr>
      <Ejersicio1 
      titulo="Ejercicio 1" 
      año={new Date().getFullYear()} />
    </>
  );
};

export default App;
