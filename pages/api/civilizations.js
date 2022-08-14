// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  
  const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`, 
        {
            method: 'GET',
            mode: 'cors', 
            headers: {'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .catch(error => console.log('error', error));
    res.json(data);
}
