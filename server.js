'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const { join } = require('path');
const app = express();

app.use(express.static('src'));
// Servir el index html para cualquier ruta
app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, () => { console.log(`Express server listening on PORT: ${PORT}`); });
