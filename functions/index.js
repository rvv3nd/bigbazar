/* eslint-disable max-len */
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
const bazares = [
  {
    nombre: "all.paka",
    telefono: "5577511502",
    correo: "rvv3nd@gmail.com",
    productos: [
      {
        producto: "🔥CAMISA HAWAIANA 🔥 🔸 CALVIN KLEIN 🔸",
        precio: 140,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H2glbXS.png",
      },
      {
        producto: "🔥 ROMPEVIENTOS 🔥 ▫️WILSON TIE DYE ▫️",
        precio: 200,
        status: "en trato",
        talla: "G",
        img: "https://iili.io/H2glZml.png",
      },
      {
        producto: "🔥 CHAMARRA DEPORTIVA 🔥 🔸UNDER ARMOR🔸",
        precio: 150,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H2glsdG.png",
      },
      {
        producto: "🔥SHORT PIEL DE DURAZNO 🔥 🔸CON TEXTURA CHULA🔸",
        precio: 100,
        status: "disponible",
        talla: "G",
        img: "https://iili.io/H2gEe5b.png",
      },
      {
        producto: "🔥ABRIGO ZARA BASIC🔥",
        precio: 190,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H2glQe4.png",
      },
      {
        producto: "🔥CAPA VINTAGE 🔥 🔸BLUSA+SACO🔸",
        precio: 150,
        status: "disponible",
        talla: "XG",
        img: "https://iili.io/H3TG5Mb.png",
      },
      {
        producto: "🔥VESTIDO FRUTITAS🔥",
        precio: 100,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H3ThycG.png",
      },
      {
        producto: "🔥 CHAMARRA CON BOTONES🔥 🔸ES ANCHA🔸",
        precio: 170,
        status: "disponible",
        talla: "G",
        img: "https://iili.io/H3rpDmu.png",
      },
      {
        producto: "🔥N.W.A🔥 🔸Está rota de los hombros🔸",
        precio: 80,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H3TvIRa.png",
      },
      {
        producto: "🔥 VESTIDO DE STRAPLE 🔥 🔸 TIE DYE (es largo)🔸",
        precio: 150,
        status: "disponible",
        talla: "G",
        img: "https://iili.io/H3T4JHP.png",
      },
    ],
    entregas: {
      "local": false,
      "paqueteria": true,
      "punto medio": true,
    },
    location: {
      "edo": "CDMX",
      "mpo": "",
    },
  },
  {
    nombre: "ropa.melancolica",
    telefono: "221 186 7614",
    correo: "ropa.melancolica@gmail.com",
    productos: [
      {
        producto: "Cardigan de botones a rombos",
        precio: 290,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H2Lqdns.png",
      },
      {
        producto: "Abrigo corte sobrecamisa a cuadros1.",
        precio: 530,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H2sLfYQ.png",
      },
      {
        producto: "Vestido midi campesino",
        precio: 340,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H2LKng2.png",
      },
      {
        producto: "Abrigo corte sobrecamisa a cuadros2.",
        precio: 500,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H2LFa9t.png",
      },
      {
        producto: "MOM & WIDE LEG JEANS",
        precio: 480,
        status: "disponible",
        talla: "Unitalla",
        img: "https://iili.io/H2L2Een.png",
      },
      {
        producto: "Vestido campesino floral",
        precio: 370,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H2Ldxtf.png",
      },
      {
        producto: "Pants jogger",
        precio: 260,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H2LHk5g.png",
      },
      {
        producto: "Chamarra forrada de borreguito",
        precio: 500,
        status: "disponible",
        talla: "Unitalla",
        img: "https://iili.io/H2L9owx.png",
      },
      {
        producto: "Camiseta corta de canalé",
        precio: 220,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H2spige.png",
      },
      {
        producto: "Suéter tejido oversize",
        precio: 330,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H2sLfYQ.png",
      },
    ],
    entregas: {
      "local": false,
      "paqueteria": true,
      "punto medio": false,
    },
    location: {
      "edo": "Puebla",
      "mpo": "Puebla",
    },
  },
  {
    nombre: "bazar__danropa10",
    telefono: "5577511502",
    correo: "bazar__danropa10@gmail.com",
    productos: [
      {
        producto: "Suéter vestido beige",
        precio: 150,
        status: "disponible",
        talla: "L",
        img: "https://iili.io/H2LgFun.png",
      },
      {
        producto: "Gabardina negra con gorro muy cute",
        precio: 250,
        status: "disponible",
        talla: "Largo 104 CM",
        img: "https://iili.io/H2LS1iQ.png",
      },
      {
        producto: "Suéter tejido azul con blanco corto",
        precio: 139,
        status: "disponible",
        talla: "L",
        img: "https://iili.io/H2L8aGp.png",
      },
      {
        producto: "Vestido blanco cute con bolsitas",
        precio: 130,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H2LkooQ.png",
      },
      {
        producto: "Suéter tejido negro cuello de tortura",
        precio: 145,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H2LeH3F.png",
      },
      {
        producto: "Vestido verde militar con abertura en la espalda muy cute",
        precio: 150,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H2LNsxp.png",
      },
      {
        producto: "Body amarilllo muy cute",
        precio: 145,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H2LweFn.png",
      },
      {
        producto: "Mom short",
        precio: 85,
        status: "disponible",
        talla: "G",
        img: "https://iili.io/H2LjRqX.png",
      },
      {
        producto: "Vestido sudadera azul cielo",
        precio: 180,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H2LhFSf.png",
      },
      {
        producto: "SUETER nude",
        precio: 140,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H2LW4rG.png",
      },
    ],
    entregas: {
      "local": true,
      "paqueteria": true,
      "punto medio": false,
    },
    location: {
      "edo": "Puebla",
      "mpo": "",
    },
  },
  {
    nombre: "venture_closet",
    telefono: "5577515102",
    correo: "venture_closet@gmail.com",
    productos: [
      {
        producto: "Suéter Forever 21",
        precio: 120,
        status: "disponible",
        talla: "G",
        img: "https://iili.io/H3TZE4s.png",
      },
      {
        producto: " Pantalón de tela 💖 ",
        precio: 90,
        status: "en trato",
        talla: "G",
        img: "https://iili.io/H3uHn1I.png",
      },
      {
        producto: " Sueter colorido",
        precio: 90,
        status: "vendido",
        talla: "M",
        img: "https://iili.io/H3udDXf.png",
      },
      {
        producto: "Bonita blusa de manga larga",
        precio: 90,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H3uKGkP.png",
      },
      {
        producto: "Blusa de manga corta cactus",
        precio: 90,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H3uq41f.png",
      },
      {
        producto: "Bonito suéter color azul pastel 💙✨",
        precio: 135,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H3ux794.png",
      },
      {
        producto: "Bonito chor a cuadros💖",
        precio: 90,
        status: "disponible",
        talla: "M",
        img: "https://iili.io/H3uIWTQ.png",
      },
      {
        producto: "Sueter verde 💚",
        precio: 120,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H3uAEan.png",
      },
      {
        producto: "Bonito chaléco color amarillo claro ✨✨",
        precio: 90,
        status: "disponible",
        talla: "Ch",
        img: "https://iili.io/H3u7wnR.png",
      },
      {
        producto: "Mom Jean color azul 💙",
        precio: 200,
        status: "vendido",
        talla: "G",
        img: "https://iili.io/H3uaxee.png",
      },
    ],
    entregas: {
      "local": true,
      "paqueteria": true,
      "punto medio": false,
    },
    location: {
      "edo": "Tlaxcala",
      "mpo": "Tlaxcala",
    },
  },
];
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
const pedidosRef = db.collection("pedidos");
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

