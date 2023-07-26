import { gql, useLazyQuery } from '@apollo/client'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { useEffect, useState } from 'react'

const FIND_COUNTRY = gql`
    query FindCountry($code: ID!){
        country(code: $code) {
        name
        native
        capital
        emoji
        currency
        continent{
            name
          }
        languages {
                code
                name
            }
        }
    }
`

export default function Search() {
  const [getCountry, result] = useLazyQuery(FIND_COUNTRY)
  const { setCountryFound } = useContext(Context)
  const [status, setStatus] = useState(false);

    function handleSubmit(e){
        e.preventDefault()
        getCountry({variables: {code: e.target.code.value.toUpperCase()}})
        setStatus(!status)
    }

    useEffect(() => {
      if(result.data?.country === null){
        setCountryFound(null)
        return
      }
        function getFlags(){
          fetch(`https://restcountries.com/v3.1/name/${result.data?.country?.name}?fields=flags`)
          .then(req => req.json())
          .then(res => {
            if(res.status === 404){
              setCountryFound(null)
              return
            }
            const obj = ({...result.data?.country, flag: res[0]?.flags.png})
            setCountryFound(obj)
          })
        }
        getFlags()
    }, [status])

  return (
    <div className='w-full flex relative justify-center items-center sm:h-[10%] h-[500px] rounded-xl'>
        <div className='relative bg-white w-full rounded-lg flex h-auto'>
            <form onSubmit={handleSubmit} className='w-full flex'>
                <div className='relative w-full pl-3'>
                  <h2 className='md:text-2xl text-[15px]'>País</h2>
                  <input name='code' className='w-full outline-none sm:placeholder:text-[12px] text-[12px]' type="text" placeholder='Código del país que desea ver: "PE"' />
                </div>
                <button className='rounded-lg self-center mr-3 sm:py-2 py-1 text-white px-5 bg-blue-400'>Buscar</button>
            </form>
        </div>
    </div>
  )
}
