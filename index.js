const express = require('express');
const res = require('express/lib/response');
const app = express()
const path = require('path')
var axios = require('axios')
const jsonc = require('jsonc')

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./pages/coverup.html'))
});

app.get('/hidden', (req,res) => {
    res.sendFile(path.resolve('./pages/index.html'))
})

app.get('/prox-hidden', (req,res) => {
    console.log('a')
    const url = req.query.url
    console.log(url)
    axios.get(url)
    .then(response => {
        console.log(response.data);
        res.render(response.data)
      })
    .catch(error => (resp => {
        console.log(resp)
    }))

    /*
    DEPRACATED (Doesn't work either lol)
    let xml = new XMLHttpRequest()s
    xml.addEventListener('load', () => {
        window.alert('url is loading')
    });
    xml.open('GET', url);
    xml.onloadend = (e) => {
        res.send(xml.response)
        console.log(xml.response)
    }
    xml.send()
    */
})

app.get('/eaglecraft-notice', (req,res) => {
    
    res.sendFile(path.resolve('util/other/games/eaglercraft/e.html'))
})

app.get('/play-na1-ecraft', (req,res) => {
    res.sendFile('./util/other/games/eaglercraft/game.html')
})

app.listen(3000, () => {
    console.log('up and running ')
})