export const userAuthValidation = async (username:string, password:string) => {
    const url = "http://localhost:5000/login";
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    });
    const data = await resp.json();        
    return data;
}
