const express = require('express');
const app = express();
const porta = 3000;

app.use(express.static('public'));
app.set('view  engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render("index.ejs")
})
app.get('/noticias', function(req, res) {
  res.render("noticias/noticia.ejs")
})
app.get('/noticias/01', function(req, res) {
  res.render("noticias/noticiadestaque.ejs")
})

app.listen(porta, () => {
  console.log('O servidor está funcionando');
})



