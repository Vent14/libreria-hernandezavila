import './App.css';
import Header from './Header';
import Recomendaciones from './Recomendacions';
import Footer from './Footer';
import ProductosLista from './ListaProductos';


function App() {
  return (
    <div className="Container-fluid fondo_violeta">
        <Header/>
        <hr/>
        <ProductosLista />
        <Recomendaciones />
        <Footer />
    </div>
);
}

export default App;
