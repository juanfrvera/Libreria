const express = require("express")
const app = express()


// settings
app.set("appName", "Libreria Server")
app.set("port", 3001)

// esto porque jode CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Allow', 'GET, POST, PUT, DELETE');
  next();
});


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next)=> {
  console.log(`${req.method}://${req.get('host')}${req.originalUrl}`)
  next()
})

// por si tenemos que servir archivos estaticos luego
app.use(express.static("public"))


// routes
require("./routes/routes.js")(app)


app.listen(app.get("port"), ()=> {
  console.log("listening on port", app.get("port"))
})