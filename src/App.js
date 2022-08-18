import './App.css';
import Formulario from './components/formulario';
import Boton from './components/button';

function App() {
  return (
    <div className="App">
      <h1>ADMINISTRADOR DE PACIENTESssssss</h1>
      <div className="container">
        <div className="row">
          <div className='one-half column'>
            <h2>Crear mi Cita</h2>
            <Formulario/>
            <Boton/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
