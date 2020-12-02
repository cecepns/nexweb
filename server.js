const next = require('next');
const express = require('express');

const port = 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});

const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {

        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, err => {
            if (err) {
                throw err;
            } else {
                console.log(`Served started at port ${port}`)
            }
        });

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    })