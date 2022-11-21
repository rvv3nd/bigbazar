import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './myStyles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalogo from './components/Catalogo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <body>
        <Catalogo/>
        <aside>
          <h1>Carrito</h1>
        </aside>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
