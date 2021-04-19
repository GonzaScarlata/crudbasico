import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Inicio from './components/Inicio';
import ListaDeProductos from './components/productos/ListaDeProductos';
import AgregarProducto from './components/productos/AgregarProducto';

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}

export default App;
