import Juegos from "./componets/Juegos.js"

const App = () => {
  return (
    <>
      <h1> Repaso con el hook useReducer </h1>
      <p>
        useReducer:
        Es un hook que nos permite trabajar con los estados al igual que 'useState'. <br></br>
        Con para particulariadad que en este hook usamos una funcion reductora y que ademas es asincrona, <br></br>
        nos permite pasarle un estado y es alli dentro donde se haran las modificaciones del mismo. <br></br>
      </p>
      <hr></hr>

      <Juegos />
    </>
  )
}

export default App
