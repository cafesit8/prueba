import { useContext } from "react"
import { GrClose } from 'react-icons/gr'
import { Context } from "../context/Context"

export default function Details() {
  const { info, setInfo } = useContext(Context)
  if(info === null) return null
  return (
    <aside className='sm:w-[400px] w-[90%] lg:relative h-full py-7 px-3 text-[#5d6166] bg-white absolute top-0 right-0'>
        <button onClick={() => setInfo(null)} className="absolute top-2 right-2">
          <GrClose />
        </button>
        <div className='w-full flex flex-col gap-3 h-auto'>
            <picture className='w-full h-[170px]'>
                <img className="w-full h-full object-cover" src={info.flag} alt="" />
            </picture>
            {info.continent ? 
              <article>
                <h3 className="text-sky-400 text-xl font-bold">{info.name}</h3>
                <p className="text-lg">{info.continent.name}</p>
                <p className="text-lg"><span className="text-sky-400 text-lg font-bold">Capital:</span> {info.capital || 'no especifed'}</p>
                <p className="text-lg"><span className="text-sky-400 text-lg font-bold">Languages:</span> {info.languages.map(lg => lg.name).join(', ') || 'no especifed'}</p>
                {info.currencies &&<p className="text-lg"><span className="text-sky-400 text-lg font-bold">Currency:</span> {info.currencies.join(', ') || 'no especifed'}</p>}
              </article> :
              <article>
                <h3 className="text-sky-400 text-center text-xl font-bold">{info.name}</h3>
                <p className="text-lg"><span className="text-sky-400 text-lg font-bold">Some Countries: </span>{info.countries?.slice(0,10).map(country => country.capital).join(', ')}</p>
              </article>}
        </div>
    </aside>
  )
}
