import UseEffect from './componets/UseEffect.js'
import Contador from './componets/Contador.js'
import Ajax from './componets/HTTPyAJAX/Ajax.js'

const App = () => {
  return (
    <div>
      <h1>useEffect</h1>
      <hr />
      <UseEffect />

      <hr />
      <Contador titulo="Contador" />

      <hr />
      <Ajax datos="Pasando datos" />
    </div>
  );
};

export default App;
