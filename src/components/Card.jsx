import { useContext } from "react"
import { Context } from "../context/Context"

export default function Card({item}) {
  const { setInfo } = useContext(Context)
  const handleClick = () => setInfo(item)
  return (
    <article onClick={handleClick} className="h-44 relative flex flex-col overflow-hidden rounded-2xl">
        <div className='w-full h-[70%]'>
          <img className="w-full h-full object-cover" src={item?.flag} alt={`${item?.name}'s flag`} />
        </div>
        <div className='w-full h-[30%] bg-white flex gap-4 px-4 overflow-hidden'>
            <picture className="h-full w-[50px]">
              <img className="w-full h-full object-contain" src={item?.flag} alt={`${item?.name}'s flag`} />
            </picture>
            <div className="flex flex-col justify-center">
              <h5 className='font-bold leading-none'>{item?.name}</h5>
              {item?.continent && <p className='text-gray-500'>{item.continent.name}</p>}
            </div>
        </div>
    </article>
  )
}
