const express = require('express')
const app = express();
const hbs = require('hbs');
const puerto = 80;

app.use( express.static( __dirname + '/views'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');

//HBS Helpers
hbs.registerHelper('getDate', () => {
   let dia = new Date().getDate();
   let mes = new Date().getMonth() + 1;
   let anio =  new Date().getFullYear();

   return `${dia}/${mes}/${anio}`

});

app.get('/', (req, res) => {
    res.render('index', {
        // var1: '',
        // var2: ''
    });

})

// app.get('/data', (req, res) => {
    
//       let salida = {
//           nombre: 'simon',
//           apellido: 'ramos',
//           edad: 23, 
//           url: req.urlÑ
//       }
//       res.send(salida);
  
//   })
 

app.listen(puerto, () => {
    console.log(`Webserver online @ ${puerto} \u2611`);
});