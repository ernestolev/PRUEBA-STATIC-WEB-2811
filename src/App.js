import './App.css';
import { Nav } from './Componentes/nav.jsx';
import { Acercade } from './Componentes/About.jsx';
import { Footer } from './Componentes/footer.jsx';


function App() {
  return (
    <div className="App">
      <Nav/>
      
      <h1>Agricultura inteligente</h1>
      <div class="wave-container"></div>

      <Acercade className="acercade"/>
      <Footer/>
    </div>
  );
}

export default App;
