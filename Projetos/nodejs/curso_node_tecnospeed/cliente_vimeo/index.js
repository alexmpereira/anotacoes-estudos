const express = require("express")
const formidable = require("formidable")
const app = express()
const path = require('path')

let Vimeo = require('vimeo').Vimeo;
const client_id = 'ec5f43da344095f531fa28eb8c15d4472178a092';
const client_secret = '1caLbraiSkPH6m4gVTxaG7xMINqhd2kDGw7P/DyyvjPDH8tV1mOYLsV3GOetcBc7vIzaK0va9HjinUU5JOsvYmMP4BzMrGhPJ6JUWJPdb+S6xSX1fGYxyTRNjUddAhUL';
const access_token = '8f99c8b366881edadd9a00c518b99ae4';
let client = new Vimeo(client_id, client_secret, access_token);

function uploadToVimeo(file_name) {
    client.upload(
    file_name,
    {
        'name': 'Untitled',
        'description': 'The description goes here.'
    },
    function (uri) {
        console.log('Your video URI is: ' + uri);
    },
    function (bytes_uploaded, bytes_total) {
        var percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
        console.log(bytes_uploaded, bytes_total, percentage + '%')
    },
    function (error) {
        console.log('Failed because: ' + error)
    }
    )
}

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "formulario.html"))
});
  
app.post('/vimeo', function(req, res) {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
    console.log(files.file_name.name)
    res.send(files.file_name.name);
    uploadToVimeo(__dirname + "/" + files.file_name.name);
    }); 
});

app.get('/vimeo', function(req, res) {
    res.send(__dirname + "a/" + req.query.file_name);
    uploadToVimeo(__dirname + "/" + req.query.file_name);
});

app.listen("3000")