import {query} from './client';

const devices = async () => query('{ devices { type, id, label } }');

const plants = async () => query('{ plants { name, id } }');

export {devices, plants};
