
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(cors(
    {
        origin: ["https://contract-farming-application-zdbu66fca-tikam-s-projects.vercel.app/"],
        methods: ["POST" , "GET", "PUT", "DELETE"],
        credentials: true,
    }
));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({extended: false}));


app.use(cors({
    origin: 'http://localhost:5173'
}));
require("./config/database").connect();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const routes = require("./routes/route");
app.use("", routes);

app.listen(PORT, () =>{
    console.log(`App is listening at ${PORT}`)
});

