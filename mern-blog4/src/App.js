import './App.css';
import ProductList from './product-list/ProductList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateProduct from './create-product/CreateProduct';
import EditTable from './edit-table/EditTable';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<CreateProduct/>}/>
          <Route path='/table' element={<ProductList/>}/>
          <Route path='/edit/:id' element={<EditTable/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
