import express from 'express'
import app from '../src/app.js';

const api = express();

api.get("/", (req, res) => res.send("Express on Vercel"));

api.listen(3000, () => console.log("Server ready on port 3000."));

export default app;