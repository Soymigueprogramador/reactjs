const SegundoComponente = () => {
  const libros = [
    {
      id: 1,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      año: 1967,
      genero: "Realismo mágico",
      precio: 20.99
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      año: 1949,
      genero: "Distopía",
      precio: 15.50
    },
    {
      id: 3,
      titulo: "El principito",
      autor: "Antoine de Saint-Exupéry",
      año: 1943,
      genero: "Fábula",
      precio: 12.00
    },
    {
      id: 4,
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      año: 1605,
      genero: "Novela",
      precio: 25.75
    },
    {
      id: 5,
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      año: 1813,
      genero: "Romance",
      precio: 18.99
    }
  ];
  
  console.log(libros);
  
  return (
    <>
      <h1>Segundo componente de React.js</h1>

      <div>
        <h2>Listado de libros</h2>
        {libros.length > 0 ? (
          <ol>
            {libros.map(libro => (
              <li key={libro.id}>
                <strong>{libro.titulo}</strong> - {libro.autor} ({libro.año})
              </li>
            ))}
          </ol>
        ) : (
          <p>Lo que querés mostrar no tiene contenido.</p>
        )}
      </div>
    </>
  );
}

export default SegundoComponente;

/*
  Con este codigo podemos mostrar informacion que venga de otro lado como por ejemplo una api o un archivo .JSON
  <div>
        <h2>Listado de libros</h2>
        {libros.length > 0 ? (
          <ol>
            {libros.map(libro => (
              <li key={libro.id}>
                <strong>{libro.titulo}</strong> - {libro.autor} ({libro.año})
              </li>
            ))}
          </ol>
        ) : (
          <p>Lo que querés mostrar no tiene contenido.</p>
        )}
      </div>
*/