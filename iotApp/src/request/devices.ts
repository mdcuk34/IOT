
const domain = "http://localhost:4000";

const requestDevices = async () => {
    const response = await fetch(`${domain}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({ query: "{ devices { type, id, label } }" })
    });
    const devices = await response.json();
    return devices;
}

export default requestDevices;