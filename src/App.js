import './App.css';
import Formulario from './components/formulario';

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className='col-md-3'>
            <h2>Crear mi Cita</h2>
            <Formulario/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
