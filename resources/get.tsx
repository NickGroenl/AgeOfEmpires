async function fetchByName(url: string){ 
    return await fetch(`/api/${url}`, 
        {
            method: 'GET',
            mode: 'cors', 
            headers: {'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => console.log('error', error));
}
export default fetchByName;
