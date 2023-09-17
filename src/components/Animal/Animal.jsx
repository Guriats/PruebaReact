import "./Animal.css"
/*import Data from "./components/Data/Data"*/

const Animal =()=>{
    const mamiferos = [
        {
          id: 1,
          name: "perro",
          especie: "Canis lupus",
          tamaño: "mediano",
        },
        {
            id: 2,
            name: "Gato",
            especie: "Felis catus",
            tamaño: "pequeño",
          },
          {
            id: 3,
            name: "Elefante",
            especie: "Loxod",
            tamaño: "gigante",
          },
          {
            id: 4,
            name: "Gorila",
            especie: "Gorila beringei",
            tamaño: "grande",
          },
          {
            id: 5,
            name: "conejo",
            especie: "Orytol",
            tamaño: "pequeño",
          },
          {
            id: 6,
            name: "Delfín",
            especie: "Delphinus",
            tamaño: "grande",
          },
          {
            id: 7,
            name: "león",
            especie: "panthera",
            tamaño: "grande",
          },
          {
            id: 8,
            name: "koala",
            especie: "Phascolarct",
            tamaño: "pequeño",
          },
          {
            id: 9,
            name: "Orangután",
            especie: "Pongo pygmaeus",
            tamaño: "mediano",
          },
          {
            id: 10,
            name: "Jirafa",
            especie: "Giraffa camelopardo",
            tamaño: "gigante",
          },
      ];

      
    return (
        <ul className="animal">
            {mamiferos.map((mamifero) =>
            <li key={mamifero.id} className={mamifero.tamaño}>
                <h2>{mamifero.name}</h2>
                <span>{mamifero.tamaño}</span>
            </li>)}
        </ul>
    )

}

export default Animal;