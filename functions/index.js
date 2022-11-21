/* eslint-disable require-jsdoc */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const firebaseConfig = {
  apiKey: "AIzaSyAVz0CuXs7dNxV-DIbaC0ed9DDppUH__Vk",
  authDomain: "big-bazar-d807c.firebaseapp.com",
  projectId: "big-bazar-d807c",
  storageBucket: "big-bazar-d807c.appspot.com",
  messagingSenderId: "1040033307870",
  appId: "1:1040033307870:web:9a1c9aca3ffc617707764f",
  measurementId: "G-MYEEYXEC7E",
};
const runtimeOpts = {
  timeoutSeconds: 60,
  memory: "512MB",
};
const express = require("express");
const app = express();
const bazarPrueba = {
  nombre: "Bazar de prueba",
  telefono: "123456789",
  correo: "correo@gmail.com",
  productos: [
    {
      nombre: "Producto de prueba",
      precio: 100,
      status: "disponible",
      color: "rojo",
      talla: "M",
    },
    {
      nombre: "Producto de prueba 2",
      precio: 200,
      status: "en trato",
      color: "azul",
      talla: "L",
    },
    {
      nombre: "Producto de prueba 3",
      precio: 300,
      status: "vendido",
      color: "verde",
      talla: "XL",
    },
  ],
  entregas: {
    "local": true,
    "paqueteria": true,
    "punto medio": true,
  },
};
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // eslint-disable-next-line max-len
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());
admin.initializeApp(firebaseConfig.firebase);
const db = admin.firestore();
const bazaresRef = db.collection("bazar");

async function getBazares() {
  const bazares = [];
  const snapshot = await bazaresRef.get();
  snapshot.forEach((doc) => {
    bazares.push(doc.data());
  });
  return bazares;
}

app.route("/bazares").get(async (req, res) => {
  const bazares = await getBazares();
  res.json(bazares);
});
app.route("/bazares").post(async (req, res) => {
  const bazar = bazarPrueba;
  const id = await addBazar(bazar);
  res.json({id});
});
async function addBazar(bazar) {
  const docRef = await bazaresRef.add(bazar, {merge: true});
  return docRef.id;
}


exports.bazarServices = functions.runWith(runtimeOpts).https.onRequest(app);
