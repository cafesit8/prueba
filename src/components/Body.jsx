import { Outlet } from 'react-router-dom'
import Search from './Search'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Body({setModal}) {
  return (
    <main className='w-full h-screen sm:p-5 relative p-3 md:gap-5 gap-2 flex flex-col items-center'>
        <button onClick={() => setModal(false)} className='sm:hidden block self-start'>
          <GiHamburgerMenu />
        </button>
        <Search />
        <Outlet />
    </main>
  )
}
