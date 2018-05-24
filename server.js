import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import App from './src/App'

global.React = React

const html = renderToString(<App/>)

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

const sendHTMLPage = (req, res) =>
    res.status(200).send(`
<!DOCTYPE html>
<html>
    <head>
        <title>React Recipes App</title>
    </head>
    <body>
        <div id="react-container">${html}</div>
    </body>
</html>
    `)

const app = express()
    .use(logger)
    .use(express.static('./src/stylesheets'))
    .use(sendHTMLPage)

app.listen(3000, () =>
    console.log(`Recipe app running at 'http://localhost:3000'`)
)
