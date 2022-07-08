//XML HTTP Request

// const { default: fetch } = require("node-fetch");

import fetch from 'node-fetch'

function success() {
    let data = JSON.parse(this.responseText)
    console.log(data);
    let title = data.title
    console.log(title);
    userWork = title
}

function error() {
    console.log('Request Failed', err);
}

let xhr = new XMLHttpRequest()
xhr.onload = success
xhr.onerror = error

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send()

let userWork;

//FETCH!!!!!!!!!

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log(data.title);
        userWork = data.title
    })

console.log(userWork);

function gettingThings(url) {
    return fetch(url)
        .then(response => response.json())
}

function gettingTitle(whichID) {
    return gettingThings(`https://jsonplaceholder.typicode.com/posts/${whichID}`)
}



