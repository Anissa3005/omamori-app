const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

const controllerUser = require("./controller/user");
const controllerOmamori = require("./controller/omamori");

const allowedOrigins = [
  "http://localhost:3000",
  "https://front-end-omamori.onrender.com/",
];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

app.use(express.static("public"));
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://front-end-omamori.onrender.com/",
    ],
  })
);

app.listen(PORT, () => {
  console.log(`Listen to port ${PORT}`);
});

// ROUTES
app.post("/login", cors(), controllerUser.getUser);
app.post("/signup", cors(), controllerUser.createUser);

app.post("/upload", cors(), controllerOmamori.createOmamori);
app.get("/omamori", cors(), controllerOmamori.getOmamori);
