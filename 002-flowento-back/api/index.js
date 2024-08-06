import express from 'express'
// import app from '../src/app.js';

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

// export default app;