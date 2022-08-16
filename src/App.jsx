import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/Homepage';
import Address from './pages/address/Address';
import RequireAddress from './hoc/RequireAddress';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Transaction from './components/transactions/transaction/Transaction';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<MainLayout/>} >
                <Route index element = {<Address/>} />
                <Route path='explore/:address/:chain_id' element = {
                    <Homepage />
                } />
                <Route path = 'transaction/:hash/:chain_id' element = {
                    <Transaction/>
                } />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
