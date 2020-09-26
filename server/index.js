var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const cors = require('cors');

var { plants, devices, users } = require('./data');

// TODO Unit test this code
const createdNewId = (array) => {
  const sortedArray = [...array].sort((itemA, itemB) => itemA.id - itemB.id);
  const highestValue = sortedArray[sortedArray.length - 1].id;
  return highestValue + 1;
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
    devices.push({ id: createdNewId(devices), type: device.type, label: device.label, plantId: device.plantId});
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
