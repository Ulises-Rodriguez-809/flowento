import express from 'express';
import { options } from './config/config.js'
import cors from 'cors';
import __dirname from './utils.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import evnetRoutes from './routes/eventRoutes.js';
import qrRoutes from './routes/qrRoutes.js';

// indicamos en el puerto que queremos q corra el server (puede ser cualquier numero q no este ocupad)
const PORT = options.PORT || 8080;

// inicializamos express
const app = express();

const whitelist = [
    "http://localhost:5173",
    "https://c19-24-m-react.onrender.com",
    "http://localhost:8080", 
    "https://flowento-back.vercel.app/",/** other domains if any */,
];
const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.use(cors(corsOptions));

// app.use(function (req, res, next) {
//     // res.header("Access-Control-Allow-Origin", "*");
//     const allowedOrigins = ['http://localhost:5173', 'http://flowento.vercel.app/', 'https://flowento.vercel.app/'];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//         res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header("Access-Control-Allow-credentials", true);
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
//     next();
// });

app.use(express.static(__dirname + "/public"));

// middlewares para trasnformar el req.body a un json (lo que llega en el body desde el front en un json), esto es necesario xq sino cuando desde el front te mandan algo en el body de fetch por ejem en el back cuando queres acceder al body (esto con req.body ejem mas abajo) te llega como undefined
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(options.COOKIE_PARSER_WORD, {}));

// rutas:
app.get("/asd",(req,res)=>{
    res.send("hola")
})
// app.use("/auth", authRoutes);
// app.use("/users", usersRoutes);
// app.use("/admin", adminRoutes);
// app.use("/events", evnetRoutes);
// app.use("/qr", qrRoutes);


const server = app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}, iniciando express en http://localhost:${PORT}/`);
});

export default app;