import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import exrpess from 'express';

const app = exrpess();

app.get('/', (req, res) => {
    res.send('Hello World!')
    res.end();
})

app.listen(process.env.PORT);
