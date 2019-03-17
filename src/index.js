//requirements (imports)
const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');

//inicializaciones
const app = express();

//pre-configuraciones:

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', expbhs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'),'layouts'),
	partialsDir: path.join(app.get('views'),'partials'),
	extname: '.hbs'
}));

app.set('view engine','.hbs');

app.use(express.urlencoded({extended:false})); //habilitar recepción de datos por formulario
app.use(express.json());	//habilitar recepción de datos por formato json
app.use(require('./routes/index'));	//especificar carpeta de rutas
app.use(express.static(path.join(__dirname,'public')));	//carpeta de archivos estáticos (web)

//Servidor (puerto 3000)
app.listen(3000, () => {
	console.log("\x1b[36m%s\x1b[0m","servidor iniciado - presione ctrl+c para detener todos los procesos_________________________")
  	console.log("\x1b[32m%s\x1b[0m",'-------> listening  on port 3000')
});