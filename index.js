// import express
let express = require('express');

// inisialisasi 
let app = express();

// import routes
let apiRoutes = require("./api-routes");
let dataSiswaRoutes = require("./DataSiswa");

// setup server port
var port = process.env.PORT || 8080;

// kirim pesan ke URL
app.get('/', (req, res) => res.send('Selamat Datang Di Data Center Siswa Indonesia'));

// app Routes
app.use('/api', apiRoutes);
app.use('/DataSiswa', dataSiswaRoutes);

// listen url on port
app.listen(port, function () {
    console.log("Running Resthub on port " + port);
})