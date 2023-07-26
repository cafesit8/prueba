import SideBar from '../components/SideBar'
import Body from '../components/Body'
import { useState } from 'react'

export default function Root() {
  const [modal, setModal] = useState(false);
  return (
    <div className='w-full bg-[#d5effa] min-h-screen flex'>
        <SideBar setModal={setModal} modal={modal} />
        <Body setModal={setModal} />
    </div>
  )
}
