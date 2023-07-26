import { useContext, useState, useEffect } from 'react'
import Card from '../components/Card'
import Details from '../components/Details'
import { useQuery, gql } from '@apollo/client'
import { Context } from '../context/Context'

const COUNTRIES = gql`
  query Countries{
    countries{
      name
      capital
      continent{
        name
      }
      currencies
      languages{
        name
      }
    }
  }
`

export default function Countries() {
  const { data, loading } = useQuery(COUNTRIES)
  const { countryFound, setInfo } = useContext(Context)
  const [results, setResults] = useState([]);

  const handleClick = (countryFound) => setInfo(countryFound)

  useEffect(() => {
    if(!loading){
      getFlags()
    }
  }, [data?.countries])

  async function getFlags(){
    const list = [];
    const countriesList = data?.countries.slice(30, 55);

    const fetchPromises = countriesList.map(item => {
      return fetch(`https://restcountries.com/v3.1/name/${item.name}?fields=flags`)
        .then(req => req.json())
        .then(res => {
          list.push(res[0]?.flags.png);
        });
    });
    list.sort()
    await Promise.all(fetchPromises);
    const all = countriesList?.map((country, i) => ({
      ...country,
      flag: list[i]
    }))
    setResults(all)
  }

  if(countryFound) return (
    <main className='w-full flex gap-4 h-[90%]'>
      <section className='w-full h-full relative lg:overflow-auto overflow-y-scroll grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
        <article onClick={()=>handleClick(countryFound)} className="h-52 w-[250px] relative flex flex-col overflow-hidden rounded-2xl">
            <div className='w-full h-[70%] bg-red-200'>
              <img src={countryFound?.flag} alt={`${countryFound?.name}'s flag`} />
            </div>
            <div className='w-full h-[30%] bg-white flex gap-3 px-4'>
                <picture className='w-[50px]'>
                  <img className='w-full h-full object-contain' src={countryFound?.flag} alt={`${countryFound?.name}'s flag`} />
                </picture>
                <div className="flex flex-col justify-center">
                  <h5 className='font-bold leading-none'>{countryFound?.name}</h5>
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
      <section className='w-full h-full relative lg:overflow-auto overflow-y-scroll grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
        {loading ? 'Cargando...' : 
        results?.map(country => (
          <Card key={country.name} item={country} />
        ))}
      </section>
      <Details />
    </main>
  )
}
