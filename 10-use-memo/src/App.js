import Gestion from "./componets/Gestion"
import Tareas from "./componets/Tareas"
import Mensaje from './componets/Mensaje.js'

const App = () => {
  return (
    <>
      <h1> Practica con useMemo </h1>
      <hr></hr>
      <Gestion />
      <hr></hr>
      <Tareas />
      <hr></hr>
      <Mensaje />
    </>
  )
}

export default App
