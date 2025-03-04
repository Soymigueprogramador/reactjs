import UseLayoutEffect from './componets/UseLayoutEffect.js'

const App = () => {
  return (
    <>
      <h1> Diferencias entre useEffect vs useLayoutEffect </h1>
      <p>
        Son practicamente lo mismo, pero se recomienda usar mas el useEffect. <br></br>
        useLayoutEffect: <br></br>
        Se utiliza de forma asincrona despues de hacer las mutaciones y cambios en el dom. <br></br>
        useEffect: <br></br> 
        Se utiliza para manejar los estados en segundo plano, pero no se ejecuta antes de las mutaciones y cambios del dom.
      </p>
      {/* Ejemplos en codigo. */}
      <hr></hr>
      <UseLayoutEffect />
    </>
  )
}

export default App