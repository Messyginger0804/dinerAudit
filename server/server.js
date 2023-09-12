require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
import db = from './db';
const app = express();
// app.use(morgan("dev"))

app.use(express.json());





// get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
    const results = await db.query("SELECT * FROM restaurant")

    console.log(results)
    res.status(200).json({
        status: 'success',
        data: {
            restaurant: ['wendys', 'kfc']

        }
    })
})

// get single restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
    console.log(req)

    res.status(200).json({
        status: 'OK',
        data: {
            restaurants: "wendys"
        }
    });
})

// Create a new restaurant`
app.post('/api/v1/restaurants', (req, res) => {
    console.log(req)

    res.status(201).json({
        status: 'OK',
        data: {
            restaurants: "wendys"
        }
    });
})

// update a restaurant

app.put('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)

    res.status(200).json({
        status: 'OK',
        data: {
            restaurants: "wendys"
        }
    });
});


// delete restaurant

app.delete('api/restaurants/:id', function (req, res) {

    res.status(204).json({
        status: 'OK',
    })
});

const port = process.env.PORT || 3009;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});