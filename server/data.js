let plants = [
  {
    name: "Chilli",
    id: 1
  },
  {
    name: "Tomato",
    id: 2
  },
  {
    name: "Sunflower",
    id: 3
  },
  {
    name: "Avocado",
    id: 4
  },
  {
    name: "Jasmine",
    id: 5
  },
  {
    name: "Pepper",
    id: 6
  },
  {
    name: "Plum",
    id: 7
  },
  {
    name: "Pear",
    id: 8
  },
  {
    name: "Apple",
    id: 9
  },
  {
    name: "Hydrangea",
    id: 10
  },
  {
    name: "Carrot",
    id: 11
  }
];


const devices = [
  {
    id: 1, 
    type: "sensor", 
    plantId: 1, 
    label: "My chilli plants"
  },
  {
    id: 2, 
    type: "sensor", 
    plantId: 9, 
    label: "My apple tree"
  },
  {
    id: 3, 
    type: "tap", 
    label: "Main tap"
  }
]


const users = [{
  username: "Tom Cruise", 
  password: "thisappwillselfdistruct"
}, 
{
  username: "Eddie Murphy", 
  password: "beveryhillscop3wasntgood"
},
{
  username: "Marty Mcfly", 
  password: "heaaaavy"
},
{
  username: "Katniss Everdeen", 
  password: "mockingjay2010"
}]

module.exports.plants = plants; 
module.exports.devices = devices; 
module.exports.users = users; 