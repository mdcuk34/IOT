import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StatusBar, Button} from 'react-native';
import {mutation, query} from './api';
import {AddDevice} from './components';

declare const global: {HermesInternal: null | {}};
// TODO Error handling
const App = () => {
  const [devices, setDevices] = useState();
  const [plants, setPlants] = useState();
  const [showAddDevice, setShowAddDevice] = useState(false);

  const getDevices = async () => {
    const response = await query.devices();
    setDevices(response.data.devices);
  };

  const getPlants = async () => {
    const response = await query.plants();
    setPlants(response.data.plants);
  };

  const addDevice = async ({label, type}: any) => {
    const response = await mutation.addDevice({label, type});
    setDevices(response.data.devices);
  };

  useEffect(() => {
    if (!devices) {
      getDevices();
    }
    if (!plants) {
      getPlants();
    }
  }, [devices, plants]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Devices</Text>
        {devices &&
          devices.map((device) => <Text key={device.id}>{device.label}</Text>)}
        <Text>Plants</Text>
        {plants &&
          plants.map((plant) => <Text key={plant.id}>{plant.name}</Text>)}
        <Button title="Add Device" onPress={() => setShowAddDevice(true)} />
        {showAddDevice && (
          <AddDevice
            close={() => setShowAddDevice(false)}
            addDevice={addDevice}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;
