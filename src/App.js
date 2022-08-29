import './App.css';
import Destacado from './Destacado';
import Header from './Header';
import Recomendaciones from './Recomendacions';
import Footer from './Footer';

function App() {
  return (
    <div className="Container-fluid fondo_violeta">
        <Header/>
        <hr/>
        <Destacado />
        <Recomendaciones />
        <Footer />
    </div>
);
}

export default App;
