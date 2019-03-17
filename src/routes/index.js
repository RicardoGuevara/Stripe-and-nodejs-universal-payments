const { Router } = require('express');
const router = Router();

//configración de respuestas al detectar una petición get (ruta de la petición, función)
router.get('/',(req,res) => {
	res.render('index');
});

module.exports = router;