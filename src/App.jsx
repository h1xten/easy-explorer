import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/Homepage';
import Address from './pages/address/Address';
import RequireAddress from './hoc/RequireAddress';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<MainLayout/>} >
                <Route index element = {
                    <RequireAddress>
                            <Homepage />
                    </RequireAddress>
                } />
                <Route path='address' element = {<Address/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
