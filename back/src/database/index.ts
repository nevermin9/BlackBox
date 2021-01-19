import { Client } from 'pg';

const config = {
    host: 'localhost',
    port: 5432,
    user: 'user',
    password: 'password',
}

const client = new Client(config)

client.connect(err => {
    if (err) {
        console.log('ERROR is ', err);
    } else {
        console.log('CONNECTED!');
    }
});

export default client;