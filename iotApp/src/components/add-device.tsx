import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Button} from './button';
import {mutation, query} from '../api';

type AddDeviceProps = {
  close: () => void;
  addDevice: ({label, type, plantId}: mutation.AddDevice) => void;
  plants: query.Plant[];
};

const AddDevice = ({close, addDevice, plants}: AddDeviceProps) => {
  const [label, onChangeLabel] = React.useState('Label');
  const [type, onChangeType] = React.useState('Type');
  const [plantId, setPlantId] = React.useState(plants[0].id);

  const AddDeviceOnPress = () => {
    close();
    addDevice({label, type, plantId});
  };

  return (
    <AbsoluteContainer>
      <Container>
        <Close onPress={close}>
          <Text>X</Text>
        </Close>
        <Title>Add New Device</Title>
        <Input
          onChangeText={(text: string) => onChangeLabel(text)}
          value={label}
          autoFocus
        />
        <Input
          onChangeText={(text: string) => onChangeType(text)}
          value={type}
        />
        <Picker
          selectedValue={plantId}
          onValueChange={(itemValue) => setPlantId(Number(itemValue))}>
          {plants.map((plant) => (
            <Picker.Item key={plant.id} label={plant.name} value={plant.id} />
          ))}
        </Picker>
        <Button title="Add Device" onPress={AddDeviceOnPress} />
      </Container>
    </AbsoluteContainer>
  );
};

export {AddDevice};

// TODO Some of these could be split into own components
// TODO Consider positioning when keyboard shown
const AbsoluteContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.5);
`;

const Container = styled.View`
  width: 50%;
  background-color: #f87060;
  border-radius: 5px;
  padding: 2%;
`;

const Close = styled.TouchableOpacity`
  color: black;
  align-self: flex-end;
  font-size: 14px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 2%;
  color: #102542;
`;

const Input = styled.TextInput`
  margin-bottom: 2%;
  margin-top: 2%;
  padding: 2%;
  color: #102542;
  background-color: white;
  border-radius: 2px;
`;
