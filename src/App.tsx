import React, { useEffect, useState } from 'react';
import requestDevices from "./request/devices";

function App() {

  const [devices, setDevices] = useState();

  const getData = async () => {
    const devices = await requestDevices();
    setDevices(devices);
  }

  useEffect(
    () => {
      if (!devices) {
        getData();
      }
    },
    [devices]
  );

  return (
    <div>
      
    </div>
  );
}

export default App;
