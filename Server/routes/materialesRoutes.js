const router = require("express").Router()

// datos falsos
let db = [
  {titulo: "El Capital", id:1},
  {titulo: "El Hopaness Romtic", id:2},
  {titulo: "Diario de una Geisha", id:3},
  {titulo: "Una Geisha en capital Federal", id:4}
]

// api/materiales/?titulo=:titulo
router.get("/", (req,res)=> {

  // obtiene el parametro titulo
  let queryTitle = req.query.titulo.toUpperCase()

  // devuelve el dato falso
  res.json(db.filter(x => x.titulo.toUpperCase().includes(queryTitle)))
})

router.get("/:id", (req,res)=> {

  // devuelve el dato falso
  res.json(db.filter(x => x.id == id))
})

module.exports = router