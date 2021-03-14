module.exports = (app) => {

  // hay que hacer un archivo por cada entidad y requerirlo asi
  app.use("/api/materiales", require("./materialesRoutes.js"))
}