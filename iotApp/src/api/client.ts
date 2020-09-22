const domain = 'http://localhost:4000';

const client = async (body) => {
  const response = await fetch(`${domain}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({
      query: body,
    }),
  });
  return await response.json();
};

const query = async (query: string) => client(query);

const mutation = async (mutation: string) => client(mutation);

export {query, mutation};
