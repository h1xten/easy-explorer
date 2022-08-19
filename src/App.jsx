import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/Homepage';
import Address from './pages/address/Address';
import Transaction from './components/transactions/transaction/Transaction';
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HyphenPage from './pages/hyphenpage/HyphenPage';

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
                <Route path = '/hyphen-bridge' element ={
                    <HyphenPage />
                } />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
