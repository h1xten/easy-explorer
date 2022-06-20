import 'antd/dist/antd.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/Homepage';
import Address from './pages/address/Address';
import RequireAddress from './hoc/RequireAddress';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path='/' element = {<MainLayout/>} >
                    <Route index element = {
                        <RequireAddress>
                             <Homepage />
                        </RequireAddress>
                    } />
                    <Route path='/address' element = {<Address/>} />
                </Route>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
