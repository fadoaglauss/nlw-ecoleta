import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json({});
});

app.listen(3000);