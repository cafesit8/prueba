import { gql, useQuery } from '@apollo/client'
import Details from '../components/Details'
import Card from '../components/Card'
import { Context } from '../context/Context'
import { useEffect, useState, useContext } from 'react'

const CONTINENTS = gql`
  query Continents{
    continents {
      name
      countries {
        capital
        currency
        languages {
          name
        }
      } 
    }
  }
`

export default function Continents() {
  const { data, loading } = useQuery(CONTINENTS)
  const { countryFound, setInfo } = useContext(Context)
  const [results, setResults] = useState();

  const handleClick = (countryFound) => setInfo(countryFound)

  useEffect(() => {
    if(!loading){
      getImages()
    }
  }, [data?.continents])
  
  async function getImages(){
    const list = []
    const continents = data?.continents

    const fetchPromises = continents.map(item => {
      return fetch(`https://pixabay.com/api/?key=38450255-c3e49e8ff0a06c8f5abef59b2&q=landscape+of+${item.name}&image_type=photo`)
        .then(req => req.json())
        .then(res => {
          list.push(res.hits[1]?.previewURL)
        });
    });
    list.sort()
    await Promise.all(fetchPromises);
    const all = continents?.map((continent, i) => ({
      ...continent,
      flag: list[i]
    }))
    setResults(all)
  }

    if(countryFound) return (
      <main className='w-full flex gap-4 h-[90%]'>
        <section className='w-full h-full relative lg:overflow-auto overflow-y-scroll grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
          <article onClick={()=>handleClick(countryFound)} className="h-44 w-[250px] relative flex flex-col overflow-hidden rounded-2xl">
            <div className='w-full h-[70%] bg-red-200'>
              <img src={countryFound?.flag} alt={`${countryFound?.name}'s flag`} />
            </div>
            <div className='w-full h-[30%] bg-white flex gap-4 px-4'>
                <picture className='w-[50px]'>
                  <img className='w-full h-full object-contain' src={countryFound?.flag} alt={`${countryFound?.name}'s flag`} />
                </picture>
                <div className="flex flex-col justify-center">
                  <h5 className='font-bold'>{countryFound?.name}</h5>
                  {countryFound?.continent && <p className='text-gray-500'>{countryFound.continent.name}</p>}
                </div>
            </div>
          </article>
        </section>
        <Details />
      </main>
    )


  return (
    <main className='w-full flex gap-4 h-[90%]'>
      <section className='w-full h-auto lg:h-[380px] relative lg:overflow-auto overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4'>
        {loading ? 'Cargando...' : 
        results?.map(continent => (
          <Card key={continent.name} item={continent} />
        ))}
      </section>
      <Details />
    </main>
  )
}
