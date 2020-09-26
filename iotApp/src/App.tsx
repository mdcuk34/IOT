import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {mutation, query} from './api';
import {AddDevice, H1, Button} from './components';

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
  // As the app grows moving parts of the state to context could make sense.
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

  // TODO type
  const deviceItem = ({item}: any) => {
    return (
      <ListItemContainer>
        <ListItemText>{item.label}</ListItemText>
      </ListItemContainer>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <H1>DEVICES</H1>
        {devices && (
          <List
            refreshing={devicesLoading}
            onRefresh={getDevices}
            data={devices}
            renderItem={deviceItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <Button title="Add Device" onPress={() => setShowAddDevice(true)} />
      </Container>
      {showAddDevice && plants && (
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

const Container = styled.SafeAreaView`
  margin: 2%;
  flex: 1;
`;

const List = styled.FlatList`
  padding-vertical: 2%;
  flex: 1;
`;

// TODO pull out into it's own component
const ListItemContainer = styled.View`
  padding: 2%;
  margin-vertical: 2%;
  background-color: #f87060;
  justify-content: center;
  border-radius: 5px;
`;

const ListItemText = styled.Text`
  font-size: 14px;
`;
