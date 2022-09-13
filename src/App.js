import './App.css';
import ItemListContainer from './assets/ItemListContainer/ItemListContainer';
import Header from './assets/Navbar/Header';
import Footer from './assets/Footer';


function App() {
  return (
    <div className="Container-fluid fondo_violeta">
        <Header/>
        <hr/>
        <ItemListContainer/>
        <Footer />
    </div>
);
}

export default App;
