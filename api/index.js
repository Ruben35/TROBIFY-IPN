const app = require('express')();
const PORT = 8000;

app.listen(
    PORT,
    () => console.log(`The server is alive on http://localhost:${PORT}`)
);

app.get('/hello', (req, res) => {
    res.status(200).send({
        message: 'Hello World',
        emoji: '🌐'
    })
});