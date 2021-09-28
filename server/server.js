const express = require ('express');
const app = express();


app.use(express.static('client'))


app.get('/', (req, res)=>{
  res.render('../client/dist.bundle.js')
})

app.listen(3000, ()=> console.log('listening on 3000'));