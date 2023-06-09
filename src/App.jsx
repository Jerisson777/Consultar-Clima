import AppClima from './Components/AppClima'
import {ClimaProvider} from './Context/ClimaProvider'


function App() {
  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Climas</h1>
      </header>
      <AppClima/>
   </ClimaProvider>
  )
}

export default App
