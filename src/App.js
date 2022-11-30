import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './myStyles.css';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import Bazares from './components/Bazares';
import Pedidos from './components/Pedidos';
import Ayuda from './components/Ayuda';
import Contacto from './components/Contacto';
import Login from './components/Login';
import Signin from './components/Signin';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { ProtectedRoutes } from './components/ProtectedRoutes';
const App = () => {
  return (
      <div>
        <AuthProvider>
          <Navbar/>
          <Routes>
            <Route exact path="/signin" element={<Signin/>}>
            </Route>
            <Route exact path="/login" element={<Login/>}>
            </Route>
            <Route exact path="/pedidos" element={
            <ProtectedRoutes>
              <Pedidos/>
            </ProtectedRoutes>}>
            </Route>
            <Route exact path="/bazares" element={<Bazares/>}>
            </Route>
            <Route exact path="/ayuda" element={<Ayuda/>}>
            </Route>
            <Route exact path="/contacto" element={<Contacto/>}>
            </Route>
            <Route exact path="/" element={
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>}>
            </Route>
          </Routes>
          <Footer/>
        </AuthProvider>
      </div>
      );

}

export default App;
