import React from 'react';
import Header from './components/Header/Header'
import Timer from './components/Timer';
import CoinMeter from './components/CoinMeter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  var hoursMinSecs = {hours:10, minutes: 0, seconds: 0}

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<CoinMeter/>}/>
        <Route path="/timer" element={<Timer hoursMinSecs={hoursMinSecs}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
