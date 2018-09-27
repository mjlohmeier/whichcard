let sendAttack = (data) =>{
    fetch('http://localhost:3005/game/id', {
    method: "POST",
    body: data,
    headers: {
        'Content-Type': "application/json"
    }
 })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(err => console.error('Error:', err))
};

export default sendAttack