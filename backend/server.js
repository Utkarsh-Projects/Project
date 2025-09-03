import express from 'express';
const app = express();
const port = process.env.PORT || 3000;


app.get('/health', (_, res) => res.send('ok'));
app.get('/api/hello', (_, res) => res.json({ msg: 'Hello from Node API!' }));


app.listen(port, () => console.log(`API listening on ${port}`));