async function getBazarById(id) {
  const bazar = await bazaresRef.doc(id).get();
  return bazar.data();
}
app.route("/bazares/:id").get(async (req, res) => {
  const bazar = await getBazarById(req.params.id);
  res.json(bazar);
});

async function updateProducto(productoIndex, bazarID) {
  const bazar = await getBazarById(bazarID);
  bazar.productos[productoIndex].status = "en trato";
  const resp = await bazaresRef.doc(bazarID).update(bazar);
  console.log("Producto actualizado");
  return resp;
}
app.route("/update/:bazarID/:productoIndex").post(async (req, res) => {
  const msg = await updateProducto(req.params.productoIndex, req.params.bazarID);
  res.json(msg);
});

async function addBazar(bazar) {
  const docRef = await bazaresRef.add(bazar, {merge: true});
  return docRef.id;
}

async function unirseEspera(bazarID, productoIndex) {
  const bazar = await getBazarById(bazarID);
  const resp = await bazaresRef.doc(bazarID).update(bazar);
  console.log("Usuario agregado a la lista de espera");
  return resp;
}
app.route("/unirseEspera/:bazarID/:productoIndex").post(async (req, res) => {
  const msg = await unirseEspera(req.params.bazarID, req.params.productoIndex);
  res.json(msg);
});

async function crearPedido(idCliente, idProducto) {
  const pedido = {
    idCliente: idCliente,
    idProducto: idProducto,
    status: "pendiente",
  };
  const docRef = await pedidosRef.add(pedido, {merge: true});
  return docRef.id;
}
app.route("/pedido/:idCliente/:idProducto").post(async (req, res) => {
  const msg = await crearPedido(req.params.idCliente, req.params.idProducto);
  res.json(msg);
});

async function getProductos() {
  const productos = [];
  const snapshot = await bazaresRef.get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    doc.data().productos.forEach((producto) => {
      producto.bazarID = doc.id;
      productos.push(producto);
    }
    );
  });
  return productos;
}


app.route("/productos").get(async (req, res) => {
  const productos = await getProductos();
  Promise.resolve(productos).then((productos) => {
    res.send(productos);
  }
  );
});
app.route("/productos/orderByPrice").get(async (req, res) => {
  const productos = await getProductos();
  const productosOrdenadosDeMenorAMayor = productos.sort((a, b) => {
    return a.precio - b.precio;
  });
  res.json(productosOrdenadosDeMenorAMayor);
});

app.route("/productos/orderByLocation/:location").get(async (req, res) => {
  const bazares = await getBazares();
  const productos = [];
  bazares.map((bazar) => {
    if (bazar.location === req.params.location) {
      productos.push(bazar.productos);
    }
  });
  res.json(productos);
});

app.route("/bazar/nuevo").post(async (req, res) => {
  bazares.forEach(async (bazar) => {
    await addBazar(bazar);
  });
  res.send("Bazares agregados");
});

exports.bazarServices = functions.runWith(runtimeOpts).https.onRequest(app);
