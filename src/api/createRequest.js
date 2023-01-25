const createRequest= async ({id, payload, method}) => {
    const baseURL = 'http://localhost:7777/notes/';
    const requestURL = method === 'delete' ? baseURL + `${id}` : baseURL;
    const request = await fetch(requestURL, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (!request.ok) {
        throw new Error('Что-то пошло не так...');
    }
    const response = await fetch(requestURL);
    let json = response.json()
    return json;
}
export default createRequest;