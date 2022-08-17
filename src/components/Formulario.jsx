import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES} from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'


const Formulario = () => {

    const { error, setError,datos, handleChangeDatos, cotizarSeguro } = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        cotizarSeguro()
    }

  return (
    <>
      {error && <Error />}

      <form
      onSubmit={handleSubmit}
      >
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-800 uppercase'>Marca</label>
            <select 
            name='marca'
            onChange={e => handleChangeDatos(e)}
            value={datos.marca}
            className='w-full p-3 bg-gray-300 border border-gray-800'>
            <option value=''>--Selecciona Marca--</option>
            {MARCAS.map(marca => (
                <option 
                key={marca.id}
                value={marca.id}
                >{marca.nombre}</option>
            ))}
            </select>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-800 uppercase'>Año</label>
            <select 
            name='year'
            onChange={e => handleChangeDatos(e)}
            value={datos.year}
            className='w-full p-3 bg-gray-300 border border-gray-800'>
            <option value=''>--Selecciona Año--</option>
            {YEARS.map(year => (
                <option 
                key={year}
                value={year}
                >{year}</option>
            ))}
            </select>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-800 uppercase'>Elige un plan</label>
           <div className='flex gap-3 items-center'>
              {PLANES.map(plan => (
                <Fragment key={plan.id}>
                    <label>
                        {plan.nombre}
                    </label>
                    <input
                     onChange={e => handleChangeDatos(e)}

                    type='radio'
                    name='plan'
                    value={plan.id}
                    ></input>
                </Fragment>
                ))}
           </div>
        </div>
              
        <input
        type='submit'
        value='Cotizar'
        className='w-full bg-gray-600 hover:bg-gray-800 transition-colors text-gray-300 cursor-pointer p-3 uppercase font-bold rounded-lg' />
      </form>
      
    </>
  )
}

export default Formulario
