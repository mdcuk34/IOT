import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StatusBar, Button, FlatList} from 'react-native';
import {mutation, query} from './api';
import {AddDevice} from './components';

// App Colors
//
// TODO Add these to styled-components theme
//
// 102542 - blue
// F87060 - red
// CDD7D6 - grey
// B3A394 - brow
// FFFFFF - white

declare const global: {HermesInternal: null | {}};
// TODO Error handling
const App = () => {
  const [devices, setDevices] = useState<undefined | query.Device[]>(undefined);
  const [devicesLoading, setDevicesLoading] = useState(true);
  const [plants, setPlants] = useState<undefined | query.Plant[]>(undefined);
  const [showAddDevice, setShowAddDevice] = useState(false);

  const getDevices = async () => {
    !devicesLoading && setDevicesLoading(true);
    const response = await query.devices();
    console.log(response, 'here');
    setDevices(response.parsedBody?.data.devices);
    setDevicesLoading(false);
  };

  const getPlants = async () => {
    const response = await query.plants();
    setPlants(response.parsedBody?.data.plants);
  };

  const addDevice = async ({label, type, plantId}: mutation.AddDevice) => {
    const response = await mutation.addDevice({label, type, plantId});
    setDevices(response.parsedBody?.data.devices);
  };

  useEffect(() => {
    if (!devices) {
      getDevices();
    }
    if (!plants) {
      getPlants();
    }
  }, [devices, plants]);

  const deviceItem = ({item}) => {
    return <Text>{item.label}</Text>;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Devices</Text>
        {devices && (
          <FlatList
            refreshing={devicesLoading}
            onRefresh={getDevices}
            data={devices}
            renderItem={deviceItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <Button title="Add Device" onPress={() => setShowAddDevice(true)} />
      </SafeAreaView>
      {showAddDevice && (
        <AddDevice
          plants={plants}
          close={() => setShowAddDevice(false)}
          addDevice={addDevice}
        />
      )}
    </>
  );
};

export default App;
