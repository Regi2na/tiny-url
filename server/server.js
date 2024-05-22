require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tinyUrlRoutes = require('./app/routes/tinyUrlRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/tinyurl', tinyUrlRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});