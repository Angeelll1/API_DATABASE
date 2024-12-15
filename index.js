const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
dotenv.config();

const port = process.env.PORT;
const app = express();

const authRoute = require('./routes/auth.route');

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  }
)

app.use('/auth', authRoute)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
