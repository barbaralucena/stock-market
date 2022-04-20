import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';
import { useEffect, useState } from 'react';
import Detail from './components/Detail';

function App() {
  const[stocks, setStocks] = useState([])
  useEffect(()=>{
    fetch("https://justivo.com/stockws.php?get")
    .then(response => response.json())
    .then(dataReceived =>setStocks(dataReceived));
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home stocks={stocks} />}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/detail/:code" element={<Detail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
