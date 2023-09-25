require("dotenv").config();
const express = require('express');
// const morgan = require('morgan');
// import db = from './db';
const db = require('./db');
const app = express();
// import cors from 'cors';
const cors = require('cors');
// app.use(morgan("dev"))

app.use(cors({
    // origin: 'http://localhost:5173',
    origin: '*',
    // origin: 'http://localhost:4000',
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());





// get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
    try {
        // const results = await db.query(`
        // SELECT * FROM restaurant;
        // `)
        const restaurantData = await db.query(`
        SELECT * FROM restaurant LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurant.id = reviews.restaurant_id;
        `,)
        // console.log("reviews------>", restaurantData);
        // console.log("results------>", results)
        res.status(200).json({
            status: 'success',
            results: restaurantData.rows.length,
            data: {
                restaurants: restaurantData.rows
            }
        })
    } catch (error) {
        console.log(error)
    }

})

// get single restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
    // console.log(req.params.id)
    try {
        const restaurant = await db.query(`
        SELECT * FROM restaurant LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 3) as average_rating FROM reviews group by restaurant_id) reviews on restaurant.id = reviews.restaurant_id WHERE id = $1
        `, [req.params.id])


        const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1", [req.params.id])
        res.status(200).json({
            status: 'sucess',
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows,
            }
        });

        // console.log('===========', results);
    } catch (error) {
        console.log(error);
    }
})

// Create a new restaurant`
app.post('/api/v1/restaurants', async (req, res) => {
    // console.log(req.body)

    try {
        const results = await db.query(`
        INSERT INTO restaurant 
        (name, location, price_range) values ($1, $2, $3) RETURNING *`,
            [req.body.name, req.body.location, req.body.price_range])
        console.log(results)

        res.status(201).json({
            status: 'success',
            data: {
                restaurants: results.rows[0]
            }
        });
        // console.log(results)
    } catch (error) {
        console.error(error)
    }
})

// create new review
app.post('/api/v1/restaurants/:id/addReview', async (req, res) => {
    try {
        const addReview = await db.query(`INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *;`,
            [req.params.id, req.body.name, req.body.review, req.body.rating]
        )
        // console.log(addReview)
        res.status(201).json({
            status: 'OK',
            data: {
                review: addReview.rows[0]
            }
        });
    } catch (error) {
        console.error(error);
    }
})

// update a restaurant
app.put('/api/v1/restaurants/:id', async (req, res) => {
    try {
        const results = await db.query(`
        UPDATE restaurant SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *`,
            [req.body.name, req.body.location, req.body.price_range, req.params.id])

        // console.log('=====================', results)
        res.status(200).json({
            status: 'OK',
            data: {
                restaurants: results.rows[0]
            }
        });
    } catch (error) {
        console.error(error);
    }
    // console.log(req.params.id)
    // console.log(req.params)
    console.log(req.body);
});


// delete restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {
    try {
        const results = await db.query(`DELETE FROM restaurant WHERE id = $1`, [req.params.id])
        res.status(204).json({
            status: 'OK',
        })
    } catch (error) {
        console.error(error)
    }
});

const port = process.env.PORT || 3009;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});