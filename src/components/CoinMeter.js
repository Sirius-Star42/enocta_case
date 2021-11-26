import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

function CoinMeter() {
  var [respData, setRespData] = useState("");

  useEffect(() => {
    const req = setInterval(async () => await coinReq(), 3000);
    return () => clearInterval(req);
  });

  useEffect(() => {
    console.log("test")
  }, [])

  var config = {
    method: 'get',
    url: apiUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const coinReq = async () => {
    var resp = await axios(config)
      .then(function (response) {
        setRespData(response.data)
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  try {
    var disclaimer = respData ? respData.disclaimer : ""
    var bpi = respData ? {
      "usd": respData.bpi.USD.rate,
      "gbp": respData.bpi.GBP.rate,
      "eur": respData.bpi.EUR.rate
    } : ""
  } catch (error) {
      console.log(error)
      alert(error.message)
  }


  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div>
              <p className="mb-5">{disclaimer}</p>
            </div>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Currency</th>
                  <th scope="col">USD</th>
                  <th scope="col">GBP</th>
                  <th scope="col">EURO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">BTC</th>
                  <td>{bpi.usd} $</td>
                  <td>{bpi.gbp} £</td>
                  <td>{bpi.eur} €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinMeter;