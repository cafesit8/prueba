import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ContextProvider from './context/Context.jsx'
import { ApolloClient, HttpLink, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://countries.trevorblades.com/'
  }),
})

ReactDOM.createRoot(document.getElementById('root')).render(
   <ContextProvider>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
   </ContextProvider>
)
