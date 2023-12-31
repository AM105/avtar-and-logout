const express = require('express');
const cors = require('cors');
const router = require('./routes/user');
require('dotenv').config();
       
const app = express();

app.use(cors());
app.use(express.json()); // Replaces bodyParser for JSON parsing

const PORT = 2500;     

app.use('/api', router);       

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});