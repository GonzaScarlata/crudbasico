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
import {useState, useEffect} from 'react';

function App() {

  const URL = process.env.REACT_APP_API_URL;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  },[]);

  const consultarAPI = async() =>{
    try{
      const respuesta = await fetch(URL);
      //console.log(respuesta);
      if (respuesta.status === 200) {
        const listaProductos = await respuesta.json();
       // console.log(listaProductos);
        setProductos(listaProductos);
      }
    } catch(error){

    }
  }

  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/productos">
          <ListaDeProductos productos = {productos} consultarAPI={consultarAPI} />
        </Route>
        <Route exact path="/productos/nuevo">
          <AgregarProducto consultarAPI={consultarAPI} />
        </Route>
        <Route exact path="/productos/editar/:id">
          <EditarProducto />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
