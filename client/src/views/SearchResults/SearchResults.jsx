import Buscador from "../home/component/Buscador.jsx"
import PrimaryCards from "../home/component/PrimaryCards.jsx"

export const SearchResults = ({data}) => {

    return( 
    <div className="resultados-busqueda" data-search-results>
             {data.map((e)=> (<PrimaryCards key={e._id} imgURL={e.imagen[0]} productName={e.nombreArticulo} productLocation={e.ubicacion.longitud + "," + e.ubicacion.latitud} productPrice={"$" + e.precio}/>))}
    </div>
    )
}

export default SearchResults