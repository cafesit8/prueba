import { Routes, Route } from 'react-router-dom'
import Root from './layout/Root'
import Home from './views/Home'
import Continents from './views/Continents'
import Countries from './views/Countries'
import Content from './layout/Content'

function App() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route path='/prueba/' element={<Home />} />
        <Route element={<Content />}>
          <Route path='/prueba/continents' element={<Continents />} />
          <Route path='/prueba/countries' element={<Countries />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
