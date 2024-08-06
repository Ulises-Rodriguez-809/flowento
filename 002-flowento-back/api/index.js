import express from "express";
import usersRoutes from '../src/routes/userRoutes.js';

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/api/users", usersRoutes);


app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;