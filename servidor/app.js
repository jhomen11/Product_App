const express = require('express')
const app = express()
const sequelize = require('./database/db')

//Puerto servidor
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.use('/api/products', require('./routes/products'))



app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`)

  //Conexion a la base de datos
  sequelize.sync({force: false}).then(()=>{
      console.log('Conexion a la Base de datos Ok')
  }).catch(error =>{
      console.log('Se he producido un error', error)
  })
})