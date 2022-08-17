import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"

const AppSeguro = () => {

    const { resultado, datos, cargando } = useCotizador()
    

  return (
    <>
      <header className="my-10">
             <h1 className="text-white text-center text-4xl font-bold">Cotizador de Seguros de Auto</h1>
      </header>
        <main className="bg-gray-300 md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario />
            {cargando ? <Spinner /> : <Resultado />}
       </main>
    
    </>
  )
}

export default AppSeguro