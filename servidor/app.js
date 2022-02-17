const express = require('express')
const app = express()
const sequelize = require('./database/db')

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`)

  //Conexion a la base de datos
  sequelize.authenticate().then(()=>{
      console.log('Conexion a la Base de datos Ok')
  }).catch(error =>{
      console.log('Se he producido un error', error)
  })
})