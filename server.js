import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();

const corsOption = {
    origin: '*',
    optionSuccessStatus:200,
}

app.use(cors(corsOption))
app.use(express.json());

app.post('/save-coins', (request, result) => {
    const coinsData = request.body;
    console.log(coinsData);

    fs.writeFile('coinsData.json', JSON.stringify(coinsData, null, 2), (err) => {
        if (err) {
            console.error('Eroor writing to file', err);
            return result.status(500).send('Error saving data');
        }
        console.log('Data successfully written to coinsData.json');
        result.status(200).send('Data saved succesfully');
    });
});

const server = app.listen(8082, function () {
    const port = server.address().port;
    console.log('Backend API listening over port: ' + port);
})