const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51KdRIeSCSMFiGpZKEUMX0lHMkrqgkyMRvp83JVLQSNMNHvychmDGEuyb5Rn5u4BvxVFeFjuIe94ffNnZZp3L7Vjy002vSbEFah'
)

// API

// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', (request, response) => {
  const total = request.query.total

  console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

  stripe.paymentIntents
    .create({
      amount: total, // subunits of the currency
      currency: 'inr',
    })
    .then((paymentIntent) => {
      // OK - Created
      console.log(paymentIntent)
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      })
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)
//http://localhost:5001/clone-2a4e6/us-central1/api
