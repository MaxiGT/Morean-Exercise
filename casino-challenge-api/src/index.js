const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//The App itself
const app = express();
app.use(helmet());
app.use(bodyparser.json());
app.use(cors());
app.use(morgan('combined'));

//The DB
//TO-DO: Bootstrap a real DB
const users = [
    {
        id: 1,
        photo: '',
        name: 'Celeste',
        lastName: 'Cide',
        country: 'USA',
        flag: '',
        winnings: 25000000.00,
    },
    {
        id: 2,
        photo: '',
        name: 'Pedro',
        lastName: 'Pomposo',
        country: 'GBR',
        flag: '',
        winnings: 10000000.00,
    },
    {
        id: 3,
        photo: '',
        name: 'Nahuel',
        lastName: 'Nahual',
        country: 'ARG',
        flag: '',
        winnings: 15000000.00,
    },
    {
        id: 4,
        photo: '',
        name: 'Guido',
        lastName: 'Guerra',
        country: 'SPA',
        flag: '',
        winnings: 18000000.00,
    },
    {
        id: 5,
        photo: '',
        name: 'Luciana',
        lastName: 'Luz',
        country: 'USA',
        flag: '',
        winnings: 22000000.00,
    },
    {
        id: 6,
        photo: '',
        name: 'Ernestina',
        lastName: 'Pez',
        country: 'JPN',
        flag: '',
        winnings: 9000000.00,
    },
    {
        id: 7,
        photo: '',
        name: 'Boga',
        lastName: 'Oneto',
        country: 'GBR',
        flag: '',
        winnings: 19000000.00,
    },
];

//Endpoints
//Get All
app.get('/', (req, res) => {
    const qs = users.map(u => ({
        id: u.id,
        photo: u.photo,
        name: u.name,
        lastName: u.lastName,
        country: u.country,
        flag: u.flag,
        winnings: u.winnings,
    }));
    res.send(qs)
});

//Get User
app.get('/:id', (req, res) => {
    const q = users.filter(q => q.id === parseInt(req.params.id));
    if (q.length === 0) return res.status(404).send();
    res.send(q[0]);
});

//Insert User
app.post('/', (req, res) => {
    const { name, lastName, country, winnings } = req.body;
    const newUser = {
        id: users.length + 1,
        name: name,
        lastName: lastName,
        country: country,
        winnings: winnings,
    };
    users.push(newUser);
    const qs = users.map(u => ({
        id: u.id,
        name: u.name,
        lastName: u.lastName,
        country: u.country,
        winnings: u.winnings,
    }));
    res.status(200).send(qs);
});

//Update User
app.post('/user/:id', (req, res) => {
    const { name, lastName, country, winnings } = req.body;
    const q = users.filter(q => q.id === parseInt(req.params.id));
    if (q.length === 0) return res.status(404).send();
    q[0].name = name;
    q[0].country = country;
    q[0].lastName = lastName;
    q[0].winnings = winnings;
    res.status(200).send(q[0]);
});

//Start the server
app.listen(8081, () => {
    console.log('Listening Port 8081');
});