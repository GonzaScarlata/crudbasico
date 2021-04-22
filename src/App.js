import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Inicio from './components/Inicio';
import ListaDeProductos from './components/productos/ListaDeProductos';
import AgregarProducto from './components/productos/AgregarProducto';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditarProducto from './components/productos/EditarProducto';
function App() {
  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/productos">
          <ListaDeProductos />
        </Route>
        <Route exact path="/productos/nuevo">
          <AgregarProducto />
        </Route>
        <Route exact path="/productos/editar">
          <EditarProducto />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
