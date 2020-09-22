import {mutation} from './client';

type AddDevice = {
  label: string;
  type: string;
};

const addDevice = async ({label, type}: AddDevice) =>
  mutation(
    `mutation { addDevice(device:{ label: "${label}", type:"${type}"}) { type, id, label }}`,
  );

export {addDevice};
