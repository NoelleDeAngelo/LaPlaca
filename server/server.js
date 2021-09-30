const express = require ('express');
const app = express();
var path = require('path');



app.use(express.static('client'))


app.get('*', (req, res)=>{
  res.sendFile( 'index.html', {root: './client/'} )
})

app.listen(3000, ()=> console.log('listening on 3000'));