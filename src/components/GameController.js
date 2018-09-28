let sendAttack = (data) => {
    fetch('http://localhost:3005/game/id', {
    method: "POST",
    mode: 'cors',
    body: data,
    headers: {
        'Content-Type': "application/json"
    }
 })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(err => console.error('Error:', err))
    fetch('https://my-little-cors-proxy.herokuapp.com/https://math.ly/api/v1/algebra/linear-equations.json')
    .then(res => {
        // console.log(res)
        return res.json()
    })
    .then(randommathquestion => {
        // console.log(randommathquestion)
    })
};


export default sendAttack;