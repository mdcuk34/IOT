import {client} from './client';
import {Device} from './queries';

// TODO Generate Types from API
export type AddDevice = {
  label: string;
  type: string;
  plantId: number;
};

const addDevice = async ({label, type, plantId}: AddDevice) => {
  return client<{devices: Device[]}>(
    `mutation { addDevice(device:{ label: "${label}", type:"${type}", plantId: ${plantId}}) { type, id, label, plantId }}`,
  );
};

export {addDevice};
