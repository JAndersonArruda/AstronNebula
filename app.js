import express from "express";
import router from "./routes/index.js";
import startDrawing from "./src/util/start.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 2900;

app.use('/', router);

app.listen(port, () => {
    const protocol = 'http';
    const host = 'localhost';

    startDrawing(protocol, host, port);
});
