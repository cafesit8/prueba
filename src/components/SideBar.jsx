import { NavLink } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'

export default function SideBar({setModal, modal}) {
  return (
    <section className={`${!modal ? 'absolute left-0 top-0' : 'hidden'} w-[20%] sm:relative sm:block z-10 min-w-[250px] h-screen sm:py-5 py-8 px-3 bg-[#5d6166] text-white`}>
        <button onClick={() => setModal(!modal)} className="absolute top-2 right-2 sm:hidden">
          <GrClose className='text-white' />
        </button>
        <article className='flex flex-col gap-2'>
            <h2 className='text-center rounded-lg py-3 bg-[antiquewhite] text-[#5d6166] text-2xl'>Logo</h2>
            <div className='flex flex-col gap-3 mt-4'>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#ffffffcc] text-[#5d6166] p-2 font-bold rounded-lg' : 'p-2'} to={'/prueba/'} end>Inicio</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#ffffffcc] text-[#5d6166] p-2 font-bold rounded-lg' : 'p-2'} to={'/prueba/continents'}>Continentes</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-[#ffffffcc] text-[#5d6166] p-2 font-bold rounded-lg' : 'p-2'} to={'/prueba/countries'}>Paises</NavLink>
            </div>
        </article>
    </section>
  )
}
