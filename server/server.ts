import express from 'express';
import path from 'path';

const port = 4000;
const app = express();

app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})