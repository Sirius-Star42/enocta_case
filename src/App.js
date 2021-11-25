import React from 'react';
import Timer from './components/Timer';
import CoinMeter from './components/CoinMeter';
import './'


function App() {

  var hoursMinSecs = {hours:2, minutes: 20, seconds: 40}

  return (
    <div>
      <CoinMeter/>
      {/* <Timer hoursMinSecs={hoursMinSecs}/> */}
    </div>
  );
}

export default App;
