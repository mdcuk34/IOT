const API = 'http://localhost:4000';

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

async function client<T>(body: string): Promise<HttpResponse<{data: T}>> {
  const response: HttpResponse<{data: T}> = await fetch(`${API}/graphql`, {
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

  try {
    // may error if there is no body
    response.parsedBody = await response.json();
  } catch (ex) {
    // Handle error here
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}

export {client};
