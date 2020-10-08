import {client} from './client';

// TODO Generate Types from API
export type Device = {
  id: number;
  type: string;
  label: string;
  plantId: number;
};

export type Plant = {
  name: string;
  id: number;
};

const devices = async () =>
  client<{devices: Device[]}>('{ devices { type, id, label, plantId } }');

const plants = async () => client<{plants: Plant[]}>('{ plants { name, id } }');

export {devices, plants};
