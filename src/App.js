import './App.css';
import ItemListContainer from './assets/ItemListContainer/ItemListContainer';
import Header from './assets/Navbar/Header';
import Footer from './assets/Footer';
import ItemDetailContainer from './assets/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="Container-fluid" className="fondo_violeta">
        <Header />
        <hr/>
          <div className="Container-fluid">
        <ItemListContainer/>
          </div>
        <Footer />
    </div>

);
}

export default App;
