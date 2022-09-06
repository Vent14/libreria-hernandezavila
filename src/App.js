import './App.css';
import ItemListContainer from './assets/ItemListContainer';
import Header from './assets/Header';
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
