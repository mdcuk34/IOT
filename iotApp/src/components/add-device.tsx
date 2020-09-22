import React from 'react';
import {SafeAreaView, Button, TextInput} from 'react-native';

type AddDeviceProps = {
  close: () => void;
  // TODO Clean up types
  addDevice: ({label, type}: any) => void;
};

const AddDevice = ({close, addDevice}: AddDeviceProps) => {
  const [label, onChangeLabel] = React.useState('Device Label');
  const [type, onChangeType] = React.useState('Device Type');

  return (
    <>
      <SafeAreaView>
        <Button title="CLOSE" onPress={close} />
        <TextInput onChangeText={(text) => onChangeLabel(text)} value={label} />
        <TextInput onChangeText={(text) => onChangeType(text)} value={type} />
        <Button title="PAIR" onPress={() => addDevice({label, type})} />
      </SafeAreaView>
    </>
  );
};

export {AddDevice};
