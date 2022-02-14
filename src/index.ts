import {Application, Router} from 'express'
import {Request, Response} from 'express'

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Recaptcha = require('express-recaptcha')
const formData = require('form-data')
// Class Mailgun
const Mailgun = require('mailgun.js')
// object mailgun
const mailgun = new Mailgun(formData)

const {check, validationResult} = require('express-validator')

const app = express()

const handleGetRequest = (request: Request, response: Response) => {
    return response.json('this thing is on!')
}


app.use(morgan('dev'))
app.use(express.json())

const indexRoute = express.Router()


indexRoute.route('/')
.get()

app.use('/apis', indexRoute)

app.listen(4200, () => {
    console.log('Express Successfully Built')
})