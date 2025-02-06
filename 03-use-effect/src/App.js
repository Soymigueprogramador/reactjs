import UseEffect from './componets/UseEffect'
import Contador from './componets/Contador.js'

const App = () => {
  return (
    <div>
      <h1>useEffect</h1>
      <UseEffect />
      <Contador titulo={'Contador'} />
    </div>
  );
};

export default App;