const express = require('express');
const res = require('express/lib/response');
const app = express()
const path = require('path')
var XMLHttpRequest = require('xhr2')

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./pages/coverup.html'))
});

app.get('/hidden', (req,res) => {
    res.sendFile(path.resolve('./pages/index.html'))
})

app.get('/prox-hidden', (req,res) => {
    console.log('a')
    let url = req.query.url
    let xml = new XMLHttpRequest()
    xml.addEventListener('load', () => {
        window.alert('url is loading')
    });
    xml.open('GET', url);
    xml.onloadend = (e) => {
        res.send(xml.response)
        console.log(xml.response)
    }
    xml.send()
})

app.listen(3000, () => {
    console.log('up and running ')
})