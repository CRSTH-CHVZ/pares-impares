const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let html = '';
    for (let i = 1; i <= 50; i++) {
        html += '<p>' + i + (i % 2 === 0 ? ' Soy Par!' : ' Soy Impar!') + '</p>';
    }
    res.send(html);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
