var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const cors = require('cors');

var { plants, devices, users } = require('./data');

const createdNewId = (array) => {
  const highest = array.sort((itemA, itemB) => itemA.id - itemB.id);
  return highest.id + 1;
}

var schema = buildSchema(`
  type Plant {
    name: String,
    id: Int
  }

  type Device {
    id: Int, 
    type: String,
    label: String,
    plantId: Int
  }

  input DeviceInput {
    label: String!,
    type: String!,
    plantId: Int
  }

  type Query {
    plants: [Plant],
    devices: [Device]
  }
  
  type Mutation {
    addDevice(device: DeviceInput): [Device]
  }
  
`);

var root = {
  plants: () => plants,
  devices: () => devices,
  users: () => users,
  addDevice: ({ device }) => {
    devices.push({ id: createdNewId(devices), type: device.type, label: device.label});
    return devices;
  }
};

var server = express();
server.use(cors());
server.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
server.listen(4000);
console.log('Listening on localhost:4000/graphql');
